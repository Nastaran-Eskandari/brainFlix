import React, { Component } from 'react'


export default class Upload extends Component {

  render() {
    return (
      <div>
        <form className="uploadPage">
          <div>
            <label>Title:</label>
            <input type="text"></input>
          </div>

          <div>
            <label> Description: </label>
              <textarea rows="5" ></textarea>
          </div> 

          <div>
          <button className="submit-btn">Send</button>
          </div>
           
        </form>
      

      </div>
    )
  }
}
