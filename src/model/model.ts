export enum ActionType {
    ACTION_NAME = 'action/ACTION_NAME',
}

export interface Action<T> {
    type: ActionType;
    payload: T;
}

export class Token {
    readonly address: string;
    readonly decimals: number;
    readonly name?: string;
    readonly symbol?: string;

    constructor(
        address: string,
        decimals: number,
        name?: string,
        symbol?: string
    ) {
        this.name = name;
        this.symbol = symbol;
        this.address = address;
        this.decimals = decimals;
    }
}

export interface TokenList {
    [symbol: string]: Token;
}

export interface TokensType {
    [name: string]: Token
}


export interface Bond {
    name: string;
    token0: string;
    token1: string;
}
