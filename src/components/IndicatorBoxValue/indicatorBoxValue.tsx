import { NavLink } from "react-router"
import styled from "styled-components"

const IndicatorBoxContainer = styled.div`
    width: 100%;
    height: 100%;
    max-height: 132px;
    background: #f8f8f8;
    border: 1px solid black;
`

const BoxTitle = styled.span`
    font-size: 14px;
    color: black;
    font-weight: 400;
`

const BoxValue = styled.span`
    font-size: 24px;
    font-weight: 500;
`

const ButtonBox = styled.button`
    background-color: #b6b6b6;
    border: none;
    border-radius: 7px;
`

type TIndicatorBoxValue = {
    value: number
    label: string
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
        <div>
            <BoxValue>
                { value }
            </BoxValue>
            {buttonType === "button" && <ButtonBox onClick={handleClickBoxButton}>{buttonLabel}</ButtonBox>}
            {buttonType === "link" && <NavLink to={`${linkHref}`}>{ linkLabel }</NavLink>}
        </div>
    </IndicatorBoxContainer>
  )
}
