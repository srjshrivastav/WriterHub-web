import React from "react";
import { connect } from "react-redux";
import { startLoading, stopLoading } from "../actions/loading";
import { loadArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";
import NoArticlepage from "./NoArticlePage";

class UserHome extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(startLoading());
    this.fetchArticles();
    dispatch(stopLoading());
  }

  fetchArticles = async () => {
    const { dispatch } = this.props;
    loadArticles(dispatch);
  };

  render() {
    const { loading, articles, isAuthor } = this.props;
    if (loading) {
      return <Loading />;
    } else if (articles.length === 0) {
      return <NoArticlepage isAuthor={isAuthor} />;
    }
    return (
      <div className="container">
        {articles.map((article,index)=>
           <ArticleCard article={article} key={index} />
        )}
      </div>
    );
  }
}

function mapStateToProps({ articles, loading }) {
  return {
    articles:Object.values(articles),
    loading,
    isAuthor: true,
  };
}
export default connect(mapStateToProps)(UserHome);
