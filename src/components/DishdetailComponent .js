import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

    function RenderDish({dish}){
        if (dish != null)
            return (
                <Card className="col-12 col-md-5 m-1">
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );

        else
            return (
                <div></div>
            );
    }

    function RenderComments({array}) {
        if (array.length !== 0) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {array.map(comment => (
                        <ul key={comment.id} className="list-unstyled">
                            <li>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author},
                                &nbsp; 
                                {new Intl.DateTimeFormat('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: '2-digit'
                            }).format(new Date(comment.date))}</p>
                            </li>
                        </ul>
                    ))}
                </div>
            );
        }
        
        else {
            return (
                <div></div>
            );
        }
    }

    const DishDetail = (props) => {
        let dish;
        if (props.selectedDish) {
            dish = (
                <div className="row">
                    <RenderDish dish = {props.selectedDish} />
                    <RenderComments array = {props.selectedDish.comments} />
                </div>
            )

        }
        else {
            dish = <div></div>
        }
       
        return (
            <div className="container">
                {dish}
            </div>
        );
    }  

export default DishDetail;