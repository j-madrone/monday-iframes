import React from "react";
import "./App.css";
import mondaySdk from "monday-sdk-js";
const monday = mondaySdk();

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      settings: {},
      context: {},
      name: "",
    };
  }

  componentDidMount() {
    monday.listen("settings", (res) => {
      this.setState({ settings: res.data });
    });
  }

  render() {
    return (
      <iframe target='_top' title='embed' style={{position: 'absolute', width: '100%', height: '100%', border: 'none'}} src={this.state.settings.embedURL} frameborder="0" allowfullscreen></iframe>
    );
  }
}

export default App;
