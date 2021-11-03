import Login from '../Login';
import { useSetRecoilState } from 'recoil';
import openPageAtom from '../../atoms/page';

export default function Main() {
  const setLoginOpen = useSetRecoilState(openPageAtom('login'));

  return (
    <div>
      <Login />
      <button onClick={() => setLoginOpen(true)}>login</button>
    </div>
  );
}
