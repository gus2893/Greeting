import React from 'react';
import {Menu} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () =>{
    return(
        <Menu secondary pointing>
            <Menu.Item >
                <Link to='/'>Streams</Link>
            </Menu.Item>

            <Menu.Item position='right'>
                <Link to='/'> All Streams</Link>
                
            </Menu.Item>
            <GoogleAuth/>
        </Menu>
    );
}

export default Header;