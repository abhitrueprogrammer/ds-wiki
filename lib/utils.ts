import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

import axios, { type AxiosError } from "axios";
import { ApiError } from "next/dist/server/api-utils";

export function handleAPIError(err: unknown): ApiError {
  if (axios.isAxiosError(err)) {
    const error = err as AxiosError;
    const response = error.response;
    const data = response?.data;
    if (data) {
      const msg = (data as { message: string })?.message;

      if (msg) {

        return new ApiError(response.status, toSentenceCase(msg));
      }
    }
  }
  return new ApiError(500, "Something went wrong");
}

export function toSentenceCase(input: string): string {
  const trimmedInput = input.trim();
  if (trimmedInput.length === 0) {
    return "";
  }

  const sentences = trimmedInput.split(/(?<=[.!?])\s+/);

  const sentenceCased = sentences.map((sentence) => {
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
  });

  return sentenceCased.join(" ");
}
