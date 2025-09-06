import type React from "react";
import { CodeViewerWrapper, LeftSection, RightSection, SectionsWrapper } from './Main.styles'
import { useTheme } from 'styled-components'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark as DarkHighlighterStyle, oneLight as LightHighlighterStyle } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { createCode } from "../helpers/CreateCode";
import { EditorSection } from "../components/Editor";
import { useFlags } from "../hooks/useFlags";
import { Calculator } from "../components/Calculator";
import { useState } from "react";

export const Main: React.FC = () => {
  const theme = useTheme()
  const {flags} = useFlags()
  const [calculatorIsOpen, setcalculatorIsOpen] = useState<boolean>(false)
  
  return (
    <>
      <Calculator
        isOpen={calculatorIsOpen}
        closeModal={() => setcalculatorIsOpen(false)}
      />
      <SectionsWrapper>
        <LeftSection>
          <EditorSection handleOpenCalculator={() => setcalculatorIsOpen(!calculatorIsOpen)} />
        </LeftSection>

        <RightSection>
          <CodeViewerWrapper>
            <SyntaxHighlighter 
              language='typescript' 
              style={theme.mode === 'light' ? LightHighlighterStyle : DarkHighlighterStyle}
            >
              {createCode(Object.fromEntries(flags.map(flag => ([flag.name, flag.bitValue]))))}
            </SyntaxHighlighter>
          </CodeViewerWrapper>
        </RightSection>
      </SectionsWrapper>
    </>
  )
}