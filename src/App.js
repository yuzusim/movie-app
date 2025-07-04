import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

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
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
    console.log(movies); // 데이터 확인
  };

  componentDidMount() {
    // 6초 뒤에 isLoding을 false로 바꿔서 화면에 We are ready를 보이게 함
    // setTimeout(() => {
    //   this.setState({ isLoding: false });
    // }, 6000); "We are ready"

    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state; // 여기서 movies 정의
    return (
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader_text">Loading...</span>
          </div>
        ) : (
          <div class="movies">
            {movies.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default App;
