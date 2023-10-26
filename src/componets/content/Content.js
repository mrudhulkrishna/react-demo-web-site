import React from 'react'
import './Content.css'

function Content() {
  return (
    <div className='content'>
        <table>
            <tr>
                <th>Name</th>
                <th>Class</th>
                <th>Score</th>
            </tr>
            <tr>
                <td>Achu</td>
                <td>10</td>               
                <td>300</td>               
            </tr>
            <tr>
                <td>kichu</td>
                <td>10</td>               
                <td>400</td>  
            </tr>
        </table>
    </div>
  )
}

export default Content