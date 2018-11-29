import React, { Component } from 'react';
import './App.css';
import TitleComponent from './TitleComponent/TitleComponent';
import CurrentWeather from './CurrentWeather/CurrentWeatherComponent';
import SearchComponent  from './SearchCity/SearchCityComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <TitleComponent name="Weather"/>
        </header>
          <SearchComponent />
          <CurrentWeather city="Chennai"/>
      </div>
    );
  }
}

export default App;
