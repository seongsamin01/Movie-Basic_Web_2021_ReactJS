import React from "react";

function About(props) {
    console.log(props);
    return (
      <div className="about__container">
        <span>
            "내가 성공할 수 있는 이유는, 내가 성공할 수 있다고 믿기 때문이다.""
        </span>
        <span>By 성공한 사업가 민정</span>
        </div>
    );
}

export default About;