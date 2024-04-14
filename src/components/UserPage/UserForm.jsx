import { Formik } from 'formik';
import { object, string, number, date } from 'yup';

import {
  Input,
  FormControl,
  FormLabel,
  Stack,
  FormErrorMessage,
  HStack,
  Text,
  Button,
} from '@chakra-ui/react';
// import { Radio } from './styles/field.styled';

//----------------------------------------------------
import { CheckCircleIcon } from '@chakra-ui/icons';

//----------------------------------------------------
import { useDispatch } from 'react-redux';
import { fetchUserParams } from '../../redux/user/operations';
import { useAuth } from '../../hooks/AuthHook';
import { SexFilter } from './SexRadioGroup';
import { BloodFilter } from './BloodRadioGroup';
import { ActivityFilter } from './ActivityRadioGroup';
// import StyledDatepicker from './StyledDatePicker.js';

//----------------------------------------------------
const validation = object({
  name: string().min(3, 'Name too short!').max(33, 'Name too long!'),
  height: number().min(50, 'Height too small').integer().required('Required'),
  currentWeight: number()
    .min(45, 'Weight too low')
    .integer()
    .required('Required'),
  desiredWeight: number()
    .min(45, 'Weight too low')
    .integer()
    .required('Required'),
  birthday: date()
    .nullable()
    .default(() => new Date()),
});

//----------------------------------------------------

export const UserForm = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleSubmit = values => {
    const {
      name,
      blood,
      sex,
      height,
      currentWeight,
      desiredWeight,
      birthday,
      levelActivity,
    } = values;

    dispatch(
      fetchUserParams({
        name: name,
        blood: blood,
        sex: sex,
        height: height,
        currentWeight: currentWeight,
        desiredWeight: desiredWeight,
        birthday: birthday,
        levelActivity: levelActivity,
      })
    );
  };

  return (
    <Formik
      initialValues={{
        name: '',
        blood: 0,
        sex: '',
        height: 0,
        currentWeight: 0,
        desiredWeight: 0,
        birthday: '',
        levelActivity: 0,
      }}
      validationSchema={validation}
      onSubmit={(values, actions) => {
        handleSubmit(values);
        actions.resetForm();
      }}
    >
      {({
        setFieldValue,
        handleSubmit,
        handleChange,
        errors,
        touched,
        values,
      }) => (
        <Stack
          as="form"
          autoComplete="off"
          autoFocus={false}
          onSubmit={handleSubmit}
          spacing={[10, 4, 4]}
          paddingRight={[0, 0, 16]}
          borderRight={{
            base: '0',
            md: '0',
            xl: '1px solid rgba(239, 237, 232, 0.2)',
          }}
        >
          <Stack spacing="14px">
            <Stack
              spacing="14px"
              direction={{ base: 'column', md: 'row', xl: 'row' }}
            >
              <FormControl isInvalid={errors.name && touched.name}>
                <FormLabel
                  fontSize={[12, 14, 14]}
                  lineHeight={['150%', '129%', '129%']}
                  mb={[1, 2, 2]}
                >
                  Name
                </FormLabel>

                <Input
                  name="name"
                  type="text"
                  placeholder={user ? user.name : 'Name'}
                  value={setFieldValue.name}
                  onChange={handleChange}
                  aria-label="name"
                  aria-invalid={true}
                  w="100%"
                  h={['46px', '52px', '52px']}
                  fontSize={[14, 16, 16]}
                  lineHeight={['129%', '150%', '150%']}
                />

                {errors.name && touched.name && (
                  <FormErrorMessage
                    mt="4px"
                    color="#d80027"
                    fontSize="12px"
                    lineHeight="150%"
                    gap="4px"
                  >
                    <CheckCircleIcon fontSize={14} />
                    {errors.name}
                  </FormErrorMessage>
                )}
              </FormControl>

              <FormControl>
                <FormLabel
                  fontSize={[12, 14, 14]}
                  lineHeight={['150%', '129%', '129%']}
                  mb={[1, 2, 2]}
                >
                  Email
                </FormLabel>
                <Input
                  name="email"
                  type="email"
                  placeholder={user ? user.email : 'Email'}
                  aria-label="email"
                  isReadOnly={true}
                  w="100%"
                  h={['46px', '52px', '52px']}
                  fontSize={[14, 16, 16]}
                  lineHeight={['129%', '150%', '150%']}
                />
              </FormControl>
            </Stack>
            <Stack
              direction={{ base: 'column', md: 'row', xl: 'row' }}
              spacing="14px"
            >
              <HStack spacing="14px" w="100%">
                <FormControl
                  isInvalid={errors.height && touched.height}
                  alignSelf="baseline"
                >
                  <FormLabel
                    fontSize={[12, 14, 14]}
                    lineHeight={['150%', '129%', '129%']}
                    mb={[1, 2, 2]}
                  >
                    Height
                  </FormLabel>

                  <Input
                    name="height"
                    type="number"
                    placeholder={user ? user.height : 'Height'}
                    value={setFieldValue.height}
                    onChange={handleChange}
                    aria-label="height"
                    h={['46px', '52px', '52px']}
                    fontSize={[14, 16, 16]}
                    lineHeight={['129%', '150%', '150%']}
                  />

                  {errors.height && touched.height && (
                    <FormErrorMessage
                      mt="4px"
                      color="#d80027"
                      fontSize="12px"
                      lineHeight="150%"
                      gap="4px"
                    >
                      <CheckCircleIcon fontSize={14} />
                      {errors.height}
                    </FormErrorMessage>
                  )}
                </FormControl>

                <FormControl
                  isInvalid={errors.currentWeight && touched.currentWeight}
                  alignSelf="baseline"
                >
                  <FormLabel
                    fontSize={[12, 14, 14]}
                    lineHeight={['150%', '129%', '129%']}
                    mb={[1, 2, 2]}
                  >
                    Current Weight
                  </FormLabel>

                  <Input
                    name="currentWeight"
                    type="number"
                    placeholder={user ? user.currentWeight : 'Current Weight'}
                    value={setFieldValue.currentWeight}
                    onChange={handleChange}
                    aria-label="currentWeight"
                    h={['46px', '52px', '52px']}
                    fontSize={[14, 16, 16]}
                    lineHeight={['129%', '150%', '150%']}
                  />

                  {errors.currentWeight && touched.currentWeight && (
                    <FormErrorMessage
                      mt="4px"
                      color="#d80027"
                      fontSize="12px"
                      lineHeight="150%"
                      gap="4px"
                    >
                      <CheckCircleIcon fontSize={14} />
                      {errors.currentWeight}
                    </FormErrorMessage>
                  )}
                </FormControl>
              </HStack>
              <HStack spacing="14px" w="100%">
                <FormControl
                  isInvalid={errors.desiredWeight && touched.desiredWeight}
                  alignSelf="baseline"
                >
                  <FormLabel
                    fontSize={[12, 14, 14]}
                    lineHeight={['150%', '129%', '129%']}
                    mb={[1, 2, 2]}
                  >
                    Desired Weight
                  </FormLabel>

                  <Input
                    name="desiredWeight"
                    type="number"
                    placeholder={user ? user.desiredWeight : 'Desired Weight'}
                    value={setFieldValue.desiredWeight}
                    onChange={handleChange}
                    aria-label="desiredWeight"
                    h={['46px', '52px', '52px']}
                    fontSize={[14, 16, 16]}
                    lineHeight={['129%', '150%', '150%']}
                  />

                  {errors.desiredWeight && touched.desiredWeight && (
                    <FormErrorMessage
                      mt="4px"
                      color="#d80027"
                      fontSize="12px"
                      lineHeight="150%"
                      gap="4px"
                    >
                      <CheckCircleIcon fontSize={14} />
                      {errors.desiredWeight}
                    </FormErrorMessage>
                  )}
                </FormControl>

                <FormControl alignSelf="baseline">
                  <FormLabel
                    fontSize={{ base: '12px', md: '14px' }}
                    lineHeight={{ base: '150%', md: '129%' }}
                    mb={{ base: '4px', md: '8px' }}
                  >
                    Date of birth
                  </FormLabel>

                  <Input
                    name="birthday"
                    type="date"
                    placeholder={user ? user.birthday : 'Select Date'}
                    value={setFieldValue.birthday}
                    onChange={handleChange}
                    aria-label="birthday"
                    h={{ base: '46px', md: '52px' }}
                    fontSize={{ base: '14px', md: '16px' }}
                    lineHeight={{ base: '129%', md: '150%' }}
                  />
                </FormControl>
              </HStack>
            </Stack>
          </Stack>
          <Stack spacing={{ base: '40px', md: '32px', xl: '32px' }}>
            <Stack spacing="0">
              <Text
                fontSize={[12, 14, 14]}
                lineHeight={['150%', '129%', '129%']}
                mb={[1, 2, 2]}
              >
                Blood
              </Text>
              <HStack justify="space-between">
                <BloodFilter
                  options={[
                    {
                      value: '1',
                    },
                    {
                      value: '2',
                    },
                    {
                      value: '3',
                    },
                    {
                      value: '4',
                    },
                  ]}
                  defaultValue={values.blood}
                  setFieldValue={setFieldValue}
                />
                <SexFilter
                  options={[
                    {
                      id: 1,
                      value: 'male',
                    },
                    {
                      id: 2,
                      value: 'female',
                    },
                  ]}
                  defaultValue={values.sex}
                  setFieldValue={setFieldValue}
                />
              </HStack>
            </Stack>

            <ActivityFilter
              options={[
                {
                  text: 'Sedentary lifestyle (little or no physical activity)',
                  value: '1',
                },
                {
                  text: 'Light activity (light exercises/sports 1-3 days per week)',
                  value: '2',
                },
                {
                  text: 'Moderately active (moderate exercises/sports 3-5 days per week)',
                  value: '3',
                },
                {
                  text: 'Very active (intense exercises/sports 6-7 days per week)',
                  value: '4',
                },
                {
                  text: 'Extremely active (very strenuous exercises/sports and physical work)',
                  value: '5',
                },
              ]}
              defaultValue={values.levelActivity}
              setFieldValue={setFieldValue}
            />
          </Stack>
          <Button
            type="submit"
            w={[115, 144, 144]}
            mt={[10, 10, 12]}
            size={{ base: 'base', md: 'md', xl: 'md' }}
            bgColor="#e6533c"
            variant="solid"
            disabled
          >
            Save
          </Button>
        </Stack>
      )}
    </Formik>
  );
};
