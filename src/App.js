import React from "react";
import Particles from "react-particles-js";

import "./styles.css";
import "tachyons";

import Heading from "./components/Heading";
import Features from "./components/Features";

const particlesOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800
      }
    },

    size: {
      value: 2
    }
  }
};

export default function App() {
  return (
    <div className="App" style={{ height: "100vh" }}>
      <Heading />
      <Features />
      <Particles params={particlesOptions} className="particles" />
    </div>
  );
}
