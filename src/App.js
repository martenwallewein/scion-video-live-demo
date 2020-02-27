import React, { useState } from 'react';
import './App.css';
import VideoJSPlayer from './VideoPlayer';
import { ScionHeader } from './ScionHeader';

const sources = [{
  src: "http://49.12.6.5:8090/streamwebm",
  type: "video/webm",
  label: "SD"
}];

function App() {

  const [selectedSource, setSelectedSource] = useState(sources[0]);

  return (
    <div className="App">
      <ScionHeader source={selectedSource}/>
      <VideoJSPlayer source={selectedSource}/>
    </div>
  );
}

export default App;
