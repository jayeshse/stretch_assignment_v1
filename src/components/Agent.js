import React from 'react'
import { useParams } from 'react-router-dom'

const Agent = () => {
    const { queue_id } = useParams();
    return (
        <div id='division_body'>
            <table className="rwd-table">
                <tbody>
                    <tr>
                        <th>Agent Name</th>
                        <th>Status</th>
                    </tr>
                    <tr>
                        <td data-th="Movie Title">Agent 1</td>
                        <td>GREEN</td>
                    </tr><tr>
                        <td data-th="Movie Title">Agent 2</td>
                        <td>RED</td>
                    </tr>
                </tbody>
            </table>
            <p>{queue_id}</p>
        </div>
    )
}

export default Agent