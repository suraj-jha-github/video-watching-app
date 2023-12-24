import './App.css';

import youtube from './api/youtube';
import SearchBar from './components/SearchBar';
import Grid from '@mui/material/Grid';
import React, { useState } from 'react';
import VideoDetail from './components/Videodetail';
import VideoList from './components/VideoList';



function App() {
  const [videos,setVideos]=useState([]);
  const [selectedVideo,setSelectedVideo]=useState({id:{},snippet:{}});
  return (
    

    <Grid style={{justifyContent:'center'}} container spacing={10}>
      <Grid item xs={11} >
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBar onSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={4}>
            <VideoDetail  video={selectedVideo} />
          </Grid>
          <Grid item xs={4}>
            <VideoList videos={videos} onVideoSelect={setSelectedVideo} />

          </Grid>
          <Grid item xs={8}>

          </Grid>
        </Grid>
      </Grid>
    </Grid>

  );
  async function handleSubmit(searchItem) {
    const {data:{items:videos}} = await youtube.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyCHz7hao34m1x-GPmTHGvtcqbAqkcHrdv4",
        q: searchItem,
      }
    });
    setVideos(videos);
    setSelectedVideo(videos[0]);


  }
}

export default App;
