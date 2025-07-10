import React from "react";

class Detail extends React.Component {
  componentDidMount() {
    console.log(this.props);
    const { location, history } = this.props;
    // console.log(location.state);
    if (location.state === undefined) {
      history.push("/"); // location.state가 undefined이면 홈으로 리다이렉션 시킴
    }
  }

  render() {
    // this.props 객체에서 location 속성만 꺼내서 location 변수로 선언
    const { location } = this.props;

    // location.state가 있을 때만 안의 title을 화면에 보여주고, 없으면 아무것도 렌더링하지 않도록 null을 반환하는 조건문
    if (location.state) {
      // location.state 안에 있는 title 값을 화면에 출력
      return <span>{location.state.title}</span>;
    } else {
      return null;
    }
  }
}
export default Detail;
