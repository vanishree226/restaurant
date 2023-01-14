import React from "react";
import Headers from "../Components/Headers";
import Card from 'react-bootstrap/Card';

function Aboutus() {
    return (
        <>
            <Headers />
            <h1 className="text-danger text-center">ABOUT US</h1>
            <Card style={{ width: '18rem' }} className="mt-3 mx-auto">
                <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-L9bwXrC4RJjaGz7SdRIzMhoM6hxy_n2lDw&usqp=CAU" />
            </Card>
            <p className="mt-3 mx-4 text-dark ">When you’re here, you’re family.

                Eat Fresh.

                Have it your way.

                I don’t even have to tell you what restaurants these taglines come from, because you already know! A good tagline can become part of your restaurant’s identity, almost as much as your name and logo.

                The keys to selecting a great tagline?

                Keep it short, snappy, and easy to remember.

                If you're having trouble coming up with one, here is a list of 187 different restaurant taglines to get you started. Adopt one of these, or use one as a jumping off point to your own clever creation!

                There are a lot of ways you can go with your tagline if you’re not trying to tie in a specific cuisine. You could choose to emphasize your great value, a fun or romantic atmosphere, or the high quality of your product.</p>
            <p className="mt-3 mx-4 text-dark ">When you’re here, you’re family.

                Eat Fresh.

                Have it your way.

                I don’t even have to tell you what restaurants these taglines come from, because you already know! A good tagline can become part of your restaurant’s identity, almost as much as your name and logo.

                The keys to selecting a great tagline?

                Keep it short, snappy, and easy to remember.

                If you're having trouble coming up with one, here is a list of 187 different restaurant taglines to get you started. Adopt one of these, or use one as a jumping off point to your own clever creation!

                There are a lot of ways you can go with your tagline if you’re not trying to tie in a specific cuisine. You could choose to emphasize your great value, a fun or romantic atmosphere, or the high quality of your product</p>

        </>
    )
}
export default Aboutus;