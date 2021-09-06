import React from 'react'

import {
    NavBar,
} from './styles'

interface Props{
    top: number;
    left: number;
    right: number;
    marginTop: number;
}


const DesktopMenu:React.FC<Props> = ({ top, left, right, marginTop }) => {
    return (
        <NavBar top={top} left={left} right={right} marginTop={marginTop}>
            <nav>
                <ul>
                    <li>
                        About
                    </li>
                    <li>
                        Careers
                    </li>
                    <li>
                        Events
                    </li>
                    <li>
                        Products
                    </li>
                    <li>
                        Support
                    </li>
                </ul>
            </nav>
        </NavBar>
    )
}

export default DesktopMenu