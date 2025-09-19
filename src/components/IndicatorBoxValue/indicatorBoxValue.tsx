import { NavLink } from "react-router"
import styled from "styled-components"

const IndicatorBoxContainer = styled.div`
    width: 100%;
    height: 100%;
    max-height: 132px;
    background: #f8f8f8;
    border: 1px solid #b6b6b6;
    padding: 1rem;
    border-radius: 7px;
`

const BoxTitle = styled.span`
    font-size: 14px;
    color: black;
    font-weight: 400;
`

const BoxValueContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

const BoxValue = styled.span`
    font-size: 24px;
    font-weight: 500;
`

const ButtonBox = styled.button`
    background-color: #e3e3e3;
    border: none;
    border-radius: 7px;
    padding: 5px 1rem;
    cursor: pointer;
    font-size: 14px;
`

type TIndicatorBoxValue = {
    value: number | string
    label?: string
    buttonType: "button" | "link"
    buttonLabel?: string
    handleClickBoxButton?: () => void
    linkLabel?: string
    linkHref?: string
}
export const IndicatorBoxValue: React.FC<TIndicatorBoxValue>= ({value, label, linkLabel, linkHref, buttonType, buttonLabel, handleClickBoxButton}) => {
  return (
    <IndicatorBoxContainer>
        <BoxTitle>
            {label}
        </BoxTitle>
        <BoxValueContainer>
            <BoxValue>
                { value }
            </BoxValue>
            {buttonType === "button" && <ButtonBox onClick={handleClickBoxButton}>{buttonLabel}</ButtonBox>}
            {buttonType === "link" && <NavLink to={`${linkHref}`}>{ linkLabel }</NavLink>}
        </BoxValueContainer>
    </IndicatorBoxContainer>
  )
}
