import React from 'react';
import DrumPad from './DrumPad';
import './DrumMachine.css';
import Display from './Display';

class DrumMachine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            on: true,
            currentSound: ""
        }
    }

    render() {
        return (
            <div id="drum-machine">
                <div id="drum-pad-container">
                    <div className="row">
                        <DrumPad id="Q" sound="boombap-sfx" audio="/Audio/sfX/FX (6).wav" />
                        <DrumPad id="W" sound="bubbly-sfx" audio="/Audio/sfX/FX (12).wav" />
                        <DrumPad id="E" sound="synth-sound" audio="/Audio/sfX/Boom-Bap SFX 20.wav"/>
                    </div>
                    <div className="row">
                        <DrumPad id="A" sound="short-hat" audio="/Audio/Percs/07_Hats_02_SP.wav"/>
                        <DrumPad id="S" sound="long-hat" audio="/Audio/Percs/07_Hats_06_SP.wav" />
                        <DrumPad id="D" sound="tin-sfx" audio="/Audio/sfX/Boom-Bap SFX 27.wav" />
                    </div>
                    <div className="row">
                        <DrumPad id="Z" sound="bass" audio="/Audio/Bass/A_07_Bass_01_SP.wav"/>
                        <DrumPad id="X" sound="kick" audio="/Audio/Kicks/07_Kick_07_SP.wav"/>
                        <DrumPad id="C" sound="clap" audio="/Audio/Claps/07_Clap_01_SP.wav" />
                    </div>
                </div>
                <div id="controls">
                    <Display />
                </div>
            </div>
        )
    }
}

export default DrumMachine