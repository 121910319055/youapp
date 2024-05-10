
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoThumbnail from './VideoThumbnail';
import SearchBar from './SearchBar';

const HomePage = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async (query = 'surfing') => {
    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          key: process.env.REACT_APP_YOUTUBE_API_KEY,
          part: 'snippet',
          q: query,
          maxResults: 10,
          type: 'video'
        }
      });
      setVideos(response.data.items);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  return (
    <div>
      <h1>YouTube Clone</h1>
      <SearchBar onSearch={fetchVideos} />
      <div className="video-thumbnails">
        {videos.map((video) => (
          <VideoThumbnail key={video.id.videoId} video={video} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
