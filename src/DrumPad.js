import React from 'react';

class DrumPad extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.clickPad = this.clickPad.bind(this);
    }

    clickPad() {
        console.log(`drum pad ${this.props.id} / ${this.props.sound} clicked!`)
        document.getElementById(`${this.props.sound}`).play();
    }

    render() {
        return (
            <button className="drum-pad" id={this.props.id} onClick={this.clickPad}>
                <audio className="clip" id={this.props.sound} src={this.props.audio}><p>Browser doesn't suppor audio element</p></audio>
                <p>{this.props.id}</p>
            </button>
        )
    }
}

export default DrumPad

// make an array of objects with info for each drum pad, 
// use a loop to render each drum pad in the render function

// make a state key of "current-sound"
// send a "string describing the sound" (this.props.sound) to "current-sound" state
// use "current-sound" state value to populate the #display div