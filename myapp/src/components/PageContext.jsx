// Create a new file PageContext.js
import { createContext, useContext } from 'react';

const PageContext = createContext();

export const PageProvider = PageContext.Provider;
export const usePage = () => useContext(PageContext);