import React from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import '../assets/css/app.scss';
import 'materialize-css/dist/js/materialize.min';
import AddStudent from './add_student';
import Table from './table';


const App = () => (
    <div>
        <h1 className="center">SGT</h1>
        <div className="row">
            <div className={"col s12 m8"}>
                <Table/>
            </div>
            <div className="col s12 m4">
                <AddStudent/>
            </div>
        </div>
    </div>
);

export default App;
