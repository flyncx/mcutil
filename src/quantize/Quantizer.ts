import type { QuantizerResult } from "./QuantizerResult";

export abstract class Quantizer {
    abstract quantize(): QuantizerResult;
} 