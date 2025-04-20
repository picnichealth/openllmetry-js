import { InitializeOptions, ValidatedInitializeOptions } from "../interfaces";
import { InitializationError } from "../errors";

export const validateConfiguration: (options: InitializeOptions) => asserts options is ValidatedInitializeOptions = (options) => {
  const {
    apiKey,
    baseUrl,
    appName,
    traceloopSyncEnabled,
    traceloopSyncMaxRetries,
    traceloopSyncPollingInterval,
    traceloopSyncDevPollingInterval,
  } = options;
  if (apiKey && typeof apiKey !== "string") {
    throw new InitializationError('"apiKey" must be a string');
  }

  if (!baseUrl || typeof baseUrl !== "string") {
    throw new InitializationError('"baseUrl" must be a string');
  }

  if (!appName || typeof appName !== "string") {
    throw new InitializationError('"appName" must be a string');
  }

  if (traceloopSyncEnabled) {
    if (
      typeof traceloopSyncMaxRetries !== "number" ||
      traceloopSyncMaxRetries <= 0
    ) {
      throw new InitializationError(
        '"traceloopSyncMaxRetries" must be an integer greater than 0.',
      );
    }

    if (
      typeof traceloopSyncPollingInterval !== "number" ||
      traceloopSyncPollingInterval <= 0
    ) {
      throw new InitializationError(
        '"traceloopSyncPollingInterval" must be an integer greater than 0.',
      );
    }

    if (
      typeof traceloopSyncDevPollingInterval !== "number" ||
      traceloopSyncDevPollingInterval <= 0
    ) {
      throw new InitializationError(
        '"traceloopSyncDevPollingInterval" must be an integer greater than 0.',
      );
    }
  }
};
