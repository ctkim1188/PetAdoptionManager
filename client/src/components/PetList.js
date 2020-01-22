import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

const PetList = props => {

    const [pets, setPets] = useState([]);

    useEffect( () => {
        axios.get('http://localhost:9999/api/pets')
            .then( res => setPets(res.data))
    },[])


    return(
        <>
        <h3>These Pets are looking for a home!</h3>
        <Link to ='/pets/new'>Add a pet to the shelter</Link>
        <table>
            <thead>
                <tr>
                    <td>Pet Name</td>
                    <td>Type</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
                {console.log(pets)}
                {pets.map((pet, index) => {
                    return(
                        <tr key ={index}>
                            <td>{pet.name}</td>
                            <td>{pet.type}</td>
                            <td> <Link to={'/pets/' + pet._id}>Details</Link>  <Link to={'/pets/' + pet._id + '/edit'}>Edit</Link> </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>
    )


}

export default PetList