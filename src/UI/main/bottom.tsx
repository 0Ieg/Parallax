import { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import base from '../../BLL/images/paralax/dungeon.jpg'

const Styled = styled.section`
min-height: 100dvh;
background-image: url(${base});
background-position: center;
background-size: cover;
position: relative;
display: flex;
align-items: center;
justify-content: center;
.content{
  color: var(--color-white);
  text-shadow: 0 0 calc(var(--index)*0.7) #af9e78;
  max-width: 700px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: calc(var(--index)*1.1);
  .title{
    font: 900 calc(var(--index)*1.2) Raleway;
    text-transform: uppercase;
  }
  .text{
    text-align: center;
    font: 400 calc(var(--index)*0.85) Raleway;
  }
}
.copyright{
  color: var(--color-white);
  opacity: 0.5;
  font: 400 20px Raleway;
  font: 400 calc(var(--index)*0.85) Raleway;
  position: absolute;
  bottom: 50px;
  left: 50%;
}
.wh{
  will-change: transform;
}
&::after{
  content: '';
  height: calc(var(--index)*2);
  background:linear-gradient(black 0%, #00000055 50%, #08090b17 100%);
  position: absolute;
  z-index: 5;
  top: 0;
  left: 0;
  right: 0;
}
`
export const Bottom:FC = ()=>{
  const section = useRef<HTMLElement>(null!)
  const [scrollY, setScrollY] = useState<number>(0)
  useEffect(()=>{
    const scrollHandler = ()=>{
      const sect_pos = {top:section.current.offsetTop, bottom:section.current.offsetTop+section.current.offsetHeight, height:section.current.offsetHeight}
      if (window.scrollY>sect_pos.top-sect_pos.height && window.scrollY<sect_pos.bottom){
        setScrollY(Math.ceil(window.scrollY-sect_pos.top))
        console.log('Уже работает 2 секция')
      }
    }
    window.addEventListener('scroll', scrollHandler)
    return ()=>window.removeEventListener('scroll', scrollHandler)
  },[])
  return (
    <Styled ref={section}>
      <div className='wh content' style={{transform: `translate3d(0,${scrollY/7}px,0)`}}>
        <h3 className='title'>to be continued</h3>
        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam similique rerum neque non aliquid iure pariatur laboriosam voluptas sint, corrupti cumque recusandae asperiores. Magnam quam repellendus, quasi fuga odit dolorum impedit libero!</p>
      </div>
      <div className=" wh copyright" style={{transform: `translate3d(-50%,${scrollY/30}px,0)`}}>© Oleg and WebDesign Master</div>
    </Styled>
  )
}


const StyledComp = styled.div`
.title{font: 700 24px Raleway}
`
export const Component:FC = ()=>{
  return(
    <StyledComp>
      <h2 className="title"></h2>
    </StyledComp>
  )
}