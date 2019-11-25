import React from 'react';

const Main = props => {
    return(
        <React.Fragment>
            <div className="gallery">
                <figure className="gallery__item" >
                    <img src="img/hotel-1.jpg" alt="photo of hotel 1" className="gallery__item__photo" />
                </figure>
                <figure className="gallery__item" >
                    <img src="img/hotel-2.jpg" alt="photo of hotel 2" className="gallery__item__photo" />
                </figure>
                <figure className="gallery__item" >
                    <img src="img/hotel-3.jpg" alt="photo of hotel 3" className="gallery__item__photo" />
                </figure>
            </div>
            <div className="overview">
                <h1 className="overview__heading">
                    Hotel Albufeira 
                </h1>
                <div className="overview__stars">
                    <svg className="overview__stars__icon">
                        <use href="img/sprite.svg#icon-star" />
                    </svg>
                    <svg className="overview__stars__icon">
                        <use href="img/sprite.svg#icon-star" />
                    </svg>
                    <svg className="overview__stars__icon">
                        <use href="img/sprite.svg#icon-star" />
                    </svg>
                    <svg className="overview__stars__icon">
                        <use href="img/sprite.svg#icon-star" />
                    </svg>
                    <svg className="overview__stars__icon">
                        <use href="img/sprite.svg#icon-star" />
                    </svg>
                </div>
                <div className="overview__location">
                    <svg className="overview__location__icon">
                        <use href="img/sprite.svg#icon-location-pin" />
                    </svg>
                    <button className="btn-inline">
                        Albufeira, Portugal
                    </button>
                </div>
                <div className="overview__rating">
                    <div className="overview__rating__rating-average">8.6</div>
                    <div className="overview__rating__rating-count">429 votes</div>
                </div>
            </div>
        </React.Fragment>
        
    );
}

export default Main;