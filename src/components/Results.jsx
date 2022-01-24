import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const Results = (props) => {
    const [allInfo, setAllInfo] = useState({});
    const { options, id } = useParams();

    useEffect(() => {
        axios.get("https://swapi.dev/api/" + options + "/" + id)
            .then(response => {
                setAllInfo(response.data)
            })
            .catch(err => { setAllInfo("") })
    }, [options, id])

    return (
        <div>
            {
            allInfo.length <= 0 ?
            <div>
                <h1>These aren't the droids you're looking for!</h1>
                <img className="w-50" src="https://www.desktopbackground.org/p/2015/09/13/1010586_obi-wan-kenobi-wallpapers_1920x1200_h.jpg" alt="obi"></img>
            </div>
            : 
            options === "people" ?
            <div>
                <h1>{allInfo.name}</h1>
                <p><b>Height: </b>{allInfo.height} cm</p>
                <p><b>Mass: </b>{allInfo.mass} kg</p>
                <p><b>Hair Color: </b>{allInfo.hair_color}</p>
                <p><b>Skin Color: </b>{allInfo.skin_color}</p>
            </div>
            :
            options === "planets" ?
            <div>
                <h1>{allInfo.name}</h1>
                <p><b>Climate: </b>{allInfo.climate}</p>
                <p><b>Terrain: </b>{allInfo.terrain}</p>
                <p><b>Surface Water: </b>{allInfo.surface_water}</p>
                <p><b>Rotation Period: </b>{allInfo.rotation_period}</p>
            </div>
            : ""
            }
        </div>
    )
}


export default Results;