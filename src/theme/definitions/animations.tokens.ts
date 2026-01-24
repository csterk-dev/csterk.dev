import { defineTokens } from "@chakra-ui/react";


export const animations = defineTokens.animations({
  bobbing: { value: "bobbing 2s infinite ease-in-out" },
  infiniteScroll: { value: "scroll 30s linear infinite" },
  "fade-in": { value: "fade-in 0.6s ease-out" },
  "slide-from-bottom-fade": { value: "slide-from-bottom-full 0.6s ease-out, fade-in 0.6s ease-out" },
  "slide-from-left-fade": { value: "slide-from-left-full 0.6s ease-out, fade-in 0.6s ease-out" },
  "slide-from-right-fade": { value: "slide-from-right-full 0.6s ease-out, fade-in 0.6s ease-out" },
  "fade-in-permanent": { value: "fade-in 0.5s ease-in 0.1s forwards" },
  "trace-border": { value: "trace-border 3s linear infinite" },
  "trace-border-0": { value: "trace-border-0 3s linear infinite" },
  "trace-border-1": { value: "trace-border-1 3s linear infinite" },
  "trace-border-2": { value: "trace-border-2 3s linear infinite" },
  "trace-border-3": { value: "trace-border-3 3s linear infinite" }
})