import { extend } from "jquery";
import { Component } from "react";
import React from 'react';
import ReactDOM from 'react-dom';
import { NULL } from "node-sass";





class DishDetail extends  React.Component
{ 
     constructor(props){
          super(props)
          this.state={

          }
     }
     onDishSelect(dish){
          this.setState({ selectedDish: dish})
     }
 
     render( dish){
if(dish!=null){
     return (
          <Card >
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
     )
} else
{
     return (
          <div>
          </div>
      )
}
     }
     render() {

          const comment = this.props.dishes.map((dish) => {
              return ( 
                  <div key={dish.key}>
                      <ul className="unorder-list">
                          {dish.comments}
                      </ul>
                  </div>
              )
          })
  
          return (
              <div className="row col-12 col-lg-5 m-1">
                  <Card >
                    HEre i have to put the info the name the img and these things 
                  </Card>
              </div>
          );
      }
  }
  
  export default DishDetailComponent;