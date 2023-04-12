import React from "react";

// TITLES
import TITLES from "../data/title";

export default class Title extends React.Component {
  state = { titleIndex: 0 };

  componentDidMount() {
    this.animateTitles();
  }

  componentWillUnmount() {
    clearInterval(this.titleInterval);
  }

  animateTitles = () => {
    this.titleInterval = setInterval(() => {
      const titleIndex = (this.state.titleIndex + 1) % TITLES.length;

      this.setState({ titleIndex });
    }, 4000);
  };

  render() {
    const title = TITLES[this.state.titleIndex];
    return <h3 className="title">I am {title}</h3>;
  }
}
