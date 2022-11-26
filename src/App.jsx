import React, {Component} from "react";
import { Timer } from "./Timer";

class App extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    count: 0,
    posts: [],
    loading: true,
    comments: [],
    posts1: [
      {id: "abc1", name: "Name1"},
      {id: "abc2", name: "Name2"},
      {id: "abc3", name: "Name3"}
    ]
  }

  componentDidMount() {
    console.log("Mount");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => this.setState({posts: data}));

  
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then(response => response.json())
      .then(data => this.setState({comments: data, loading: false}));
  }
  
  componentDidUpdate() {
    console.log("Update");
  }

  componentWillUnmount() {
    console.log("Unmount");
  }

  handleClick(sign) {
    if (sign == "+") {
      this.setState({count: this.state.count + 1}) 
    } else if (sign == "-") {
      this.setState((prevState) => ({count: prevState.count - 1}), () => {
        console.log("minus complete")
      })
    } else {
      this.setState({count: this.state.count + 1})
    }

    console.log("handleClick complete")
  }

  render() {
    console.log("render", this.state.count);
    return (
      <div className="App" style={{width: "300px", margin: "auto"}}>
        <div>
          <div>{this.state.posts1.map(post => (
            <h2 key={post.id}>{post.name}</h2>
          ))}</div>
          
        </div>
        <Timer />
        <button 
          onClick={() => this.handleClick("-")}
        >
          -
        </button>
        <span 
          style={countStyle}
        >
            {this.state.count}
          </span>
        <button
          onClick={() => this.handleClick()}
        >
          +
        </button>
        <div>
          {this.state.loading ? <h3>Loading...</h3> : <h3>
            {this.state.posts.length} was loaded
            </h3>}
        </div>
      </div>
    );
  }
}

export default App;

const countStyle = {
  margin: "0 0.75rem",
  display: "inline-block"
}