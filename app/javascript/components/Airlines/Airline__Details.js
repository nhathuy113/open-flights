import React from 'react'

import { Link } from 'react-router-dom'

const Airline__Details = (props) => {
    console.log('Ariline __ Details');
    console.log(props);

    return <>
        {/* <div>Airline SHOW DETAILS</div> */}
        <td>{props.attributes.name}</td>
        
        <td>{props.attributes.avg_score}</td>
        <td>
            {/* <a href={`/airlines/${props.attributes.slug}`}>Read all reviews</a> */}
            <Link to={`/airline/${props.attributes.slug}`}>Read all reviews</Link>
        </td>
    </>
}
  
export default Airline__Details