import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    // componentDidMount에서 data 를 fetch 하기
    const movies = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json"
    );
  };

  componentDidMount() {
    // 6초 뒤에 isLoding을 false로 바꿔서 화면에 We are ready를 보이게 함
    // setTimeout(() => {
    //   this.setState({ isLoding: false });
    // }, 6000);

    this.getMovies();
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading" : "We are ready"}</div>;
  }
}

export default App;
