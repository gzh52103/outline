import React from 'react';
import { Route,Redirect,Switch } from 'react-router-dom'
import Add from './Add'
import List from './List'

class Class extends React.Component {

    render() {
        console.log('Class.props', this.props);
        const {match} = this.props
        return (
            <div>
                Class
                <Switch>
                    <Route path={match.path + '/add'} component={Add} />
                    <Route path={match.path + '/list'} component={List} />
                    <Redirect from={match.path} to={match.path + '/list'} exact />

                </Switch>
            </div>
        )
    }
}



export default Class