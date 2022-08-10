import React, { Component } from 'react'
import Devils from "./Devils.png";
import Nissan from "./Nissan.png";


export class NewComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: "Morning Gonubie",
         sub: "Jeandre",
         imageUrl: Devils
      }
    }

    styles = {
        fontStyle: 'italic',
        color: 'teal',
        
      };

      Buttonchange =() => {
        this.setState(
            {
                    message: "Hit the devil icon to buy your Nissan Skyline",
                    sub: "Signed in to your showroom"
            }
        );
      };

      imageChange =() => {
        this.setState(
            {
                    imageUrl: Nissan,
                    message: "Only the Big Guys"
            }
        );
      };
    
  render() {
    return (
      <div className='App'>
        <h3 style={this.styles}>{this.state.message}</h3>
        <button onClick={this.Buttonchange}>{this.state.sub}</button>
        <p/>
        <img 
        src={this.state.imageUrl}        
        onClick={this.imageChange}
        alt="Skyline GTR"
        />
      </div>
    )
  }
}

export default NewComp
