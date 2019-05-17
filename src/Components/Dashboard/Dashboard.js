import React, {Component} from 'react';


export default class Dashboard extends Component {
constructor(props) {
    super(props)
  }
render() {
    const element = (<div>Dashboard</div>)
    return (
    
    <div className="comptext">
  
    <h3>Dashboard</h3>
      {this.props.displaytext}
      {element}
      <div>
        <input onChange={this.handleUpdateId}></input>

        <button onClick={this.handleGetForm}>Add to Inventory</button>
        <button onClick={this.handleGetForm}>Cancel</button>
      </div>
    </div>)
  }
}