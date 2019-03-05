import React, { Component } from 'react'
import Timestamp from 'react-timestamp';

export default class CommentsRender extends Component {
  render() {
    return (
        <div className="comment-wrapper">
            <img className="comment__author" src={"/Assets/Images/john_gibbons.jpg"} alt="autor"/>
            <span className="commenter-name">{this.props.name}</span>
            <span><Timestamp time={this.props.timestamp} /></span>
            <p>{this.props.comment} </p>
        </div>
    )
  }
}
