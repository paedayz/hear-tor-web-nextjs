import styled from 'styled-components';
import {Row} from 'antd'
import {device} from '../../common/constant'

export const ReviewContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 200px;
    width: 50%;
    @media ${device.lg} {
        width: 100%;
    }
`

export const Title = styled(Row)`
    font-weight: bold;
    font-size: 24px;
  @media ${device.lg} {
      font-size: 26px;
    }

`

export const Description = styled(Row)`
    font-size: 18px;
  @media ${device.lg} {
      font-size: 20px;
    }`