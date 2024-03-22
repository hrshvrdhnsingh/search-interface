import React from 'react'

const Images = ({results}) => {
  return (
    <div className='flex justify-center min-h-screen w-screen mb-36 outer-image-div' >
      <div className='flex justify-center w-10/12 h-full gap-5 p-1 flex-wrap inner-image-div'>
        {
          results && results.length > 0 ? results.map((imagepost, index) => (
            <div className='image-result-container flex flex-col p-2 justify-center' key={index} onClick={()=> window.open(imagepost.image.contextLink, '_blank')}>
              <div className='w-10/12 h-6/12' style={{ backgroundImage: `url(${imagepost.link})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                {/* <img src={imagepost.link} alt='' className='image-result'></img> */}
              </div>
              <p className='mt-auto text-lime-400' dangerouslySetInnerHTML={{ __html: imagepost.htmlTitle.substring(0,45)}}></p>
            </div>
          )): (<div className='text-lime-800 text-center text-4xl'>Failed to show results</div>) 
        }
      </div>
    </div>
  )
}

export default Images
