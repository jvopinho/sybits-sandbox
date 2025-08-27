interface BaseColors {
    band: string
    background: string
    ui: string
    flow: string
    text: string
    overlay: string
    green: string
    red: string
}

const blackColor = '#1e1e1e'
const whiteColor = '#ffffff'

const tonalits = {
    '5': '0d', 
    '10': '1a', 
    '15': '26', 
    '20': '33', 
    '40': '66', 
    '60': '99', 
    '80': 'cc', 
    '100': ''
}

export type ThemeColors<Themes extends string = string> = Record<`${keyof Omit<BaseColors, 'overlay' | 'background'>}-${keyof typeof tonalits}`, string> & { 
    overlay: string, 
    background: string,
    mode: Themes
}

export function setupTheme<Themes extends string>(themes: Record<Themes, BaseColors>, mode: keyof typeof themes): ThemeColors<Themes> {
    const baseColors: BaseColors = themes[mode]
    
    return {
        mode,
        'background': baseColors.background,
        ...mapTonalits('band', baseColors.band),
        ...mapTonalits('ui', baseColors.ui),
        ...mapTonalits('flow', baseColors.flow),
        ...mapTonalits('text', baseColors.text),
        'overlay': baseColors.overlay + 'E6',
        ...mapTonalits('light', whiteColor),
        ...mapTonalits('dark', blackColor),
        ...mapTonalits('green', baseColors.green),
        ...mapTonalits('red', baseColors.red),
    } as ThemeColors<Themes>
}

function mapTonalits(key: string, color: string) {
    return  Object.fromEntries(
        Object.entries(tonalits).map(([tonalit, value]) => [`${key}-${tonalit}`, `${color}${value}`])
    )
}