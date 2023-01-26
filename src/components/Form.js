import React from 'react'

function Form() {
  return (
    <div>
        <form>
            <div className='main-container'>
            <div className='column'>
            <div><label>School ID:</label>
            <input type="text"/></div>
            <div><label>Name:</label>
            <input type="text"/></div>
            <div><label>Address:</label>
            <input type="text"/></div>
            <div><label>City:</label>
            <input type="text"/></div>
            <div><label>Display:</label>
            <input type="text"/></div>
            <div><label>Contact No:</label>
            <input type="text"/></div>
            </div>
            <div className='column'>
            <div><label>Owner Name:</label>
            <input type="text"/></div>
            <div><label>Started Date:</label>
            <input type="date"/></div>
            <div><label>Logo:</label>
            <input type="file"/></div>
            </div>
            <div className='column'>
            <div><label>Status:</label>
            <input type="checkbox"/></div>
            </div>
            </div>
        </form>
    </div>
  )
}

export default Form