import React, { Component } from 'react'
import Loading from './Loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center mt-3'>
        <img src={Loading} alt="" />
      </div>
    )
  }
}

export default Spinner
