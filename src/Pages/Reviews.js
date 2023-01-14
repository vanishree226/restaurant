import React from "react";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Headers from "../Components/Headers";
import '../Components/Assets/Profile.css';

function Profile() {
    const [user, setUser] = useState([]);

    const fetchData = () => {
        fetch("https://randomuser.me/api/?nat=us&results=12&page=1")
            .then((response) => {
                return response.json();
            }).then((data) => {
                let info = data.results
                console.log(info);
                setUser(info)
            })
    }
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
            <Headers/>
            <h1 className="text-center text-danger">HAPPY CUSTOMERS</h1>
            <div>
                <div className="row">
                    {user.map(data => (
                        <div className="col-md-3" key={data.id.value}>
                            <div className="card">
                                <div className="card-body">
                                    <div className="avatar">
                                        <img
                                            src={data.picture.large}
                                            className="card-img-top"
                                            alt=""
                                        />
                                    </div>
                                    <h5 className="card-title">
                                        {data.name.first +
                                            " " +
                                            data.name.last}
                                    </h5>
                                    <p className="card-text">
                                        {data.location.country +
                                            ", " +
                                            data.location.postcode
                                        }
                                        <br />
                                        <span className="email">{data.email}</span><br />
                                        <span className="phone">{data.phone}</span><br />
                                        <Button className="mt-3">Read More</Button>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>

    )

}

export default Profile;