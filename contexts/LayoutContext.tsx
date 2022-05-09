import { createContext, Dispatch, SetStateAction, useContext } from 'react';

type Context = {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
};
const defaultContext = {} as Context;

export const LayoutContext = createContext(defaultContext);

export const useLayoutContext = () => useContext(LayoutContext);
