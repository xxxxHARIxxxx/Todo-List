import React from 'react'
import { CardProvider } from './Components/CardContext'
import GetTask from './Components/GetTask'
import ShowTask from './Components/ShowTask'

export default function App(){
    return(
        <CardProvider>
            <h1 className='main--heading'>To-do List</h1>
            <div className='row'>
                    <GetTask/>
                    <ShowTask/>
            </div>
            {/* <h6>Made with ❤️ in Coimbatore</h6> */}
        </CardProvider>
        
    )
}