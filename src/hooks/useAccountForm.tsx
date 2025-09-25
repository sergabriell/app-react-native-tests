import {useContext} from 'react';

import { AccountFormContext } from '../contexts/AccountFormContex';

export function useAccountForm() {
    const context = useContext(AccountFormContext);  

    return context;
}