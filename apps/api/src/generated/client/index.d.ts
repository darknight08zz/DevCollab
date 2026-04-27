
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Workspace
 * 
 */
export type Workspace = $Result.DefaultSelection<Prisma.$WorkspacePayload>
/**
 * Model WorkspaceMember
 * 
 */
export type WorkspaceMember = $Result.DefaultSelection<Prisma.$WorkspaceMemberPayload>
/**
 * Model Repository
 * 
 */
export type Repository = $Result.DefaultSelection<Prisma.$RepositoryPayload>
/**
 * Model PullRequest
 * 
 */
export type PullRequest = $Result.DefaultSelection<Prisma.$PullRequestPayload>
/**
 * Model SecurityFinding
 * 
 */
export type SecurityFinding = $Result.DefaultSelection<Prisma.$SecurityFindingPayload>
/**
 * Model ReviewSession
 * 
 */
export type ReviewSession = $Result.DefaultSelection<Prisma.$ReviewSessionPayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model WorkspaceSlackConfig
 * 
 */
export type WorkspaceSlackConfig = $Result.DefaultSelection<Prisma.$WorkspaceSlackConfigPayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Plan: {
  FREE: 'FREE',
  PRO: 'PRO',
  TEAM: 'TEAM',
  ENTERPRISE: 'ENTERPRISE'
};

export type Plan = (typeof Plan)[keyof typeof Plan]


export const MemberRole: {
  OWNER: 'OWNER',
  ADMIN: 'ADMIN',
  REVIEWER: 'REVIEWER',
  VIEWER: 'VIEWER'
};

export type MemberRole = (typeof MemberRole)[keyof typeof MemberRole]


export const PRStatus: {
  OPEN: 'OPEN',
  CLOSED: 'CLOSED',
  MERGED: 'MERGED'
};

export type PRStatus = (typeof PRStatus)[keyof typeof PRStatus]

}

export type Plan = $Enums.Plan

export const Plan: typeof $Enums.Plan

export type MemberRole = $Enums.MemberRole

export const MemberRole: typeof $Enums.MemberRole

export type PRStatus = $Enums.PRStatus

export const PRStatus: typeof $Enums.PRStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workspace`: Exposes CRUD operations for the **Workspace** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workspaces
    * const workspaces = await prisma.workspace.findMany()
    * ```
    */
  get workspace(): Prisma.WorkspaceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workspaceMember`: Exposes CRUD operations for the **WorkspaceMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkspaceMembers
    * const workspaceMembers = await prisma.workspaceMember.findMany()
    * ```
    */
  get workspaceMember(): Prisma.WorkspaceMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.repository`: Exposes CRUD operations for the **Repository** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Repositories
    * const repositories = await prisma.repository.findMany()
    * ```
    */
  get repository(): Prisma.RepositoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pullRequest`: Exposes CRUD operations for the **PullRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PullRequests
    * const pullRequests = await prisma.pullRequest.findMany()
    * ```
    */
  get pullRequest(): Prisma.PullRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.securityFinding`: Exposes CRUD operations for the **SecurityFinding** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SecurityFindings
    * const securityFindings = await prisma.securityFinding.findMany()
    * ```
    */
  get securityFinding(): Prisma.SecurityFindingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviewSession`: Exposes CRUD operations for the **ReviewSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReviewSessions
    * const reviewSessions = await prisma.reviewSession.findMany()
    * ```
    */
  get reviewSession(): Prisma.ReviewSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workspaceSlackConfig`: Exposes CRUD operations for the **WorkspaceSlackConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkspaceSlackConfigs
    * const workspaceSlackConfigs = await prisma.workspaceSlackConfig.findMany()
    * ```
    */
  get workspaceSlackConfig(): Prisma.WorkspaceSlackConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Workspace: 'Workspace',
    WorkspaceMember: 'WorkspaceMember',
    Repository: 'Repository',
    PullRequest: 'PullRequest',
    SecurityFinding: 'SecurityFinding',
    ReviewSession: 'ReviewSession',
    Comment: 'Comment',
    Subscription: 'Subscription',
    Notification: 'Notification',
    WorkspaceSlackConfig: 'WorkspaceSlackConfig',
    AuditLog: 'AuditLog'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "workspace" | "workspaceMember" | "repository" | "pullRequest" | "securityFinding" | "reviewSession" | "comment" | "subscription" | "notification" | "workspaceSlackConfig" | "auditLog"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Workspace: {
        payload: Prisma.$WorkspacePayload<ExtArgs>
        fields: Prisma.WorkspaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkspaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkspaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          findFirst: {
            args: Prisma.WorkspaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkspaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          findMany: {
            args: Prisma.WorkspaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>[]
          }
          create: {
            args: Prisma.WorkspaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          createMany: {
            args: Prisma.WorkspaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkspaceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>[]
          }
          delete: {
            args: Prisma.WorkspaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          update: {
            args: Prisma.WorkspaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          deleteMany: {
            args: Prisma.WorkspaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkspaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkspaceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>[]
          }
          upsert: {
            args: Prisma.WorkspaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          aggregate: {
            args: Prisma.WorkspaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkspace>
          }
          groupBy: {
            args: Prisma.WorkspaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkspaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkspaceCountArgs<ExtArgs>
            result: $Utils.Optional<WorkspaceCountAggregateOutputType> | number
          }
        }
      }
      WorkspaceMember: {
        payload: Prisma.$WorkspaceMemberPayload<ExtArgs>
        fields: Prisma.WorkspaceMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkspaceMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkspaceMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceMemberPayload>
          }
          findFirst: {
            args: Prisma.WorkspaceMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkspaceMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceMemberPayload>
          }
          findMany: {
            args: Prisma.WorkspaceMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceMemberPayload>[]
          }
          create: {
            args: Prisma.WorkspaceMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceMemberPayload>
          }
          createMany: {
            args: Prisma.WorkspaceMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkspaceMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceMemberPayload>[]
          }
          delete: {
            args: Prisma.WorkspaceMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceMemberPayload>
          }
          update: {
            args: Prisma.WorkspaceMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceMemberPayload>
          }
          deleteMany: {
            args: Prisma.WorkspaceMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkspaceMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkspaceMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceMemberPayload>[]
          }
          upsert: {
            args: Prisma.WorkspaceMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceMemberPayload>
          }
          aggregate: {
            args: Prisma.WorkspaceMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkspaceMember>
          }
          groupBy: {
            args: Prisma.WorkspaceMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkspaceMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkspaceMemberCountArgs<ExtArgs>
            result: $Utils.Optional<WorkspaceMemberCountAggregateOutputType> | number
          }
        }
      }
      Repository: {
        payload: Prisma.$RepositoryPayload<ExtArgs>
        fields: Prisma.RepositoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RepositoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RepositoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          findFirst: {
            args: Prisma.RepositoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RepositoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          findMany: {
            args: Prisma.RepositoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>[]
          }
          create: {
            args: Prisma.RepositoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          createMany: {
            args: Prisma.RepositoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RepositoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>[]
          }
          delete: {
            args: Prisma.RepositoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          update: {
            args: Prisma.RepositoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          deleteMany: {
            args: Prisma.RepositoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RepositoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RepositoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>[]
          }
          upsert: {
            args: Prisma.RepositoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RepositoryPayload>
          }
          aggregate: {
            args: Prisma.RepositoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRepository>
          }
          groupBy: {
            args: Prisma.RepositoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<RepositoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.RepositoryCountArgs<ExtArgs>
            result: $Utils.Optional<RepositoryCountAggregateOutputType> | number
          }
        }
      }
      PullRequest: {
        payload: Prisma.$PullRequestPayload<ExtArgs>
        fields: Prisma.PullRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PullRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PullRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestPayload>
          }
          findFirst: {
            args: Prisma.PullRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PullRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestPayload>
          }
          findMany: {
            args: Prisma.PullRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestPayload>[]
          }
          create: {
            args: Prisma.PullRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestPayload>
          }
          createMany: {
            args: Prisma.PullRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PullRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestPayload>[]
          }
          delete: {
            args: Prisma.PullRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestPayload>
          }
          update: {
            args: Prisma.PullRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestPayload>
          }
          deleteMany: {
            args: Prisma.PullRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PullRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PullRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestPayload>[]
          }
          upsert: {
            args: Prisma.PullRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PullRequestPayload>
          }
          aggregate: {
            args: Prisma.PullRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePullRequest>
          }
          groupBy: {
            args: Prisma.PullRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<PullRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.PullRequestCountArgs<ExtArgs>
            result: $Utils.Optional<PullRequestCountAggregateOutputType> | number
          }
        }
      }
      SecurityFinding: {
        payload: Prisma.$SecurityFindingPayload<ExtArgs>
        fields: Prisma.SecurityFindingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SecurityFindingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityFindingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SecurityFindingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityFindingPayload>
          }
          findFirst: {
            args: Prisma.SecurityFindingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityFindingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SecurityFindingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityFindingPayload>
          }
          findMany: {
            args: Prisma.SecurityFindingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityFindingPayload>[]
          }
          create: {
            args: Prisma.SecurityFindingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityFindingPayload>
          }
          createMany: {
            args: Prisma.SecurityFindingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SecurityFindingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityFindingPayload>[]
          }
          delete: {
            args: Prisma.SecurityFindingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityFindingPayload>
          }
          update: {
            args: Prisma.SecurityFindingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityFindingPayload>
          }
          deleteMany: {
            args: Prisma.SecurityFindingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SecurityFindingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SecurityFindingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityFindingPayload>[]
          }
          upsert: {
            args: Prisma.SecurityFindingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecurityFindingPayload>
          }
          aggregate: {
            args: Prisma.SecurityFindingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSecurityFinding>
          }
          groupBy: {
            args: Prisma.SecurityFindingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SecurityFindingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SecurityFindingCountArgs<ExtArgs>
            result: $Utils.Optional<SecurityFindingCountAggregateOutputType> | number
          }
        }
      }
      ReviewSession: {
        payload: Prisma.$ReviewSessionPayload<ExtArgs>
        fields: Prisma.ReviewSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewSessionPayload>
          }
          findFirst: {
            args: Prisma.ReviewSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewSessionPayload>
          }
          findMany: {
            args: Prisma.ReviewSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewSessionPayload>[]
          }
          create: {
            args: Prisma.ReviewSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewSessionPayload>
          }
          createMany: {
            args: Prisma.ReviewSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewSessionPayload>[]
          }
          delete: {
            args: Prisma.ReviewSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewSessionPayload>
          }
          update: {
            args: Prisma.ReviewSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewSessionPayload>
          }
          deleteMany: {
            args: Prisma.ReviewSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewSessionPayload>[]
          }
          upsert: {
            args: Prisma.ReviewSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewSessionPayload>
          }
          aggregate: {
            args: Prisma.ReviewSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviewSession>
          }
          groupBy: {
            args: Prisma.ReviewSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewSessionCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewSessionCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      WorkspaceSlackConfig: {
        payload: Prisma.$WorkspaceSlackConfigPayload<ExtArgs>
        fields: Prisma.WorkspaceSlackConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkspaceSlackConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceSlackConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkspaceSlackConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceSlackConfigPayload>
          }
          findFirst: {
            args: Prisma.WorkspaceSlackConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceSlackConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkspaceSlackConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceSlackConfigPayload>
          }
          findMany: {
            args: Prisma.WorkspaceSlackConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceSlackConfigPayload>[]
          }
          create: {
            args: Prisma.WorkspaceSlackConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceSlackConfigPayload>
          }
          createMany: {
            args: Prisma.WorkspaceSlackConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkspaceSlackConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceSlackConfigPayload>[]
          }
          delete: {
            args: Prisma.WorkspaceSlackConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceSlackConfigPayload>
          }
          update: {
            args: Prisma.WorkspaceSlackConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceSlackConfigPayload>
          }
          deleteMany: {
            args: Prisma.WorkspaceSlackConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkspaceSlackConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkspaceSlackConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceSlackConfigPayload>[]
          }
          upsert: {
            args: Prisma.WorkspaceSlackConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspaceSlackConfigPayload>
          }
          aggregate: {
            args: Prisma.WorkspaceSlackConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkspaceSlackConfig>
          }
          groupBy: {
            args: Prisma.WorkspaceSlackConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkspaceSlackConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkspaceSlackConfigCountArgs<ExtArgs>
            result: $Utils.Optional<WorkspaceSlackConfigCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    workspace?: WorkspaceOmit
    workspaceMember?: WorkspaceMemberOmit
    repository?: RepositoryOmit
    pullRequest?: PullRequestOmit
    securityFinding?: SecurityFindingOmit
    reviewSession?: ReviewSessionOmit
    comment?: CommentOmit
    subscription?: SubscriptionOmit
    notification?: NotificationOmit
    workspaceSlackConfig?: WorkspaceSlackConfigOmit
    auditLog?: AuditLogOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    ownedWorkspaces: number
    memberships: number
    pullRequests: number
    reviewSessions: number
    comments: number
    notifications: number
    assignedPRs: number
    auditLogs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownedWorkspaces?: boolean | UserCountOutputTypeCountOwnedWorkspacesArgs
    memberships?: boolean | UserCountOutputTypeCountMembershipsArgs
    pullRequests?: boolean | UserCountOutputTypeCountPullRequestsArgs
    reviewSessions?: boolean | UserCountOutputTypeCountReviewSessionsArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    assignedPRs?: boolean | UserCountOutputTypeCountAssignedPRsArgs
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOwnedWorkspacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkspaceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMembershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkspaceMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPullRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PullRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewSessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignedPRsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PullRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }


  /**
   * Count Type WorkspaceCountOutputType
   */

  export type WorkspaceCountOutputType = {
    members: number
    repositories: number
    auditLogs: number
  }

  export type WorkspaceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | WorkspaceCountOutputTypeCountMembersArgs
    repositories?: boolean | WorkspaceCountOutputTypeCountRepositoriesArgs
    auditLogs?: boolean | WorkspaceCountOutputTypeCountAuditLogsArgs
  }

  // Custom InputTypes
  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceCountOutputType
     */
    select?: WorkspaceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkspaceMemberWhereInput
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountRepositoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepositoryWhereInput
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }


  /**
   * Count Type RepositoryCountOutputType
   */

  export type RepositoryCountOutputType = {
    pullRequests: number
  }

  export type RepositoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pullRequests?: boolean | RepositoryCountOutputTypeCountPullRequestsArgs
  }

  // Custom InputTypes
  /**
   * RepositoryCountOutputType without action
   */
  export type RepositoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RepositoryCountOutputType
     */
    select?: RepositoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RepositoryCountOutputType without action
   */
  export type RepositoryCountOutputTypeCountPullRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PullRequestWhereInput
  }


  /**
   * Count Type PullRequestCountOutputType
   */

  export type PullRequestCountOutputType = {
    reviewSessions: number
    securityFindings: number
  }

  export type PullRequestCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviewSessions?: boolean | PullRequestCountOutputTypeCountReviewSessionsArgs
    securityFindings?: boolean | PullRequestCountOutputTypeCountSecurityFindingsArgs
  }

  // Custom InputTypes
  /**
   * PullRequestCountOutputType without action
   */
  export type PullRequestCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequestCountOutputType
     */
    select?: PullRequestCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PullRequestCountOutputType without action
   */
  export type PullRequestCountOutputTypeCountReviewSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewSessionWhereInput
  }

  /**
   * PullRequestCountOutputType without action
   */
  export type PullRequestCountOutputTypeCountSecurityFindingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SecurityFindingWhereInput
  }


  /**
   * Count Type ReviewSessionCountOutputType
   */

  export type ReviewSessionCountOutputType = {
    comments: number
  }

  export type ReviewSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    comments?: boolean | ReviewSessionCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes
  /**
   * ReviewSessionCountOutputType without action
   */
  export type ReviewSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewSessionCountOutputType
     */
    select?: ReviewSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReviewSessionCountOutputType without action
   */
  export type ReviewSessionCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Count Type CommentCountOutputType
   */

  export type CommentCountOutputType = {
    replies: number
  }

  export type CommentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    replies?: boolean | CommentCountOutputTypeCountRepliesArgs
  }

  // Custom InputTypes
  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CommentCountOutputType
     */
    select?: CommentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CommentCountOutputType without action
   */
  export type CommentCountOutputTypeCountRepliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    avatarUrl: string | null
    githubId: string | null
    githubUsername: string | null
    githubAccessToken: string | null
    createdAt: Date | null
    emailNotificationsEnabled: boolean | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    avatarUrl: string | null
    githubId: string | null
    githubUsername: string | null
    githubAccessToken: string | null
    createdAt: Date | null
    emailNotificationsEnabled: boolean | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    avatarUrl: number
    githubId: number
    githubUsername: number
    githubAccessToken: number
    createdAt: number
    emailNotificationsEnabled: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    avatarUrl?: true
    githubId?: true
    githubUsername?: true
    githubAccessToken?: true
    createdAt?: true
    emailNotificationsEnabled?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    avatarUrl?: true
    githubId?: true
    githubUsername?: true
    githubAccessToken?: true
    createdAt?: true
    emailNotificationsEnabled?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    avatarUrl?: true
    githubId?: true
    githubUsername?: true
    githubAccessToken?: true
    createdAt?: true
    emailNotificationsEnabled?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    avatarUrl: string | null
    githubId: string | null
    githubUsername: string | null
    githubAccessToken: string | null
    createdAt: Date
    emailNotificationsEnabled: boolean
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    avatarUrl?: boolean
    githubId?: boolean
    githubUsername?: boolean
    githubAccessToken?: boolean
    createdAt?: boolean
    emailNotificationsEnabled?: boolean
    updatedAt?: boolean
    ownedWorkspaces?: boolean | User$ownedWorkspacesArgs<ExtArgs>
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    pullRequests?: boolean | User$pullRequestsArgs<ExtArgs>
    reviewSessions?: boolean | User$reviewSessionsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    assignedPRs?: boolean | User$assignedPRsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    avatarUrl?: boolean
    githubId?: boolean
    githubUsername?: boolean
    githubAccessToken?: boolean
    createdAt?: boolean
    emailNotificationsEnabled?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    avatarUrl?: boolean
    githubId?: boolean
    githubUsername?: boolean
    githubAccessToken?: boolean
    createdAt?: boolean
    emailNotificationsEnabled?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    avatarUrl?: boolean
    githubId?: boolean
    githubUsername?: boolean
    githubAccessToken?: boolean
    createdAt?: boolean
    emailNotificationsEnabled?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "avatarUrl" | "githubId" | "githubUsername" | "githubAccessToken" | "createdAt" | "emailNotificationsEnabled" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ownedWorkspaces?: boolean | User$ownedWorkspacesArgs<ExtArgs>
    memberships?: boolean | User$membershipsArgs<ExtArgs>
    pullRequests?: boolean | User$pullRequestsArgs<ExtArgs>
    reviewSessions?: boolean | User$reviewSessionsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    assignedPRs?: boolean | User$assignedPRsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      ownedWorkspaces: Prisma.$WorkspacePayload<ExtArgs>[]
      memberships: Prisma.$WorkspaceMemberPayload<ExtArgs>[]
      pullRequests: Prisma.$PullRequestPayload<ExtArgs>[]
      reviewSessions: Prisma.$ReviewSessionPayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      assignedPRs: Prisma.$PullRequestPayload<ExtArgs>[]
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      avatarUrl: string | null
      githubId: string | null
      githubUsername: string | null
      githubAccessToken: string | null
      createdAt: Date
      emailNotificationsEnabled: boolean
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ownedWorkspaces<T extends User$ownedWorkspacesArgs<ExtArgs> = {}>(args?: Subset<T, User$ownedWorkspacesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    memberships<T extends User$membershipsArgs<ExtArgs> = {}>(args?: Subset<T, User$membershipsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspaceMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    pullRequests<T extends User$pullRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$pullRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewSessions<T extends User$reviewSessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignedPRs<T extends User$assignedPRsArgs<ExtArgs> = {}>(args?: Subset<T, User$assignedPRsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditLogs<T extends User$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly githubId: FieldRef<"User", 'String'>
    readonly githubUsername: FieldRef<"User", 'String'>
    readonly githubAccessToken: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly emailNotificationsEnabled: FieldRef<"User", 'Boolean'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.ownedWorkspaces
   */
  export type User$ownedWorkspacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    where?: WorkspaceWhereInput
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    cursor?: WorkspaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * User.memberships
   */
  export type User$membershipsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceMember
     */
    select?: WorkspaceMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceMember
     */
    omit?: WorkspaceMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceMemberInclude<ExtArgs> | null
    where?: WorkspaceMemberWhereInput
    orderBy?: WorkspaceMemberOrderByWithRelationInput | WorkspaceMemberOrderByWithRelationInput[]
    cursor?: WorkspaceMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkspaceMemberScalarFieldEnum | WorkspaceMemberScalarFieldEnum[]
  }

  /**
   * User.pullRequests
   */
  export type User$pullRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequest
     */
    omit?: PullRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestInclude<ExtArgs> | null
    where?: PullRequestWhereInput
    orderBy?: PullRequestOrderByWithRelationInput | PullRequestOrderByWithRelationInput[]
    cursor?: PullRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PullRequestScalarFieldEnum | PullRequestScalarFieldEnum[]
  }

  /**
   * User.reviewSessions
   */
  export type User$reviewSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewSession
     */
    select?: ReviewSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewSession
     */
    omit?: ReviewSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewSessionInclude<ExtArgs> | null
    where?: ReviewSessionWhereInput
    orderBy?: ReviewSessionOrderByWithRelationInput | ReviewSessionOrderByWithRelationInput[]
    cursor?: ReviewSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewSessionScalarFieldEnum | ReviewSessionScalarFieldEnum[]
  }

  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.assignedPRs
   */
  export type User$assignedPRsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequest
     */
    omit?: PullRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestInclude<ExtArgs> | null
    where?: PullRequestWhereInput
    orderBy?: PullRequestOrderByWithRelationInput | PullRequestOrderByWithRelationInput[]
    cursor?: PullRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PullRequestScalarFieldEnum | PullRequestScalarFieldEnum[]
  }

  /**
   * User.auditLogs
   */
  export type User$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Workspace
   */

  export type AggregateWorkspace = {
    _count: WorkspaceCountAggregateOutputType | null
    _min: WorkspaceMinAggregateOutputType | null
    _max: WorkspaceMaxAggregateOutputType | null
  }

  export type WorkspaceMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    plan: $Enums.Plan | null
    ownerId: string | null
    createdAt: Date | null
  }

  export type WorkspaceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    plan: $Enums.Plan | null
    ownerId: string | null
    createdAt: Date | null
  }

  export type WorkspaceCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    plan: number
    ownerId: number
    createdAt: number
    _all: number
  }


  export type WorkspaceMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    plan?: true
    ownerId?: true
    createdAt?: true
  }

  export type WorkspaceMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    plan?: true
    ownerId?: true
    createdAt?: true
  }

  export type WorkspaceCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    plan?: true
    ownerId?: true
    createdAt?: true
    _all?: true
  }

  export type WorkspaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workspace to aggregate.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workspaces
    **/
    _count?: true | WorkspaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkspaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkspaceMaxAggregateInputType
  }

  export type GetWorkspaceAggregateType<T extends WorkspaceAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkspace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkspace[P]>
      : GetScalarType<T[P], AggregateWorkspace[P]>
  }




  export type WorkspaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkspaceWhereInput
    orderBy?: WorkspaceOrderByWithAggregationInput | WorkspaceOrderByWithAggregationInput[]
    by: WorkspaceScalarFieldEnum[] | WorkspaceScalarFieldEnum
    having?: WorkspaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkspaceCountAggregateInputType | true
    _min?: WorkspaceMinAggregateInputType
    _max?: WorkspaceMaxAggregateInputType
  }

  export type WorkspaceGroupByOutputType = {
    id: string
    name: string
    slug: string
    plan: $Enums.Plan
    ownerId: string
    createdAt: Date
    _count: WorkspaceCountAggregateOutputType | null
    _min: WorkspaceMinAggregateOutputType | null
    _max: WorkspaceMaxAggregateOutputType | null
  }

  type GetWorkspaceGroupByPayload<T extends WorkspaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkspaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkspaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkspaceGroupByOutputType[P]>
            : GetScalarType<T[P], WorkspaceGroupByOutputType[P]>
        }
      >
    >


  export type WorkspaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    plan?: boolean
    ownerId?: boolean
    createdAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Workspace$membersArgs<ExtArgs>
    repositories?: boolean | Workspace$repositoriesArgs<ExtArgs>
    subscription?: boolean | Workspace$subscriptionArgs<ExtArgs>
    slackConfig?: boolean | Workspace$slackConfigArgs<ExtArgs>
    auditLogs?: boolean | Workspace$auditLogsArgs<ExtArgs>
    _count?: boolean | WorkspaceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspace"]>

  export type WorkspaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    plan?: boolean
    ownerId?: boolean
    createdAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspace"]>

  export type WorkspaceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    plan?: boolean
    ownerId?: boolean
    createdAt?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspace"]>

  export type WorkspaceSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    plan?: boolean
    ownerId?: boolean
    createdAt?: boolean
  }

  export type WorkspaceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "plan" | "ownerId" | "createdAt", ExtArgs["result"]["workspace"]>
  export type WorkspaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    members?: boolean | Workspace$membersArgs<ExtArgs>
    repositories?: boolean | Workspace$repositoriesArgs<ExtArgs>
    subscription?: boolean | Workspace$subscriptionArgs<ExtArgs>
    slackConfig?: boolean | Workspace$slackConfigArgs<ExtArgs>
    auditLogs?: boolean | Workspace$auditLogsArgs<ExtArgs>
    _count?: boolean | WorkspaceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkspaceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WorkspaceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WorkspacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Workspace"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      members: Prisma.$WorkspaceMemberPayload<ExtArgs>[]
      repositories: Prisma.$RepositoryPayload<ExtArgs>[]
      subscription: Prisma.$SubscriptionPayload<ExtArgs> | null
      slackConfig: Prisma.$WorkspaceSlackConfigPayload<ExtArgs> | null
      auditLogs: Prisma.$AuditLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      plan: $Enums.Plan
      ownerId: string
      createdAt: Date
    }, ExtArgs["result"]["workspace"]>
    composites: {}
  }

  type WorkspaceGetPayload<S extends boolean | null | undefined | WorkspaceDefaultArgs> = $Result.GetResult<Prisma.$WorkspacePayload, S>

  type WorkspaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkspaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkspaceCountAggregateInputType | true
    }

  export interface WorkspaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Workspace'], meta: { name: 'Workspace' } }
    /**
     * Find zero or one Workspace that matches the filter.
     * @param {WorkspaceFindUniqueArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkspaceFindUniqueArgs>(args: SelectSubset<T, WorkspaceFindUniqueArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workspace that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkspaceFindUniqueOrThrowArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkspaceFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkspaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workspace that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindFirstArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkspaceFindFirstArgs>(args?: SelectSubset<T, WorkspaceFindFirstArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workspace that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindFirstOrThrowArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkspaceFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkspaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workspaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workspaces
     * const workspaces = await prisma.workspace.findMany()
     * 
     * // Get first 10 Workspaces
     * const workspaces = await prisma.workspace.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workspaceWithIdOnly = await prisma.workspace.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkspaceFindManyArgs>(args?: SelectSubset<T, WorkspaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workspace.
     * @param {WorkspaceCreateArgs} args - Arguments to create a Workspace.
     * @example
     * // Create one Workspace
     * const Workspace = await prisma.workspace.create({
     *   data: {
     *     // ... data to create a Workspace
     *   }
     * })
     * 
     */
    create<T extends WorkspaceCreateArgs>(args: SelectSubset<T, WorkspaceCreateArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workspaces.
     * @param {WorkspaceCreateManyArgs} args - Arguments to create many Workspaces.
     * @example
     * // Create many Workspaces
     * const workspace = await prisma.workspace.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkspaceCreateManyArgs>(args?: SelectSubset<T, WorkspaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workspaces and returns the data saved in the database.
     * @param {WorkspaceCreateManyAndReturnArgs} args - Arguments to create many Workspaces.
     * @example
     * // Create many Workspaces
     * const workspace = await prisma.workspace.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workspaces and only return the `id`
     * const workspaceWithIdOnly = await prisma.workspace.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkspaceCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkspaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workspace.
     * @param {WorkspaceDeleteArgs} args - Arguments to delete one Workspace.
     * @example
     * // Delete one Workspace
     * const Workspace = await prisma.workspace.delete({
     *   where: {
     *     // ... filter to delete one Workspace
     *   }
     * })
     * 
     */
    delete<T extends WorkspaceDeleteArgs>(args: SelectSubset<T, WorkspaceDeleteArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workspace.
     * @param {WorkspaceUpdateArgs} args - Arguments to update one Workspace.
     * @example
     * // Update one Workspace
     * const workspace = await prisma.workspace.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkspaceUpdateArgs>(args: SelectSubset<T, WorkspaceUpdateArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workspaces.
     * @param {WorkspaceDeleteManyArgs} args - Arguments to filter Workspaces to delete.
     * @example
     * // Delete a few Workspaces
     * const { count } = await prisma.workspace.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkspaceDeleteManyArgs>(args?: SelectSubset<T, WorkspaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workspaces
     * const workspace = await prisma.workspace.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkspaceUpdateManyArgs>(args: SelectSubset<T, WorkspaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspaces and returns the data updated in the database.
     * @param {WorkspaceUpdateManyAndReturnArgs} args - Arguments to update many Workspaces.
     * @example
     * // Update many Workspaces
     * const workspace = await prisma.workspace.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workspaces and only return the `id`
     * const workspaceWithIdOnly = await prisma.workspace.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkspaceUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkspaceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workspace.
     * @param {WorkspaceUpsertArgs} args - Arguments to update or create a Workspace.
     * @example
     * // Update or create a Workspace
     * const workspace = await prisma.workspace.upsert({
     *   create: {
     *     // ... data to create a Workspace
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workspace we want to update
     *   }
     * })
     */
    upsert<T extends WorkspaceUpsertArgs>(args: SelectSubset<T, WorkspaceUpsertArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceCountArgs} args - Arguments to filter Workspaces to count.
     * @example
     * // Count the number of Workspaces
     * const count = await prisma.workspace.count({
     *   where: {
     *     // ... the filter for the Workspaces we want to count
     *   }
     * })
    **/
    count<T extends WorkspaceCountArgs>(
      args?: Subset<T, WorkspaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkspaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workspace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkspaceAggregateArgs>(args: Subset<T, WorkspaceAggregateArgs>): Prisma.PrismaPromise<GetWorkspaceAggregateType<T>>

    /**
     * Group by Workspace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkspaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkspaceGroupByArgs['orderBy'] }
        : { orderBy?: WorkspaceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkspaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkspaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Workspace model
   */
  readonly fields: WorkspaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Workspace.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkspaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    members<T extends Workspace$membersArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspaceMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    repositories<T extends Workspace$repositoriesArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$repositoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subscription<T extends Workspace$subscriptionArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$subscriptionArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    slackConfig<T extends Workspace$slackConfigArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$slackConfigArgs<ExtArgs>>): Prisma__WorkspaceSlackConfigClient<$Result.GetResult<Prisma.$WorkspaceSlackConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    auditLogs<T extends Workspace$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Workspace model
   */
  interface WorkspaceFieldRefs {
    readonly id: FieldRef<"Workspace", 'String'>
    readonly name: FieldRef<"Workspace", 'String'>
    readonly slug: FieldRef<"Workspace", 'String'>
    readonly plan: FieldRef<"Workspace", 'Plan'>
    readonly ownerId: FieldRef<"Workspace", 'String'>
    readonly createdAt: FieldRef<"Workspace", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Workspace findUnique
   */
  export type WorkspaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace findUniqueOrThrow
   */
  export type WorkspaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace findFirst
   */
  export type WorkspaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workspaces.
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workspaces.
     */
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * Workspace findFirstOrThrow
   */
  export type WorkspaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workspaces.
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workspaces.
     */
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * Workspace findMany
   */
  export type WorkspaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspaces to fetch.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workspaces.
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * Workspace create
   */
  export type WorkspaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * The data needed to create a Workspace.
     */
    data: XOR<WorkspaceCreateInput, WorkspaceUncheckedCreateInput>
  }

  /**
   * Workspace createMany
   */
  export type WorkspaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workspaces.
     */
    data: WorkspaceCreateManyInput | WorkspaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workspace createManyAndReturn
   */
  export type WorkspaceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * The data used to create many Workspaces.
     */
    data: WorkspaceCreateManyInput | WorkspaceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workspace update
   */
  export type WorkspaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * The data needed to update a Workspace.
     */
    data: XOR<WorkspaceUpdateInput, WorkspaceUncheckedUpdateInput>
    /**
     * Choose, which Workspace to update.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace updateMany
   */
  export type WorkspaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workspaces.
     */
    data: XOR<WorkspaceUpdateManyMutationInput, WorkspaceUncheckedUpdateManyInput>
    /**
     * Filter which Workspaces to update
     */
    where?: WorkspaceWhereInput
    /**
     * Limit how many Workspaces to update.
     */
    limit?: number
  }

  /**
   * Workspace updateManyAndReturn
   */
  export type WorkspaceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * The data used to update Workspaces.
     */
    data: XOR<WorkspaceUpdateManyMutationInput, WorkspaceUncheckedUpdateManyInput>
    /**
     * Filter which Workspaces to update
     */
    where?: WorkspaceWhereInput
    /**
     * Limit how many Workspaces to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workspace upsert
   */
  export type WorkspaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * The filter to search for the Workspace to update in case it exists.
     */
    where: WorkspaceWhereUniqueInput
    /**
     * In case the Workspace found by the `where` argument doesn't exist, create a new Workspace with this data.
     */
    create: XOR<WorkspaceCreateInput, WorkspaceUncheckedCreateInput>
    /**
     * In case the Workspace was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkspaceUpdateInput, WorkspaceUncheckedUpdateInput>
  }

  /**
   * Workspace delete
   */
  export type WorkspaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter which Workspace to delete.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace deleteMany
   */
  export type WorkspaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workspaces to delete
     */
    where?: WorkspaceWhereInput
    /**
     * Limit how many Workspaces to delete.
     */
    limit?: number
  }

  /**
   * Workspace.members
   */
  export type Workspace$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceMember
     */
    select?: WorkspaceMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceMember
     */
    omit?: WorkspaceMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceMemberInclude<ExtArgs> | null
    where?: WorkspaceMemberWhereInput
    orderBy?: WorkspaceMemberOrderByWithRelationInput | WorkspaceMemberOrderByWithRelationInput[]
    cursor?: WorkspaceMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkspaceMemberScalarFieldEnum | WorkspaceMemberScalarFieldEnum[]
  }

  /**
   * Workspace.repositories
   */
  export type Workspace$repositoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    where?: RepositoryWhereInput
    orderBy?: RepositoryOrderByWithRelationInput | RepositoryOrderByWithRelationInput[]
    cursor?: RepositoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RepositoryScalarFieldEnum | RepositoryScalarFieldEnum[]
  }

  /**
   * Workspace.subscription
   */
  export type Workspace$subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
  }

  /**
   * Workspace.slackConfig
   */
  export type Workspace$slackConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceSlackConfig
     */
    select?: WorkspaceSlackConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceSlackConfig
     */
    omit?: WorkspaceSlackConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceSlackConfigInclude<ExtArgs> | null
    where?: WorkspaceSlackConfigWhereInput
  }

  /**
   * Workspace.auditLogs
   */
  export type Workspace$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * Workspace without action
   */
  export type WorkspaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
  }


  /**
   * Model WorkspaceMember
   */

  export type AggregateWorkspaceMember = {
    _count: WorkspaceMemberCountAggregateOutputType | null
    _min: WorkspaceMemberMinAggregateOutputType | null
    _max: WorkspaceMemberMaxAggregateOutputType | null
  }

  export type WorkspaceMemberMinAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    userId: string | null
    role: $Enums.MemberRole | null
    joinedAt: Date | null
  }

  export type WorkspaceMemberMaxAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    userId: string | null
    role: $Enums.MemberRole | null
    joinedAt: Date | null
  }

  export type WorkspaceMemberCountAggregateOutputType = {
    id: number
    workspaceId: number
    userId: number
    role: number
    joinedAt: number
    _all: number
  }


  export type WorkspaceMemberMinAggregateInputType = {
    id?: true
    workspaceId?: true
    userId?: true
    role?: true
    joinedAt?: true
  }

  export type WorkspaceMemberMaxAggregateInputType = {
    id?: true
    workspaceId?: true
    userId?: true
    role?: true
    joinedAt?: true
  }

  export type WorkspaceMemberCountAggregateInputType = {
    id?: true
    workspaceId?: true
    userId?: true
    role?: true
    joinedAt?: true
    _all?: true
  }

  export type WorkspaceMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkspaceMember to aggregate.
     */
    where?: WorkspaceMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkspaceMembers to fetch.
     */
    orderBy?: WorkspaceMemberOrderByWithRelationInput | WorkspaceMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkspaceMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkspaceMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkspaceMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkspaceMembers
    **/
    _count?: true | WorkspaceMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkspaceMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkspaceMemberMaxAggregateInputType
  }

  export type GetWorkspaceMemberAggregateType<T extends WorkspaceMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkspaceMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkspaceMember[P]>
      : GetScalarType<T[P], AggregateWorkspaceMember[P]>
  }




  export type WorkspaceMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkspaceMemberWhereInput
    orderBy?: WorkspaceMemberOrderByWithAggregationInput | WorkspaceMemberOrderByWithAggregationInput[]
    by: WorkspaceMemberScalarFieldEnum[] | WorkspaceMemberScalarFieldEnum
    having?: WorkspaceMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkspaceMemberCountAggregateInputType | true
    _min?: WorkspaceMemberMinAggregateInputType
    _max?: WorkspaceMemberMaxAggregateInputType
  }

  export type WorkspaceMemberGroupByOutputType = {
    id: string
    workspaceId: string
    userId: string
    role: $Enums.MemberRole
    joinedAt: Date
    _count: WorkspaceMemberCountAggregateOutputType | null
    _min: WorkspaceMemberMinAggregateOutputType | null
    _max: WorkspaceMemberMaxAggregateOutputType | null
  }

  type GetWorkspaceMemberGroupByPayload<T extends WorkspaceMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkspaceMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkspaceMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkspaceMemberGroupByOutputType[P]>
            : GetScalarType<T[P], WorkspaceMemberGroupByOutputType[P]>
        }
      >
    >


  export type WorkspaceMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    userId?: boolean
    role?: boolean
    joinedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspaceMember"]>

  export type WorkspaceMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    userId?: boolean
    role?: boolean
    joinedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspaceMember"]>

  export type WorkspaceMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    userId?: boolean
    role?: boolean
    joinedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspaceMember"]>

  export type WorkspaceMemberSelectScalar = {
    id?: boolean
    workspaceId?: boolean
    userId?: boolean
    role?: boolean
    joinedAt?: boolean
  }

  export type WorkspaceMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workspaceId" | "userId" | "role" | "joinedAt", ExtArgs["result"]["workspaceMember"]>
  export type WorkspaceMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WorkspaceMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WorkspaceMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WorkspaceMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkspaceMember"
    objects: {
      workspace: Prisma.$WorkspacePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workspaceId: string
      userId: string
      role: $Enums.MemberRole
      joinedAt: Date
    }, ExtArgs["result"]["workspaceMember"]>
    composites: {}
  }

  type WorkspaceMemberGetPayload<S extends boolean | null | undefined | WorkspaceMemberDefaultArgs> = $Result.GetResult<Prisma.$WorkspaceMemberPayload, S>

  type WorkspaceMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkspaceMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkspaceMemberCountAggregateInputType | true
    }

  export interface WorkspaceMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkspaceMember'], meta: { name: 'WorkspaceMember' } }
    /**
     * Find zero or one WorkspaceMember that matches the filter.
     * @param {WorkspaceMemberFindUniqueArgs} args - Arguments to find a WorkspaceMember
     * @example
     * // Get one WorkspaceMember
     * const workspaceMember = await prisma.workspaceMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkspaceMemberFindUniqueArgs>(args: SelectSubset<T, WorkspaceMemberFindUniqueArgs<ExtArgs>>): Prisma__WorkspaceMemberClient<$Result.GetResult<Prisma.$WorkspaceMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkspaceMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkspaceMemberFindUniqueOrThrowArgs} args - Arguments to find a WorkspaceMember
     * @example
     * // Get one WorkspaceMember
     * const workspaceMember = await prisma.workspaceMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkspaceMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkspaceMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkspaceMemberClient<$Result.GetResult<Prisma.$WorkspaceMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkspaceMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceMemberFindFirstArgs} args - Arguments to find a WorkspaceMember
     * @example
     * // Get one WorkspaceMember
     * const workspaceMember = await prisma.workspaceMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkspaceMemberFindFirstArgs>(args?: SelectSubset<T, WorkspaceMemberFindFirstArgs<ExtArgs>>): Prisma__WorkspaceMemberClient<$Result.GetResult<Prisma.$WorkspaceMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkspaceMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceMemberFindFirstOrThrowArgs} args - Arguments to find a WorkspaceMember
     * @example
     * // Get one WorkspaceMember
     * const workspaceMember = await prisma.workspaceMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkspaceMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkspaceMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkspaceMemberClient<$Result.GetResult<Prisma.$WorkspaceMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkspaceMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkspaceMembers
     * const workspaceMembers = await prisma.workspaceMember.findMany()
     * 
     * // Get first 10 WorkspaceMembers
     * const workspaceMembers = await prisma.workspaceMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workspaceMemberWithIdOnly = await prisma.workspaceMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkspaceMemberFindManyArgs>(args?: SelectSubset<T, WorkspaceMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspaceMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkspaceMember.
     * @param {WorkspaceMemberCreateArgs} args - Arguments to create a WorkspaceMember.
     * @example
     * // Create one WorkspaceMember
     * const WorkspaceMember = await prisma.workspaceMember.create({
     *   data: {
     *     // ... data to create a WorkspaceMember
     *   }
     * })
     * 
     */
    create<T extends WorkspaceMemberCreateArgs>(args: SelectSubset<T, WorkspaceMemberCreateArgs<ExtArgs>>): Prisma__WorkspaceMemberClient<$Result.GetResult<Prisma.$WorkspaceMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkspaceMembers.
     * @param {WorkspaceMemberCreateManyArgs} args - Arguments to create many WorkspaceMembers.
     * @example
     * // Create many WorkspaceMembers
     * const workspaceMember = await prisma.workspaceMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkspaceMemberCreateManyArgs>(args?: SelectSubset<T, WorkspaceMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkspaceMembers and returns the data saved in the database.
     * @param {WorkspaceMemberCreateManyAndReturnArgs} args - Arguments to create many WorkspaceMembers.
     * @example
     * // Create many WorkspaceMembers
     * const workspaceMember = await prisma.workspaceMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkspaceMembers and only return the `id`
     * const workspaceMemberWithIdOnly = await prisma.workspaceMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkspaceMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkspaceMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspaceMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkspaceMember.
     * @param {WorkspaceMemberDeleteArgs} args - Arguments to delete one WorkspaceMember.
     * @example
     * // Delete one WorkspaceMember
     * const WorkspaceMember = await prisma.workspaceMember.delete({
     *   where: {
     *     // ... filter to delete one WorkspaceMember
     *   }
     * })
     * 
     */
    delete<T extends WorkspaceMemberDeleteArgs>(args: SelectSubset<T, WorkspaceMemberDeleteArgs<ExtArgs>>): Prisma__WorkspaceMemberClient<$Result.GetResult<Prisma.$WorkspaceMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkspaceMember.
     * @param {WorkspaceMemberUpdateArgs} args - Arguments to update one WorkspaceMember.
     * @example
     * // Update one WorkspaceMember
     * const workspaceMember = await prisma.workspaceMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkspaceMemberUpdateArgs>(args: SelectSubset<T, WorkspaceMemberUpdateArgs<ExtArgs>>): Prisma__WorkspaceMemberClient<$Result.GetResult<Prisma.$WorkspaceMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkspaceMembers.
     * @param {WorkspaceMemberDeleteManyArgs} args - Arguments to filter WorkspaceMembers to delete.
     * @example
     * // Delete a few WorkspaceMembers
     * const { count } = await prisma.workspaceMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkspaceMemberDeleteManyArgs>(args?: SelectSubset<T, WorkspaceMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkspaceMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkspaceMembers
     * const workspaceMember = await prisma.workspaceMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkspaceMemberUpdateManyArgs>(args: SelectSubset<T, WorkspaceMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkspaceMembers and returns the data updated in the database.
     * @param {WorkspaceMemberUpdateManyAndReturnArgs} args - Arguments to update many WorkspaceMembers.
     * @example
     * // Update many WorkspaceMembers
     * const workspaceMember = await prisma.workspaceMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkspaceMembers and only return the `id`
     * const workspaceMemberWithIdOnly = await prisma.workspaceMember.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkspaceMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkspaceMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspaceMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkspaceMember.
     * @param {WorkspaceMemberUpsertArgs} args - Arguments to update or create a WorkspaceMember.
     * @example
     * // Update or create a WorkspaceMember
     * const workspaceMember = await prisma.workspaceMember.upsert({
     *   create: {
     *     // ... data to create a WorkspaceMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkspaceMember we want to update
     *   }
     * })
     */
    upsert<T extends WorkspaceMemberUpsertArgs>(args: SelectSubset<T, WorkspaceMemberUpsertArgs<ExtArgs>>): Prisma__WorkspaceMemberClient<$Result.GetResult<Prisma.$WorkspaceMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkspaceMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceMemberCountArgs} args - Arguments to filter WorkspaceMembers to count.
     * @example
     * // Count the number of WorkspaceMembers
     * const count = await prisma.workspaceMember.count({
     *   where: {
     *     // ... the filter for the WorkspaceMembers we want to count
     *   }
     * })
    **/
    count<T extends WorkspaceMemberCountArgs>(
      args?: Subset<T, WorkspaceMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkspaceMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkspaceMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkspaceMemberAggregateArgs>(args: Subset<T, WorkspaceMemberAggregateArgs>): Prisma.PrismaPromise<GetWorkspaceMemberAggregateType<T>>

    /**
     * Group by WorkspaceMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceMemberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkspaceMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkspaceMemberGroupByArgs['orderBy'] }
        : { orderBy?: WorkspaceMemberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkspaceMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkspaceMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkspaceMember model
   */
  readonly fields: WorkspaceMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkspaceMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkspaceMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkspaceMember model
   */
  interface WorkspaceMemberFieldRefs {
    readonly id: FieldRef<"WorkspaceMember", 'String'>
    readonly workspaceId: FieldRef<"WorkspaceMember", 'String'>
    readonly userId: FieldRef<"WorkspaceMember", 'String'>
    readonly role: FieldRef<"WorkspaceMember", 'MemberRole'>
    readonly joinedAt: FieldRef<"WorkspaceMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkspaceMember findUnique
   */
  export type WorkspaceMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceMember
     */
    select?: WorkspaceMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceMember
     */
    omit?: WorkspaceMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceMemberInclude<ExtArgs> | null
    /**
     * Filter, which WorkspaceMember to fetch.
     */
    where: WorkspaceMemberWhereUniqueInput
  }

  /**
   * WorkspaceMember findUniqueOrThrow
   */
  export type WorkspaceMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceMember
     */
    select?: WorkspaceMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceMember
     */
    omit?: WorkspaceMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceMemberInclude<ExtArgs> | null
    /**
     * Filter, which WorkspaceMember to fetch.
     */
    where: WorkspaceMemberWhereUniqueInput
  }

  /**
   * WorkspaceMember findFirst
   */
  export type WorkspaceMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceMember
     */
    select?: WorkspaceMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceMember
     */
    omit?: WorkspaceMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceMemberInclude<ExtArgs> | null
    /**
     * Filter, which WorkspaceMember to fetch.
     */
    where?: WorkspaceMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkspaceMembers to fetch.
     */
    orderBy?: WorkspaceMemberOrderByWithRelationInput | WorkspaceMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkspaceMembers.
     */
    cursor?: WorkspaceMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkspaceMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkspaceMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkspaceMembers.
     */
    distinct?: WorkspaceMemberScalarFieldEnum | WorkspaceMemberScalarFieldEnum[]
  }

  /**
   * WorkspaceMember findFirstOrThrow
   */
  export type WorkspaceMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceMember
     */
    select?: WorkspaceMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceMember
     */
    omit?: WorkspaceMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceMemberInclude<ExtArgs> | null
    /**
     * Filter, which WorkspaceMember to fetch.
     */
    where?: WorkspaceMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkspaceMembers to fetch.
     */
    orderBy?: WorkspaceMemberOrderByWithRelationInput | WorkspaceMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkspaceMembers.
     */
    cursor?: WorkspaceMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkspaceMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkspaceMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkspaceMembers.
     */
    distinct?: WorkspaceMemberScalarFieldEnum | WorkspaceMemberScalarFieldEnum[]
  }

  /**
   * WorkspaceMember findMany
   */
  export type WorkspaceMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceMember
     */
    select?: WorkspaceMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceMember
     */
    omit?: WorkspaceMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceMemberInclude<ExtArgs> | null
    /**
     * Filter, which WorkspaceMembers to fetch.
     */
    where?: WorkspaceMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkspaceMembers to fetch.
     */
    orderBy?: WorkspaceMemberOrderByWithRelationInput | WorkspaceMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkspaceMembers.
     */
    cursor?: WorkspaceMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkspaceMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkspaceMembers.
     */
    skip?: number
    distinct?: WorkspaceMemberScalarFieldEnum | WorkspaceMemberScalarFieldEnum[]
  }

  /**
   * WorkspaceMember create
   */
  export type WorkspaceMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceMember
     */
    select?: WorkspaceMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceMember
     */
    omit?: WorkspaceMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkspaceMember.
     */
    data: XOR<WorkspaceMemberCreateInput, WorkspaceMemberUncheckedCreateInput>
  }

  /**
   * WorkspaceMember createMany
   */
  export type WorkspaceMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkspaceMembers.
     */
    data: WorkspaceMemberCreateManyInput | WorkspaceMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkspaceMember createManyAndReturn
   */
  export type WorkspaceMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceMember
     */
    select?: WorkspaceMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceMember
     */
    omit?: WorkspaceMemberOmit<ExtArgs> | null
    /**
     * The data used to create many WorkspaceMembers.
     */
    data: WorkspaceMemberCreateManyInput | WorkspaceMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkspaceMember update
   */
  export type WorkspaceMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceMember
     */
    select?: WorkspaceMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceMember
     */
    omit?: WorkspaceMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkspaceMember.
     */
    data: XOR<WorkspaceMemberUpdateInput, WorkspaceMemberUncheckedUpdateInput>
    /**
     * Choose, which WorkspaceMember to update.
     */
    where: WorkspaceMemberWhereUniqueInput
  }

  /**
   * WorkspaceMember updateMany
   */
  export type WorkspaceMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkspaceMembers.
     */
    data: XOR<WorkspaceMemberUpdateManyMutationInput, WorkspaceMemberUncheckedUpdateManyInput>
    /**
     * Filter which WorkspaceMembers to update
     */
    where?: WorkspaceMemberWhereInput
    /**
     * Limit how many WorkspaceMembers to update.
     */
    limit?: number
  }

  /**
   * WorkspaceMember updateManyAndReturn
   */
  export type WorkspaceMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceMember
     */
    select?: WorkspaceMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceMember
     */
    omit?: WorkspaceMemberOmit<ExtArgs> | null
    /**
     * The data used to update WorkspaceMembers.
     */
    data: XOR<WorkspaceMemberUpdateManyMutationInput, WorkspaceMemberUncheckedUpdateManyInput>
    /**
     * Filter which WorkspaceMembers to update
     */
    where?: WorkspaceMemberWhereInput
    /**
     * Limit how many WorkspaceMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkspaceMember upsert
   */
  export type WorkspaceMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceMember
     */
    select?: WorkspaceMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceMember
     */
    omit?: WorkspaceMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkspaceMember to update in case it exists.
     */
    where: WorkspaceMemberWhereUniqueInput
    /**
     * In case the WorkspaceMember found by the `where` argument doesn't exist, create a new WorkspaceMember with this data.
     */
    create: XOR<WorkspaceMemberCreateInput, WorkspaceMemberUncheckedCreateInput>
    /**
     * In case the WorkspaceMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkspaceMemberUpdateInput, WorkspaceMemberUncheckedUpdateInput>
  }

  /**
   * WorkspaceMember delete
   */
  export type WorkspaceMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceMember
     */
    select?: WorkspaceMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceMember
     */
    omit?: WorkspaceMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceMemberInclude<ExtArgs> | null
    /**
     * Filter which WorkspaceMember to delete.
     */
    where: WorkspaceMemberWhereUniqueInput
  }

  /**
   * WorkspaceMember deleteMany
   */
  export type WorkspaceMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkspaceMembers to delete
     */
    where?: WorkspaceMemberWhereInput
    /**
     * Limit how many WorkspaceMembers to delete.
     */
    limit?: number
  }

  /**
   * WorkspaceMember without action
   */
  export type WorkspaceMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceMember
     */
    select?: WorkspaceMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceMember
     */
    omit?: WorkspaceMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceMemberInclude<ExtArgs> | null
  }


  /**
   * Model Repository
   */

  export type AggregateRepository = {
    _count: RepositoryCountAggregateOutputType | null
    _min: RepositoryMinAggregateOutputType | null
    _max: RepositoryMaxAggregateOutputType | null
  }

  export type RepositoryMinAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    githubRepoId: string | null
    name: string | null
    fullName: string | null
    defaultBranch: string | null
    isPrivate: boolean | null
    createdAt: Date | null
  }

  export type RepositoryMaxAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    githubRepoId: string | null
    name: string | null
    fullName: string | null
    defaultBranch: string | null
    isPrivate: boolean | null
    createdAt: Date | null
  }

  export type RepositoryCountAggregateOutputType = {
    id: number
    workspaceId: number
    githubRepoId: number
    name: number
    fullName: number
    defaultBranch: number
    isPrivate: number
    createdAt: number
    _all: number
  }


  export type RepositoryMinAggregateInputType = {
    id?: true
    workspaceId?: true
    githubRepoId?: true
    name?: true
    fullName?: true
    defaultBranch?: true
    isPrivate?: true
    createdAt?: true
  }

  export type RepositoryMaxAggregateInputType = {
    id?: true
    workspaceId?: true
    githubRepoId?: true
    name?: true
    fullName?: true
    defaultBranch?: true
    isPrivate?: true
    createdAt?: true
  }

  export type RepositoryCountAggregateInputType = {
    id?: true
    workspaceId?: true
    githubRepoId?: true
    name?: true
    fullName?: true
    defaultBranch?: true
    isPrivate?: true
    createdAt?: true
    _all?: true
  }

  export type RepositoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Repository to aggregate.
     */
    where?: RepositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repositories to fetch.
     */
    orderBy?: RepositoryOrderByWithRelationInput | RepositoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RepositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repositories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repositories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Repositories
    **/
    _count?: true | RepositoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RepositoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RepositoryMaxAggregateInputType
  }

  export type GetRepositoryAggregateType<T extends RepositoryAggregateArgs> = {
        [P in keyof T & keyof AggregateRepository]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRepository[P]>
      : GetScalarType<T[P], AggregateRepository[P]>
  }




  export type RepositoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RepositoryWhereInput
    orderBy?: RepositoryOrderByWithAggregationInput | RepositoryOrderByWithAggregationInput[]
    by: RepositoryScalarFieldEnum[] | RepositoryScalarFieldEnum
    having?: RepositoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RepositoryCountAggregateInputType | true
    _min?: RepositoryMinAggregateInputType
    _max?: RepositoryMaxAggregateInputType
  }

  export type RepositoryGroupByOutputType = {
    id: string
    workspaceId: string
    githubRepoId: string
    name: string
    fullName: string
    defaultBranch: string
    isPrivate: boolean
    createdAt: Date
    _count: RepositoryCountAggregateOutputType | null
    _min: RepositoryMinAggregateOutputType | null
    _max: RepositoryMaxAggregateOutputType | null
  }

  type GetRepositoryGroupByPayload<T extends RepositoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RepositoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RepositoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RepositoryGroupByOutputType[P]>
            : GetScalarType<T[P], RepositoryGroupByOutputType[P]>
        }
      >
    >


  export type RepositorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    githubRepoId?: boolean
    name?: boolean
    fullName?: boolean
    defaultBranch?: boolean
    isPrivate?: boolean
    createdAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    pullRequests?: boolean | Repository$pullRequestsArgs<ExtArgs>
    _count?: boolean | RepositoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repository"]>

  export type RepositorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    githubRepoId?: boolean
    name?: boolean
    fullName?: boolean
    defaultBranch?: boolean
    isPrivate?: boolean
    createdAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repository"]>

  export type RepositorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    githubRepoId?: boolean
    name?: boolean
    fullName?: boolean
    defaultBranch?: boolean
    isPrivate?: boolean
    createdAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repository"]>

  export type RepositorySelectScalar = {
    id?: boolean
    workspaceId?: boolean
    githubRepoId?: boolean
    name?: boolean
    fullName?: boolean
    defaultBranch?: boolean
    isPrivate?: boolean
    createdAt?: boolean
  }

  export type RepositoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workspaceId" | "githubRepoId" | "name" | "fullName" | "defaultBranch" | "isPrivate" | "createdAt", ExtArgs["result"]["repository"]>
  export type RepositoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    pullRequests?: boolean | Repository$pullRequestsArgs<ExtArgs>
    _count?: boolean | RepositoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RepositoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type RepositoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }

  export type $RepositoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Repository"
    objects: {
      workspace: Prisma.$WorkspacePayload<ExtArgs>
      pullRequests: Prisma.$PullRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workspaceId: string
      githubRepoId: string
      name: string
      fullName: string
      defaultBranch: string
      isPrivate: boolean
      createdAt: Date
    }, ExtArgs["result"]["repository"]>
    composites: {}
  }

  type RepositoryGetPayload<S extends boolean | null | undefined | RepositoryDefaultArgs> = $Result.GetResult<Prisma.$RepositoryPayload, S>

  type RepositoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RepositoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RepositoryCountAggregateInputType | true
    }

  export interface RepositoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Repository'], meta: { name: 'Repository' } }
    /**
     * Find zero or one Repository that matches the filter.
     * @param {RepositoryFindUniqueArgs} args - Arguments to find a Repository
     * @example
     * // Get one Repository
     * const repository = await prisma.repository.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RepositoryFindUniqueArgs>(args: SelectSubset<T, RepositoryFindUniqueArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Repository that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RepositoryFindUniqueOrThrowArgs} args - Arguments to find a Repository
     * @example
     * // Get one Repository
     * const repository = await prisma.repository.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RepositoryFindUniqueOrThrowArgs>(args: SelectSubset<T, RepositoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Repository that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryFindFirstArgs} args - Arguments to find a Repository
     * @example
     * // Get one Repository
     * const repository = await prisma.repository.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RepositoryFindFirstArgs>(args?: SelectSubset<T, RepositoryFindFirstArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Repository that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryFindFirstOrThrowArgs} args - Arguments to find a Repository
     * @example
     * // Get one Repository
     * const repository = await prisma.repository.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RepositoryFindFirstOrThrowArgs>(args?: SelectSubset<T, RepositoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Repositories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Repositories
     * const repositories = await prisma.repository.findMany()
     * 
     * // Get first 10 Repositories
     * const repositories = await prisma.repository.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const repositoryWithIdOnly = await prisma.repository.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RepositoryFindManyArgs>(args?: SelectSubset<T, RepositoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Repository.
     * @param {RepositoryCreateArgs} args - Arguments to create a Repository.
     * @example
     * // Create one Repository
     * const Repository = await prisma.repository.create({
     *   data: {
     *     // ... data to create a Repository
     *   }
     * })
     * 
     */
    create<T extends RepositoryCreateArgs>(args: SelectSubset<T, RepositoryCreateArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Repositories.
     * @param {RepositoryCreateManyArgs} args - Arguments to create many Repositories.
     * @example
     * // Create many Repositories
     * const repository = await prisma.repository.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RepositoryCreateManyArgs>(args?: SelectSubset<T, RepositoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Repositories and returns the data saved in the database.
     * @param {RepositoryCreateManyAndReturnArgs} args - Arguments to create many Repositories.
     * @example
     * // Create many Repositories
     * const repository = await prisma.repository.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Repositories and only return the `id`
     * const repositoryWithIdOnly = await prisma.repository.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RepositoryCreateManyAndReturnArgs>(args?: SelectSubset<T, RepositoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Repository.
     * @param {RepositoryDeleteArgs} args - Arguments to delete one Repository.
     * @example
     * // Delete one Repository
     * const Repository = await prisma.repository.delete({
     *   where: {
     *     // ... filter to delete one Repository
     *   }
     * })
     * 
     */
    delete<T extends RepositoryDeleteArgs>(args: SelectSubset<T, RepositoryDeleteArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Repository.
     * @param {RepositoryUpdateArgs} args - Arguments to update one Repository.
     * @example
     * // Update one Repository
     * const repository = await prisma.repository.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RepositoryUpdateArgs>(args: SelectSubset<T, RepositoryUpdateArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Repositories.
     * @param {RepositoryDeleteManyArgs} args - Arguments to filter Repositories to delete.
     * @example
     * // Delete a few Repositories
     * const { count } = await prisma.repository.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RepositoryDeleteManyArgs>(args?: SelectSubset<T, RepositoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Repositories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Repositories
     * const repository = await prisma.repository.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RepositoryUpdateManyArgs>(args: SelectSubset<T, RepositoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Repositories and returns the data updated in the database.
     * @param {RepositoryUpdateManyAndReturnArgs} args - Arguments to update many Repositories.
     * @example
     * // Update many Repositories
     * const repository = await prisma.repository.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Repositories and only return the `id`
     * const repositoryWithIdOnly = await prisma.repository.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RepositoryUpdateManyAndReturnArgs>(args: SelectSubset<T, RepositoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Repository.
     * @param {RepositoryUpsertArgs} args - Arguments to update or create a Repository.
     * @example
     * // Update or create a Repository
     * const repository = await prisma.repository.upsert({
     *   create: {
     *     // ... data to create a Repository
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Repository we want to update
     *   }
     * })
     */
    upsert<T extends RepositoryUpsertArgs>(args: SelectSubset<T, RepositoryUpsertArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Repositories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryCountArgs} args - Arguments to filter Repositories to count.
     * @example
     * // Count the number of Repositories
     * const count = await prisma.repository.count({
     *   where: {
     *     // ... the filter for the Repositories we want to count
     *   }
     * })
    **/
    count<T extends RepositoryCountArgs>(
      args?: Subset<T, RepositoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RepositoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Repository.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RepositoryAggregateArgs>(args: Subset<T, RepositoryAggregateArgs>): Prisma.PrismaPromise<GetRepositoryAggregateType<T>>

    /**
     * Group by Repository.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RepositoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RepositoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RepositoryGroupByArgs['orderBy'] }
        : { orderBy?: RepositoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RepositoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRepositoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Repository model
   */
  readonly fields: RepositoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Repository.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RepositoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pullRequests<T extends Repository$pullRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Repository$pullRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Repository model
   */
  interface RepositoryFieldRefs {
    readonly id: FieldRef<"Repository", 'String'>
    readonly workspaceId: FieldRef<"Repository", 'String'>
    readonly githubRepoId: FieldRef<"Repository", 'String'>
    readonly name: FieldRef<"Repository", 'String'>
    readonly fullName: FieldRef<"Repository", 'String'>
    readonly defaultBranch: FieldRef<"Repository", 'String'>
    readonly isPrivate: FieldRef<"Repository", 'Boolean'>
    readonly createdAt: FieldRef<"Repository", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Repository findUnique
   */
  export type RepositoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter, which Repository to fetch.
     */
    where: RepositoryWhereUniqueInput
  }

  /**
   * Repository findUniqueOrThrow
   */
  export type RepositoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter, which Repository to fetch.
     */
    where: RepositoryWhereUniqueInput
  }

  /**
   * Repository findFirst
   */
  export type RepositoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter, which Repository to fetch.
     */
    where?: RepositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repositories to fetch.
     */
    orderBy?: RepositoryOrderByWithRelationInput | RepositoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Repositories.
     */
    cursor?: RepositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repositories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repositories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Repositories.
     */
    distinct?: RepositoryScalarFieldEnum | RepositoryScalarFieldEnum[]
  }

  /**
   * Repository findFirstOrThrow
   */
  export type RepositoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter, which Repository to fetch.
     */
    where?: RepositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repositories to fetch.
     */
    orderBy?: RepositoryOrderByWithRelationInput | RepositoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Repositories.
     */
    cursor?: RepositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repositories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repositories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Repositories.
     */
    distinct?: RepositoryScalarFieldEnum | RepositoryScalarFieldEnum[]
  }

  /**
   * Repository findMany
   */
  export type RepositoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter, which Repositories to fetch.
     */
    where?: RepositoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repositories to fetch.
     */
    orderBy?: RepositoryOrderByWithRelationInput | RepositoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Repositories.
     */
    cursor?: RepositoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repositories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repositories.
     */
    skip?: number
    distinct?: RepositoryScalarFieldEnum | RepositoryScalarFieldEnum[]
  }

  /**
   * Repository create
   */
  export type RepositoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Repository.
     */
    data: XOR<RepositoryCreateInput, RepositoryUncheckedCreateInput>
  }

  /**
   * Repository createMany
   */
  export type RepositoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Repositories.
     */
    data: RepositoryCreateManyInput | RepositoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Repository createManyAndReturn
   */
  export type RepositoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * The data used to create many Repositories.
     */
    data: RepositoryCreateManyInput | RepositoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Repository update
   */
  export type RepositoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Repository.
     */
    data: XOR<RepositoryUpdateInput, RepositoryUncheckedUpdateInput>
    /**
     * Choose, which Repository to update.
     */
    where: RepositoryWhereUniqueInput
  }

  /**
   * Repository updateMany
   */
  export type RepositoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Repositories.
     */
    data: XOR<RepositoryUpdateManyMutationInput, RepositoryUncheckedUpdateManyInput>
    /**
     * Filter which Repositories to update
     */
    where?: RepositoryWhereInput
    /**
     * Limit how many Repositories to update.
     */
    limit?: number
  }

  /**
   * Repository updateManyAndReturn
   */
  export type RepositoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * The data used to update Repositories.
     */
    data: XOR<RepositoryUpdateManyMutationInput, RepositoryUncheckedUpdateManyInput>
    /**
     * Filter which Repositories to update
     */
    where?: RepositoryWhereInput
    /**
     * Limit how many Repositories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Repository upsert
   */
  export type RepositoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Repository to update in case it exists.
     */
    where: RepositoryWhereUniqueInput
    /**
     * In case the Repository found by the `where` argument doesn't exist, create a new Repository with this data.
     */
    create: XOR<RepositoryCreateInput, RepositoryUncheckedCreateInput>
    /**
     * In case the Repository was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RepositoryUpdateInput, RepositoryUncheckedUpdateInput>
  }

  /**
   * Repository delete
   */
  export type RepositoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
    /**
     * Filter which Repository to delete.
     */
    where: RepositoryWhereUniqueInput
  }

  /**
   * Repository deleteMany
   */
  export type RepositoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Repositories to delete
     */
    where?: RepositoryWhereInput
    /**
     * Limit how many Repositories to delete.
     */
    limit?: number
  }

  /**
   * Repository.pullRequests
   */
  export type Repository$pullRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequest
     */
    omit?: PullRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestInclude<ExtArgs> | null
    where?: PullRequestWhereInput
    orderBy?: PullRequestOrderByWithRelationInput | PullRequestOrderByWithRelationInput[]
    cursor?: PullRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PullRequestScalarFieldEnum | PullRequestScalarFieldEnum[]
  }

  /**
   * Repository without action
   */
  export type RepositoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repository
     */
    select?: RepositorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repository
     */
    omit?: RepositoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RepositoryInclude<ExtArgs> | null
  }


  /**
   * Model PullRequest
   */

  export type AggregatePullRequest = {
    _count: PullRequestCountAggregateOutputType | null
    _avg: PullRequestAvgAggregateOutputType | null
    _sum: PullRequestSumAggregateOutputType | null
    _min: PullRequestMinAggregateOutputType | null
    _max: PullRequestMaxAggregateOutputType | null
  }

  export type PullRequestAvgAggregateOutputType = {
    githubPrNumber: number | null
    securityScore: number | null
  }

  export type PullRequestSumAggregateOutputType = {
    githubPrNumber: number | null
    securityScore: number | null
  }

  export type PullRequestMinAggregateOutputType = {
    id: string | null
    repositoryId: string | null
    githubPrNumber: number | null
    title: string | null
    body: string | null
    authorId: string | null
    status: $Enums.PRStatus | null
    headBranch: string | null
    baseBranch: string | null
    diffUrl: string | null
    aiSummary: string | null
    securityScore: number | null
    createdAt: Date | null
    updatedAt: Date | null
    reviewerId: string | null
  }

  export type PullRequestMaxAggregateOutputType = {
    id: string | null
    repositoryId: string | null
    githubPrNumber: number | null
    title: string | null
    body: string | null
    authorId: string | null
    status: $Enums.PRStatus | null
    headBranch: string | null
    baseBranch: string | null
    diffUrl: string | null
    aiSummary: string | null
    securityScore: number | null
    createdAt: Date | null
    updatedAt: Date | null
    reviewerId: string | null
  }

  export type PullRequestCountAggregateOutputType = {
    id: number
    repositoryId: number
    githubPrNumber: number
    title: number
    body: number
    authorId: number
    status: number
    headBranch: number
    baseBranch: number
    diffUrl: number
    aiSummary: number
    securityScore: number
    createdAt: number
    updatedAt: number
    reviewerId: number
    _all: number
  }


  export type PullRequestAvgAggregateInputType = {
    githubPrNumber?: true
    securityScore?: true
  }

  export type PullRequestSumAggregateInputType = {
    githubPrNumber?: true
    securityScore?: true
  }

  export type PullRequestMinAggregateInputType = {
    id?: true
    repositoryId?: true
    githubPrNumber?: true
    title?: true
    body?: true
    authorId?: true
    status?: true
    headBranch?: true
    baseBranch?: true
    diffUrl?: true
    aiSummary?: true
    securityScore?: true
    createdAt?: true
    updatedAt?: true
    reviewerId?: true
  }

  export type PullRequestMaxAggregateInputType = {
    id?: true
    repositoryId?: true
    githubPrNumber?: true
    title?: true
    body?: true
    authorId?: true
    status?: true
    headBranch?: true
    baseBranch?: true
    diffUrl?: true
    aiSummary?: true
    securityScore?: true
    createdAt?: true
    updatedAt?: true
    reviewerId?: true
  }

  export type PullRequestCountAggregateInputType = {
    id?: true
    repositoryId?: true
    githubPrNumber?: true
    title?: true
    body?: true
    authorId?: true
    status?: true
    headBranch?: true
    baseBranch?: true
    diffUrl?: true
    aiSummary?: true
    securityScore?: true
    createdAt?: true
    updatedAt?: true
    reviewerId?: true
    _all?: true
  }

  export type PullRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PullRequest to aggregate.
     */
    where?: PullRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PullRequests to fetch.
     */
    orderBy?: PullRequestOrderByWithRelationInput | PullRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PullRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PullRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PullRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PullRequests
    **/
    _count?: true | PullRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PullRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PullRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PullRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PullRequestMaxAggregateInputType
  }

  export type GetPullRequestAggregateType<T extends PullRequestAggregateArgs> = {
        [P in keyof T & keyof AggregatePullRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePullRequest[P]>
      : GetScalarType<T[P], AggregatePullRequest[P]>
  }




  export type PullRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PullRequestWhereInput
    orderBy?: PullRequestOrderByWithAggregationInput | PullRequestOrderByWithAggregationInput[]
    by: PullRequestScalarFieldEnum[] | PullRequestScalarFieldEnum
    having?: PullRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PullRequestCountAggregateInputType | true
    _avg?: PullRequestAvgAggregateInputType
    _sum?: PullRequestSumAggregateInputType
    _min?: PullRequestMinAggregateInputType
    _max?: PullRequestMaxAggregateInputType
  }

  export type PullRequestGroupByOutputType = {
    id: string
    repositoryId: string
    githubPrNumber: number
    title: string
    body: string | null
    authorId: string
    status: $Enums.PRStatus
    headBranch: string
    baseBranch: string
    diffUrl: string | null
    aiSummary: string | null
    securityScore: number | null
    createdAt: Date
    updatedAt: Date
    reviewerId: string | null
    _count: PullRequestCountAggregateOutputType | null
    _avg: PullRequestAvgAggregateOutputType | null
    _sum: PullRequestSumAggregateOutputType | null
    _min: PullRequestMinAggregateOutputType | null
    _max: PullRequestMaxAggregateOutputType | null
  }

  type GetPullRequestGroupByPayload<T extends PullRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PullRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PullRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PullRequestGroupByOutputType[P]>
            : GetScalarType<T[P], PullRequestGroupByOutputType[P]>
        }
      >
    >


  export type PullRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    repositoryId?: boolean
    githubPrNumber?: boolean
    title?: boolean
    body?: boolean
    authorId?: boolean
    status?: boolean
    headBranch?: boolean
    baseBranch?: boolean
    diffUrl?: boolean
    aiSummary?: boolean
    securityScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reviewerId?: boolean
    repository?: boolean | RepositoryDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    reviewer?: boolean | PullRequest$reviewerArgs<ExtArgs>
    reviewSessions?: boolean | PullRequest$reviewSessionsArgs<ExtArgs>
    securityFindings?: boolean | PullRequest$securityFindingsArgs<ExtArgs>
    _count?: boolean | PullRequestCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pullRequest"]>

  export type PullRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    repositoryId?: boolean
    githubPrNumber?: boolean
    title?: boolean
    body?: boolean
    authorId?: boolean
    status?: boolean
    headBranch?: boolean
    baseBranch?: boolean
    diffUrl?: boolean
    aiSummary?: boolean
    securityScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reviewerId?: boolean
    repository?: boolean | RepositoryDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    reviewer?: boolean | PullRequest$reviewerArgs<ExtArgs>
  }, ExtArgs["result"]["pullRequest"]>

  export type PullRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    repositoryId?: boolean
    githubPrNumber?: boolean
    title?: boolean
    body?: boolean
    authorId?: boolean
    status?: boolean
    headBranch?: boolean
    baseBranch?: boolean
    diffUrl?: boolean
    aiSummary?: boolean
    securityScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reviewerId?: boolean
    repository?: boolean | RepositoryDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    reviewer?: boolean | PullRequest$reviewerArgs<ExtArgs>
  }, ExtArgs["result"]["pullRequest"]>

  export type PullRequestSelectScalar = {
    id?: boolean
    repositoryId?: boolean
    githubPrNumber?: boolean
    title?: boolean
    body?: boolean
    authorId?: boolean
    status?: boolean
    headBranch?: boolean
    baseBranch?: boolean
    diffUrl?: boolean
    aiSummary?: boolean
    securityScore?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reviewerId?: boolean
  }

  export type PullRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "repositoryId" | "githubPrNumber" | "title" | "body" | "authorId" | "status" | "headBranch" | "baseBranch" | "diffUrl" | "aiSummary" | "securityScore" | "createdAt" | "updatedAt" | "reviewerId", ExtArgs["result"]["pullRequest"]>
  export type PullRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repository?: boolean | RepositoryDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    reviewer?: boolean | PullRequest$reviewerArgs<ExtArgs>
    reviewSessions?: boolean | PullRequest$reviewSessionsArgs<ExtArgs>
    securityFindings?: boolean | PullRequest$securityFindingsArgs<ExtArgs>
    _count?: boolean | PullRequestCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PullRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repository?: boolean | RepositoryDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    reviewer?: boolean | PullRequest$reviewerArgs<ExtArgs>
  }
  export type PullRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    repository?: boolean | RepositoryDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    reviewer?: boolean | PullRequest$reviewerArgs<ExtArgs>
  }

  export type $PullRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PullRequest"
    objects: {
      repository: Prisma.$RepositoryPayload<ExtArgs>
      author: Prisma.$UserPayload<ExtArgs>
      reviewer: Prisma.$UserPayload<ExtArgs> | null
      reviewSessions: Prisma.$ReviewSessionPayload<ExtArgs>[]
      securityFindings: Prisma.$SecurityFindingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      repositoryId: string
      githubPrNumber: number
      title: string
      body: string | null
      authorId: string
      status: $Enums.PRStatus
      headBranch: string
      baseBranch: string
      diffUrl: string | null
      aiSummary: string | null
      securityScore: number | null
      createdAt: Date
      updatedAt: Date
      reviewerId: string | null
    }, ExtArgs["result"]["pullRequest"]>
    composites: {}
  }

  type PullRequestGetPayload<S extends boolean | null | undefined | PullRequestDefaultArgs> = $Result.GetResult<Prisma.$PullRequestPayload, S>

  type PullRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PullRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PullRequestCountAggregateInputType | true
    }

  export interface PullRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PullRequest'], meta: { name: 'PullRequest' } }
    /**
     * Find zero or one PullRequest that matches the filter.
     * @param {PullRequestFindUniqueArgs} args - Arguments to find a PullRequest
     * @example
     * // Get one PullRequest
     * const pullRequest = await prisma.pullRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PullRequestFindUniqueArgs>(args: SelectSubset<T, PullRequestFindUniqueArgs<ExtArgs>>): Prisma__PullRequestClient<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PullRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PullRequestFindUniqueOrThrowArgs} args - Arguments to find a PullRequest
     * @example
     * // Get one PullRequest
     * const pullRequest = await prisma.pullRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PullRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, PullRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PullRequestClient<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PullRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PullRequestFindFirstArgs} args - Arguments to find a PullRequest
     * @example
     * // Get one PullRequest
     * const pullRequest = await prisma.pullRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PullRequestFindFirstArgs>(args?: SelectSubset<T, PullRequestFindFirstArgs<ExtArgs>>): Prisma__PullRequestClient<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PullRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PullRequestFindFirstOrThrowArgs} args - Arguments to find a PullRequest
     * @example
     * // Get one PullRequest
     * const pullRequest = await prisma.pullRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PullRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, PullRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__PullRequestClient<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PullRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PullRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PullRequests
     * const pullRequests = await prisma.pullRequest.findMany()
     * 
     * // Get first 10 PullRequests
     * const pullRequests = await prisma.pullRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pullRequestWithIdOnly = await prisma.pullRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PullRequestFindManyArgs>(args?: SelectSubset<T, PullRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PullRequest.
     * @param {PullRequestCreateArgs} args - Arguments to create a PullRequest.
     * @example
     * // Create one PullRequest
     * const PullRequest = await prisma.pullRequest.create({
     *   data: {
     *     // ... data to create a PullRequest
     *   }
     * })
     * 
     */
    create<T extends PullRequestCreateArgs>(args: SelectSubset<T, PullRequestCreateArgs<ExtArgs>>): Prisma__PullRequestClient<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PullRequests.
     * @param {PullRequestCreateManyArgs} args - Arguments to create many PullRequests.
     * @example
     * // Create many PullRequests
     * const pullRequest = await prisma.pullRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PullRequestCreateManyArgs>(args?: SelectSubset<T, PullRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PullRequests and returns the data saved in the database.
     * @param {PullRequestCreateManyAndReturnArgs} args - Arguments to create many PullRequests.
     * @example
     * // Create many PullRequests
     * const pullRequest = await prisma.pullRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PullRequests and only return the `id`
     * const pullRequestWithIdOnly = await prisma.pullRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PullRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, PullRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PullRequest.
     * @param {PullRequestDeleteArgs} args - Arguments to delete one PullRequest.
     * @example
     * // Delete one PullRequest
     * const PullRequest = await prisma.pullRequest.delete({
     *   where: {
     *     // ... filter to delete one PullRequest
     *   }
     * })
     * 
     */
    delete<T extends PullRequestDeleteArgs>(args: SelectSubset<T, PullRequestDeleteArgs<ExtArgs>>): Prisma__PullRequestClient<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PullRequest.
     * @param {PullRequestUpdateArgs} args - Arguments to update one PullRequest.
     * @example
     * // Update one PullRequest
     * const pullRequest = await prisma.pullRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PullRequestUpdateArgs>(args: SelectSubset<T, PullRequestUpdateArgs<ExtArgs>>): Prisma__PullRequestClient<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PullRequests.
     * @param {PullRequestDeleteManyArgs} args - Arguments to filter PullRequests to delete.
     * @example
     * // Delete a few PullRequests
     * const { count } = await prisma.pullRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PullRequestDeleteManyArgs>(args?: SelectSubset<T, PullRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PullRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PullRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PullRequests
     * const pullRequest = await prisma.pullRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PullRequestUpdateManyArgs>(args: SelectSubset<T, PullRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PullRequests and returns the data updated in the database.
     * @param {PullRequestUpdateManyAndReturnArgs} args - Arguments to update many PullRequests.
     * @example
     * // Update many PullRequests
     * const pullRequest = await prisma.pullRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PullRequests and only return the `id`
     * const pullRequestWithIdOnly = await prisma.pullRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PullRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, PullRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PullRequest.
     * @param {PullRequestUpsertArgs} args - Arguments to update or create a PullRequest.
     * @example
     * // Update or create a PullRequest
     * const pullRequest = await prisma.pullRequest.upsert({
     *   create: {
     *     // ... data to create a PullRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PullRequest we want to update
     *   }
     * })
     */
    upsert<T extends PullRequestUpsertArgs>(args: SelectSubset<T, PullRequestUpsertArgs<ExtArgs>>): Prisma__PullRequestClient<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PullRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PullRequestCountArgs} args - Arguments to filter PullRequests to count.
     * @example
     * // Count the number of PullRequests
     * const count = await prisma.pullRequest.count({
     *   where: {
     *     // ... the filter for the PullRequests we want to count
     *   }
     * })
    **/
    count<T extends PullRequestCountArgs>(
      args?: Subset<T, PullRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PullRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PullRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PullRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PullRequestAggregateArgs>(args: Subset<T, PullRequestAggregateArgs>): Prisma.PrismaPromise<GetPullRequestAggregateType<T>>

    /**
     * Group by PullRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PullRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PullRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PullRequestGroupByArgs['orderBy'] }
        : { orderBy?: PullRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PullRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPullRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PullRequest model
   */
  readonly fields: PullRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PullRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PullRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    repository<T extends RepositoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RepositoryDefaultArgs<ExtArgs>>): Prisma__RepositoryClient<$Result.GetResult<Prisma.$RepositoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviewer<T extends PullRequest$reviewerArgs<ExtArgs> = {}>(args?: Subset<T, PullRequest$reviewerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    reviewSessions<T extends PullRequest$reviewSessionsArgs<ExtArgs> = {}>(args?: Subset<T, PullRequest$reviewSessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    securityFindings<T extends PullRequest$securityFindingsArgs<ExtArgs> = {}>(args?: Subset<T, PullRequest$securityFindingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityFindingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PullRequest model
   */
  interface PullRequestFieldRefs {
    readonly id: FieldRef<"PullRequest", 'String'>
    readonly repositoryId: FieldRef<"PullRequest", 'String'>
    readonly githubPrNumber: FieldRef<"PullRequest", 'Int'>
    readonly title: FieldRef<"PullRequest", 'String'>
    readonly body: FieldRef<"PullRequest", 'String'>
    readonly authorId: FieldRef<"PullRequest", 'String'>
    readonly status: FieldRef<"PullRequest", 'PRStatus'>
    readonly headBranch: FieldRef<"PullRequest", 'String'>
    readonly baseBranch: FieldRef<"PullRequest", 'String'>
    readonly diffUrl: FieldRef<"PullRequest", 'String'>
    readonly aiSummary: FieldRef<"PullRequest", 'String'>
    readonly securityScore: FieldRef<"PullRequest", 'Int'>
    readonly createdAt: FieldRef<"PullRequest", 'DateTime'>
    readonly updatedAt: FieldRef<"PullRequest", 'DateTime'>
    readonly reviewerId: FieldRef<"PullRequest", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PullRequest findUnique
   */
  export type PullRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequest
     */
    omit?: PullRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestInclude<ExtArgs> | null
    /**
     * Filter, which PullRequest to fetch.
     */
    where: PullRequestWhereUniqueInput
  }

  /**
   * PullRequest findUniqueOrThrow
   */
  export type PullRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequest
     */
    omit?: PullRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestInclude<ExtArgs> | null
    /**
     * Filter, which PullRequest to fetch.
     */
    where: PullRequestWhereUniqueInput
  }

  /**
   * PullRequest findFirst
   */
  export type PullRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequest
     */
    omit?: PullRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestInclude<ExtArgs> | null
    /**
     * Filter, which PullRequest to fetch.
     */
    where?: PullRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PullRequests to fetch.
     */
    orderBy?: PullRequestOrderByWithRelationInput | PullRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PullRequests.
     */
    cursor?: PullRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PullRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PullRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PullRequests.
     */
    distinct?: PullRequestScalarFieldEnum | PullRequestScalarFieldEnum[]
  }

  /**
   * PullRequest findFirstOrThrow
   */
  export type PullRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequest
     */
    omit?: PullRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestInclude<ExtArgs> | null
    /**
     * Filter, which PullRequest to fetch.
     */
    where?: PullRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PullRequests to fetch.
     */
    orderBy?: PullRequestOrderByWithRelationInput | PullRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PullRequests.
     */
    cursor?: PullRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PullRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PullRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PullRequests.
     */
    distinct?: PullRequestScalarFieldEnum | PullRequestScalarFieldEnum[]
  }

  /**
   * PullRequest findMany
   */
  export type PullRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequest
     */
    omit?: PullRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestInclude<ExtArgs> | null
    /**
     * Filter, which PullRequests to fetch.
     */
    where?: PullRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PullRequests to fetch.
     */
    orderBy?: PullRequestOrderByWithRelationInput | PullRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PullRequests.
     */
    cursor?: PullRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PullRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PullRequests.
     */
    skip?: number
    distinct?: PullRequestScalarFieldEnum | PullRequestScalarFieldEnum[]
  }

  /**
   * PullRequest create
   */
  export type PullRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequest
     */
    omit?: PullRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a PullRequest.
     */
    data: XOR<PullRequestCreateInput, PullRequestUncheckedCreateInput>
  }

  /**
   * PullRequest createMany
   */
  export type PullRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PullRequests.
     */
    data: PullRequestCreateManyInput | PullRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PullRequest createManyAndReturn
   */
  export type PullRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequest
     */
    omit?: PullRequestOmit<ExtArgs> | null
    /**
     * The data used to create many PullRequests.
     */
    data: PullRequestCreateManyInput | PullRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PullRequest update
   */
  export type PullRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequest
     */
    omit?: PullRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a PullRequest.
     */
    data: XOR<PullRequestUpdateInput, PullRequestUncheckedUpdateInput>
    /**
     * Choose, which PullRequest to update.
     */
    where: PullRequestWhereUniqueInput
  }

  /**
   * PullRequest updateMany
   */
  export type PullRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PullRequests.
     */
    data: XOR<PullRequestUpdateManyMutationInput, PullRequestUncheckedUpdateManyInput>
    /**
     * Filter which PullRequests to update
     */
    where?: PullRequestWhereInput
    /**
     * Limit how many PullRequests to update.
     */
    limit?: number
  }

  /**
   * PullRequest updateManyAndReturn
   */
  export type PullRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequest
     */
    omit?: PullRequestOmit<ExtArgs> | null
    /**
     * The data used to update PullRequests.
     */
    data: XOR<PullRequestUpdateManyMutationInput, PullRequestUncheckedUpdateManyInput>
    /**
     * Filter which PullRequests to update
     */
    where?: PullRequestWhereInput
    /**
     * Limit how many PullRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PullRequest upsert
   */
  export type PullRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequest
     */
    omit?: PullRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the PullRequest to update in case it exists.
     */
    where: PullRequestWhereUniqueInput
    /**
     * In case the PullRequest found by the `where` argument doesn't exist, create a new PullRequest with this data.
     */
    create: XOR<PullRequestCreateInput, PullRequestUncheckedCreateInput>
    /**
     * In case the PullRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PullRequestUpdateInput, PullRequestUncheckedUpdateInput>
  }

  /**
   * PullRequest delete
   */
  export type PullRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequest
     */
    omit?: PullRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestInclude<ExtArgs> | null
    /**
     * Filter which PullRequest to delete.
     */
    where: PullRequestWhereUniqueInput
  }

  /**
   * PullRequest deleteMany
   */
  export type PullRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PullRequests to delete
     */
    where?: PullRequestWhereInput
    /**
     * Limit how many PullRequests to delete.
     */
    limit?: number
  }

  /**
   * PullRequest.reviewer
   */
  export type PullRequest$reviewerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * PullRequest.reviewSessions
   */
  export type PullRequest$reviewSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewSession
     */
    select?: ReviewSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewSession
     */
    omit?: ReviewSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewSessionInclude<ExtArgs> | null
    where?: ReviewSessionWhereInput
    orderBy?: ReviewSessionOrderByWithRelationInput | ReviewSessionOrderByWithRelationInput[]
    cursor?: ReviewSessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewSessionScalarFieldEnum | ReviewSessionScalarFieldEnum[]
  }

  /**
   * PullRequest.securityFindings
   */
  export type PullRequest$securityFindingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityFinding
     */
    select?: SecurityFindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityFinding
     */
    omit?: SecurityFindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityFindingInclude<ExtArgs> | null
    where?: SecurityFindingWhereInput
    orderBy?: SecurityFindingOrderByWithRelationInput | SecurityFindingOrderByWithRelationInput[]
    cursor?: SecurityFindingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SecurityFindingScalarFieldEnum | SecurityFindingScalarFieldEnum[]
  }

  /**
   * PullRequest without action
   */
  export type PullRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PullRequest
     */
    select?: PullRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PullRequest
     */
    omit?: PullRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PullRequestInclude<ExtArgs> | null
  }


  /**
   * Model SecurityFinding
   */

  export type AggregateSecurityFinding = {
    _count: SecurityFindingCountAggregateOutputType | null
    _avg: SecurityFindingAvgAggregateOutputType | null
    _sum: SecurityFindingSumAggregateOutputType | null
    _min: SecurityFindingMinAggregateOutputType | null
    _max: SecurityFindingMaxAggregateOutputType | null
  }

  export type SecurityFindingAvgAggregateOutputType = {
    lineNumber: number | null
  }

  export type SecurityFindingSumAggregateOutputType = {
    lineNumber: number | null
  }

  export type SecurityFindingMinAggregateOutputType = {
    id: string | null
    pullRequestId: string | null
    filePath: string | null
    lineNumber: number | null
    severity: string | null
    category: string | null
    cweId: string | null
    description: string | null
    remediation: string | null
    isFalsePositive: boolean | null
    createdAt: Date | null
  }

  export type SecurityFindingMaxAggregateOutputType = {
    id: string | null
    pullRequestId: string | null
    filePath: string | null
    lineNumber: number | null
    severity: string | null
    category: string | null
    cweId: string | null
    description: string | null
    remediation: string | null
    isFalsePositive: boolean | null
    createdAt: Date | null
  }

  export type SecurityFindingCountAggregateOutputType = {
    id: number
    pullRequestId: number
    filePath: number
    lineNumber: number
    severity: number
    category: number
    cweId: number
    description: number
    remediation: number
    isFalsePositive: number
    createdAt: number
    _all: number
  }


  export type SecurityFindingAvgAggregateInputType = {
    lineNumber?: true
  }

  export type SecurityFindingSumAggregateInputType = {
    lineNumber?: true
  }

  export type SecurityFindingMinAggregateInputType = {
    id?: true
    pullRequestId?: true
    filePath?: true
    lineNumber?: true
    severity?: true
    category?: true
    cweId?: true
    description?: true
    remediation?: true
    isFalsePositive?: true
    createdAt?: true
  }

  export type SecurityFindingMaxAggregateInputType = {
    id?: true
    pullRequestId?: true
    filePath?: true
    lineNumber?: true
    severity?: true
    category?: true
    cweId?: true
    description?: true
    remediation?: true
    isFalsePositive?: true
    createdAt?: true
  }

  export type SecurityFindingCountAggregateInputType = {
    id?: true
    pullRequestId?: true
    filePath?: true
    lineNumber?: true
    severity?: true
    category?: true
    cweId?: true
    description?: true
    remediation?: true
    isFalsePositive?: true
    createdAt?: true
    _all?: true
  }

  export type SecurityFindingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SecurityFinding to aggregate.
     */
    where?: SecurityFindingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityFindings to fetch.
     */
    orderBy?: SecurityFindingOrderByWithRelationInput | SecurityFindingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SecurityFindingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityFindings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityFindings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SecurityFindings
    **/
    _count?: true | SecurityFindingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SecurityFindingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SecurityFindingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SecurityFindingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SecurityFindingMaxAggregateInputType
  }

  export type GetSecurityFindingAggregateType<T extends SecurityFindingAggregateArgs> = {
        [P in keyof T & keyof AggregateSecurityFinding]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSecurityFinding[P]>
      : GetScalarType<T[P], AggregateSecurityFinding[P]>
  }




  export type SecurityFindingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SecurityFindingWhereInput
    orderBy?: SecurityFindingOrderByWithAggregationInput | SecurityFindingOrderByWithAggregationInput[]
    by: SecurityFindingScalarFieldEnum[] | SecurityFindingScalarFieldEnum
    having?: SecurityFindingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SecurityFindingCountAggregateInputType | true
    _avg?: SecurityFindingAvgAggregateInputType
    _sum?: SecurityFindingSumAggregateInputType
    _min?: SecurityFindingMinAggregateInputType
    _max?: SecurityFindingMaxAggregateInputType
  }

  export type SecurityFindingGroupByOutputType = {
    id: string
    pullRequestId: string
    filePath: string
    lineNumber: number
    severity: string
    category: string
    cweId: string | null
    description: string
    remediation: string
    isFalsePositive: boolean
    createdAt: Date
    _count: SecurityFindingCountAggregateOutputType | null
    _avg: SecurityFindingAvgAggregateOutputType | null
    _sum: SecurityFindingSumAggregateOutputType | null
    _min: SecurityFindingMinAggregateOutputType | null
    _max: SecurityFindingMaxAggregateOutputType | null
  }

  type GetSecurityFindingGroupByPayload<T extends SecurityFindingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SecurityFindingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SecurityFindingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SecurityFindingGroupByOutputType[P]>
            : GetScalarType<T[P], SecurityFindingGroupByOutputType[P]>
        }
      >
    >


  export type SecurityFindingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pullRequestId?: boolean
    filePath?: boolean
    lineNumber?: boolean
    severity?: boolean
    category?: boolean
    cweId?: boolean
    description?: boolean
    remediation?: boolean
    isFalsePositive?: boolean
    createdAt?: boolean
    pullRequest?: boolean | PullRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["securityFinding"]>

  export type SecurityFindingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pullRequestId?: boolean
    filePath?: boolean
    lineNumber?: boolean
    severity?: boolean
    category?: boolean
    cweId?: boolean
    description?: boolean
    remediation?: boolean
    isFalsePositive?: boolean
    createdAt?: boolean
    pullRequest?: boolean | PullRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["securityFinding"]>

  export type SecurityFindingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pullRequestId?: boolean
    filePath?: boolean
    lineNumber?: boolean
    severity?: boolean
    category?: boolean
    cweId?: boolean
    description?: boolean
    remediation?: boolean
    isFalsePositive?: boolean
    createdAt?: boolean
    pullRequest?: boolean | PullRequestDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["securityFinding"]>

  export type SecurityFindingSelectScalar = {
    id?: boolean
    pullRequestId?: boolean
    filePath?: boolean
    lineNumber?: boolean
    severity?: boolean
    category?: boolean
    cweId?: boolean
    description?: boolean
    remediation?: boolean
    isFalsePositive?: boolean
    createdAt?: boolean
  }

  export type SecurityFindingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pullRequestId" | "filePath" | "lineNumber" | "severity" | "category" | "cweId" | "description" | "remediation" | "isFalsePositive" | "createdAt", ExtArgs["result"]["securityFinding"]>
  export type SecurityFindingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pullRequest?: boolean | PullRequestDefaultArgs<ExtArgs>
  }
  export type SecurityFindingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pullRequest?: boolean | PullRequestDefaultArgs<ExtArgs>
  }
  export type SecurityFindingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pullRequest?: boolean | PullRequestDefaultArgs<ExtArgs>
  }

  export type $SecurityFindingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SecurityFinding"
    objects: {
      pullRequest: Prisma.$PullRequestPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pullRequestId: string
      filePath: string
      lineNumber: number
      severity: string
      category: string
      cweId: string | null
      description: string
      remediation: string
      isFalsePositive: boolean
      createdAt: Date
    }, ExtArgs["result"]["securityFinding"]>
    composites: {}
  }

  type SecurityFindingGetPayload<S extends boolean | null | undefined | SecurityFindingDefaultArgs> = $Result.GetResult<Prisma.$SecurityFindingPayload, S>

  type SecurityFindingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SecurityFindingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SecurityFindingCountAggregateInputType | true
    }

  export interface SecurityFindingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SecurityFinding'], meta: { name: 'SecurityFinding' } }
    /**
     * Find zero or one SecurityFinding that matches the filter.
     * @param {SecurityFindingFindUniqueArgs} args - Arguments to find a SecurityFinding
     * @example
     * // Get one SecurityFinding
     * const securityFinding = await prisma.securityFinding.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SecurityFindingFindUniqueArgs>(args: SelectSubset<T, SecurityFindingFindUniqueArgs<ExtArgs>>): Prisma__SecurityFindingClient<$Result.GetResult<Prisma.$SecurityFindingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SecurityFinding that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SecurityFindingFindUniqueOrThrowArgs} args - Arguments to find a SecurityFinding
     * @example
     * // Get one SecurityFinding
     * const securityFinding = await prisma.securityFinding.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SecurityFindingFindUniqueOrThrowArgs>(args: SelectSubset<T, SecurityFindingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SecurityFindingClient<$Result.GetResult<Prisma.$SecurityFindingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SecurityFinding that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityFindingFindFirstArgs} args - Arguments to find a SecurityFinding
     * @example
     * // Get one SecurityFinding
     * const securityFinding = await prisma.securityFinding.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SecurityFindingFindFirstArgs>(args?: SelectSubset<T, SecurityFindingFindFirstArgs<ExtArgs>>): Prisma__SecurityFindingClient<$Result.GetResult<Prisma.$SecurityFindingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SecurityFinding that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityFindingFindFirstOrThrowArgs} args - Arguments to find a SecurityFinding
     * @example
     * // Get one SecurityFinding
     * const securityFinding = await prisma.securityFinding.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SecurityFindingFindFirstOrThrowArgs>(args?: SelectSubset<T, SecurityFindingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SecurityFindingClient<$Result.GetResult<Prisma.$SecurityFindingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SecurityFindings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityFindingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SecurityFindings
     * const securityFindings = await prisma.securityFinding.findMany()
     * 
     * // Get first 10 SecurityFindings
     * const securityFindings = await prisma.securityFinding.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const securityFindingWithIdOnly = await prisma.securityFinding.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SecurityFindingFindManyArgs>(args?: SelectSubset<T, SecurityFindingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityFindingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SecurityFinding.
     * @param {SecurityFindingCreateArgs} args - Arguments to create a SecurityFinding.
     * @example
     * // Create one SecurityFinding
     * const SecurityFinding = await prisma.securityFinding.create({
     *   data: {
     *     // ... data to create a SecurityFinding
     *   }
     * })
     * 
     */
    create<T extends SecurityFindingCreateArgs>(args: SelectSubset<T, SecurityFindingCreateArgs<ExtArgs>>): Prisma__SecurityFindingClient<$Result.GetResult<Prisma.$SecurityFindingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SecurityFindings.
     * @param {SecurityFindingCreateManyArgs} args - Arguments to create many SecurityFindings.
     * @example
     * // Create many SecurityFindings
     * const securityFinding = await prisma.securityFinding.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SecurityFindingCreateManyArgs>(args?: SelectSubset<T, SecurityFindingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SecurityFindings and returns the data saved in the database.
     * @param {SecurityFindingCreateManyAndReturnArgs} args - Arguments to create many SecurityFindings.
     * @example
     * // Create many SecurityFindings
     * const securityFinding = await prisma.securityFinding.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SecurityFindings and only return the `id`
     * const securityFindingWithIdOnly = await prisma.securityFinding.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SecurityFindingCreateManyAndReturnArgs>(args?: SelectSubset<T, SecurityFindingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityFindingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SecurityFinding.
     * @param {SecurityFindingDeleteArgs} args - Arguments to delete one SecurityFinding.
     * @example
     * // Delete one SecurityFinding
     * const SecurityFinding = await prisma.securityFinding.delete({
     *   where: {
     *     // ... filter to delete one SecurityFinding
     *   }
     * })
     * 
     */
    delete<T extends SecurityFindingDeleteArgs>(args: SelectSubset<T, SecurityFindingDeleteArgs<ExtArgs>>): Prisma__SecurityFindingClient<$Result.GetResult<Prisma.$SecurityFindingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SecurityFinding.
     * @param {SecurityFindingUpdateArgs} args - Arguments to update one SecurityFinding.
     * @example
     * // Update one SecurityFinding
     * const securityFinding = await prisma.securityFinding.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SecurityFindingUpdateArgs>(args: SelectSubset<T, SecurityFindingUpdateArgs<ExtArgs>>): Prisma__SecurityFindingClient<$Result.GetResult<Prisma.$SecurityFindingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SecurityFindings.
     * @param {SecurityFindingDeleteManyArgs} args - Arguments to filter SecurityFindings to delete.
     * @example
     * // Delete a few SecurityFindings
     * const { count } = await prisma.securityFinding.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SecurityFindingDeleteManyArgs>(args?: SelectSubset<T, SecurityFindingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SecurityFindings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityFindingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SecurityFindings
     * const securityFinding = await prisma.securityFinding.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SecurityFindingUpdateManyArgs>(args: SelectSubset<T, SecurityFindingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SecurityFindings and returns the data updated in the database.
     * @param {SecurityFindingUpdateManyAndReturnArgs} args - Arguments to update many SecurityFindings.
     * @example
     * // Update many SecurityFindings
     * const securityFinding = await prisma.securityFinding.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SecurityFindings and only return the `id`
     * const securityFindingWithIdOnly = await prisma.securityFinding.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SecurityFindingUpdateManyAndReturnArgs>(args: SelectSubset<T, SecurityFindingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecurityFindingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SecurityFinding.
     * @param {SecurityFindingUpsertArgs} args - Arguments to update or create a SecurityFinding.
     * @example
     * // Update or create a SecurityFinding
     * const securityFinding = await prisma.securityFinding.upsert({
     *   create: {
     *     // ... data to create a SecurityFinding
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SecurityFinding we want to update
     *   }
     * })
     */
    upsert<T extends SecurityFindingUpsertArgs>(args: SelectSubset<T, SecurityFindingUpsertArgs<ExtArgs>>): Prisma__SecurityFindingClient<$Result.GetResult<Prisma.$SecurityFindingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SecurityFindings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityFindingCountArgs} args - Arguments to filter SecurityFindings to count.
     * @example
     * // Count the number of SecurityFindings
     * const count = await prisma.securityFinding.count({
     *   where: {
     *     // ... the filter for the SecurityFindings we want to count
     *   }
     * })
    **/
    count<T extends SecurityFindingCountArgs>(
      args?: Subset<T, SecurityFindingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SecurityFindingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SecurityFinding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityFindingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SecurityFindingAggregateArgs>(args: Subset<T, SecurityFindingAggregateArgs>): Prisma.PrismaPromise<GetSecurityFindingAggregateType<T>>

    /**
     * Group by SecurityFinding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecurityFindingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SecurityFindingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SecurityFindingGroupByArgs['orderBy'] }
        : { orderBy?: SecurityFindingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SecurityFindingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSecurityFindingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SecurityFinding model
   */
  readonly fields: SecurityFindingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SecurityFinding.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SecurityFindingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pullRequest<T extends PullRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PullRequestDefaultArgs<ExtArgs>>): Prisma__PullRequestClient<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SecurityFinding model
   */
  interface SecurityFindingFieldRefs {
    readonly id: FieldRef<"SecurityFinding", 'String'>
    readonly pullRequestId: FieldRef<"SecurityFinding", 'String'>
    readonly filePath: FieldRef<"SecurityFinding", 'String'>
    readonly lineNumber: FieldRef<"SecurityFinding", 'Int'>
    readonly severity: FieldRef<"SecurityFinding", 'String'>
    readonly category: FieldRef<"SecurityFinding", 'String'>
    readonly cweId: FieldRef<"SecurityFinding", 'String'>
    readonly description: FieldRef<"SecurityFinding", 'String'>
    readonly remediation: FieldRef<"SecurityFinding", 'String'>
    readonly isFalsePositive: FieldRef<"SecurityFinding", 'Boolean'>
    readonly createdAt: FieldRef<"SecurityFinding", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SecurityFinding findUnique
   */
  export type SecurityFindingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityFinding
     */
    select?: SecurityFindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityFinding
     */
    omit?: SecurityFindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityFindingInclude<ExtArgs> | null
    /**
     * Filter, which SecurityFinding to fetch.
     */
    where: SecurityFindingWhereUniqueInput
  }

  /**
   * SecurityFinding findUniqueOrThrow
   */
  export type SecurityFindingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityFinding
     */
    select?: SecurityFindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityFinding
     */
    omit?: SecurityFindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityFindingInclude<ExtArgs> | null
    /**
     * Filter, which SecurityFinding to fetch.
     */
    where: SecurityFindingWhereUniqueInput
  }

  /**
   * SecurityFinding findFirst
   */
  export type SecurityFindingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityFinding
     */
    select?: SecurityFindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityFinding
     */
    omit?: SecurityFindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityFindingInclude<ExtArgs> | null
    /**
     * Filter, which SecurityFinding to fetch.
     */
    where?: SecurityFindingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityFindings to fetch.
     */
    orderBy?: SecurityFindingOrderByWithRelationInput | SecurityFindingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SecurityFindings.
     */
    cursor?: SecurityFindingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityFindings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityFindings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecurityFindings.
     */
    distinct?: SecurityFindingScalarFieldEnum | SecurityFindingScalarFieldEnum[]
  }

  /**
   * SecurityFinding findFirstOrThrow
   */
  export type SecurityFindingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityFinding
     */
    select?: SecurityFindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityFinding
     */
    omit?: SecurityFindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityFindingInclude<ExtArgs> | null
    /**
     * Filter, which SecurityFinding to fetch.
     */
    where?: SecurityFindingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityFindings to fetch.
     */
    orderBy?: SecurityFindingOrderByWithRelationInput | SecurityFindingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SecurityFindings.
     */
    cursor?: SecurityFindingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityFindings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityFindings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecurityFindings.
     */
    distinct?: SecurityFindingScalarFieldEnum | SecurityFindingScalarFieldEnum[]
  }

  /**
   * SecurityFinding findMany
   */
  export type SecurityFindingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityFinding
     */
    select?: SecurityFindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityFinding
     */
    omit?: SecurityFindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityFindingInclude<ExtArgs> | null
    /**
     * Filter, which SecurityFindings to fetch.
     */
    where?: SecurityFindingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecurityFindings to fetch.
     */
    orderBy?: SecurityFindingOrderByWithRelationInput | SecurityFindingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SecurityFindings.
     */
    cursor?: SecurityFindingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecurityFindings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecurityFindings.
     */
    skip?: number
    distinct?: SecurityFindingScalarFieldEnum | SecurityFindingScalarFieldEnum[]
  }

  /**
   * SecurityFinding create
   */
  export type SecurityFindingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityFinding
     */
    select?: SecurityFindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityFinding
     */
    omit?: SecurityFindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityFindingInclude<ExtArgs> | null
    /**
     * The data needed to create a SecurityFinding.
     */
    data: XOR<SecurityFindingCreateInput, SecurityFindingUncheckedCreateInput>
  }

  /**
   * SecurityFinding createMany
   */
  export type SecurityFindingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SecurityFindings.
     */
    data: SecurityFindingCreateManyInput | SecurityFindingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SecurityFinding createManyAndReturn
   */
  export type SecurityFindingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityFinding
     */
    select?: SecurityFindingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityFinding
     */
    omit?: SecurityFindingOmit<ExtArgs> | null
    /**
     * The data used to create many SecurityFindings.
     */
    data: SecurityFindingCreateManyInput | SecurityFindingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityFindingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SecurityFinding update
   */
  export type SecurityFindingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityFinding
     */
    select?: SecurityFindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityFinding
     */
    omit?: SecurityFindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityFindingInclude<ExtArgs> | null
    /**
     * The data needed to update a SecurityFinding.
     */
    data: XOR<SecurityFindingUpdateInput, SecurityFindingUncheckedUpdateInput>
    /**
     * Choose, which SecurityFinding to update.
     */
    where: SecurityFindingWhereUniqueInput
  }

  /**
   * SecurityFinding updateMany
   */
  export type SecurityFindingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SecurityFindings.
     */
    data: XOR<SecurityFindingUpdateManyMutationInput, SecurityFindingUncheckedUpdateManyInput>
    /**
     * Filter which SecurityFindings to update
     */
    where?: SecurityFindingWhereInput
    /**
     * Limit how many SecurityFindings to update.
     */
    limit?: number
  }

  /**
   * SecurityFinding updateManyAndReturn
   */
  export type SecurityFindingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityFinding
     */
    select?: SecurityFindingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityFinding
     */
    omit?: SecurityFindingOmit<ExtArgs> | null
    /**
     * The data used to update SecurityFindings.
     */
    data: XOR<SecurityFindingUpdateManyMutationInput, SecurityFindingUncheckedUpdateManyInput>
    /**
     * Filter which SecurityFindings to update
     */
    where?: SecurityFindingWhereInput
    /**
     * Limit how many SecurityFindings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityFindingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SecurityFinding upsert
   */
  export type SecurityFindingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityFinding
     */
    select?: SecurityFindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityFinding
     */
    omit?: SecurityFindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityFindingInclude<ExtArgs> | null
    /**
     * The filter to search for the SecurityFinding to update in case it exists.
     */
    where: SecurityFindingWhereUniqueInput
    /**
     * In case the SecurityFinding found by the `where` argument doesn't exist, create a new SecurityFinding with this data.
     */
    create: XOR<SecurityFindingCreateInput, SecurityFindingUncheckedCreateInput>
    /**
     * In case the SecurityFinding was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SecurityFindingUpdateInput, SecurityFindingUncheckedUpdateInput>
  }

  /**
   * SecurityFinding delete
   */
  export type SecurityFindingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityFinding
     */
    select?: SecurityFindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityFinding
     */
    omit?: SecurityFindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityFindingInclude<ExtArgs> | null
    /**
     * Filter which SecurityFinding to delete.
     */
    where: SecurityFindingWhereUniqueInput
  }

  /**
   * SecurityFinding deleteMany
   */
  export type SecurityFindingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SecurityFindings to delete
     */
    where?: SecurityFindingWhereInput
    /**
     * Limit how many SecurityFindings to delete.
     */
    limit?: number
  }

  /**
   * SecurityFinding without action
   */
  export type SecurityFindingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecurityFinding
     */
    select?: SecurityFindingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecurityFinding
     */
    omit?: SecurityFindingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SecurityFindingInclude<ExtArgs> | null
  }


  /**
   * Model ReviewSession
   */

  export type AggregateReviewSession = {
    _count: ReviewSessionCountAggregateOutputType | null
    _min: ReviewSessionMinAggregateOutputType | null
    _max: ReviewSessionMaxAggregateOutputType | null
  }

  export type ReviewSessionMinAggregateOutputType = {
    id: string | null
    pullRequestId: string | null
    createdBy: string | null
    isActive: boolean | null
    createdAt: Date | null
    endedAt: Date | null
  }

  export type ReviewSessionMaxAggregateOutputType = {
    id: string | null
    pullRequestId: string | null
    createdBy: string | null
    isActive: boolean | null
    createdAt: Date | null
    endedAt: Date | null
  }

  export type ReviewSessionCountAggregateOutputType = {
    id: number
    pullRequestId: number
    createdBy: number
    isActive: number
    createdAt: number
    endedAt: number
    _all: number
  }


  export type ReviewSessionMinAggregateInputType = {
    id?: true
    pullRequestId?: true
    createdBy?: true
    isActive?: true
    createdAt?: true
    endedAt?: true
  }

  export type ReviewSessionMaxAggregateInputType = {
    id?: true
    pullRequestId?: true
    createdBy?: true
    isActive?: true
    createdAt?: true
    endedAt?: true
  }

  export type ReviewSessionCountAggregateInputType = {
    id?: true
    pullRequestId?: true
    createdBy?: true
    isActive?: true
    createdAt?: true
    endedAt?: true
    _all?: true
  }

  export type ReviewSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewSession to aggregate.
     */
    where?: ReviewSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewSessions to fetch.
     */
    orderBy?: ReviewSessionOrderByWithRelationInput | ReviewSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReviewSessions
    **/
    _count?: true | ReviewSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewSessionMaxAggregateInputType
  }

  export type GetReviewSessionAggregateType<T extends ReviewSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateReviewSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviewSession[P]>
      : GetScalarType<T[P], AggregateReviewSession[P]>
  }




  export type ReviewSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewSessionWhereInput
    orderBy?: ReviewSessionOrderByWithAggregationInput | ReviewSessionOrderByWithAggregationInput[]
    by: ReviewSessionScalarFieldEnum[] | ReviewSessionScalarFieldEnum
    having?: ReviewSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewSessionCountAggregateInputType | true
    _min?: ReviewSessionMinAggregateInputType
    _max?: ReviewSessionMaxAggregateInputType
  }

  export type ReviewSessionGroupByOutputType = {
    id: string
    pullRequestId: string
    createdBy: string
    isActive: boolean
    createdAt: Date
    endedAt: Date | null
    _count: ReviewSessionCountAggregateOutputType | null
    _min: ReviewSessionMinAggregateOutputType | null
    _max: ReviewSessionMaxAggregateOutputType | null
  }

  type GetReviewSessionGroupByPayload<T extends ReviewSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewSessionGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewSessionGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pullRequestId?: boolean
    createdBy?: boolean
    isActive?: boolean
    createdAt?: boolean
    endedAt?: boolean
    pullRequest?: boolean | PullRequestDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | ReviewSession$commentsArgs<ExtArgs>
    _count?: boolean | ReviewSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewSession"]>

  export type ReviewSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pullRequestId?: boolean
    createdBy?: boolean
    isActive?: boolean
    createdAt?: boolean
    endedAt?: boolean
    pullRequest?: boolean | PullRequestDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewSession"]>

  export type ReviewSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pullRequestId?: boolean
    createdBy?: boolean
    isActive?: boolean
    createdAt?: boolean
    endedAt?: boolean
    pullRequest?: boolean | PullRequestDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviewSession"]>

  export type ReviewSessionSelectScalar = {
    id?: boolean
    pullRequestId?: boolean
    createdBy?: boolean
    isActive?: boolean
    createdAt?: boolean
    endedAt?: boolean
  }

  export type ReviewSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pullRequestId" | "createdBy" | "isActive" | "createdAt" | "endedAt", ExtArgs["result"]["reviewSession"]>
  export type ReviewSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pullRequest?: boolean | PullRequestDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
    comments?: boolean | ReviewSession$commentsArgs<ExtArgs>
    _count?: boolean | ReviewSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReviewSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pullRequest?: boolean | PullRequestDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReviewSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pullRequest?: boolean | PullRequestDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReviewSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReviewSession"
    objects: {
      pullRequest: Prisma.$PullRequestPayload<ExtArgs>
      creator: Prisma.$UserPayload<ExtArgs>
      comments: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pullRequestId: string
      createdBy: string
      isActive: boolean
      createdAt: Date
      endedAt: Date | null
    }, ExtArgs["result"]["reviewSession"]>
    composites: {}
  }

  type ReviewSessionGetPayload<S extends boolean | null | undefined | ReviewSessionDefaultArgs> = $Result.GetResult<Prisma.$ReviewSessionPayload, S>

  type ReviewSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewSessionCountAggregateInputType | true
    }

  export interface ReviewSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReviewSession'], meta: { name: 'ReviewSession' } }
    /**
     * Find zero or one ReviewSession that matches the filter.
     * @param {ReviewSessionFindUniqueArgs} args - Arguments to find a ReviewSession
     * @example
     * // Get one ReviewSession
     * const reviewSession = await prisma.reviewSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewSessionFindUniqueArgs>(args: SelectSubset<T, ReviewSessionFindUniqueArgs<ExtArgs>>): Prisma__ReviewSessionClient<$Result.GetResult<Prisma.$ReviewSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReviewSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewSessionFindUniqueOrThrowArgs} args - Arguments to find a ReviewSession
     * @example
     * // Get one ReviewSession
     * const reviewSession = await prisma.reviewSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewSessionClient<$Result.GetResult<Prisma.$ReviewSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewSessionFindFirstArgs} args - Arguments to find a ReviewSession
     * @example
     * // Get one ReviewSession
     * const reviewSession = await prisma.reviewSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewSessionFindFirstArgs>(args?: SelectSubset<T, ReviewSessionFindFirstArgs<ExtArgs>>): Prisma__ReviewSessionClient<$Result.GetResult<Prisma.$ReviewSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReviewSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewSessionFindFirstOrThrowArgs} args - Arguments to find a ReviewSession
     * @example
     * // Get one ReviewSession
     * const reviewSession = await prisma.reviewSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewSessionClient<$Result.GetResult<Prisma.$ReviewSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReviewSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReviewSessions
     * const reviewSessions = await prisma.reviewSession.findMany()
     * 
     * // Get first 10 ReviewSessions
     * const reviewSessions = await prisma.reviewSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewSessionWithIdOnly = await prisma.reviewSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewSessionFindManyArgs>(args?: SelectSubset<T, ReviewSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReviewSession.
     * @param {ReviewSessionCreateArgs} args - Arguments to create a ReviewSession.
     * @example
     * // Create one ReviewSession
     * const ReviewSession = await prisma.reviewSession.create({
     *   data: {
     *     // ... data to create a ReviewSession
     *   }
     * })
     * 
     */
    create<T extends ReviewSessionCreateArgs>(args: SelectSubset<T, ReviewSessionCreateArgs<ExtArgs>>): Prisma__ReviewSessionClient<$Result.GetResult<Prisma.$ReviewSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReviewSessions.
     * @param {ReviewSessionCreateManyArgs} args - Arguments to create many ReviewSessions.
     * @example
     * // Create many ReviewSessions
     * const reviewSession = await prisma.reviewSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewSessionCreateManyArgs>(args?: SelectSubset<T, ReviewSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReviewSessions and returns the data saved in the database.
     * @param {ReviewSessionCreateManyAndReturnArgs} args - Arguments to create many ReviewSessions.
     * @example
     * // Create many ReviewSessions
     * const reviewSession = await prisma.reviewSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReviewSessions and only return the `id`
     * const reviewSessionWithIdOnly = await prisma.reviewSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ReviewSession.
     * @param {ReviewSessionDeleteArgs} args - Arguments to delete one ReviewSession.
     * @example
     * // Delete one ReviewSession
     * const ReviewSession = await prisma.reviewSession.delete({
     *   where: {
     *     // ... filter to delete one ReviewSession
     *   }
     * })
     * 
     */
    delete<T extends ReviewSessionDeleteArgs>(args: SelectSubset<T, ReviewSessionDeleteArgs<ExtArgs>>): Prisma__ReviewSessionClient<$Result.GetResult<Prisma.$ReviewSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReviewSession.
     * @param {ReviewSessionUpdateArgs} args - Arguments to update one ReviewSession.
     * @example
     * // Update one ReviewSession
     * const reviewSession = await prisma.reviewSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewSessionUpdateArgs>(args: SelectSubset<T, ReviewSessionUpdateArgs<ExtArgs>>): Prisma__ReviewSessionClient<$Result.GetResult<Prisma.$ReviewSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReviewSessions.
     * @param {ReviewSessionDeleteManyArgs} args - Arguments to filter ReviewSessions to delete.
     * @example
     * // Delete a few ReviewSessions
     * const { count } = await prisma.reviewSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewSessionDeleteManyArgs>(args?: SelectSubset<T, ReviewSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReviewSessions
     * const reviewSession = await prisma.reviewSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewSessionUpdateManyArgs>(args: SelectSubset<T, ReviewSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReviewSessions and returns the data updated in the database.
     * @param {ReviewSessionUpdateManyAndReturnArgs} args - Arguments to update many ReviewSessions.
     * @example
     * // Update many ReviewSessions
     * const reviewSession = await prisma.reviewSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ReviewSessions and only return the `id`
     * const reviewSessionWithIdOnly = await prisma.reviewSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ReviewSession.
     * @param {ReviewSessionUpsertArgs} args - Arguments to update or create a ReviewSession.
     * @example
     * // Update or create a ReviewSession
     * const reviewSession = await prisma.reviewSession.upsert({
     *   create: {
     *     // ... data to create a ReviewSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReviewSession we want to update
     *   }
     * })
     */
    upsert<T extends ReviewSessionUpsertArgs>(args: SelectSubset<T, ReviewSessionUpsertArgs<ExtArgs>>): Prisma__ReviewSessionClient<$Result.GetResult<Prisma.$ReviewSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ReviewSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewSessionCountArgs} args - Arguments to filter ReviewSessions to count.
     * @example
     * // Count the number of ReviewSessions
     * const count = await prisma.reviewSession.count({
     *   where: {
     *     // ... the filter for the ReviewSessions we want to count
     *   }
     * })
    **/
    count<T extends ReviewSessionCountArgs>(
      args?: Subset<T, ReviewSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReviewSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewSessionAggregateArgs>(args: Subset<T, ReviewSessionAggregateArgs>): Prisma.PrismaPromise<GetReviewSessionAggregateType<T>>

    /**
     * Group by ReviewSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewSessionGroupByArgs['orderBy'] }
        : { orderBy?: ReviewSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReviewSession model
   */
  readonly fields: ReviewSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReviewSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pullRequest<T extends PullRequestDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PullRequestDefaultArgs<ExtArgs>>): Prisma__PullRequestClient<$Result.GetResult<Prisma.$PullRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    comments<T extends ReviewSession$commentsArgs<ExtArgs> = {}>(args?: Subset<T, ReviewSession$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ReviewSession model
   */
  interface ReviewSessionFieldRefs {
    readonly id: FieldRef<"ReviewSession", 'String'>
    readonly pullRequestId: FieldRef<"ReviewSession", 'String'>
    readonly createdBy: FieldRef<"ReviewSession", 'String'>
    readonly isActive: FieldRef<"ReviewSession", 'Boolean'>
    readonly createdAt: FieldRef<"ReviewSession", 'DateTime'>
    readonly endedAt: FieldRef<"ReviewSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReviewSession findUnique
   */
  export type ReviewSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewSession
     */
    select?: ReviewSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewSession
     */
    omit?: ReviewSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewSessionInclude<ExtArgs> | null
    /**
     * Filter, which ReviewSession to fetch.
     */
    where: ReviewSessionWhereUniqueInput
  }

  /**
   * ReviewSession findUniqueOrThrow
   */
  export type ReviewSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewSession
     */
    select?: ReviewSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewSession
     */
    omit?: ReviewSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewSessionInclude<ExtArgs> | null
    /**
     * Filter, which ReviewSession to fetch.
     */
    where: ReviewSessionWhereUniqueInput
  }

  /**
   * ReviewSession findFirst
   */
  export type ReviewSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewSession
     */
    select?: ReviewSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewSession
     */
    omit?: ReviewSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewSessionInclude<ExtArgs> | null
    /**
     * Filter, which ReviewSession to fetch.
     */
    where?: ReviewSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewSessions to fetch.
     */
    orderBy?: ReviewSessionOrderByWithRelationInput | ReviewSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewSessions.
     */
    cursor?: ReviewSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewSessions.
     */
    distinct?: ReviewSessionScalarFieldEnum | ReviewSessionScalarFieldEnum[]
  }

  /**
   * ReviewSession findFirstOrThrow
   */
  export type ReviewSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewSession
     */
    select?: ReviewSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewSession
     */
    omit?: ReviewSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewSessionInclude<ExtArgs> | null
    /**
     * Filter, which ReviewSession to fetch.
     */
    where?: ReviewSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewSessions to fetch.
     */
    orderBy?: ReviewSessionOrderByWithRelationInput | ReviewSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReviewSessions.
     */
    cursor?: ReviewSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReviewSessions.
     */
    distinct?: ReviewSessionScalarFieldEnum | ReviewSessionScalarFieldEnum[]
  }

  /**
   * ReviewSession findMany
   */
  export type ReviewSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewSession
     */
    select?: ReviewSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewSession
     */
    omit?: ReviewSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewSessionInclude<ExtArgs> | null
    /**
     * Filter, which ReviewSessions to fetch.
     */
    where?: ReviewSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReviewSessions to fetch.
     */
    orderBy?: ReviewSessionOrderByWithRelationInput | ReviewSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReviewSessions.
     */
    cursor?: ReviewSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReviewSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReviewSessions.
     */
    skip?: number
    distinct?: ReviewSessionScalarFieldEnum | ReviewSessionScalarFieldEnum[]
  }

  /**
   * ReviewSession create
   */
  export type ReviewSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewSession
     */
    select?: ReviewSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewSession
     */
    omit?: ReviewSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a ReviewSession.
     */
    data: XOR<ReviewSessionCreateInput, ReviewSessionUncheckedCreateInput>
  }

  /**
   * ReviewSession createMany
   */
  export type ReviewSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReviewSessions.
     */
    data: ReviewSessionCreateManyInput | ReviewSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReviewSession createManyAndReturn
   */
  export type ReviewSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewSession
     */
    select?: ReviewSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewSession
     */
    omit?: ReviewSessionOmit<ExtArgs> | null
    /**
     * The data used to create many ReviewSessions.
     */
    data: ReviewSessionCreateManyInput | ReviewSessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewSessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReviewSession update
   */
  export type ReviewSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewSession
     */
    select?: ReviewSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewSession
     */
    omit?: ReviewSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a ReviewSession.
     */
    data: XOR<ReviewSessionUpdateInput, ReviewSessionUncheckedUpdateInput>
    /**
     * Choose, which ReviewSession to update.
     */
    where: ReviewSessionWhereUniqueInput
  }

  /**
   * ReviewSession updateMany
   */
  export type ReviewSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReviewSessions.
     */
    data: XOR<ReviewSessionUpdateManyMutationInput, ReviewSessionUncheckedUpdateManyInput>
    /**
     * Filter which ReviewSessions to update
     */
    where?: ReviewSessionWhereInput
    /**
     * Limit how many ReviewSessions to update.
     */
    limit?: number
  }

  /**
   * ReviewSession updateManyAndReturn
   */
  export type ReviewSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewSession
     */
    select?: ReviewSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewSession
     */
    omit?: ReviewSessionOmit<ExtArgs> | null
    /**
     * The data used to update ReviewSessions.
     */
    data: XOR<ReviewSessionUpdateManyMutationInput, ReviewSessionUncheckedUpdateManyInput>
    /**
     * Filter which ReviewSessions to update
     */
    where?: ReviewSessionWhereInput
    /**
     * Limit how many ReviewSessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewSessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ReviewSession upsert
   */
  export type ReviewSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewSession
     */
    select?: ReviewSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewSession
     */
    omit?: ReviewSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the ReviewSession to update in case it exists.
     */
    where: ReviewSessionWhereUniqueInput
    /**
     * In case the ReviewSession found by the `where` argument doesn't exist, create a new ReviewSession with this data.
     */
    create: XOR<ReviewSessionCreateInput, ReviewSessionUncheckedCreateInput>
    /**
     * In case the ReviewSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewSessionUpdateInput, ReviewSessionUncheckedUpdateInput>
  }

  /**
   * ReviewSession delete
   */
  export type ReviewSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewSession
     */
    select?: ReviewSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewSession
     */
    omit?: ReviewSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewSessionInclude<ExtArgs> | null
    /**
     * Filter which ReviewSession to delete.
     */
    where: ReviewSessionWhereUniqueInput
  }

  /**
   * ReviewSession deleteMany
   */
  export type ReviewSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReviewSessions to delete
     */
    where?: ReviewSessionWhereInput
    /**
     * Limit how many ReviewSessions to delete.
     */
    limit?: number
  }

  /**
   * ReviewSession.comments
   */
  export type ReviewSession$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * ReviewSession without action
   */
  export type ReviewSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReviewSession
     */
    select?: ReviewSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReviewSession
     */
    omit?: ReviewSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewSessionInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    lineNumber: number | null
  }

  export type CommentSumAggregateOutputType = {
    lineNumber: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: string | null
    reviewSessionId: string | null
    authorId: string | null
    filePath: string | null
    lineNumber: number | null
    content: string | null
    parentId: string | null
    resolvedAt: Date | null
    isAI: boolean | null
    severity: string | null
    category: string | null
    suggestedFix: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: string | null
    reviewSessionId: string | null
    authorId: string | null
    filePath: string | null
    lineNumber: number | null
    content: string | null
    parentId: string | null
    resolvedAt: Date | null
    isAI: boolean | null
    severity: string | null
    category: string | null
    suggestedFix: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    reviewSessionId: number
    authorId: number
    filePath: number
    lineNumber: number
    content: number
    parentId: number
    resolvedAt: number
    isAI: number
    severity: number
    category: number
    suggestedFix: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    lineNumber?: true
  }

  export type CommentSumAggregateInputType = {
    lineNumber?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    reviewSessionId?: true
    authorId?: true
    filePath?: true
    lineNumber?: true
    content?: true
    parentId?: true
    resolvedAt?: true
    isAI?: true
    severity?: true
    category?: true
    suggestedFix?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    reviewSessionId?: true
    authorId?: true
    filePath?: true
    lineNumber?: true
    content?: true
    parentId?: true
    resolvedAt?: true
    isAI?: true
    severity?: true
    category?: true
    suggestedFix?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    reviewSessionId?: true
    authorId?: true
    filePath?: true
    lineNumber?: true
    content?: true
    parentId?: true
    resolvedAt?: true
    isAI?: true
    severity?: true
    category?: true
    suggestedFix?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: string
    reviewSessionId: string
    authorId: string
    filePath: string
    lineNumber: number
    content: string
    parentId: string | null
    resolvedAt: Date | null
    isAI: boolean
    severity: string | null
    category: string | null
    suggestedFix: string | null
    createdAt: Date
    updatedAt: Date
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewSessionId?: boolean
    authorId?: boolean
    filePath?: boolean
    lineNumber?: boolean
    content?: boolean
    parentId?: boolean
    resolvedAt?: boolean
    isAI?: boolean
    severity?: boolean
    category?: boolean
    suggestedFix?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reviewSession?: boolean | ReviewSessionDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
    replies?: boolean | Comment$repliesArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewSessionId?: boolean
    authorId?: boolean
    filePath?: boolean
    lineNumber?: boolean
    content?: boolean
    parentId?: boolean
    resolvedAt?: boolean
    isAI?: boolean
    severity?: boolean
    category?: boolean
    suggestedFix?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reviewSession?: boolean | ReviewSessionDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reviewSessionId?: boolean
    authorId?: boolean
    filePath?: boolean
    lineNumber?: boolean
    content?: boolean
    parentId?: boolean
    resolvedAt?: boolean
    isAI?: boolean
    severity?: boolean
    category?: boolean
    suggestedFix?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reviewSession?: boolean | ReviewSessionDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    reviewSessionId?: boolean
    authorId?: boolean
    filePath?: boolean
    lineNumber?: boolean
    content?: boolean
    parentId?: boolean
    resolvedAt?: boolean
    isAI?: boolean
    severity?: boolean
    category?: boolean
    suggestedFix?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reviewSessionId" | "authorId" | "filePath" | "lineNumber" | "content" | "parentId" | "resolvedAt" | "isAI" | "severity" | "category" | "suggestedFix" | "createdAt" | "updatedAt", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviewSession?: boolean | ReviewSessionDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
    replies?: boolean | Comment$repliesArgs<ExtArgs>
    _count?: boolean | CommentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviewSession?: boolean | ReviewSessionDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviewSession?: boolean | ReviewSessionDefaultArgs<ExtArgs>
    author?: boolean | UserDefaultArgs<ExtArgs>
    parent?: boolean | Comment$parentArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      reviewSession: Prisma.$ReviewSessionPayload<ExtArgs>
      author: Prisma.$UserPayload<ExtArgs>
      parent: Prisma.$CommentPayload<ExtArgs> | null
      replies: Prisma.$CommentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      reviewSessionId: string
      authorId: string
      filePath: string
      lineNumber: number
      content: string
      parentId: string | null
      resolvedAt: Date | null
      isAI: boolean
      severity: string | null
      category: string | null
      suggestedFix: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reviewSession<T extends ReviewSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReviewSessionDefaultArgs<ExtArgs>>): Prisma__ReviewSessionClient<$Result.GetResult<Prisma.$ReviewSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parent<T extends Comment$parentArgs<ExtArgs> = {}>(args?: Subset<T, Comment$parentArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    replies<T extends Comment$repliesArgs<ExtArgs> = {}>(args?: Subset<T, Comment$repliesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'String'>
    readonly reviewSessionId: FieldRef<"Comment", 'String'>
    readonly authorId: FieldRef<"Comment", 'String'>
    readonly filePath: FieldRef<"Comment", 'String'>
    readonly lineNumber: FieldRef<"Comment", 'Int'>
    readonly content: FieldRef<"Comment", 'String'>
    readonly parentId: FieldRef<"Comment", 'String'>
    readonly resolvedAt: FieldRef<"Comment", 'DateTime'>
    readonly isAI: FieldRef<"Comment", 'Boolean'>
    readonly severity: FieldRef<"Comment", 'String'>
    readonly category: FieldRef<"Comment", 'String'>
    readonly suggestedFix: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
    readonly updatedAt: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment.parent
   */
  export type Comment$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
  }

  /**
   * Comment.replies
   */
  export type Comment$repliesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    lemonSqueezyCustomerId: string | null
    lemonSqueezyVariantId: string | null
    lemonSqueezySubscriptionId: string | null
    status: string | null
    currentPeriodEnd: Date | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    lemonSqueezyCustomerId: string | null
    lemonSqueezyVariantId: string | null
    lemonSqueezySubscriptionId: string | null
    status: string | null
    currentPeriodEnd: Date | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    workspaceId: number
    lemonSqueezyCustomerId: number
    lemonSqueezyVariantId: number
    lemonSqueezySubscriptionId: number
    status: number
    currentPeriodEnd: number
    _all: number
  }


  export type SubscriptionMinAggregateInputType = {
    id?: true
    workspaceId?: true
    lemonSqueezyCustomerId?: true
    lemonSqueezyVariantId?: true
    lemonSqueezySubscriptionId?: true
    status?: true
    currentPeriodEnd?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    workspaceId?: true
    lemonSqueezyCustomerId?: true
    lemonSqueezyVariantId?: true
    lemonSqueezySubscriptionId?: true
    status?: true
    currentPeriodEnd?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    workspaceId?: true
    lemonSqueezyCustomerId?: true
    lemonSqueezyVariantId?: true
    lemonSqueezySubscriptionId?: true
    status?: true
    currentPeriodEnd?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: string
    workspaceId: string
    lemonSqueezyCustomerId: string
    lemonSqueezyVariantId: string
    lemonSqueezySubscriptionId: string
    status: string
    currentPeriodEnd: Date
    _count: SubscriptionCountAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    lemonSqueezyCustomerId?: boolean
    lemonSqueezyVariantId?: boolean
    lemonSqueezySubscriptionId?: boolean
    status?: boolean
    currentPeriodEnd?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    lemonSqueezyCustomerId?: boolean
    lemonSqueezyVariantId?: boolean
    lemonSqueezySubscriptionId?: boolean
    status?: boolean
    currentPeriodEnd?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    lemonSqueezyCustomerId?: boolean
    lemonSqueezyVariantId?: boolean
    lemonSqueezySubscriptionId?: boolean
    status?: boolean
    currentPeriodEnd?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    id?: boolean
    workspaceId?: boolean
    lemonSqueezyCustomerId?: boolean
    lemonSqueezyVariantId?: boolean
    lemonSqueezySubscriptionId?: boolean
    status?: boolean
    currentPeriodEnd?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workspaceId" | "lemonSqueezyCustomerId" | "lemonSqueezyVariantId" | "lemonSqueezySubscriptionId" | "status" | "currentPeriodEnd", ExtArgs["result"]["subscription"]>
  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      workspace: Prisma.$WorkspacePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workspaceId: string
      lemonSqueezyCustomerId: string
      lemonSqueezyVariantId: string
      lemonSqueezySubscriptionId: string
      status: string
      currentPeriodEnd: Date
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {SubscriptionUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subscription model
   */
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'String'>
    readonly workspaceId: FieldRef<"Subscription", 'String'>
    readonly lemonSqueezyCustomerId: FieldRef<"Subscription", 'String'>
    readonly lemonSqueezyVariantId: FieldRef<"Subscription", 'String'>
    readonly lemonSqueezySubscriptionId: FieldRef<"Subscription", 'String'>
    readonly status: FieldRef<"Subscription", 'String'>
    readonly currentPeriodEnd: FieldRef<"Subscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription updateManyAndReturn
   */
  export type SubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    title: string | null
    body: string | null
    link: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    title: string | null
    body: string | null
    link: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    title: number
    body: number
    link: number
    isRead: number
    createdAt: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    body?: true
    link?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    body?: true
    link?: true
    isRead?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    title?: true
    body?: true
    link?: true
    isRead?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    userId: string
    type: string
    title: string
    body: string
    link: string | null
    isRead: boolean
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    body?: boolean
    link?: boolean
    isRead?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    body?: boolean
    link?: boolean
    isRead?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    body?: boolean
    link?: boolean
    isRead?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    title?: boolean
    body?: boolean
    link?: boolean
    isRead?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "title" | "body" | "link" | "isRead" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      title: string
      body: string
      link: string | null
      isRead: boolean
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly type: FieldRef<"Notification", 'String'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly body: FieldRef<"Notification", 'String'>
    readonly link: FieldRef<"Notification", 'String'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model WorkspaceSlackConfig
   */

  export type AggregateWorkspaceSlackConfig = {
    _count: WorkspaceSlackConfigCountAggregateOutputType | null
    _min: WorkspaceSlackConfigMinAggregateOutputType | null
    _max: WorkspaceSlackConfigMaxAggregateOutputType | null
  }

  export type WorkspaceSlackConfigMinAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    webhookUrl: string | null
    channelName: string | null
    createdAt: Date | null
  }

  export type WorkspaceSlackConfigMaxAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    webhookUrl: string | null
    channelName: string | null
    createdAt: Date | null
  }

  export type WorkspaceSlackConfigCountAggregateOutputType = {
    id: number
    workspaceId: number
    webhookUrl: number
    channelName: number
    createdAt: number
    _all: number
  }


  export type WorkspaceSlackConfigMinAggregateInputType = {
    id?: true
    workspaceId?: true
    webhookUrl?: true
    channelName?: true
    createdAt?: true
  }

  export type WorkspaceSlackConfigMaxAggregateInputType = {
    id?: true
    workspaceId?: true
    webhookUrl?: true
    channelName?: true
    createdAt?: true
  }

  export type WorkspaceSlackConfigCountAggregateInputType = {
    id?: true
    workspaceId?: true
    webhookUrl?: true
    channelName?: true
    createdAt?: true
    _all?: true
  }

  export type WorkspaceSlackConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkspaceSlackConfig to aggregate.
     */
    where?: WorkspaceSlackConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkspaceSlackConfigs to fetch.
     */
    orderBy?: WorkspaceSlackConfigOrderByWithRelationInput | WorkspaceSlackConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkspaceSlackConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkspaceSlackConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkspaceSlackConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkspaceSlackConfigs
    **/
    _count?: true | WorkspaceSlackConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkspaceSlackConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkspaceSlackConfigMaxAggregateInputType
  }

  export type GetWorkspaceSlackConfigAggregateType<T extends WorkspaceSlackConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkspaceSlackConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkspaceSlackConfig[P]>
      : GetScalarType<T[P], AggregateWorkspaceSlackConfig[P]>
  }




  export type WorkspaceSlackConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkspaceSlackConfigWhereInput
    orderBy?: WorkspaceSlackConfigOrderByWithAggregationInput | WorkspaceSlackConfigOrderByWithAggregationInput[]
    by: WorkspaceSlackConfigScalarFieldEnum[] | WorkspaceSlackConfigScalarFieldEnum
    having?: WorkspaceSlackConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkspaceSlackConfigCountAggregateInputType | true
    _min?: WorkspaceSlackConfigMinAggregateInputType
    _max?: WorkspaceSlackConfigMaxAggregateInputType
  }

  export type WorkspaceSlackConfigGroupByOutputType = {
    id: string
    workspaceId: string
    webhookUrl: string
    channelName: string | null
    createdAt: Date
    _count: WorkspaceSlackConfigCountAggregateOutputType | null
    _min: WorkspaceSlackConfigMinAggregateOutputType | null
    _max: WorkspaceSlackConfigMaxAggregateOutputType | null
  }

  type GetWorkspaceSlackConfigGroupByPayload<T extends WorkspaceSlackConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkspaceSlackConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkspaceSlackConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkspaceSlackConfigGroupByOutputType[P]>
            : GetScalarType<T[P], WorkspaceSlackConfigGroupByOutputType[P]>
        }
      >
    >


  export type WorkspaceSlackConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    webhookUrl?: boolean
    channelName?: boolean
    createdAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspaceSlackConfig"]>

  export type WorkspaceSlackConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    webhookUrl?: boolean
    channelName?: boolean
    createdAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspaceSlackConfig"]>

  export type WorkspaceSlackConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    webhookUrl?: boolean
    channelName?: boolean
    createdAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspaceSlackConfig"]>

  export type WorkspaceSlackConfigSelectScalar = {
    id?: boolean
    workspaceId?: boolean
    webhookUrl?: boolean
    channelName?: boolean
    createdAt?: boolean
  }

  export type WorkspaceSlackConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workspaceId" | "webhookUrl" | "channelName" | "createdAt", ExtArgs["result"]["workspaceSlackConfig"]>
  export type WorkspaceSlackConfigInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type WorkspaceSlackConfigIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type WorkspaceSlackConfigIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }

  export type $WorkspaceSlackConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WorkspaceSlackConfig"
    objects: {
      workspace: Prisma.$WorkspacePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workspaceId: string
      webhookUrl: string
      channelName: string | null
      createdAt: Date
    }, ExtArgs["result"]["workspaceSlackConfig"]>
    composites: {}
  }

  type WorkspaceSlackConfigGetPayload<S extends boolean | null | undefined | WorkspaceSlackConfigDefaultArgs> = $Result.GetResult<Prisma.$WorkspaceSlackConfigPayload, S>

  type WorkspaceSlackConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkspaceSlackConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkspaceSlackConfigCountAggregateInputType | true
    }

  export interface WorkspaceSlackConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WorkspaceSlackConfig'], meta: { name: 'WorkspaceSlackConfig' } }
    /**
     * Find zero or one WorkspaceSlackConfig that matches the filter.
     * @param {WorkspaceSlackConfigFindUniqueArgs} args - Arguments to find a WorkspaceSlackConfig
     * @example
     * // Get one WorkspaceSlackConfig
     * const workspaceSlackConfig = await prisma.workspaceSlackConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkspaceSlackConfigFindUniqueArgs>(args: SelectSubset<T, WorkspaceSlackConfigFindUniqueArgs<ExtArgs>>): Prisma__WorkspaceSlackConfigClient<$Result.GetResult<Prisma.$WorkspaceSlackConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WorkspaceSlackConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkspaceSlackConfigFindUniqueOrThrowArgs} args - Arguments to find a WorkspaceSlackConfig
     * @example
     * // Get one WorkspaceSlackConfig
     * const workspaceSlackConfig = await prisma.workspaceSlackConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkspaceSlackConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkspaceSlackConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkspaceSlackConfigClient<$Result.GetResult<Prisma.$WorkspaceSlackConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkspaceSlackConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceSlackConfigFindFirstArgs} args - Arguments to find a WorkspaceSlackConfig
     * @example
     * // Get one WorkspaceSlackConfig
     * const workspaceSlackConfig = await prisma.workspaceSlackConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkspaceSlackConfigFindFirstArgs>(args?: SelectSubset<T, WorkspaceSlackConfigFindFirstArgs<ExtArgs>>): Prisma__WorkspaceSlackConfigClient<$Result.GetResult<Prisma.$WorkspaceSlackConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WorkspaceSlackConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceSlackConfigFindFirstOrThrowArgs} args - Arguments to find a WorkspaceSlackConfig
     * @example
     * // Get one WorkspaceSlackConfig
     * const workspaceSlackConfig = await prisma.workspaceSlackConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkspaceSlackConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkspaceSlackConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkspaceSlackConfigClient<$Result.GetResult<Prisma.$WorkspaceSlackConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WorkspaceSlackConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceSlackConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkspaceSlackConfigs
     * const workspaceSlackConfigs = await prisma.workspaceSlackConfig.findMany()
     * 
     * // Get first 10 WorkspaceSlackConfigs
     * const workspaceSlackConfigs = await prisma.workspaceSlackConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workspaceSlackConfigWithIdOnly = await prisma.workspaceSlackConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkspaceSlackConfigFindManyArgs>(args?: SelectSubset<T, WorkspaceSlackConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspaceSlackConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WorkspaceSlackConfig.
     * @param {WorkspaceSlackConfigCreateArgs} args - Arguments to create a WorkspaceSlackConfig.
     * @example
     * // Create one WorkspaceSlackConfig
     * const WorkspaceSlackConfig = await prisma.workspaceSlackConfig.create({
     *   data: {
     *     // ... data to create a WorkspaceSlackConfig
     *   }
     * })
     * 
     */
    create<T extends WorkspaceSlackConfigCreateArgs>(args: SelectSubset<T, WorkspaceSlackConfigCreateArgs<ExtArgs>>): Prisma__WorkspaceSlackConfigClient<$Result.GetResult<Prisma.$WorkspaceSlackConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WorkspaceSlackConfigs.
     * @param {WorkspaceSlackConfigCreateManyArgs} args - Arguments to create many WorkspaceSlackConfigs.
     * @example
     * // Create many WorkspaceSlackConfigs
     * const workspaceSlackConfig = await prisma.workspaceSlackConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkspaceSlackConfigCreateManyArgs>(args?: SelectSubset<T, WorkspaceSlackConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WorkspaceSlackConfigs and returns the data saved in the database.
     * @param {WorkspaceSlackConfigCreateManyAndReturnArgs} args - Arguments to create many WorkspaceSlackConfigs.
     * @example
     * // Create many WorkspaceSlackConfigs
     * const workspaceSlackConfig = await prisma.workspaceSlackConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WorkspaceSlackConfigs and only return the `id`
     * const workspaceSlackConfigWithIdOnly = await prisma.workspaceSlackConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkspaceSlackConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkspaceSlackConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspaceSlackConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WorkspaceSlackConfig.
     * @param {WorkspaceSlackConfigDeleteArgs} args - Arguments to delete one WorkspaceSlackConfig.
     * @example
     * // Delete one WorkspaceSlackConfig
     * const WorkspaceSlackConfig = await prisma.workspaceSlackConfig.delete({
     *   where: {
     *     // ... filter to delete one WorkspaceSlackConfig
     *   }
     * })
     * 
     */
    delete<T extends WorkspaceSlackConfigDeleteArgs>(args: SelectSubset<T, WorkspaceSlackConfigDeleteArgs<ExtArgs>>): Prisma__WorkspaceSlackConfigClient<$Result.GetResult<Prisma.$WorkspaceSlackConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WorkspaceSlackConfig.
     * @param {WorkspaceSlackConfigUpdateArgs} args - Arguments to update one WorkspaceSlackConfig.
     * @example
     * // Update one WorkspaceSlackConfig
     * const workspaceSlackConfig = await prisma.workspaceSlackConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkspaceSlackConfigUpdateArgs>(args: SelectSubset<T, WorkspaceSlackConfigUpdateArgs<ExtArgs>>): Prisma__WorkspaceSlackConfigClient<$Result.GetResult<Prisma.$WorkspaceSlackConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WorkspaceSlackConfigs.
     * @param {WorkspaceSlackConfigDeleteManyArgs} args - Arguments to filter WorkspaceSlackConfigs to delete.
     * @example
     * // Delete a few WorkspaceSlackConfigs
     * const { count } = await prisma.workspaceSlackConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkspaceSlackConfigDeleteManyArgs>(args?: SelectSubset<T, WorkspaceSlackConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkspaceSlackConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceSlackConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkspaceSlackConfigs
     * const workspaceSlackConfig = await prisma.workspaceSlackConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkspaceSlackConfigUpdateManyArgs>(args: SelectSubset<T, WorkspaceSlackConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkspaceSlackConfigs and returns the data updated in the database.
     * @param {WorkspaceSlackConfigUpdateManyAndReturnArgs} args - Arguments to update many WorkspaceSlackConfigs.
     * @example
     * // Update many WorkspaceSlackConfigs
     * const workspaceSlackConfig = await prisma.workspaceSlackConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WorkspaceSlackConfigs and only return the `id`
     * const workspaceSlackConfigWithIdOnly = await prisma.workspaceSlackConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkspaceSlackConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkspaceSlackConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspaceSlackConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WorkspaceSlackConfig.
     * @param {WorkspaceSlackConfigUpsertArgs} args - Arguments to update or create a WorkspaceSlackConfig.
     * @example
     * // Update or create a WorkspaceSlackConfig
     * const workspaceSlackConfig = await prisma.workspaceSlackConfig.upsert({
     *   create: {
     *     // ... data to create a WorkspaceSlackConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkspaceSlackConfig we want to update
     *   }
     * })
     */
    upsert<T extends WorkspaceSlackConfigUpsertArgs>(args: SelectSubset<T, WorkspaceSlackConfigUpsertArgs<ExtArgs>>): Prisma__WorkspaceSlackConfigClient<$Result.GetResult<Prisma.$WorkspaceSlackConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WorkspaceSlackConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceSlackConfigCountArgs} args - Arguments to filter WorkspaceSlackConfigs to count.
     * @example
     * // Count the number of WorkspaceSlackConfigs
     * const count = await prisma.workspaceSlackConfig.count({
     *   where: {
     *     // ... the filter for the WorkspaceSlackConfigs we want to count
     *   }
     * })
    **/
    count<T extends WorkspaceSlackConfigCountArgs>(
      args?: Subset<T, WorkspaceSlackConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkspaceSlackConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkspaceSlackConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceSlackConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkspaceSlackConfigAggregateArgs>(args: Subset<T, WorkspaceSlackConfigAggregateArgs>): Prisma.PrismaPromise<GetWorkspaceSlackConfigAggregateType<T>>

    /**
     * Group by WorkspaceSlackConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceSlackConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkspaceSlackConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkspaceSlackConfigGroupByArgs['orderBy'] }
        : { orderBy?: WorkspaceSlackConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkspaceSlackConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkspaceSlackConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WorkspaceSlackConfig model
   */
  readonly fields: WorkspaceSlackConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkspaceSlackConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkspaceSlackConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WorkspaceSlackConfig model
   */
  interface WorkspaceSlackConfigFieldRefs {
    readonly id: FieldRef<"WorkspaceSlackConfig", 'String'>
    readonly workspaceId: FieldRef<"WorkspaceSlackConfig", 'String'>
    readonly webhookUrl: FieldRef<"WorkspaceSlackConfig", 'String'>
    readonly channelName: FieldRef<"WorkspaceSlackConfig", 'String'>
    readonly createdAt: FieldRef<"WorkspaceSlackConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WorkspaceSlackConfig findUnique
   */
  export type WorkspaceSlackConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceSlackConfig
     */
    select?: WorkspaceSlackConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceSlackConfig
     */
    omit?: WorkspaceSlackConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceSlackConfigInclude<ExtArgs> | null
    /**
     * Filter, which WorkspaceSlackConfig to fetch.
     */
    where: WorkspaceSlackConfigWhereUniqueInput
  }

  /**
   * WorkspaceSlackConfig findUniqueOrThrow
   */
  export type WorkspaceSlackConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceSlackConfig
     */
    select?: WorkspaceSlackConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceSlackConfig
     */
    omit?: WorkspaceSlackConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceSlackConfigInclude<ExtArgs> | null
    /**
     * Filter, which WorkspaceSlackConfig to fetch.
     */
    where: WorkspaceSlackConfigWhereUniqueInput
  }

  /**
   * WorkspaceSlackConfig findFirst
   */
  export type WorkspaceSlackConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceSlackConfig
     */
    select?: WorkspaceSlackConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceSlackConfig
     */
    omit?: WorkspaceSlackConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceSlackConfigInclude<ExtArgs> | null
    /**
     * Filter, which WorkspaceSlackConfig to fetch.
     */
    where?: WorkspaceSlackConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkspaceSlackConfigs to fetch.
     */
    orderBy?: WorkspaceSlackConfigOrderByWithRelationInput | WorkspaceSlackConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkspaceSlackConfigs.
     */
    cursor?: WorkspaceSlackConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkspaceSlackConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkspaceSlackConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkspaceSlackConfigs.
     */
    distinct?: WorkspaceSlackConfigScalarFieldEnum | WorkspaceSlackConfigScalarFieldEnum[]
  }

  /**
   * WorkspaceSlackConfig findFirstOrThrow
   */
  export type WorkspaceSlackConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceSlackConfig
     */
    select?: WorkspaceSlackConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceSlackConfig
     */
    omit?: WorkspaceSlackConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceSlackConfigInclude<ExtArgs> | null
    /**
     * Filter, which WorkspaceSlackConfig to fetch.
     */
    where?: WorkspaceSlackConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkspaceSlackConfigs to fetch.
     */
    orderBy?: WorkspaceSlackConfigOrderByWithRelationInput | WorkspaceSlackConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkspaceSlackConfigs.
     */
    cursor?: WorkspaceSlackConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkspaceSlackConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkspaceSlackConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkspaceSlackConfigs.
     */
    distinct?: WorkspaceSlackConfigScalarFieldEnum | WorkspaceSlackConfigScalarFieldEnum[]
  }

  /**
   * WorkspaceSlackConfig findMany
   */
  export type WorkspaceSlackConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceSlackConfig
     */
    select?: WorkspaceSlackConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceSlackConfig
     */
    omit?: WorkspaceSlackConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceSlackConfigInclude<ExtArgs> | null
    /**
     * Filter, which WorkspaceSlackConfigs to fetch.
     */
    where?: WorkspaceSlackConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkspaceSlackConfigs to fetch.
     */
    orderBy?: WorkspaceSlackConfigOrderByWithRelationInput | WorkspaceSlackConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkspaceSlackConfigs.
     */
    cursor?: WorkspaceSlackConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkspaceSlackConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkspaceSlackConfigs.
     */
    skip?: number
    distinct?: WorkspaceSlackConfigScalarFieldEnum | WorkspaceSlackConfigScalarFieldEnum[]
  }

  /**
   * WorkspaceSlackConfig create
   */
  export type WorkspaceSlackConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceSlackConfig
     */
    select?: WorkspaceSlackConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceSlackConfig
     */
    omit?: WorkspaceSlackConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceSlackConfigInclude<ExtArgs> | null
    /**
     * The data needed to create a WorkspaceSlackConfig.
     */
    data: XOR<WorkspaceSlackConfigCreateInput, WorkspaceSlackConfigUncheckedCreateInput>
  }

  /**
   * WorkspaceSlackConfig createMany
   */
  export type WorkspaceSlackConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WorkspaceSlackConfigs.
     */
    data: WorkspaceSlackConfigCreateManyInput | WorkspaceSlackConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WorkspaceSlackConfig createManyAndReturn
   */
  export type WorkspaceSlackConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceSlackConfig
     */
    select?: WorkspaceSlackConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceSlackConfig
     */
    omit?: WorkspaceSlackConfigOmit<ExtArgs> | null
    /**
     * The data used to create many WorkspaceSlackConfigs.
     */
    data: WorkspaceSlackConfigCreateManyInput | WorkspaceSlackConfigCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceSlackConfigIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkspaceSlackConfig update
   */
  export type WorkspaceSlackConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceSlackConfig
     */
    select?: WorkspaceSlackConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceSlackConfig
     */
    omit?: WorkspaceSlackConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceSlackConfigInclude<ExtArgs> | null
    /**
     * The data needed to update a WorkspaceSlackConfig.
     */
    data: XOR<WorkspaceSlackConfigUpdateInput, WorkspaceSlackConfigUncheckedUpdateInput>
    /**
     * Choose, which WorkspaceSlackConfig to update.
     */
    where: WorkspaceSlackConfigWhereUniqueInput
  }

  /**
   * WorkspaceSlackConfig updateMany
   */
  export type WorkspaceSlackConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WorkspaceSlackConfigs.
     */
    data: XOR<WorkspaceSlackConfigUpdateManyMutationInput, WorkspaceSlackConfigUncheckedUpdateManyInput>
    /**
     * Filter which WorkspaceSlackConfigs to update
     */
    where?: WorkspaceSlackConfigWhereInput
    /**
     * Limit how many WorkspaceSlackConfigs to update.
     */
    limit?: number
  }

  /**
   * WorkspaceSlackConfig updateManyAndReturn
   */
  export type WorkspaceSlackConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceSlackConfig
     */
    select?: WorkspaceSlackConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceSlackConfig
     */
    omit?: WorkspaceSlackConfigOmit<ExtArgs> | null
    /**
     * The data used to update WorkspaceSlackConfigs.
     */
    data: XOR<WorkspaceSlackConfigUpdateManyMutationInput, WorkspaceSlackConfigUncheckedUpdateManyInput>
    /**
     * Filter which WorkspaceSlackConfigs to update
     */
    where?: WorkspaceSlackConfigWhereInput
    /**
     * Limit how many WorkspaceSlackConfigs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceSlackConfigIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WorkspaceSlackConfig upsert
   */
  export type WorkspaceSlackConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceSlackConfig
     */
    select?: WorkspaceSlackConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceSlackConfig
     */
    omit?: WorkspaceSlackConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceSlackConfigInclude<ExtArgs> | null
    /**
     * The filter to search for the WorkspaceSlackConfig to update in case it exists.
     */
    where: WorkspaceSlackConfigWhereUniqueInput
    /**
     * In case the WorkspaceSlackConfig found by the `where` argument doesn't exist, create a new WorkspaceSlackConfig with this data.
     */
    create: XOR<WorkspaceSlackConfigCreateInput, WorkspaceSlackConfigUncheckedCreateInput>
    /**
     * In case the WorkspaceSlackConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkspaceSlackConfigUpdateInput, WorkspaceSlackConfigUncheckedUpdateInput>
  }

  /**
   * WorkspaceSlackConfig delete
   */
  export type WorkspaceSlackConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceSlackConfig
     */
    select?: WorkspaceSlackConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceSlackConfig
     */
    omit?: WorkspaceSlackConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceSlackConfigInclude<ExtArgs> | null
    /**
     * Filter which WorkspaceSlackConfig to delete.
     */
    where: WorkspaceSlackConfigWhereUniqueInput
  }

  /**
   * WorkspaceSlackConfig deleteMany
   */
  export type WorkspaceSlackConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WorkspaceSlackConfigs to delete
     */
    where?: WorkspaceSlackConfigWhereInput
    /**
     * Limit how many WorkspaceSlackConfigs to delete.
     */
    limit?: number
  }

  /**
   * WorkspaceSlackConfig without action
   */
  export type WorkspaceSlackConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceSlackConfig
     */
    select?: WorkspaceSlackConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WorkspaceSlackConfig
     */
    omit?: WorkspaceSlackConfigOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceSlackConfigInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    actorId: string | null
    action: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    actorId: string | null
    action: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    workspaceId: number
    actorId: number
    action: number
    metadata: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    workspaceId?: true
    actorId?: true
    action?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    workspaceId?: true
    actorId?: true
    action?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    workspaceId?: true
    actorId?: true
    action?: true
    metadata?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    workspaceId: string
    actorId: string
    action: string
    metadata: JsonValue | null
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    actorId?: boolean
    action?: boolean
    metadata?: boolean
    createdAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    actor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    actorId?: boolean
    action?: boolean
    metadata?: boolean
    createdAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    actor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    actorId?: boolean
    action?: boolean
    metadata?: boolean
    createdAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    actor?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    workspaceId?: boolean
    actorId?: boolean
    action?: boolean
    metadata?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workspaceId" | "actorId" | "action" | "metadata" | "createdAt", ExtArgs["result"]["auditLog"]>
  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    actor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    actor?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AuditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    actor?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      workspace: Prisma.$WorkspacePayload<ExtArgs>
      actor: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workspaceId: string
      actorId: string
      action: string
      metadata: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    actor<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly workspaceId: FieldRef<"AuditLog", 'String'>
    readonly actorId: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly metadata: FieldRef<"AuditLog", 'Json'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    avatarUrl: 'avatarUrl',
    githubId: 'githubId',
    githubUsername: 'githubUsername',
    githubAccessToken: 'githubAccessToken',
    createdAt: 'createdAt',
    emailNotificationsEnabled: 'emailNotificationsEnabled',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WorkspaceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    plan: 'plan',
    ownerId: 'ownerId',
    createdAt: 'createdAt'
  };

  export type WorkspaceScalarFieldEnum = (typeof WorkspaceScalarFieldEnum)[keyof typeof WorkspaceScalarFieldEnum]


  export const WorkspaceMemberScalarFieldEnum: {
    id: 'id',
    workspaceId: 'workspaceId',
    userId: 'userId',
    role: 'role',
    joinedAt: 'joinedAt'
  };

  export type WorkspaceMemberScalarFieldEnum = (typeof WorkspaceMemberScalarFieldEnum)[keyof typeof WorkspaceMemberScalarFieldEnum]


  export const RepositoryScalarFieldEnum: {
    id: 'id',
    workspaceId: 'workspaceId',
    githubRepoId: 'githubRepoId',
    name: 'name',
    fullName: 'fullName',
    defaultBranch: 'defaultBranch',
    isPrivate: 'isPrivate',
    createdAt: 'createdAt'
  };

  export type RepositoryScalarFieldEnum = (typeof RepositoryScalarFieldEnum)[keyof typeof RepositoryScalarFieldEnum]


  export const PullRequestScalarFieldEnum: {
    id: 'id',
    repositoryId: 'repositoryId',
    githubPrNumber: 'githubPrNumber',
    title: 'title',
    body: 'body',
    authorId: 'authorId',
    status: 'status',
    headBranch: 'headBranch',
    baseBranch: 'baseBranch',
    diffUrl: 'diffUrl',
    aiSummary: 'aiSummary',
    securityScore: 'securityScore',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    reviewerId: 'reviewerId'
  };

  export type PullRequestScalarFieldEnum = (typeof PullRequestScalarFieldEnum)[keyof typeof PullRequestScalarFieldEnum]


  export const SecurityFindingScalarFieldEnum: {
    id: 'id',
    pullRequestId: 'pullRequestId',
    filePath: 'filePath',
    lineNumber: 'lineNumber',
    severity: 'severity',
    category: 'category',
    cweId: 'cweId',
    description: 'description',
    remediation: 'remediation',
    isFalsePositive: 'isFalsePositive',
    createdAt: 'createdAt'
  };

  export type SecurityFindingScalarFieldEnum = (typeof SecurityFindingScalarFieldEnum)[keyof typeof SecurityFindingScalarFieldEnum]


  export const ReviewSessionScalarFieldEnum: {
    id: 'id',
    pullRequestId: 'pullRequestId',
    createdBy: 'createdBy',
    isActive: 'isActive',
    createdAt: 'createdAt',
    endedAt: 'endedAt'
  };

  export type ReviewSessionScalarFieldEnum = (typeof ReviewSessionScalarFieldEnum)[keyof typeof ReviewSessionScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    reviewSessionId: 'reviewSessionId',
    authorId: 'authorId',
    filePath: 'filePath',
    lineNumber: 'lineNumber',
    content: 'content',
    parentId: 'parentId',
    resolvedAt: 'resolvedAt',
    isAI: 'isAI',
    severity: 'severity',
    category: 'category',
    suggestedFix: 'suggestedFix',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    workspaceId: 'workspaceId',
    lemonSqueezyCustomerId: 'lemonSqueezyCustomerId',
    lemonSqueezyVariantId: 'lemonSqueezyVariantId',
    lemonSqueezySubscriptionId: 'lemonSqueezySubscriptionId',
    status: 'status',
    currentPeriodEnd: 'currentPeriodEnd'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    title: 'title',
    body: 'body',
    link: 'link',
    isRead: 'isRead',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const WorkspaceSlackConfigScalarFieldEnum: {
    id: 'id',
    workspaceId: 'workspaceId',
    webhookUrl: 'webhookUrl',
    channelName: 'channelName',
    createdAt: 'createdAt'
  };

  export type WorkspaceSlackConfigScalarFieldEnum = (typeof WorkspaceSlackConfigScalarFieldEnum)[keyof typeof WorkspaceSlackConfigScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    workspaceId: 'workspaceId',
    actorId: 'actorId',
    action: 'action',
    metadata: 'metadata',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Plan'
   */
  export type EnumPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Plan'>
    


  /**
   * Reference to a field of type 'Plan[]'
   */
  export type ListEnumPlanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Plan[]'>
    


  /**
   * Reference to a field of type 'MemberRole'
   */
  export type EnumMemberRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MemberRole'>
    


  /**
   * Reference to a field of type 'MemberRole[]'
   */
  export type ListEnumMemberRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MemberRole[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'PRStatus'
   */
  export type EnumPRStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PRStatus'>
    


  /**
   * Reference to a field of type 'PRStatus[]'
   */
  export type ListEnumPRStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PRStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    githubId?: StringNullableFilter<"User"> | string | null
    githubUsername?: StringNullableFilter<"User"> | string | null
    githubAccessToken?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    emailNotificationsEnabled?: BoolFilter<"User"> | boolean
    updatedAt?: DateTimeFilter<"User"> | Date | string
    ownedWorkspaces?: WorkspaceListRelationFilter
    memberships?: WorkspaceMemberListRelationFilter
    pullRequests?: PullRequestListRelationFilter
    reviewSessions?: ReviewSessionListRelationFilter
    comments?: CommentListRelationFilter
    notifications?: NotificationListRelationFilter
    assignedPRs?: PullRequestListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    githubId?: SortOrderInput | SortOrder
    githubUsername?: SortOrderInput | SortOrder
    githubAccessToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    emailNotificationsEnabled?: SortOrder
    updatedAt?: SortOrder
    ownedWorkspaces?: WorkspaceOrderByRelationAggregateInput
    memberships?: WorkspaceMemberOrderByRelationAggregateInput
    pullRequests?: PullRequestOrderByRelationAggregateInput
    reviewSessions?: ReviewSessionOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    assignedPRs?: PullRequestOrderByRelationAggregateInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    githubId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    githubUsername?: StringNullableFilter<"User"> | string | null
    githubAccessToken?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    emailNotificationsEnabled?: BoolFilter<"User"> | boolean
    updatedAt?: DateTimeFilter<"User"> | Date | string
    ownedWorkspaces?: WorkspaceListRelationFilter
    memberships?: WorkspaceMemberListRelationFilter
    pullRequests?: PullRequestListRelationFilter
    reviewSessions?: ReviewSessionListRelationFilter
    comments?: CommentListRelationFilter
    notifications?: NotificationListRelationFilter
    assignedPRs?: PullRequestListRelationFilter
    auditLogs?: AuditLogListRelationFilter
  }, "id" | "email" | "githubId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    githubId?: SortOrderInput | SortOrder
    githubUsername?: SortOrderInput | SortOrder
    githubAccessToken?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    emailNotificationsEnabled?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    githubId?: StringNullableWithAggregatesFilter<"User"> | string | null
    githubUsername?: StringNullableWithAggregatesFilter<"User"> | string | null
    githubAccessToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    emailNotificationsEnabled?: BoolWithAggregatesFilter<"User"> | boolean
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type WorkspaceWhereInput = {
    AND?: WorkspaceWhereInput | WorkspaceWhereInput[]
    OR?: WorkspaceWhereInput[]
    NOT?: WorkspaceWhereInput | WorkspaceWhereInput[]
    id?: StringFilter<"Workspace"> | string
    name?: StringFilter<"Workspace"> | string
    slug?: StringFilter<"Workspace"> | string
    plan?: EnumPlanFilter<"Workspace"> | $Enums.Plan
    ownerId?: StringFilter<"Workspace"> | string
    createdAt?: DateTimeFilter<"Workspace"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: WorkspaceMemberListRelationFilter
    repositories?: RepositoryListRelationFilter
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
    slackConfig?: XOR<WorkspaceSlackConfigNullableScalarRelationFilter, WorkspaceSlackConfigWhereInput> | null
    auditLogs?: AuditLogListRelationFilter
  }

  export type WorkspaceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    plan?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    owner?: UserOrderByWithRelationInput
    members?: WorkspaceMemberOrderByRelationAggregateInput
    repositories?: RepositoryOrderByRelationAggregateInput
    subscription?: SubscriptionOrderByWithRelationInput
    slackConfig?: WorkspaceSlackConfigOrderByWithRelationInput
    auditLogs?: AuditLogOrderByRelationAggregateInput
  }

  export type WorkspaceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: WorkspaceWhereInput | WorkspaceWhereInput[]
    OR?: WorkspaceWhereInput[]
    NOT?: WorkspaceWhereInput | WorkspaceWhereInput[]
    name?: StringFilter<"Workspace"> | string
    plan?: EnumPlanFilter<"Workspace"> | $Enums.Plan
    ownerId?: StringFilter<"Workspace"> | string
    createdAt?: DateTimeFilter<"Workspace"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    members?: WorkspaceMemberListRelationFilter
    repositories?: RepositoryListRelationFilter
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
    slackConfig?: XOR<WorkspaceSlackConfigNullableScalarRelationFilter, WorkspaceSlackConfigWhereInput> | null
    auditLogs?: AuditLogListRelationFilter
  }, "id" | "slug">

  export type WorkspaceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    plan?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
    _count?: WorkspaceCountOrderByAggregateInput
    _max?: WorkspaceMaxOrderByAggregateInput
    _min?: WorkspaceMinOrderByAggregateInput
  }

  export type WorkspaceScalarWhereWithAggregatesInput = {
    AND?: WorkspaceScalarWhereWithAggregatesInput | WorkspaceScalarWhereWithAggregatesInput[]
    OR?: WorkspaceScalarWhereWithAggregatesInput[]
    NOT?: WorkspaceScalarWhereWithAggregatesInput | WorkspaceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Workspace"> | string
    name?: StringWithAggregatesFilter<"Workspace"> | string
    slug?: StringWithAggregatesFilter<"Workspace"> | string
    plan?: EnumPlanWithAggregatesFilter<"Workspace"> | $Enums.Plan
    ownerId?: StringWithAggregatesFilter<"Workspace"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Workspace"> | Date | string
  }

  export type WorkspaceMemberWhereInput = {
    AND?: WorkspaceMemberWhereInput | WorkspaceMemberWhereInput[]
    OR?: WorkspaceMemberWhereInput[]
    NOT?: WorkspaceMemberWhereInput | WorkspaceMemberWhereInput[]
    id?: StringFilter<"WorkspaceMember"> | string
    workspaceId?: StringFilter<"WorkspaceMember"> | string
    userId?: StringFilter<"WorkspaceMember"> | string
    role?: EnumMemberRoleFilter<"WorkspaceMember"> | $Enums.MemberRole
    joinedAt?: DateTimeFilter<"WorkspaceMember"> | Date | string
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WorkspaceMemberOrderByWithRelationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type WorkspaceMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    workspaceId_userId?: WorkspaceMemberWorkspaceIdUserIdCompoundUniqueInput
    AND?: WorkspaceMemberWhereInput | WorkspaceMemberWhereInput[]
    OR?: WorkspaceMemberWhereInput[]
    NOT?: WorkspaceMemberWhereInput | WorkspaceMemberWhereInput[]
    workspaceId?: StringFilter<"WorkspaceMember"> | string
    userId?: StringFilter<"WorkspaceMember"> | string
    role?: EnumMemberRoleFilter<"WorkspaceMember"> | $Enums.MemberRole
    joinedAt?: DateTimeFilter<"WorkspaceMember"> | Date | string
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "workspaceId_userId">

  export type WorkspaceMemberOrderByWithAggregationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    _count?: WorkspaceMemberCountOrderByAggregateInput
    _max?: WorkspaceMemberMaxOrderByAggregateInput
    _min?: WorkspaceMemberMinOrderByAggregateInput
  }

  export type WorkspaceMemberScalarWhereWithAggregatesInput = {
    AND?: WorkspaceMemberScalarWhereWithAggregatesInput | WorkspaceMemberScalarWhereWithAggregatesInput[]
    OR?: WorkspaceMemberScalarWhereWithAggregatesInput[]
    NOT?: WorkspaceMemberScalarWhereWithAggregatesInput | WorkspaceMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkspaceMember"> | string
    workspaceId?: StringWithAggregatesFilter<"WorkspaceMember"> | string
    userId?: StringWithAggregatesFilter<"WorkspaceMember"> | string
    role?: EnumMemberRoleWithAggregatesFilter<"WorkspaceMember"> | $Enums.MemberRole
    joinedAt?: DateTimeWithAggregatesFilter<"WorkspaceMember"> | Date | string
  }

  export type RepositoryWhereInput = {
    AND?: RepositoryWhereInput | RepositoryWhereInput[]
    OR?: RepositoryWhereInput[]
    NOT?: RepositoryWhereInput | RepositoryWhereInput[]
    id?: StringFilter<"Repository"> | string
    workspaceId?: StringFilter<"Repository"> | string
    githubRepoId?: StringFilter<"Repository"> | string
    name?: StringFilter<"Repository"> | string
    fullName?: StringFilter<"Repository"> | string
    defaultBranch?: StringFilter<"Repository"> | string
    isPrivate?: BoolFilter<"Repository"> | boolean
    createdAt?: DateTimeFilter<"Repository"> | Date | string
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
    pullRequests?: PullRequestListRelationFilter
  }

  export type RepositoryOrderByWithRelationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    githubRepoId?: SortOrder
    name?: SortOrder
    fullName?: SortOrder
    defaultBranch?: SortOrder
    isPrivate?: SortOrder
    createdAt?: SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
    pullRequests?: PullRequestOrderByRelationAggregateInput
  }

  export type RepositoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    workspaceId_githubRepoId?: RepositoryWorkspaceIdGithubRepoIdCompoundUniqueInput
    AND?: RepositoryWhereInput | RepositoryWhereInput[]
    OR?: RepositoryWhereInput[]
    NOT?: RepositoryWhereInput | RepositoryWhereInput[]
    workspaceId?: StringFilter<"Repository"> | string
    githubRepoId?: StringFilter<"Repository"> | string
    name?: StringFilter<"Repository"> | string
    fullName?: StringFilter<"Repository"> | string
    defaultBranch?: StringFilter<"Repository"> | string
    isPrivate?: BoolFilter<"Repository"> | boolean
    createdAt?: DateTimeFilter<"Repository"> | Date | string
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
    pullRequests?: PullRequestListRelationFilter
  }, "id" | "workspaceId_githubRepoId">

  export type RepositoryOrderByWithAggregationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    githubRepoId?: SortOrder
    name?: SortOrder
    fullName?: SortOrder
    defaultBranch?: SortOrder
    isPrivate?: SortOrder
    createdAt?: SortOrder
    _count?: RepositoryCountOrderByAggregateInput
    _max?: RepositoryMaxOrderByAggregateInput
    _min?: RepositoryMinOrderByAggregateInput
  }

  export type RepositoryScalarWhereWithAggregatesInput = {
    AND?: RepositoryScalarWhereWithAggregatesInput | RepositoryScalarWhereWithAggregatesInput[]
    OR?: RepositoryScalarWhereWithAggregatesInput[]
    NOT?: RepositoryScalarWhereWithAggregatesInput | RepositoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Repository"> | string
    workspaceId?: StringWithAggregatesFilter<"Repository"> | string
    githubRepoId?: StringWithAggregatesFilter<"Repository"> | string
    name?: StringWithAggregatesFilter<"Repository"> | string
    fullName?: StringWithAggregatesFilter<"Repository"> | string
    defaultBranch?: StringWithAggregatesFilter<"Repository"> | string
    isPrivate?: BoolWithAggregatesFilter<"Repository"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Repository"> | Date | string
  }

  export type PullRequestWhereInput = {
    AND?: PullRequestWhereInput | PullRequestWhereInput[]
    OR?: PullRequestWhereInput[]
    NOT?: PullRequestWhereInput | PullRequestWhereInput[]
    id?: StringFilter<"PullRequest"> | string
    repositoryId?: StringFilter<"PullRequest"> | string
    githubPrNumber?: IntFilter<"PullRequest"> | number
    title?: StringFilter<"PullRequest"> | string
    body?: StringNullableFilter<"PullRequest"> | string | null
    authorId?: StringFilter<"PullRequest"> | string
    status?: EnumPRStatusFilter<"PullRequest"> | $Enums.PRStatus
    headBranch?: StringFilter<"PullRequest"> | string
    baseBranch?: StringFilter<"PullRequest"> | string
    diffUrl?: StringNullableFilter<"PullRequest"> | string | null
    aiSummary?: StringNullableFilter<"PullRequest"> | string | null
    securityScore?: IntNullableFilter<"PullRequest"> | number | null
    createdAt?: DateTimeFilter<"PullRequest"> | Date | string
    updatedAt?: DateTimeFilter<"PullRequest"> | Date | string
    reviewerId?: StringNullableFilter<"PullRequest"> | string | null
    repository?: XOR<RepositoryScalarRelationFilter, RepositoryWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviewer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    reviewSessions?: ReviewSessionListRelationFilter
    securityFindings?: SecurityFindingListRelationFilter
  }

  export type PullRequestOrderByWithRelationInput = {
    id?: SortOrder
    repositoryId?: SortOrder
    githubPrNumber?: SortOrder
    title?: SortOrder
    body?: SortOrderInput | SortOrder
    authorId?: SortOrder
    status?: SortOrder
    headBranch?: SortOrder
    baseBranch?: SortOrder
    diffUrl?: SortOrderInput | SortOrder
    aiSummary?: SortOrderInput | SortOrder
    securityScore?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reviewerId?: SortOrderInput | SortOrder
    repository?: RepositoryOrderByWithRelationInput
    author?: UserOrderByWithRelationInput
    reviewer?: UserOrderByWithRelationInput
    reviewSessions?: ReviewSessionOrderByRelationAggregateInput
    securityFindings?: SecurityFindingOrderByRelationAggregateInput
  }

  export type PullRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    repositoryId_githubPrNumber?: PullRequestRepositoryIdGithubPrNumberCompoundUniqueInput
    AND?: PullRequestWhereInput | PullRequestWhereInput[]
    OR?: PullRequestWhereInput[]
    NOT?: PullRequestWhereInput | PullRequestWhereInput[]
    repositoryId?: StringFilter<"PullRequest"> | string
    githubPrNumber?: IntFilter<"PullRequest"> | number
    title?: StringFilter<"PullRequest"> | string
    body?: StringNullableFilter<"PullRequest"> | string | null
    authorId?: StringFilter<"PullRequest"> | string
    status?: EnumPRStatusFilter<"PullRequest"> | $Enums.PRStatus
    headBranch?: StringFilter<"PullRequest"> | string
    baseBranch?: StringFilter<"PullRequest"> | string
    diffUrl?: StringNullableFilter<"PullRequest"> | string | null
    aiSummary?: StringNullableFilter<"PullRequest"> | string | null
    securityScore?: IntNullableFilter<"PullRequest"> | number | null
    createdAt?: DateTimeFilter<"PullRequest"> | Date | string
    updatedAt?: DateTimeFilter<"PullRequest"> | Date | string
    reviewerId?: StringNullableFilter<"PullRequest"> | string | null
    repository?: XOR<RepositoryScalarRelationFilter, RepositoryWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    reviewer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    reviewSessions?: ReviewSessionListRelationFilter
    securityFindings?: SecurityFindingListRelationFilter
  }, "id" | "repositoryId_githubPrNumber">

  export type PullRequestOrderByWithAggregationInput = {
    id?: SortOrder
    repositoryId?: SortOrder
    githubPrNumber?: SortOrder
    title?: SortOrder
    body?: SortOrderInput | SortOrder
    authorId?: SortOrder
    status?: SortOrder
    headBranch?: SortOrder
    baseBranch?: SortOrder
    diffUrl?: SortOrderInput | SortOrder
    aiSummary?: SortOrderInput | SortOrder
    securityScore?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reviewerId?: SortOrderInput | SortOrder
    _count?: PullRequestCountOrderByAggregateInput
    _avg?: PullRequestAvgOrderByAggregateInput
    _max?: PullRequestMaxOrderByAggregateInput
    _min?: PullRequestMinOrderByAggregateInput
    _sum?: PullRequestSumOrderByAggregateInput
  }

  export type PullRequestScalarWhereWithAggregatesInput = {
    AND?: PullRequestScalarWhereWithAggregatesInput | PullRequestScalarWhereWithAggregatesInput[]
    OR?: PullRequestScalarWhereWithAggregatesInput[]
    NOT?: PullRequestScalarWhereWithAggregatesInput | PullRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PullRequest"> | string
    repositoryId?: StringWithAggregatesFilter<"PullRequest"> | string
    githubPrNumber?: IntWithAggregatesFilter<"PullRequest"> | number
    title?: StringWithAggregatesFilter<"PullRequest"> | string
    body?: StringNullableWithAggregatesFilter<"PullRequest"> | string | null
    authorId?: StringWithAggregatesFilter<"PullRequest"> | string
    status?: EnumPRStatusWithAggregatesFilter<"PullRequest"> | $Enums.PRStatus
    headBranch?: StringWithAggregatesFilter<"PullRequest"> | string
    baseBranch?: StringWithAggregatesFilter<"PullRequest"> | string
    diffUrl?: StringNullableWithAggregatesFilter<"PullRequest"> | string | null
    aiSummary?: StringNullableWithAggregatesFilter<"PullRequest"> | string | null
    securityScore?: IntNullableWithAggregatesFilter<"PullRequest"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"PullRequest"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PullRequest"> | Date | string
    reviewerId?: StringNullableWithAggregatesFilter<"PullRequest"> | string | null
  }

  export type SecurityFindingWhereInput = {
    AND?: SecurityFindingWhereInput | SecurityFindingWhereInput[]
    OR?: SecurityFindingWhereInput[]
    NOT?: SecurityFindingWhereInput | SecurityFindingWhereInput[]
    id?: StringFilter<"SecurityFinding"> | string
    pullRequestId?: StringFilter<"SecurityFinding"> | string
    filePath?: StringFilter<"SecurityFinding"> | string
    lineNumber?: IntFilter<"SecurityFinding"> | number
    severity?: StringFilter<"SecurityFinding"> | string
    category?: StringFilter<"SecurityFinding"> | string
    cweId?: StringNullableFilter<"SecurityFinding"> | string | null
    description?: StringFilter<"SecurityFinding"> | string
    remediation?: StringFilter<"SecurityFinding"> | string
    isFalsePositive?: BoolFilter<"SecurityFinding"> | boolean
    createdAt?: DateTimeFilter<"SecurityFinding"> | Date | string
    pullRequest?: XOR<PullRequestScalarRelationFilter, PullRequestWhereInput>
  }

  export type SecurityFindingOrderByWithRelationInput = {
    id?: SortOrder
    pullRequestId?: SortOrder
    filePath?: SortOrder
    lineNumber?: SortOrder
    severity?: SortOrder
    category?: SortOrder
    cweId?: SortOrderInput | SortOrder
    description?: SortOrder
    remediation?: SortOrder
    isFalsePositive?: SortOrder
    createdAt?: SortOrder
    pullRequest?: PullRequestOrderByWithRelationInput
  }

  export type SecurityFindingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SecurityFindingWhereInput | SecurityFindingWhereInput[]
    OR?: SecurityFindingWhereInput[]
    NOT?: SecurityFindingWhereInput | SecurityFindingWhereInput[]
    pullRequestId?: StringFilter<"SecurityFinding"> | string
    filePath?: StringFilter<"SecurityFinding"> | string
    lineNumber?: IntFilter<"SecurityFinding"> | number
    severity?: StringFilter<"SecurityFinding"> | string
    category?: StringFilter<"SecurityFinding"> | string
    cweId?: StringNullableFilter<"SecurityFinding"> | string | null
    description?: StringFilter<"SecurityFinding"> | string
    remediation?: StringFilter<"SecurityFinding"> | string
    isFalsePositive?: BoolFilter<"SecurityFinding"> | boolean
    createdAt?: DateTimeFilter<"SecurityFinding"> | Date | string
    pullRequest?: XOR<PullRequestScalarRelationFilter, PullRequestWhereInput>
  }, "id">

  export type SecurityFindingOrderByWithAggregationInput = {
    id?: SortOrder
    pullRequestId?: SortOrder
    filePath?: SortOrder
    lineNumber?: SortOrder
    severity?: SortOrder
    category?: SortOrder
    cweId?: SortOrderInput | SortOrder
    description?: SortOrder
    remediation?: SortOrder
    isFalsePositive?: SortOrder
    createdAt?: SortOrder
    _count?: SecurityFindingCountOrderByAggregateInput
    _avg?: SecurityFindingAvgOrderByAggregateInput
    _max?: SecurityFindingMaxOrderByAggregateInput
    _min?: SecurityFindingMinOrderByAggregateInput
    _sum?: SecurityFindingSumOrderByAggregateInput
  }

  export type SecurityFindingScalarWhereWithAggregatesInput = {
    AND?: SecurityFindingScalarWhereWithAggregatesInput | SecurityFindingScalarWhereWithAggregatesInput[]
    OR?: SecurityFindingScalarWhereWithAggregatesInput[]
    NOT?: SecurityFindingScalarWhereWithAggregatesInput | SecurityFindingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SecurityFinding"> | string
    pullRequestId?: StringWithAggregatesFilter<"SecurityFinding"> | string
    filePath?: StringWithAggregatesFilter<"SecurityFinding"> | string
    lineNumber?: IntWithAggregatesFilter<"SecurityFinding"> | number
    severity?: StringWithAggregatesFilter<"SecurityFinding"> | string
    category?: StringWithAggregatesFilter<"SecurityFinding"> | string
    cweId?: StringNullableWithAggregatesFilter<"SecurityFinding"> | string | null
    description?: StringWithAggregatesFilter<"SecurityFinding"> | string
    remediation?: StringWithAggregatesFilter<"SecurityFinding"> | string
    isFalsePositive?: BoolWithAggregatesFilter<"SecurityFinding"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SecurityFinding"> | Date | string
  }

  export type ReviewSessionWhereInput = {
    AND?: ReviewSessionWhereInput | ReviewSessionWhereInput[]
    OR?: ReviewSessionWhereInput[]
    NOT?: ReviewSessionWhereInput | ReviewSessionWhereInput[]
    id?: StringFilter<"ReviewSession"> | string
    pullRequestId?: StringFilter<"ReviewSession"> | string
    createdBy?: StringFilter<"ReviewSession"> | string
    isActive?: BoolFilter<"ReviewSession"> | boolean
    createdAt?: DateTimeFilter<"ReviewSession"> | Date | string
    endedAt?: DateTimeNullableFilter<"ReviewSession"> | Date | string | null
    pullRequest?: XOR<PullRequestScalarRelationFilter, PullRequestWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: CommentListRelationFilter
  }

  export type ReviewSessionOrderByWithRelationInput = {
    id?: SortOrder
    pullRequestId?: SortOrder
    createdBy?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    pullRequest?: PullRequestOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
    comments?: CommentOrderByRelationAggregateInput
  }

  export type ReviewSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewSessionWhereInput | ReviewSessionWhereInput[]
    OR?: ReviewSessionWhereInput[]
    NOT?: ReviewSessionWhereInput | ReviewSessionWhereInput[]
    pullRequestId?: StringFilter<"ReviewSession"> | string
    createdBy?: StringFilter<"ReviewSession"> | string
    isActive?: BoolFilter<"ReviewSession"> | boolean
    createdAt?: DateTimeFilter<"ReviewSession"> | Date | string
    endedAt?: DateTimeNullableFilter<"ReviewSession"> | Date | string | null
    pullRequest?: XOR<PullRequestScalarRelationFilter, PullRequestWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    comments?: CommentListRelationFilter
  }, "id">

  export type ReviewSessionOrderByWithAggregationInput = {
    id?: SortOrder
    pullRequestId?: SortOrder
    createdBy?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    endedAt?: SortOrderInput | SortOrder
    _count?: ReviewSessionCountOrderByAggregateInput
    _max?: ReviewSessionMaxOrderByAggregateInput
    _min?: ReviewSessionMinOrderByAggregateInput
  }

  export type ReviewSessionScalarWhereWithAggregatesInput = {
    AND?: ReviewSessionScalarWhereWithAggregatesInput | ReviewSessionScalarWhereWithAggregatesInput[]
    OR?: ReviewSessionScalarWhereWithAggregatesInput[]
    NOT?: ReviewSessionScalarWhereWithAggregatesInput | ReviewSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReviewSession"> | string
    pullRequestId?: StringWithAggregatesFilter<"ReviewSession"> | string
    createdBy?: StringWithAggregatesFilter<"ReviewSession"> | string
    isActive?: BoolWithAggregatesFilter<"ReviewSession"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ReviewSession"> | Date | string
    endedAt?: DateTimeNullableWithAggregatesFilter<"ReviewSession"> | Date | string | null
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: StringFilter<"Comment"> | string
    reviewSessionId?: StringFilter<"Comment"> | string
    authorId?: StringFilter<"Comment"> | string
    filePath?: StringFilter<"Comment"> | string
    lineNumber?: IntFilter<"Comment"> | number
    content?: StringFilter<"Comment"> | string
    parentId?: StringNullableFilter<"Comment"> | string | null
    resolvedAt?: DateTimeNullableFilter<"Comment"> | Date | string | null
    isAI?: BoolFilter<"Comment"> | boolean
    severity?: StringNullableFilter<"Comment"> | string | null
    category?: StringNullableFilter<"Comment"> | string | null
    suggestedFix?: StringNullableFilter<"Comment"> | string | null
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    reviewSession?: XOR<ReviewSessionScalarRelationFilter, ReviewSessionWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    parent?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
    replies?: CommentListRelationFilter
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    reviewSessionId?: SortOrder
    authorId?: SortOrder
    filePath?: SortOrder
    lineNumber?: SortOrder
    content?: SortOrder
    parentId?: SortOrderInput | SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    isAI?: SortOrder
    severity?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    suggestedFix?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reviewSession?: ReviewSessionOrderByWithRelationInput
    author?: UserOrderByWithRelationInput
    parent?: CommentOrderByWithRelationInput
    replies?: CommentOrderByRelationAggregateInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    reviewSessionId?: StringFilter<"Comment"> | string
    authorId?: StringFilter<"Comment"> | string
    filePath?: StringFilter<"Comment"> | string
    lineNumber?: IntFilter<"Comment"> | number
    content?: StringFilter<"Comment"> | string
    parentId?: StringNullableFilter<"Comment"> | string | null
    resolvedAt?: DateTimeNullableFilter<"Comment"> | Date | string | null
    isAI?: BoolFilter<"Comment"> | boolean
    severity?: StringNullableFilter<"Comment"> | string | null
    category?: StringNullableFilter<"Comment"> | string | null
    suggestedFix?: StringNullableFilter<"Comment"> | string | null
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
    reviewSession?: XOR<ReviewSessionScalarRelationFilter, ReviewSessionWhereInput>
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
    parent?: XOR<CommentNullableScalarRelationFilter, CommentWhereInput> | null
    replies?: CommentListRelationFilter
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    reviewSessionId?: SortOrder
    authorId?: SortOrder
    filePath?: SortOrder
    lineNumber?: SortOrder
    content?: SortOrder
    parentId?: SortOrderInput | SortOrder
    resolvedAt?: SortOrderInput | SortOrder
    isAI?: SortOrder
    severity?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    suggestedFix?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Comment"> | string
    reviewSessionId?: StringWithAggregatesFilter<"Comment"> | string
    authorId?: StringWithAggregatesFilter<"Comment"> | string
    filePath?: StringWithAggregatesFilter<"Comment"> | string
    lineNumber?: IntWithAggregatesFilter<"Comment"> | number
    content?: StringWithAggregatesFilter<"Comment"> | string
    parentId?: StringNullableWithAggregatesFilter<"Comment"> | string | null
    resolvedAt?: DateTimeNullableWithAggregatesFilter<"Comment"> | Date | string | null
    isAI?: BoolWithAggregatesFilter<"Comment"> | boolean
    severity?: StringNullableWithAggregatesFilter<"Comment"> | string | null
    category?: StringNullableWithAggregatesFilter<"Comment"> | string | null
    suggestedFix?: StringNullableWithAggregatesFilter<"Comment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: StringFilter<"Subscription"> | string
    workspaceId?: StringFilter<"Subscription"> | string
    lemonSqueezyCustomerId?: StringFilter<"Subscription"> | string
    lemonSqueezyVariantId?: StringFilter<"Subscription"> | string
    lemonSqueezySubscriptionId?: StringFilter<"Subscription"> | string
    status?: StringFilter<"Subscription"> | string
    currentPeriodEnd?: DateTimeFilter<"Subscription"> | Date | string
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    lemonSqueezyCustomerId?: SortOrder
    lemonSqueezyVariantId?: SortOrder
    lemonSqueezySubscriptionId?: SortOrder
    status?: SortOrder
    currentPeriodEnd?: SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    workspaceId?: string
    lemonSqueezySubscriptionId?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    lemonSqueezyCustomerId?: StringFilter<"Subscription"> | string
    lemonSqueezyVariantId?: StringFilter<"Subscription"> | string
    status?: StringFilter<"Subscription"> | string
    currentPeriodEnd?: DateTimeFilter<"Subscription"> | Date | string
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
  }, "id" | "workspaceId" | "lemonSqueezySubscriptionId">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    lemonSqueezyCustomerId?: SortOrder
    lemonSqueezyVariantId?: SortOrder
    lemonSqueezySubscriptionId?: SortOrder
    status?: SortOrder
    currentPeriodEnd?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscription"> | string
    workspaceId?: StringWithAggregatesFilter<"Subscription"> | string
    lemonSqueezyCustomerId?: StringWithAggregatesFilter<"Subscription"> | string
    lemonSqueezyVariantId?: StringWithAggregatesFilter<"Subscription"> | string
    lemonSqueezySubscriptionId?: StringWithAggregatesFilter<"Subscription"> | string
    status?: StringWithAggregatesFilter<"Subscription"> | string
    currentPeriodEnd?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    body?: StringFilter<"Notification"> | string
    link?: StringNullableFilter<"Notification"> | string | null
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    body?: SortOrder
    link?: SortOrderInput | SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    body?: StringFilter<"Notification"> | string
    link?: StringNullableFilter<"Notification"> | string | null
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    body?: SortOrder
    link?: SortOrderInput | SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringWithAggregatesFilter<"Notification"> | string
    type?: StringWithAggregatesFilter<"Notification"> | string
    title?: StringWithAggregatesFilter<"Notification"> | string
    body?: StringWithAggregatesFilter<"Notification"> | string
    link?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type WorkspaceSlackConfigWhereInput = {
    AND?: WorkspaceSlackConfigWhereInput | WorkspaceSlackConfigWhereInput[]
    OR?: WorkspaceSlackConfigWhereInput[]
    NOT?: WorkspaceSlackConfigWhereInput | WorkspaceSlackConfigWhereInput[]
    id?: StringFilter<"WorkspaceSlackConfig"> | string
    workspaceId?: StringFilter<"WorkspaceSlackConfig"> | string
    webhookUrl?: StringFilter<"WorkspaceSlackConfig"> | string
    channelName?: StringNullableFilter<"WorkspaceSlackConfig"> | string | null
    createdAt?: DateTimeFilter<"WorkspaceSlackConfig"> | Date | string
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
  }

  export type WorkspaceSlackConfigOrderByWithRelationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    webhookUrl?: SortOrder
    channelName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
  }

  export type WorkspaceSlackConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    workspaceId?: string
    AND?: WorkspaceSlackConfigWhereInput | WorkspaceSlackConfigWhereInput[]
    OR?: WorkspaceSlackConfigWhereInput[]
    NOT?: WorkspaceSlackConfigWhereInput | WorkspaceSlackConfigWhereInput[]
    webhookUrl?: StringFilter<"WorkspaceSlackConfig"> | string
    channelName?: StringNullableFilter<"WorkspaceSlackConfig"> | string | null
    createdAt?: DateTimeFilter<"WorkspaceSlackConfig"> | Date | string
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
  }, "id" | "workspaceId">

  export type WorkspaceSlackConfigOrderByWithAggregationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    webhookUrl?: SortOrder
    channelName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: WorkspaceSlackConfigCountOrderByAggregateInput
    _max?: WorkspaceSlackConfigMaxOrderByAggregateInput
    _min?: WorkspaceSlackConfigMinOrderByAggregateInput
  }

  export type WorkspaceSlackConfigScalarWhereWithAggregatesInput = {
    AND?: WorkspaceSlackConfigScalarWhereWithAggregatesInput | WorkspaceSlackConfigScalarWhereWithAggregatesInput[]
    OR?: WorkspaceSlackConfigScalarWhereWithAggregatesInput[]
    NOT?: WorkspaceSlackConfigScalarWhereWithAggregatesInput | WorkspaceSlackConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WorkspaceSlackConfig"> | string
    workspaceId?: StringWithAggregatesFilter<"WorkspaceSlackConfig"> | string
    webhookUrl?: StringWithAggregatesFilter<"WorkspaceSlackConfig"> | string
    channelName?: StringNullableWithAggregatesFilter<"WorkspaceSlackConfig"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WorkspaceSlackConfig"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    workspaceId?: StringFilter<"AuditLog"> | string
    actorId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    metadata?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
    actor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
    actor?: UserOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    workspaceId?: StringFilter<"AuditLog"> | string
    actorId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    metadata?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
    actor?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    metadata?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    workspaceId?: StringWithAggregatesFilter<"AuditLog"> | string
    actorId?: StringWithAggregatesFilter<"AuditLog"> | string
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    metadata?: JsonNullableWithAggregatesFilter<"AuditLog">
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    githubId?: string | null
    githubUsername?: string | null
    githubAccessToken?: string | null
    createdAt?: Date | string
    emailNotificationsEnabled?: boolean
    updatedAt?: Date | string
    ownedWorkspaces?: WorkspaceCreateNestedManyWithoutOwnerInput
    memberships?: WorkspaceMemberCreateNestedManyWithoutUserInput
    pullRequests?: PullRequestCreateNestedManyWithoutAuthorInput
    reviewSessions?: ReviewSessionCreateNestedManyWithoutCreatorInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    assignedPRs?: PullRequestCreateNestedManyWithoutReviewerInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    githubId?: string | null
    githubUsername?: string | null
    githubAccessToken?: string | null
    createdAt?: Date | string
    emailNotificationsEnabled?: boolean
    updatedAt?: Date | string
    ownedWorkspaces?: WorkspaceUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: WorkspaceMemberUncheckedCreateNestedManyWithoutUserInput
    pullRequests?: PullRequestUncheckedCreateNestedManyWithoutAuthorInput
    reviewSessions?: ReviewSessionUncheckedCreateNestedManyWithoutCreatorInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    assignedPRs?: PullRequestUncheckedCreateNestedManyWithoutReviewerInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    githubAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailNotificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedWorkspaces?: WorkspaceUpdateManyWithoutOwnerNestedInput
    memberships?: WorkspaceMemberUpdateManyWithoutUserNestedInput
    pullRequests?: PullRequestUpdateManyWithoutAuthorNestedInput
    reviewSessions?: ReviewSessionUpdateManyWithoutCreatorNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    assignedPRs?: PullRequestUpdateManyWithoutReviewerNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    githubAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailNotificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedWorkspaces?: WorkspaceUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: WorkspaceMemberUncheckedUpdateManyWithoutUserNestedInput
    pullRequests?: PullRequestUncheckedUpdateManyWithoutAuthorNestedInput
    reviewSessions?: ReviewSessionUncheckedUpdateManyWithoutCreatorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    assignedPRs?: PullRequestUncheckedUpdateManyWithoutReviewerNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    githubId?: string | null
    githubUsername?: string | null
    githubAccessToken?: string | null
    createdAt?: Date | string
    emailNotificationsEnabled?: boolean
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    githubAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailNotificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    githubAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailNotificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceCreateInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.Plan
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedWorkspacesInput
    members?: WorkspaceMemberCreateNestedManyWithoutWorkspaceInput
    repositories?: RepositoryCreateNestedManyWithoutWorkspaceInput
    subscription?: SubscriptionCreateNestedOneWithoutWorkspaceInput
    slackConfig?: WorkspaceSlackConfigCreateNestedOneWithoutWorkspaceInput
    auditLogs?: AuditLogCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.Plan
    ownerId: string
    createdAt?: Date | string
    members?: WorkspaceMemberUncheckedCreateNestedManyWithoutWorkspaceInput
    repositories?: RepositoryUncheckedCreateNestedManyWithoutWorkspaceInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutWorkspaceInput
    slackConfig?: WorkspaceSlackConfigUncheckedCreateNestedOneWithoutWorkspaceInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedWorkspacesNestedInput
    members?: WorkspaceMemberUpdateManyWithoutWorkspaceNestedInput
    repositories?: RepositoryUpdateManyWithoutWorkspaceNestedInput
    subscription?: SubscriptionUpdateOneWithoutWorkspaceNestedInput
    slackConfig?: WorkspaceSlackConfigUpdateOneWithoutWorkspaceNestedInput
    auditLogs?: AuditLogUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: WorkspaceMemberUncheckedUpdateManyWithoutWorkspaceNestedInput
    repositories?: RepositoryUncheckedUpdateManyWithoutWorkspaceNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutWorkspaceNestedInput
    slackConfig?: WorkspaceSlackConfigUncheckedUpdateOneWithoutWorkspaceNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceCreateManyInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.Plan
    ownerId: string
    createdAt?: Date | string
  }

  export type WorkspaceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceMemberCreateInput = {
    id?: string
    role?: $Enums.MemberRole
    joinedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutMembersInput
    user: UserCreateNestedOneWithoutMembershipsInput
  }

  export type WorkspaceMemberUncheckedCreateInput = {
    id?: string
    workspaceId: string
    userId: string
    role?: $Enums.MemberRole
    joinedAt?: Date | string
  }

  export type WorkspaceMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutMembersNestedInput
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type WorkspaceMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceMemberCreateManyInput = {
    id?: string
    workspaceId: string
    userId: string
    role?: $Enums.MemberRole
    joinedAt?: Date | string
  }

  export type WorkspaceMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepositoryCreateInput = {
    id?: string
    githubRepoId: string
    name: string
    fullName: string
    defaultBranch?: string
    isPrivate?: boolean
    createdAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutRepositoriesInput
    pullRequests?: PullRequestCreateNestedManyWithoutRepositoryInput
  }

  export type RepositoryUncheckedCreateInput = {
    id?: string
    workspaceId: string
    githubRepoId: string
    name: string
    fullName: string
    defaultBranch?: string
    isPrivate?: boolean
    createdAt?: Date | string
    pullRequests?: PullRequestUncheckedCreateNestedManyWithoutRepositoryInput
  }

  export type RepositoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubRepoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    defaultBranch?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutRepositoriesNestedInput
    pullRequests?: PullRequestUpdateManyWithoutRepositoryNestedInput
  }

  export type RepositoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    githubRepoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    defaultBranch?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pullRequests?: PullRequestUncheckedUpdateManyWithoutRepositoryNestedInput
  }

  export type RepositoryCreateManyInput = {
    id?: string
    workspaceId: string
    githubRepoId: string
    name: string
    fullName: string
    defaultBranch?: string
    isPrivate?: boolean
    createdAt?: Date | string
  }

  export type RepositoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubRepoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    defaultBranch?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepositoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    githubRepoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    defaultBranch?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PullRequestCreateInput = {
    id?: string
    githubPrNumber: number
    title: string
    body?: string | null
    status?: $Enums.PRStatus
    headBranch: string
    baseBranch: string
    diffUrl?: string | null
    aiSummary?: string | null
    securityScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    repository: RepositoryCreateNestedOneWithoutPullRequestsInput
    author: UserCreateNestedOneWithoutPullRequestsInput
    reviewer?: UserCreateNestedOneWithoutAssignedPRsInput
    reviewSessions?: ReviewSessionCreateNestedManyWithoutPullRequestInput
    securityFindings?: SecurityFindingCreateNestedManyWithoutPullRequestInput
  }

  export type PullRequestUncheckedCreateInput = {
    id?: string
    repositoryId: string
    githubPrNumber: number
    title: string
    body?: string | null
    authorId: string
    status?: $Enums.PRStatus
    headBranch: string
    baseBranch: string
    diffUrl?: string | null
    aiSummary?: string | null
    securityScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewerId?: string | null
    reviewSessions?: ReviewSessionUncheckedCreateNestedManyWithoutPullRequestInput
    securityFindings?: SecurityFindingUncheckedCreateNestedManyWithoutPullRequestInput
  }

  export type PullRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubPrNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPRStatusFieldUpdateOperationsInput | $Enums.PRStatus
    headBranch?: StringFieldUpdateOperationsInput | string
    baseBranch?: StringFieldUpdateOperationsInput | string
    diffUrl?: NullableStringFieldUpdateOperationsInput | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    securityScore?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repository?: RepositoryUpdateOneRequiredWithoutPullRequestsNestedInput
    author?: UserUpdateOneRequiredWithoutPullRequestsNestedInput
    reviewer?: UserUpdateOneWithoutAssignedPRsNestedInput
    reviewSessions?: ReviewSessionUpdateManyWithoutPullRequestNestedInput
    securityFindings?: SecurityFindingUpdateManyWithoutPullRequestNestedInput
  }

  export type PullRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    repositoryId?: StringFieldUpdateOperationsInput | string
    githubPrNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    status?: EnumPRStatusFieldUpdateOperationsInput | $Enums.PRStatus
    headBranch?: StringFieldUpdateOperationsInput | string
    baseBranch?: StringFieldUpdateOperationsInput | string
    diffUrl?: NullableStringFieldUpdateOperationsInput | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    securityScore?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewerId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewSessions?: ReviewSessionUncheckedUpdateManyWithoutPullRequestNestedInput
    securityFindings?: SecurityFindingUncheckedUpdateManyWithoutPullRequestNestedInput
  }

  export type PullRequestCreateManyInput = {
    id?: string
    repositoryId: string
    githubPrNumber: number
    title: string
    body?: string | null
    authorId: string
    status?: $Enums.PRStatus
    headBranch: string
    baseBranch: string
    diffUrl?: string | null
    aiSummary?: string | null
    securityScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewerId?: string | null
  }

  export type PullRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubPrNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPRStatusFieldUpdateOperationsInput | $Enums.PRStatus
    headBranch?: StringFieldUpdateOperationsInput | string
    baseBranch?: StringFieldUpdateOperationsInput | string
    diffUrl?: NullableStringFieldUpdateOperationsInput | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    securityScore?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PullRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    repositoryId?: StringFieldUpdateOperationsInput | string
    githubPrNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    status?: EnumPRStatusFieldUpdateOperationsInput | $Enums.PRStatus
    headBranch?: StringFieldUpdateOperationsInput | string
    baseBranch?: StringFieldUpdateOperationsInput | string
    diffUrl?: NullableStringFieldUpdateOperationsInput | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    securityScore?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SecurityFindingCreateInput = {
    id?: string
    filePath: string
    lineNumber: number
    severity: string
    category: string
    cweId?: string | null
    description: string
    remediation: string
    isFalsePositive?: boolean
    createdAt?: Date | string
    pullRequest: PullRequestCreateNestedOneWithoutSecurityFindingsInput
  }

  export type SecurityFindingUncheckedCreateInput = {
    id?: string
    pullRequestId: string
    filePath: string
    lineNumber: number
    severity: string
    category: string
    cweId?: string | null
    description: string
    remediation: string
    isFalsePositive?: boolean
    createdAt?: Date | string
  }

  export type SecurityFindingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    lineNumber?: IntFieldUpdateOperationsInput | number
    severity?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    cweId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    remediation?: StringFieldUpdateOperationsInput | string
    isFalsePositive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pullRequest?: PullRequestUpdateOneRequiredWithoutSecurityFindingsNestedInput
  }

  export type SecurityFindingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pullRequestId?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    lineNumber?: IntFieldUpdateOperationsInput | number
    severity?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    cweId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    remediation?: StringFieldUpdateOperationsInput | string
    isFalsePositive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityFindingCreateManyInput = {
    id?: string
    pullRequestId: string
    filePath: string
    lineNumber: number
    severity: string
    category: string
    cweId?: string | null
    description: string
    remediation: string
    isFalsePositive?: boolean
    createdAt?: Date | string
  }

  export type SecurityFindingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    lineNumber?: IntFieldUpdateOperationsInput | number
    severity?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    cweId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    remediation?: StringFieldUpdateOperationsInput | string
    isFalsePositive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityFindingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pullRequestId?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    lineNumber?: IntFieldUpdateOperationsInput | number
    severity?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    cweId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    remediation?: StringFieldUpdateOperationsInput | string
    isFalsePositive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewSessionCreateInput = {
    id?: string
    isActive?: boolean
    createdAt?: Date | string
    endedAt?: Date | string | null
    pullRequest: PullRequestCreateNestedOneWithoutReviewSessionsInput
    creator: UserCreateNestedOneWithoutReviewSessionsInput
    comments?: CommentCreateNestedManyWithoutReviewSessionInput
  }

  export type ReviewSessionUncheckedCreateInput = {
    id?: string
    pullRequestId: string
    createdBy: string
    isActive?: boolean
    createdAt?: Date | string
    endedAt?: Date | string | null
    comments?: CommentUncheckedCreateNestedManyWithoutReviewSessionInput
  }

  export type ReviewSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pullRequest?: PullRequestUpdateOneRequiredWithoutReviewSessionsNestedInput
    creator?: UserUpdateOneRequiredWithoutReviewSessionsNestedInput
    comments?: CommentUpdateManyWithoutReviewSessionNestedInput
  }

  export type ReviewSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pullRequestId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: CommentUncheckedUpdateManyWithoutReviewSessionNestedInput
  }

  export type ReviewSessionCreateManyInput = {
    id?: string
    pullRequestId: string
    createdBy: string
    isActive?: boolean
    createdAt?: Date | string
    endedAt?: Date | string | null
  }

  export type ReviewSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pullRequestId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommentCreateInput = {
    id?: string
    filePath: string
    lineNumber: number
    content: string
    resolvedAt?: Date | string | null
    isAI?: boolean
    severity?: string | null
    category?: string | null
    suggestedFix?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewSession: ReviewSessionCreateNestedOneWithoutCommentsInput
    author: UserCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
  }

  export type CommentUncheckedCreateInput = {
    id?: string
    reviewSessionId: string
    authorId: string
    filePath: string
    lineNumber: number
    content: string
    parentId?: string | null
    resolvedAt?: Date | string | null
    isAI?: boolean
    severity?: string | null
    category?: string | null
    suggestedFix?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
  }

  export type CommentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    lineNumber?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAI?: BoolFieldUpdateOperationsInput | boolean
    severity?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedFix?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewSession?: ReviewSessionUpdateOneRequiredWithoutCommentsNestedInput
    author?: UserUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewSessionId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    lineNumber?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAI?: BoolFieldUpdateOperationsInput | boolean
    severity?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedFix?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type CommentCreateManyInput = {
    id?: string
    reviewSessionId: string
    authorId: string
    filePath: string
    lineNumber: number
    content: string
    parentId?: string | null
    resolvedAt?: Date | string | null
    isAI?: boolean
    severity?: string | null
    category?: string | null
    suggestedFix?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    lineNumber?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAI?: BoolFieldUpdateOperationsInput | boolean
    severity?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedFix?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewSessionId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    lineNumber?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAI?: BoolFieldUpdateOperationsInput | boolean
    severity?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedFix?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateInput = {
    id?: string
    lemonSqueezyCustomerId: string
    lemonSqueezyVariantId: string
    lemonSqueezySubscriptionId: string
    status: string
    currentPeriodEnd: Date | string
    workspace: WorkspaceCreateNestedOneWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: string
    workspaceId: string
    lemonSqueezyCustomerId: string
    lemonSqueezyVariantId: string
    lemonSqueezySubscriptionId: string
    status: string
    currentPeriodEnd: Date | string
  }

  export type SubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lemonSqueezyCustomerId?: StringFieldUpdateOperationsInput | string
    lemonSqueezyVariantId?: StringFieldUpdateOperationsInput | string
    lemonSqueezySubscriptionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    lemonSqueezyCustomerId?: StringFieldUpdateOperationsInput | string
    lemonSqueezyVariantId?: StringFieldUpdateOperationsInput | string
    lemonSqueezySubscriptionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateManyInput = {
    id?: string
    workspaceId: string
    lemonSqueezyCustomerId: string
    lemonSqueezyVariantId: string
    lemonSqueezySubscriptionId: string
    status: string
    currentPeriodEnd: Date | string
  }

  export type SubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lemonSqueezyCustomerId?: StringFieldUpdateOperationsInput | string
    lemonSqueezyVariantId?: StringFieldUpdateOperationsInput | string
    lemonSqueezySubscriptionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    lemonSqueezyCustomerId?: StringFieldUpdateOperationsInput | string
    lemonSqueezyVariantId?: StringFieldUpdateOperationsInput | string
    lemonSqueezySubscriptionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    id?: string
    type: string
    title: string
    body: string
    link?: string | null
    isRead?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    title: string
    body: string
    link?: string | null
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId: string
    type: string
    title: string
    body: string
    link?: string | null
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceSlackConfigCreateInput = {
    id?: string
    webhookUrl: string
    channelName?: string | null
    createdAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutSlackConfigInput
  }

  export type WorkspaceSlackConfigUncheckedCreateInput = {
    id?: string
    workspaceId: string
    webhookUrl: string
    channelName?: string | null
    createdAt?: Date | string
  }

  export type WorkspaceSlackConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    webhookUrl?: StringFieldUpdateOperationsInput | string
    channelName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutSlackConfigNestedInput
  }

  export type WorkspaceSlackConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    webhookUrl?: StringFieldUpdateOperationsInput | string
    channelName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceSlackConfigCreateManyInput = {
    id?: string
    workspaceId: string
    webhookUrl: string
    channelName?: string | null
    createdAt?: Date | string
  }

  export type WorkspaceSlackConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    webhookUrl?: StringFieldUpdateOperationsInput | string
    channelName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceSlackConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    webhookUrl?: StringFieldUpdateOperationsInput | string
    channelName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    action: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutAuditLogsInput
    actor: UserCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    workspaceId: string
    actorId: string
    action: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutAuditLogsNestedInput
    actor?: UserUpdateOneRequiredWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    workspaceId: string
    actorId: string
    action: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type WorkspaceListRelationFilter = {
    every?: WorkspaceWhereInput
    some?: WorkspaceWhereInput
    none?: WorkspaceWhereInput
  }

  export type WorkspaceMemberListRelationFilter = {
    every?: WorkspaceMemberWhereInput
    some?: WorkspaceMemberWhereInput
    none?: WorkspaceMemberWhereInput
  }

  export type PullRequestListRelationFilter = {
    every?: PullRequestWhereInput
    some?: PullRequestWhereInput
    none?: PullRequestWhereInput
  }

  export type ReviewSessionListRelationFilter = {
    every?: ReviewSessionWhereInput
    some?: ReviewSessionWhereInput
    none?: ReviewSessionWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WorkspaceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkspaceMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PullRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewSessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    githubId?: SortOrder
    githubUsername?: SortOrder
    githubAccessToken?: SortOrder
    createdAt?: SortOrder
    emailNotificationsEnabled?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    githubId?: SortOrder
    githubUsername?: SortOrder
    githubAccessToken?: SortOrder
    createdAt?: SortOrder
    emailNotificationsEnabled?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    githubId?: SortOrder
    githubUsername?: SortOrder
    githubAccessToken?: SortOrder
    createdAt?: SortOrder
    emailNotificationsEnabled?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.Plan | EnumPlanFieldRefInput<$PrismaModel>
    in?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanFilter<$PrismaModel> | $Enums.Plan
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RepositoryListRelationFilter = {
    every?: RepositoryWhereInput
    some?: RepositoryWhereInput
    none?: RepositoryWhereInput
  }

  export type SubscriptionNullableScalarRelationFilter = {
    is?: SubscriptionWhereInput | null
    isNot?: SubscriptionWhereInput | null
  }

  export type WorkspaceSlackConfigNullableScalarRelationFilter = {
    is?: WorkspaceSlackConfigWhereInput | null
    isNot?: WorkspaceSlackConfigWhereInput | null
  }

  export type RepositoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkspaceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    plan?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkspaceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    plan?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkspaceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    plan?: SortOrder
    ownerId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Plan | EnumPlanFieldRefInput<$PrismaModel>
    in?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanWithAggregatesFilter<$PrismaModel> | $Enums.Plan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanFilter<$PrismaModel>
    _max?: NestedEnumPlanFilter<$PrismaModel>
  }

  export type EnumMemberRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberRole | EnumMemberRoleFieldRefInput<$PrismaModel>
    in?: $Enums.MemberRole[] | ListEnumMemberRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemberRole[] | ListEnumMemberRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumMemberRoleFilter<$PrismaModel> | $Enums.MemberRole
  }

  export type WorkspaceScalarRelationFilter = {
    is?: WorkspaceWhereInput
    isNot?: WorkspaceWhereInput
  }

  export type WorkspaceMemberWorkspaceIdUserIdCompoundUniqueInput = {
    workspaceId: string
    userId: string
  }

  export type WorkspaceMemberCountOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type WorkspaceMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type WorkspaceMemberMinOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    userId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type EnumMemberRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberRole | EnumMemberRoleFieldRefInput<$PrismaModel>
    in?: $Enums.MemberRole[] | ListEnumMemberRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemberRole[] | ListEnumMemberRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumMemberRoleWithAggregatesFilter<$PrismaModel> | $Enums.MemberRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMemberRoleFilter<$PrismaModel>
    _max?: NestedEnumMemberRoleFilter<$PrismaModel>
  }

  export type RepositoryWorkspaceIdGithubRepoIdCompoundUniqueInput = {
    workspaceId: string
    githubRepoId: string
  }

  export type RepositoryCountOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    githubRepoId?: SortOrder
    name?: SortOrder
    fullName?: SortOrder
    defaultBranch?: SortOrder
    isPrivate?: SortOrder
    createdAt?: SortOrder
  }

  export type RepositoryMaxOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    githubRepoId?: SortOrder
    name?: SortOrder
    fullName?: SortOrder
    defaultBranch?: SortOrder
    isPrivate?: SortOrder
    createdAt?: SortOrder
  }

  export type RepositoryMinOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    githubRepoId?: SortOrder
    name?: SortOrder
    fullName?: SortOrder
    defaultBranch?: SortOrder
    isPrivate?: SortOrder
    createdAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumPRStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PRStatus | EnumPRStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PRStatus[] | ListEnumPRStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PRStatus[] | ListEnumPRStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPRStatusFilter<$PrismaModel> | $Enums.PRStatus
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type RepositoryScalarRelationFilter = {
    is?: RepositoryWhereInput
    isNot?: RepositoryWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SecurityFindingListRelationFilter = {
    every?: SecurityFindingWhereInput
    some?: SecurityFindingWhereInput
    none?: SecurityFindingWhereInput
  }

  export type SecurityFindingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PullRequestRepositoryIdGithubPrNumberCompoundUniqueInput = {
    repositoryId: string
    githubPrNumber: number
  }

  export type PullRequestCountOrderByAggregateInput = {
    id?: SortOrder
    repositoryId?: SortOrder
    githubPrNumber?: SortOrder
    title?: SortOrder
    body?: SortOrder
    authorId?: SortOrder
    status?: SortOrder
    headBranch?: SortOrder
    baseBranch?: SortOrder
    diffUrl?: SortOrder
    aiSummary?: SortOrder
    securityScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reviewerId?: SortOrder
  }

  export type PullRequestAvgOrderByAggregateInput = {
    githubPrNumber?: SortOrder
    securityScore?: SortOrder
  }

  export type PullRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    repositoryId?: SortOrder
    githubPrNumber?: SortOrder
    title?: SortOrder
    body?: SortOrder
    authorId?: SortOrder
    status?: SortOrder
    headBranch?: SortOrder
    baseBranch?: SortOrder
    diffUrl?: SortOrder
    aiSummary?: SortOrder
    securityScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reviewerId?: SortOrder
  }

  export type PullRequestMinOrderByAggregateInput = {
    id?: SortOrder
    repositoryId?: SortOrder
    githubPrNumber?: SortOrder
    title?: SortOrder
    body?: SortOrder
    authorId?: SortOrder
    status?: SortOrder
    headBranch?: SortOrder
    baseBranch?: SortOrder
    diffUrl?: SortOrder
    aiSummary?: SortOrder
    securityScore?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reviewerId?: SortOrder
  }

  export type PullRequestSumOrderByAggregateInput = {
    githubPrNumber?: SortOrder
    securityScore?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type EnumPRStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PRStatus | EnumPRStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PRStatus[] | ListEnumPRStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PRStatus[] | ListEnumPRStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPRStatusWithAggregatesFilter<$PrismaModel> | $Enums.PRStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPRStatusFilter<$PrismaModel>
    _max?: NestedEnumPRStatusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type PullRequestScalarRelationFilter = {
    is?: PullRequestWhereInput
    isNot?: PullRequestWhereInput
  }

  export type SecurityFindingCountOrderByAggregateInput = {
    id?: SortOrder
    pullRequestId?: SortOrder
    filePath?: SortOrder
    lineNumber?: SortOrder
    severity?: SortOrder
    category?: SortOrder
    cweId?: SortOrder
    description?: SortOrder
    remediation?: SortOrder
    isFalsePositive?: SortOrder
    createdAt?: SortOrder
  }

  export type SecurityFindingAvgOrderByAggregateInput = {
    lineNumber?: SortOrder
  }

  export type SecurityFindingMaxOrderByAggregateInput = {
    id?: SortOrder
    pullRequestId?: SortOrder
    filePath?: SortOrder
    lineNumber?: SortOrder
    severity?: SortOrder
    category?: SortOrder
    cweId?: SortOrder
    description?: SortOrder
    remediation?: SortOrder
    isFalsePositive?: SortOrder
    createdAt?: SortOrder
  }

  export type SecurityFindingMinOrderByAggregateInput = {
    id?: SortOrder
    pullRequestId?: SortOrder
    filePath?: SortOrder
    lineNumber?: SortOrder
    severity?: SortOrder
    category?: SortOrder
    cweId?: SortOrder
    description?: SortOrder
    remediation?: SortOrder
    isFalsePositive?: SortOrder
    createdAt?: SortOrder
  }

  export type SecurityFindingSumOrderByAggregateInput = {
    lineNumber?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ReviewSessionCountOrderByAggregateInput = {
    id?: SortOrder
    pullRequestId?: SortOrder
    createdBy?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    endedAt?: SortOrder
  }

  export type ReviewSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    pullRequestId?: SortOrder
    createdBy?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    endedAt?: SortOrder
  }

  export type ReviewSessionMinOrderByAggregateInput = {
    id?: SortOrder
    pullRequestId?: SortOrder
    createdBy?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    endedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ReviewSessionScalarRelationFilter = {
    is?: ReviewSessionWhereInput
    isNot?: ReviewSessionWhereInput
  }

  export type CommentNullableScalarRelationFilter = {
    is?: CommentWhereInput | null
    isNot?: CommentWhereInput | null
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    reviewSessionId?: SortOrder
    authorId?: SortOrder
    filePath?: SortOrder
    lineNumber?: SortOrder
    content?: SortOrder
    parentId?: SortOrder
    resolvedAt?: SortOrder
    isAI?: SortOrder
    severity?: SortOrder
    category?: SortOrder
    suggestedFix?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    lineNumber?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    reviewSessionId?: SortOrder
    authorId?: SortOrder
    filePath?: SortOrder
    lineNumber?: SortOrder
    content?: SortOrder
    parentId?: SortOrder
    resolvedAt?: SortOrder
    isAI?: SortOrder
    severity?: SortOrder
    category?: SortOrder
    suggestedFix?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    reviewSessionId?: SortOrder
    authorId?: SortOrder
    filePath?: SortOrder
    lineNumber?: SortOrder
    content?: SortOrder
    parentId?: SortOrder
    resolvedAt?: SortOrder
    isAI?: SortOrder
    severity?: SortOrder
    category?: SortOrder
    suggestedFix?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    lineNumber?: SortOrder
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    lemonSqueezyCustomerId?: SortOrder
    lemonSqueezyVariantId?: SortOrder
    lemonSqueezySubscriptionId?: SortOrder
    status?: SortOrder
    currentPeriodEnd?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    lemonSqueezyCustomerId?: SortOrder
    lemonSqueezyVariantId?: SortOrder
    lemonSqueezySubscriptionId?: SortOrder
    status?: SortOrder
    currentPeriodEnd?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    lemonSqueezyCustomerId?: SortOrder
    lemonSqueezyVariantId?: SortOrder
    lemonSqueezySubscriptionId?: SortOrder
    status?: SortOrder
    currentPeriodEnd?: SortOrder
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    body?: SortOrder
    link?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    body?: SortOrder
    link?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    title?: SortOrder
    body?: SortOrder
    link?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkspaceSlackConfigCountOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    webhookUrl?: SortOrder
    channelName?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkspaceSlackConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    webhookUrl?: SortOrder
    channelName?: SortOrder
    createdAt?: SortOrder
  }

  export type WorkspaceSlackConfigMinOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    webhookUrl?: SortOrder
    channelName?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    metadata?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    actorId?: SortOrder
    action?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type WorkspaceCreateNestedManyWithoutOwnerInput = {
    create?: XOR<WorkspaceCreateWithoutOwnerInput, WorkspaceUncheckedCreateWithoutOwnerInput> | WorkspaceCreateWithoutOwnerInput[] | WorkspaceUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: WorkspaceCreateOrConnectWithoutOwnerInput | WorkspaceCreateOrConnectWithoutOwnerInput[]
    createMany?: WorkspaceCreateManyOwnerInputEnvelope
    connect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
  }

  export type WorkspaceMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkspaceMemberCreateWithoutUserInput, WorkspaceMemberUncheckedCreateWithoutUserInput> | WorkspaceMemberCreateWithoutUserInput[] | WorkspaceMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkspaceMemberCreateOrConnectWithoutUserInput | WorkspaceMemberCreateOrConnectWithoutUserInput[]
    createMany?: WorkspaceMemberCreateManyUserInputEnvelope
    connect?: WorkspaceMemberWhereUniqueInput | WorkspaceMemberWhereUniqueInput[]
  }

  export type PullRequestCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PullRequestCreateWithoutAuthorInput, PullRequestUncheckedCreateWithoutAuthorInput> | PullRequestCreateWithoutAuthorInput[] | PullRequestUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PullRequestCreateOrConnectWithoutAuthorInput | PullRequestCreateOrConnectWithoutAuthorInput[]
    createMany?: PullRequestCreateManyAuthorInputEnvelope
    connect?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
  }

  export type ReviewSessionCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ReviewSessionCreateWithoutCreatorInput, ReviewSessionUncheckedCreateWithoutCreatorInput> | ReviewSessionCreateWithoutCreatorInput[] | ReviewSessionUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ReviewSessionCreateOrConnectWithoutCreatorInput | ReviewSessionCreateOrConnectWithoutCreatorInput[]
    createMany?: ReviewSessionCreateManyCreatorInputEnvelope
    connect?: ReviewSessionWhereUniqueInput | ReviewSessionWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type PullRequestCreateNestedManyWithoutReviewerInput = {
    create?: XOR<PullRequestCreateWithoutReviewerInput, PullRequestUncheckedCreateWithoutReviewerInput> | PullRequestCreateWithoutReviewerInput[] | PullRequestUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: PullRequestCreateOrConnectWithoutReviewerInput | PullRequestCreateOrConnectWithoutReviewerInput[]
    createMany?: PullRequestCreateManyReviewerInputEnvelope
    connect?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutActorInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type WorkspaceUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<WorkspaceCreateWithoutOwnerInput, WorkspaceUncheckedCreateWithoutOwnerInput> | WorkspaceCreateWithoutOwnerInput[] | WorkspaceUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: WorkspaceCreateOrConnectWithoutOwnerInput | WorkspaceCreateOrConnectWithoutOwnerInput[]
    createMany?: WorkspaceCreateManyOwnerInputEnvelope
    connect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
  }

  export type WorkspaceMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkspaceMemberCreateWithoutUserInput, WorkspaceMemberUncheckedCreateWithoutUserInput> | WorkspaceMemberCreateWithoutUserInput[] | WorkspaceMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkspaceMemberCreateOrConnectWithoutUserInput | WorkspaceMemberCreateOrConnectWithoutUserInput[]
    createMany?: WorkspaceMemberCreateManyUserInputEnvelope
    connect?: WorkspaceMemberWhereUniqueInput | WorkspaceMemberWhereUniqueInput[]
  }

  export type PullRequestUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PullRequestCreateWithoutAuthorInput, PullRequestUncheckedCreateWithoutAuthorInput> | PullRequestCreateWithoutAuthorInput[] | PullRequestUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PullRequestCreateOrConnectWithoutAuthorInput | PullRequestCreateOrConnectWithoutAuthorInput[]
    createMany?: PullRequestCreateManyAuthorInputEnvelope
    connect?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
  }

  export type ReviewSessionUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ReviewSessionCreateWithoutCreatorInput, ReviewSessionUncheckedCreateWithoutCreatorInput> | ReviewSessionCreateWithoutCreatorInput[] | ReviewSessionUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ReviewSessionCreateOrConnectWithoutCreatorInput | ReviewSessionCreateOrConnectWithoutCreatorInput[]
    createMany?: ReviewSessionCreateManyCreatorInputEnvelope
    connect?: ReviewSessionWhereUniqueInput | ReviewSessionWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type PullRequestUncheckedCreateNestedManyWithoutReviewerInput = {
    create?: XOR<PullRequestCreateWithoutReviewerInput, PullRequestUncheckedCreateWithoutReviewerInput> | PullRequestCreateWithoutReviewerInput[] | PullRequestUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: PullRequestCreateOrConnectWithoutReviewerInput | PullRequestCreateOrConnectWithoutReviewerInput[]
    createMany?: PullRequestCreateManyReviewerInputEnvelope
    connect?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutActorInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type WorkspaceUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<WorkspaceCreateWithoutOwnerInput, WorkspaceUncheckedCreateWithoutOwnerInput> | WorkspaceCreateWithoutOwnerInput[] | WorkspaceUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: WorkspaceCreateOrConnectWithoutOwnerInput | WorkspaceCreateOrConnectWithoutOwnerInput[]
    upsert?: WorkspaceUpsertWithWhereUniqueWithoutOwnerInput | WorkspaceUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: WorkspaceCreateManyOwnerInputEnvelope
    set?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    disconnect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    delete?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    connect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    update?: WorkspaceUpdateWithWhereUniqueWithoutOwnerInput | WorkspaceUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: WorkspaceUpdateManyWithWhereWithoutOwnerInput | WorkspaceUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: WorkspaceScalarWhereInput | WorkspaceScalarWhereInput[]
  }

  export type WorkspaceMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkspaceMemberCreateWithoutUserInput, WorkspaceMemberUncheckedCreateWithoutUserInput> | WorkspaceMemberCreateWithoutUserInput[] | WorkspaceMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkspaceMemberCreateOrConnectWithoutUserInput | WorkspaceMemberCreateOrConnectWithoutUserInput[]
    upsert?: WorkspaceMemberUpsertWithWhereUniqueWithoutUserInput | WorkspaceMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkspaceMemberCreateManyUserInputEnvelope
    set?: WorkspaceMemberWhereUniqueInput | WorkspaceMemberWhereUniqueInput[]
    disconnect?: WorkspaceMemberWhereUniqueInput | WorkspaceMemberWhereUniqueInput[]
    delete?: WorkspaceMemberWhereUniqueInput | WorkspaceMemberWhereUniqueInput[]
    connect?: WorkspaceMemberWhereUniqueInput | WorkspaceMemberWhereUniqueInput[]
    update?: WorkspaceMemberUpdateWithWhereUniqueWithoutUserInput | WorkspaceMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkspaceMemberUpdateManyWithWhereWithoutUserInput | WorkspaceMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkspaceMemberScalarWhereInput | WorkspaceMemberScalarWhereInput[]
  }

  export type PullRequestUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PullRequestCreateWithoutAuthorInput, PullRequestUncheckedCreateWithoutAuthorInput> | PullRequestCreateWithoutAuthorInput[] | PullRequestUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PullRequestCreateOrConnectWithoutAuthorInput | PullRequestCreateOrConnectWithoutAuthorInput[]
    upsert?: PullRequestUpsertWithWhereUniqueWithoutAuthorInput | PullRequestUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PullRequestCreateManyAuthorInputEnvelope
    set?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    disconnect?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    delete?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    connect?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    update?: PullRequestUpdateWithWhereUniqueWithoutAuthorInput | PullRequestUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PullRequestUpdateManyWithWhereWithoutAuthorInput | PullRequestUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PullRequestScalarWhereInput | PullRequestScalarWhereInput[]
  }

  export type ReviewSessionUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ReviewSessionCreateWithoutCreatorInput, ReviewSessionUncheckedCreateWithoutCreatorInput> | ReviewSessionCreateWithoutCreatorInput[] | ReviewSessionUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ReviewSessionCreateOrConnectWithoutCreatorInput | ReviewSessionCreateOrConnectWithoutCreatorInput[]
    upsert?: ReviewSessionUpsertWithWhereUniqueWithoutCreatorInput | ReviewSessionUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ReviewSessionCreateManyCreatorInputEnvelope
    set?: ReviewSessionWhereUniqueInput | ReviewSessionWhereUniqueInput[]
    disconnect?: ReviewSessionWhereUniqueInput | ReviewSessionWhereUniqueInput[]
    delete?: ReviewSessionWhereUniqueInput | ReviewSessionWhereUniqueInput[]
    connect?: ReviewSessionWhereUniqueInput | ReviewSessionWhereUniqueInput[]
    update?: ReviewSessionUpdateWithWhereUniqueWithoutCreatorInput | ReviewSessionUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ReviewSessionUpdateManyWithWhereWithoutCreatorInput | ReviewSessionUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ReviewSessionScalarWhereInput | ReviewSessionScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAuthorInput | CommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAuthorInput | CommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAuthorInput | CommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type PullRequestUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<PullRequestCreateWithoutReviewerInput, PullRequestUncheckedCreateWithoutReviewerInput> | PullRequestCreateWithoutReviewerInput[] | PullRequestUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: PullRequestCreateOrConnectWithoutReviewerInput | PullRequestCreateOrConnectWithoutReviewerInput[]
    upsert?: PullRequestUpsertWithWhereUniqueWithoutReviewerInput | PullRequestUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: PullRequestCreateManyReviewerInputEnvelope
    set?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    disconnect?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    delete?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    connect?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    update?: PullRequestUpdateWithWhereUniqueWithoutReviewerInput | PullRequestUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: PullRequestUpdateManyWithWhereWithoutReviewerInput | PullRequestUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: PullRequestScalarWhereInput | PullRequestScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutActorNestedInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutActorInput | AuditLogUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutActorInput | AuditLogUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutActorInput | AuditLogUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type WorkspaceUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<WorkspaceCreateWithoutOwnerInput, WorkspaceUncheckedCreateWithoutOwnerInput> | WorkspaceCreateWithoutOwnerInput[] | WorkspaceUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: WorkspaceCreateOrConnectWithoutOwnerInput | WorkspaceCreateOrConnectWithoutOwnerInput[]
    upsert?: WorkspaceUpsertWithWhereUniqueWithoutOwnerInput | WorkspaceUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: WorkspaceCreateManyOwnerInputEnvelope
    set?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    disconnect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    delete?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    connect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    update?: WorkspaceUpdateWithWhereUniqueWithoutOwnerInput | WorkspaceUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: WorkspaceUpdateManyWithWhereWithoutOwnerInput | WorkspaceUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: WorkspaceScalarWhereInput | WorkspaceScalarWhereInput[]
  }

  export type WorkspaceMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkspaceMemberCreateWithoutUserInput, WorkspaceMemberUncheckedCreateWithoutUserInput> | WorkspaceMemberCreateWithoutUserInput[] | WorkspaceMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkspaceMemberCreateOrConnectWithoutUserInput | WorkspaceMemberCreateOrConnectWithoutUserInput[]
    upsert?: WorkspaceMemberUpsertWithWhereUniqueWithoutUserInput | WorkspaceMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkspaceMemberCreateManyUserInputEnvelope
    set?: WorkspaceMemberWhereUniqueInput | WorkspaceMemberWhereUniqueInput[]
    disconnect?: WorkspaceMemberWhereUniqueInput | WorkspaceMemberWhereUniqueInput[]
    delete?: WorkspaceMemberWhereUniqueInput | WorkspaceMemberWhereUniqueInput[]
    connect?: WorkspaceMemberWhereUniqueInput | WorkspaceMemberWhereUniqueInput[]
    update?: WorkspaceMemberUpdateWithWhereUniqueWithoutUserInput | WorkspaceMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkspaceMemberUpdateManyWithWhereWithoutUserInput | WorkspaceMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkspaceMemberScalarWhereInput | WorkspaceMemberScalarWhereInput[]
  }

  export type PullRequestUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PullRequestCreateWithoutAuthorInput, PullRequestUncheckedCreateWithoutAuthorInput> | PullRequestCreateWithoutAuthorInput[] | PullRequestUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PullRequestCreateOrConnectWithoutAuthorInput | PullRequestCreateOrConnectWithoutAuthorInput[]
    upsert?: PullRequestUpsertWithWhereUniqueWithoutAuthorInput | PullRequestUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PullRequestCreateManyAuthorInputEnvelope
    set?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    disconnect?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    delete?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    connect?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    update?: PullRequestUpdateWithWhereUniqueWithoutAuthorInput | PullRequestUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PullRequestUpdateManyWithWhereWithoutAuthorInput | PullRequestUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PullRequestScalarWhereInput | PullRequestScalarWhereInput[]
  }

  export type ReviewSessionUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ReviewSessionCreateWithoutCreatorInput, ReviewSessionUncheckedCreateWithoutCreatorInput> | ReviewSessionCreateWithoutCreatorInput[] | ReviewSessionUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ReviewSessionCreateOrConnectWithoutCreatorInput | ReviewSessionCreateOrConnectWithoutCreatorInput[]
    upsert?: ReviewSessionUpsertWithWhereUniqueWithoutCreatorInput | ReviewSessionUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ReviewSessionCreateManyCreatorInputEnvelope
    set?: ReviewSessionWhereUniqueInput | ReviewSessionWhereUniqueInput[]
    disconnect?: ReviewSessionWhereUniqueInput | ReviewSessionWhereUniqueInput[]
    delete?: ReviewSessionWhereUniqueInput | ReviewSessionWhereUniqueInput[]
    connect?: ReviewSessionWhereUniqueInput | ReviewSessionWhereUniqueInput[]
    update?: ReviewSessionUpdateWithWhereUniqueWithoutCreatorInput | ReviewSessionUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ReviewSessionUpdateManyWithWhereWithoutCreatorInput | ReviewSessionUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ReviewSessionScalarWhereInput | ReviewSessionScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput> | CommentCreateWithoutAuthorInput[] | CommentUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutAuthorInput | CommentCreateOrConnectWithoutAuthorInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutAuthorInput | CommentUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CommentCreateManyAuthorInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutAuthorInput | CommentUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutAuthorInput | CommentUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type PullRequestUncheckedUpdateManyWithoutReviewerNestedInput = {
    create?: XOR<PullRequestCreateWithoutReviewerInput, PullRequestUncheckedCreateWithoutReviewerInput> | PullRequestCreateWithoutReviewerInput[] | PullRequestUncheckedCreateWithoutReviewerInput[]
    connectOrCreate?: PullRequestCreateOrConnectWithoutReviewerInput | PullRequestCreateOrConnectWithoutReviewerInput[]
    upsert?: PullRequestUpsertWithWhereUniqueWithoutReviewerInput | PullRequestUpsertWithWhereUniqueWithoutReviewerInput[]
    createMany?: PullRequestCreateManyReviewerInputEnvelope
    set?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    disconnect?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    delete?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    connect?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    update?: PullRequestUpdateWithWhereUniqueWithoutReviewerInput | PullRequestUpdateWithWhereUniqueWithoutReviewerInput[]
    updateMany?: PullRequestUpdateManyWithWhereWithoutReviewerInput | PullRequestUpdateManyWithWhereWithoutReviewerInput[]
    deleteMany?: PullRequestScalarWhereInput | PullRequestScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutActorNestedInput = {
    create?: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput> | AuditLogCreateWithoutActorInput[] | AuditLogUncheckedCreateWithoutActorInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutActorInput | AuditLogCreateOrConnectWithoutActorInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutActorInput | AuditLogUpsertWithWhereUniqueWithoutActorInput[]
    createMany?: AuditLogCreateManyActorInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutActorInput | AuditLogUpdateWithWhereUniqueWithoutActorInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutActorInput | AuditLogUpdateManyWithWhereWithoutActorInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOwnedWorkspacesInput = {
    create?: XOR<UserCreateWithoutOwnedWorkspacesInput, UserUncheckedCreateWithoutOwnedWorkspacesInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedWorkspacesInput
    connect?: UserWhereUniqueInput
  }

  export type WorkspaceMemberCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<WorkspaceMemberCreateWithoutWorkspaceInput, WorkspaceMemberUncheckedCreateWithoutWorkspaceInput> | WorkspaceMemberCreateWithoutWorkspaceInput[] | WorkspaceMemberUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: WorkspaceMemberCreateOrConnectWithoutWorkspaceInput | WorkspaceMemberCreateOrConnectWithoutWorkspaceInput[]
    createMany?: WorkspaceMemberCreateManyWorkspaceInputEnvelope
    connect?: WorkspaceMemberWhereUniqueInput | WorkspaceMemberWhereUniqueInput[]
  }

  export type RepositoryCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<RepositoryCreateWithoutWorkspaceInput, RepositoryUncheckedCreateWithoutWorkspaceInput> | RepositoryCreateWithoutWorkspaceInput[] | RepositoryUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: RepositoryCreateOrConnectWithoutWorkspaceInput | RepositoryCreateOrConnectWithoutWorkspaceInput[]
    createMany?: RepositoryCreateManyWorkspaceInputEnvelope
    connect?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
  }

  export type SubscriptionCreateNestedOneWithoutWorkspaceInput = {
    create?: XOR<SubscriptionCreateWithoutWorkspaceInput, SubscriptionUncheckedCreateWithoutWorkspaceInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutWorkspaceInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type WorkspaceSlackConfigCreateNestedOneWithoutWorkspaceInput = {
    create?: XOR<WorkspaceSlackConfigCreateWithoutWorkspaceInput, WorkspaceSlackConfigUncheckedCreateWithoutWorkspaceInput>
    connectOrCreate?: WorkspaceSlackConfigCreateOrConnectWithoutWorkspaceInput
    connect?: WorkspaceSlackConfigWhereUniqueInput
  }

  export type AuditLogCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<AuditLogCreateWithoutWorkspaceInput, AuditLogUncheckedCreateWithoutWorkspaceInput> | AuditLogCreateWithoutWorkspaceInput[] | AuditLogUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutWorkspaceInput | AuditLogCreateOrConnectWithoutWorkspaceInput[]
    createMany?: AuditLogCreateManyWorkspaceInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type WorkspaceMemberUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<WorkspaceMemberCreateWithoutWorkspaceInput, WorkspaceMemberUncheckedCreateWithoutWorkspaceInput> | WorkspaceMemberCreateWithoutWorkspaceInput[] | WorkspaceMemberUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: WorkspaceMemberCreateOrConnectWithoutWorkspaceInput | WorkspaceMemberCreateOrConnectWithoutWorkspaceInput[]
    createMany?: WorkspaceMemberCreateManyWorkspaceInputEnvelope
    connect?: WorkspaceMemberWhereUniqueInput | WorkspaceMemberWhereUniqueInput[]
  }

  export type RepositoryUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<RepositoryCreateWithoutWorkspaceInput, RepositoryUncheckedCreateWithoutWorkspaceInput> | RepositoryCreateWithoutWorkspaceInput[] | RepositoryUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: RepositoryCreateOrConnectWithoutWorkspaceInput | RepositoryCreateOrConnectWithoutWorkspaceInput[]
    createMany?: RepositoryCreateManyWorkspaceInputEnvelope
    connect?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedOneWithoutWorkspaceInput = {
    create?: XOR<SubscriptionCreateWithoutWorkspaceInput, SubscriptionUncheckedCreateWithoutWorkspaceInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutWorkspaceInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type WorkspaceSlackConfigUncheckedCreateNestedOneWithoutWorkspaceInput = {
    create?: XOR<WorkspaceSlackConfigCreateWithoutWorkspaceInput, WorkspaceSlackConfigUncheckedCreateWithoutWorkspaceInput>
    connectOrCreate?: WorkspaceSlackConfigCreateOrConnectWithoutWorkspaceInput
    connect?: WorkspaceSlackConfigWhereUniqueInput
  }

  export type AuditLogUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<AuditLogCreateWithoutWorkspaceInput, AuditLogUncheckedCreateWithoutWorkspaceInput> | AuditLogCreateWithoutWorkspaceInput[] | AuditLogUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutWorkspaceInput | AuditLogCreateOrConnectWithoutWorkspaceInput[]
    createMany?: AuditLogCreateManyWorkspaceInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type EnumPlanFieldUpdateOperationsInput = {
    set?: $Enums.Plan
  }

  export type UserUpdateOneRequiredWithoutOwnedWorkspacesNestedInput = {
    create?: XOR<UserCreateWithoutOwnedWorkspacesInput, UserUncheckedCreateWithoutOwnedWorkspacesInput>
    connectOrCreate?: UserCreateOrConnectWithoutOwnedWorkspacesInput
    upsert?: UserUpsertWithoutOwnedWorkspacesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOwnedWorkspacesInput, UserUpdateWithoutOwnedWorkspacesInput>, UserUncheckedUpdateWithoutOwnedWorkspacesInput>
  }

  export type WorkspaceMemberUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<WorkspaceMemberCreateWithoutWorkspaceInput, WorkspaceMemberUncheckedCreateWithoutWorkspaceInput> | WorkspaceMemberCreateWithoutWorkspaceInput[] | WorkspaceMemberUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: WorkspaceMemberCreateOrConnectWithoutWorkspaceInput | WorkspaceMemberCreateOrConnectWithoutWorkspaceInput[]
    upsert?: WorkspaceMemberUpsertWithWhereUniqueWithoutWorkspaceInput | WorkspaceMemberUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: WorkspaceMemberCreateManyWorkspaceInputEnvelope
    set?: WorkspaceMemberWhereUniqueInput | WorkspaceMemberWhereUniqueInput[]
    disconnect?: WorkspaceMemberWhereUniqueInput | WorkspaceMemberWhereUniqueInput[]
    delete?: WorkspaceMemberWhereUniqueInput | WorkspaceMemberWhereUniqueInput[]
    connect?: WorkspaceMemberWhereUniqueInput | WorkspaceMemberWhereUniqueInput[]
    update?: WorkspaceMemberUpdateWithWhereUniqueWithoutWorkspaceInput | WorkspaceMemberUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: WorkspaceMemberUpdateManyWithWhereWithoutWorkspaceInput | WorkspaceMemberUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: WorkspaceMemberScalarWhereInput | WorkspaceMemberScalarWhereInput[]
  }

  export type RepositoryUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<RepositoryCreateWithoutWorkspaceInput, RepositoryUncheckedCreateWithoutWorkspaceInput> | RepositoryCreateWithoutWorkspaceInput[] | RepositoryUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: RepositoryCreateOrConnectWithoutWorkspaceInput | RepositoryCreateOrConnectWithoutWorkspaceInput[]
    upsert?: RepositoryUpsertWithWhereUniqueWithoutWorkspaceInput | RepositoryUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: RepositoryCreateManyWorkspaceInputEnvelope
    set?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
    disconnect?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
    delete?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
    connect?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
    update?: RepositoryUpdateWithWhereUniqueWithoutWorkspaceInput | RepositoryUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: RepositoryUpdateManyWithWhereWithoutWorkspaceInput | RepositoryUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: RepositoryScalarWhereInput | RepositoryScalarWhereInput[]
  }

  export type SubscriptionUpdateOneWithoutWorkspaceNestedInput = {
    create?: XOR<SubscriptionCreateWithoutWorkspaceInput, SubscriptionUncheckedCreateWithoutWorkspaceInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutWorkspaceInput
    upsert?: SubscriptionUpsertWithoutWorkspaceInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutWorkspaceInput, SubscriptionUpdateWithoutWorkspaceInput>, SubscriptionUncheckedUpdateWithoutWorkspaceInput>
  }

  export type WorkspaceSlackConfigUpdateOneWithoutWorkspaceNestedInput = {
    create?: XOR<WorkspaceSlackConfigCreateWithoutWorkspaceInput, WorkspaceSlackConfigUncheckedCreateWithoutWorkspaceInput>
    connectOrCreate?: WorkspaceSlackConfigCreateOrConnectWithoutWorkspaceInput
    upsert?: WorkspaceSlackConfigUpsertWithoutWorkspaceInput
    disconnect?: WorkspaceSlackConfigWhereInput | boolean
    delete?: WorkspaceSlackConfigWhereInput | boolean
    connect?: WorkspaceSlackConfigWhereUniqueInput
    update?: XOR<XOR<WorkspaceSlackConfigUpdateToOneWithWhereWithoutWorkspaceInput, WorkspaceSlackConfigUpdateWithoutWorkspaceInput>, WorkspaceSlackConfigUncheckedUpdateWithoutWorkspaceInput>
  }

  export type AuditLogUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<AuditLogCreateWithoutWorkspaceInput, AuditLogUncheckedCreateWithoutWorkspaceInput> | AuditLogCreateWithoutWorkspaceInput[] | AuditLogUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutWorkspaceInput | AuditLogCreateOrConnectWithoutWorkspaceInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutWorkspaceInput | AuditLogUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: AuditLogCreateManyWorkspaceInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutWorkspaceInput | AuditLogUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutWorkspaceInput | AuditLogUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type WorkspaceMemberUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<WorkspaceMemberCreateWithoutWorkspaceInput, WorkspaceMemberUncheckedCreateWithoutWorkspaceInput> | WorkspaceMemberCreateWithoutWorkspaceInput[] | WorkspaceMemberUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: WorkspaceMemberCreateOrConnectWithoutWorkspaceInput | WorkspaceMemberCreateOrConnectWithoutWorkspaceInput[]
    upsert?: WorkspaceMemberUpsertWithWhereUniqueWithoutWorkspaceInput | WorkspaceMemberUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: WorkspaceMemberCreateManyWorkspaceInputEnvelope
    set?: WorkspaceMemberWhereUniqueInput | WorkspaceMemberWhereUniqueInput[]
    disconnect?: WorkspaceMemberWhereUniqueInput | WorkspaceMemberWhereUniqueInput[]
    delete?: WorkspaceMemberWhereUniqueInput | WorkspaceMemberWhereUniqueInput[]
    connect?: WorkspaceMemberWhereUniqueInput | WorkspaceMemberWhereUniqueInput[]
    update?: WorkspaceMemberUpdateWithWhereUniqueWithoutWorkspaceInput | WorkspaceMemberUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: WorkspaceMemberUpdateManyWithWhereWithoutWorkspaceInput | WorkspaceMemberUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: WorkspaceMemberScalarWhereInput | WorkspaceMemberScalarWhereInput[]
  }

  export type RepositoryUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<RepositoryCreateWithoutWorkspaceInput, RepositoryUncheckedCreateWithoutWorkspaceInput> | RepositoryCreateWithoutWorkspaceInput[] | RepositoryUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: RepositoryCreateOrConnectWithoutWorkspaceInput | RepositoryCreateOrConnectWithoutWorkspaceInput[]
    upsert?: RepositoryUpsertWithWhereUniqueWithoutWorkspaceInput | RepositoryUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: RepositoryCreateManyWorkspaceInputEnvelope
    set?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
    disconnect?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
    delete?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
    connect?: RepositoryWhereUniqueInput | RepositoryWhereUniqueInput[]
    update?: RepositoryUpdateWithWhereUniqueWithoutWorkspaceInput | RepositoryUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: RepositoryUpdateManyWithWhereWithoutWorkspaceInput | RepositoryUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: RepositoryScalarWhereInput | RepositoryScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateOneWithoutWorkspaceNestedInput = {
    create?: XOR<SubscriptionCreateWithoutWorkspaceInput, SubscriptionUncheckedCreateWithoutWorkspaceInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutWorkspaceInput
    upsert?: SubscriptionUpsertWithoutWorkspaceInput
    disconnect?: SubscriptionWhereInput | boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutWorkspaceInput, SubscriptionUpdateWithoutWorkspaceInput>, SubscriptionUncheckedUpdateWithoutWorkspaceInput>
  }

  export type WorkspaceSlackConfigUncheckedUpdateOneWithoutWorkspaceNestedInput = {
    create?: XOR<WorkspaceSlackConfigCreateWithoutWorkspaceInput, WorkspaceSlackConfigUncheckedCreateWithoutWorkspaceInput>
    connectOrCreate?: WorkspaceSlackConfigCreateOrConnectWithoutWorkspaceInput
    upsert?: WorkspaceSlackConfigUpsertWithoutWorkspaceInput
    disconnect?: WorkspaceSlackConfigWhereInput | boolean
    delete?: WorkspaceSlackConfigWhereInput | boolean
    connect?: WorkspaceSlackConfigWhereUniqueInput
    update?: XOR<XOR<WorkspaceSlackConfigUpdateToOneWithWhereWithoutWorkspaceInput, WorkspaceSlackConfigUpdateWithoutWorkspaceInput>, WorkspaceSlackConfigUncheckedUpdateWithoutWorkspaceInput>
  }

  export type AuditLogUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<AuditLogCreateWithoutWorkspaceInput, AuditLogUncheckedCreateWithoutWorkspaceInput> | AuditLogCreateWithoutWorkspaceInput[] | AuditLogUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutWorkspaceInput | AuditLogCreateOrConnectWithoutWorkspaceInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutWorkspaceInput | AuditLogUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: AuditLogCreateManyWorkspaceInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutWorkspaceInput | AuditLogUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutWorkspaceInput | AuditLogUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type WorkspaceCreateNestedOneWithoutMembersInput = {
    create?: XOR<WorkspaceCreateWithoutMembersInput, WorkspaceUncheckedCreateWithoutMembersInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutMembersInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMembershipsInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumMemberRoleFieldUpdateOperationsInput = {
    set?: $Enums.MemberRole
  }

  export type WorkspaceUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<WorkspaceCreateWithoutMembersInput, WorkspaceUncheckedCreateWithoutMembersInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutMembersInput
    upsert?: WorkspaceUpsertWithoutMembersInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutMembersInput, WorkspaceUpdateWithoutMembersInput>, WorkspaceUncheckedUpdateWithoutMembersInput>
  }

  export type UserUpdateOneRequiredWithoutMembershipsNestedInput = {
    create?: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMembershipsInput
    upsert?: UserUpsertWithoutMembershipsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMembershipsInput, UserUpdateWithoutMembershipsInput>, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type WorkspaceCreateNestedOneWithoutRepositoriesInput = {
    create?: XOR<WorkspaceCreateWithoutRepositoriesInput, WorkspaceUncheckedCreateWithoutRepositoriesInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutRepositoriesInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type PullRequestCreateNestedManyWithoutRepositoryInput = {
    create?: XOR<PullRequestCreateWithoutRepositoryInput, PullRequestUncheckedCreateWithoutRepositoryInput> | PullRequestCreateWithoutRepositoryInput[] | PullRequestUncheckedCreateWithoutRepositoryInput[]
    connectOrCreate?: PullRequestCreateOrConnectWithoutRepositoryInput | PullRequestCreateOrConnectWithoutRepositoryInput[]
    createMany?: PullRequestCreateManyRepositoryInputEnvelope
    connect?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
  }

  export type PullRequestUncheckedCreateNestedManyWithoutRepositoryInput = {
    create?: XOR<PullRequestCreateWithoutRepositoryInput, PullRequestUncheckedCreateWithoutRepositoryInput> | PullRequestCreateWithoutRepositoryInput[] | PullRequestUncheckedCreateWithoutRepositoryInput[]
    connectOrCreate?: PullRequestCreateOrConnectWithoutRepositoryInput | PullRequestCreateOrConnectWithoutRepositoryInput[]
    createMany?: PullRequestCreateManyRepositoryInputEnvelope
    connect?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
  }

  export type WorkspaceUpdateOneRequiredWithoutRepositoriesNestedInput = {
    create?: XOR<WorkspaceCreateWithoutRepositoriesInput, WorkspaceUncheckedCreateWithoutRepositoriesInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutRepositoriesInput
    upsert?: WorkspaceUpsertWithoutRepositoriesInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutRepositoriesInput, WorkspaceUpdateWithoutRepositoriesInput>, WorkspaceUncheckedUpdateWithoutRepositoriesInput>
  }

  export type PullRequestUpdateManyWithoutRepositoryNestedInput = {
    create?: XOR<PullRequestCreateWithoutRepositoryInput, PullRequestUncheckedCreateWithoutRepositoryInput> | PullRequestCreateWithoutRepositoryInput[] | PullRequestUncheckedCreateWithoutRepositoryInput[]
    connectOrCreate?: PullRequestCreateOrConnectWithoutRepositoryInput | PullRequestCreateOrConnectWithoutRepositoryInput[]
    upsert?: PullRequestUpsertWithWhereUniqueWithoutRepositoryInput | PullRequestUpsertWithWhereUniqueWithoutRepositoryInput[]
    createMany?: PullRequestCreateManyRepositoryInputEnvelope
    set?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    disconnect?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    delete?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    connect?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    update?: PullRequestUpdateWithWhereUniqueWithoutRepositoryInput | PullRequestUpdateWithWhereUniqueWithoutRepositoryInput[]
    updateMany?: PullRequestUpdateManyWithWhereWithoutRepositoryInput | PullRequestUpdateManyWithWhereWithoutRepositoryInput[]
    deleteMany?: PullRequestScalarWhereInput | PullRequestScalarWhereInput[]
  }

  export type PullRequestUncheckedUpdateManyWithoutRepositoryNestedInput = {
    create?: XOR<PullRequestCreateWithoutRepositoryInput, PullRequestUncheckedCreateWithoutRepositoryInput> | PullRequestCreateWithoutRepositoryInput[] | PullRequestUncheckedCreateWithoutRepositoryInput[]
    connectOrCreate?: PullRequestCreateOrConnectWithoutRepositoryInput | PullRequestCreateOrConnectWithoutRepositoryInput[]
    upsert?: PullRequestUpsertWithWhereUniqueWithoutRepositoryInput | PullRequestUpsertWithWhereUniqueWithoutRepositoryInput[]
    createMany?: PullRequestCreateManyRepositoryInputEnvelope
    set?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    disconnect?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    delete?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    connect?: PullRequestWhereUniqueInput | PullRequestWhereUniqueInput[]
    update?: PullRequestUpdateWithWhereUniqueWithoutRepositoryInput | PullRequestUpdateWithWhereUniqueWithoutRepositoryInput[]
    updateMany?: PullRequestUpdateManyWithWhereWithoutRepositoryInput | PullRequestUpdateManyWithWhereWithoutRepositoryInput[]
    deleteMany?: PullRequestScalarWhereInput | PullRequestScalarWhereInput[]
  }

  export type RepositoryCreateNestedOneWithoutPullRequestsInput = {
    create?: XOR<RepositoryCreateWithoutPullRequestsInput, RepositoryUncheckedCreateWithoutPullRequestsInput>
    connectOrCreate?: RepositoryCreateOrConnectWithoutPullRequestsInput
    connect?: RepositoryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPullRequestsInput = {
    create?: XOR<UserCreateWithoutPullRequestsInput, UserUncheckedCreateWithoutPullRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPullRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssignedPRsInput = {
    create?: XOR<UserCreateWithoutAssignedPRsInput, UserUncheckedCreateWithoutAssignedPRsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedPRsInput
    connect?: UserWhereUniqueInput
  }

  export type ReviewSessionCreateNestedManyWithoutPullRequestInput = {
    create?: XOR<ReviewSessionCreateWithoutPullRequestInput, ReviewSessionUncheckedCreateWithoutPullRequestInput> | ReviewSessionCreateWithoutPullRequestInput[] | ReviewSessionUncheckedCreateWithoutPullRequestInput[]
    connectOrCreate?: ReviewSessionCreateOrConnectWithoutPullRequestInput | ReviewSessionCreateOrConnectWithoutPullRequestInput[]
    createMany?: ReviewSessionCreateManyPullRequestInputEnvelope
    connect?: ReviewSessionWhereUniqueInput | ReviewSessionWhereUniqueInput[]
  }

  export type SecurityFindingCreateNestedManyWithoutPullRequestInput = {
    create?: XOR<SecurityFindingCreateWithoutPullRequestInput, SecurityFindingUncheckedCreateWithoutPullRequestInput> | SecurityFindingCreateWithoutPullRequestInput[] | SecurityFindingUncheckedCreateWithoutPullRequestInput[]
    connectOrCreate?: SecurityFindingCreateOrConnectWithoutPullRequestInput | SecurityFindingCreateOrConnectWithoutPullRequestInput[]
    createMany?: SecurityFindingCreateManyPullRequestInputEnvelope
    connect?: SecurityFindingWhereUniqueInput | SecurityFindingWhereUniqueInput[]
  }

  export type ReviewSessionUncheckedCreateNestedManyWithoutPullRequestInput = {
    create?: XOR<ReviewSessionCreateWithoutPullRequestInput, ReviewSessionUncheckedCreateWithoutPullRequestInput> | ReviewSessionCreateWithoutPullRequestInput[] | ReviewSessionUncheckedCreateWithoutPullRequestInput[]
    connectOrCreate?: ReviewSessionCreateOrConnectWithoutPullRequestInput | ReviewSessionCreateOrConnectWithoutPullRequestInput[]
    createMany?: ReviewSessionCreateManyPullRequestInputEnvelope
    connect?: ReviewSessionWhereUniqueInput | ReviewSessionWhereUniqueInput[]
  }

  export type SecurityFindingUncheckedCreateNestedManyWithoutPullRequestInput = {
    create?: XOR<SecurityFindingCreateWithoutPullRequestInput, SecurityFindingUncheckedCreateWithoutPullRequestInput> | SecurityFindingCreateWithoutPullRequestInput[] | SecurityFindingUncheckedCreateWithoutPullRequestInput[]
    connectOrCreate?: SecurityFindingCreateOrConnectWithoutPullRequestInput | SecurityFindingCreateOrConnectWithoutPullRequestInput[]
    createMany?: SecurityFindingCreateManyPullRequestInputEnvelope
    connect?: SecurityFindingWhereUniqueInput | SecurityFindingWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumPRStatusFieldUpdateOperationsInput = {
    set?: $Enums.PRStatus
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RepositoryUpdateOneRequiredWithoutPullRequestsNestedInput = {
    create?: XOR<RepositoryCreateWithoutPullRequestsInput, RepositoryUncheckedCreateWithoutPullRequestsInput>
    connectOrCreate?: RepositoryCreateOrConnectWithoutPullRequestsInput
    upsert?: RepositoryUpsertWithoutPullRequestsInput
    connect?: RepositoryWhereUniqueInput
    update?: XOR<XOR<RepositoryUpdateToOneWithWhereWithoutPullRequestsInput, RepositoryUpdateWithoutPullRequestsInput>, RepositoryUncheckedUpdateWithoutPullRequestsInput>
  }

  export type UserUpdateOneRequiredWithoutPullRequestsNestedInput = {
    create?: XOR<UserCreateWithoutPullRequestsInput, UserUncheckedCreateWithoutPullRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPullRequestsInput
    upsert?: UserUpsertWithoutPullRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPullRequestsInput, UserUpdateWithoutPullRequestsInput>, UserUncheckedUpdateWithoutPullRequestsInput>
  }

  export type UserUpdateOneWithoutAssignedPRsNestedInput = {
    create?: XOR<UserCreateWithoutAssignedPRsInput, UserUncheckedCreateWithoutAssignedPRsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedPRsInput
    upsert?: UserUpsertWithoutAssignedPRsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignedPRsInput, UserUpdateWithoutAssignedPRsInput>, UserUncheckedUpdateWithoutAssignedPRsInput>
  }

  export type ReviewSessionUpdateManyWithoutPullRequestNestedInput = {
    create?: XOR<ReviewSessionCreateWithoutPullRequestInput, ReviewSessionUncheckedCreateWithoutPullRequestInput> | ReviewSessionCreateWithoutPullRequestInput[] | ReviewSessionUncheckedCreateWithoutPullRequestInput[]
    connectOrCreate?: ReviewSessionCreateOrConnectWithoutPullRequestInput | ReviewSessionCreateOrConnectWithoutPullRequestInput[]
    upsert?: ReviewSessionUpsertWithWhereUniqueWithoutPullRequestInput | ReviewSessionUpsertWithWhereUniqueWithoutPullRequestInput[]
    createMany?: ReviewSessionCreateManyPullRequestInputEnvelope
    set?: ReviewSessionWhereUniqueInput | ReviewSessionWhereUniqueInput[]
    disconnect?: ReviewSessionWhereUniqueInput | ReviewSessionWhereUniqueInput[]
    delete?: ReviewSessionWhereUniqueInput | ReviewSessionWhereUniqueInput[]
    connect?: ReviewSessionWhereUniqueInput | ReviewSessionWhereUniqueInput[]
    update?: ReviewSessionUpdateWithWhereUniqueWithoutPullRequestInput | ReviewSessionUpdateWithWhereUniqueWithoutPullRequestInput[]
    updateMany?: ReviewSessionUpdateManyWithWhereWithoutPullRequestInput | ReviewSessionUpdateManyWithWhereWithoutPullRequestInput[]
    deleteMany?: ReviewSessionScalarWhereInput | ReviewSessionScalarWhereInput[]
  }

  export type SecurityFindingUpdateManyWithoutPullRequestNestedInput = {
    create?: XOR<SecurityFindingCreateWithoutPullRequestInput, SecurityFindingUncheckedCreateWithoutPullRequestInput> | SecurityFindingCreateWithoutPullRequestInput[] | SecurityFindingUncheckedCreateWithoutPullRequestInput[]
    connectOrCreate?: SecurityFindingCreateOrConnectWithoutPullRequestInput | SecurityFindingCreateOrConnectWithoutPullRequestInput[]
    upsert?: SecurityFindingUpsertWithWhereUniqueWithoutPullRequestInput | SecurityFindingUpsertWithWhereUniqueWithoutPullRequestInput[]
    createMany?: SecurityFindingCreateManyPullRequestInputEnvelope
    set?: SecurityFindingWhereUniqueInput | SecurityFindingWhereUniqueInput[]
    disconnect?: SecurityFindingWhereUniqueInput | SecurityFindingWhereUniqueInput[]
    delete?: SecurityFindingWhereUniqueInput | SecurityFindingWhereUniqueInput[]
    connect?: SecurityFindingWhereUniqueInput | SecurityFindingWhereUniqueInput[]
    update?: SecurityFindingUpdateWithWhereUniqueWithoutPullRequestInput | SecurityFindingUpdateWithWhereUniqueWithoutPullRequestInput[]
    updateMany?: SecurityFindingUpdateManyWithWhereWithoutPullRequestInput | SecurityFindingUpdateManyWithWhereWithoutPullRequestInput[]
    deleteMany?: SecurityFindingScalarWhereInput | SecurityFindingScalarWhereInput[]
  }

  export type ReviewSessionUncheckedUpdateManyWithoutPullRequestNestedInput = {
    create?: XOR<ReviewSessionCreateWithoutPullRequestInput, ReviewSessionUncheckedCreateWithoutPullRequestInput> | ReviewSessionCreateWithoutPullRequestInput[] | ReviewSessionUncheckedCreateWithoutPullRequestInput[]
    connectOrCreate?: ReviewSessionCreateOrConnectWithoutPullRequestInput | ReviewSessionCreateOrConnectWithoutPullRequestInput[]
    upsert?: ReviewSessionUpsertWithWhereUniqueWithoutPullRequestInput | ReviewSessionUpsertWithWhereUniqueWithoutPullRequestInput[]
    createMany?: ReviewSessionCreateManyPullRequestInputEnvelope
    set?: ReviewSessionWhereUniqueInput | ReviewSessionWhereUniqueInput[]
    disconnect?: ReviewSessionWhereUniqueInput | ReviewSessionWhereUniqueInput[]
    delete?: ReviewSessionWhereUniqueInput | ReviewSessionWhereUniqueInput[]
    connect?: ReviewSessionWhereUniqueInput | ReviewSessionWhereUniqueInput[]
    update?: ReviewSessionUpdateWithWhereUniqueWithoutPullRequestInput | ReviewSessionUpdateWithWhereUniqueWithoutPullRequestInput[]
    updateMany?: ReviewSessionUpdateManyWithWhereWithoutPullRequestInput | ReviewSessionUpdateManyWithWhereWithoutPullRequestInput[]
    deleteMany?: ReviewSessionScalarWhereInput | ReviewSessionScalarWhereInput[]
  }

  export type SecurityFindingUncheckedUpdateManyWithoutPullRequestNestedInput = {
    create?: XOR<SecurityFindingCreateWithoutPullRequestInput, SecurityFindingUncheckedCreateWithoutPullRequestInput> | SecurityFindingCreateWithoutPullRequestInput[] | SecurityFindingUncheckedCreateWithoutPullRequestInput[]
    connectOrCreate?: SecurityFindingCreateOrConnectWithoutPullRequestInput | SecurityFindingCreateOrConnectWithoutPullRequestInput[]
    upsert?: SecurityFindingUpsertWithWhereUniqueWithoutPullRequestInput | SecurityFindingUpsertWithWhereUniqueWithoutPullRequestInput[]
    createMany?: SecurityFindingCreateManyPullRequestInputEnvelope
    set?: SecurityFindingWhereUniqueInput | SecurityFindingWhereUniqueInput[]
    disconnect?: SecurityFindingWhereUniqueInput | SecurityFindingWhereUniqueInput[]
    delete?: SecurityFindingWhereUniqueInput | SecurityFindingWhereUniqueInput[]
    connect?: SecurityFindingWhereUniqueInput | SecurityFindingWhereUniqueInput[]
    update?: SecurityFindingUpdateWithWhereUniqueWithoutPullRequestInput | SecurityFindingUpdateWithWhereUniqueWithoutPullRequestInput[]
    updateMany?: SecurityFindingUpdateManyWithWhereWithoutPullRequestInput | SecurityFindingUpdateManyWithWhereWithoutPullRequestInput[]
    deleteMany?: SecurityFindingScalarWhereInput | SecurityFindingScalarWhereInput[]
  }

  export type PullRequestCreateNestedOneWithoutSecurityFindingsInput = {
    create?: XOR<PullRequestCreateWithoutSecurityFindingsInput, PullRequestUncheckedCreateWithoutSecurityFindingsInput>
    connectOrCreate?: PullRequestCreateOrConnectWithoutSecurityFindingsInput
    connect?: PullRequestWhereUniqueInput
  }

  export type PullRequestUpdateOneRequiredWithoutSecurityFindingsNestedInput = {
    create?: XOR<PullRequestCreateWithoutSecurityFindingsInput, PullRequestUncheckedCreateWithoutSecurityFindingsInput>
    connectOrCreate?: PullRequestCreateOrConnectWithoutSecurityFindingsInput
    upsert?: PullRequestUpsertWithoutSecurityFindingsInput
    connect?: PullRequestWhereUniqueInput
    update?: XOR<XOR<PullRequestUpdateToOneWithWhereWithoutSecurityFindingsInput, PullRequestUpdateWithoutSecurityFindingsInput>, PullRequestUncheckedUpdateWithoutSecurityFindingsInput>
  }

  export type PullRequestCreateNestedOneWithoutReviewSessionsInput = {
    create?: XOR<PullRequestCreateWithoutReviewSessionsInput, PullRequestUncheckedCreateWithoutReviewSessionsInput>
    connectOrCreate?: PullRequestCreateOrConnectWithoutReviewSessionsInput
    connect?: PullRequestWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewSessionsInput = {
    create?: XOR<UserCreateWithoutReviewSessionsInput, UserUncheckedCreateWithoutReviewSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutReviewSessionInput = {
    create?: XOR<CommentCreateWithoutReviewSessionInput, CommentUncheckedCreateWithoutReviewSessionInput> | CommentCreateWithoutReviewSessionInput[] | CommentUncheckedCreateWithoutReviewSessionInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutReviewSessionInput | CommentCreateOrConnectWithoutReviewSessionInput[]
    createMany?: CommentCreateManyReviewSessionInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutReviewSessionInput = {
    create?: XOR<CommentCreateWithoutReviewSessionInput, CommentUncheckedCreateWithoutReviewSessionInput> | CommentCreateWithoutReviewSessionInput[] | CommentUncheckedCreateWithoutReviewSessionInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutReviewSessionInput | CommentCreateOrConnectWithoutReviewSessionInput[]
    createMany?: CommentCreateManyReviewSessionInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PullRequestUpdateOneRequiredWithoutReviewSessionsNestedInput = {
    create?: XOR<PullRequestCreateWithoutReviewSessionsInput, PullRequestUncheckedCreateWithoutReviewSessionsInput>
    connectOrCreate?: PullRequestCreateOrConnectWithoutReviewSessionsInput
    upsert?: PullRequestUpsertWithoutReviewSessionsInput
    connect?: PullRequestWhereUniqueInput
    update?: XOR<XOR<PullRequestUpdateToOneWithWhereWithoutReviewSessionsInput, PullRequestUpdateWithoutReviewSessionsInput>, PullRequestUncheckedUpdateWithoutReviewSessionsInput>
  }

  export type UserUpdateOneRequiredWithoutReviewSessionsNestedInput = {
    create?: XOR<UserCreateWithoutReviewSessionsInput, UserUncheckedCreateWithoutReviewSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewSessionsInput
    upsert?: UserUpsertWithoutReviewSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewSessionsInput, UserUpdateWithoutReviewSessionsInput>, UserUncheckedUpdateWithoutReviewSessionsInput>
  }

  export type CommentUpdateManyWithoutReviewSessionNestedInput = {
    create?: XOR<CommentCreateWithoutReviewSessionInput, CommentUncheckedCreateWithoutReviewSessionInput> | CommentCreateWithoutReviewSessionInput[] | CommentUncheckedCreateWithoutReviewSessionInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutReviewSessionInput | CommentCreateOrConnectWithoutReviewSessionInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutReviewSessionInput | CommentUpsertWithWhereUniqueWithoutReviewSessionInput[]
    createMany?: CommentCreateManyReviewSessionInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutReviewSessionInput | CommentUpdateWithWhereUniqueWithoutReviewSessionInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutReviewSessionInput | CommentUpdateManyWithWhereWithoutReviewSessionInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutReviewSessionNestedInput = {
    create?: XOR<CommentCreateWithoutReviewSessionInput, CommentUncheckedCreateWithoutReviewSessionInput> | CommentCreateWithoutReviewSessionInput[] | CommentUncheckedCreateWithoutReviewSessionInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutReviewSessionInput | CommentCreateOrConnectWithoutReviewSessionInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutReviewSessionInput | CommentUpsertWithWhereUniqueWithoutReviewSessionInput[]
    createMany?: CommentCreateManyReviewSessionInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutReviewSessionInput | CommentUpdateWithWhereUniqueWithoutReviewSessionInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutReviewSessionInput | CommentUpdateManyWithWhereWithoutReviewSessionInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type ReviewSessionCreateNestedOneWithoutCommentsInput = {
    create?: XOR<ReviewSessionCreateWithoutCommentsInput, ReviewSessionUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ReviewSessionCreateOrConnectWithoutCommentsInput
    connect?: ReviewSessionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type CommentCreateNestedOneWithoutRepliesInput = {
    create?: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutRepliesInput
    connect?: CommentWhereUniqueInput
  }

  export type CommentCreateNestedManyWithoutParentInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type ReviewSessionUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<ReviewSessionCreateWithoutCommentsInput, ReviewSessionUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: ReviewSessionCreateOrConnectWithoutCommentsInput
    upsert?: ReviewSessionUpsertWithoutCommentsInput
    connect?: ReviewSessionWhereUniqueInput
    update?: XOR<XOR<ReviewSessionUpdateToOneWithWhereWithoutCommentsInput, ReviewSessionUpdateWithoutCommentsInput>, ReviewSessionUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type CommentUpdateOneWithoutRepliesNestedInput = {
    create?: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    connectOrCreate?: CommentCreateOrConnectWithoutRepliesInput
    upsert?: CommentUpsertWithoutRepliesInput
    disconnect?: CommentWhereInput | boolean
    delete?: CommentWhereInput | boolean
    connect?: CommentWhereUniqueInput
    update?: XOR<XOR<CommentUpdateToOneWithWhereWithoutRepliesInput, CommentUpdateWithoutRepliesInput>, CommentUncheckedUpdateWithoutRepliesInput>
  }

  export type CommentUpdateManyWithoutParentNestedInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutParentInput | CommentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutParentInput | CommentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutParentInput | CommentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput> | CommentCreateWithoutParentInput[] | CommentUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutParentInput | CommentCreateOrConnectWithoutParentInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutParentInput | CommentUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CommentCreateManyParentInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutParentInput | CommentUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutParentInput | CommentUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type WorkspaceCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<WorkspaceCreateWithoutSubscriptionInput, WorkspaceUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutSubscriptionInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type WorkspaceUpdateOneRequiredWithoutSubscriptionNestedInput = {
    create?: XOR<WorkspaceCreateWithoutSubscriptionInput, WorkspaceUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutSubscriptionInput
    upsert?: WorkspaceUpsertWithoutSubscriptionInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutSubscriptionInput, WorkspaceUpdateWithoutSubscriptionInput>, WorkspaceUncheckedUpdateWithoutSubscriptionInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type WorkspaceCreateNestedOneWithoutSlackConfigInput = {
    create?: XOR<WorkspaceCreateWithoutSlackConfigInput, WorkspaceUncheckedCreateWithoutSlackConfigInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutSlackConfigInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type WorkspaceUpdateOneRequiredWithoutSlackConfigNestedInput = {
    create?: XOR<WorkspaceCreateWithoutSlackConfigInput, WorkspaceUncheckedCreateWithoutSlackConfigInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutSlackConfigInput
    upsert?: WorkspaceUpsertWithoutSlackConfigInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutSlackConfigInput, WorkspaceUpdateWithoutSlackConfigInput>, WorkspaceUncheckedUpdateWithoutSlackConfigInput>
  }

  export type WorkspaceCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<WorkspaceCreateWithoutAuditLogsInput, WorkspaceUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutAuditLogsInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
  }

  export type WorkspaceUpdateOneRequiredWithoutAuditLogsNestedInput = {
    create?: XOR<WorkspaceCreateWithoutAuditLogsInput, WorkspaceUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutAuditLogsInput
    upsert?: WorkspaceUpsertWithoutAuditLogsInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutAuditLogsInput, WorkspaceUpdateWithoutAuditLogsInput>, WorkspaceUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserUpdateOneRequiredWithoutAuditLogsNestedInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    upsert?: UserUpsertWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditLogsInput, UserUpdateWithoutAuditLogsInput>, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumPlanFilter<$PrismaModel = never> = {
    equals?: $Enums.Plan | EnumPlanFieldRefInput<$PrismaModel>
    in?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanFilter<$PrismaModel> | $Enums.Plan
  }

  export type NestedEnumPlanWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Plan | EnumPlanFieldRefInput<$PrismaModel>
    in?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>
    notIn?: $Enums.Plan[] | ListEnumPlanFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanWithAggregatesFilter<$PrismaModel> | $Enums.Plan
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanFilter<$PrismaModel>
    _max?: NestedEnumPlanFilter<$PrismaModel>
  }

  export type NestedEnumMemberRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberRole | EnumMemberRoleFieldRefInput<$PrismaModel>
    in?: $Enums.MemberRole[] | ListEnumMemberRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemberRole[] | ListEnumMemberRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumMemberRoleFilter<$PrismaModel> | $Enums.MemberRole
  }

  export type NestedEnumMemberRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MemberRole | EnumMemberRoleFieldRefInput<$PrismaModel>
    in?: $Enums.MemberRole[] | ListEnumMemberRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.MemberRole[] | ListEnumMemberRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumMemberRoleWithAggregatesFilter<$PrismaModel> | $Enums.MemberRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMemberRoleFilter<$PrismaModel>
    _max?: NestedEnumMemberRoleFilter<$PrismaModel>
  }

  export type NestedEnumPRStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PRStatus | EnumPRStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PRStatus[] | ListEnumPRStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PRStatus[] | ListEnumPRStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPRStatusFilter<$PrismaModel> | $Enums.PRStatus
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumPRStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PRStatus | EnumPRStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PRStatus[] | ListEnumPRStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PRStatus[] | ListEnumPRStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPRStatusWithAggregatesFilter<$PrismaModel> | $Enums.PRStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPRStatusFilter<$PrismaModel>
    _max?: NestedEnumPRStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type WorkspaceCreateWithoutOwnerInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.Plan
    createdAt?: Date | string
    members?: WorkspaceMemberCreateNestedManyWithoutWorkspaceInput
    repositories?: RepositoryCreateNestedManyWithoutWorkspaceInput
    subscription?: SubscriptionCreateNestedOneWithoutWorkspaceInput
    slackConfig?: WorkspaceSlackConfigCreateNestedOneWithoutWorkspaceInput
    auditLogs?: AuditLogCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutOwnerInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.Plan
    createdAt?: Date | string
    members?: WorkspaceMemberUncheckedCreateNestedManyWithoutWorkspaceInput
    repositories?: RepositoryUncheckedCreateNestedManyWithoutWorkspaceInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutWorkspaceInput
    slackConfig?: WorkspaceSlackConfigUncheckedCreateNestedOneWithoutWorkspaceInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutOwnerInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutOwnerInput, WorkspaceUncheckedCreateWithoutOwnerInput>
  }

  export type WorkspaceCreateManyOwnerInputEnvelope = {
    data: WorkspaceCreateManyOwnerInput | WorkspaceCreateManyOwnerInput[]
    skipDuplicates?: boolean
  }

  export type WorkspaceMemberCreateWithoutUserInput = {
    id?: string
    role?: $Enums.MemberRole
    joinedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutMembersInput
  }

  export type WorkspaceMemberUncheckedCreateWithoutUserInput = {
    id?: string
    workspaceId: string
    role?: $Enums.MemberRole
    joinedAt?: Date | string
  }

  export type WorkspaceMemberCreateOrConnectWithoutUserInput = {
    where: WorkspaceMemberWhereUniqueInput
    create: XOR<WorkspaceMemberCreateWithoutUserInput, WorkspaceMemberUncheckedCreateWithoutUserInput>
  }

  export type WorkspaceMemberCreateManyUserInputEnvelope = {
    data: WorkspaceMemberCreateManyUserInput | WorkspaceMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PullRequestCreateWithoutAuthorInput = {
    id?: string
    githubPrNumber: number
    title: string
    body?: string | null
    status?: $Enums.PRStatus
    headBranch: string
    baseBranch: string
    diffUrl?: string | null
    aiSummary?: string | null
    securityScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    repository: RepositoryCreateNestedOneWithoutPullRequestsInput
    reviewer?: UserCreateNestedOneWithoutAssignedPRsInput
    reviewSessions?: ReviewSessionCreateNestedManyWithoutPullRequestInput
    securityFindings?: SecurityFindingCreateNestedManyWithoutPullRequestInput
  }

  export type PullRequestUncheckedCreateWithoutAuthorInput = {
    id?: string
    repositoryId: string
    githubPrNumber: number
    title: string
    body?: string | null
    status?: $Enums.PRStatus
    headBranch: string
    baseBranch: string
    diffUrl?: string | null
    aiSummary?: string | null
    securityScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewerId?: string | null
    reviewSessions?: ReviewSessionUncheckedCreateNestedManyWithoutPullRequestInput
    securityFindings?: SecurityFindingUncheckedCreateNestedManyWithoutPullRequestInput
  }

  export type PullRequestCreateOrConnectWithoutAuthorInput = {
    where: PullRequestWhereUniqueInput
    create: XOR<PullRequestCreateWithoutAuthorInput, PullRequestUncheckedCreateWithoutAuthorInput>
  }

  export type PullRequestCreateManyAuthorInputEnvelope = {
    data: PullRequestCreateManyAuthorInput | PullRequestCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type ReviewSessionCreateWithoutCreatorInput = {
    id?: string
    isActive?: boolean
    createdAt?: Date | string
    endedAt?: Date | string | null
    pullRequest: PullRequestCreateNestedOneWithoutReviewSessionsInput
    comments?: CommentCreateNestedManyWithoutReviewSessionInput
  }

  export type ReviewSessionUncheckedCreateWithoutCreatorInput = {
    id?: string
    pullRequestId: string
    isActive?: boolean
    createdAt?: Date | string
    endedAt?: Date | string | null
    comments?: CommentUncheckedCreateNestedManyWithoutReviewSessionInput
  }

  export type ReviewSessionCreateOrConnectWithoutCreatorInput = {
    where: ReviewSessionWhereUniqueInput
    create: XOR<ReviewSessionCreateWithoutCreatorInput, ReviewSessionUncheckedCreateWithoutCreatorInput>
  }

  export type ReviewSessionCreateManyCreatorInputEnvelope = {
    data: ReviewSessionCreateManyCreatorInput | ReviewSessionCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutAuthorInput = {
    id?: string
    filePath: string
    lineNumber: number
    content: string
    resolvedAt?: Date | string | null
    isAI?: boolean
    severity?: string | null
    category?: string | null
    suggestedFix?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewSession: ReviewSessionCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
  }

  export type CommentUncheckedCreateWithoutAuthorInput = {
    id?: string
    reviewSessionId: string
    filePath: string
    lineNumber: number
    content: string
    parentId?: string | null
    resolvedAt?: Date | string | null
    isAI?: boolean
    severity?: string | null
    category?: string | null
    suggestedFix?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
  }

  export type CommentCreateOrConnectWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>
  }

  export type CommentCreateManyAuthorInputEnvelope = {
    data: CommentCreateManyAuthorInput | CommentCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    type: string
    title: string
    body: string
    link?: string | null
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    title: string
    body: string
    link?: string | null
    isRead?: boolean
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PullRequestCreateWithoutReviewerInput = {
    id?: string
    githubPrNumber: number
    title: string
    body?: string | null
    status?: $Enums.PRStatus
    headBranch: string
    baseBranch: string
    diffUrl?: string | null
    aiSummary?: string | null
    securityScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    repository: RepositoryCreateNestedOneWithoutPullRequestsInput
    author: UserCreateNestedOneWithoutPullRequestsInput
    reviewSessions?: ReviewSessionCreateNestedManyWithoutPullRequestInput
    securityFindings?: SecurityFindingCreateNestedManyWithoutPullRequestInput
  }

  export type PullRequestUncheckedCreateWithoutReviewerInput = {
    id?: string
    repositoryId: string
    githubPrNumber: number
    title: string
    body?: string | null
    authorId: string
    status?: $Enums.PRStatus
    headBranch: string
    baseBranch: string
    diffUrl?: string | null
    aiSummary?: string | null
    securityScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewSessions?: ReviewSessionUncheckedCreateNestedManyWithoutPullRequestInput
    securityFindings?: SecurityFindingUncheckedCreateNestedManyWithoutPullRequestInput
  }

  export type PullRequestCreateOrConnectWithoutReviewerInput = {
    where: PullRequestWhereUniqueInput
    create: XOR<PullRequestCreateWithoutReviewerInput, PullRequestUncheckedCreateWithoutReviewerInput>
  }

  export type PullRequestCreateManyReviewerInputEnvelope = {
    data: PullRequestCreateManyReviewerInput | PullRequestCreateManyReviewerInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutActorInput = {
    id?: string
    action: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateWithoutActorInput = {
    id?: string
    workspaceId: string
    action: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutActorInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput>
  }

  export type AuditLogCreateManyActorInputEnvelope = {
    data: AuditLogCreateManyActorInput | AuditLogCreateManyActorInput[]
    skipDuplicates?: boolean
  }

  export type WorkspaceUpsertWithWhereUniqueWithoutOwnerInput = {
    where: WorkspaceWhereUniqueInput
    update: XOR<WorkspaceUpdateWithoutOwnerInput, WorkspaceUncheckedUpdateWithoutOwnerInput>
    create: XOR<WorkspaceCreateWithoutOwnerInput, WorkspaceUncheckedCreateWithoutOwnerInput>
  }

  export type WorkspaceUpdateWithWhereUniqueWithoutOwnerInput = {
    where: WorkspaceWhereUniqueInput
    data: XOR<WorkspaceUpdateWithoutOwnerInput, WorkspaceUncheckedUpdateWithoutOwnerInput>
  }

  export type WorkspaceUpdateManyWithWhereWithoutOwnerInput = {
    where: WorkspaceScalarWhereInput
    data: XOR<WorkspaceUpdateManyMutationInput, WorkspaceUncheckedUpdateManyWithoutOwnerInput>
  }

  export type WorkspaceScalarWhereInput = {
    AND?: WorkspaceScalarWhereInput | WorkspaceScalarWhereInput[]
    OR?: WorkspaceScalarWhereInput[]
    NOT?: WorkspaceScalarWhereInput | WorkspaceScalarWhereInput[]
    id?: StringFilter<"Workspace"> | string
    name?: StringFilter<"Workspace"> | string
    slug?: StringFilter<"Workspace"> | string
    plan?: EnumPlanFilter<"Workspace"> | $Enums.Plan
    ownerId?: StringFilter<"Workspace"> | string
    createdAt?: DateTimeFilter<"Workspace"> | Date | string
  }

  export type WorkspaceMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: WorkspaceMemberWhereUniqueInput
    update: XOR<WorkspaceMemberUpdateWithoutUserInput, WorkspaceMemberUncheckedUpdateWithoutUserInput>
    create: XOR<WorkspaceMemberCreateWithoutUserInput, WorkspaceMemberUncheckedCreateWithoutUserInput>
  }

  export type WorkspaceMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: WorkspaceMemberWhereUniqueInput
    data: XOR<WorkspaceMemberUpdateWithoutUserInput, WorkspaceMemberUncheckedUpdateWithoutUserInput>
  }

  export type WorkspaceMemberUpdateManyWithWhereWithoutUserInput = {
    where: WorkspaceMemberScalarWhereInput
    data: XOR<WorkspaceMemberUpdateManyMutationInput, WorkspaceMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type WorkspaceMemberScalarWhereInput = {
    AND?: WorkspaceMemberScalarWhereInput | WorkspaceMemberScalarWhereInput[]
    OR?: WorkspaceMemberScalarWhereInput[]
    NOT?: WorkspaceMemberScalarWhereInput | WorkspaceMemberScalarWhereInput[]
    id?: StringFilter<"WorkspaceMember"> | string
    workspaceId?: StringFilter<"WorkspaceMember"> | string
    userId?: StringFilter<"WorkspaceMember"> | string
    role?: EnumMemberRoleFilter<"WorkspaceMember"> | $Enums.MemberRole
    joinedAt?: DateTimeFilter<"WorkspaceMember"> | Date | string
  }

  export type PullRequestUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PullRequestWhereUniqueInput
    update: XOR<PullRequestUpdateWithoutAuthorInput, PullRequestUncheckedUpdateWithoutAuthorInput>
    create: XOR<PullRequestCreateWithoutAuthorInput, PullRequestUncheckedCreateWithoutAuthorInput>
  }

  export type PullRequestUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PullRequestWhereUniqueInput
    data: XOR<PullRequestUpdateWithoutAuthorInput, PullRequestUncheckedUpdateWithoutAuthorInput>
  }

  export type PullRequestUpdateManyWithWhereWithoutAuthorInput = {
    where: PullRequestScalarWhereInput
    data: XOR<PullRequestUpdateManyMutationInput, PullRequestUncheckedUpdateManyWithoutAuthorInput>
  }

  export type PullRequestScalarWhereInput = {
    AND?: PullRequestScalarWhereInput | PullRequestScalarWhereInput[]
    OR?: PullRequestScalarWhereInput[]
    NOT?: PullRequestScalarWhereInput | PullRequestScalarWhereInput[]
    id?: StringFilter<"PullRequest"> | string
    repositoryId?: StringFilter<"PullRequest"> | string
    githubPrNumber?: IntFilter<"PullRequest"> | number
    title?: StringFilter<"PullRequest"> | string
    body?: StringNullableFilter<"PullRequest"> | string | null
    authorId?: StringFilter<"PullRequest"> | string
    status?: EnumPRStatusFilter<"PullRequest"> | $Enums.PRStatus
    headBranch?: StringFilter<"PullRequest"> | string
    baseBranch?: StringFilter<"PullRequest"> | string
    diffUrl?: StringNullableFilter<"PullRequest"> | string | null
    aiSummary?: StringNullableFilter<"PullRequest"> | string | null
    securityScore?: IntNullableFilter<"PullRequest"> | number | null
    createdAt?: DateTimeFilter<"PullRequest"> | Date | string
    updatedAt?: DateTimeFilter<"PullRequest"> | Date | string
    reviewerId?: StringNullableFilter<"PullRequest"> | string | null
  }

  export type ReviewSessionUpsertWithWhereUniqueWithoutCreatorInput = {
    where: ReviewSessionWhereUniqueInput
    update: XOR<ReviewSessionUpdateWithoutCreatorInput, ReviewSessionUncheckedUpdateWithoutCreatorInput>
    create: XOR<ReviewSessionCreateWithoutCreatorInput, ReviewSessionUncheckedCreateWithoutCreatorInput>
  }

  export type ReviewSessionUpdateWithWhereUniqueWithoutCreatorInput = {
    where: ReviewSessionWhereUniqueInput
    data: XOR<ReviewSessionUpdateWithoutCreatorInput, ReviewSessionUncheckedUpdateWithoutCreatorInput>
  }

  export type ReviewSessionUpdateManyWithWhereWithoutCreatorInput = {
    where: ReviewSessionScalarWhereInput
    data: XOR<ReviewSessionUpdateManyMutationInput, ReviewSessionUncheckedUpdateManyWithoutCreatorInput>
  }

  export type ReviewSessionScalarWhereInput = {
    AND?: ReviewSessionScalarWhereInput | ReviewSessionScalarWhereInput[]
    OR?: ReviewSessionScalarWhereInput[]
    NOT?: ReviewSessionScalarWhereInput | ReviewSessionScalarWhereInput[]
    id?: StringFilter<"ReviewSession"> | string
    pullRequestId?: StringFilter<"ReviewSession"> | string
    createdBy?: StringFilter<"ReviewSession"> | string
    isActive?: BoolFilter<"ReviewSession"> | boolean
    createdAt?: DateTimeFilter<"ReviewSession"> | Date | string
    endedAt?: DateTimeNullableFilter<"ReviewSession"> | Date | string | null
  }

  export type CommentUpsertWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutAuthorInput, CommentUncheckedUpdateWithoutAuthorInput>
    create: XOR<CommentCreateWithoutAuthorInput, CommentUncheckedCreateWithoutAuthorInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutAuthorInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutAuthorInput, CommentUncheckedUpdateWithoutAuthorInput>
  }

  export type CommentUpdateManyWithWhereWithoutAuthorInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutAuthorInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: StringFilter<"Comment"> | string
    reviewSessionId?: StringFilter<"Comment"> | string
    authorId?: StringFilter<"Comment"> | string
    filePath?: StringFilter<"Comment"> | string
    lineNumber?: IntFilter<"Comment"> | number
    content?: StringFilter<"Comment"> | string
    parentId?: StringNullableFilter<"Comment"> | string | null
    resolvedAt?: DateTimeNullableFilter<"Comment"> | Date | string | null
    isAI?: BoolFilter<"Comment"> | boolean
    severity?: StringNullableFilter<"Comment"> | string | null
    category?: StringNullableFilter<"Comment"> | string | null
    suggestedFix?: StringNullableFilter<"Comment"> | string | null
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    updatedAt?: DateTimeFilter<"Comment"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    type?: StringFilter<"Notification"> | string
    title?: StringFilter<"Notification"> | string
    body?: StringFilter<"Notification"> | string
    link?: StringNullableFilter<"Notification"> | string | null
    isRead?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type PullRequestUpsertWithWhereUniqueWithoutReviewerInput = {
    where: PullRequestWhereUniqueInput
    update: XOR<PullRequestUpdateWithoutReviewerInput, PullRequestUncheckedUpdateWithoutReviewerInput>
    create: XOR<PullRequestCreateWithoutReviewerInput, PullRequestUncheckedCreateWithoutReviewerInput>
  }

  export type PullRequestUpdateWithWhereUniqueWithoutReviewerInput = {
    where: PullRequestWhereUniqueInput
    data: XOR<PullRequestUpdateWithoutReviewerInput, PullRequestUncheckedUpdateWithoutReviewerInput>
  }

  export type PullRequestUpdateManyWithWhereWithoutReviewerInput = {
    where: PullRequestScalarWhereInput
    data: XOR<PullRequestUpdateManyMutationInput, PullRequestUncheckedUpdateManyWithoutReviewerInput>
  }

  export type AuditLogUpsertWithWhereUniqueWithoutActorInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutActorInput, AuditLogUncheckedUpdateWithoutActorInput>
    create: XOR<AuditLogCreateWithoutActorInput, AuditLogUncheckedCreateWithoutActorInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutActorInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutActorInput, AuditLogUncheckedUpdateWithoutActorInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutActorInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutActorInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    workspaceId?: StringFilter<"AuditLog"> | string
    actorId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    metadata?: JsonNullableFilter<"AuditLog">
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type UserCreateWithoutOwnedWorkspacesInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    githubId?: string | null
    githubUsername?: string | null
    githubAccessToken?: string | null
    createdAt?: Date | string
    emailNotificationsEnabled?: boolean
    updatedAt?: Date | string
    memberships?: WorkspaceMemberCreateNestedManyWithoutUserInput
    pullRequests?: PullRequestCreateNestedManyWithoutAuthorInput
    reviewSessions?: ReviewSessionCreateNestedManyWithoutCreatorInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    assignedPRs?: PullRequestCreateNestedManyWithoutReviewerInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutOwnedWorkspacesInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    githubId?: string | null
    githubUsername?: string | null
    githubAccessToken?: string | null
    createdAt?: Date | string
    emailNotificationsEnabled?: boolean
    updatedAt?: Date | string
    memberships?: WorkspaceMemberUncheckedCreateNestedManyWithoutUserInput
    pullRequests?: PullRequestUncheckedCreateNestedManyWithoutAuthorInput
    reviewSessions?: ReviewSessionUncheckedCreateNestedManyWithoutCreatorInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    assignedPRs?: PullRequestUncheckedCreateNestedManyWithoutReviewerInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutOwnedWorkspacesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOwnedWorkspacesInput, UserUncheckedCreateWithoutOwnedWorkspacesInput>
  }

  export type WorkspaceMemberCreateWithoutWorkspaceInput = {
    id?: string
    role?: $Enums.MemberRole
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutMembershipsInput
  }

  export type WorkspaceMemberUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    userId: string
    role?: $Enums.MemberRole
    joinedAt?: Date | string
  }

  export type WorkspaceMemberCreateOrConnectWithoutWorkspaceInput = {
    where: WorkspaceMemberWhereUniqueInput
    create: XOR<WorkspaceMemberCreateWithoutWorkspaceInput, WorkspaceMemberUncheckedCreateWithoutWorkspaceInput>
  }

  export type WorkspaceMemberCreateManyWorkspaceInputEnvelope = {
    data: WorkspaceMemberCreateManyWorkspaceInput | WorkspaceMemberCreateManyWorkspaceInput[]
    skipDuplicates?: boolean
  }

  export type RepositoryCreateWithoutWorkspaceInput = {
    id?: string
    githubRepoId: string
    name: string
    fullName: string
    defaultBranch?: string
    isPrivate?: boolean
    createdAt?: Date | string
    pullRequests?: PullRequestCreateNestedManyWithoutRepositoryInput
  }

  export type RepositoryUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    githubRepoId: string
    name: string
    fullName: string
    defaultBranch?: string
    isPrivate?: boolean
    createdAt?: Date | string
    pullRequests?: PullRequestUncheckedCreateNestedManyWithoutRepositoryInput
  }

  export type RepositoryCreateOrConnectWithoutWorkspaceInput = {
    where: RepositoryWhereUniqueInput
    create: XOR<RepositoryCreateWithoutWorkspaceInput, RepositoryUncheckedCreateWithoutWorkspaceInput>
  }

  export type RepositoryCreateManyWorkspaceInputEnvelope = {
    data: RepositoryCreateManyWorkspaceInput | RepositoryCreateManyWorkspaceInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionCreateWithoutWorkspaceInput = {
    id?: string
    lemonSqueezyCustomerId: string
    lemonSqueezyVariantId: string
    lemonSqueezySubscriptionId: string
    status: string
    currentPeriodEnd: Date | string
  }

  export type SubscriptionUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    lemonSqueezyCustomerId: string
    lemonSqueezyVariantId: string
    lemonSqueezySubscriptionId: string
    status: string
    currentPeriodEnd: Date | string
  }

  export type SubscriptionCreateOrConnectWithoutWorkspaceInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutWorkspaceInput, SubscriptionUncheckedCreateWithoutWorkspaceInput>
  }

  export type WorkspaceSlackConfigCreateWithoutWorkspaceInput = {
    id?: string
    webhookUrl: string
    channelName?: string | null
    createdAt?: Date | string
  }

  export type WorkspaceSlackConfigUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    webhookUrl: string
    channelName?: string | null
    createdAt?: Date | string
  }

  export type WorkspaceSlackConfigCreateOrConnectWithoutWorkspaceInput = {
    where: WorkspaceSlackConfigWhereUniqueInput
    create: XOR<WorkspaceSlackConfigCreateWithoutWorkspaceInput, WorkspaceSlackConfigUncheckedCreateWithoutWorkspaceInput>
  }

  export type AuditLogCreateWithoutWorkspaceInput = {
    id?: string
    action: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    actor: UserCreateNestedOneWithoutAuditLogsInput
  }

  export type AuditLogUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    actorId: string
    action: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutWorkspaceInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutWorkspaceInput, AuditLogUncheckedCreateWithoutWorkspaceInput>
  }

  export type AuditLogCreateManyWorkspaceInputEnvelope = {
    data: AuditLogCreateManyWorkspaceInput | AuditLogCreateManyWorkspaceInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOwnedWorkspacesInput = {
    update: XOR<UserUpdateWithoutOwnedWorkspacesInput, UserUncheckedUpdateWithoutOwnedWorkspacesInput>
    create: XOR<UserCreateWithoutOwnedWorkspacesInput, UserUncheckedCreateWithoutOwnedWorkspacesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOwnedWorkspacesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOwnedWorkspacesInput, UserUncheckedUpdateWithoutOwnedWorkspacesInput>
  }

  export type UserUpdateWithoutOwnedWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    githubAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailNotificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: WorkspaceMemberUpdateManyWithoutUserNestedInput
    pullRequests?: PullRequestUpdateManyWithoutAuthorNestedInput
    reviewSessions?: ReviewSessionUpdateManyWithoutCreatorNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    assignedPRs?: PullRequestUpdateManyWithoutReviewerNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutOwnedWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    githubAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailNotificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memberships?: WorkspaceMemberUncheckedUpdateManyWithoutUserNestedInput
    pullRequests?: PullRequestUncheckedUpdateManyWithoutAuthorNestedInput
    reviewSessions?: ReviewSessionUncheckedUpdateManyWithoutCreatorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    assignedPRs?: PullRequestUncheckedUpdateManyWithoutReviewerNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type WorkspaceMemberUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: WorkspaceMemberWhereUniqueInput
    update: XOR<WorkspaceMemberUpdateWithoutWorkspaceInput, WorkspaceMemberUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<WorkspaceMemberCreateWithoutWorkspaceInput, WorkspaceMemberUncheckedCreateWithoutWorkspaceInput>
  }

  export type WorkspaceMemberUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: WorkspaceMemberWhereUniqueInput
    data: XOR<WorkspaceMemberUpdateWithoutWorkspaceInput, WorkspaceMemberUncheckedUpdateWithoutWorkspaceInput>
  }

  export type WorkspaceMemberUpdateManyWithWhereWithoutWorkspaceInput = {
    where: WorkspaceMemberScalarWhereInput
    data: XOR<WorkspaceMemberUpdateManyMutationInput, WorkspaceMemberUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type RepositoryUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: RepositoryWhereUniqueInput
    update: XOR<RepositoryUpdateWithoutWorkspaceInput, RepositoryUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<RepositoryCreateWithoutWorkspaceInput, RepositoryUncheckedCreateWithoutWorkspaceInput>
  }

  export type RepositoryUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: RepositoryWhereUniqueInput
    data: XOR<RepositoryUpdateWithoutWorkspaceInput, RepositoryUncheckedUpdateWithoutWorkspaceInput>
  }

  export type RepositoryUpdateManyWithWhereWithoutWorkspaceInput = {
    where: RepositoryScalarWhereInput
    data: XOR<RepositoryUpdateManyMutationInput, RepositoryUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type RepositoryScalarWhereInput = {
    AND?: RepositoryScalarWhereInput | RepositoryScalarWhereInput[]
    OR?: RepositoryScalarWhereInput[]
    NOT?: RepositoryScalarWhereInput | RepositoryScalarWhereInput[]
    id?: StringFilter<"Repository"> | string
    workspaceId?: StringFilter<"Repository"> | string
    githubRepoId?: StringFilter<"Repository"> | string
    name?: StringFilter<"Repository"> | string
    fullName?: StringFilter<"Repository"> | string
    defaultBranch?: StringFilter<"Repository"> | string
    isPrivate?: BoolFilter<"Repository"> | boolean
    createdAt?: DateTimeFilter<"Repository"> | Date | string
  }

  export type SubscriptionUpsertWithoutWorkspaceInput = {
    update: XOR<SubscriptionUpdateWithoutWorkspaceInput, SubscriptionUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<SubscriptionCreateWithoutWorkspaceInput, SubscriptionUncheckedCreateWithoutWorkspaceInput>
    where?: SubscriptionWhereInput
  }

  export type SubscriptionUpdateToOneWithWhereWithoutWorkspaceInput = {
    where?: SubscriptionWhereInput
    data: XOR<SubscriptionUpdateWithoutWorkspaceInput, SubscriptionUncheckedUpdateWithoutWorkspaceInput>
  }

  export type SubscriptionUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    lemonSqueezyCustomerId?: StringFieldUpdateOperationsInput | string
    lemonSqueezyVariantId?: StringFieldUpdateOperationsInput | string
    lemonSqueezySubscriptionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    lemonSqueezyCustomerId?: StringFieldUpdateOperationsInput | string
    lemonSqueezyVariantId?: StringFieldUpdateOperationsInput | string
    lemonSqueezySubscriptionId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    currentPeriodEnd?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceSlackConfigUpsertWithoutWorkspaceInput = {
    update: XOR<WorkspaceSlackConfigUpdateWithoutWorkspaceInput, WorkspaceSlackConfigUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<WorkspaceSlackConfigCreateWithoutWorkspaceInput, WorkspaceSlackConfigUncheckedCreateWithoutWorkspaceInput>
    where?: WorkspaceSlackConfigWhereInput
  }

  export type WorkspaceSlackConfigUpdateToOneWithWhereWithoutWorkspaceInput = {
    where?: WorkspaceSlackConfigWhereInput
    data: XOR<WorkspaceSlackConfigUpdateWithoutWorkspaceInput, WorkspaceSlackConfigUncheckedUpdateWithoutWorkspaceInput>
  }

  export type WorkspaceSlackConfigUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    webhookUrl?: StringFieldUpdateOperationsInput | string
    channelName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceSlackConfigUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    webhookUrl?: StringFieldUpdateOperationsInput | string
    channelName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutWorkspaceInput, AuditLogUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<AuditLogCreateWithoutWorkspaceInput, AuditLogUncheckedCreateWithoutWorkspaceInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutWorkspaceInput, AuditLogUncheckedUpdateWithoutWorkspaceInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutWorkspaceInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type WorkspaceCreateWithoutMembersInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.Plan
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedWorkspacesInput
    repositories?: RepositoryCreateNestedManyWithoutWorkspaceInput
    subscription?: SubscriptionCreateNestedOneWithoutWorkspaceInput
    slackConfig?: WorkspaceSlackConfigCreateNestedOneWithoutWorkspaceInput
    auditLogs?: AuditLogCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.Plan
    ownerId: string
    createdAt?: Date | string
    repositories?: RepositoryUncheckedCreateNestedManyWithoutWorkspaceInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutWorkspaceInput
    slackConfig?: WorkspaceSlackConfigUncheckedCreateNestedOneWithoutWorkspaceInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutMembersInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutMembersInput, WorkspaceUncheckedCreateWithoutMembersInput>
  }

  export type UserCreateWithoutMembershipsInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    githubId?: string | null
    githubUsername?: string | null
    githubAccessToken?: string | null
    createdAt?: Date | string
    emailNotificationsEnabled?: boolean
    updatedAt?: Date | string
    ownedWorkspaces?: WorkspaceCreateNestedManyWithoutOwnerInput
    pullRequests?: PullRequestCreateNestedManyWithoutAuthorInput
    reviewSessions?: ReviewSessionCreateNestedManyWithoutCreatorInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    assignedPRs?: PullRequestCreateNestedManyWithoutReviewerInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutMembershipsInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    githubId?: string | null
    githubUsername?: string | null
    githubAccessToken?: string | null
    createdAt?: Date | string
    emailNotificationsEnabled?: boolean
    updatedAt?: Date | string
    ownedWorkspaces?: WorkspaceUncheckedCreateNestedManyWithoutOwnerInput
    pullRequests?: PullRequestUncheckedCreateNestedManyWithoutAuthorInput
    reviewSessions?: ReviewSessionUncheckedCreateNestedManyWithoutCreatorInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    assignedPRs?: PullRequestUncheckedCreateNestedManyWithoutReviewerInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutMembershipsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
  }

  export type WorkspaceUpsertWithoutMembersInput = {
    update: XOR<WorkspaceUpdateWithoutMembersInput, WorkspaceUncheckedUpdateWithoutMembersInput>
    create: XOR<WorkspaceCreateWithoutMembersInput, WorkspaceUncheckedCreateWithoutMembersInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutMembersInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutMembersInput, WorkspaceUncheckedUpdateWithoutMembersInput>
  }

  export type WorkspaceUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedWorkspacesNestedInput
    repositories?: RepositoryUpdateManyWithoutWorkspaceNestedInput
    subscription?: SubscriptionUpdateOneWithoutWorkspaceNestedInput
    slackConfig?: WorkspaceSlackConfigUpdateOneWithoutWorkspaceNestedInput
    auditLogs?: AuditLogUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repositories?: RepositoryUncheckedUpdateManyWithoutWorkspaceNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutWorkspaceNestedInput
    slackConfig?: WorkspaceSlackConfigUncheckedUpdateOneWithoutWorkspaceNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type UserUpsertWithoutMembershipsInput = {
    update: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
    create: XOR<UserCreateWithoutMembershipsInput, UserUncheckedCreateWithoutMembershipsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMembershipsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMembershipsInput, UserUncheckedUpdateWithoutMembershipsInput>
  }

  export type UserUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    githubAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailNotificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedWorkspaces?: WorkspaceUpdateManyWithoutOwnerNestedInput
    pullRequests?: PullRequestUpdateManyWithoutAuthorNestedInput
    reviewSessions?: ReviewSessionUpdateManyWithoutCreatorNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    assignedPRs?: PullRequestUpdateManyWithoutReviewerNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutMembershipsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    githubAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailNotificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedWorkspaces?: WorkspaceUncheckedUpdateManyWithoutOwnerNestedInput
    pullRequests?: PullRequestUncheckedUpdateManyWithoutAuthorNestedInput
    reviewSessions?: ReviewSessionUncheckedUpdateManyWithoutCreatorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    assignedPRs?: PullRequestUncheckedUpdateManyWithoutReviewerNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type WorkspaceCreateWithoutRepositoriesInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.Plan
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedWorkspacesInput
    members?: WorkspaceMemberCreateNestedManyWithoutWorkspaceInput
    subscription?: SubscriptionCreateNestedOneWithoutWorkspaceInput
    slackConfig?: WorkspaceSlackConfigCreateNestedOneWithoutWorkspaceInput
    auditLogs?: AuditLogCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutRepositoriesInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.Plan
    ownerId: string
    createdAt?: Date | string
    members?: WorkspaceMemberUncheckedCreateNestedManyWithoutWorkspaceInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutWorkspaceInput
    slackConfig?: WorkspaceSlackConfigUncheckedCreateNestedOneWithoutWorkspaceInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutRepositoriesInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutRepositoriesInput, WorkspaceUncheckedCreateWithoutRepositoriesInput>
  }

  export type PullRequestCreateWithoutRepositoryInput = {
    id?: string
    githubPrNumber: number
    title: string
    body?: string | null
    status?: $Enums.PRStatus
    headBranch: string
    baseBranch: string
    diffUrl?: string | null
    aiSummary?: string | null
    securityScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutPullRequestsInput
    reviewer?: UserCreateNestedOneWithoutAssignedPRsInput
    reviewSessions?: ReviewSessionCreateNestedManyWithoutPullRequestInput
    securityFindings?: SecurityFindingCreateNestedManyWithoutPullRequestInput
  }

  export type PullRequestUncheckedCreateWithoutRepositoryInput = {
    id?: string
    githubPrNumber: number
    title: string
    body?: string | null
    authorId: string
    status?: $Enums.PRStatus
    headBranch: string
    baseBranch: string
    diffUrl?: string | null
    aiSummary?: string | null
    securityScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewerId?: string | null
    reviewSessions?: ReviewSessionUncheckedCreateNestedManyWithoutPullRequestInput
    securityFindings?: SecurityFindingUncheckedCreateNestedManyWithoutPullRequestInput
  }

  export type PullRequestCreateOrConnectWithoutRepositoryInput = {
    where: PullRequestWhereUniqueInput
    create: XOR<PullRequestCreateWithoutRepositoryInput, PullRequestUncheckedCreateWithoutRepositoryInput>
  }

  export type PullRequestCreateManyRepositoryInputEnvelope = {
    data: PullRequestCreateManyRepositoryInput | PullRequestCreateManyRepositoryInput[]
    skipDuplicates?: boolean
  }

  export type WorkspaceUpsertWithoutRepositoriesInput = {
    update: XOR<WorkspaceUpdateWithoutRepositoriesInput, WorkspaceUncheckedUpdateWithoutRepositoriesInput>
    create: XOR<WorkspaceCreateWithoutRepositoriesInput, WorkspaceUncheckedCreateWithoutRepositoriesInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutRepositoriesInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutRepositoriesInput, WorkspaceUncheckedUpdateWithoutRepositoriesInput>
  }

  export type WorkspaceUpdateWithoutRepositoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedWorkspacesNestedInput
    members?: WorkspaceMemberUpdateManyWithoutWorkspaceNestedInput
    subscription?: SubscriptionUpdateOneWithoutWorkspaceNestedInput
    slackConfig?: WorkspaceSlackConfigUpdateOneWithoutWorkspaceNestedInput
    auditLogs?: AuditLogUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutRepositoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: WorkspaceMemberUncheckedUpdateManyWithoutWorkspaceNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutWorkspaceNestedInput
    slackConfig?: WorkspaceSlackConfigUncheckedUpdateOneWithoutWorkspaceNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type PullRequestUpsertWithWhereUniqueWithoutRepositoryInput = {
    where: PullRequestWhereUniqueInput
    update: XOR<PullRequestUpdateWithoutRepositoryInput, PullRequestUncheckedUpdateWithoutRepositoryInput>
    create: XOR<PullRequestCreateWithoutRepositoryInput, PullRequestUncheckedCreateWithoutRepositoryInput>
  }

  export type PullRequestUpdateWithWhereUniqueWithoutRepositoryInput = {
    where: PullRequestWhereUniqueInput
    data: XOR<PullRequestUpdateWithoutRepositoryInput, PullRequestUncheckedUpdateWithoutRepositoryInput>
  }

  export type PullRequestUpdateManyWithWhereWithoutRepositoryInput = {
    where: PullRequestScalarWhereInput
    data: XOR<PullRequestUpdateManyMutationInput, PullRequestUncheckedUpdateManyWithoutRepositoryInput>
  }

  export type RepositoryCreateWithoutPullRequestsInput = {
    id?: string
    githubRepoId: string
    name: string
    fullName: string
    defaultBranch?: string
    isPrivate?: boolean
    createdAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutRepositoriesInput
  }

  export type RepositoryUncheckedCreateWithoutPullRequestsInput = {
    id?: string
    workspaceId: string
    githubRepoId: string
    name: string
    fullName: string
    defaultBranch?: string
    isPrivate?: boolean
    createdAt?: Date | string
  }

  export type RepositoryCreateOrConnectWithoutPullRequestsInput = {
    where: RepositoryWhereUniqueInput
    create: XOR<RepositoryCreateWithoutPullRequestsInput, RepositoryUncheckedCreateWithoutPullRequestsInput>
  }

  export type UserCreateWithoutPullRequestsInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    githubId?: string | null
    githubUsername?: string | null
    githubAccessToken?: string | null
    createdAt?: Date | string
    emailNotificationsEnabled?: boolean
    updatedAt?: Date | string
    ownedWorkspaces?: WorkspaceCreateNestedManyWithoutOwnerInput
    memberships?: WorkspaceMemberCreateNestedManyWithoutUserInput
    reviewSessions?: ReviewSessionCreateNestedManyWithoutCreatorInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    assignedPRs?: PullRequestCreateNestedManyWithoutReviewerInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutPullRequestsInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    githubId?: string | null
    githubUsername?: string | null
    githubAccessToken?: string | null
    createdAt?: Date | string
    emailNotificationsEnabled?: boolean
    updatedAt?: Date | string
    ownedWorkspaces?: WorkspaceUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: WorkspaceMemberUncheckedCreateNestedManyWithoutUserInput
    reviewSessions?: ReviewSessionUncheckedCreateNestedManyWithoutCreatorInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    assignedPRs?: PullRequestUncheckedCreateNestedManyWithoutReviewerInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutPullRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPullRequestsInput, UserUncheckedCreateWithoutPullRequestsInput>
  }

  export type UserCreateWithoutAssignedPRsInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    githubId?: string | null
    githubUsername?: string | null
    githubAccessToken?: string | null
    createdAt?: Date | string
    emailNotificationsEnabled?: boolean
    updatedAt?: Date | string
    ownedWorkspaces?: WorkspaceCreateNestedManyWithoutOwnerInput
    memberships?: WorkspaceMemberCreateNestedManyWithoutUserInput
    pullRequests?: PullRequestCreateNestedManyWithoutAuthorInput
    reviewSessions?: ReviewSessionCreateNestedManyWithoutCreatorInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutAssignedPRsInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    githubId?: string | null
    githubUsername?: string | null
    githubAccessToken?: string | null
    createdAt?: Date | string
    emailNotificationsEnabled?: boolean
    updatedAt?: Date | string
    ownedWorkspaces?: WorkspaceUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: WorkspaceMemberUncheckedCreateNestedManyWithoutUserInput
    pullRequests?: PullRequestUncheckedCreateNestedManyWithoutAuthorInput
    reviewSessions?: ReviewSessionUncheckedCreateNestedManyWithoutCreatorInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutAssignedPRsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedPRsInput, UserUncheckedCreateWithoutAssignedPRsInput>
  }

  export type ReviewSessionCreateWithoutPullRequestInput = {
    id?: string
    isActive?: boolean
    createdAt?: Date | string
    endedAt?: Date | string | null
    creator: UserCreateNestedOneWithoutReviewSessionsInput
    comments?: CommentCreateNestedManyWithoutReviewSessionInput
  }

  export type ReviewSessionUncheckedCreateWithoutPullRequestInput = {
    id?: string
    createdBy: string
    isActive?: boolean
    createdAt?: Date | string
    endedAt?: Date | string | null
    comments?: CommentUncheckedCreateNestedManyWithoutReviewSessionInput
  }

  export type ReviewSessionCreateOrConnectWithoutPullRequestInput = {
    where: ReviewSessionWhereUniqueInput
    create: XOR<ReviewSessionCreateWithoutPullRequestInput, ReviewSessionUncheckedCreateWithoutPullRequestInput>
  }

  export type ReviewSessionCreateManyPullRequestInputEnvelope = {
    data: ReviewSessionCreateManyPullRequestInput | ReviewSessionCreateManyPullRequestInput[]
    skipDuplicates?: boolean
  }

  export type SecurityFindingCreateWithoutPullRequestInput = {
    id?: string
    filePath: string
    lineNumber: number
    severity: string
    category: string
    cweId?: string | null
    description: string
    remediation: string
    isFalsePositive?: boolean
    createdAt?: Date | string
  }

  export type SecurityFindingUncheckedCreateWithoutPullRequestInput = {
    id?: string
    filePath: string
    lineNumber: number
    severity: string
    category: string
    cweId?: string | null
    description: string
    remediation: string
    isFalsePositive?: boolean
    createdAt?: Date | string
  }

  export type SecurityFindingCreateOrConnectWithoutPullRequestInput = {
    where: SecurityFindingWhereUniqueInput
    create: XOR<SecurityFindingCreateWithoutPullRequestInput, SecurityFindingUncheckedCreateWithoutPullRequestInput>
  }

  export type SecurityFindingCreateManyPullRequestInputEnvelope = {
    data: SecurityFindingCreateManyPullRequestInput | SecurityFindingCreateManyPullRequestInput[]
    skipDuplicates?: boolean
  }

  export type RepositoryUpsertWithoutPullRequestsInput = {
    update: XOR<RepositoryUpdateWithoutPullRequestsInput, RepositoryUncheckedUpdateWithoutPullRequestsInput>
    create: XOR<RepositoryCreateWithoutPullRequestsInput, RepositoryUncheckedCreateWithoutPullRequestsInput>
    where?: RepositoryWhereInput
  }

  export type RepositoryUpdateToOneWithWhereWithoutPullRequestsInput = {
    where?: RepositoryWhereInput
    data: XOR<RepositoryUpdateWithoutPullRequestsInput, RepositoryUncheckedUpdateWithoutPullRequestsInput>
  }

  export type RepositoryUpdateWithoutPullRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubRepoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    defaultBranch?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutRepositoriesNestedInput
  }

  export type RepositoryUncheckedUpdateWithoutPullRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    githubRepoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    defaultBranch?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutPullRequestsInput = {
    update: XOR<UserUpdateWithoutPullRequestsInput, UserUncheckedUpdateWithoutPullRequestsInput>
    create: XOR<UserCreateWithoutPullRequestsInput, UserUncheckedCreateWithoutPullRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPullRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPullRequestsInput, UserUncheckedUpdateWithoutPullRequestsInput>
  }

  export type UserUpdateWithoutPullRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    githubAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailNotificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedWorkspaces?: WorkspaceUpdateManyWithoutOwnerNestedInput
    memberships?: WorkspaceMemberUpdateManyWithoutUserNestedInput
    reviewSessions?: ReviewSessionUpdateManyWithoutCreatorNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    assignedPRs?: PullRequestUpdateManyWithoutReviewerNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutPullRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    githubAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailNotificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedWorkspaces?: WorkspaceUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: WorkspaceMemberUncheckedUpdateManyWithoutUserNestedInput
    reviewSessions?: ReviewSessionUncheckedUpdateManyWithoutCreatorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    assignedPRs?: PullRequestUncheckedUpdateManyWithoutReviewerNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type UserUpsertWithoutAssignedPRsInput = {
    update: XOR<UserUpdateWithoutAssignedPRsInput, UserUncheckedUpdateWithoutAssignedPRsInput>
    create: XOR<UserCreateWithoutAssignedPRsInput, UserUncheckedCreateWithoutAssignedPRsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignedPRsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignedPRsInput, UserUncheckedUpdateWithoutAssignedPRsInput>
  }

  export type UserUpdateWithoutAssignedPRsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    githubAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailNotificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedWorkspaces?: WorkspaceUpdateManyWithoutOwnerNestedInput
    memberships?: WorkspaceMemberUpdateManyWithoutUserNestedInput
    pullRequests?: PullRequestUpdateManyWithoutAuthorNestedInput
    reviewSessions?: ReviewSessionUpdateManyWithoutCreatorNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignedPRsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    githubAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailNotificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedWorkspaces?: WorkspaceUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: WorkspaceMemberUncheckedUpdateManyWithoutUserNestedInput
    pullRequests?: PullRequestUncheckedUpdateManyWithoutAuthorNestedInput
    reviewSessions?: ReviewSessionUncheckedUpdateManyWithoutCreatorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type ReviewSessionUpsertWithWhereUniqueWithoutPullRequestInput = {
    where: ReviewSessionWhereUniqueInput
    update: XOR<ReviewSessionUpdateWithoutPullRequestInput, ReviewSessionUncheckedUpdateWithoutPullRequestInput>
    create: XOR<ReviewSessionCreateWithoutPullRequestInput, ReviewSessionUncheckedCreateWithoutPullRequestInput>
  }

  export type ReviewSessionUpdateWithWhereUniqueWithoutPullRequestInput = {
    where: ReviewSessionWhereUniqueInput
    data: XOR<ReviewSessionUpdateWithoutPullRequestInput, ReviewSessionUncheckedUpdateWithoutPullRequestInput>
  }

  export type ReviewSessionUpdateManyWithWhereWithoutPullRequestInput = {
    where: ReviewSessionScalarWhereInput
    data: XOR<ReviewSessionUpdateManyMutationInput, ReviewSessionUncheckedUpdateManyWithoutPullRequestInput>
  }

  export type SecurityFindingUpsertWithWhereUniqueWithoutPullRequestInput = {
    where: SecurityFindingWhereUniqueInput
    update: XOR<SecurityFindingUpdateWithoutPullRequestInput, SecurityFindingUncheckedUpdateWithoutPullRequestInput>
    create: XOR<SecurityFindingCreateWithoutPullRequestInput, SecurityFindingUncheckedCreateWithoutPullRequestInput>
  }

  export type SecurityFindingUpdateWithWhereUniqueWithoutPullRequestInput = {
    where: SecurityFindingWhereUniqueInput
    data: XOR<SecurityFindingUpdateWithoutPullRequestInput, SecurityFindingUncheckedUpdateWithoutPullRequestInput>
  }

  export type SecurityFindingUpdateManyWithWhereWithoutPullRequestInput = {
    where: SecurityFindingScalarWhereInput
    data: XOR<SecurityFindingUpdateManyMutationInput, SecurityFindingUncheckedUpdateManyWithoutPullRequestInput>
  }

  export type SecurityFindingScalarWhereInput = {
    AND?: SecurityFindingScalarWhereInput | SecurityFindingScalarWhereInput[]
    OR?: SecurityFindingScalarWhereInput[]
    NOT?: SecurityFindingScalarWhereInput | SecurityFindingScalarWhereInput[]
    id?: StringFilter<"SecurityFinding"> | string
    pullRequestId?: StringFilter<"SecurityFinding"> | string
    filePath?: StringFilter<"SecurityFinding"> | string
    lineNumber?: IntFilter<"SecurityFinding"> | number
    severity?: StringFilter<"SecurityFinding"> | string
    category?: StringFilter<"SecurityFinding"> | string
    cweId?: StringNullableFilter<"SecurityFinding"> | string | null
    description?: StringFilter<"SecurityFinding"> | string
    remediation?: StringFilter<"SecurityFinding"> | string
    isFalsePositive?: BoolFilter<"SecurityFinding"> | boolean
    createdAt?: DateTimeFilter<"SecurityFinding"> | Date | string
  }

  export type PullRequestCreateWithoutSecurityFindingsInput = {
    id?: string
    githubPrNumber: number
    title: string
    body?: string | null
    status?: $Enums.PRStatus
    headBranch: string
    baseBranch: string
    diffUrl?: string | null
    aiSummary?: string | null
    securityScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    repository: RepositoryCreateNestedOneWithoutPullRequestsInput
    author: UserCreateNestedOneWithoutPullRequestsInput
    reviewer?: UserCreateNestedOneWithoutAssignedPRsInput
    reviewSessions?: ReviewSessionCreateNestedManyWithoutPullRequestInput
  }

  export type PullRequestUncheckedCreateWithoutSecurityFindingsInput = {
    id?: string
    repositoryId: string
    githubPrNumber: number
    title: string
    body?: string | null
    authorId: string
    status?: $Enums.PRStatus
    headBranch: string
    baseBranch: string
    diffUrl?: string | null
    aiSummary?: string | null
    securityScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewerId?: string | null
    reviewSessions?: ReviewSessionUncheckedCreateNestedManyWithoutPullRequestInput
  }

  export type PullRequestCreateOrConnectWithoutSecurityFindingsInput = {
    where: PullRequestWhereUniqueInput
    create: XOR<PullRequestCreateWithoutSecurityFindingsInput, PullRequestUncheckedCreateWithoutSecurityFindingsInput>
  }

  export type PullRequestUpsertWithoutSecurityFindingsInput = {
    update: XOR<PullRequestUpdateWithoutSecurityFindingsInput, PullRequestUncheckedUpdateWithoutSecurityFindingsInput>
    create: XOR<PullRequestCreateWithoutSecurityFindingsInput, PullRequestUncheckedCreateWithoutSecurityFindingsInput>
    where?: PullRequestWhereInput
  }

  export type PullRequestUpdateToOneWithWhereWithoutSecurityFindingsInput = {
    where?: PullRequestWhereInput
    data: XOR<PullRequestUpdateWithoutSecurityFindingsInput, PullRequestUncheckedUpdateWithoutSecurityFindingsInput>
  }

  export type PullRequestUpdateWithoutSecurityFindingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubPrNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPRStatusFieldUpdateOperationsInput | $Enums.PRStatus
    headBranch?: StringFieldUpdateOperationsInput | string
    baseBranch?: StringFieldUpdateOperationsInput | string
    diffUrl?: NullableStringFieldUpdateOperationsInput | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    securityScore?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repository?: RepositoryUpdateOneRequiredWithoutPullRequestsNestedInput
    author?: UserUpdateOneRequiredWithoutPullRequestsNestedInput
    reviewer?: UserUpdateOneWithoutAssignedPRsNestedInput
    reviewSessions?: ReviewSessionUpdateManyWithoutPullRequestNestedInput
  }

  export type PullRequestUncheckedUpdateWithoutSecurityFindingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    repositoryId?: StringFieldUpdateOperationsInput | string
    githubPrNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    status?: EnumPRStatusFieldUpdateOperationsInput | $Enums.PRStatus
    headBranch?: StringFieldUpdateOperationsInput | string
    baseBranch?: StringFieldUpdateOperationsInput | string
    diffUrl?: NullableStringFieldUpdateOperationsInput | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    securityScore?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewerId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewSessions?: ReviewSessionUncheckedUpdateManyWithoutPullRequestNestedInput
  }

  export type PullRequestCreateWithoutReviewSessionsInput = {
    id?: string
    githubPrNumber: number
    title: string
    body?: string | null
    status?: $Enums.PRStatus
    headBranch: string
    baseBranch: string
    diffUrl?: string | null
    aiSummary?: string | null
    securityScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    repository: RepositoryCreateNestedOneWithoutPullRequestsInput
    author: UserCreateNestedOneWithoutPullRequestsInput
    reviewer?: UserCreateNestedOneWithoutAssignedPRsInput
    securityFindings?: SecurityFindingCreateNestedManyWithoutPullRequestInput
  }

  export type PullRequestUncheckedCreateWithoutReviewSessionsInput = {
    id?: string
    repositoryId: string
    githubPrNumber: number
    title: string
    body?: string | null
    authorId: string
    status?: $Enums.PRStatus
    headBranch: string
    baseBranch: string
    diffUrl?: string | null
    aiSummary?: string | null
    securityScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewerId?: string | null
    securityFindings?: SecurityFindingUncheckedCreateNestedManyWithoutPullRequestInput
  }

  export type PullRequestCreateOrConnectWithoutReviewSessionsInput = {
    where: PullRequestWhereUniqueInput
    create: XOR<PullRequestCreateWithoutReviewSessionsInput, PullRequestUncheckedCreateWithoutReviewSessionsInput>
  }

  export type UserCreateWithoutReviewSessionsInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    githubId?: string | null
    githubUsername?: string | null
    githubAccessToken?: string | null
    createdAt?: Date | string
    emailNotificationsEnabled?: boolean
    updatedAt?: Date | string
    ownedWorkspaces?: WorkspaceCreateNestedManyWithoutOwnerInput
    memberships?: WorkspaceMemberCreateNestedManyWithoutUserInput
    pullRequests?: PullRequestCreateNestedManyWithoutAuthorInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    assignedPRs?: PullRequestCreateNestedManyWithoutReviewerInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutReviewSessionsInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    githubId?: string | null
    githubUsername?: string | null
    githubAccessToken?: string | null
    createdAt?: Date | string
    emailNotificationsEnabled?: boolean
    updatedAt?: Date | string
    ownedWorkspaces?: WorkspaceUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: WorkspaceMemberUncheckedCreateNestedManyWithoutUserInput
    pullRequests?: PullRequestUncheckedCreateNestedManyWithoutAuthorInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    assignedPRs?: PullRequestUncheckedCreateNestedManyWithoutReviewerInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutReviewSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewSessionsInput, UserUncheckedCreateWithoutReviewSessionsInput>
  }

  export type CommentCreateWithoutReviewSessionInput = {
    id?: string
    filePath: string
    lineNumber: number
    content: string
    resolvedAt?: Date | string | null
    isAI?: boolean
    severity?: string | null
    category?: string | null
    suggestedFix?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    author: UserCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
    replies?: CommentCreateNestedManyWithoutParentInput
  }

  export type CommentUncheckedCreateWithoutReviewSessionInput = {
    id?: string
    authorId: string
    filePath: string
    lineNumber: number
    content: string
    parentId?: string | null
    resolvedAt?: Date | string | null
    isAI?: boolean
    severity?: string | null
    category?: string | null
    suggestedFix?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
  }

  export type CommentCreateOrConnectWithoutReviewSessionInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutReviewSessionInput, CommentUncheckedCreateWithoutReviewSessionInput>
  }

  export type CommentCreateManyReviewSessionInputEnvelope = {
    data: CommentCreateManyReviewSessionInput | CommentCreateManyReviewSessionInput[]
    skipDuplicates?: boolean
  }

  export type PullRequestUpsertWithoutReviewSessionsInput = {
    update: XOR<PullRequestUpdateWithoutReviewSessionsInput, PullRequestUncheckedUpdateWithoutReviewSessionsInput>
    create: XOR<PullRequestCreateWithoutReviewSessionsInput, PullRequestUncheckedCreateWithoutReviewSessionsInput>
    where?: PullRequestWhereInput
  }

  export type PullRequestUpdateToOneWithWhereWithoutReviewSessionsInput = {
    where?: PullRequestWhereInput
    data: XOR<PullRequestUpdateWithoutReviewSessionsInput, PullRequestUncheckedUpdateWithoutReviewSessionsInput>
  }

  export type PullRequestUpdateWithoutReviewSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubPrNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPRStatusFieldUpdateOperationsInput | $Enums.PRStatus
    headBranch?: StringFieldUpdateOperationsInput | string
    baseBranch?: StringFieldUpdateOperationsInput | string
    diffUrl?: NullableStringFieldUpdateOperationsInput | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    securityScore?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repository?: RepositoryUpdateOneRequiredWithoutPullRequestsNestedInput
    author?: UserUpdateOneRequiredWithoutPullRequestsNestedInput
    reviewer?: UserUpdateOneWithoutAssignedPRsNestedInput
    securityFindings?: SecurityFindingUpdateManyWithoutPullRequestNestedInput
  }

  export type PullRequestUncheckedUpdateWithoutReviewSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    repositoryId?: StringFieldUpdateOperationsInput | string
    githubPrNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    status?: EnumPRStatusFieldUpdateOperationsInput | $Enums.PRStatus
    headBranch?: StringFieldUpdateOperationsInput | string
    baseBranch?: StringFieldUpdateOperationsInput | string
    diffUrl?: NullableStringFieldUpdateOperationsInput | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    securityScore?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewerId?: NullableStringFieldUpdateOperationsInput | string | null
    securityFindings?: SecurityFindingUncheckedUpdateManyWithoutPullRequestNestedInput
  }

  export type UserUpsertWithoutReviewSessionsInput = {
    update: XOR<UserUpdateWithoutReviewSessionsInput, UserUncheckedUpdateWithoutReviewSessionsInput>
    create: XOR<UserCreateWithoutReviewSessionsInput, UserUncheckedCreateWithoutReviewSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewSessionsInput, UserUncheckedUpdateWithoutReviewSessionsInput>
  }

  export type UserUpdateWithoutReviewSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    githubAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailNotificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedWorkspaces?: WorkspaceUpdateManyWithoutOwnerNestedInput
    memberships?: WorkspaceMemberUpdateManyWithoutUserNestedInput
    pullRequests?: PullRequestUpdateManyWithoutAuthorNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    assignedPRs?: PullRequestUpdateManyWithoutReviewerNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    githubAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailNotificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedWorkspaces?: WorkspaceUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: WorkspaceMemberUncheckedUpdateManyWithoutUserNestedInput
    pullRequests?: PullRequestUncheckedUpdateManyWithoutAuthorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    assignedPRs?: PullRequestUncheckedUpdateManyWithoutReviewerNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type CommentUpsertWithWhereUniqueWithoutReviewSessionInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutReviewSessionInput, CommentUncheckedUpdateWithoutReviewSessionInput>
    create: XOR<CommentCreateWithoutReviewSessionInput, CommentUncheckedCreateWithoutReviewSessionInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutReviewSessionInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutReviewSessionInput, CommentUncheckedUpdateWithoutReviewSessionInput>
  }

  export type CommentUpdateManyWithWhereWithoutReviewSessionInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutReviewSessionInput>
  }

  export type ReviewSessionCreateWithoutCommentsInput = {
    id?: string
    isActive?: boolean
    createdAt?: Date | string
    endedAt?: Date | string | null
    pullRequest: PullRequestCreateNestedOneWithoutReviewSessionsInput
    creator: UserCreateNestedOneWithoutReviewSessionsInput
  }

  export type ReviewSessionUncheckedCreateWithoutCommentsInput = {
    id?: string
    pullRequestId: string
    createdBy: string
    isActive?: boolean
    createdAt?: Date | string
    endedAt?: Date | string | null
  }

  export type ReviewSessionCreateOrConnectWithoutCommentsInput = {
    where: ReviewSessionWhereUniqueInput
    create: XOR<ReviewSessionCreateWithoutCommentsInput, ReviewSessionUncheckedCreateWithoutCommentsInput>
  }

  export type UserCreateWithoutCommentsInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    githubId?: string | null
    githubUsername?: string | null
    githubAccessToken?: string | null
    createdAt?: Date | string
    emailNotificationsEnabled?: boolean
    updatedAt?: Date | string
    ownedWorkspaces?: WorkspaceCreateNestedManyWithoutOwnerInput
    memberships?: WorkspaceMemberCreateNestedManyWithoutUserInput
    pullRequests?: PullRequestCreateNestedManyWithoutAuthorInput
    reviewSessions?: ReviewSessionCreateNestedManyWithoutCreatorInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    assignedPRs?: PullRequestCreateNestedManyWithoutReviewerInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    githubId?: string | null
    githubUsername?: string | null
    githubAccessToken?: string | null
    createdAt?: Date | string
    emailNotificationsEnabled?: boolean
    updatedAt?: Date | string
    ownedWorkspaces?: WorkspaceUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: WorkspaceMemberUncheckedCreateNestedManyWithoutUserInput
    pullRequests?: PullRequestUncheckedCreateNestedManyWithoutAuthorInput
    reviewSessions?: ReviewSessionUncheckedCreateNestedManyWithoutCreatorInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    assignedPRs?: PullRequestUncheckedCreateNestedManyWithoutReviewerInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type CommentCreateWithoutRepliesInput = {
    id?: string
    filePath: string
    lineNumber: number
    content: string
    resolvedAt?: Date | string | null
    isAI?: boolean
    severity?: string | null
    category?: string | null
    suggestedFix?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewSession: ReviewSessionCreateNestedOneWithoutCommentsInput
    author: UserCreateNestedOneWithoutCommentsInput
    parent?: CommentCreateNestedOneWithoutRepliesInput
  }

  export type CommentUncheckedCreateWithoutRepliesInput = {
    id?: string
    reviewSessionId: string
    authorId: string
    filePath: string
    lineNumber: number
    content: string
    parentId?: string | null
    resolvedAt?: Date | string | null
    isAI?: boolean
    severity?: string | null
    category?: string | null
    suggestedFix?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutRepliesInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
  }

  export type CommentCreateWithoutParentInput = {
    id?: string
    filePath: string
    lineNumber: number
    content: string
    resolvedAt?: Date | string | null
    isAI?: boolean
    severity?: string | null
    category?: string | null
    suggestedFix?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewSession: ReviewSessionCreateNestedOneWithoutCommentsInput
    author: UserCreateNestedOneWithoutCommentsInput
    replies?: CommentCreateNestedManyWithoutParentInput
  }

  export type CommentUncheckedCreateWithoutParentInput = {
    id?: string
    reviewSessionId: string
    authorId: string
    filePath: string
    lineNumber: number
    content: string
    resolvedAt?: Date | string | null
    isAI?: boolean
    severity?: string | null
    category?: string | null
    suggestedFix?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    replies?: CommentUncheckedCreateNestedManyWithoutParentInput
  }

  export type CommentCreateOrConnectWithoutParentInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput>
  }

  export type CommentCreateManyParentInputEnvelope = {
    data: CommentCreateManyParentInput | CommentCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type ReviewSessionUpsertWithoutCommentsInput = {
    update: XOR<ReviewSessionUpdateWithoutCommentsInput, ReviewSessionUncheckedUpdateWithoutCommentsInput>
    create: XOR<ReviewSessionCreateWithoutCommentsInput, ReviewSessionUncheckedCreateWithoutCommentsInput>
    where?: ReviewSessionWhereInput
  }

  export type ReviewSessionUpdateToOneWithWhereWithoutCommentsInput = {
    where?: ReviewSessionWhereInput
    data: XOR<ReviewSessionUpdateWithoutCommentsInput, ReviewSessionUncheckedUpdateWithoutCommentsInput>
  }

  export type ReviewSessionUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pullRequest?: PullRequestUpdateOneRequiredWithoutReviewSessionsNestedInput
    creator?: UserUpdateOneRequiredWithoutReviewSessionsNestedInput
  }

  export type ReviewSessionUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    pullRequestId?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    githubAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailNotificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedWorkspaces?: WorkspaceUpdateManyWithoutOwnerNestedInput
    memberships?: WorkspaceMemberUpdateManyWithoutUserNestedInput
    pullRequests?: PullRequestUpdateManyWithoutAuthorNestedInput
    reviewSessions?: ReviewSessionUpdateManyWithoutCreatorNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    assignedPRs?: PullRequestUpdateManyWithoutReviewerNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    githubAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailNotificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedWorkspaces?: WorkspaceUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: WorkspaceMemberUncheckedUpdateManyWithoutUserNestedInput
    pullRequests?: PullRequestUncheckedUpdateManyWithoutAuthorNestedInput
    reviewSessions?: ReviewSessionUncheckedUpdateManyWithoutCreatorNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    assignedPRs?: PullRequestUncheckedUpdateManyWithoutReviewerNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type CommentUpsertWithoutRepliesInput = {
    update: XOR<CommentUpdateWithoutRepliesInput, CommentUncheckedUpdateWithoutRepliesInput>
    create: XOR<CommentCreateWithoutRepliesInput, CommentUncheckedCreateWithoutRepliesInput>
    where?: CommentWhereInput
  }

  export type CommentUpdateToOneWithWhereWithoutRepliesInput = {
    where?: CommentWhereInput
    data: XOR<CommentUpdateWithoutRepliesInput, CommentUncheckedUpdateWithoutRepliesInput>
  }

  export type CommentUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    lineNumber?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAI?: BoolFieldUpdateOperationsInput | boolean
    severity?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedFix?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewSession?: ReviewSessionUpdateOneRequiredWithoutCommentsNestedInput
    author?: UserUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
  }

  export type CommentUncheckedUpdateWithoutRepliesInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewSessionId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    lineNumber?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAI?: BoolFieldUpdateOperationsInput | boolean
    severity?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedFix?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutParentInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutParentInput, CommentUncheckedUpdateWithoutParentInput>
    create: XOR<CommentCreateWithoutParentInput, CommentUncheckedCreateWithoutParentInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutParentInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutParentInput, CommentUncheckedUpdateWithoutParentInput>
  }

  export type CommentUpdateManyWithWhereWithoutParentInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutParentInput>
  }

  export type WorkspaceCreateWithoutSubscriptionInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.Plan
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedWorkspacesInput
    members?: WorkspaceMemberCreateNestedManyWithoutWorkspaceInput
    repositories?: RepositoryCreateNestedManyWithoutWorkspaceInput
    slackConfig?: WorkspaceSlackConfigCreateNestedOneWithoutWorkspaceInput
    auditLogs?: AuditLogCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.Plan
    ownerId: string
    createdAt?: Date | string
    members?: WorkspaceMemberUncheckedCreateNestedManyWithoutWorkspaceInput
    repositories?: RepositoryUncheckedCreateNestedManyWithoutWorkspaceInput
    slackConfig?: WorkspaceSlackConfigUncheckedCreateNestedOneWithoutWorkspaceInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutSubscriptionInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutSubscriptionInput, WorkspaceUncheckedCreateWithoutSubscriptionInput>
  }

  export type WorkspaceUpsertWithoutSubscriptionInput = {
    update: XOR<WorkspaceUpdateWithoutSubscriptionInput, WorkspaceUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<WorkspaceCreateWithoutSubscriptionInput, WorkspaceUncheckedCreateWithoutSubscriptionInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutSubscriptionInput, WorkspaceUncheckedUpdateWithoutSubscriptionInput>
  }

  export type WorkspaceUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedWorkspacesNestedInput
    members?: WorkspaceMemberUpdateManyWithoutWorkspaceNestedInput
    repositories?: RepositoryUpdateManyWithoutWorkspaceNestedInput
    slackConfig?: WorkspaceSlackConfigUpdateOneWithoutWorkspaceNestedInput
    auditLogs?: AuditLogUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: WorkspaceMemberUncheckedUpdateManyWithoutWorkspaceNestedInput
    repositories?: RepositoryUncheckedUpdateManyWithoutWorkspaceNestedInput
    slackConfig?: WorkspaceSlackConfigUncheckedUpdateOneWithoutWorkspaceNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    githubId?: string | null
    githubUsername?: string | null
    githubAccessToken?: string | null
    createdAt?: Date | string
    emailNotificationsEnabled?: boolean
    updatedAt?: Date | string
    ownedWorkspaces?: WorkspaceCreateNestedManyWithoutOwnerInput
    memberships?: WorkspaceMemberCreateNestedManyWithoutUserInput
    pullRequests?: PullRequestCreateNestedManyWithoutAuthorInput
    reviewSessions?: ReviewSessionCreateNestedManyWithoutCreatorInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    assignedPRs?: PullRequestCreateNestedManyWithoutReviewerInput
    auditLogs?: AuditLogCreateNestedManyWithoutActorInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    githubId?: string | null
    githubUsername?: string | null
    githubAccessToken?: string | null
    createdAt?: Date | string
    emailNotificationsEnabled?: boolean
    updatedAt?: Date | string
    ownedWorkspaces?: WorkspaceUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: WorkspaceMemberUncheckedCreateNestedManyWithoutUserInput
    pullRequests?: PullRequestUncheckedCreateNestedManyWithoutAuthorInput
    reviewSessions?: ReviewSessionUncheckedCreateNestedManyWithoutCreatorInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    assignedPRs?: PullRequestUncheckedCreateNestedManyWithoutReviewerInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutActorInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    githubAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailNotificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedWorkspaces?: WorkspaceUpdateManyWithoutOwnerNestedInput
    memberships?: WorkspaceMemberUpdateManyWithoutUserNestedInput
    pullRequests?: PullRequestUpdateManyWithoutAuthorNestedInput
    reviewSessions?: ReviewSessionUpdateManyWithoutCreatorNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    assignedPRs?: PullRequestUpdateManyWithoutReviewerNestedInput
    auditLogs?: AuditLogUpdateManyWithoutActorNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    githubAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailNotificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedWorkspaces?: WorkspaceUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: WorkspaceMemberUncheckedUpdateManyWithoutUserNestedInput
    pullRequests?: PullRequestUncheckedUpdateManyWithoutAuthorNestedInput
    reviewSessions?: ReviewSessionUncheckedUpdateManyWithoutCreatorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    assignedPRs?: PullRequestUncheckedUpdateManyWithoutReviewerNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutActorNestedInput
  }

  export type WorkspaceCreateWithoutSlackConfigInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.Plan
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedWorkspacesInput
    members?: WorkspaceMemberCreateNestedManyWithoutWorkspaceInput
    repositories?: RepositoryCreateNestedManyWithoutWorkspaceInput
    subscription?: SubscriptionCreateNestedOneWithoutWorkspaceInput
    auditLogs?: AuditLogCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutSlackConfigInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.Plan
    ownerId: string
    createdAt?: Date | string
    members?: WorkspaceMemberUncheckedCreateNestedManyWithoutWorkspaceInput
    repositories?: RepositoryUncheckedCreateNestedManyWithoutWorkspaceInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutWorkspaceInput
    auditLogs?: AuditLogUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutSlackConfigInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutSlackConfigInput, WorkspaceUncheckedCreateWithoutSlackConfigInput>
  }

  export type WorkspaceUpsertWithoutSlackConfigInput = {
    update: XOR<WorkspaceUpdateWithoutSlackConfigInput, WorkspaceUncheckedUpdateWithoutSlackConfigInput>
    create: XOR<WorkspaceCreateWithoutSlackConfigInput, WorkspaceUncheckedCreateWithoutSlackConfigInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutSlackConfigInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutSlackConfigInput, WorkspaceUncheckedUpdateWithoutSlackConfigInput>
  }

  export type WorkspaceUpdateWithoutSlackConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedWorkspacesNestedInput
    members?: WorkspaceMemberUpdateManyWithoutWorkspaceNestedInput
    repositories?: RepositoryUpdateManyWithoutWorkspaceNestedInput
    subscription?: SubscriptionUpdateOneWithoutWorkspaceNestedInput
    auditLogs?: AuditLogUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutSlackConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: WorkspaceMemberUncheckedUpdateManyWithoutWorkspaceNestedInput
    repositories?: RepositoryUncheckedUpdateManyWithoutWorkspaceNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutWorkspaceNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceCreateWithoutAuditLogsInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.Plan
    createdAt?: Date | string
    owner: UserCreateNestedOneWithoutOwnedWorkspacesInput
    members?: WorkspaceMemberCreateNestedManyWithoutWorkspaceInput
    repositories?: RepositoryCreateNestedManyWithoutWorkspaceInput
    subscription?: SubscriptionCreateNestedOneWithoutWorkspaceInput
    slackConfig?: WorkspaceSlackConfigCreateNestedOneWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.Plan
    ownerId: string
    createdAt?: Date | string
    members?: WorkspaceMemberUncheckedCreateNestedManyWithoutWorkspaceInput
    repositories?: RepositoryUncheckedCreateNestedManyWithoutWorkspaceInput
    subscription?: SubscriptionUncheckedCreateNestedOneWithoutWorkspaceInput
    slackConfig?: WorkspaceSlackConfigUncheckedCreateNestedOneWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutAuditLogsInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutAuditLogsInput, WorkspaceUncheckedCreateWithoutAuditLogsInput>
  }

  export type UserCreateWithoutAuditLogsInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    githubId?: string | null
    githubUsername?: string | null
    githubAccessToken?: string | null
    createdAt?: Date | string
    emailNotificationsEnabled?: boolean
    updatedAt?: Date | string
    ownedWorkspaces?: WorkspaceCreateNestedManyWithoutOwnerInput
    memberships?: WorkspaceMemberCreateNestedManyWithoutUserInput
    pullRequests?: PullRequestCreateNestedManyWithoutAuthorInput
    reviewSessions?: ReviewSessionCreateNestedManyWithoutCreatorInput
    comments?: CommentCreateNestedManyWithoutAuthorInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    assignedPRs?: PullRequestCreateNestedManyWithoutReviewerInput
  }

  export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    githubId?: string | null
    githubUsername?: string | null
    githubAccessToken?: string | null
    createdAt?: Date | string
    emailNotificationsEnabled?: boolean
    updatedAt?: Date | string
    ownedWorkspaces?: WorkspaceUncheckedCreateNestedManyWithoutOwnerInput
    memberships?: WorkspaceMemberUncheckedCreateNestedManyWithoutUserInput
    pullRequests?: PullRequestUncheckedCreateNestedManyWithoutAuthorInput
    reviewSessions?: ReviewSessionUncheckedCreateNestedManyWithoutCreatorInput
    comments?: CommentUncheckedCreateNestedManyWithoutAuthorInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    assignedPRs?: PullRequestUncheckedCreateNestedManyWithoutReviewerInput
  }

  export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
  }

  export type WorkspaceUpsertWithoutAuditLogsInput = {
    update: XOR<WorkspaceUpdateWithoutAuditLogsInput, WorkspaceUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<WorkspaceCreateWithoutAuditLogsInput, WorkspaceUncheckedCreateWithoutAuditLogsInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutAuditLogsInput, WorkspaceUncheckedUpdateWithoutAuditLogsInput>
  }

  export type WorkspaceUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutOwnedWorkspacesNestedInput
    members?: WorkspaceMemberUpdateManyWithoutWorkspaceNestedInput
    repositories?: RepositoryUpdateManyWithoutWorkspaceNestedInput
    subscription?: SubscriptionUpdateOneWithoutWorkspaceNestedInput
    slackConfig?: WorkspaceSlackConfigUpdateOneWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    ownerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: WorkspaceMemberUncheckedUpdateManyWithoutWorkspaceNestedInput
    repositories?: RepositoryUncheckedUpdateManyWithoutWorkspaceNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutWorkspaceNestedInput
    slackConfig?: WorkspaceSlackConfigUncheckedUpdateOneWithoutWorkspaceNestedInput
  }

  export type UserUpsertWithoutAuditLogsInput = {
    update: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    githubAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailNotificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedWorkspaces?: WorkspaceUpdateManyWithoutOwnerNestedInput
    memberships?: WorkspaceMemberUpdateManyWithoutUserNestedInput
    pullRequests?: PullRequestUpdateManyWithoutAuthorNestedInput
    reviewSessions?: ReviewSessionUpdateManyWithoutCreatorNestedInput
    comments?: CommentUpdateManyWithoutAuthorNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    assignedPRs?: PullRequestUpdateManyWithoutReviewerNestedInput
  }

  export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubId?: NullableStringFieldUpdateOperationsInput | string | null
    githubUsername?: NullableStringFieldUpdateOperationsInput | string | null
    githubAccessToken?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailNotificationsEnabled?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ownedWorkspaces?: WorkspaceUncheckedUpdateManyWithoutOwnerNestedInput
    memberships?: WorkspaceMemberUncheckedUpdateManyWithoutUserNestedInput
    pullRequests?: PullRequestUncheckedUpdateManyWithoutAuthorNestedInput
    reviewSessions?: ReviewSessionUncheckedUpdateManyWithoutCreatorNestedInput
    comments?: CommentUncheckedUpdateManyWithoutAuthorNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    assignedPRs?: PullRequestUncheckedUpdateManyWithoutReviewerNestedInput
  }

  export type WorkspaceCreateManyOwnerInput = {
    id?: string
    name: string
    slug: string
    plan?: $Enums.Plan
    createdAt?: Date | string
  }

  export type WorkspaceMemberCreateManyUserInput = {
    id?: string
    workspaceId: string
    role?: $Enums.MemberRole
    joinedAt?: Date | string
  }

  export type PullRequestCreateManyAuthorInput = {
    id?: string
    repositoryId: string
    githubPrNumber: number
    title: string
    body?: string | null
    status?: $Enums.PRStatus
    headBranch: string
    baseBranch: string
    diffUrl?: string | null
    aiSummary?: string | null
    securityScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewerId?: string | null
  }

  export type ReviewSessionCreateManyCreatorInput = {
    id?: string
    pullRequestId: string
    isActive?: boolean
    createdAt?: Date | string
    endedAt?: Date | string | null
  }

  export type CommentCreateManyAuthorInput = {
    id?: string
    reviewSessionId: string
    filePath: string
    lineNumber: number
    content: string
    parentId?: string | null
    resolvedAt?: Date | string | null
    isAI?: boolean
    severity?: string | null
    category?: string | null
    suggestedFix?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    type: string
    title: string
    body: string
    link?: string | null
    isRead?: boolean
    createdAt?: Date | string
  }

  export type PullRequestCreateManyReviewerInput = {
    id?: string
    repositoryId: string
    githubPrNumber: number
    title: string
    body?: string | null
    authorId: string
    status?: $Enums.PRStatus
    headBranch: string
    baseBranch: string
    diffUrl?: string | null
    aiSummary?: string | null
    securityScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuditLogCreateManyActorInput = {
    id?: string
    workspaceId: string
    action: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type WorkspaceUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: WorkspaceMemberUpdateManyWithoutWorkspaceNestedInput
    repositories?: RepositoryUpdateManyWithoutWorkspaceNestedInput
    subscription?: SubscriptionUpdateOneWithoutWorkspaceNestedInput
    slackConfig?: WorkspaceSlackConfigUpdateOneWithoutWorkspaceNestedInput
    auditLogs?: AuditLogUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: WorkspaceMemberUncheckedUpdateManyWithoutWorkspaceNestedInput
    repositories?: RepositoryUncheckedUpdateManyWithoutWorkspaceNestedInput
    subscription?: SubscriptionUncheckedUpdateOneWithoutWorkspaceNestedInput
    slackConfig?: WorkspaceSlackConfigUncheckedUpdateOneWithoutWorkspaceNestedInput
    auditLogs?: AuditLogUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    plan?: EnumPlanFieldUpdateOperationsInput | $Enums.Plan
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutMembersNestedInput
  }

  export type WorkspaceMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PullRequestUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubPrNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPRStatusFieldUpdateOperationsInput | $Enums.PRStatus
    headBranch?: StringFieldUpdateOperationsInput | string
    baseBranch?: StringFieldUpdateOperationsInput | string
    diffUrl?: NullableStringFieldUpdateOperationsInput | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    securityScore?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repository?: RepositoryUpdateOneRequiredWithoutPullRequestsNestedInput
    reviewer?: UserUpdateOneWithoutAssignedPRsNestedInput
    reviewSessions?: ReviewSessionUpdateManyWithoutPullRequestNestedInput
    securityFindings?: SecurityFindingUpdateManyWithoutPullRequestNestedInput
  }

  export type PullRequestUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    repositoryId?: StringFieldUpdateOperationsInput | string
    githubPrNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPRStatusFieldUpdateOperationsInput | $Enums.PRStatus
    headBranch?: StringFieldUpdateOperationsInput | string
    baseBranch?: StringFieldUpdateOperationsInput | string
    diffUrl?: NullableStringFieldUpdateOperationsInput | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    securityScore?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewerId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewSessions?: ReviewSessionUncheckedUpdateManyWithoutPullRequestNestedInput
    securityFindings?: SecurityFindingUncheckedUpdateManyWithoutPullRequestNestedInput
  }

  export type PullRequestUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    repositoryId?: StringFieldUpdateOperationsInput | string
    githubPrNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPRStatusFieldUpdateOperationsInput | $Enums.PRStatus
    headBranch?: StringFieldUpdateOperationsInput | string
    baseBranch?: StringFieldUpdateOperationsInput | string
    diffUrl?: NullableStringFieldUpdateOperationsInput | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    securityScore?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewSessionUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    pullRequest?: PullRequestUpdateOneRequiredWithoutReviewSessionsNestedInput
    comments?: CommentUpdateManyWithoutReviewSessionNestedInput
  }

  export type ReviewSessionUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    pullRequestId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: CommentUncheckedUpdateManyWithoutReviewSessionNestedInput
  }

  export type ReviewSessionUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    pullRequestId?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CommentUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    lineNumber?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAI?: BoolFieldUpdateOperationsInput | boolean
    severity?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedFix?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewSession?: ReviewSessionUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewSessionId?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    lineNumber?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAI?: BoolFieldUpdateOperationsInput | boolean
    severity?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedFix?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutAuthorInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewSessionId?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    lineNumber?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAI?: BoolFieldUpdateOperationsInput | boolean
    severity?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedFix?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    link?: NullableStringFieldUpdateOperationsInput | string | null
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PullRequestUpdateWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubPrNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPRStatusFieldUpdateOperationsInput | $Enums.PRStatus
    headBranch?: StringFieldUpdateOperationsInput | string
    baseBranch?: StringFieldUpdateOperationsInput | string
    diffUrl?: NullableStringFieldUpdateOperationsInput | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    securityScore?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    repository?: RepositoryUpdateOneRequiredWithoutPullRequestsNestedInput
    author?: UserUpdateOneRequiredWithoutPullRequestsNestedInput
    reviewSessions?: ReviewSessionUpdateManyWithoutPullRequestNestedInput
    securityFindings?: SecurityFindingUpdateManyWithoutPullRequestNestedInput
  }

  export type PullRequestUncheckedUpdateWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    repositoryId?: StringFieldUpdateOperationsInput | string
    githubPrNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    status?: EnumPRStatusFieldUpdateOperationsInput | $Enums.PRStatus
    headBranch?: StringFieldUpdateOperationsInput | string
    baseBranch?: StringFieldUpdateOperationsInput | string
    diffUrl?: NullableStringFieldUpdateOperationsInput | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    securityScore?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewSessions?: ReviewSessionUncheckedUpdateManyWithoutPullRequestNestedInput
    securityFindings?: SecurityFindingUncheckedUpdateManyWithoutPullRequestNestedInput
  }

  export type PullRequestUncheckedUpdateManyWithoutReviewerInput = {
    id?: StringFieldUpdateOperationsInput | string
    repositoryId?: StringFieldUpdateOperationsInput | string
    githubPrNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    status?: EnumPRStatusFieldUpdateOperationsInput | $Enums.PRStatus
    headBranch?: StringFieldUpdateOperationsInput | string
    baseBranch?: StringFieldUpdateOperationsInput | string
    diffUrl?: NullableStringFieldUpdateOperationsInput | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    securityScore?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutActorInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceMemberCreateManyWorkspaceInput = {
    id?: string
    userId: string
    role?: $Enums.MemberRole
    joinedAt?: Date | string
  }

  export type RepositoryCreateManyWorkspaceInput = {
    id?: string
    githubRepoId: string
    name: string
    fullName: string
    defaultBranch?: string
    isPrivate?: boolean
    createdAt?: Date | string
  }

  export type AuditLogCreateManyWorkspaceInput = {
    id?: string
    actorId: string
    action: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type WorkspaceMemberUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMembershipsNestedInput
  }

  export type WorkspaceMemberUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceMemberUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumMemberRoleFieldUpdateOperationsInput | $Enums.MemberRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RepositoryUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubRepoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    defaultBranch?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pullRequests?: PullRequestUpdateManyWithoutRepositoryNestedInput
  }

  export type RepositoryUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubRepoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    defaultBranch?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pullRequests?: PullRequestUncheckedUpdateManyWithoutRepositoryNestedInput
  }

  export type RepositoryUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubRepoId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    defaultBranch?: StringFieldUpdateOperationsInput | string
    isPrivate?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    actor?: UserUpdateOneRequiredWithoutAuditLogsNestedInput
  }

  export type AuditLogUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    actorId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PullRequestCreateManyRepositoryInput = {
    id?: string
    githubPrNumber: number
    title: string
    body?: string | null
    authorId: string
    status?: $Enums.PRStatus
    headBranch: string
    baseBranch: string
    diffUrl?: string | null
    aiSummary?: string | null
    securityScore?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviewerId?: string | null
  }

  export type PullRequestUpdateWithoutRepositoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubPrNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPRStatusFieldUpdateOperationsInput | $Enums.PRStatus
    headBranch?: StringFieldUpdateOperationsInput | string
    baseBranch?: StringFieldUpdateOperationsInput | string
    diffUrl?: NullableStringFieldUpdateOperationsInput | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    securityScore?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutPullRequestsNestedInput
    reviewer?: UserUpdateOneWithoutAssignedPRsNestedInput
    reviewSessions?: ReviewSessionUpdateManyWithoutPullRequestNestedInput
    securityFindings?: SecurityFindingUpdateManyWithoutPullRequestNestedInput
  }

  export type PullRequestUncheckedUpdateWithoutRepositoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubPrNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    status?: EnumPRStatusFieldUpdateOperationsInput | $Enums.PRStatus
    headBranch?: StringFieldUpdateOperationsInput | string
    baseBranch?: StringFieldUpdateOperationsInput | string
    diffUrl?: NullableStringFieldUpdateOperationsInput | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    securityScore?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewerId?: NullableStringFieldUpdateOperationsInput | string | null
    reviewSessions?: ReviewSessionUncheckedUpdateManyWithoutPullRequestNestedInput
    securityFindings?: SecurityFindingUncheckedUpdateManyWithoutPullRequestNestedInput
  }

  export type PullRequestUncheckedUpdateManyWithoutRepositoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubPrNumber?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    authorId?: StringFieldUpdateOperationsInput | string
    status?: EnumPRStatusFieldUpdateOperationsInput | $Enums.PRStatus
    headBranch?: StringFieldUpdateOperationsInput | string
    baseBranch?: StringFieldUpdateOperationsInput | string
    diffUrl?: NullableStringFieldUpdateOperationsInput | string | null
    aiSummary?: NullableStringFieldUpdateOperationsInput | string | null
    securityScore?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewSessionCreateManyPullRequestInput = {
    id?: string
    createdBy: string
    isActive?: boolean
    createdAt?: Date | string
    endedAt?: Date | string | null
  }

  export type SecurityFindingCreateManyPullRequestInput = {
    id?: string
    filePath: string
    lineNumber: number
    severity: string
    category: string
    cweId?: string | null
    description: string
    remediation: string
    isFalsePositive?: boolean
    createdAt?: Date | string
  }

  export type ReviewSessionUpdateWithoutPullRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    creator?: UserUpdateOneRequiredWithoutReviewSessionsNestedInput
    comments?: CommentUpdateManyWithoutReviewSessionNestedInput
  }

  export type ReviewSessionUncheckedUpdateWithoutPullRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: CommentUncheckedUpdateManyWithoutReviewSessionNestedInput
  }

  export type ReviewSessionUncheckedUpdateManyWithoutPullRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SecurityFindingUpdateWithoutPullRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    lineNumber?: IntFieldUpdateOperationsInput | number
    severity?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    cweId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    remediation?: StringFieldUpdateOperationsInput | string
    isFalsePositive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityFindingUncheckedUpdateWithoutPullRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    lineNumber?: IntFieldUpdateOperationsInput | number
    severity?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    cweId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    remediation?: StringFieldUpdateOperationsInput | string
    isFalsePositive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SecurityFindingUncheckedUpdateManyWithoutPullRequestInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    lineNumber?: IntFieldUpdateOperationsInput | number
    severity?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    cweId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    remediation?: StringFieldUpdateOperationsInput | string
    isFalsePositive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyReviewSessionInput = {
    id?: string
    authorId: string
    filePath: string
    lineNumber: number
    content: string
    parentId?: string | null
    resolvedAt?: Date | string | null
    isAI?: boolean
    severity?: string | null
    category?: string | null
    suggestedFix?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateWithoutReviewSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    lineNumber?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAI?: BoolFieldUpdateOperationsInput | boolean
    severity?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedFix?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: UserUpdateOneRequiredWithoutCommentsNestedInput
    parent?: CommentUpdateOneWithoutRepliesNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateWithoutReviewSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    lineNumber?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAI?: BoolFieldUpdateOperationsInput | boolean
    severity?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedFix?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutReviewSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    lineNumber?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAI?: BoolFieldUpdateOperationsInput | boolean
    severity?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedFix?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyParentInput = {
    id?: string
    reviewSessionId: string
    authorId: string
    filePath: string
    lineNumber: number
    content: string
    resolvedAt?: Date | string | null
    isAI?: boolean
    severity?: string | null
    category?: string | null
    suggestedFix?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommentUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    lineNumber?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAI?: BoolFieldUpdateOperationsInput | boolean
    severity?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedFix?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewSession?: ReviewSessionUpdateOneRequiredWithoutCommentsNestedInput
    author?: UserUpdateOneRequiredWithoutCommentsNestedInput
    replies?: CommentUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewSessionId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    lineNumber?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAI?: BoolFieldUpdateOperationsInput | boolean
    severity?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedFix?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    replies?: CommentUncheckedUpdateManyWithoutParentNestedInput
  }

  export type CommentUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewSessionId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    lineNumber?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    resolvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isAI?: BoolFieldUpdateOperationsInput | boolean
    severity?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    suggestedFix?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
