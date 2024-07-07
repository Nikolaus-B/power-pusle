import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
//---------------------------------------
import {
  ChakraProvider,
  Container,
  Stack,
  VStack,
  Heading,
} from '@chakra-ui/react';
import { theme } from './mods/Theme';
import { Title } from 'components/Title/Title';
import { UserCard } from './UserCard';
import { UserForm } from './UserForm';
//---------------------------------------

import {
  // accessRefreshing,
  fetchUserCurrent,
} from '../../redux/user/operations';
//
export const ProfilePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserCurrent());
  }, [dispatch]);

  return (
    <ChakraProvider theme={theme} resetCSS>
      <Container px={[5, 8, 8]} centerContent>
        <VStack spacing={10} align="flex-start" justify="center">
          <Title as={Heading} title={'Profile Settings'} />
          <Stack
            w={{ xl: '100%' }}
            direction={{ base: 'column', md: 'column', xl: 'row-reverse' }}
            gap={['18px', '38px', '54px']}
          >
            <UserCard />
            <UserForm />
          </Stack>
        </VStack>
      </Container>
    </ChakraProvider>
  );
};
