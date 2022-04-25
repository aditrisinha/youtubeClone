import React, { useState } from "react";
import { SearchBar } from "./SearchBar";
import youtube from "../apis/youtube";

export const App = () => {
  const [videos, setVideos] = useState([]);

  const onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setVideos(response.data.items);
  };

  return (
    <div className="ui container">
      <SearchBar onTermSubmit={onTermSubmit} />
    </div>
  );
};
