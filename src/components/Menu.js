import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ProfileContext } from "./ProfileContext";

import { CreatePDF } from "./CreatePDF";

function Menu() {

    const [personalData, setPersonalData] = useContext(ProfileContext);
    const { handleSubmit } = useForm();


    const onSubmit = data => {
        CreatePDF(data.name);
    }


    function changeState(e) {
        const inputName = e.target.name;
        let copyData = [...personalData];

        if (inputName.split(".").length > 1) {
            copyData[0][inputName.split(".")[0]][inputName.split(".")[1]] = e.target.value;
        } else {
            copyData[0][inputName] = e.target.value;
        }

        setPersonalData(copyData)
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <h1>1. Personal Data</h1><hr />

            <label htmlFor="name">Name and Surname:</label>
            <input name="name" type="text" onChange={changeState} maxLength="50" />

            <label htmlFor="city">City:</label>
            <input name="city" type="text" onChange={changeState} maxLength="30" />

            <label htmlFor="city">Birth Date:</label>
            <input name="birthDate" type="date" onChange={changeState} />

            <label htmlFor="email">Email:</label>
            <input name="email" type="email" onChange={changeState} maxLength="50" />

            <label htmlFor="phoneNumber">Phone number:</label>
            <input name="phoneNumber" type="tel" onChange={changeState} maxLength="10" />

            <h1>2. Informations about you</h1> <hr />

            <label htmlFor="about">Write something about you:</label>
            <textarea name="about" maxLength="150" onChange={changeState} />

            <h1>3. Education</h1><hr />

            <div className="education">
                <label htmlFor="school.name">Name of school:</label>
                <input name="school.name" type="text" onChange={changeState} maxLength="100" />
                <div className="item-education">
                    <label htmlFor="school.from">From</label>
                    <input name="school.from" type="month" onChange={changeState} />
                    <label htmlFor="school.to">To</label>
                    <input name="school.to" type="month" onChange={changeState} />
                </div>
                <label htmlFor="school.description">Write what you can:</label>
                <textarea name="school.description" maxLength="150" onChange={changeState} />
            </div>

            <h1>4. Experience</h1><hr />

            <div className="education">
                <label htmlFor="work.name">Name of work:</label>
                <input name="work.name" type="text" onChange={changeState} maxLength="100" />
                <div className="item-education">
                    <label htmlFor="work.from">From</label>
                    <input name="work.from" type="month" onChange={changeState} />
                    <label htmlFor="work.to">To</label>
                    <input name="work.to" type="month" onChange={changeState} />
                </div>
                <label htmlFor="work.description">Write what you can:</label>
                <textarea name="work.description" maxLength="150" onChange={changeState} />
            </div>
            <input type="submit" value="Generate your CV" id="generate" />
        </form >
    );
}

export default Menu;