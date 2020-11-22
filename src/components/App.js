import React from "react";
import { Grid } from "@material-ui/core";
import youtube from "../api/youtube";
import SearchBar from "./SearchBar";

const initContentRender = "React";

class App extends React.Component {
  
  state = {
    videos: [],
    selectedVideo: null,
  }

  

  componentDidMount(initContentRender) {
      this.handleSubmit(initContentRender);
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
              VideoDetail
            </Grid>
            <Grid item xs={12} md={4}>
              VideoList
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  } 
}

export default App;