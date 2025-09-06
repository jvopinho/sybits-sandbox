import { createContext, useState, type PropsWithChildren } from 'react'

interface Flag {
    name: string
    bitValue: bigint
    value: bigint
    isDefault?: boolean
}

interface FlagsContextProps {
    flags: Flag[]
    addFlag(name: string, isDefault?: boolean): void
    removeFlag(name: string): void
}

export const FlagsContext = createContext<FlagsContextProps>({} as FlagsContextProps)

export const FlagsProvider: React.FC<PropsWithChildren> = (props) => {
    const mockedFlags = [
            'read:user_session',
            'create:user_session',
            'read:activation_token',
            'create:post',
            'delete:owned_post',
            'update:owned_post',
            'create:recovery_token:username',
        ].map((name, i) => {
            const value = BigInt(i)

            return { name, isDefault: name == 'read:activation_token', value: value, bitValue: 1n << value }
        })
    const [flags, setFlags] = useState<Flag[]>(mockedFlags)

    
    const flagsContextProps: FlagsContextProps = {
        addFlag(name: string, isDefault?: boolean) {
            const value = BigInt(flags.length)

            setFlags([...flags, { name, isDefault, value: value, bitValue: 1n << value }])
        },
        flags,
        removeFlag() {}
    }
    
    return (
        <FlagsContext.Provider value={flagsContextProps}>
            {props.children}
        </FlagsContext.Provider>
    )
}