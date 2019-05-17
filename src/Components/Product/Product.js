// import React, { Component } from 'react'

// class Product extends Component {

//     return (
//         <div>Product</div>
//     )
// }

// render() {
    
// }

// export default Product

import React, {Component} from 'react';

export default class Product extends Component {
constructor(props) {
    super(props)
  }
render() {
    const element = (<div>Product</div>)
    return (<div className="comptext">
    <h3>Product</h3>
      {this.props.displaytext}
      {element}
    </div>)
  }
}