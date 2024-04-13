import {
  Box,
  Flex,
  HStack,
  Text,
  chakra,
  useRadio,
  useRadioGroup,
} from '@chakra-ui/react';

const data = [
  {
    text: '1',
    value: 1,
  },
  {
    text: '2',
    value: 2,
  },
  {
    text: '3',
    value: 3,
  },
  {
    text: '4',
    value: 4,
  },
];

export const BloodFilter = ({ user }) => {
  // const { blood } = user;

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

  const { value, setValue, getRadioProps, getRootProps } = useRadioGroup({
    defaultValue: user.blood,
    name: 'blood',
    type: 'radio',
    onChange: e => setValue(parseInt(e)),
  });

  console.log(typeof value);

  return (
    <HStack {...getRootProps()} spacing={2}>
      {data.map(({ text, value }) => {
        return (
          <CustomRadio
            key={value}
            text={text}
            value={value}
            {...getRadioProps({
              value: value,
              isChecked: user?.blood === value ? true : false,
            })}
          />
        );
      })}
    </HStack>
  );
};
