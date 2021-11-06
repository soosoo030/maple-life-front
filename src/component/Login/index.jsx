import React from 'react';
import { Box, Backdrop } from '@mui/material';
import LoginForm from '../LoginForm';
import { LoginImage } from '../../svg';
import { animated } from 'react-spring';
import usePageTransition from '../../hooks/usePageTransition';
import { useRecoilState } from 'recoil';
import openPageAtom from '../../atoms/page';
import SignupForm from '../SignupForm';
import { useForm, FormProvider } from 'react-hook-form';

const AnimatedBox = animated(Box);

function disableEventPropagation(event) {
  event.stopPropagation();
}

function Login() {
  const { transition, isOpen, closePage } = usePageTransition('login');
  const [signupOpen, setSignupOpen] = useRecoilState(openPageAtom('signup'));
  const loginMethods = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const signupMethods = useForm({
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  });

  return (
    <Backdrop
      open={isOpen}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 1 }}
      onClick={closePage}
    >
      {transition(
        (style, open) =>
          open && (
            <AnimatedBox
              style={style}
              sx={{
                width: 1,
                height: 1,
                position: 'absolute',
                background: 'transparent',
                '@media(orientation: portrait)': {
                  flexDirection: 'column',
                },
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  width: 0.5,
                  height: 1,
                  right: 0,
                  '@media(orientation: portrait)': {
                    height: 0.5,
                    width: 1,
                    right: 'unset',
                    bottom: 0,
                  },
                }}
                onClick={disableEventPropagation}
              >
                {signupOpen ? (
                  <FormProvider {...signupMethods}>
                    <SignupForm
                      goToLogin={() => {
                        setSignupOpen(false);
                      }}
                    />
                  </FormProvider>
                ) : (
                  <FormProvider {...loginMethods}>
                    <LoginForm
                      goToSignup={() => {
                        setSignupOpen(true);
                      }}
                      onComplete={closePage}
                    />
                  </FormProvider>
                )}
              </Box>
              <LoginImage
                css={{
                  position: 'absolute',
                  top: '50%',
                  right: '50%',
                  width: '50vmin',
                  height: 'auto',
                  transform: 'translate(15%, -50%)',
                  '@media(orientation: portrait)': {
                    transform: 'translate(-50%, 15%)',
                    top: 'unset',
                    bottom: '50%',
                    right: 'unset',
                    left: '50%',
                  },
                }}
                onClick={disableEventPropagation}
              />
            </AnimatedBox>
          )
      )}
    </Backdrop>
  );
}

export default Login;
