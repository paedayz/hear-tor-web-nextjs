import styled from "styled-components";
export const LineIcon = styled.div`
  height: 50px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  max-width: 50px;
  display: block;
  margin-left: auto;
  background-image: url(${'@/images/Line.png'});
`;
export const MessagerIcon = styled.div`
  height: 50px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  max-width: 50px;
  display: block;
  margin-left: auto;
  background-image: url(${'@/images/Messager.png'});
`;

export const Flexbox = styled.div`
  display: "flex";
  flex-direction: "row";
  flex-wrap: "wrap";
`;

export const Itembox = styled.div`
  display: block;
  width: 50px;
  margin-left: 20px;
  cursor: pointer;
`;
