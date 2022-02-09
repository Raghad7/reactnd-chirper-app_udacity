import React from 'react'
import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink to='/' exact activaClassName='active'>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/new' activaClassName='active'>
                        New Tweet
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
    
}