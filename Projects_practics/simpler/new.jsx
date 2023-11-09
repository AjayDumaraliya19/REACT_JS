import React, { Component } from 'react';

class MyComponent extends Component {
  // Define static data as a property of the class
  staticData = {
    item1: 'Value 1',
    item2: 'Value 2',
    item3: 'Value 3'
  };

  constructor(props) {
    super(props);

    // Initialize state if needed
    this.state = {
      selectedItem: 'item1'
    };
  }

  render() {
    // Access static data using this.staticData
    const selectedValue = this.staticData[this.state.selectedItem];

    return (
      <div>
        <select
          value={this.state.selectedItem}
          onChange={(e) => this.setState({ selectedItem: e.target.value })}
        >
          {Object.keys(this.staticData).map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <div>Selected Value: {selectedValue}</div>
      </div>
    );
  }
}

export default MyComponent;
