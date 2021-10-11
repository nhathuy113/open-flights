import React from 'react'
import ReactDOM from 'react-dom'

import { Route, Switch } from 'react-router-dom'

import TestComponent from './TestComponent'

import Airlines from './Airlines/Airlines'
import Airline__all_Reviews  from './Airline/Airline__all_Reviews'

const App = () => {
    return (
        <Switch>
            
            <Route exact path="/test/:id" component={TestComponent}/>

            <Route exact path="/airline/:slug" component={Airline__all_Reviews}/>
            <Route exact path="/" component={Airlines}/>

            {/* <Route exact path="/airline/:slug">
                <Airline__all_Reviews
                    attributes={":slug"}
                />
            </Route>
            <Route exact path="/airlines">
                <Airlines/>
            </Route>
            <Route exact path="/">
                <Airlines/>
            </Route> */}
        </Switch>
    )
}
  
  export default App