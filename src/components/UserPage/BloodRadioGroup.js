import {
  Box,
  Flex,
  HStack,
  Text,
  chakra,
  useRadio,
  useRadioGroup,
} from '@chakra-ui/react';

export const BloodFilter = ({ options, defaultValue, setFieldValue }) => {
  function CustomRadio(props) {
    const { text, ...radioProps } = props;
    const { state, getInputProps, getRadioProps, getLabelProps, htmlProps } =
      useRadio(radioProps);

    console.log(defaultValue);

    return (
      <chakra.label {...htmlProps} cursor="pointer">
        <input {...getInputProps({})} hidden />
        <HStack>
          <Flex
            {...getRadioProps()}
            spacing={1}
            p={1}
            border="2px solid"
            borderColor="#ef8964"
            rounded="full"
          >
            <Box
              p={['4px', '5px', '5px']}
              bg={state.isChecked ? '#ef8964' : 'transparent'}
              rounded="full"
              {...getLabelProps()}
            ></Box>
          </Flex>
          <Text
            fontSize={{ base: '14', md: '16', xl: '16' }}
            lineHeight={{ base: '1.28', md: '1.5', xl: '1.5' }}
            textTransform="capitalize"
          >
            {text}
          </Text>
        </HStack>
      </chakra.label>
    );
  }

  const { value, getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: defaultValue,
    name: 'blood',
    onChange: value => setFieldValue('blood', value),
  });

  console.log(value);

  return (
    <HStack {...getRootProps()} spacing={2}>
      {options.map(({ value }) => {
        return (
          <CustomRadio
            key={value}
            text={value}
            value={value}
            {...getRadioProps({
              value: value,
              isChecked:
                setFieldValue?.blood === parseInt(value) ? true : false,
            })}
          />
        );
      })}
    </HStack>
  );
};
