/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useContext, useState, createContext } from "react";

const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [imageResults, setImageResults] = useState([]);
  const [newsResults, setNewsResults] = useState([]);
  const [videoResults, setVideoResults] = useState([]);

  //For search results
  const getResults = (searchTerm) => {
    setLoading(true);
    const apiKey = process.env.REACT_APP_API_KEY;
    const cx = process.env.REACT_APP_CX_KEY;
    const encodedSearchTerm = encodeURIComponent(searchTerm);
    const baseUrl = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${encodedSearchTerm}`;
    fetch(baseUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.error) {
          throw new Error(data.error.message);
        }
        setResults(data.items); // Assuming 'items' contains the search results
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setResults([]);
        setLoading(false);
      });
  };

  //For image results
  const getImageResults = async (searchTerm) => {
    setLoading(true);
    const apiKey = process.env.REACT_APP_API_KEY;
    const cx = process.env.REACT_APP_CX_KEY;
    const encodedSearchTerm = encodeURIComponent(searchTerm);
    const baseUrl = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&searchType=image&q=${encodedSearchTerm}`;

    try {
      const response = await fetch(baseUrl);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error.message);
      }
      setImageResults(data.items);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setImageResults([]);
      setLoading(false);
    }
  };

  //For news search
  const getNewsResults = async (searchTerm) => {
    setLoading(true);
    const apiKey = process.env.REACT_APP_NEWS_KEY;
    let encodedSearchTerm = encodeURIComponent(searchTerm);
    try {
      let url = `https://api.worldnewsapi.com/search-news?api-key=${apiKey}&text=${encodedSearchTerm}&number=15&language=en`;
      const response = await axios.get(url);
      setNewsResults(response.data.news);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  //For video results
  const getVideoResults = async (searchTerm) => {
    setLoading(true);
    const apiKey = process.env.REACT_APP_YOUTUBE_API;
    let encodedSearchTerm = encodeURIComponent(searchTerm);
    try {
      let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodedSearchTerm}&type=video&maxResults=26&key=${apiKey}`;
      const response = await axios.get(url);
      setVideoResults(response.data.items);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };
  const value = {
    results,
    setResults,
    getResults,
    loading,
    setLoading,
    searchTerm,
    setSearchTerm,
    imageResults,
    setImageResults,
    getImageResults,
    newsResults,
    setNewsResults,
    getNewsResults,
    getVideoResults,
    setVideoResults,
    videoResults,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useResultContext = () => useContext(AppContext);
