import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStorage, withUser } from '../utils/hoc';

function Student(props){
    console.log('Student.props',props);
    return (
        <div>
            Student:
        </div>
    )
}

// Student = withUser(Student)
Student = withStorage('token','currentUser','myData')(Student)

export default Student