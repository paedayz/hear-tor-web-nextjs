import styled from 'styled-components'
import { IStoreActivity } from '@/pages/home/storeActivity'

const Container = styled.div`
    width: 200px;
    height: 125px;
    margin-right: 10px;
    margin-bottom: 10px;
    cursor: pointer;
`

const Image = styled.img`
    width: 200px;
    height: 100px;
    object-fit: fit;
`

const Title = styled.div`
    margin-top: 5px;
    text-align: center;
`

function ActivityCard({image, title, link}: IStoreActivity) {
  return (
    <Container onClick={() => window.open(link, '_blank')?.focus()}>
        <Image src={image} />
        <Title>{title}</Title>
    </Container>
  )
}

export default ActivityCard