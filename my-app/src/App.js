// import logo from './logo.svg';
import React from "react"
import axios from "axios"
import './App.css';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
      user: [],
      followers: [],
    }
  };

  componentDidMount() {
    axios
    .get("https://api.github.com/users/PrinceIwejuo")
    .then((res) => {
      console.log(res.data, "response")
      this.setState({ user: res.data })
    })
    .catch((err) => {
      console.log(err)
    })
    axios
    .get("https://api.github.com/users/PrinceIwejuo/followers")
    .then((res) => {
      console.log(res.data, "follower res")
      this.setState({ followers: res.data })
    })
    .catch((err) => {
      console.log(err)
    })
  };


render() {
  return (
      <header className="App-header">
        <div>
          <h1>Welcome to Prince's Github!</h1>
        </div>
        <div className="user-card">
          <img src={this.state.user.avartar_url} alt="user" />
          <h1>{this.state.user.name}</h1>
          <p>{this.state.user.followers} followers</p>
            {this.state.followers.map((item) =>{
              return(
                <li key={item.id}>
                  <p>{item.login}</p>
                <img src={item.avartar_url} alt="followers" />
                </li>
              )
            })}
        </div>
        </header>
  );
};

};
export default App;
