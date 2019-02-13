import React, {Component} from 'react';
import axios from 'axios';
import 'materialize-css/dist/css/materialize.min.css'
import '../assets/css/app.scss';
import 'materialize-css/dist/js/materialize.min';
import AddStudent from './add_student';
import Table from './table';
import studentData from "../data/get_all_students";
import {randomString} from '../helpers';

class App extends Component{
    state = {
        students: []
    }
    componentDidMount(){
        this.getStudentData();
    }
    addStudent = (student) => {
        student.id = randomString();

        this.setState({
           students: [...this.state.students, student]
        });
    }

    deleteStudent = (id) => {
        const indexToDelete = this.state.students.findIndex((student) => {
            return student.id === id;
        });
        if(indexToDelete >= 0){
            const tempStudents = this.state.students.slice();

            tempStudents.splice(indexToDelete,1);
            this.setState({
                students: tempStudents
            });
        }
    }

    async getStudentData(){
        //call to server to get student data

        const resp = await axios.get('http://localhost:8910/server/getstudentlist.php');

        this.setState({
           students: resp.data.data
        });


        //     axios.get('http://localhost:8910/server/getstudentlist.php').then((response) => {
        //     console.log('Server response:', response.data.data)
        //
        //     this.setState({
        //         students: response.data.data
        //     });
        // });


    }
    render(){
        return(
            <div>
                <h1 className="center">Student Grade Table</h1>
                <div className="row">
                    <div className={"col s12 m8"}>
                        <Table  deleteStudent={this.deleteStudent} studentList={this.state.students}/>
                    </div>
                    <div className="col s12 m4 ">
                        <AddStudent add={this.addStudent}/>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
