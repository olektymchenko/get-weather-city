import React from 'react';

const Form = (props) => {
    return (
        <div>
            <form onSubmit={props.weatherMethod}>
                <input type="text" name="city" placeholder="Enter your city" />
                <button>Enter</button>
            </form>
        </div>
    )
}


export default Form;