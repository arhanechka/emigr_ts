import { createContext } from 'react'

export interface IUserContext {
    scenario: string,
    regionMatched: boolean,
    countries? : string[]
}

