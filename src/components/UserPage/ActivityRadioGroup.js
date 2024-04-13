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

const data = [
  {
    text: 'Sedentary lifestyle (little or no physical activity)',
    value: 1,
  },
  {
    text: 'Light activity (light exercises/sports 1-3 days per week)',
    value: 2,
  },
  {
    text: 'Moderately active (moderate exercises/sports 3-5 days per week)',
    value: 3,
  },
  {
    text: 'Very active (intense exercises/sports 6-7 days per week)',
    value: 4,
  },
  {
    text: 'Extremely active (very strenuous exercises/sports and physical work)',
    value: 5,
  },
];

export const ActivityFilter = ({ user }) => {
  // const { levelActivity } = user;

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
    defaultValue: user.levelActivity,
    name: 'levelActivity',
    type: 'radio',
    onChange: e => setValue(parseInt(e)),
  });

  console.log(value);

  return (
    <VStack {...getRootProps()} align="start" spacing={2}>
      {data.map(({ text, value }) => {
        return (
          <CustomRadio
            key={value}
            text={text}
            {...getRadioProps({
              value: value,
              isChecked: user?.levelActivity === value ? true : false,
            })}
          />
        );
      })}
    </VStack>
  );
};
