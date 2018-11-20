import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should have TitleComponent', ()=>{
  const wrapper = shallow(<App />)
  expect(wrapper.find('TitleComponent')).toBeTruthy();
});

it('should have CurrentWeatherComponent', ()=>{
  const wrapper = shallow(<App />)
  expect(wrapper.find('CurrentWeather')).toBeTruthy();
});

it('should have Search Component', ()=>{
  const cityComp = mount(<App />);
  expect(cityComp.find('SearchComponent')).toBeTruthy();
});

