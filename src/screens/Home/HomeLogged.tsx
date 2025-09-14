import styled from 'styled-components'

const TitlePage = styled.h1`
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 2rem;
`

export const HomeLogged = () => {
  return (
    <div>
      <TitlePage>
        Welcome USER!
      </TitlePage>
    </div>
  )
}
