import React from "react";
import { Grid } from "@material-ui/core";


const VideoList = ({ videos, onVideoSelect }) => {
  const renderedVideos = videos.map((video, id) => (
    <div
      onVideoSelect={onVideoSelect}
      key={id}
      video={video}
      >
    </div>
  ));

  return (
    <Grid container spacing={10}>
      {renderedVideos}
    </Grid>
  );
}

export default VideoList;