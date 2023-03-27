import "./Footer.css"
import { Icon } from '@iconify/react';

const Footer = () => {
    return (
        <footer className='mainC'>
            <div>
                <h3><Icon id="icon" icon="logos:react" width="40" height="40" /></h3>
            </div>

            <div>
                <h6>Made By Furman Walker</h6>
            </div>

            <div className='copy'>
                <h6>© Copyright 2023.<br></br>All rights reserved</h6>
            </div>

        </footer>
    )
}

export default Footer