import {
    Box,
    Checkbox,
    CheckboxGroup,
    CheckboxGroupProps,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    StackProps,
    useColorModeValue as mode,
    useColorMode,
  } from '@chakra-ui/react'
  import { FiSearch } from 'react-icons/fi'
  
  type CheckboxFilterProps = Omit<CheckboxGroupProps, 'onChange'> & {
    hideLabel?: boolean
    options: Array<{ label: string; value: string; count?: number }>
    label?: string
    // eslint-disable-next-line no-unused-vars
    onChange?: (value: string[]) => void
    spacing?: StackProps['spacing']
    showSearch?: boolean
  }
  
  export const CheckboxFilter = (props: CheckboxFilterProps) => {
    const { options, label, hideLabel, spacing = '2', showSearch, ...rest } = props
    const { colorMode } = useColorMode();

    return (
      <Stack as="fieldset" spacing={spacing}>
        {!hideLabel && (
          <FormLabel fontWeight="semibold" as="legend" mb="0">
            {label}
          </FormLabel>
        )}
        {showSearch && (
          <InputGroup size="md" pb="1">
            <Input
              placeholder="Search..."
              rounded="md"
              focusBorderColor={mode('blue.900', 'blue.100')}
              aria-label='search bar'
            />
            <InputRightElement pointerEvents="none" color="gray.800" fontSize="lg">
              <FiSearch />
            </InputRightElement>
          </InputGroup>
        )}
        <CheckboxGroup {...rest}>
          {options.map((option) => (
            <Checkbox key={option.value} value={option.value} colorScheme="black">
              <span>{option.label}</span>
              {option.count != null && (
                <Box as="span" color={colorMode === "dark" ? "white" : "black"} fontSize="sm">
                  {' '}
                  ({option.count})
                </Box>
              )}
            </Checkbox>
          ))}
        </CheckboxGroup>
      </Stack>
    )
  }