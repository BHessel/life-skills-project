import './App.css';
import React, {Component} from 'react';
import TopNavBar from './containers/TopNavBar';
import SideNavBar from './containers/SideNavBar';
import VideoContainer from './containers/VideoContainer';


class App extends Component {

//   componentDidMount(){

// }



render() {
  return (
    <div className="App">
      <TopNavBar/>
      <SideNavBar/>
      <VideoContainer/>
     
    </div>
  );
}
}

export default App;
