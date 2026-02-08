import { defineTokens } from "@chakra-ui/react";


export const animations = defineTokens.animations({
  bobbing: { value: "bobbing 2s infinite ease-in-out" },
  infiniteScroll: { value: "scroll 30s linear infinite" },
  "icon-fade-in": { value: "fade-in 0.2s ease-out" },
  "icon-fade-out": { value: "fade-out 0.2s ease-out forwards" },
  "fade-in": { value: "fade-in 0.6s ease-out" },
  "fade-out": { value: "fade-out 0.6s ease-out forwards" },
  "slide-from-bottom-fade": { value: "slide-from-bottom-full 0.6s ease-out, fade-in 0.6s ease-out" },
  "slide-from-left-fade": { value: "slide-from-left-full 0.6s ease-out, fade-in 0.6s ease-out" },
  "slide-from-right-fade": { value: "slide-from-right-full 0.6s ease-out, fade-in 0.6s ease-out" },
  "fade-in-permanent": { value: "fade-in 0.5s ease-in 0.1s forwards" },
  "trace-border": { value: "trace-border 6s linear infinite" },
  "trace-border-0": { value: "trace-border-0 20s linear infinite" },
  "trace-border-1": { value: "trace-border-1 10s linear infinite" },
  "trace-border-2": { value: "trace-border-2 12s linear infinite" },
  "trace-border-3": { value: "trace-border-3 12s linear infinite" },
  "trace-line-0": { value: "trace-line-0 2s linear forwards" },
  "trace-line-1": { value: "trace-line-1 2s linear 0.2s forwards" },
  "trace-line-2": { value: "trace-line-2 2s linear 0.4s forwards" },
  "trace-line-3": { value: "trace-line-3 2s linear 0.6s forwards" },
  "trace-line-4": { value: "trace-line-4 2s linear 0.8s forwards" },
  "trace-line-5": { value: "trace-line-5 2s linear 1s forwards" },
  "trace-line-6": { value: "trace-line-6 2s linear 1.2s forwards" },
  "trace-line-7": { value: "trace-line-7 2s linear 1.4s forwards" },
  "trace-line-8": { value: "trace-line-8 2s linear 1.6s forwards" },
  "trace-line-9": { value: "trace-line-9 2s linear 1.8s forwards" }
})