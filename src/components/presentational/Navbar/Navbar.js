import React from 'react';
// import your placeholder image 
import placeHolderImage from '../../../data/user-placeholder-image.jpg';
//import the decorator
import decorator from './NavbarDecorator';
import './Navbar.css';

export const Navbar = (props) => {
    const { user } = props;
    console.log('props----------', props.user)
    return (
        <div className='navbar'> 
            <div className='desktop-nav'>
                <p onClick={props.onClick('/')}>{`LearnCode</>`}</p>
                <p onClick={props.onClick('/topics')}>Topics</p>
                <p onClick={props.onClick('/blog')}>Blog</p>
                <img src='a' alt='a' className='navbar-img'/>
            </div>
            <div className='mobile-nav-wrapper'>
                <p onTouchMove={props.onClick('/')} onClick={props.onClick2} 
                className='navbar-header'>{`LearnCode</>`}</p>
                <div className='mobile-nav'  style={{display: props.open ? 'inline-block' : 'none'}}>
                    <p onClick={props.onClick('/topics')}>Topics</p>
                    <p onClick={props.onClick('/blog')}>Blog</p>
                    <img src={user && user.profile_picture || placeHolderImage} alt={user && user.username || 'placeholder image'}
                     className='navbar-img'/>
                </div>
            </div>
        </div>
    );
};

const NavbarDecorated = decorator(Navbar);
export default NavbarDecorated;