import React from "react";

// TITLES
import TITLES from "../data/title";

export default class Title extends React.Component {
  state = { titleIndex: 0, fadeIn: true };

  componentDidMount() {
    // initial fade-in -> false
    this.timeout = setTimeout(() => {
      this.setState(prev => ({ ...prev, fadeIn: false }));
    }, 2000);

    this.animateTitles();
  }

  componentWillUnmount() {
    // clear interval/timeout clean up
    clearInterval(this.titleInterval);
    clearTimeout(this.timeout);
  }

  animateTitles = () => {
    // Switching titles : using % to set back to orginal index of title -> 4 % 4 = 0
    this.titleInterval = setInterval(() => {
      const titleIndex = (this.state.titleIndex + 1) % TITLES.length;

      // fade-in -> true
      this.setState({ titleIndex, fadeIn: true });

      // fade-in -> false : after 2 seconds
      this.timeout = setTimeout(() => {
        this.setState(prev => ({ ...prev, fadeIn: false }));
      }, 2000);
    }, 4000);
  };

  render() {
    const { fadeIn, titleIndex } = this.state;

    const title = TITLES[titleIndex];
    return (
      <h3 className={fadeIn ? "title-fade-in" : "title-fade-out"}>
        I am {title}
      </h3>
    );
  }
}
