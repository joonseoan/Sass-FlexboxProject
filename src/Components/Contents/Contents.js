import React from 'react';
import Nav from './Nav/Nav';
import Main from './Main/Main';

const Contents = props => {
    return(
        <div className="contents">
            <Nav />
            <Main />
        </div>
    );
}

export default Contents;