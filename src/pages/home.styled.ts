import styled from "styled-components";
import {device} from '@/common/constant'

export const HomeContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    @media ${device.lg} {
        width: 100%;
    }
`

