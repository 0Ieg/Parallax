import { FC } from 'react';
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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  margin-top: -200px;
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
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
}
`
export const Bottom:FC = ()=>{
  return (
    <Styled>
      <div className='content'>
        <h3 className='title'>to be continued</h3>
        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam similique rerum neque non aliquid iure pariatur laboriosam voluptas sint, corrupti cumque recusandae asperiores. Magnam quam repellendus, quasi fuga odit dolorum impedit libero!</p>
      </div>
      <div className="copyright">© Oleg and WebDesign Master</div>
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