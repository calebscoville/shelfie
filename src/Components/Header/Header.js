// import React, { Component } from 'react'

// class Header extends Component {

//     return (
       
//     )
// }

// render() {
    
// }

// export default Header

import React, {Component} from 'react';
export default class Header extends Component {
constructor(props) {
    super(props)
  }
render() {
    const element = (<div>Text from Element</div>)
    return (<div className="comptext">
    <h3>First Component</h3>
      {this.props.displaytext}
      {element}
    </div>)
  }
}