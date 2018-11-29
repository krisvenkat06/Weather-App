import React from 'react';
import { shallow } from 'enzyme';
import SearchComponent from './SearchCityComponent';

fdescribe('<SearchComponent/>',()=>{
    fit('renders SearchComponent Component', () => {
    const wrapper = shallow(<SearchComponent />)
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('div').find('input')).toBeTruthy();
    expect(wrapper.find('div').find('button')).toBeTruthy();
    });


})

