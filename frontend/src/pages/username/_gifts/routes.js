import React from 'react'
import {Switch, Route, RedirectTo} from 'react-router-dom'
import Gifts from './index'
import CreatePage from './create'
import ShowPage from './show'

class GiftsRoutes extends React.Component {
  render(){
    return(
      <Switch>
        <Route
          exact
          path={`${this.props.match.url}/gifts`}
          render={() => <Gifts userObj={this.props.userObj}/>}
        />
        <Route
          exact
          path={`${this.props.match.url}/gifts/create`}
          render={() => <CreatePage userObj={this.props.userObj} />}
        />
        <Route
          path={`${this.props.match.url}/gifts/:id`}
          render={({match}) => <ShowPage id={match.params.id}/>}
        />

      </Switch>
    )
  }
}

export default GiftsRoutes
