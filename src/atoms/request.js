import { atomFamily } from 'recoil';

export const requestID = atomFamily({
  key: 'requestID',
  default: 0,
});