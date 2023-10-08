import { FC, SetStateAction, useEffect, useState }from 'react';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './styles.scss';
import connectDB from '../../services/connectDB';
import { filterUser } from '../../redux/userSlice';
import { findAllUsers } from '../../services';

export const Filter:FC = () => {
  const [disableButton, setDisableButton] = useState<boolean>(true);
  const [textField, setTextField] = useState('');
  const [errroMessage, setErrorMessage] = useState('El número de caracteres debe ser superior a 4');
  const dispatch =  useDispatch();

  const handleClick = async () => {
    // if (errroMessage === '') {
      const items = await findAllUsers(textField);
      dispatch(filterUser({textFilter: textField, arrayFilter: items}));
    // }
  }

  const handleOnChangeTextFiels = ( e: {
      target:
      {
        value: SetStateAction<string>;
      };
    }) => {
    setTextField(e.target.value)
  }

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter' && disableButton === false) {
      handleClick();
    }
  }

  useEffect(() => {
    if (textField.length >= 4 && textField !== 'doublevpartners') {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  }, [textField]);

  return (
    <div className='filter-container'>
      FilterList
      <TextField
        id='filte01'
        label='Filter'
        value={textField}
        onChange={handleOnChangeTextFiels}
        onKeyDown={handleKeyDown}
      />
      <br />
      <Button
        id="contained"
        variant='contained'
        onClick={handleClick}
        disabled={disableButton}
      >search</Button>
    </div>
  );
};