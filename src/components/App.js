import React from "react";
import "../App.css";
import { connect } from "react-redux";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import UserHome from "./UserHome";
import NotFound from "./NotFound";
import Alert from "./Alert";
import NavBar from "./NavBar";
import AuthPage from "./AuthPage";
import AuthorForm from "./AuthorForm";
import NewArticle from "./NewArticle";
import Loading from "./Loading";
import ArticleByAuthor from "./ArticleByAuthor";
class App extends React.Component {

  render() {
    const { isAuthenticated } = this.props.authedUser;
    const { alertMessage, loading } = this.props;
    console.log(isAuthenticated,loading)
    return (
      <div>
        <NavBar />
        {alertMessage && <Alert />}
        {loading ? (
          <Loading />
        ) : (
          <Switch>
            <Route
              exact
              path="/home"
              render={() =>
                isAuthenticated ? (
                  <UserHome />
                ) : (
                  <AuthPage />
                )
              }
            />
            <Route exact path="/" component={AuthPage} />
            <Route exact path="/authorForm" render={() =>
                isAuthenticated ? (
                  <AuthorForm />
                ) : (
                  <AuthPage />
                )
              } />
            <Route exact path="/newArticle" render={() =>
                isAuthenticated ? (
                  <NewArticle />
                ) : (
                  <AuthPage />
                )
              } />
              <Route exact path="/myArticles" render={() =>
                isAuthenticated ? (
                  <ArticleByAuthor />
                ) : (
                  <AuthPage />
                )
              } />
            <Route path="/signup" component={AuthPage} />

            <Route render={() => <NotFound history={this.props.history} />} />
          </Switch>
        )}
      </div>
    );
  }
}

function mapStateToProps({ authedUser, alertMessage, loading }) {
  console.log(authedUser);
  return {
    authedUser,
    alertMessage,
    loading,
  };
}

export default withRouter(connect(mapStateToProps)(App));
