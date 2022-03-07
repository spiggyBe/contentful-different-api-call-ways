import React, { ReactNode } from "react";
import GlobalStyle from '../../../styles/GlobalStyle'
import Navbar from '../Navbar/Navbar'

interface ILayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
    return (
        <>
            <GlobalStyle />
            <Navbar />
            {children}
        </>
    )
}

export default Layout