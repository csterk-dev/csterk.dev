import { defineSlotRecipe } from "@chakra-ui/react"

export const sectionSlotRecipe = defineSlotRecipe({
  className: "section",
  slots: ["root", "container", "children", "content", "header", "title", "description", "body", "footer"],
  // Base variant is centered.
  base: {
    root: {
      maxW: "8xl",
      mx: "auto",
      width: "100%",
      position: "relative",
      py: {
        base: 10,
        md: 24
      }
    },
    container: {
      display: "inline-flex",
      flexDir: "column",
      justifyContent: "space-between",
      width: "100%"
    },
    children: {
      alignItems: "center",
      display: "flex",
      width: "100%"
    },
    content: {
      display: "inline-flex",
      flexDir: "column",
      width: "100%"
    },
    header: {
      display: "flex",
      flexDir: "column",
      gap: {
        base: 3,
        md: 5
      }
    },
    title: {
      color: "text.primary",
      fontFamily: "heading",
      textAlign: "center"
    },
    description: {
      color: "text.muted",
      fontSize: {
        base: "lg",
        md: "xl"
      },
      lineHeight: "moderate",
      textAlign: "center"
    },
    body: {
      mt: {
        base: 3,
        md: 5
      },
      display: "block",
      w: "100%"
    },
    footer: {
      mt: {
        base: "32px",
        md: "64px"
      }
    }
  },

  variants: {
    /** The text alignment. */
    contentAlign: {
      center: {
        content: {
          alignItems: "center"
        },
        header: {
          alignItems: "center"
        },
        title: {
          textAlign: "center"
        },
        description: {
          textAlign: "center"
        }
      },
      left: {
        content: {
          alignItems: "flex-start"
        },
        header: {
          alignItems: "flex-start"
        },
        title: {
          textAlign: "start"
        },
        description: {
          textAlign: "start"
        }
      },
      right: {
        content: {
          alignItems: "flex-end"
        },
        header: {
          alignItems: "flex-end"
        },
        title: {
          textAlign: "end"
        },
        description: {
          textAlign: "end"
        }
      }
    },
    /** Image placement relative to the section. */
    childrenPlacement: {
      top: {
        container: {
          alignItems: "center",
          flexDir: "column-reverse"
        },
        children: {
          flexDir: "column",
          justifyContent: "center",
          maxW: "100%",
          marginBottom: {
            base: "32px",
            md: "64px"
          }
        }
      },
      bottom: {
        container: {
          alignItems: "center",
          flexDir: "column"
        },
        children: {
          flexDir: "column",
          justifyContent: "center",
          maxW: "100%",
          marginTop: {
            base: "32px",
            md: "64px"
          }
        }
      },
      left: {
        container: {
          flexDir: "row-reverse",
          alignItems: "center",
          gap: 5
        },
        children: {
          maxW: "100%",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          marginTop: 0
        }
      },
      right: {
        container: {
          flexDir: "row",
          alignItems: "center",
          gap: 5
        },
        children: {
          maxW: "100%",
          alignItems: "flex-end",
          justifyContent: "center",
          marginTop: 0
        }
      }
    },
    textColor: {
      light: {
        title: {
          color: "text.primary"
        },
        description: {
          color: "text.secondary"
        }
      },
      dark: {
        title: {
          color: "text.inverse"
        },
        description: {
          color: "text.inverse/90"
        }
      }
    },
    headingTextStyle: {
      section: {
        title: {
          textStyle: "heading/section"
        }
      },
      "sub-section": {
        title: {
          textStyle: "heading/sub-section"
        }
      }
    },
    descriptionTextStyle: {
      normal: {
        description: {
          fontSize: {
            base: "md",
            md: "lg"
          }
        }
      },
      large: {
        description: {
          fontSize: {
            base: "lg",
            md: "xl"
          }
        }
      }
    },
    childrenToContentRatio: {
      "1/1": {},
      "2/3": {
        children: {
          maxW: "560px"
        },
        content: {
          maxW: "840px"
        }
      }
    }
  },
  defaultVariants: {
    textColor: "light",
    childrenPlacement: "left",
    contentAlign: "left",
    headingTextStyle: "section",
    descriptionTextStyle: "normal",
    childrenToContentRatio: "1/1"
  }
})