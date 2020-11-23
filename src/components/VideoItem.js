import React from "react";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';



const VideoItem = ({ video, onVideoSelect }) => {


  return (
    <Card>
    <CardActionArea style={{ cursor: "pointer" }} onClick={() => onVideoSelect(video)}>
      <CardMedia>
        <img 
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
      </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {video.snippet.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {video.snippet.description}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="Reproducir">
          <PlayArrowIcon />
        </IconButton>
        <IconButton aria-label="Añadir a lista de reproducción">
          <PlaylistAddIcon />
        </IconButton>
        <IconButton aria-label="Añadir a favoritos">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Compartir">
          <ShareIcon />
        </IconButton>
    </CardActions>
    </CardActionArea>
    
  </Card>
  )
};


export default VideoItem;