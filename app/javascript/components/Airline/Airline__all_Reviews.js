import React, { useState, useEffect } from 'react'

// $ yarn add axios
import axios from 'axios'

import Review from './Review'

const Airline__all_Reviews = (props) => {
    const [airline, setAirline] = useState({})
    const [review, setReview] = useState({})

    
    console.log('Ariline __ all Reviews ');
    console.log('props: ', props);
    // or console.log(props);
    // btw, "props" is an object, you can't put object in a string
    // `string: ${props}`
    // no work
    console.log('-------------');
    const slug = props.match.params.slug
    // variable inside a string: `somestring ${var} somestring`
    const _url   = `/api/v1/airlines/${slug}`

    useEffect(() => {
        // props no go here

        //get all airlines
        axios.get(_url)
             .then( response => {
                // why .data.data you may ask
                console.log('response', response);
                console.log('-------------');
                setAirline(response.data.data);
                // debugger;
             })
             .catch(response => console.log(response));
            
        axios.get(`/api/v1/reviews/`);
    }, [])

    // const airline_id = airline.data.id

    // axios.post('/api/v1/reviews', {review, airline_id})
    // .then( response => {
    //     // why .data.data you may ask
    //     console.log(response)
    //     const included = [ ...airline.include, response.data ]
    // })
    // .catch(response => console.log(response) )
        
    
    console.log("airline", airline);

    return <>
        <div>Airline SHOW DETAILS</div>
        
        <table>
            <thead></thead>
            <tbody>
                <tr>
                    <td>At your service:  </td>
                    <td>
                        <strong>
                            {airline.attributes && airline.attributes.name}
                        </strong>
                    </td>
                </tr>
                <tr>
                    <td>
                        {/* {console.log(airline.relationships && airline.relationships.reviews.length)} */}
                        // needed massive of failed console.log and breakpoint-debugging
                        {airline.relationships && airline.relationships.reviews.data.length}
                        <span> reviews</span>
                    </td>
                </tr>    
                <tr>
                    <td>Score: </td>
                    <td>{airline.attributes && airline.attributes.avg_score} out of 5</td>
                </tr>            
            </tbody>
        </table>
    </>
}
  
export default Airline__all_Reviews