import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import React, { useState } from "react";


const Search = (props) => {
    const history = useHistory();
    const [options, setOptions] = useState("");
    const [id, setId] = useState("");


    const onSubmitHandler = (event) => {
        event.preventDefault();
        history.push("/" + options + "/" + id);
    }


    return (
        <div className='w-50 mx-auto pt-5'>
            <form onSubmit={onSubmitHandler}>

                <label>Search For:</label>
                <select className="form-select" name="option" onChange={(event)=> setOptions(event.target.value)}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                <br></br>

                <label>ID#:</label>
                <input type="number" name="id" onChange={(event)=> setId(event.target.value)} />
                <br></br><br></br>

                <input type="submit" value="Find Stuff!" className='btn btn-lg btn-warning' />

            </form>
        </div>
    )
}

export default Search;