import React from "react";
import Grid from "@material-ui/core/Grid";
import youtube from "../api/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";


class App extends React.Component {
  
  state = {
    videos: [],
    selectedVideo: null,
  }

  

  componentDidMount() {
      this.handleSubmit("react");
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video})
  }

  handleSubmit = async (termFromSearchBar) => {
    const response = await youtube.get('/search', {
      params: {
        q: termFromSearchBar
      }
    })
    this.setState({ videos: response.data.items, selectedVideo: response.data.items[0] })
  }

  render(){
    const { selectedVideo, videos } = this.state;
    return (
      <Grid justify="center" container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={8}>
            <Grid item xs={12}>
             <SearchBar onFormSubmit={this.handleSubmit} />
            </Grid>
            <Grid item xs={12} md={8}>
              <VideoDetail video={selectedVideo}/>
            </Grid>
            <Grid item xs={12} md={4}>
            <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  } 
}

export default App;