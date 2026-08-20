"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";

interface ImageWithFallbackProps extends Omit<ImageProps, "src" | "onError"> {
  src: string;
  label?: string;
}

export default function ImageWithFallback({
  src,
  alt,
  label,
  className = "",
  fill,
  ...rest
}: ImageWithFallbackProps) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        className={`flex flex-col items-center justify-center gap-2 overflow-hidden bg-gradient-to-br from-ink-800 via-clay-700 to-ink-900 ${
          fill ? "absolute inset-0 h-full w-full" : "relative h-full w-full"
        } ${className}`}
        role="img"
        aria-label={alt as string}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          className="h-8 w-8 text-gold-300/80"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 4.5h18a1.5 1.5 0 011.5 1.5v12a1.5 1.5 0 01-1.5 1.5H3A1.5 1.5 0 011.5 18V6A1.5 1.5 0 013 4.5zm12.75 6a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
          />
        </svg>
        <span className="px-4 text-center text-xs font-medium tracking-wide text-sand-100/90">
          {label ?? alt}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      fill={fill}
      onError={() => setErrored(true)}
      {...rest}
    />
  );
}
