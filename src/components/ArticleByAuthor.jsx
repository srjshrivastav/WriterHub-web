import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { startLoading, stopLoading } from "../actions/loading";
import { fetchArticlesByAuthor } from "../utils/api";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";
import NoArticleByAuthor from './NoArticleByAuthor'

class ArticleByAuthor extends React.Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    const {dispatch} = this.props
    dispatch(startLoading());
    this.fetchArticles();
    dispatch(stopLoading());
  }

  fetchArticles = async () => {
    const { author, id, dispatch, url } = this.props;
    
    fetchArticlesByAuthor(dispatch,url === "/myArticles" ? author.id : id).then(
      (articles) => {
        this.setState(() => ({
          articles: [...this.state.articles, ...articles],
        }));
       
      }
    );
  };
  render() {
    const { author, loading,url } = this.props;
    const { articles } = this.state;
    if (loading) return <Loading />;
    else if (articles.length === 0) return <NoArticleByAuthor isAuthor={url==="/myArticles"}/>;
    return (
      <div className="container d-flex flex-column">
        <div className="d-flex">
          <h2 style={{fontWeight:"bold"}} className="mt-3">
            {url=== "/myArticles"
              ? "My Articles"
              :"Articles by : "+author.firstName }
          </h2>
        </div>
        <div>
          {articles.map((article) => (
            <ArticleCard article={article} />
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, loading }, { match }) {
  console.log(authedUser)
  return {
    author: authedUser.user.author,
    url: match.url,
    loading,
  };
}

export default withRouter(connect(mapStateToProps)(ArticleByAuthor));
