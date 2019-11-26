import React from 'react';

const DetailBody = props => {
    return(
        <React.Fragment>
            <div className="detail">
                <div className="detail__description">
                    <p className="detail__description__paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate.
                    </p>
                    <p className="detail__description__paragraph">
                        Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto voluptate delectus, inventore iure aliquid aliquam.
                    </p>
                    <ul className="detail__description__list">
                        <li className="detail__description__list__item">Close to the beach</li>
                        <li className="detail__description__list__item">Breakast included</li>
                        <li className="detail__description__list__item">Free airport shuttle</li>
                        <li className="detail__description__list__item">Free WiFi in all rooms</li>
                        <li className="detail__description__list__item">Air conditioning and heating</li>
                        <li className="detail__description__list__item">Pets allowed</li>
                        <li className="detail__description__list__item">We speak all languages</li>
                        <li className="detail__description__list__item">Perfect for families</li>
                    </ul>
                    <div className="detail__description__recommend">
                        <p className="detail__description__recommend__count">
                            Lucy and 3 other friends recommend this hotel.
                        </p>
                        <div className="detail__description__recommend__friends" >
                            <img src="img/user-3.jpg" alt= "Friend 1" className="detail__description__recommend__friends__photo" />
                            <img src="img/user-4.jpg" alt= "Friend 2" className="detail__description__recommend__friends__photo" />
                            <img src="img/user-5.jpg" alt= "Friend 3" className="detail__description__recommend__friends__photo" />
                            <img src="img/user-6.jpg" alt= "Friend 4" className="detail__description__recommend__friends__photo" />
                        </div>
                    </div>
                </div>
                <div className="detail__user-reviews">
                    {/* "figure" can be used for description and text */}
                    <figure className="detail__user-reviews__review">
                        {/* blockquote can be used for quotation */}
                        <blockquote className="detail__user-reviews__review__text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.
                        </blockquote>
                        <figcaption className="detail__user-reviews__review__user">
                            <img src="img/user-1.jpg" alt="User 1" className="detail__user-reviews__review__user__photo" />
                            <div className="detail__user-reviews__review__user__user-box">
                                <p className="detail__user-reviews__review__user__user-box__user-name">Nick Smith</p>
                                <p className="detail__user-reviews__review__user__user-box__date" >November 23rd, 2019</p>
                            </div>
                            <div className="detail__user-reviews__review__user__rating">7.8</div>
                        </figcaption>
                    </figure>

                    <figure className="detail__user-reviews__review">
                        {/* blockquote can be used for quotation */}
                        <blockquote className="detail__user-reviews__review__text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.
                        </blockquote>
                        <figcaption className="detail__user-reviews__review__user">
                            <img src="img/user-2.jpg" alt="User2" className="detail__user-reviews__review__user__photo" />
                            <div className="detail__user-reviews__review__user__user-box">
                                <p className="detail__user-reviews__review__user__user-box__user-name">Christin Kim</p>
                                <p className="detail__user-reviews__review__user__user-box__date" >November 12rd, 2019</p>
                            </div>
                            <div className="detail__user-reviews__review__user__rating">8.9</div>
                        </figcaption>
                    </figure>
                    <button className="btn-inline">
                        Show All <span>&rarr;</span>
                    </button>
                </div> 
            </div>
            <div className="cta">
                <h2 className="cta__book-now">
                    Good News! We have 4 free rooms for your selected dates!
                </h2>
                <button className="btn">
                    <span className="btn__visible">Book Now</span>
                    <span className="btn__invisible">Only 4 room left</span>
                </button>
            </div>  
        </React.Fragment>

    )
}

export default DetailBody;