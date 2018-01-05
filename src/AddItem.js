import React, { Component } from "react";

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      blogTitle: ""
    };
  }
  render() {
    const { add } = this.props;
    return (
      <div className="App">
          <input
          type="text"
          value={this.state.blogTitle}
          placeholder="Blog Title"
          onInput={event => {
            this.setState({
              blogTitle: event.target.value
            });
          }}
        />
        <div><input
          type="text"
          value={this.state.name}
          placeholder="Write a Blog Entry"
          onInput={event => {
            this.setState({
              name: event.target.value
            });
          }}
        />
        </div>
        
        <div><button
          onClick={() => {
            add(this.state.name, this.state.blogTitle);
            this.setState({
              name: "",
              blogTitle: ""  
            });
          }}>Add Article
        </button></div>
      </div>
    );
  }
}

export default AddItem;