import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { fetchUserLogIn } from '../redux/user/operations';
import pulseIcon from '../img/pulse-icons.svg';
import {
  StyledFormIn,
  Input,
  Button,
  MessageInput,
  ErrorText,
  SvgIcon,
  SuccessText,
  SuccessSvg,
  IconsIn,
} from '../components/FormStyle/StyledForm.styled';

import AuthLayout from 'components/AuthLayout/AuthLayout';

function SignInPage() {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const SignIn = Yup.object().shape({
    email: Yup.string()
      .min(3, 'The email address must be at least 3 characters long!')
      .max(35, 'The email address is too long!')
      .email('Error email')
      .required('Required'),
    password: Yup.string().required('Required').min(6).max(20),
  });

  return (
    <AuthLayout
      title="Sign in"
      paragraph="Welcome! Please enter your credentials to login to the platform:"
      bottomText="Don’t have an account?"
      linkName="Sign up"
      linkUrl="/register"
    >
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={SignIn}
        onSubmit={values => {
          dispatch(fetchUserLogIn(values));
        }}
      >
        {({ errors, touched }) => (
          <StyledFormIn>
            <label htmlFor="email">
              <Input
                id="email"
                name="email"
                placeholder="Email"
                type="email"
                className={`
                    ${errors.email && touched.email ? 'error' : ''}
                    ${touched.email && !errors.email ? 'success' : ''}`}
              />

              {errors.email && touched.email && (
                <MessageInput>
                  <SvgIcon>
                    <use href={pulseIcon + '#checkbox'}></use>
                  </SvgIcon>
                  <ErrorMessage component={ErrorText} name="email" />
                </MessageInput>
              )}
              {!errors.email && touched.email && (
                <MessageInput>
                  <SuccessSvg>
                    <use href={`${pulseIcon}#checkbox`} />
                  </SuccessSvg>
                  <SuccessText>Success email</SuccessText>
                </MessageInput>
              )}
            </label>
            <label htmlFor="password">
              <Input
                id="password"
                name="password"
                placeholder="Password"
                type={showPassword ? 'text' : 'password'}
                className={`${
                  errors.password && touched.password ? 'error' : ''
                }
                                    ${
                                      touched.password && !errors.password
                                        ? 'success'
                                        : ''
                                    }`}
              />
              {errors.password && touched.password && (
                <MessageInput>
                  <SvgIcon>
                    <use href={`${pulseIcon}#checkbox`} />
                  </SvgIcon>
                  <ErrorMessage component={ErrorText} name="password" />
                </MessageInput>
              )}
              {!errors.password && touched.password && (
                <MessageInput>
                  <SuccessSvg>
                    <use href={`${pulseIcon}#checkbox`} />
                  </SuccessSvg>
                  <SuccessText>Success password</SuccessText>
                </MessageInput>
              )}
              {!showPassword && (
                <IconsIn
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    left:
                      window.innerWidth >= 1440
                        ? '424px'
                        : window.innerWidth >= 768
                        ? '357px'
                        : '320px',
                    top:
                      window.innerWidth >= 1440
                        ? '310px'
                        : window.innerWidth >= 768
                        ? '299px'
                        : '249px',
                  }}
                >
                  <use href={pulseIcon + '#icon-eye'}></use>
                </IconsIn>
              )}
              {showPassword && (
                <IconsIn
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    left:
                      window.innerWidth >= 1440
                        ? '424px'
                        : window.innerWidth >= 768
                        ? '357px'
                        : '320px',
                    top:
                      window.innerWidth >= 1440
                        ? '310px'
                        : window.innerWidth >= 768
                        ? '299px'
                        : '249px',
                  }}
                >
                  <use href={pulseIcon + '#icon-eye-off'}></use>
                </IconsIn>
              )}
            </label>

            <Button type="submit">Sign In</Button>
          </StyledFormIn>
        )}
      </Formik>
    </AuthLayout>
  );
}

export default SignInPage;
