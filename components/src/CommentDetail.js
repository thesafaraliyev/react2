import React from 'react';

const CommentDetail = (props) => {
    return (
        <div className="comment">
            <a className="avatar" href="test">
                <img src={props.avatar} alt="avatar"></img>
            </a>
            <div className="content">
                <a className="author" href="test">{props.author}</a>
                <div className="metadata">
                    <span className="date">Today at 5:42PM</span>
                </div>
                <div className="text">
                    {props.comment}
                </div>
            </div>
        </div>
    );
};

export default CommentDetail;