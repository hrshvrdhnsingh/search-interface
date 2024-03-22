import React from "react";

const News = ({ results }) => {
  return (
    <div className="flex mt-2 justify-center min-h-screen w-screen mb-36">
      <div className="flex justify-center w-7/12 h-full flex-col gap-6 p-1 inner-news-div">
        {results && results.length > 0 ? (
          results.map((newspost, index) => (
            <div className="news-container w-10/12 p-2 flex gap-2" key={index} onClick={() => window.open(newspost.url, "_blank")}>
              <div className="detail-container h-full w-10/12">
                <p className="text-green-600 font-bold">{newspost.title}</p>
                <p className='text-gray-500 news-description'>{newspost.text.substring(0,160)}</p>
              </div>
              <div
                className="newsImageContainer"
                style={{ backgroundImage: `url(${newspost.image}), backgroundSize: 'cover', backgroundPosition: 'center'` }}
              >
                <img src={newspost.image} alt='' className='object-cover w-full h-full'></img>
              </div>
            </div>
          ))
        ) : (
          <div className="text-lime-300 text-center text-4xl">
            Failed to show results
          </div>
        )}
      </div>
    </div>
  );
};

export default News;
