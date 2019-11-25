import React from 'react';

const DetailBody = props => {
    return(
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
                User Review
            </div>   
        </div>
    )
}

export default DetailBody;