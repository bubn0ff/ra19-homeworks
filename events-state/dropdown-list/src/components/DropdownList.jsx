import React, {useState} from 'react';

// Компонент хранит список меню и хранит информацию о текущем выбранном элементе
export default function DropdownList() {
  const [activeItem, setActiveItem] = useState('');

  const activateItem = event => {
    event.preventDefault();
    setActiveItem(event.currentTarget.innerHTML);
  };

  return (
    <ul className='dropdown'>
      {dropdownList.map(li => 
        <li key={li} className={li === activeItem ? 'active' : null}>
          <a onClick={activateItem} href="#">{li}</a>
        </li>)}
    </ul>
  );
}

const dropdownList = [
  'Profile Information',
  'Change Password',
  'Become PRO',
  'Help',
  'Log Out'
];