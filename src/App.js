import React, { Component } from 'react';
import './App.css';
import ListItem from "./ListItem.js";
import AddItem from "./AddItem.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      //titles: ['Hello']
    };
  }

  addEntry(name, blogTitle) {
    const article = new ListItem(name, blogTitle, false, false);
    this.setState({ articles: [...this.state.articles, article]});
  }
  
 /*addTitle(blogTitle) {
    const title = new ListItem(blogTitle);
    this.setState({ titles: [...this.state.titles, title] });
  }
*/
render() {
    return (
      <div className="App">
        <h1>Blog</h1>
        <AddItem 
        add={(name, blogTitle) => this.addEntry(name, blogTitle)}/>  
          <h1>{this.state.articles.map((x, y, i) => <div key={i}>{x.name}{y.blogTitle}</div>)}</h1>
      </div>
      
    );
  }
}

export default App;
