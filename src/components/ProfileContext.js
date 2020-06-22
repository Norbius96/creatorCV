import React, { useState, createContext } from 'react';

export const ProfileContext = createContext();

export const ProfileProvider = (props) => {
    const [personalData, setPersonalData] = useState([
        {
            name: "John Doe",
            email: "John.Doe@gmail.com",
            city: "New York",
            birthDate: "2000-06-03",
            phoneNumber: "123456789",
            about: "Ea natura multitudinis est: aut seruit humiliter aut superbe dominatur; libertatem, quae media est, nec struere modice nec habere sciunt",
            school: { name: "Hogwart", from: "2010", to: "2020", description: "Hogwarts School of Witchcraft and Wizardry, commonly shortened to Hogwarts, is a fictional British boarding school of magic for students aged eleven to eighteen, and is the primary setting for the first six books in J. K. Rowling's Harry Potter series." },
            work: { name: "Warehouse", from: "2016", to: "2018", description: "This warehouse worker job description sample can assist in your creation of a job application that will attract the most reliable candidates who are qualified for the position. Feel free to revise this job description to meet your specific duties and requirements, and browse Monster’s warehouse job listings for more ideas for crafting a successful description." }
        }
    ]);

    return (
        <ProfileContext.Provider value={[personalData, setPersonalData]}>
            {props.children}
        </ProfileContext.Provider>

    );
}