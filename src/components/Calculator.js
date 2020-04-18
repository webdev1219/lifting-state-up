import React, { Component } from "react";
import TemperatureInput from "./Temperatureinput";
import { tryConvert, toCelsius, toFahrenheit } from "../helpers";

export default class Calculator extends Component {
  state = {
    temperature: "",
    scale: "c",
  };

  handleCelsiusChange = (temperature) => {
    this.setState({
      temperature,
      scale: "c",
    });
  };

  handleFarenheitChange = (temperature) => {
    this.setState({
      temperature,
      scale: "f",
    });
  };

  render() {
    const { temperature, scale } = this.state;
    const celsius =
      scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const farenheit =
      scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={farenheit}
          onTemperatureChange={this.handleFarenheitChange}
        />
      </div>
    );
  }
}
