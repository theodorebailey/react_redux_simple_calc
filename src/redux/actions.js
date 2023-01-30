import { WITHDRAW, DEPOSIT, INTEREST, CHARGES } from './actionTypes';

// export actions
// actions types - functionality will be in our reducer
export const Withdraw = (number) => {
    return {
        type: WITHDRAW,
        payload: number
    }
}

export const Deposit = (number) => {
    return {
        type: DEPOSIT,
        payload: number
    }
}

export const Interest = (number) => {
    return {
        type: INTEREST,
        payload: number
    }
}

export const Charges = (number) => {
    return {
        type: CHARGES,
        payload: number
    }
}