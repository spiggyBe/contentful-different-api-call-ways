import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { getContentfulDataFetch } from '../../helpers/getContentfulDataFetch'

const query = `
    query {
   downloadAppSection(id:"1rgf2KIGFgIYeN51gyG4vO") {
      title,
    buttonText,
    imageBelongToDownloadAppModal{
      url
    }
  }
}
`

interface IDownloadSectionAllDataNeeded {
    downloadAppSection: IDownloadSectionDataParts
}

interface IDownloadSectionDataParts {
    title: string,
    buttonText: string,
    imageBelongToDownloadAppModal: IDownloadSectionUrl,
}

interface IDownloadSectionUrl {
    url: string
}

export const DownloadSection = () => {

    const [data, setData] = useState<null | IDownloadSectionAllDataNeeded>(null)

    useEffect(() => {
        getContentfulDataFetch(query)
            .then((json) => setData(json.data))
    }, [query])

    if (!data) {
        return <span style={{ 'color': '#fff' }}>Loading...</span>
    }

    const titleOfSection = data.downloadAppSection.title
    const btnText = data.downloadAppSection.buttonText

    const urlToRemoveSomePartofHttps = data.downloadAppSection.imageBelongToDownloadAppModal.url
    const imgContentful = `https:${urlToRemoveSomePartofHttps.slice(6, urlToRemoveSomePartofHttps.length)}`

    return (
        <FullWidthContainer>
            <ModalContainer>
                <Title>{titleOfSection}</Title>
                <Button>{btnText}</Button>
                <ImageWrapper>
                    <Image src={imgContentful} width={523} height={482} alt='cosmonaut' />
                    <GradientCircle />
                </ImageWrapper>
            </ModalContainer>
        </FullWidthContainer>
    )
}

const FullWidthContainer = styled.div`
    background-color: #8E48F6;
    width: 100%;    
    height: 263px;    
`

const ModalContainer = styled.div`
    position: relative;
    width: 1440px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`

const Title = styled.h2`    
    height: 90px;
    margin: 37px 0 21px 0;
    line-height: 90px;
    font-size:64px;
    letter-spacing: -2%;
    font-weight: 600;
    color: #fff;
`

const Button = styled.button`
    width: 204px;
    height: 64px;
    background-color: #241F40;
    border: 1px solid #241F40;
    border-radius: 16px;
    line-height: 32px;
    font-size: 18px;
    font-family: 'Gilroy', sans-serif;
    vertical-align: middle;
    text-align: center;
    color: #fff;
    cursor: pointer;
`

const ImageWrapper = styled.div`
    position: absolute;
    top: -50%;
    right: 103px;
`

const GradientCircle = styled.div`
    position: absolute;
    width: 72.82px;
    height: 62px;
    background: linear-gradient(118.61deg, #F7A6A4 10.69%, #EA70E5 48.23%, #8E48F6 84.29%);
    mix-blend-mode: screen;
    filter: blur(59px);
    border-radius: 214px;
    transform: rotate(-4.75deg);
    bottom: 40px;
    left: 20px;
`