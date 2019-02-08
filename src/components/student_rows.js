import React from 'react';

const StudentRow = (props) => {

    const {name, course, grade} = props.student;
    return (
        <tr>
            <td>{name}</td>
            <td>{course}</td>
            <td>{grade}</td>
        </tr>
    );
}
export default StudentRow;

//pass information in USE PROPS