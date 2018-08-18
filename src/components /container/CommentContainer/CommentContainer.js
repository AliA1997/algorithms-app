import React, { Component } from 'react';

export default class CommentContainer extends Component {
    render() {
        return this.props.children();
    }
}