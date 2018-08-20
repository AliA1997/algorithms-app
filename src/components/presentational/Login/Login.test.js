//Make sure to import react 
import React from 'react';
//Sample Component
import { Login } from './Login';
//import the renderer from react-test-render to create a mock component.
import render from 'react-test-renderer';

//Now test if the componet matches the snapshot.
describe('Does it match the snapshot', () => {
    //Test if it matches the snapshot
    test('Test if it matches snapshot', () => {
        //Create mock componet and convert it to json so it can check if it matches the snapshot, since the snapshot is json.
        const tree = render.create(<Login />).toJSON();
        //Now match the tree
        expect(tree).toMatchSnapshot(tree);
    })
})