import {
  Box,
  Flex,
  HStack,
  VStack,
  Text,
  chakra,
  useRadio,
  useRadioGroup,
} from '@chakra-ui/react';

export const ActivityFilter = ({ options, defaultValue, setFieldValue }) => {
  function CustomRadio(props) {
    const { text, ...radioProps } = props;
    const { state, getInputProps, getRadioProps, getLabelProps, htmlProps } =
      useRadio(radioProps);

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

  const { getRadioProps, getRootProps } = useRadioGroup({
    defaultValue,
    name: 'levelActivity',
    onChange: value => setFieldValue('levelActivity', parseInt(value)),
  });

  // console.log(value);

  return (
    <VStack {...getRootProps()} align="start" spacing={2}>
      {options.map(({ text, value }) => {
        return (
          <CustomRadio
            key={value}
            text={String(text)}
            value={value}
            {...getRadioProps({
              value: value,
              isChecked: value,
            })}
          />
        );
      })}
    </VStack>
  );
};
