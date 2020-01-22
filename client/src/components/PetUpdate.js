import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {navigate, Link} from '@reach/router';

const PetUpdate = props => {
    const id = props.id;
    const [pet, setPet] = useState({});
    const [errors, setErrors] = useState([]);
    const [name, setName] = useState();
    const [type, setType] = useState();
    const [description, setDescription] = useState();
    const [skillOne, setSkills1] = useState();
    const [skillTwo, setSkills2] = useState();
    const [skillThree, setSkills3] = useState();

    useEffect(()=> {
        axios.get('http://localhost:9999/api/pet/' + id)
            .then(res => {
                setPet(res.data)
            })
    },[])

    const onSubmit = event => {
        event.preventDefault();
        axios.put('http://localhost:9999/api/pet/' + id, {
            name,
            type,
            description,
            skillOne,
            skillTwo,
            skillThree
        })
            .then(res => {
                navigate('/pet/' + id);
                console.log(res)
            })
            .catch(err => {
                console.log(err)
                const errorResonse = err.response.data.errors;
                const errorArray = [];
                for (const key of Object.keys(errorResonse)){
                    errorArray.push(errorResonse[key].message)
                }
                setErrors(errorArray);
            })
    }


    return(
        <>
        {errors.map ((err, index) => 
            <p key = {index} style ={{color: "red"}}>{err}</p>
        )}
        <form onSubmit ={onSubmit}>
            <label>Pet Name: </label>
            <input type = "text" defaultValue ={pet.name}  onChange = {(event) => setName(event.target.value)}/>
            <br/>
            <label>Pet Type: </label>
            <input type = "text" defaultValue ={pet.type} onChange = {(event) => setType(event.target.value)}/>
            <br/>
            <label>Pet Description: </label>
            <input type = "text" defaultValue ={pet.description} onChange = {(event) => setDescription(event.target.value)}/>
            <br/>
            <hr></hr>
            <label>Skills (optional): </label>
            <br></br>
            <label>Skill 1: </label>
            <input type = "text" placeholder ={pet.skillOne?pet.skillOne:""} onChange = {(event) => setSkills1(event.target.value)}/>
            <br/>
            <label>Skill 2: </label>
            <input type = "text" placeholder ={pet.skillTwo?pet.skillTwo:""} onChange = {(event) => setSkills2(event.target.value)}/>
            <br/>
            <label>Skill 3: </label>
            <input type = "text" placeholder ={pet.skillThree?pet.skillThree:""} onChange = {(event) => setSkills3(event.target.value)}/>
            <br/>
            <br/>
            <button> Submit </button><span> </span>
            <Link to ={'/pets/' + pet._id}>Cancel</Link>
        </form>
        </>
    )


}

export default PetUpdate