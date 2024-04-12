import {
  // AvatarIcon,
  // AddAvatarIcon,
  FoodIcon,
  DumbBellIcon,
  LogOut,
  ExclamationMarkIcon,
} from './styles/Icon.styled.js';
import {
  Avatar,
  Badge,
  Button,
  Card,
  CardFooter,
  CardHeader,
  FormLabel,
  HStack,
  Image,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import AvatarPlug from '../../img/AvatarPlug.svg';
import CheckMark from '../../img/CheckMark.svg';

//------------------------------------------------
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { clearData } from '../../redux/diary/diarySlice.js';
import { useAuth } from '../../hooks/AuthHook.js';
import {
  fetchUserLogout,
  fetchUserCurrent,
  fetchUserAvatars,
} from '../../redux/user/operations.js';

//------------------------------------------------
export const UserCard = () => {
  const dispatch = useDispatch();
  const { user, bmr, dailyRateSports } = useAuth();

  console.log(user.avatarURL);

  useEffect(() => {
    dispatch(fetchUserCurrent());
  }, [dispatch]);

  const logOut = () => {
    dispatch(clearData());
    dispatch(fetchUserLogout());
  };

  //-------setAvatar---------

  const [selectedAvatar, setAvatar] = useState(null);

  const handleAvatarChange = e => {
    const avatar = e.target.file;
    console.log(avatar);
    setAvatar(avatar);
  };

  const appendAvatar = avatar => {
    const formData = new FormData();
    formData.append('avatar', selectedAvatar);
  };

  return (
    <Stack paddingRight={[0, 0, 16]}>
      <VStack spacing={[10, 8, 8]}>
        <VStack spacing="32px">
          <VStack>
            <Avatar
              icon={
                <Image
                  src={
                    user ? (
                      user.avatarURL
                    ) : (
                      <AvatarPlug w={[41, 68, 68]} h={[41, 68, 68]} />
                    )
                  }
                  w={[88, 148, 148]}
                  h={[88, 148, 148]}
                  rounded="50%"
                />
              }
              pos="relative"
              w={[90, 150, 150]}
              h={[90, 150, 150]}
            >
              <Input
                type="file"
                id="fileEl"
                multiple
                accept="image/*"
                display="none"
                onChange={e =>
                  dispatch(fetchUserAvatars({ avatar: e.target.files[0] }))
                }
              />
              <FormLabel
                htmlFor="fileEl"
                onClick={appendAvatar(handleAvatarChange)}
                //-----------------------
                pos="absolute"
                right={[7, 14, 14]}
                bottom={[-6, -6, -6]}
                variant="unstyled"
                zIndex="99"
                cursor="pointer"
              >
                <Image src={CheckMark} boxSize={8} />
              </FormLabel>
            </Avatar>
          </VStack>

          <VStack>
            <Text
              fontSize={[18, 24, 24]}
              lineHeight={['111%', '117%', '117%']}
              mb={[1, 2, 2]}
            >
              {user ? user.name : 'Name'}
            </Text>
            <Badge display="inline-flex" fontSize="14px" lineHeight="129%">
              User
            </Badge>
          </VStack>
        </VStack>

        <HStack spacing={[3, 4, 4]}>
          <Card
            direction="column"
            justify="space-between"
            align="flex-start"
            w={[165, 214, 209]}
            h={['96px', 108, 108]}
          >
            <CardHeader>
              <HStack>
                <FoodIcon iconid="food" width="20px" height="20px" />
                <Text
                  color="rgba(239, 237, 232, 0.8)"
                  lineHeight={['133%', '150%', '150%']}
                >
                  Daily calorie intake
                </Text>
              </HStack>
            </CardHeader>
            <CardFooter>
              <Text lineHeight={['111%', '133%', '133%']}>{bmr}</Text>
            </CardFooter>
          </Card>
          <Card
            direction="column"
            justify="space-between"
            align="flex-start"
            w={[165, 214, 209]}
            h={['96px', 108, 108]}
          >
            <CardHeader>
              <HStack>
                <DumbBellIcon
                  iconid={'dumbbell'}
                  width={'20px'}
                  height={'20px'}
                />
                <Text
                  color="rgba(239, 237, 232, 0.8)"
                  line-height={['133%', '150%', '150%']}
                >
                  Daily physical activity
                </Text>
              </HStack>
            </CardHeader>
            <CardFooter>
              <Text lineHeight={['111%', '133%', '133%']}>
                {dailyRateSports} min
              </Text>
            </CardFooter>
          </Card>
        </HStack>

        <HStack spacing={2} align="flex-start">
          <Stack
            justify="center"
            align="center"
            borderRadius="50px"
            boxSize="24px"
            bgColor="#efa082"
          >
            <ExclamationMarkIcon
              iconid={'exclamation-mark'}
              width={'2px'}
              height={'16px'}
            />
          </Stack>
          <Text
            w={[303, 407]}
            h="73px"
            fontSize={[14, 16, 16]}
            lineHeight={['129%', '150%', '150%']}
          >
            We understand that each individual is unique, so the entire approach
            to diet is relative and tailored to your unique body and goals.
          </Text>
        </HStack>

        <Button
          type="button"
          onClick={logOut}
          rightIcon={
            <LogOut iconid={'log-out'} width={'20px'} height={'20px'} />
          }
          display="inline-flex"
          alignContent="center"
          alignSelf="flex-end"
          iconSpacing="8px"
          w={[82, 88, 88]}
          fontSize={[14, 16, 16]}
          variant="unstyled"
        >
          Logout
        </Button>
      </VStack>
    </Stack>
  );
};
