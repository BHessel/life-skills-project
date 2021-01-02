import './App.scss';
import React, {Component} from 'react';
import TopNavBar from './containers/TopNavBar';
import SideNavBar from './containers/SideNavBar';
import VideoContainer from './containers/VideoContainer';


const url = 'http://localhost:3000/videos'
class App extends Component {

state = {
  videos: []
}

async componentDidMount(){
  const response = await fetch(url)
  const videos = await response.json()
  this.setState({ videos })
}



render() {
  return (
    <div className="App">
      <TopNavBar/>
      <SideNavBar/>
      <VideoContainer
        videos = {this.state.videos}
      />
     
    </div>
  );
}
}

export default App;
