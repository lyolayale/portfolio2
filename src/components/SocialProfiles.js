import React from "react";
import SOCIAL_PROFILES from "../data/profiles";

class SocialProfile extends React.Component {
  render() {
    const { icon, link } = this.props.profile;
    return (
      <p className="fs-6">
        <a className="text-dark" href={link} target="_blank">
          {icon}
        </a>
      </p>
    );
  }
}

export default class SocialProfiles extends React.Component {
  render() {
    return (
      <section className="d-flex justify-content-evenly align-items-center mt-5 fs-6 w-100">
        {SOCIAL_PROFILES.map(profile => (
          <SocialProfile key={profile.id} profile={profile} />
        ))}
      </section>
    );
  }
}
