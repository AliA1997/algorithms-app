//import react and component.
import React from 'react';
import { Topic } from './Topic';
//import the render to create a mock component.
import render from 'react-test-renderer';
//NOTE WHEN update snapshots use --updateSnapshot

//Check if the component renders correctly
describe('Check if the component renders correctly', () => {
    //Check if the component renders correctly
    test('Check if component renders correctly!', () => {
        //create your mock component.
        const tree = render.create(<Topic />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})