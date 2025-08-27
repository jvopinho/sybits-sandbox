import type { ExecutionContext, FastOmit } from "styled-components"
import type { ThemeColors } from "./setupTheme"

const blackColor = '#1e1e1e'
const whiteColor = '#ffffff'
const greenColor = '#61fe80'
const redColor = '#fe4854'

export const Themes = {
    dark: {
        band: '#7200b9',
        background: '#0d0510',
        ui: whiteColor,
        flow: blackColor,
        text: whiteColor,
        overlay: blackColor,
        green: greenColor,
        red: redColor
    },
    light: {
        band: '#7200b9',
        background: '#f5f5f5',
        ui: blackColor,
        flow: whiteColor,
        text: blackColor,
        overlay: whiteColor,
        green: greenColor,
        red: redColor
    },
}

export const theme = (key: keyof ThemeColors<keyof typeof Themes>) => 
    (props: ExecutionContext & FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, never>) => 
        (props.theme as ThemeColors<keyof typeof Themes>)[key]

export * from './setupTheme'