import React from "react";
import Projects from "./components/Projects";
import SocialProfiles from "./components/SocialProfiles";
import Title from "./components/Title";
import Jokes from "./components/Jokes";

// profile image
import profileImage from "./assets/images/profile-image.png";

export default class App extends React.Component {
  state = { displayBio: false };

  toggleButton = () => {
    this.setState(prev => ({ ...prev, displayBio: !prev.displayBio }));
  };

  render() {
    return (
      <main className="container bg-light-subtle shadow mt-4 pt-3 pb-4 p-3 rounded text-center">
        <div className="image-container w-100 m-auto">
          <a href="https://lyolayale.github.io/portfolio/" target="_blank">
            <img
              className="my-image object-fit-cover w-50 rounded-5 shadow-lg"
              src={profileImage}
              alt="Me"
            />
          </a>
        </div>
        <h1>Welcome All!</h1>
        <p>My name is Eric.</p>
        {this.state.displayBio && <Title />}
        <p>
          I'm always looking forward to learning and working on meaningful
          projects.
        </p>
        {this.state.displayBio ? (
          <section className="bio">
            <p>I live in Texas and I code every day.</p>
            <p>
              My favorite language is JavaScript and I think React.js is
              awesome.
            </p>
            <p>
              Beside coding, I like to watch the Science and Discovery channel.
            </p>
            <button onClick={this.toggleButton} className="btn btn-dark shadow">
              Read Less
            </button>
          </section>
        ) : (
          <section className="read-more">
            <button onClick={this.toggleButton} className="btn btn-dark shadow">
              Read More
            </button>
          </section>
        )}
        <Projects />
        <Jokes />
        <SocialProfiles />
      </main>
    );
  }
}
