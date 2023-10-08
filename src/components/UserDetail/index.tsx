import { FC, useEffect, useState }from 'react';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';

import './styles.scss';

import { findOneUser, createUser, IUserData } from '../../services';

export const UserDetail:FC = () => {
  const [user, setUser] = useState<IUserData>({
    id: '0',
    public_repos: '0',
    name: '',
    login: '',
    avatar_url: '',
    url: '',
    node_id: '',
    followers: 0
  });

  const data = useSelector((state: any) => state.user);

  const pullData = async () => {
    setUser(await findOneUser(data.userDetail));
  }

  const handleClick = async () => {
    const items = await createUser(user);
  }

  useEffect(() => {
    pullData();
  }, [data]);

  return (
    <div className='detail-container'>
      <img className='img-users' src={`${data.userDetailImg}`} alt="" />
      <p> Número de repositorios</p>
      <p> {user.followers}</p>
      <Button
        id="contained"
        variant='contained'
        onClick={handleClick}
      >Export User</Button>
    </div>
  );
};
