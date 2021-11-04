import Login from '../Login';
import LoginAnnounceModal from '../LoginAnnounceModal';
import { useState } from 'react';

export default function Main() {
  const [open, setOpen] = useState(true);

  return (
    <div>
      <Login />
      <LoginAnnounceModal open={open} closeModal={() => setOpen(false)} />
    </div>
  );
}
