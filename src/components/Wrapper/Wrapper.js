import { Fragment } from 'react';

import Mainnav from '../MainNavigation/MainNav';

const Wrapper = (props) => {
    return (
        <Fragment>
            <Mainnav />
            <main>{props.children}</main>
        </Fragment>
    );
};

export default Wrapper;