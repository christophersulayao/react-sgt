import React, {Component} from 'react';

class AddStudent extends Component{
    state = {
        name: "",
        course: "",
        grade: ""
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.add(this.state);
        this.resetForm();
    }

    resetForm = () => {
        this.setState({
            name: '',
            course: '',
            grade: ''
        })
    }



    handleKeyPress = (event) => {

        this.setState({
           [event.target.name]: event.target.value
        });

    }

    render(){
        const {name, course, grade} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="col input-field s10 offset-s1">
                        <input onChange={this.handleKeyPress} name="name" type="text" id="name" value={name} autoComplete="off"/>
                        <label htmlFor="name">Name</label>
                    </div>
                </div>

                <div className="row ">
                    <div className="col input-field s10 offset-s1 ">
                        <input onChange={this.handleKeyPress} name="course" type="text" id="course" value={course} autoComplete="off"/>
                        <label htmlFor="course">Course</label>
                    </div>
                </div>

                <div className="row">
                    <div className="col input-field s10 offset-s1 ">
                        <input onChange={this.handleKeyPress} name="grade" type="text" id="grade" value={grade} autoComplete="off" />
                        <label htmlFor="grade ">Grade</label>
                    </div>
                </div>

                <div className="row">
                    <div className="col s6 center">
                        <button onClick ={this.resetForm} type="button" className="btn red darken-2 btn-floating pulse btn-large">Clear</button>
                    </div>
                    <div className="col s6 center">
                        <button className="btn green btn-floating pulse btn-large  ">Add</button>
                    </div>
                </div>
            </form>
        );
    }
}
export default AddStudent;