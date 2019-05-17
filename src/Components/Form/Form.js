import React, {Component} from 'react';


class Form extends Component {
constructor(props) {
    super(props)
    this.state = {
      name:"",
      price: 0,
      imgurl:""
    }
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

export default Form