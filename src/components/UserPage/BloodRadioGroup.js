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

  const { getRadioProps, getRootProps } = useRadioGroup({
    name: 'blood',
    onChange: value => setFieldValue('blood', value.isChecked),
  });

  return (
    <HStack {...getRootProps()} spacing={2}>
      {options.map(({ id, value }) => {
        return (
          <CustomRadio
            key={id}
            text={value}
            // value={setFieldValue(value.id)}
            {...getRadioProps({
              defaultChecked: true,
            })}
          />
        );
      })}
    </HStack>
  );
};
