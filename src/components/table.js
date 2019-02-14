import React, { Component } from 'react';
import StudentRow from './student_rows';
import { Link }  from 'react-router-dom';
import axios from "axios";
import {formatPostData} from "../helpers";



class Table extends Component {
    state = {
        students: null
    }

    componentDidMount() {
        this.getStudentData();

    }

    deleteStudent = async (id) => {

        const formattedId = formatPostData({ id });

        await axios.post('/server/deletestudent.php', formattedId);

        this.getStudentData();

    }

    async getStudentData() {

        const resp = await axios.get('/server/getstudentlist.php');

        this.setState({
            students: resp.data.data || []
        });

    }
    render() {

        const {students} = this.state;
        let studentRows = [];

        if (Array.isArray(students) && students.length) {
            studentRows = students.map((student) => {
                return <StudentRow delete={this.deleteStudent} key={student.id} student={student}/>
            });
        } else if (students === null){
            studentRows.push(
                <tr key="no-data">
                    <td colSpan="4">
                        <h4 className="center grey-text">No Student Data Loading ....</h4>
                    </td>
                </tr>
            );
        } else {
            studentRows.push(
                <tr key="no-data">
                    <td colSpan="4">
                        <h4 className="center grey-text">No Student Data Available</h4>
                    </td>
                </tr>
            );
        }


        return (
            <div>
                <h1 className='center'>Student Grade Table</h1>

                <div className="row">
                    <div className="col s12 right-align">
                        <Link className="btn green pulse" to={"/add_student"}>Add Student </Link>
                    </div>
                </div>

                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Course</th>
                        <th>Grade</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {studentRows}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Table;