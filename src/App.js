import React,{Component} from 'react';
import './App.css';
// import {Navbar, NavbarBrand} from 'reactstrap';
import Main from './components/MainComponent';
// import {DISHES} from './shared/dishes';

class App extends Component{
  // constructor(props){
  //   super(props);

  //   this.state={
  //     //can get data from external js object file by importing
  //     dishes : DISHES
  //   }
  // }
  render(){
    return (
      <div>
          <Main />
      </div>
    );
  }
}


export default App;
