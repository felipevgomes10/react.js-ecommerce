import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 21rem 1fr;
  grid-template-rows: repeat(2, 1fr);

  background: #F7F7F7;
  border-radius: 9.02222px;
  height: 244px;
  margin: ${({ margin }) => margin ? margin : 'initial'};
  transition: .3s;

  & img {
    border-radius: 9.02222px;
    width: 92px;
    height: 106px;
    object-fit: cover;
    margin: 3rem 2rem;
  }
`
export const Title = styled.h1`
  margin: 2rem 2rem 0;
  font-size: 3.8rem;
  font-weight: 400;
`
export const TextWrapper = styled(Wrapper)`
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, min-content);
  grid-column: ${({ columns }) => columns ? columns : 'initial'};
  grid-row: ${({ rows }) => rows ? rows : 'initial'};
  margin: ${({ margin }) => margin ? margin : 'initial'};
  height: auto;

  & p {
    font-size: ${({ font }) => font ? font : '2rem'};
  }

  & small {
    font-size: 13px;
    color: #A5A5A5;
  }
`
export const Colapse = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 23px;
  width: 23px;
  border: none;
  outline: none;
  padding: 0;
  border-radius: 50%;
  position: absolute;
  top: 153px;
  right: 23px;
  background: #A5A5A5;
  cursor: pointer;
`
export const Icon = styled.span`
  display: block;
  background: white;
  height: 3px;
  width: 9px;
  position: relative;

  ${props => props.plus && css`
      
      &::before {
        content: '';
        display: block;
        height: 8px;
        width: 3px;
        background: white;
        position: absolute;
        height: 9px;
        width: 3px;
        background: white;
        position: absolute;
        top: -3px;
        left: 2.5px;


      }

  `}
`
export const OrderText = styled.p`
  position: absolute;
  top: 152px;
  left: 18px;
  font-size: 18px;
`