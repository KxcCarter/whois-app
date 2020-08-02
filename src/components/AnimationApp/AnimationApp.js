import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
  useParams,
} from 'react-router-dom';

// --- custom components ---

import MovieList from '../pages/MovieList/MovieList';
import { Container } from '@material-ui/core';
import MovieDetails from '../pages/MovieDetails/MovieDetails';
import EditMovie from '../pages/EditMovie/EditMovie';
import Header from '../Header/Header';
import { connect } from 'react-redux';

const AnimatedApp = () => {
  return (
    <Container>
      <Router>
        <Header />
        <Switch>
          {/* <Route exact path="/" children={<MovieList />}>
            <Redirect to="/hsl/10/90/50" />
          </Route> */}
          <Route path="*">
            <AnimationApp />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
};

function AnimationApp() {
  let location = useLocation();

  return (
    <div>
      <div>
        <TransitionGroup>
          {/*
            This is no different than other usage of
            <CSSTransition>, just make sure to pass
            `location` to `Switch` so it can match
            the old location as it animates out.
          */}
          <CSSTransition key={location.key} classNames="fade" timeout={300}>
            <Switch location={location}>
              <Route exact path="/" children={<MovieList />} />
              <Route path="/edit/:id" children={<EditMovie />} />
              <Route
                path="/details/:id"
                render={(props) => <MovieDetails {...props} />}
              />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
}

export default connect()(AnimatedApp);
