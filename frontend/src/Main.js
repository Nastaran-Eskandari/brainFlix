import React, { Component } from 'react';
import MainVideo from './MainVideo';
import SidebarVideos from './SidebarVideos';
import './App.css';

class Main extends Component {
  render() {
    console.log(this.nextVids, this.props);
    return (
      <div className="main">
            <MainVideo  id={this.props.id}/>
            <SidebarVideos />            
      </div>
    );
  }
}

export default Main;