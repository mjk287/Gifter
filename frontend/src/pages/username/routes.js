import React from 'react'
import { Switch, Route, RedirectTo } from 'react-router-dom'
import GiftsRoutes from './_gifts/routes'

class UsernameRoutes extends React.Component {
  render(){
    return(
      <Switch>
      <Route
        path={`${this.props.match.url}`}
        render={({match}) => <GiftsRoutes user={this.props.userObj} match={match}/>}
      />
      </Switch>

    )
  }
}
