import React from 'react';
import { withRouter, Switch, Route, Redirect } from 'react-router-dom';
import { withStorage, withUser, withStorages, withAuth } from '@/utils/hoc';

import Add from './Add'
import List from './List'
import Edit from './Edit'

function Student(props) {
    console.log('Student.props', props);
    const {match} = props;
    return (
        <div>
            <Switch>
                <Route path={match.path + '/add'} component={Add} />
                <Route path={match.path + '/list'} component={List} />
                <Route path={match.path + '/:id'} component={Edit} />
                <Redirect from={match.path} to={match.path + '/list'} exact />
            </Switch>
        </div>
    )
}

Student = withRouter(Student);
Student = withUser(Student)
// Student = withStorages('token', 'currentUser')(Student)
// Student = withAuth(Student);
export default Student