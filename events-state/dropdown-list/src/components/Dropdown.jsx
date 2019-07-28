import React, {useState} from 'react'
import DropdownList from './DropdownList';

// Компонент хранит кнопку и DropdownList (хранит состояние - показывать или нет выпадающий список)
export default function Dropdown() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = event => {
    setIsShown(prevState => !prevState)
  };
  
  return (
    <div className='container'>
      <button onClick={handleClick} className='btn'>Accouns settings <i className='material-icons'>public</i></button>
      <div className={isShown ? 'dropdown-wrapper open' : 'dropdown-wrapper'}>
        <DropdownList/>
      </div>
    </div>
  );
}