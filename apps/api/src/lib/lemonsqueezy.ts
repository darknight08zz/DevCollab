import { lemonSqueezySetup } from "@lemonsqueezy/lemonsqueezy.js";
import { logger } from "./logger";

const apiKey = process.env.LEMON_SQUEEZY_API_KEY;

if (!apiKey) {
  logger.warn("LEMON_SQUEEZY_API_KEY is not set. Billing features will be disabled.");
}

lemonSqueezySetup({
  apiKey,
  onError: (error) => {
    logger.error({ error }, "Lemon Squeezy error");
  },
});

export * from "@lemonsqueezy/lemonsqueezy.js";
