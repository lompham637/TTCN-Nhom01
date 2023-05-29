import React, {useContext} from 'react';

//import sidebar context
import { SidebarContext } from '../contexts/SidebarContext';

//import icon
import {BsBag} from 'react-icons/bs'

const Header = () => {
  const {isOpen,setIsOpen} = useContext(SidebarContext);

  return (
      <header className='bg-pink-200 '>
        <div>Header</div>
        <div className="cursor-pointer flex relative" onClick={() => setIsOpen(!isOpen)}>
          <BsBag className='text-2x1'/>
        </div>
      </header>
  );
};

export default Header;
