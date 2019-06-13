import React from "react"
import "./home.scss"

const Home = props => {
  return (
    <div className="home-page">
      <div className="welcome-container">
            <div style={props} className="welcome-caption">
                Welcome to <br />
                <span className="app-name">the movie hoarder</span>
            </div>
      </div>
      <div className="about-container">
            <h2 className="about-header">About</h2>
            <div className="about-description">
                The Movie Hoarder is an application which provides you possibility to search movies using natural language interface. 
                It makes your experience much better and allows to find suitable movie for you using your daily language without knowing
                precise details about particular movie. This interface allows you to search movies by year, genre, name, actors and synopsis.
            </div>
      </div>
    </div>
  )
}

export default Home;
