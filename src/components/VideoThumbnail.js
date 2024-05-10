// components/VideoThumbnail.js

import React from 'react';
import { Link } from 'react-router-dom';

const VideoThumbnail = ({ video }) => {
  const { snippet } = video;

  return (
    <div className="video-thumbnail">
      <Link to={`/video/${video.id.videoId}`}>
        <img src={snippet.thumbnails.medium.url} alt={snippet.title} />
        <h2>{snippet.title}</h2>
      </Link>
    </div>
  );
};

export default VideoThumbnail;
