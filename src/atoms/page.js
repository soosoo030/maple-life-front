import { atomFamily } from 'recoil';

const openPageAtom = atomFamily({
  key: 'openPageAtom',
  default: false,
});

export default openPageAtom;
