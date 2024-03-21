import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";

class DrumMachine extends React.Component {
  getDrumPads() {
    return [
    {
      name: "Heater 1",
      key: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" },

    {
      name: "Heater 2",
      key: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" },

    {
      name: "Heater 3",
      key: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" },

    {
      name: "Heater 4",
      key: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" },

    {
      name: "Clap",
      key: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" },

    {
      name: "Open-HH",
      key: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" },

    {
      name: "Kick-n'-Hat",
      key: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" },

    {
      name: "Kick",
      key: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" },

    {
      name: "Closed-HH",
      key: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" }];


  }

  constructor(props) {
    super(props);
    this.state = {
      display: "Drum Machin",
      volume: 0.5 // Default volume
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleKey = this.handleKey.bind(this);
    this.makeMusic = this.makeMusic.bind(this);
    this.handleVolumeChange = this.handleVolumeChange.bind(this);
  }

  handleKey(e) {
    this.makeMusic(e.key.toUpperCase());
  }

  handleClick(e) {
    this.makeMusic(e.target.innerHTML[0]);
  }

  makeMusic(key) {
    const sound = this.getDrumPads().filter(elem => elem.key === key)[0];
    if (sound != null) {
      const audio = document.getElementById(sound.key);
      audio.volume = this.state.volume;
      audio.play();
      this.setState({ display: sound.name });
    }
  }

  handleVolumeChange(e) {
    this.setState({ volume: e.target.value });
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "wrapper", onKeyDown: this.handleKey, tabIndex: -1 }, /*#__PURE__*/
      React.createElement("section", { id: "drum-machine" }, /*#__PURE__*/
      React.createElement("section", { id: "display" }, this.state.display), /*#__PURE__*/
      React.createElement("section", { id: "drum" },
      this.getDrumPads().map(elem => {
        return /*#__PURE__*/(
          React.createElement("div", {
            className: "drum-pad",
            onClick: this.handleClick,
            id: elem.name },

          elem.key, /*#__PURE__*/
          React.createElement("audio", { className: "clip", src: elem.src, id: elem.key })));


      })), /*#__PURE__*/

      React.createElement("section", { id: "soundbar" }, /*#__PURE__*/
      React.createElement("input", {
        type: "range",
        min: "0",
        max: "1",
        step: "0.01",
        value: this.state.volume,
        onChange: this.handleVolumeChange })))));





  }}


ReactDOM.render( /*#__PURE__*/React.createElement(DrumMachine, null), document.getElementById("root"));