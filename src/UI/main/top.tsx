import { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import base from '../../BLL/images/paralax/layer-base.png'
import middle from '../../BLL/images/paralax/layer-middle.png'
import front from '../../BLL/images/paralax/layer-front.png'
// import connecting from '../../BLL/images/paralax/ground.png'

const Styled = styled.section`
min-height: 100dvh;
overflow: hidden;
position: relative;
display: flex;
justify-content: center;
align-items: center;
.content{
  color: var(--color-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: calc(var(--index)*0.7);
  position: relative;
  z-index: 2;
  padding-bottom: calc(var(--index)*2);
  text-shadow: 0 0 calc(var(--index)*0.8) #af9e78;
  .title{
    font: 900 calc(var(--index)*2.5) Raleway;
    text-transform: uppercase;
    letter-spacing: calc(var(--index)*0.4);
  }
  .subtitle{
    text-align: center;
    font: 900 calc(var(--index)*1.2) Raleway;
    letter-spacing: calc(var(--index)*0.2);
  }
}
[class*=layer_]{
  height: 100%;
  background-position: center;
  background-size: cover;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.layer_base{
  background-image: url(${base});
  z-index: 1;
}
.layer_middle{
  background-image: url(${middle});
  z-index: 3;
}
.layer_front{
  background-image: url(${front});
  z-index: 4;
}
.connecting{
  background: linear-gradient(#0000001b 0%, #000000a4 50%, black 100%);
  background-position: center;
  background-size: cover;
  background-repeat: repeat-x;
  position: absolute;
  z-index: 5;
  height: calc(var(--index)*4);
  width: 100%;
  bottom: 0;
  transform: translateY(50%);
}
.wc{
  will-change: transform;
}
`
export const Top:FC = ()=>{
  const [scrollPosition, setScrollPosition] = useState<number>(0)
  const section = useRef<HTMLDivElement>(null!)
  useEffect(()=>{
    const scrollHandler = ()=>{
      const sect_pos = {top:section.current.offsetTop, bottom:section.current.offsetTop+section.current.offsetHeight}
      if (window.scrollY>sect_pos.top && window.scrollY<sect_pos.bottom){
        setScrollPosition(Math.ceil(window.scrollY-sect_pos.top))
        console.log('Еще работает 1 секция')
      }
    }
    window.addEventListener('scroll', scrollHandler)
    return ()=>window.removeEventListener('scrooll',scrollHandler)
  },[])
  return (
    <Styled ref={section}>
      <div className="wc layer_base" style={{transform: `translate3d(0,${scrollPosition/1.8}px,0)`}}></div>
      <div className="wc content " style={{transform: `translate3d(0,${scrollPosition/2.1}px,0)`}}>
        <h3 className='subtitle'>Welcome to Parallax</h3>
        <h1 className="title">Fairy Forest</h1>
      </div>
      <div className="wc layer_middle" style={{transform: `translate3d(0,${scrollPosition/2.7}px,0)`}}></div>
      <div className="wc layer_front" style={{transform: `translate3d(0,${scrollPosition/5}px,0)`}}></div>
      <div className="connecting"></div>
    </Styled>
  )
}

