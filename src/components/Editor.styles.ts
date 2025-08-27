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

export const EditorTable = styled.table`
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;

  width: 95%;
  border: ${theme('ui-10')} 2px solid;
  padding: 10px 15px;

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