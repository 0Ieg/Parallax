import { FC } from 'react';
import styled from 'styled-components';
import { Main } from './main/main';

const Styled = styled.div`
  
`
export const App:FC = ()=>{
  return (
    <Styled>
      <Main/>
    </Styled>
  )
}

