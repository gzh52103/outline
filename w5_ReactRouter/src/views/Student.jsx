import React from 'react';
import { withRouter } from 'react-router-dom';
import { withStorage, withUser,withStorages,withAuth } from '../utils/hoc';

function Student(props){
    console.log('Student.props',props);
    return (
        <div>
            Student:
        </div>
    )
}

// Student = withUser(Student)
Student = withStorages('token','currentUser')(Student)
Student = withAuth(Student);
export default Student