import React from 'react';
import { shallow } from 'enzyme';
import CurrentWeather from './CurrentWeatherComponent';

describe('<CurrentWeather/>',()=>{
    it('renders CurrentWeather Component', () => {
        const props = {
            city: "Chennai"
        }
    const wrapper = shallow(<CurrentWeather city="Chennai"/>)
    expect(wrapper.find('div').text()).toEqual(props.city);
    });
})
