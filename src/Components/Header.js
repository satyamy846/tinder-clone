import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import './Header.css';
import IconButton from '@mui/material/IconButton';


const Header = () => {
  return (
    <div className='tinder-header'>
    <IconButton className='header-icons' fontSize='large'>
        <PersonIcon />
    </IconButton>
    <img src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Logo.png" alt='tinder-img'></img>
    <IconButton className='header-icons' fontSize='large'>
        <QuestionAnswerIcon />
    </IconButton>
    
    </div>
  )
}

export default Header