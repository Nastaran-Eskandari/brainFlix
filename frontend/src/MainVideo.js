import React, { Component } from 'react';
import Comments from './Comments';
import './App.css';

const baseUrl = "http://localhost:8080";
const endpoint = "/videos";

class MainVideo extends Component {

  state = {
    nextVids: [],
    showmainVideo: {
      comments: [{}]
    }
  }

  constructor() {
    super();
    this.userCommentInput = React.createRef();
    this.commentButton = React.createRef();
    this.myForm=React.createRef();
  }

  componentDidMount() {
    const getId = this.props.id;
    console.log("get id:", getId);
    this.show(getId);
  }

  // fetch to show mainVideo
  show = (vidId) => {
    fetch(baseUrl + endpoint + "/" + vidId)
    .then(res => res.json())
      .then(data2 => {
        this.setState(
          {
            showmainVideo: data2,
          }
        )
      })
      .catch(err => {
        console.log(err)
      })
  }
  // update when we click on each video
  componentDidUpdate(prevProps, prevState) {
    console.log('hi');
    if (this.props.id !== prevProps.id) {
      this.show(this.props.id);
    }
  }
// a function to post and get comments
  commentSubmit = (e) => {
    e.preventDefault();

    const body = {
      name: 'Nastaran',
      comment: this.userCommentInput.current.value,
    }

    console.log("comment is", body)
    const init = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'content-type': 'application/json'
      }
    };

    fetch(baseUrl + endpoint + "/" + this.props.id + '/comments', init)
      .then(rsp => rsp.json())
      .then(data => {
        console.log(data);
        return (
          fetch(baseUrl + endpoint + '/' + this.props.id)
            .then(rsp => rsp.json())
            .then(data => {
              console.log(data);
              this.setState({
                comments: data
              })
              this.show(this.props.id)
              this.userCommentInput.current.value=""
            })
          )
       })
    }

  render() {

    return (
      <div className="main__video--side">
        <video controls src={this.state.showmainVideo.video + "?api_key=82940adb-19ea-45c4-95d1-8c060cfdc2b1"}
          poster={this.state.showmainVideo.image} ></video>
        <div className="video__info">
          <p className="video__caption">
            {this.state.showmainVideo.title}
          </p>
          <div className="video__details">
            <span className="view">{this.state.showmainVideo.views + ' views'}</span>
            <span><img src='/Assets/Images/Icons/Thumbs Up.svg' alt="thumbsup" />{this.state.showmainVideo.thumbsUp}</span>
            <span><img src='/Assets/Images/Icons/Thumbs Down.svg' alt="thumbsDown" />{this.state.showmainVideo.thumbsDown}</span>
            <span><img src='/Assets/Images/Icons/Share.svg' alt="Share" />share</span>
          </div>
        </div>
        <div className="comments">
          <div className="commenter">
            <img className="commenter__img" alt="commenter " src={this.state.showmainVideo.image} />
            <div className="commenter__info">
              <p className="commenter__info--league">{this.state.showmainVideo.channel}</p>
            </div>
            <button className="subscribe">SUBSCRIBE<span> {this.state.showmainVideo.subscriberCount}</span> </button>
          </div>
          <p className="commenter__info--publishDate">{this.state.showmainVideo.description}</p>
          <p className="showmore"  >SHOW MORE</p>
        </div>
  {/* comment form */}
        <form className="form" onSubmit={this.commentSubmit} ref={this.myForm} >
          <img src={"/Assets/Images/john_gibbons.jpg"} alt="author " />
          <input id="form__input" type="text" name="comment" placeholder="Add a public comment" ref={this.userCommentInput} required />
          <div className="form__buttons">
            <button className="form__buttons--cancel form__buttons--btn" type="submit">Cancel</button>
            <button className="form__buttons--comment form__buttons--btn" type="submit" ref={this.commentButton}>Comment</button>
          </div>
        </form>

        <Comments comments={this.state.showmainVideo.comments} />

      </div>

    );
  }
}

export default MainVideo;