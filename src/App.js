import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoding: true,
    movies: [],
  };

  // 6초 뒤에 isLoding을 false로 바꿔서 화면에 We are ready를 보이게 함
  // componentDidMount에서 data 를 fetch 하기
  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ isLoding: false });
    // }, 6000);
    axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json");
  }

  render() {
    const { isLoding } = this.state;
    return <div>{isLoding ? "Loading" : "We are ready"}</div>;
  }
}

export default App;
