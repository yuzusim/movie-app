import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0,
  };

  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };

  // 컴포넌트가 DOM에 마운트 된 직후 호출.
  componentDidMount() {
    console.log("component rendered");
  }

  // 업데이트 후 호출. 네트워크 요청 재실행, DOM 조작 등이 여기서 가능.
  componentDidUpdate() {
    console.log("I just update");
  }

  // 컴포넌트가 제거되기 전에 호출
  // 타이머 제거, 구독 해제, 이벤트 리스너 제거 같은 정리 작업을 함.
  componentWillUnmount() {
    console.log("Goodbye cruel world");
  }

  render() {
    console.log("I'm rendering");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
