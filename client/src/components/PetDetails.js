import React, { useEffect, useState} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';


const PetDetails = props => {
    const id = props.id
    const [pet, setPets] = useState({})
    const [count, setCount] = useState(0)
    const [likes, setLikes] = useState()
    
    useEffect( () => {
        axios.get("http://localhost:9999/api/pet/" + id)
        .then(res => {
            setPets(res.data);
            setLikes(res.data.likes)
        })
    }, [])
    
    
    const adopt = petID => {
        axios.delete("http://localhost:9999/api/pet/" + petID)
            .then(res => {
                //console.log(res)
                navigate('/')
            });
    }

    const like = (petID, num) => {
        setLikes(likes + num)
        axios.put("http://localhost:9999/api/pet/" + petID, {
            likes: likes + num
        })
            .then(res => {
                setCount(1)
                console.log(res)
                setPets(res.data)
            })
    }

    
    
    {console.log(likes)}

    return(
        <div>
            <p>Details about {pet.name}</p>
            <label>Description : </label><span>{pet.description}</span>
            <br/>
            <label>Type : </label><span>{pet.type}</span>
            <br/>
            <hr/>
            <label>Pet's Skills : </label>
                {pet.skillOne ? <p>{pet.skillOne}</p>:<p></p>}
                {pet.skillTwo ? <p>{pet.skillTwo}</p>:<p></p>}
                {pet.skillThree ? <p>{pet.skillThree}</p>:<p></p>}
            <br/><hr/>
            <label>Likes : </label><span>{pet.likes}</span>
            <br/>
            <button onClick = {event => {adopt(pet._id)}}>Adopt this Pet!</button><span>  </span>
            {count === 0 ? <button onClick ={event => {like(pet._id, 1)}} >Like!</button>: <span></span>}
            <span>  </span>
            <Link to = '/'>Cancel</Link>
        </div>
    )

}

export default PetDetails