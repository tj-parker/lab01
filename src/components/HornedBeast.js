import { Component } from 'react';

class HornedBeast extends Component {
    constructor(props) {
        super();
        console.log(props);
    }
    render() {
        return (
            <>
                <h2></h2>
                <img src='http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg' alt= '1' title= 'uniWhal'></img>
                <p>A unicorn and a narwhal nuzzling their horns</p>
            </>
            
        )
        
    }
}

export default HornedBeast;