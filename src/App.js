import React from "react"
import Info from './components/Info'
import Form from "./components/Form"
import Weather from "./components/Weather"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

const API_KEY = '405ebaa8384af439f639acee14422af7'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            city: '',
            sunset: '',
            temp: '',
            county: '',
            error: undefined
        }
    }
    gettindWeather = (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        if (city) {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`).then(data => data.json()).then(data => {

                let dateSunSet = new Date();
                dateSunSet.setTime(data.sys.sunset);
                let sunSetTime = dateSunSet.getHours() + ":" + dateSunSet.getMinutes() + ":" + dateSunSet.getSeconds();
                this.setState({
                    temp: data.main.temp,
                    city: data.name,
                    country: data.sys.country,
                    sunset: sunSetTime,
                    error: undefined
                });

            })
        } else {
            this.setState({
                temp: undefined,
                city: undefined,
                country: undefined,
                sunset: undefined,
                error: "Enter City name"
            });
        }

    }


    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <div className="main">
                        <div className="row">
                            <div className="col-sm-5 info"> <Info /></div>
                            <div className="col-sm-7 form"><Form weatherMethod={this.gettindWeather} />
                                <Weather temp={this.state.temp} city={this.state.city} country={this.state.country} sunset={this.state.sunset} sunrise={this.state.sunrise} error={this.state.error} /></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App