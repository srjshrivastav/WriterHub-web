import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { unsetAuthedUser } from "../actions/authUsers";
import Alert from "./Alert";
class NavBar extends React.Component {
  logout = () => {
    this.props.dispatch(unsetAuthedUser());
  };

  render() {
    const { isAuthenticated, user } = this.props.authedUser;
    const {alertMessage} = this.props
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark static-top ">
          <div className="container">
            <Link
              className="navbar-brand mr-auto text-white"
              to={isAuthenticated ? "/home" : "/"}
              style={{ fontWeight: "bold", letterSpacing: 1.5, fontSize: 20 }}
            >
              WriterHub
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              {isAuthenticated && (
                <ul className="navbar-nav">
                  <li className="nav-item dropdown hover">
                    <Link
                      className="nav-link dropdown-toggle text-white"
                      id="navbarDropdown"
                      to="#"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Hello! {user.fullName}
                    </Link>
                    <div
                      className="dropdown-menu bg-dark"
                      aria-labelledby="navbarDropdown"
                    >
                      {user.author !== null && (
                        <>
                          <Link
                            className="dropdown-item  text-white hover-color"
                            to="/myArticles"
                          >
                            My Articles
                          </Link>
                          <Link
                            className="dropdown-item text-white hover-color"
                            to="/newArticle"
                          >
                            New Article
                          </Link>
                        </>
                      )}
                      <Link
                        className="dropdown-item text-white hover-color"
                        to="/companies"
                      >
                        Companies
                      </Link>
                      <Link
                        className="dropdown-item text-white hover-color"
                        to="/authors"
                      >
                        Authors
                      </Link>

                      {user.author === null && (
                        <Link
                          className="dropdown-item text-white hover-color"
                          to="/authorForm"
                        >
                          Become an author?
                        </Link>
                      )}
                      <Link
                        className="dropdown-item text-white hover-color"
                        to="/companyForm"
                      >
                        Become an company?
                      </Link>
                      <div className="dropdown-divider"></div>
                      <Link
                        className="dropdown-item text-white hover-color"
                        to="/"
                        onClick={() => this.logout()}
                      >
                        Logout
                      </Link>
                    </div>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </nav>
        {alertMessage && <Alert />}
      </div>
    );
  }
}
function mapStateToProps({ authedUser,alertMessage }) {
  return {
    authedUser,
    alertMessage
  };
}
export default connect(mapStateToProps)(NavBar);
