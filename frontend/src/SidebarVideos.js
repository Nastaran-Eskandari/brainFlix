import React, { Component } from 'react';
import VideoRender from './VideoRender';
import {Link} from 'react-router-dom';
import './App.css';

const baseUrl="http://localhost:8080";
const endpoint="/videos";


class SidebarVideos extends Component {
  
  state={
    nextVids:[],
    showmainVideo:{comments: [{}]}
  }
// fetch for the first time page loads
  componentDidMount() {
    fetch(baseUrl + endpoint)
    .then(response => response.json())
    .then(data => {
      console.log(this.state);
      this.setState({
        nextVids: data,
    });
      console.log(this.state);
    })
    .catch(err=>{
      console.log(err)
    });
  }

  render(){
    let videos = this.state.nextVids;
    return (
      <div className="main__videoBar--side">
        <p className="Up-nets-text">Up next</p>
        { videos.map(video => {
          return <Link to={"/videos/"+video.id} key={video.id}>
          <VideoRender title={video.title}
                  image={video.image}
                  channel={video.channel}
                  duration={video.duration}
                  views={video.views}
                  
            /></Link>
          })
        }
      </div>
    )
  }  
} 

export default SidebarVideos;