import { useSelector } from 'react-redux';
import { FC }from 'react';
import { Layout } from '../../layout/layout01';
import { UserList } from '../../components/UserList';
import { Filter } from '../../components/Filter';
import { UserDetail } from '../../components/UserDetail';

import './styles.scss';

export const Main:FC = () => {
  const dataRedux = useSelector((state: any) => state.user);

  const handleChildrenLeft = () => { 
    return <UserList />
  };

  const handleChildrenRight = () => {
    return <div className='panel-filter'>
      <Filter />
      {dataRedux.displayDetail === true && <UserDetail />} 
    </div>
  };

  return (
    <div className='main-container'>
      <Layout 
        pageRef='Chart'
        childrenLeft={handleChildrenLeft()} 
        childrenRight={handleChildrenRight()}
      />
    </div>
  );
};
