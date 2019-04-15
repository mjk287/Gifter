import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import UsernameRoutes from './username/_gifts/routes'
import LoginPage from './login'

class Routes extends React.Component {
  render() {

    return(
      <Switch>
        <Route
          exact
          path='/'
          render={() => <Redirect to={`/${this.props.name}/gifts`}/>}
        />
        <Route
          exact
          path='/login'
          render={<div>login</div>}
        />
        <Route
          path='/:username'
          render={({match}) => <UsernameRoutes match={match}/>}
        />

      </Switch>
    )
  }
}

export default Routes
