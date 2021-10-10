import React from 'react';

//className - carousel-item active

const ItemSlider = ({key, slider, className}) => {
    console.log('key', key)
    console.log('slider', slider)
    console.log('className', className)

    return (
        <div  key={key} className={className} data-bs-interval="2000">
            {slider.img}
            <div className="carousel-caption d-none d-md-block">
                <h5>{slider.title}</h5>
                <p>{slider.content}</p>
            </div>
        </div>
    );
};

export default ItemSlider;