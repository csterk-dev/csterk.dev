"use client"

import { Box, defineStyle, Field, Input, type InputProps, useControllableState } from "@chakra-ui/react"
import { ChangeEvent, FocusEvent, forwardRef, ReactNode, useCallback, useRef, useState } from "react"

export interface FloatingLabelInputProps extends InputProps {
  label: ReactNode
  value?: string | undefined;
  defaultValue?: string | undefined;
  onValueChange?: ((value: string) => void) | undefined;
  leftIcon?: ReactNode;
  error?: string | undefined;
}

export const FloatingLabelInput = forwardRef<HTMLInputElement, FloatingLabelInputProps>((props, ref) => {
  const { label, onValueChange, value, defaultValue = "", leftIcon, error, onChange, onBlur, ...rest } = props
  const internalRef = useRef<HTMLInputElement>(null)
  
  // Combine external ref with internal ref
  const inputRef = (ref || internalRef) as React.RefObject<HTMLInputElement>

  // Determine if component is in controlled mode
  const isControlled = value !== undefined || onValueChange !== undefined
  
  // Use controllable state only in controlled mode
  const [inputState, setInputState] = useControllableState({
    defaultValue: isControlled ? defaultValue : "",
    onChange: isControlled ? onValueChange : undefined,
    value: isControlled ? value : undefined
  })

  // Track value for floating label animation (for both controlled and uncontrolled modes)
  const [displayValue, setDisplayValue] = useState(defaultValue || "")

  const [focused, setFocused] = useState(false)
  
  // Determine if label should float based on value or focus
  const currentValue = isControlled ? inputState : displayValue
  const shouldFloat = currentValue.length > 0 || focused


  const handleOnBlur = useCallback((e: FocusEvent<HTMLInputElement>) => {
    onBlur?.(e)
    setFocused(false)
    // Update display value for floating label
    if (!isControlled && inputRef.current) {
      setDisplayValue(inputRef.current.value || "")
    }
  }, [inputRef, isControlled, onBlur]);


  const handleOnChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    if (isControlled) {
      setInputState(newValue)
    } else {
      setDisplayValue(newValue)
    }
    // Always call the register's onChange (from React Hook Form)
    onChange?.(e)
  }, [isControlled, onChange, setInputState])


  const handleOnFocus = useCallback((e: FocusEvent<HTMLInputElement>) => {
    props.onFocus?.(e)
    setFocused(true)
  }, [props]);

  return (
    <Field.Root invalid={!!error}>
      <Box pos="relative" w="full">
        <Box alignItems="center" display="flex" pos="relative">
          {leftIcon ?
            <Box
              alignItems="center"
              display="flex"
              left="3"
              pointerEvents="none"
              pos="absolute"
              zIndex={1}
            >
              {leftIcon}
            </Box> :
            null
          }
          <Input
            {...rest}
            data-float={shouldFloat || undefined}
            {...(isControlled ? { value: inputState } : { defaultValue })}
            pl={leftIcon ? "10" : undefined}
            ref={inputRef}
            onBlur={handleOnBlur}
            onChange={handleOnChange}
            onFocus={handleOnFocus}
          />
        </Box>
        <Field.Label
          css={floatingStyles}
          data-float={shouldFloat || undefined}
          data-has-icon={leftIcon ? true : undefined}
        >
          {label}
        </Field.Label>
      </Box>
      {error ? <Field.ErrorText>{error}</Field.ErrorText> : null}
    </Field.Root>
  )
})

FloatingLabelInput.displayName = "FloatingLabelInput"

const floatingStyles = defineStyle({
  pos: "absolute",
  bg: "bg",
  px: "0.5",
  top: "2.5",
  insetStart: "3",
  fontWeight: "normal",
  pointerEvents: "none",
  transition: "position",
  color: "fg.muted",
  "&[data-float]": {
    top: "-3",
    insetStart: "2",
    color: "fg"
  },
  "&[data-has-icon]": {
    insetStart: "10"
  },
  "&[data-has-icon][data-float]": {
    insetStart: "2",
    color: "fg"
  }
})

