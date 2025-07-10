import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>

      {/* 
      to={{ pathname: "/about", state: { ... } }} 문법을 사용한 이유
      단순한 페이지 이동을 넘어서 "상태(state)를 함께 전달하는 네비게이션"도 가능
      <Link
        to={{
          pathname: "/about", // 이동할 경로
          state: {
            fromNavigation: true, // 함께 전달할 상태값
          },
        }}
      >
        About
      </Link> */}
    </div>
  );
}
export default Navigation;
