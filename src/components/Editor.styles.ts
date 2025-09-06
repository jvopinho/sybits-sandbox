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
`
export const EditorTable = styled.table`
  width: 100%;
  padding: 10px 15px;

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

  column-count: 3;
  column-gap: 20px;

  thead {
    text-align: center;

    tr {
      :first-child {
        text-align: left;
      }
    }
  }

  tr {
    text-align: center;
    td.flag-value {
      color: ${theme('text-60')};
      font-size: 15px;
      text-align: center;
      justify-content: center;
    }

    td.flag-is-default {
      display: flex;
      justify-content: center;
      padding-top: 5px;
    }
  }
`

export const EditorAddFlagContainer = styled.div`
  width: 95%;
  height: 60px;
  margin-left: auto;
  margin-right: auto;
  border: ${theme('ui-15')} 2px solid;
  border-top: 0px;
  padding: 12px 15px;
  
  input {
    border: ${theme('ui-10')} 2px solid;
  }

  input:focus {
    background-color: ${theme('ui-15')};
  }

  button {
    height: 36px;
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