import React from 'react';
import { withRouter, Switch, Route, Redirect,useHistory,useLocation,useParams,useRouteMatch } from 'react-router-dom';
import { withStorage, withUser, withStorages, withAuth } from '@/utils/hoc';

import Add from './Add'
import List from './List'
import Edit from './Edit'

function Student(props) {
    console.log('Student.props', props);
    // Hooks
    const history = useHistory();
    const location = useLocation()
    // 获取路由参数
    const params = useParams()
    const route = useRouteMatch('/home')

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