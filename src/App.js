/** 
 * @author:Sandeep Kumar Jena
 * */  


import React from 'react';
import Canvas from './components/canvas/canvas';
import LeftCard from './components/LeftSideCard/Tabs/Leftcard';
import Navigation from './components/Navigation/navigation';
import SideBar from './components/SideBars/sideBar';

const Home=()=>{
  return (
    <React.Fragment>
     <Navigation />
     <LeftCard />
     <Canvas />
     <SideBar />
    </React.Fragment>
  )
}
export default Home;