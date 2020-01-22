import React, {useState} from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';


const PetForm = () => {

    const [errors, setErrors] = useState([]);
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skillOne, setSkills1] = useState();
    const [skillTwo, setSkills2] = useState();
    const [skillThree, setSkills3] = useState();


    const onSubmit = event => {
        event.preventDefault();
        axios.post('http://localhost:9999/api/pets/create', {
            name,
            type,
            description,
            skillOne, 
            skillTwo, 
            skillThree
        })
        .then(res => {
            navigate('/')
        })
        .catch( err => {
            console.log(err.response.data.errors);
            const errorResponse = err.response.data.errors;
            const errorArray =[];
            for(const key of Object.keys(errorResponse)){
                errorArray.push(errorResponse[key].message)
            }
            setErrors(errorArray);
        })
    }


    return(
        <>
        {errors.map ((err, index) => 
            <p key ={index} style = {{color: "red"}}> {err} </p>
        )}

        <form onSubmit = {onSubmit}>
            <label>Pet Name: </label>
            <input type = "text" onChange = {(event) => setName(event.target.value)}/>
            <br/>
            <label>Pet Type: </label>
            <input type = "text" onChange = {(event) => setType(event.target.value)}/>
            <br/>
            <label>Pet Description: </label>
            <input type = "text" onChange = {(event) => setDescription(event.target.value)}/>
            <br/>
            <hr></hr>
            <label>Skills (optional): </label>
            <br></br>
            <label>Skill 1: </label>
            <input type = "text" onChange = {(event) => setSkills1(event.target.value)}/>
            <br/>
            <label>Skill 2: </label>
            <input type = "text" onChange = {(event) => setSkills2(event.target.value)}/>
            <br/>
            <label>Skill 3: </label>
            <input type = "text" onChange = {(event) => setSkills3(event.target.value)}/>
            <br/>
            <br/>
            <button> Submit </button><span> </span>
            <Link to ='/pets'>Cancel</Link>
        </form>
        </>
    )

}

export default PetForm