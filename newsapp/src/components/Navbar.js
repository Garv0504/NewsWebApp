import React, { Component } from 'react'

export class Navbar extends Component {
  constructor() {
    super();
    // console.log("Hello i am a constructor from news components");
    this.state = {
      mode: "light"
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
        <a className="navbar-brand" href="/">NewsMonkey</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
          </ul>
        </div>
        <div className={`form-check form-switch text-${this.state.mode==='dark'?'light':'dark'}`}>
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={this.handleMode} />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
        </div>
      </div>
    </nav>
  )
}
}

export default Navbar
