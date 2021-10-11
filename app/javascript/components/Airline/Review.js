import React, { useState, useEffect } from 'react'

// $ yarn add axios
// import axios from 'axios'

const Review = (props) => {
    // {
    // // init
    // const [airlines, setAirlines] = useState([])

    // useEffect(() => {
    //     //get all airlines
    //     axios.get('/api/v1/airlines.json')
    //          .then( response => {
    //             // why .data.data you may ask
    //             console.log(response)
    //             setAirlines(response.data.data)
    //          })
    //          .catch(response => console.log(response) )
    // }, [airlines.length])

    // const list = airlines.map(airline => {
    //     // return (<li key={airline.attributes.name}>{airline.attributes.name}</li>)
    //     return (
    //         <tr>
    //             <Airline__Details 
    //                 key={airline.attributes.name}
    //                 attributes={airline.attributes}
    //             />
    //         </tr>
    //     )
    // })
    // }

    const {description, score} = props.attributes

    return (
        <>
            <table>
                <thead></thead>
                <tbody>
                    <td>description</td>
                    <td>score</td>         
                </tbody>
            </table>
        </>
    )
}
  
export default Review