import React from 'react';
import { shallow } from 'enzyme';
import SearchComponent from './SearchCityComponent';

describe('<SearchComponent/>',()=>{
    it('renders SearchComponent Component', () => {
    const wrapper = shallow(<SearchComponent />)
    expect(wrapper.find('div').find('input')).toBeTruthy();
    expect(wrapper.find('div').find('button')).toBeTruthy();
    });
})
