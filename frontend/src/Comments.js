import React, { Component } from 'react'
import CommentsRender from './CommentsRender';

export default class Comments extends Component {
  render() {
    let comments=this.props.comments;
    console.log(this.props)
    return (
      <div>
        {
          comments.map((singleComment,i)=>{
              return <CommentsRender
              name={singleComment.name}
              comment={singleComment.comment}
              key={i}
                />         
            })
        }
      </div>
    )
  }
}

