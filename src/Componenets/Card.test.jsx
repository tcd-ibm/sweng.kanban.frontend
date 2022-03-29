import React from 'react';
import  renderer  from "react-test-renderer";
import { shallow } from 'enzyme';
import KBCard from './Card';



describe('Card Component', () => {

    it("renders without crashing", () => {
        shallow(<KBCard />);
      });
    it('renders a snapshot', () => {
        const cardSnap = renderer.create(<KBCard testid="card"/>).toJSON();
        expect(cardSnap).toMatchSnapshot();
      });

      it('renders the title of the card', () => {
        const cardSnap = renderer.create(<KBCard text="KBCard.title"/>).toJSON();
        expect(cardSnap).toMatchSnapshot();  
       
    });
    it('renders the description in the card', () => {
        const cardSnap = renderer.create(<KBCard text="KBCard.desc"/>).toJSON();
        expect(cardSnap).toMatchSnapshot();  
       
    });

    
});