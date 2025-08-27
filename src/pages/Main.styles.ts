import styled from 'styled-components'
import { theme } from '../theme'

export const SectionsWrapper = styled.div`
  width: 97.5%;
  height: 100vh;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;

  color: ${theme('text-100')};

  & > section {
    height: 90%;
    max-height: 90%;
  }
`

export const LeftSection = styled.section`
  width: 50%;
  padding: 0;
  display: flex;
  justify-content: center;
`

export const RightSection = styled.section`
  background-color: ${theme('flow-100')};
  width: 50%;

  font-size: 15px;
  *, pre {
    background: ${theme('flow-100')} !important;
  }
  
  border-radius: 10px;
  border: ${theme('ui-15')} 2px solid;
  padding: 0;
`

export const CodeViewerWrapper = styled.div`
  height: 95%;
  max-height: 95%;
  margin-top: 2.5%;
  margin-bottom: 2.5%;
  
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 3px;
}
        
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px ${theme('flow-20')};
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${theme('ui-20')};
    border-radius: 10px;
  }
`