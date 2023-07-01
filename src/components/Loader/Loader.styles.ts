import styled from 'styled-components'

export const Loader = styled.div`
  position: relative;
  width: 16.8rem;
  height: 16.8rem;
  font-size: 1.4rem;
  margin: 20rem auto;
  scale: 3;
`

export const Wheel = styled.div`
  position: absolute;
  border-radius: 50%;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(100% 100% at center, #99999900 47.8%, #999999 48%);
  z-index: 2;
`

export const Hamster = styled.div`
  position: absolute;
  animation: hamster 1s ease-in-out infinite;
  top: 50%;
  left: calc(50% - 3.5em);
  width: 10rem;
  height: 4rem;
  transform-origin: 50% 0;
  z-index: 1;
  & div {
    position: absolute;
  }
`

export const Spoke = styled.div`
  position: absolute;
  border-radius: 50%;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  animation: spoke 1s linear infinite;
  background: radial-gradient(100% 100% at center, #999999 4.8%, #a6a6a600 5%),
    linear-gradient(#8c8c8c00 46.9%, #a6a6a6 47% 52.9%, #a6a6a600 53%) 50% 50% / 99% 99% no-repeat;
`

export const HamsterLimb_Br = styled.div`
  border-radius: 0.75em 0.75em 0 0;
  clip-path: polygon(0 0, 100% 0, 100% 30%, 70% 90%, 70% 100%, 30% 100%, 40% 90%, 0% 30%);
  top: 1.7rem;
  left: 6.8rem;
  width: 2rem;
  height: 3.5rem;
  transform-origin: 50% 30%;
  animation: hamsterBRLimb 1s linear infinite;
  background: linear-gradient(#facc9e 90%, #f98686 90%);
  transform: rotate(-25deg) translateZ(-1px);
`

export const HamsterLimb_Bl = styled.div`
  border-radius: 0.75em 0.75em 0 0;
  clip-path: polygon(0 0, 100% 0, 100% 30%, 70% 90%, 70% 100%, 30% 100%, 40% 90%, 0% 30%);
  top: 1.7rem;
  left: 6.8rem;
  width: 2rem;
  height: 3.5rem;
  transform-origin: 50% 30%;
  animation: hamsterBLLimb 1s linear infinite;
  background: linear-gradient(#fce6cf 90%, #fbb6b6 90%);
  transform: rotate(-25deg);
  z-index: 1;
`

export const HamsterLimb_Fr = styled.div`
  clip-path: polygon(0 0, 100% 0, 70% 80%, 60% 100%, 0% 100%, 40% 80%);
  top: 3.2rem;
  left: 3.6rem;
  width: 1rem;
  height: 2rem;
  transform-origin: 50% 0;
  animation: hamsterFRLimb 1s linear infinite;
  background: linear-gradient(#facc9e 80%, #f98686 80%);
  transform: rotate(15deg) translateZ(-1px);
`

export const HamsterLimb_Fl = styled.div`
  clip-path: polygon(0 0, 100% 0, 70% 80%, 60% 100%, 0% 100%, 40% 80%);
  top: 3.2rem;
  left: 3.6rem;
  width: 1rem;
  height: 2rem;
  transform-origin: 50% 0;
  animation: hamsterFLLimb 1s linear infinite;
  background: linear-gradient(#fce6cf 80%, #fbb6b6 80%);
  transform: rotate(15deg);
  z-index: 1;
`

export const HamsterBody = styled.div`
  animation: hamsterBody 1s ease-in-out infinite;
  background: #fce6cf;
  border-radius: 50% 30% 50% 30% / 15% 60% 40% 40%;
  box-shadow: 0.1em 0.75em 0 #f48c25 inset, 0.15em -0.5em 0 #facc9e inset;
  top: 0.5rem;
  left: 3rem;
  width: 6.4rem;
  height: 4rem;
  transform-origin: 17% 50%;
  transform-style: preserve-3d;
  z-index: 1;
`

export const HamsterHead = styled.div`
  animation: hamsterHead 1s ease-in-out infinite;
  background: #f48c25;
  border-radius: 70% 30% 0 100% / 40% 25% 25% 60%;
  box-shadow: 0 -0.25em 0 #facc9e inset, 0.75em -1.55em 0 #fce6cf inset;
  top: 0;
  left: -3rem;
  width: 4rem;
  height: 3.5rem;
  transform-origin: 100% 50%;
`

export const HamsterEye = styled.div`
  animation: hamsterEye 1s linear infinite;
  background-color: #161616;
  border-radius: 50%;
  top: 0.5rem;
  left: 1.9rem;
  width: 0.7rem;
  height: 0.7rem;
`

export const HamsterNose = styled.div`
  background: #f98686;
  border-radius: 35% 65% 85% 15% / 70% 50% 50% 30%;
  top: 1.2rem;
  left: 0;
  width: 0.3rem;
  height: 0.4rem;
`

export const HamsterEar = styled.div`
  animation: hamsterEar 1s ease-in-out infinite;
  background: #fbb6b6;
  border-radius: 50%;
  box-shadow: -0.3rem 0 #f48c25 inset;
  top: -0.3rem;
  right: -0.3rem;
  width: 1.1rem;
  height: 1.1rem;
  transform-origin: 50% 75%;
`

export const HamsterTail = styled.div`
  animation: hamsterTail 1s linear infinite;
  background: #fbb6b6;
  border-radius: 0.3rem 50% 50% 0.3rem;
  box-shadow: 0 -0.2em 0 #f98686 inset;
  top: 2rem;
  right: 0.12rem;
  width: 0.9rem;
  height: 0.7rem;
  transform: rotate(30deg) translateZ(-1px);
  transform-origin: 0.3rem 0.3rem;
`
