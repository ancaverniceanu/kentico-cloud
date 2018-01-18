import React from 'react';
import { Fragment } from 'react';
import './Post.css';
const post = (props) => (

    <Fragment>
        <h2 className="article__title">{props.title}</h2>
        <div className="article__author">By <span>{props.author}</span></div>
        <div className="article__info">
            <div className="row">
                <div className="col-sm-auto">
                    <small>
                        <i className="fa fa-calendar" aria-hidden="true"></i>
                        <time dateTime={props.datetime}>
                            {new Date(props.datetime).toLocaleDateString()}
                    </time>
                    </small>
                </div>
                <div className="col-sm-auto">
                    <small>
                        <i className="fa fa-tags" aria-hidden="true"></i>
                        CSS, JavaScript, Kentico
                </small>
                </div>
            </div>
        </div>
        <div dangerouslySetInnerHTML={{ __html: props.summary }} />
    </Fragment>
);

export default post;