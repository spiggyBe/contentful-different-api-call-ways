import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Hamburger from './Hamburger/Hamburger'
import styled from 'styled-components'
import { getContentfulDataFetch } from '../../helpers/getContentfulDataFetch'


const query = `
query {
  navbar(id:"4b7KD1smxYNXYvrPCDXNqI") {
    logoOrLogotyp {
      url
    }
    menuLink1,
    menuLink2,
    menuLink3,
    menuLink4,
    buttonInNavbar
  }
}
`

interface INavbarAllDataNeeded {
    navbar: INavbarDataParts
}

interface INavbarDataParts {
    logoOrLogotyp: INavbarLogoUrl,
    buttonInNavbar: string,
    menuLink1: string,
    menuLink2: string,
    menuLink3: string,
    menuLink4: string

}

interface INavbarLogoUrl {
    url: string
}

const Navigation: React.FC<INavbarAllDataNeeded> = () => {
    const [openedMenu, setOpenedMenu] = useState(false)

    const toggleMenu = () => {
        setOpenedMenu(!openedMenu)
    }

    const [data, setData] = useState<null | INavbarAllDataNeeded>(null)

    useEffect(() => {
        getContentfulDataFetch(query)
            .then((json) => setData(json.data))
    }, [query])

    if (!data) {
        return <span style={{ 'color': '#fff' }}>Loading...</span>
    }

    const logoUrlToSlicepartOfHttps = data.navbar.logoOrLogotyp.url
    const logo = `https:${logoUrlToSlicepartOfHttps.slice(6, logoUrlToSlicepartOfHttps.length)}`

    return (
        <Header>
            <GradientDiv />
            <ImageContainer>
                <Link href='#'>
                    <Image src={logo} width={286} height={50} alt="logo" />
                </Link>
            </ImageContainer>
            {openedMenu ?
                (
                    <NavList slideMenu open>
                        <LinksWrapper>
                            <Link href='#'>
                                <NavItem >
                                    <NavLink>{data.navbar.menuLink1}</NavLink>
                                </NavItem>
                            </Link>
                            <Link href='#'>
                                <NavItem >
                                    <NavLink>{data.navbar.menuLink2}</NavLink>
                                </NavItem>
                            </Link>
                            <Link href='#'>
                                <NavItem >
                                    <NavLink>{data.navbar.menuLink3}</NavLink>
                                </NavItem>
                            </Link>
                            <Link href='#'>
                                <NavItem >
                                    <NavLink>{data.navbar.menuLink4}</NavLink>
                                </NavItem>
                            </Link>
                        </LinksWrapper>
                        <Link href='#'>
                            <ButtonWhitepaper>{data.navbar.buttonInNavbar}</ButtonWhitepaper>
                        </Link>
                    </NavList>) : (
                    <NavList>
                        <LinksWrapper>
                            <Link href='#'>
                                <NavItem >
                                    <NavLink>{data.navbar.menuLink1}</NavLink>
                                </NavItem>
                            </Link>
                            <Link href='#'>
                                <NavItem >
                                    <NavLink>{data.navbar.menuLink2}</NavLink>
                                </NavItem>
                            </Link>
                            <Link href='#'>
                                <NavItem >
                                    <NavLink>{data.navbar.menuLink3}</NavLink>
                                </NavItem>
                            </Link>
                            <Link href='#'>
                                <NavItem >
                                    <NavLink>{data.navbar.menuLink4}</NavLink>
                                </NavItem>
                            </Link>
                        </LinksWrapper>
                        <Link href='#'>
                            <ButtonWhitepaper>{data.navbar.buttonInNavbar}</ButtonWhitepaper>
                        </Link>
                    </NavList>
                )
            }
            <Hamburger toggleMenu={toggleMenu} />
        </Header>
    )
}

export default Navigation

const Header = styled.header`
    position: relative;
    width: 1249px;
    height: 177px;
    margin: 0 auto;
    padding: 0 10px 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;;
    background-color: #1D1934;
    @media (max-width: 960px) {
        padding-left: 20px;
    }
`

const GradientDiv = styled.div`
    position: absolute;
    width: 207px;
    height: 178px;
    transform: translate(-50%, -50%);
    background: linear-gradient(118.61deg, #F7A6A4 10.69%, #EA70E5 48.23%, #8E48F6 84.29%);
    filter: blur(149px);
    border-radius: 214px;
`

const ImageContainer = styled.div`
    cursor: pointer;
`

interface INavStyled {
    slideMenu?: any;
    open?: boolean;
}

const NavList = styled.ul<INavStyled>`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    padding-left: 136px;
     @media (max-width: 960px) {
        flex-direction: column;
        justify-content: flex-start;;
        align-items: flex-end;
        padding: 20px;
        position: absolute;
        width: 100%; 
        top: 177px;        
        left: ${({ open }) => open ? "0" : "-100%"};
        background-color: #1D1934;
        border-top: 2px solid #3F3F3F;
        z-index: 9;
    }
`

const LinksWrapper = styled.div`
    display: flex;
`

const NavItem = styled.li`
    padding: 5px 23px;
`

const NavLink = styled.a`
    color: #FFFFFF;
    height: 32px;
    line-height: 32px;
    font-size: 20px;
    cursor: pointer;
`

const ButtonWhitepaper = styled.button`
    width: 159px;
    height: 64px;
    border: 2px solid #F1F1F9;
    border-radius: 16px;
    padding: 16px 24px;
    margin-left: 220px;
    background-color: transparent;
    font-size: 20px;
    color: #fff;
    cursor: pointer;
`