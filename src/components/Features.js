import React, { Component } from "react";

export default class Features extends Component {
  queryHexagon = () => {
    let name = prompt("Enter hexagon name: ");
    let cluster = prompt("Enter cluster it belongs to: ");

    let body = "name=" + name + "&cluster=" + cluster;

    fetch("https://covidclusters.pythonanywhere.com/query", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: body
    })
      .then((res) => res.text())
      .then((data) => alert(data))
      .catch((err) => console.log(err));
  };

  addHexagon = () => {
    let name = prompt("Enter hexagon name: ");
    let cluster = prompt("Enter cluster it belongs to: ");
    let neighbour = prompt("Enter neighbor name: ");
    let index = prompt("Enter index number: ");

    let body =
      "name=" +
      name +
      "&cluster=" +
      cluster +
      "&neighbour=" +
      neighbour +
      "&index=" +
      index;

    fetch("https://covidclusters.pythonanywhere.com/addhexagon", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: body
    })
      .then((res) => res.text())
      .then((data) => alert(data))
      .catch((err) => console.log(err));
  };

  removeHexagon = () => {
    let name = prompt("Enter hexagon name: ");
    let cluster = prompt("Enter cluster it belongs to: ");

    let body = "name=" + name + "&cluster=" + cluster;
    fetch("https://covidclusters.pythonanywhere.com/removehexagon", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: body
    })
      .then((res) => res.text())
      .then((data) => alert(data))
      .catch((err) => console.log(err));
  };

  addCluster = () => {
    let cluster = prompt("Enter cluster name: ");
    let name = prompt("Enter hexagon name: ");

    let body = "name=" + name + "&cluster=" + cluster;

    fetch("https://covidclusters.pythonanywhere.com/addcluster", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: body
    })
      .then((res) => res.text())
      .then((data) => alert(data))
      .catch((err) => console.log(err));
  };

  removeCluster = () => {
    let cluster = prompt("Enter cluster name: ");

    let body = "cluster=" + cluster;

    fetch("https://covidclusters.pythonanywhere.com/removecluster", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: body
    })
      .then((res) => res.text())
      .then((data) => alert(data))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="pa2 tc mt3">
        <button
          className="pa3 ba b--green bg-white pointer ma2"
          onClick={this.queryHexagon}
        >
          Query Hexagon
        </button>
        <button
          className="pa3 ba b--green bg-white pointer ma2"
          onClick={this.addHexagon}
        >
          Add Hexagon
        </button>
        <button
          className="pa3 ba b--green bg-white pointer ma2"
          onClick={this.removeHexagon}
        >
          Remove Hexagon
        </button>
        <button
          className="pa3 ba b--green bg-white pointer ma2"
          onClick={this.addCluster}
        >
          Add Cluster
        </button>
        <button
          className="pa3 ba b--green bg-white pointer ma2"
          onClick={this.removeCluster}
        >
          Remove Cluster
        </button>
      </div>
    );
  }
}
