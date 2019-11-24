import React from 'react';

const Nav = props => {
    return(
        <nav className="sidebar">
            <ul className="side-nav">
                <li className="side-nav__item">
                    <a href="#" className="side-nav__item__link">
                        <svg className="side-nav__item__link__icon">
                            <use href="img/sprite.svg#icon-home" />
                        </svg>
                        <span>Hotel</span>
                    </a>
                </li>
                <li className="side-nav__item">
                    <a href="#" className="side-nav__item__link">
                        <svg className="side-nav__item__link__icon">
                            <use href="img/sprite.svg#icon-aircraft-take-off" />
                        </svg>
                        <span>Flight</span>
                    </a>
                </li>
                <li className="side-nav__item">
                    <a href="#" className="side-nav__item__link">
                        <svg className="side-nav__item__link__icon">
                            <use href="img/sprite.svg#icon-key" />
                        </svg>
                        <span>Car Rental</span>
                    </a>
                </li>
                <li className="side-nav__item">
                    <a href="#" className="side-nav__item__link">
                        <svg className="side-nav__item__link__icon">
                            <use href="img/sprite.svg#icon-map" />
                        </svg>
                        <span>Tours</span>
                    </a>
                </li>
            </ul>
            <div className="legal">
                &copy; 2017 by trillo, All rights reserved by Joon
            </div>
        </nav>
    );
}

export default Nav;