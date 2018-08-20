//make sure to import react
import React from 'react';
//import the renderer for create a mock component with the component as a argument 
import render from 'react-test-renderer';
import { UserForm } from './UserForm';

const edu = [
    'Some High School',
    'High School or GED',
    'Some College',
    'AS',
    'BS',
    'MS',
    'PHD'
]
describe('Check if the component renders correctly', () => {
    test('Test if component matches snapshot', () => {
        const tree = render.create(<UserForm edu={edu}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})