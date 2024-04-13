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
      {formik => (
        <Stack
          as="form"
          autoComplete="off"
          autoFocus={false}
          onSubmit={formik.handleSubmit}
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
              <FormControl
                isInvalid={formik.errors.name && formik.touched.name}
              >
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
                  {...formik.getFieldProps('name')}
                  placeholder={user ? user.name : 'Name'}
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  aria-label="name"
                  aria-invalid={true}
                  w="100%"
                  h={['46px', '52px', '52px']}
                  fontSize={[14, 16, 16]}
                  lineHeight={['129%', '150%', '150%']}
                />

                {formik.errors.name && formik.touched.name && (
                  <FormErrorMessage
                    mt="4px"
                    color="#d80027"
                    fontSize="12px"
                    lineHeight="150%"
                    gap="4px"
                  >
                    <CheckCircleIcon fontSize={14} />
                    {formik.errors.name}
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
                  isInvalid={formik.errors.height && formik.touched.height}
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
                    {...formik.getFieldProps('height')}
                    placeholder={user ? user.height : 'Height'}
                    value={formik.values.height}
                    onChange={formik.handleChange}
                    aria-label="height"
                    h={['46px', '52px', '52px']}
                    fontSize={[14, 16, 16]}
                    lineHeight={['129%', '150%', '150%']}
                  />

                  {formik.errors.height && formik.touched.height && (
                    <FormErrorMessage
                      mt="4px"
                      color="#d80027"
                      fontSize="12px"
                      lineHeight="150%"
                      gap="4px"
                    >
                      <CheckCircleIcon fontSize={14} />
                      {formik.errors.height}
                    </FormErrorMessage>
                  )}
                </FormControl>

                <FormControl
                  isInvalid={
                    formik.errors.currentWeight && formik.touched.currentWeight
                  }
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
                    {...formik.getFieldProps('currentWeight')}
                    placeholder={user ? user.currentWeight : 'Current Weight'}
                    value={formik.values.currentWeight}
                    onChange={formik.handleChange}
                    aria-label="currentWeight"
                    h={['46px', '52px', '52px']}
                    fontSize={[14, 16, 16]}
                    lineHeight={['129%', '150%', '150%']}
                  />

                  {formik.errors.currentWeight &&
                    formik.touched.currentWeight && (
                      <FormErrorMessage
                        mt="4px"
                        color="#d80027"
                        fontSize="12px"
                        lineHeight="150%"
                        gap="4px"
                      >
                        <CheckCircleIcon fontSize={14} />
                        {formik.errors.currentWeight}
                      </FormErrorMessage>
                    )}
                </FormControl>
              </HStack>
              <HStack spacing="14px" w="100%">
                <FormControl
                  isInvalid={
                    formik.errors.desiredWeight && formik.touched.desiredWeight
                  }
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
                    {...formik.getFieldProps('desiredWeight')}
                    placeholder={user ? user.desiredWeight : 'Desired Weight'}
                    value={formik.values.desiredWeight}
                    onChange={formik.handleChange}
                    aria-label="desiredWeight"
                    h={['46px', '52px', '52px']}
                    fontSize={[14, 16, 16]}
                    lineHeight={['129%', '150%', '150%']}
                  />

                  {formik.errors.desiredWeight &&
                    formik.touched.desiredWeight && (
                      <FormErrorMessage
                        mt="4px"
                        color="#d80027"
                        fontSize="12px"
                        lineHeight="150%"
                        gap="4px"
                      >
                        <CheckCircleIcon fontSize={14} />
                        {formik.errors.desiredWeight}
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
                    {...formik.getFieldProps('birthday')}
                    placeholder={user ? user.birthday : 'Select Date'}
                    value={formik.values.birthday}
                    onChange={formik.handleChange}
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
                <BloodFilter user={user} />
                <SexFilter user={user} />
              </HStack>
            </Stack>

            <ActivityFilter user={user} />
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
