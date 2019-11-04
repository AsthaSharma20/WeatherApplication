import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "a15b2de654f95bf3db96b139ffa0642c";

class App extends React.Component {
  /* state is an object that reflects changing data in the form of key value pair. It can be due to user clicking a button or any other user intercation, page refresh etc. */
  state = {
    temperature : undefined,
    city : undefined,
    country: undefined,
    humidity :undefined,
    description : undefined,
    error : undefined

  }
  getWeather = async (e) => {
    e.preventDefault(); {/* Signifies single page application */}
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json(); {/* Converts data to JSON format */}
    if(city && country){
    console.log(data);
    this.setState({
      temperature: data.main.temp,
      city : data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      description: data.weather[0].description,
      error: undefined
    });
  }
else {
  this.setState({
    temperature: undefined,
    city : undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: "Please enter city and country!"
  });
}
  }
  render() {
    return(
      <div>
        <div>
                <div className = "wrapper">
                    <div className = "main">
                        <div className = "container">
                            <div className = "row">
                              <div className = "col-xs-5 title-container">
                                <Titles/>
                              </div>
                              <div className = "col-xs-7 form-container">
                              <Form getWeather={this.getWeather}/> {/* Access to getWeather in Forms */}
                                <Weather 
                                  temperature= {this.state.temperature}
                                  city = {this.state.city}
                                  country = {this.state.country}
                                  humidity = {this.state.humidity}
                                  description= {this.state.description}
                                  error = {this.state.error}
                                />
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
};
        
export default App;