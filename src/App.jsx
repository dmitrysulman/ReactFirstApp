import React, {Component} from "react";
import { Timer } from "./Timer";
import { Posts } from "./components/Posts";
import { Form } from "./components/Form";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
  }

  handleSomething = (id) => {
    console.log("App.jsx handleSomething " + id + this.state.posts1.findIndex(post => post.id === id));
    this.setState((prevState) => ({posts1: prevState.posts1.filter(post => post.id !== id)}));
  } 

  componentDidMount() {
    console.log("Mount");
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => this.setState((prevState) => ({posts: data})));

  
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then(response => response.json())
      .then(data => this.setState((prevState) => ({comments: data, loading: false})));
  }
  
  componentDidUpdate() {
    console.log("Update");
  }

  componentWillUnmount() {
    console.log("Unmount");
  }

  handleClick(sign) {
    if (sign === "+") {
      this.setState((prevState) => ({count: prevState.count + 1})) 
    } else if (sign === "-") {
      this.setState((prevState) => ({count: prevState.count - 1}), () => {
        console.log("minus complete")
      })
    } else {
      this.setState((prevState) => ({count: prevState.count + 1}))
    }

    console.log("handleClick complete")
  }

  render() {
    const {count, posts1, posts, loading} = this.state;

    console.log("render", count);
    return (
      <div className="App" style={{width: "300px", margin: "auto"}}>
        <div>
          <Posts posts={posts1} cb={this.handleSomething}/>
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
            {count}
          </span>
        <button
          onClick={() => this.handleClick()}
        >
          +
        </button>
        <div>
          {loading ? <h3>Loading...</h3> : <h3>
            {posts.length} was loaded
            </h3>}
        </div>
        <div>
          <Form />
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