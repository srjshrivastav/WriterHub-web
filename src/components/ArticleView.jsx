import React from "react";
import { withRouter } from "react-router";
import {connect } from 'react-redux'
import { loadArticle } from "../utils/api";
import Loading from "./Loading";
import { getDateWithMonth } from "../utils/helper";

class ArticleView extends React.Component{
    state={
        loading:true
    }
    componentDidMount(){
        const {id,dispatch,currentArticle} = this.props
        if(currentArticle.id !== parseInt(id)){
            loadArticle(dispatch,id)
            .then(()=>{
                this.setState(()=>({
                    loading:false
                }))
            })
            
        }
        else{
            this.setState(()=>({
                loading:false
            }))
        }
    }
    render(){
        const {currentArticle} = this.props
        const {loading} = this.state
        if(loading) return <Loading />
        return(
            <div className="container d-flex flex-column">
                <div id="header" className="d-flex flex-column mt-3 align-items-center">
                    <h2 style={{fontWeight:"bold"}}>{currentArticle.title}</h2>
                    <span style={{fontSize:10,color:"grey"}}>Posted By:{currentArticle.author.firstName+" "+currentArticle.author.lastName}</span> 
                    <span style={{fontSize:10,color:"grey"}}> Added on:{getDateWithMonth(currentArticle.addedDate)}</span>
                </div>
                
                <div id="content" className="mt-3">
                    {currentArticle.content}
                </div>
            </div>
        )
    }
}


function mapStateToProps({currentArticle},{match}){
    return{
        id:match.params.articleId,
        currentArticle
    }
}

export default withRouter(connect(mapStateToProps)(ArticleView))
