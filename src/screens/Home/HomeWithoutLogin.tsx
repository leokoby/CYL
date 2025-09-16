import styled from "styled-components"

export const HomePageContainer = styled.div`
    width: 100%;
    max-width: 1500px;
    margin: 0 auto;
    height: 100%;
    min-height: calc(100dvh - 69px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    padding: 0 1rem;
`

const TitlePage = styled.h1`
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 2rem;
`

const Subtitle = styled.h4`
    font-size: 14px;
    font-weight: 500;

`

const Label = styled.label`
    font-size: 16px;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    gap: 8px;
`

const InputForm = styled.input`
    width: 300px;
    padding: 1rem;
    border: 1px solid #000000;
    border-radius: 7px;
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 1rem;

    &:focus{
        box-shadow: 0px 0px 4px 0.25rem rgba(98, 98, 98, 0.32);
        outline: unset;
    }
`

const SubmitButton = styled.button`
    background: transparent;
    width: 100px;
    display: flex;
    height: 46px;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
    border: 1px solid black;
    margin-top: 8px;
    transition: all 200ms ease-out;
    cursor: pointer;
    &:hover{
        background: #202020;
        color: white;
        box-shadow: 0px 4px 5px 0rem rgba(0,0,0,0.32);
    }
`

export const HomeWithoutLogin = () => {

    const handleSubmitDoLogin = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault()
        const form = new FormData( e.currentTarget )
        console.log(form.get('email'))
    }
    
  return (
    <HomePageContainer className="page-container">
        <TitlePage>
            Welcome User!
            <Subtitle>
                Fill in the fields below to log in!
            </Subtitle>
        </TitlePage>
        <form onSubmit={handleSubmitDoLogin}>
            <Label>E-mail:
                <InputForm type="text" name="email" id="email-input" placeholder="test@gmail.com" autoComplete="off"/>
            </Label>
            <Label>Password:
                <InputForm type="password" name="password" id="password-input" placeholder="*******"/>
            </Label>

            <SubmitButton type="submit" value={"Submit"}>Submit</SubmitButton>
        </form>
    </HomePageContainer>
  )
}
