import { defineKeyframes } from "@chakra-ui/react";



export const keyframes = defineKeyframes({
  bobbing: {
    "0%, 100%": { transform: "translateY(0)" },
    "50%": { transform: "translateY(-7px)" }
  },
  "bobbing-pulse": {
    "0%, 100%": { 
      // transform: "translate3d(0, 0, 0)"
      transition: "marginTop 1s ease-out",
      marginTop: "0px"
    },
    "50%": { 
      // transform: "translate3d(0, -5px, 0)"
      transition: "marginTop 1s ease-out",
      // marginTop: "0px"
      marginTop: "-5px"
      // marginTop: "-10px"
    }
  },
  scroll: {
    "0%": { transform: "translateX(0)" },
    "100%": { transform: "translateX(-50%)" }
  },
  "fade-in": {
    "0%": { opacity: "0" },
    "100%": { opacity: "1" }
  },
  "fade-out": {
    "0%": { opacity: "1" },
    "100%": { opacity: "0" }
  },
  "slide-from-bottom-full": {
    "0%": { 
      transform: "translateY(100%)",
      opacity: "0"
    },
    "100%": { 
      transform: "translateY(0)",
      opacity: "1"
    }
  },
  "slide-out": {
    "0%": { 
      transform: "translateY(0%)"
    },
    "100%": { 
      transform: "translateY(-15%)"
    }
  },
  "slide-in": {
    "0%": { 
      transform: "translateY(-10%)"
    },
    "100%": { 
      transform: "translateY(0%)"
    }
  },
  "trace-border": {
    "0%": { 
      strokeDashoffset: "0"
    },
    "100%": { 
      strokeDashoffset: "100"
    }
  },
  "trace-border-0": {
    "0%": { 
      strokeDashoffset: "0"
    },
    "100%": { 
      strokeDashoffset: "100"
    }
  },
  "trace-border-1": {
    "0%": { 
      strokeDashoffset: "25"
    },
    "100%": { 
      strokeDashoffset: "125"
    }
  },
  "trace-border-2": {
    "0%": { 
      strokeDashoffset: "50"
    },
    "100%": { 
      strokeDashoffset: "150"
    }
  },
  "trace-border-3": {
    "0%": { 
      strokeDashoffset: "75"
    },
    "100%": { 
      strokeDashoffset: "175"
    }
  }
});