import React from 'react'
import {Switch, Route, RedirectTo} from 'react-router-dom'
import Gifts from './index'
import CreatePage from './create'

class GiftsRoutes extends React.Component {
  render(){
    console.log(this.props.match.url)
    return(
      <Switch>
        <Route
          exact
          path={`${this.props.match.url}/gifts`}
          render={() => <Gifts />}
        />
        <Route
          exact
          path={`${this.props.match.url}/gifts/create`}
          render={() => <CreatePage user={this.props.user} />}
        />
        <Route
          path={`${this.props.match.url}/gifts/:id`}
        />

      </Switch>
    )
  }
}

export default GiftsRoutes
