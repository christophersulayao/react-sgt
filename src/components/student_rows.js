import React from 'react';
import {Link} from 'react-router-dom'

const StudentRow = (props) => {

    const {name, course, grade, id} = props.student;
    return (
        <tr>
            <td>
                <Link to={`/student/${id}`}>{name}</Link>
            </td>
            <td>{course}</td>
            <td>{grade}</td>
            <td>
                <button onClick={()=>{props.delete(id)}} className="btn btn small red pulse"> Delete </button>
            </td>
        </tr>
    );
}
export default StudentRow;

