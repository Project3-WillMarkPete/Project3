import React from "react";
import Logo2 from "../components/Logo2.js";
import SocialMediaSidebar from "./SocialMediaSidebar.js";
import TargetIndustryForm from "./TargetIndustryForm.js";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <div className="welcome-space">
          <Logo2 unique="inline-logo2" />
          <div className="welcome-message">
            <h1>Welcome,</h1>
          </div>
        </div>
        <div className="menu-space">
          <a
            className="sidebar-link"
            onClick={() => this.props.handleToggleIndustry()}
          >
            <span className="icon has-text-success">
              <i className="fas fa-building" />
            </span>{" "}
            TARGET INDUSTRY
          </a>
          <a
            className="sidebar-link"
            onClick={() => this.props.handleToggleLocation()}
          >
            <span className="icon has-text-success">
              <i className="fas fa-map-marker-alt" />
            </span>{" "}
            TARGET LOCATION
          </a>
          <a
            className="sidebar-link"
            onClick={() => this.props.currentModal(this.props.index)}
          >
            <span className="icon has-text-success">
              <i className="fas fa-users" />
            </span>{" "}
            TARGET DEMOGRAPHICS
          </a>
          <a
            className="sidebar-link"
            onClick={() => this.props.currentModal(this.props.index)}
          >
            <span className="icon has-text-success">
              <i className="fas fa-map" />
            </span>{" "}
            COMPETITION HEATMAP
          </a>
          <a className="sidebar-link" href="/logout">
            <span className="icon has-text-success">
              <i className="fas fa-arrow-circle-left" />
            </span>{" "}
            LOGOUT
          </a>
          <SocialMedia socialClass="sidebar-social" />
        </div>
      </div>
    );
  }
}

export default Sidebar;
