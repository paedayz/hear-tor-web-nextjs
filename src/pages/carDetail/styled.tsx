import styled from "styled-components";
import { device } from "@/common/constant";

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  display: block;
  width: 50%;
  @media ${device.lg} {
    display: block;
    width: 100%;
  }
`;

export const RowContent = styled.div`
  display: flex;
  width: 100%;
`;

export const ImageContainer = styled.div`
  width: 60%;
  
  @media ${device.lg} {
    width: 100%;
  }
`;

export const MainImage = styled.img`
  width: 100%;
  margin-bottom: 10px;
  
  background-color: red;
  @media ${device.lg} {
    width: 50%;
    margin-left: 30px;
  }
`;

export const PreviewImagesContainer = styled.div`
  justify-content: center;
  overflow: hidden;
  width: 100%;
`;

export const PreviewImages = styled.img<{ selected: boolean }>`
  cursor: pointer;
  width: 31.6%;
  background-color: blue;
  margin-bottom: 5px;
  margin-left: 5px;
  border: ${(props) => (props.selected ? "5px solid #35F348" : "")};
  @media ${device.lg} {
    margin-left: 10px;
    width: 20%;
    border: ${(props) => (props.selected ? "2px solid #35F348" : "")};
  }
  
`;

export const DetailContainer = styled.div`
  padding-left: 10px;
  width: 40%;
  @media ${device.lg} {
    width: 100%;
    margin-top: 20px;
  }
`;

export const ButtonArea = styled.div`
  margin-bottom: 10px;
`;

export const Name = styled.div`
  font-size: 2rem;
  @media ${device.lg} {
      font-size: 1rem;
    }
`;

export const RelatedContainer = styled.div`
  width: 100%;
  display: block;
  text-align: center;
  margin-bottom: 50px;
`;

export const RelatedCarTitle = styled.div`
  margin-top: 50px;
  margin-bottom: 20px;
  font-size: 20px;
`

export const RelatedCarArea = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
