import React, { Component } from 'react';
import './add-item.scss';

class AddItem extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      item: {
        text: '',
        done: false,
      }
    };
    this.baseState = this.state;
  }

  clearForm() {
    this.setState(this.baseState);
  }

  render() {
    return (
      <div className="add-item">
        <label>
            <input type="text" placeholder="ToDo..." value={this.state.item.text} onChange={(e) => this.handleChange(e)}/>
            <br/>
            <br/>            
            <input type="button" value="add" onClick={(e) => this.handleClick(e)}/>
        </label>
      </div>
    );
  };

  handleChange(event) {
    let newValue = event.target.value;
    this.setState({
        item: {
          ...this.state.item,
          text: newValue,
        },
    });

  }

  handleClick(event) {
    this.props.onAddItem(this.state.item);
    this.clearForm();
  }
  
};

export default AddItem;