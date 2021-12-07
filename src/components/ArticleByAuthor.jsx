import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { setMessge } from "../actions/apiErrorAlert";
import { startLoading, stopLoading } from "../actions/loading";
import { deleteArticle, fetchArticlesByAuthor } from "../utils/api";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";
import NoArticleByAuthor from './NoArticleByAuthor'
import {deleteArticle as deletFromState} from '../actions/articles'

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

  removeArticle(index){
    const { author, dispatch} = this.props;
    const {articles} = this.state
    const articleToRemove = articles.splice(index,1)[0];
    this.setState(()=>({
      articles
    }))
    deleteArticle(articleToRemove.id,author.id)
    .then((result)=>{
      if(result){
        dispatch(setMessge("Article Deleted Successfully..!","SUCCESS"))
        dispatch(deletFromState(articleToRemove.id))
      }
      else{
        dispatch(setMessge("Unable to delete article..!","ERROR"))
        articles.push(articleToRemove)
        this.setState(()=>({
          articles
        }))
      }
    })
  }
  render() {
    const { author, loading,url ,canDelete} = this.props;
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
          {articles.map((article,index) => (
            <ArticleCard article={article} canDelete={canDelete} key={index} deleteArticle={(index)=>this.removeArticle(index)} />
          ))}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, loading }, { match }) {
  return {
    author: authedUser.user.author,
    url: match.url,
    loading,
    canDelete :match.url === "/myArticles"
  };
}

export default withRouter(connect(mapStateToProps)(ArticleByAuthor));
