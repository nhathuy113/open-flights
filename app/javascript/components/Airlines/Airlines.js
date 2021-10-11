import React, { useState, useEffect } from 'react'

// $ yarn add axios
import axios from 'axios'

import Airline__Details from './Airline__Details'

const Airlines = () => {
    // init
    const [airlines, setAirlines] = useState([])

    useEffect(() => {
        //get all airlines
        axios.get('/api/v1/airlines.json')
             .then( response => {
                // why .data.data you may ask
                // console.log(response)
                setAirlines(response.data.data)
             })
             .catch(response => console.log(response) )
    }, [airlines.length])

    const list = airlines.map(_item => {
        // return (<li key={airline.attributes.name}>{airline.attributes.name}</li>)
        return (
            <tr>
                <Airline__Details 
                    // key={_item.attributes.name}
                    attributes={_item.attributes}
                />
            </tr>
        )
    })

    return (
        <>
            <div>Airlines INDEX</div>
            {/* <ul>{list}</ul> */}
            <table>
                <thead></thead>
                <tbody>
                    {list}
                </tbody>
            </table>
        </>
    )
}
  
export default Airlines