import React from 'react';
import { Box } from '@mui/material';
import LoginForm from '../LoginForm';
import { LoginImage } from '../../svg';
import { animated } from 'react-spring';
import usePageTransition from '../../hooks/usePageTransition';

const AnimatedBox = animated(Box);

function disableEventPropagation(event) {
  event.stopPropagation();
}

function Login() {
  const { transition, closePage } = usePageTransition('login');

  return transition(
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
          onClick={closePage}
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
            <LoginForm />
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
  );
}

export default Login;
