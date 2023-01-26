import React from 'react'
import Admin from './Admin'
import Form from './Form'
import MainTab from './MainTab'

function Body() {
  return (
    <div>Body
        <Admin/>
        <div className='bodyTab'>
        <div className='mainTab'>
        <MainTab />
        </div>
        <hr/>
        
        <Form />
        </div>

        
    </div>
  )
}

export default Body