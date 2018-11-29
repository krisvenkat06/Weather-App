import React, { Component } from 'react';
import getcurrentWeather from '../API/current';

class CurrentWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            latitude: '',
            longtitude: '',
            city:'',
            country: ''
        };
        this.getMyLocation = this.getMyLocation.bind(this);
    };

    componentDidMount(){
        this.getMyLocation();
    }

    getWeather(value){
        getcurrentWeather(value).then(data => {
            console.log(data);
        });
    }

    getMyLocation() {
        const location = window.navigator && window.navigator.geolocation;
        if(location) {
            location.getCurrentPosition((position) =>{
                let lat = position.coords.latitude;
                let longt = position.coords.longitude;
                this.setState({
                    latitude : lat,
                    longtitude : longt
                })
                console.log(this.state);
                this.getWeather(this.state);
            }, (error) => {
                this.setState({
                   city: 'Atlanta',
                   country: 'US'
                })
                console.log(this.state);
            })
        }
    }

    componentWillMount(){
        
    }

    static defaultProps = {
    }
    render() {
        return (
            <div>
                <h1>{this.props.city}</h1>
            </div>
        );
    }
}

export default CurrentWeather;