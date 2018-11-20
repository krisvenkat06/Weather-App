import React, { Component } from 'react';

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