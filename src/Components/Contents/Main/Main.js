
import React, { Fragment } from 'react';

import MainHeader from './MainHeader/MainHeader';
import DetailBody from './DetailBody/DetailBody';

const Main = props => {
    return(
        <main className="hotel-view">
            <MainHeader />
            <DetailBody />
        </main>
    );
}

export default Main;