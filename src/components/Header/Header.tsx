import { NavLink, useParams } from "react-router"
import {styled} from "styled-components"

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    border-bottom:1px solid #b5b5b5;
    padding: 1rem;
`

const HeaderContent = styled.div`
    display: flex;
    width: 100%;
    max-width: 1500px;
    margin: 0 auto;
    align-items: end;
    gap: 2rem;
    padding: 0 1rem;

    .logo{
        font-size: 24px;
        font-weight: 500;
    }
    nav{
        display: flex;
        gap: 10px;
        align-items: center;
        margin-bottom: 3px;

        a{
            font-size: 14px;
            color: #4b4b4b;

            &:hover{
                color: #000000;
            }
        }
        
    }
`

export const Header = () => {

    //TO DO - Create an active style based on the current path
  return (
    <HeaderContainer>
        <HeaderContent>
            <span className="logo">
                CYL
            </span>
            <nav>
                <NavLink to={'/'}>
                        Home
                </NavLink>
                <NavLink to={'/finance'}>
                        Finance
                </NavLink>
                <NavLink to={'/objectives'}>
                        Objectives
                </NavLink>
            </nav>
        </HeaderContent>
    </HeaderContainer>
  )
}
