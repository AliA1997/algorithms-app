import React, { Component } from 'react';

export default class TopicsPage extends Component {
    constructor() {
        super();
        this.state = {
            topics: [],
            loading: true
        }
    }
    render() {
        return (
            <div>
                TopicsPage
            </div>
        );
    }
}