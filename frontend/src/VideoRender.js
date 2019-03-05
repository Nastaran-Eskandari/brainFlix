import React, { Component } from 'react';

class VideoRender extends Component{
    render(){
        return(
          
            <div className="displayNextVids"> 
                <div className="video-box" href="#"><img className="NextVidImg" alt="next"  src={this.props.image}/>
                    <span className="video-duration">{this.props.duration}</span>
                </div>
                <div className="Nextvid-info">
                <span href="#"><p className="Nextvid-title">{this.props.title}</p></span>
                <span href="#"><p className="NextVidCategory">{this.props.channel}</p></span>
                    <p className="NextVidVeiws">{this.props.views +' views'}</p>
                </div>
            </div>
        )
    }
} 

export default VideoRender