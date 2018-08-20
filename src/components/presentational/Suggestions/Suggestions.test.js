//import react since your importing render from react-test-renderer
import React from 'react';
//import the render from react-test-renderer
import render from 'react-test-renderer';
///import the component.
import { Suggestions } from './Suggestions';
//Define a sample prop.
const sampleProp = [
    {
        name: 'A'
    },
    {
        name: 'B'
    },
    {
        name: 'C'
    },
    {
        name: 'D'
    }
]

describe('Test my suggestions------------', () => {
    test('Test each suggestion', () => {
        const tree = render.create(<Suggestions suggestions={sampleProp} />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})