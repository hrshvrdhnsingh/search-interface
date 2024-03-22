import React from 'react'

const Video = ({results}) => {
    
  return (
    <div className='flex justify-center min-h-screen w-screen mb-36' >
      <div className='flex justify-center w-10/12 h-full gap-5 p-5 flex-wrap outer-video-div'>
        {
          results && results.length > 0 ? results.map((videopost, index) => (
            <div className='video-result-container flex flex-col p-2 justify-center' key={index} >
              <div className='' style={{ backgroundImage: `url(${videopost.snippet.thumbnails.medium.url})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              </div>
              <p className='mt-auto text-lime-400'>{videopost.snippet.title.substring(0,55)}</p>
            </div>
          )): (<div className='text-lime-800 text-center text-4xl'>Failed to show results</div>) 
        }
      </div>
    </div>
  )
}

export default Video
