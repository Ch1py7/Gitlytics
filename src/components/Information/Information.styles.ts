import styled from 'styled-components'

export const Information = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(11rem, 1fr));
  width: 100%;
  padding: 3.2rem 17%;
  gap: 4rem;
  border-top: 1px solid #373737;
  border-bottom: 1px solid #373737;
`

export const InformationTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: #f3f3f3;
  text-transform: uppercase;
  line-height: 2.8rem;
`

export const InformationList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 1.4rem;
  font-size: 1.7rem;
  gap: 1.2rem;
  color: #c6c6c6;
`

export const PromotionPhrase = styled.p`
  width: 100%;
  margin-top: 1.4rem;
  font-size: 1.7rem;
  color: #999;
  @media (max-width: 640px) {
    width: 100px;
  }
`

export const PromotionMailContainer = styled.div`
  display: flex;
  margin-top: 1.4rem;
  gap: 8px;
  @media (max-width: 640px) {
    display: none;
  }
`

export const PromotionInputCont = styled.div`
  display: flex;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  border: 1px solid #999;
  border-radius: 6px;
  gap: 8px;
  background: #323232;
`

export const PromotionInput = styled.input`
  width: 120px;
  border: none;
  background-color: transparent;
  font-size: 1.6rem;
  color: #f3f3f3;
  outline: none;
`

export const PromotionButton = styled.button`
  padding: 8px;
  border: none;
  border-radius: 6px;
  background-color: #3462f9;
  font-size: 1.6rem;
  color: #f3f3f3;
`
