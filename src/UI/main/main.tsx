import { FC } from 'react';
import styled from 'styled-components';
import { Top } from './top';
import { Bottom } from './bottom';

const Styled = styled.main`
  
`
export const Main:FC = ()=>{
  return (
    <Styled>
      <Top/>
      <Bottom/>
    </Styled>
  )
}

