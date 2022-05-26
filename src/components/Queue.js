import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import '../table.css'

const Queue = () => {
    const { division_id } = useParams();
    const value = 'queue_id3'
    const status = {
        value1: "1",
        value2: "2",
        value3: "3"
    }
    return (
        <div id='division_body'>
            <table className="rwd-table">
                <tbody>
                    <tr>
                        <th>Queue Name</th>
                        <th>Status</th>
                        <th>Number</th>
                    </tr>
                    <tr>
                        <td data-th="Movie Title">Queue 1</td>
                        <td>
                            <span id="circle" style={{ backgroundColor: "rgb(25, 254, 0)" }}>
                            </span>
                        </td>
                        <td data-th="Genre"><Link className="nav-link active" aria-current="page" to="/agent/queue_id1">View Agents</Link></td>
                    </tr><tr>
                        <td data-th="Movie Title">Queue 2</td>
                        <td>
                            <span id="circle" style={{ backgroundColor: "rgb(254, 0, 0)" }}>
                            </span>
                        </td>
                        <td data-th="Genre"><Link className="nav-link active" aria-current="page" to="/agent/queue_id2">View Agents</Link></td>
                    </tr><tr>
                        <td data-th="Movie Title">Queue 3</td>
                        <td>
                            <span id="circle" style={{ backgroundColor: "rgb(67, 67, 67)" }}>
                            </span>
                        </td>
                        <td data-th="Genre"><Link className="nav-link active" aria-current="page" to={`/agent/${value}`}>View Agents</Link></td>
                    </tr>
                </tbody>
            </table>
            <p>{division_id}</p>
        </div>
    )
}

export default Queue
