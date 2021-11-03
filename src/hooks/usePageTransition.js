import { useMediaQuery } from '@mui/material';
import { useRecoilState } from 'recoil';
import openPageAtom from '../atoms/page';
import { config, useTransition } from 'react-spring';

export default function usePageTransition(page) {
  const isPortrait = useMediaQuery('(orientation: portrait)');
  const [open, setOpen] = useRecoilState(openPageAtom(page));

  const transition = useTransition(open, {
    from: {
      opacity: 0,
      transform: isPortrait
        ? 'translate3d(0, 100%, 0)'
        : 'translate3d(100%, 0, 0)',
    },
    enter: {
      opacity: 1,
      transform: isPortrait ? 'translate3d(0, 0%, 0)' : 'translate3d(0%, 0, 0)',
    },
    leave: {
      opacity: 0,
      transform: isPortrait
        ? 'translate3d(0, 50%, 0)'
        : 'translate3d(50%, 0, 0)',
    },
    config: config.slow,
  });

  function closePage() {
    setOpen(false);
  }

  return { transition, closePage };
}
