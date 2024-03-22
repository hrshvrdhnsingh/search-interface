/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import AppContextProvider, { useResultContext } from "./ContextProvider";
import { unstable_HistoryRouter, useLocation, useNavigate } from "react-router-dom";
import Spinner from "./Spinner";
import Search from "../pages/Search";
import Images from "../pages/Images";
import News from "../pages/News";
import Video from "../pages/Video";
import Home from "./Home";

const Result = () => {
  const { results, loading, getResults, searchTerm, imageResults, getImageResults, newsResults, getNewsResults, videoResults, getVideoResults } = useResultContext();
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {

    if(location.pathname==='/search'){
      if(searchTerm){getResults(searchTerm); }
    }
    else if(location.pathname==='/images'){
      if(searchTerm){getImageResults(searchTerm);}
    }
    else if(location.pathname==='/news'){
      if(searchTerm){getNewsResults(searchTerm);}
    }
    else if(location.pathname==='/videos'){
      if(searchTerm){getVideoResults(searchTerm)}
    }
    else if(location.pathname==='/home'){
      if(searchTerm){navigate('/search');getResults(searchTerm);}
    }
  }, [searchTerm, location.pathname])

  if (loading) return <Spinner />;

  switch (location.pathname) {
    case "/home": {
      if(results && results.length===0) return (<Home />)
      return <Search results={results}/>;
      
    }

    case "/search": {
      if(results && results.length===0) return (<div className='text-3xl text-lime-400 text-center mt-6'>Nothing to show yet !!!</div>)
      return <Search results={results}/>;
    }

    case "/images": {
      if(imageResults && imageResults.length===0) return (<div className='text-3xl text-lime-400 text-center mt-6'>Nothing to show yet !!!</div>)
      return <Images results={imageResults}/>;
    }
    
    case "/news": {
      if(newsResults && newsResults.length===0) return (<div className='text-3xl text-lime-400 text-center mt-6'>Nothing to show yet !!!</div>)
      return <News results={newsResults}/>;
    }

    case "/videos": {
      if(videoResults && videoResults.length===0) return (<div className='text-3xl text-lime-400 text-center mt-6'>Nothing to show yet !!!</div>)
      return <Video results={videoResults}/>;
    }

    default:
      return "ERROR";
  }
};

export default Result;
