import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { FiTrash2 } from "react-icons/fi";
import {getDateWithMonth} from '../utils/helper'


function ArticleCard(props) {
  const { article, canDelete, key, deleteArticle } = props;
  return (
    <div className="card mt-4" style={{ textDecoration: "none" }} key={key}>
      <div className="card-body">
        <div className="d-flex">
          <Link
            to={`/article/${article.id}`}
            style={{ textDecoration: "none", fontSize: 25 }}
            className="card-title flex-grow-1"
          >
            <strong>{article.title}</strong>
          </Link>
          {canDelete && (
            <div className="flex-grow-1 d-flex flex-row-reverse align-items-center">
              <FiTrash2
                size={20}
                onClick={() => deleteArticle(key)}
                type="button"
              />
            </div>
          )}
        </div>

        <div className="container">
          <div className="row justify-content-md-start">{article.content}</div>
        </div>
      </div>
      <div className="card-footer text-muted d-flex justify-content-end">
        ~{getDateWithMonth(article.addedDate)}
      </div>
    </div>
  );
}

export default connect()(ArticleCard);
