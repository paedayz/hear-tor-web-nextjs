import { useRouter } from "next/router";
import styled from "styled-components";
import { device } from "@/common/constant";
import { Button } from 'antd'

const Btn = styled(Button)`
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 20px;
  margin-right: 40px;
  margin-bottom: 30px;
  font-size: 100px;
  line-height: 0px;
  line-break: 0px;
  padding: 0;
  color: #35F348;
  background-color: white;
  padding-bottom: 10px;
  cursor: pointer;

  &:hover {
    border: #35F348 2px solid;
    color: #35F348
  }

  @media ${device.lg} {
    width: 100px;
    height: 100px;
    margin-right: 20px;
    margin-bottom: 10px;
  }
`;

type Props = {};

function AddCarBtn({ }: Props) {
  const router = useRouter();

  const gotoDetailPage = () => {
    router.push(`addCar`);
  };
  return <Btn onClick={gotoDetailPage}>+</Btn>;
}

export default AddCarBtn;
