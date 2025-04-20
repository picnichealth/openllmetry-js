import { initInstrumentations } from "./tracing";

export * from "./errors";
export type {
  InitializeOptions,
  ValidatedInitializeOptions,
  TraceloopClientOptions,
  AnnotationCreateOptions,
} from "./interfaces";
export { TraceloopClient } from "./client/traceloop-client";
export {
  initialize,
  getClient,
  initializeClient,
  applyDefaultOptions,
  validateConfiguration,
} from "./configuration";
export {
  forceFlush,
  initializeTraceExporter as setupTraceloopTraceExporter,
  initializeSpanProcessor as setupTraceloopSpanProcessor,
} from "./tracing";
export * from "./tracing/decorators";
export * from "./tracing/manual";
export * from "./tracing/association";
export * from "./tracing/custom-metric";
export * from "./prompts";

initInstrumentations();
