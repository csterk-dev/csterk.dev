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
  "trace-border": { value: "trace-border 4s linear infinite" },
  "trace-border-0": { value: "trace-border-0 10s linear infinite" },
  "trace-border-1": { value: "trace-border-1 10s linear infinite" },
  "trace-border-2": { value: "trace-border-2 10s linear infinite" },
  "trace-border-3": { value: "trace-border-3 10s linear infinite" }
})