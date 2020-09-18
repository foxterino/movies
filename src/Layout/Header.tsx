import React from 'react';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { signOut } from '../State/Ducks/Auth';

const Header: React.FC = () => {
  const dispatch = useDispatch();

  const handleSignOut = () => dispatch(signOut());

  return (
    <header>
      Header
      <Button type="link" onClick={handleSignOut}>
        Logout
      </Button>
    </header>
  );
};

export { Header };
