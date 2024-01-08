import {
  Button,
  chakra,
  useColorModeValue,
  useRadio,
  UseRadioProps,
  useTheme,
  VisuallyHidden,
} from '@chakra-ui/react'
import { transparentize } from '@chakra-ui/theme-tools'

export type SizePickerButtonProps = UseRadioProps & {
  label?: string
}

export const SizePickerButton = (props: SizePickerButtonProps) => {
  const { value, label } = props
  const { getInputProps, htmlProps, getCheckboxProps, getLabelProps } = useRadio(props)
  const theme = useTheme()

  return (
    <chakra.label {...htmlProps}>
      <chakra.input {...getInputProps()} />
      <Button
        as="span"
        px="0"
        cursor="pointer"
        variant="outline"
        colorScheme="blue"
        color={useColorModeValue('gray.800', 'white')} // Improved contrast for text
        borderRadius="base"
        borderColor={useColorModeValue('gray.400', 'gray.500')} // Improved contrast for border
        _checked={{
          color: useColorModeValue('blue.700', 'blue.300'), // Improved contrast for checked state
          bg: useColorModeValue('blue.100', transparentize('blue.600', 0.12)(theme)), // Adjusted for better contrast
          borderColor: useColorModeValue('blue.700', 'blue.300'), // Improved contrast for checked state
          borderWidth: '2px',
        }}
        _focus={{ boxShadow: 'none' }}
        _focusVisible={{ boxShadow: 'outline' }}
        {...getCheckboxProps()}
      >
        {value}
      </Button>
      <VisuallyHidden {...getLabelProps()}>{label} selected</VisuallyHidden>
    </chakra.label>
  )
}
