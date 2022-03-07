import { useState, useEffect } from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { createClient, EntryCollection } from 'contentful'
import { IMediaSectionMovieOrImageFields } from '../../../@types/generated/contentful'

const MediaSectionContainer = styled.section`
    position: relative;
    width: 1249px;
    margin: 0 auto;
    padding-bottom: 90px;
    object-fit: fill;
`

const data = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '',
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || ''
})

const MediaSection = () => {

    const [media, setMedia] = useState<null | EntryCollection<IMediaSectionMovieOrImageFields>>(null)

    useEffect(() => {
        data.getEntries<IMediaSectionMovieOrImageFields>()
            .then((media) => {
                setMedia(media)
            })
            .catch((err) => console.error(err))
    }, [])

    if (media && media.items.length > 0) {
        const { fields } = media.items[0].fields.movieOrImage
        return (
            <MediaSectionContainer>
                <Image
                    src={`https:${fields.file.url}`}
                    width={fields.file.details.image?.width}
                    height={fields.file.details.image?.height}
                    alt="video"
                />
            </MediaSectionContainer>
        )
    }
    return <div>No data loaded</div>
}

export default MediaSection