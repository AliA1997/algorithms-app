//import react and component
import React from 'react';
import { Navbar } from './Navbar';
//import render to create a mock component
import render from 'react-test-renderer';

//NOTE WHEN update snapshots use --updateSnapshot

//Check if the component renders correctly
describe('Check if component renders correctly', () => {
    //Check if the component renders correctly
    test('Check if the component renders correctly', () => {
        const tree = render.create(<Navbar />).toJSON();
        //Create a snapshot 
        expect(tree).toMatchSnapshot();
    })
})