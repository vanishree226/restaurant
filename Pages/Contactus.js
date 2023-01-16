import React from "react";
import Headers from "Components/Headers";
import Card from 'react-bootstrap/Card';

function Contactus() {
    return (
        <>
            <Headers />
            <h1 className="text-danger text-center">CONTACT US</h1>
            <Card style={{ width: '18rem' }} className="mt-3 mx-auto">
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlQn0LFP53Ufzfm0fooA-hxt9box98OhuPOA&usqp=CAU" />
                <Card.Body>
                    <Card.Title>RESTAURANT SAVIRUCHI</Card.Title>
                    <Card.Text>
                        
                        Address : Bindu Galaxy Chord Rd Rajaji Nagar Industrial Town, Rajajinagar, Bengaluru,<br></br>
                        
                        Hours:
                        Open 5 am , closes 10 pm<br></br>
                        
                        Phone: 080 6152 5151
                      
         

                        
                    </Card.Text>

                </Card.Body>
            </Card>

        </>
    )
}
export default Contactus;
