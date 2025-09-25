import { createContext, ReactNode, useState } from 'react';

export type AccountProps = {
    name: string;
    email: string;
    number: string;
    password: string;
    confirmPassword: string;
    username: string;
}

type AccountFromContextDataProps = {
    accountFormData: AccountProps;
    updateFormData: (data: AccountProps) => void;
}

type AccountFormContextProviderProps = {
    children: ReactNode;
}

const AccountFormContext = createContext<AccountFromContextDataProps>({} as AccountFromContextDataProps);

function AccountProvider({children}: AccountFormContextProviderProps) {
    const [accountFormData, setAccountFormData] = useState<AccountProps>({} as AccountProps);

    function updateFormData(data: AccountProps) {
        setAccountFormData((prevState) => ({...prevState, ...data}) );
    }

    return(
        <AccountFormContext.Provider value={{ accountFormData, updateFormData }}>
            {children}
        </AccountFormContext.Provider>
    );

}

export { AccountProvider, AccountFormContext };