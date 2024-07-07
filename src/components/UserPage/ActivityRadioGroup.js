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
import { defaultTheme } from 'react-select';

export const ActivityFilter = ({ options, defaultValue }) => {
  function CustomRadio(props) {
    const { text, ...radioProps } = props;
    const { state, getInputProps, getRadioProps, getLabelProps, htmlProps } =
      useRadio(radioProps);

    return (
      <chakra.label {...htmlProps} cursor="pointer">
        <input {...getInputProps({})} hidden />
        <HStack>
          <Flex
            {...getRadioProps({})}
            spacing={1}
            p={1}
            border="2px solid"
            borderColor="#ef8964"
            rounded="full"
          >
            <Box
              {...getLabelProps()}
              p={['4px', '5px', '5px']}
              bg={state.isChecked ? '#ef8964' : 'transparent'}
              rounded="full"
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
    name: 'levelActivity',
  });

  // console.log(defaultValue);

  return (
    <VStack {...getRootProps()} align="start" spacing={2}>
      {options.map(({ value, text, id }) => {
        return (
          <CustomRadio
            {...getRadioProps({ value: defaultValue })}
            key={id}
            text={String(text)}
            setValue={value?.isChecked === true ? value : defaultValue}
          />
        );
      })}
    </VStack>
  );
};
