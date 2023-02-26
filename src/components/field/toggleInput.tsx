import { Input, Switch } from 'antd';
import React from 'react'
import styled from "styled-components";

const Container = styled.div`
  margin-bottom: 20px;
`

type Props = {
    title: string;
    setDataFunc(data: boolean): void;
    value: boolean
}

function ToggleInput({title, setDataFunc, value}: Props) {
  return (
    <Container>
        <div>{title}</div>
        <Switch checked={value} onChange={(bool) => setDataFunc(bool)} />
    </Container>
  )
}

export default ToggleInput