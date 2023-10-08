import { FC, ReactNode }from 'react';
import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material';

import { UserList } from '../../components/UserList';
import { Filter } from '../../components/Filter';

import './styles.scss';

interface props {
  childrenLeft: ReactNode
  childrenRight: ReactNode
  pageRef: string
}

export const Layout:FC<props> = ({ childrenLeft, childrenRight, pageRef }) => {
  return (
    <div className='layout-container'>
      <div className='header-container'>
        <Box sx={{ width: 100 }}>
          <BottomNavigation
            showLabels
          >
            <BottomNavigationAction sx={{ backgroundColor: "#1976d2", color: "white"}} label={`${pageRef} Page`} href={`/${pageRef}`}/>
          </BottomNavigation>
        </Box>
      </div>
      <div className='children-container'>
        <div className='panel-left'>
          {childrenLeft}
        </div>
        <div className='panel-right'>
          {childrenRight}
        </div>
      </div>
    </div>
  );
};
