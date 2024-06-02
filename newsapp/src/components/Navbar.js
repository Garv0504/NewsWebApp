import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Navbar extends Component {
  constructor() {
    super();
    // console.log("Hello i am a constructor from news components");
    this.state = {
      mode: "dark"
    }
  }

  componentDidMount() {
    this.setState();
  }

  handleMode = () => {
    if(this.state.mode === "light"){
      this.setState({
        mode: "dark"
      })
    }
    else{
      this.setState({
        mode: "light"
      })
    }
  }

render() {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${this.state.mode} bg-${this.state.mode}`}>
      <div className="container-fluid text-light">
        <Link className="navbar-brand" to="/">NewsMonkey</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/business" className="nav-link">Business</Link>
            </li>
            <li className="nav-item">
              <Link to="/entertainment" className="nav-link">Entertainment</Link>
            </li>
            <li className="nav-item">
              <Link to="/sports" className="nav-link">Sports</Link>
            </li>
            <li className="nav-item">
              <Link to="/health" className="nav-link">Health</Link>
            </li>
            <li className="nav-item">
              <Link to="/science" className="nav-link">Science</Link>
            </li>
          </ul>
          <div className={`form-check form-switch text-${this.state.mode==='dark'?'light':'dark'}`}>
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={this.handleMode} />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Light Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}
}

export default Navbar
