import styled from "styled-components";
import { theme } from "../theme";

export const ModalWrapper = styled.div`
  .flags_input {
    border: ${theme('ui-10')} 2px solid;
    background-color: red;
        
    :focus-visible {
      background-color: orange;
    }
  }
`