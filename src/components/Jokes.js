import React from "react";

export default class Jokes extends React.Component {
  state = { jokes: [], seeJoke: false, nextJoke: 0 };

  componentDidMount() {
    fetch("https://official-joke-api.appspot.com/random_ten")
      .then(res => res.json())
      .then(res => this.setState({ jokes: res }))
      .catch(err => console.log(err));
  }

  handleSeeJoke = () => {
    this.setState({ seeJoke: !this.state.seeJoke });
  };

  handleNextJoke = () => {
    if (this.state.nextJoke >= this.state.jokes.length - 1) return false;

    this.setState({ nextJoke: this.state.nextJoke + 1 });
  };

  handlePrevJoke = () => {
    if (this.state.nextJoke <= 0) return false;

    this.setState({ nextJoke: this.state.nextJoke - 1 });
  };

  render() {
    const firstJoke = this.state.jokes[this.state.nextJoke];

    return (
      <section className="mt-5">
        {!this.state.seeJoke ? (
          <div>
            <p>While you're here, want to hear a joke?</p>
            <button onClick={this.handleSeeJoke} className="btn btn-dark">
              Show Joke
            </button>
          </div>
        ) : (
          <div>
            <h2>Highlighted Joke</h2>
            <p>
              {firstJoke.setup} | <em>{firstJoke.punchline}</em>
            </p>
            <section className="joke-controls">
              <button
                onClick={this.handlePrevJoke}
                className="btn btn-light m-1"
              >
                Prev Joke
              </button>
              <button
                onClick={this.handleNextJoke}
                className="btn btn-secondary m-1"
              >
                Next Joke
              </button>
            </section>
            <button onClick={this.handleSeeJoke} className="btn btn-dark m-1">
              Close Joke
            </button>
          </div>
        )}
      </section>
    );
  }
}
