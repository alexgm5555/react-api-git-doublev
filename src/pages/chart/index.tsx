import { useSelector } from 'react-redux';
import { FC }from 'react';
import { Layout } from '../../layout/layout01';
import { Chart } from '../../components/Chart';

import './styles.scss';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import { blue } from '@mui/material/colors';


export const ChartPage:FC = () => {
  const dataRedux = useSelector((state: any) => state.user);

  const handleChildrenLeft = () => {
    return <Chart />
  };

  const handleChildrenRight = () => {
    return <></>
  };

  return (
    <div className='main-container'>
      <Layout 
        childrenLeft={handleChildrenLeft()} 
        childrenRight={handleChildrenRight()}
        pageRef='Main'
      />
    </div>
  );
};