import React from 'react'
import TitleUL from './TitleUL'
import TextSection from './TextSection'

function VideoEmbed({source='', title='', text=''}) {
  return (
    <section className='video-container inverse-black'>
        <TextSection
          title={title}
          text={text}
        />
        <iframe className='video-full' allowFullScreen src={source}></iframe>
    </section>
  )
}

export default VideoEmbed