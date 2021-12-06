import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function ArticleCard(props) {
  const { article } = props;
  const addedDate = new Date(article.addedDate);
  return (
    <div className="card mt-4" style={{ textDecoration: "none" }}>
      <div className="card-body">
        <Link to={`/article/${article.id}`} style={{ textDecoration: "none" }}>
          <h5 className="card-title">{article.title}</h5>
        </Link>
        <div className="container">
          <div className="row justify-content-md-start">{article.content}</div>
        </div>
      </div>
      <div className="card-footer text-muted d-flex justify-content-end">
        ~{addedDate.getDate() + " " + months[addedDate.getMonth()]}
      </div>
    </div>
  );
}

export default connect()(ArticleCard);
