import React from 'react';
import { render } from "@testing-library/react";
import { shallow } from 'enzyme';
import Card from './Componenets/Card';

describe('Card Component', () => {

    it("renders without crashing", () => {
        shallow(<Card />);
      });
      it('renders the title of the card', () => {
        const wrapper = shallow(<Card testid="card" />);
        const title = Card.title;
    
        expect(wrapper.contains(title)).toEqual(true);
       
    })
})