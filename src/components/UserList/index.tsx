import { FC }from 'react';
import { useSelector, useDispatch } from 'react-redux';

import './styles.scss';
import { userDetail } from '../../redux/userSlice';

export const UserList:FC = () => {
  const filterCmp = useSelector((state: any) => state.user);
  const dispatch =  useDispatch();

  const handleClick = (user: any)=>{
    dispatch(userDetail({
      user: user.login,
      display: true,
      img: user.avatar_url
    }))
  };

  return (
    <div className='user-list-container'>
      {filterCmp.arrayFilter && filterCmp.arrayFilter.map((user: any)=>(
        <div key={user?.id} onClick={()=>handleClick(user)}>
          <img className='img-users' src={`${user.avatar_url}`} alt="" />
          <p> {user.login}</p>
          <p> {user.id}</p>
        </div>
      ))}
      <label className='label-error'>
        {/* {errorDB} */}
      </label>
    </div>
  );
};

