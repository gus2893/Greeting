import React from 'react';
import {Menu} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () =>{
    return(
        <Menu secondary pointing>
            <Menu.Item>
                <Link to='/Greeting/'>All Greetings</Link>
            </Menu.Item>
            <Menu.Item position='right'>
                <GoogleAuth/>
            </Menu.Item>
            
        </Menu>
    );
}

export default Header;