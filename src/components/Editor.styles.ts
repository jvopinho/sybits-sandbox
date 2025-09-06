import styled from 'styled-components'
import { theme } from '../theme'

export const EditorContainer = styled.div`
  width: 90%;
  height: 100%;
  border: ${theme('ui-15')} 2px solid;
  border-radius: 5px;
  /* background-color: red; */
`

export const EditorHeader = styled.header`
  width: 100%;
  height: 45px;
  border-bottom: ${theme('ui-15')} 2px solid;

  /* display: flex;
  align-content: center; */
  font-size: 15px;
  align-content: center;
  padding: 0 15px;
`

export const EditorTableWrapper = styled.div`
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 95%;
  height: 65%;
  max-height: 80%;
  border: ${theme('ui-10')} 2px solid;
  overflow: auto;
  padding: 12px;
`

export const EditorAddFlagContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  gap: 8px;
  margin-bottom: 24px;

  .ant-form-item {
    margin-bottom: 0 !important;
  }

  .end {
    display: flex;
    align-items: start;
    gap: 8px;
  }
`

export const EditorCalculateContainer = styled.div`
  width: 95%;
  height: 50px;
  margin-left: auto;
  margin-right: auto;
  border: ${theme('ui-15')} 2px solid;
  border-top: 0;
  padding: 0 15px;
  align-content: center;
  button {
    display: flex;
  }
`