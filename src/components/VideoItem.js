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
import {makeStyles} from '@material-ui/core/styles';

const useStyle = makeStyles({
  buttonCustom : {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
  imgCardMedia : {
    maxWidth: 345,
    minHeight: "100%",
  },
});

const VideoItem = ({ video, onVideoSelect }) => {

  const classes = useStyle();

  return (
    <Card style={{}}className="classesroot">
    <CardActionArea style={{ cursor: "pointer" }} onClick={() => onVideoSelect(video)}>
      <CardMedia className={classes.imgCardMedia}>
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