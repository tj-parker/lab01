import { Component } from 'react';
import '/HornedBeast.js';
import list from '../data.json';

class Main extends Component {
    constructor() {
        super();
        this.state = {
          currentBeast: { image_url: null },
          beastList: list,
        }
      }
    

  render() {
    return (
      <div id="main">
        <HornedBeast title='Horned Beast' imageUrl='http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg' description='ip sum'/>
        <HornedBeast title='Horned Beast' imageUrl='http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg' description='ip sum'/>
        
        
      </div>
    )
  }
}

export default Main;