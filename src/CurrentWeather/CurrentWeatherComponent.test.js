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
    const searchComp = wrapper.instance();
    searchComp.componentDidMount();
//    expect(searchComp.getMyLocation().calledOnce).toBe(true);

    });

    it('should call co-ordinates',()=>{
        let stateVal =  {"city": "", "country": "", "latitude": "", "longtitude": ""};
        const spy = jest.spyOn(CurrentWeather.prototype, 'getMyLocation');
        const wrapper = shallow(<CurrentWeather city="Chennai"/>);
        const searchComp = wrapper.instance();
        expect(searchComp.state).toEqual(stateVal);
        searchComp.componentDidMount();
        searchComp.state = {latitude: 32.8945023, longtitude: -96.9605662, city: "", country: ""};
        expect(spy).toHaveBeenCalled();
        stateVal = {latitude: 32.8945023, longtitude: -96.9605662, city: "", country: ""};
        expect(searchComp.state).toEqual(stateVal);
    });

      
})
