import React, { useState } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/GPT-3.svg'

const Menu = () => (
  <>
    <p><a href='#home'>Home</a></p>
    <p><a href='#wgptdev'>What is GPT?</a></p>
    <p><a href='#possibility'>Open AI</a></p>
    <p><a href='#features'>Case Studies</a></p>
    <p><a href='#blog'>Library</a></p>
  </>
)

const SignIn = () => (
  <>
    <p>Sign in</p>
    <button type='button'>Sign up</button>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='gptdev__navbar'>
      <div className='gptdev__navbar-links'>
        <div className='gptdev__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='gptdev__navbar-links_container'>
          <Menu />
        </div>
        <div className='gptdev__navbar-sign'>
          <SignIn />
        </div>
        <div className='gptdev__navbar-menu'>
          { toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
          }
          {toggleMenu && (
            <div className='gptdev__navbar-menu_container scale-up-center'>
              <div className='gptdev__navbar-menu_container-links'>
                <Menu />
                <div className='gptdev__navbar-menu_container-links-sign'>
                  <SignIn />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
