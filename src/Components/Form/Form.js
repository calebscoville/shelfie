// import React, { Component } from 'react'

// class Form extends Component {

//     return (
        
//     )
// }

// render() {
    
// }

// export default Form

import React, {Component} from 'react';

export default class Form extends Component {
constructor(props) {
    super(props)
  }
render() {
    const element = (<div>Form</div>)
    return (<div className="comptext">
    <h3>Form</h3>
      {this.props.displaytext}
      {element}
    </div>)
  }
}