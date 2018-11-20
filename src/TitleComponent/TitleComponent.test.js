import React from 'react';
import { shallow } from 'enzyme';
import TitleComponent from './TitleComponent';

describe('<TitleComponent/>',()=>{
    it('renders Title Component', () => {
        const props = {
            name: "Weather"
        }
    const wrapper = shallow(<TitleComponent name="Weather"/>)
    expect(wrapper.find('div').text()).toEqual(props.name);
    });
    
})
