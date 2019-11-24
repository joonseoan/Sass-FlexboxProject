import React from 'react';

const Header = props => {
    return(
        <header className="header">
            <img src="img/logo.png" alt="trillio" className="logo" />
            {/* search - block */}
            <form action="#" className="search">
            {/* search_input : inside of block */}
                <input type="text" className="search__input" placeholder="Search Hotels" />
                <button className="search__button">
                    {/* deploying svg for the first time */}
                    <svg className="search__button__icon">
                        {/* href="directory.sprite.svg#icon-filename" */}
                        <use href="img/sprite.svg#icon-magnifying-glass" />
                    </svg>
                </button>
            </form>

            <nav className="user-nav">
                <div className="user-nav__icon-box">
                    <svg className="user-nav__icon-box__icon">
                        <use href="img/sprite.svg#icon-bookmark" />
                    </svg>
                    {/* notifcation */}
                    <span className="user-nav__icon-box__notification">7</span>
                </div>
                <div className="user-nav__icon-box">
                    <svg className="user-nav__icon-box__icon">
                        <use href="img/sprite.svg#icon-chat" />
                    </svg>
                    <span className="user-nav__icon-box__notification">14</span>
                </div>
                <div className="user-nav__user">
                    <img src="img/joon.PNG" alt="user photo" className="user-nav__user__photo" />
                    <span className="user-nav__user__name">Joon</span>
                </div>
            </nav>
        </header>
    );
}

export default Header;