import React from 'react';
import { useDispatch } from 'react-redux';
import { Search } from './Components/Search';
import { signOut } from '../State/Ducks/Auth';
import { Button, Layout as AntdLayout } from 'antd';

const Header: React.FC = () => {
  const dispatch = useDispatch();

  const handleSignOut = () => dispatch(signOut());

  return (
    <AntdLayout.Header>
      <Search />
      <Button type="link" onClick={handleSignOut}>
        Logout
      </Button>
    </AntdLayout.Header>
  );
};

export { Header };
