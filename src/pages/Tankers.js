import React from 'react'
import { Link } from 'react-router-dom'

function Tankers() {
  return (
    <div className='decs'>
        <div className="labels">
          <Link to='/'>
              <h3>განაცხადები</h3>
          </Link>
          <Link to='/tankers'>
              <h3>ტანკერები</h3>
          </Link>
        </div>
    </div>
  )
}

export default Tankers