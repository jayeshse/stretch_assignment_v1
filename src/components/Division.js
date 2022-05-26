import React from 'react'
import '../table.css'
import { Link } from 'react-router-dom'

const Division = () => {
  const value = "div_id3"
  return (
    <div id='division_body'>
      <table className="rwd-table">
        <tbody>
          <tr>
            <th>Division</th>
            <th>number</th>
          </tr>
          <tr>
            <td data-th="Movie Title">Division 1</td>
            <td data-th="Genre"><Link className="nav-link active" aria-current="page" to="/queue/div_id1">View Queue</Link></td>
          </tr><tr>
            <td data-th="Movie Title">Division 2</td>
            <td data-th="Genre"><Link className="nav-link active" aria-current="page" to="/queue/div_id2">View Queue</Link></td>
          </tr><tr>
            <td data-th="Movie Title">Division 3</td>
            <td data-th="Genre"><Link className="nav-link active" aria-current="page" to={`/queue/${value}`}>View Queue</Link></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Division