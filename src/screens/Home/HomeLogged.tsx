import styled from 'styled-components'
import { IndicatorBoxValue } from './../../components/IndicatorBoxValue/indicatorBoxValue';

const HomePageLoggedContainer = styled.div`
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
  padding: 0 1rem;
`

const TitlePage = styled.h1`
    font-size: 2rem;
    font-weight: 500;
    margin: 2rem 0;
`
const BoxesContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
`
export const HomeLogged = () => {
  return (
    <HomePageLoggedContainer>
      <TitlePage>
        Welcome USER!
      </TitlePage>
      <BoxesContainer>
        <IndicatorBoxValue label='Wallet' value={0} buttonType='button' buttonLabel='Open'/>
        <IndicatorBoxValue label='Expensives' value={0} buttonType='button' buttonLabel='Add'/>
        <IndicatorBoxValue label='Objectives' value={0} buttonType='button' buttonLabel='Add'/>
      </BoxesContainer>
    </HomePageLoggedContainer>
  )
}
