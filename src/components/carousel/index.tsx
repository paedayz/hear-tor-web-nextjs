import React from "react";
import { Carousel } from "antd";
import styled from "styled-components";

const contentStyle: React.CSSProperties = {
  height: "160px",
  color: "#fff",
  textAlign: "center",
  background: "#364d79",
};

const Image = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
`;

const App = () => {

  return (
    <Carousel autoplay >
      <div>
        <Image src="banner-1.jpg" />
      </div>
      <div>
        <Image src="banner-2.jpg" />
      </div>
      <div>
        <Image src="banner-3.jpg" />
      </div>
      <div>
        <Image src="banner-4.jpg" />
      </div>
      <div>
        <Image src="banner-5.jpg" />
      </div>

    </Carousel>
  );
};

export default App;
