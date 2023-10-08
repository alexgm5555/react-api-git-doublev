import { FC }from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BarChart } from '@mui/x-charts';

import './styles.scss';
import { userDetail } from '../../redux/userSlice';

export const Chart:FC = () => {
  const filterCmp = useSelector((state: any) => state.user);
  const dispatch =  useDispatch();
  
  return (
    <div>
      <BarChart
        xAxis={[{id: 'barCategories', scaleType: 'band', data: ['gu1', 'gu2','gu3' ]}]}
        series={[{data: [2, 5, 3]}]}
        width={500}
        height={300}
      />
    </div>
  );
};
