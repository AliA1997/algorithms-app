//import commponent to test and react
import React from 'react';
import { Comment } from './Comment';
//import test rendere
import render from 'react-test-renderer';

describe('Test if it renders correctly', () => {
    // beforeAll(() => {
    //     const tree = render.create(<Comment />).toJSON();
    // })
    test('Test if it renders correctly', () => {
        const tree = render.create(<Comment />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})