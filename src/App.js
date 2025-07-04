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
    // 중첩 구조분해
    const {
      data: {
        // axios가 돌려주는 응답 객체의 data
        data: {
          // YTS API가 반환하는 실제 payload(data)
          movies, // payload 안의 movies 배열만 추출
        },
      },
    } = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json"
    );
    console.log(movies); // 데이터 확인
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
