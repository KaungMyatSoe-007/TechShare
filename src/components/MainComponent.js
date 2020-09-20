//Container Component

import React,{Component} from 'react';
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import DishDetail from "./DishdetailComponent ";
import Footer from "./FooterComponent";
import {DISHES} from '../shared/dishes';

class Main extends Component{
  constructor(props){
    super(props);

    this.state={
      //can get data from external js object file by importing
      dishes : DISHES,
      selectedDish : null
    }
  }
//   onDishSelect(dishID){
//     this.setState({selectedDish:dishID})
//     }
  render(){
    return (
      <div>
        <Header />
        <Menu dishes={this.state.dishes} 
                viewDetailDish ={(dishID) => this.setState({selectedDish:dishID})}
        />
        <DishDetail selectedDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish )[0]} />
        <Footer />
      </div>
    );
  }
}
export default Main;
