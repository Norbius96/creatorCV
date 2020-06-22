import React, { useContext } from 'react';
import { ProfileContext } from './ProfileContext';



function Preview() {

    const [personalData, setPersonalData] = useContext(ProfileContext);

    return (
        <div className="myCV" id="myCV">
            <div className="headingCV">
                <h1>{personalData[0].name}</h1>
                <ul>
                    <li>City: <b>{personalData[0].city}</b></li>
                    <li>Birth Date: <b>{personalData[0].birthDate}</b></li>
                    <li>E-mail: <b>{personalData[0].email}</b></li>
                    <li>Phone Number: <b>{personalData[0].phoneNumber}</b></li>
                </ul>
            </div>
            <blockquote><i>{personalData[0].about}</i></blockquote>
            <div className="educationCV">
                <h1>Education</h1>
                <div className="school">
                    <h2><i>{personalData[0].school.name}</i></h2>
                    <p className="dateSchool">From: {personalData[0].school.from} To: {personalData[0].school.to}</p>
                    <p className="dateSchool">{personalData[0].school.description}</p>
                </div>
            </div>
            <div className="experienceCV">
                <h1>Experience</h1>
                <div className="work">
                    <h2><i>{personalData[0].work.name}</i></h2>
                    <p className="dateWork">From: {personalData[0].work.from} To: {personalData[0].work.to}</p>
                    <p className="dateSchool">{personalData[0].work.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Preview;
