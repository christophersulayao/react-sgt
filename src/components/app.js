import React, {Component} from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import '../assets/css/app.scss';
import 'materialize-css/dist/js/materialize.min';
import AddStudent from './add_student';
import Table from './table';
import studentData from "../data/get_all_students";
import {randomString} from '../helpers';

console.log('Random String 3:', randomString(3));
console.log('Random String 8 default:', randomString(8));
console.log('Random String 5', randomString(5));
console.log('Random String 20', randomString(20));

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

    getStudentData(){
        //call to server to get student data
        this.setState({
            students: studentData
        });
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
