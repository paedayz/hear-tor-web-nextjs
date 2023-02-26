import { Input } from "antd";
import TextArea from "antd/lib/input/TextArea";
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 20px;
`

type Props = {
  title: string;
  type: string;
  setDataFunc(data: any): void;
  value: string | number;
  isTextArea?: boolean;
};

function InputField({
  title,
  type,
  isTextArea = false,
  setDataFunc,
  value,
}: Props) {
  return (
    <Container>
      <div>{title}</div>
      {isTextArea ? (
        <TextArea
          rows={4}
          placeholder="ป้อนข้อมูลที่นี่"
          onChange={(e) => setDataFunc(e.target.value)}
          value={value}
        />
      ) : (
        <Input
          type={type}
          placeholder="ป้อนข้อมูลที่นี่"
          onChange={(e) => setDataFunc(e.target.value)}
          value={value}
          onWheel={(e) => e.currentTarget.blur()}
        />
      )}
    </Container>
  );
}

export default InputField;
