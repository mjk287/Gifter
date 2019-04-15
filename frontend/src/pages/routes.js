import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import UsernameRoutes from './username/_gifts/routes'
import GiftsRoutes from './username/_gifts/routes'

class Routes extends React.Component {
  render() {
    console.log(this.props)
    return(
      <Switch>
        <Route
          path='/:username'
          render={({match}) => <UsernameRoutes userObj={this.props.userObj} match={match}/>}
        />

      </Switch>
    )
  }
}

export default Routes
