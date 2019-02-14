import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {formatPostData} from '../helpers';

class ViewStudent extends Component {
    state = {
        student: {}
    }

    async componentDidMount() {

    const studentId = formatPostData({
        id: this.props.match.params.id
    });
    const studentData = await axios.post('/server/getstudentdetails.php', studentId)

    this.setState({
        student: studentData.data.data
    });

    }

    render(){
       const { name, course, grade, instructor, notes} = this.state.student;
        return (
            <div>
                <h1 className="center">Student Details</h1>

                <div className="row">
                    <div className="col s12 right">
                        <Link to="/" className="btn blue pulse">Home</Link>
                    </div>
                </div>

                <h1 className="center">{name}</h1>
                <h5 className="center">Course: {course}</h5>
                <h5 className="center">Grade: {grade} %</h5>
                <h5 className="center">Instructor: {instructor}</h5>
                <h5 className="center">Notes: {notes}</h5>
            </div>
        )
    }
}
export default ViewStudent;