import React from "react";
import Headers from "Components/Headers";
import Card from 'react-bootstrap/Card';

function Feedback() {
    const shoot=() =>{
        alert('THANK YOU..! For Your Valuable Feedback');
    }
    return (
        <>
            <Headers />
            <h1 className="text-danger text-center"> Give Your Feedback</h1>
            <Card style={{ width: '18rem' }} className="mt-3 mx-auto">
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ04NqY0XWOpLQvsNwr2-XF2o-vzg-zHsyn2w&usqp=CAU" />
                <Card.Body>
                    <Card.Title>RESTAURANT SAVIRUCHI</Card.Title>
                    <Card.Text>
                        <form>
                            <label >Enter your name:
                                <input type="text"/>
                            </label>
                            <label className="mt-3">Your Valuable Comments:
                                <textarea>

                                </textarea>
                            </label>
                            
                        </form>
                
                    </Card.Text>
                   
                </Card.Body>
                <button  onClick={shoot} class="btn btn-primary mx-auto mb-2">Submit</button>
            </Card>
        </>
    )
}
export default Feedback;
