// components/VideoPlayPage.js

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const VideoPlayPage = () => {
  const { videoId } = useParams();
  const [videoDetails, setVideoDetails] = useState(null);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
          params: {
            key: process.env.REACT_APP_YOUTUBE_API_KEY,
            part: 'snippet',
            id: videoId
          }
        });
        setVideoDetails(response.data.items[0]);
      } catch (error) {
        console.error('Error fetching video details:', error);
      }
    };
    fetchVideoDetails();
  }, [videoId]);

  if (!videoDetails) {
    return <div>Loading...</div>;
  }

  const { snippet } = videoDetails;

  return (
    <div>
      <h1>{snippet.title}</h1>
      <iframe
        title={snippet.title}
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <p>{snippet.description}</p>
    </div>
  );
};

export default VideoPlayPage;
