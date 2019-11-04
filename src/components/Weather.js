import React from 'react';
/* Here class is replaced with a const and an arrow function because there is only 1 root in this.
So, whenever there is only 1 root, we can replace the class with a const.  */
const Weather = props => (
        
            
            <div className = "weather__info">
                {
                    props.temperature && <p className = "weather__key">Temperature: 
                    <span className = "weather__value"> {props.temperature}</span></p>
                }
                {
                    props.city && props.country && <p className = "weather__key">Location :
                    <span className = "weather__value"> {props.city},{props.country}</span></p>
                }
                {
                    props.humidity &&<p className = "weather__key">Humidity: 
                    <span className = "weather__value"> {props.humidity}</span></p>
                }
                {
                    props.description &&<p className = "weather__key">Description: 
                    <span className = "weather__value"> {props.description}</span></p>
                }
                {
                    props.error &&<p className = "weather__error">Error: 
                    <span> {props.error}</span></p>
                    }
                </div>
        )
export default Weather;