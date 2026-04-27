import * as Y from 'yjs';
import * as syncProtocol from 'y-protocols/sync';
import * as awarenessProtocol from 'y-protocols/awareness';
import * as encoding from 'lib0/encoding';
import * as decoding from 'lib0/decoding';
import { WebSocket } from 'ws';

const messageSync = 0;
const messageAwareness = 1;

const docs = new Map<string, Y.Doc>();

export const setupWSConnection = (ws: any, req: any, { docName, gc = true }: { docName: string, gc?: boolean }) => {
  ws.binaryType = 'arraybuffer';
  
  let doc = docs.get(docName);
  if (!doc) {
    doc = new Y.Doc({ gc });
    docs.set(docName, doc);
  }

  const awareness = new awarenessProtocol.Awareness(doc);

  const send = (ws: any, payload: Uint8Array) => {
    if (ws.readyState !== WebSocket.CONNECTING && ws.readyState !== WebSocket.OPEN) {
      ws.close();
      return;
    }
    try {
      ws.send(payload, (err: any) => {
        if (err) ws.close();
      });
    } catch (e) {
      ws.close();
    }
  };

  ws.on('message', (message: ArrayBuffer) => {
    const decoder = decoding.createDecoder(new Uint8Array(message));
    const encoder = encoding.createEncoder();
    const messageType = decoding.readVarUint(decoder);

    switch (messageType) {
      case messageSync:
        encoding.writeVarUint(encoder, messageSync);
        syncProtocol.readSyncMessage(decoder, encoder, doc!, null);
        if (encoding.length(encoder) > 1) {
          send(ws, encoding.toUint8Array(encoder));
        }
        break;
      case messageAwareness:
        awarenessProtocol.applyAwarenessUpdate(awareness, decoding.readVarUint8Array(decoder), ws);
        break;
    }
  });

  awareness.on('update', ({ added, updated, removed }: any) => {
    const changedClients = added.concat(updated).concat(removed);
    const encoder = encoding.createEncoder();
    encoding.writeVarUint(encoder, messageAwareness);
    encoding.writeVarUint8Array(encoder, awarenessProtocol.encodeAwarenessUpdate(awareness, changedClients));
    send(ws, encoding.toUint8Array(encoder));
  });

  // Init sync
  const encoder = encoding.createEncoder();
  encoding.writeVarUint(encoder, messageSync);
  syncProtocol.writeSyncStep1(encoder, doc);
  send(ws, encoding.toUint8Array(encoder));

  // Init awareness
  const awarenessStates = awareness.getStates();
  if (awarenessStates.size > 0) {
    const encoder = encoding.createEncoder();
    encoding.writeVarUint(encoder, messageAwareness);
    encoding.writeVarUint8Array(encoder, awarenessProtocol.encodeAwarenessUpdate(awareness, Array.from(awarenessStates.keys())));
    send(ws, encoding.toUint8Array(encoder));
  }
};
