import React from 'react';

const Weather = (props) => {
    return (<div>
        {props.city &&
            <div className="weather">
                <h2> Location: {props.city}, {props.country}</h2>
                <p>Temperature: {props.temp} C*</p>
                <p>Sunset : {props.sunset}</p>
            </div>
        }
        <p>{props.error}</p>
    </div>);
}

export default Weather;