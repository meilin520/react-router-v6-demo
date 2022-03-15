import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './index.css';

class Layout extends React.Component {
    render() {
        return (
            <div id='layout'>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/gallery">Gallery</Link>
                        </li>
                        <li>
                            <Link to="/repos">Repos</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/auth">Auth</Link>
                        </li>
                    </ul>
                </nav>
                <hr />
                <Outlet />
            </div>
        );
    }
}

export default Layout;