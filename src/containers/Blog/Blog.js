import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './Blog.css';
import FullPost from './FullPost/FullPost';
import Posts from './Posts/Posts';

class Blog extends Component {
    render() {


        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/kentico-cloud">Home</Link></li>
                        </ul>
                    </nav>

                </header>
                <Route path="/kentico-cloud" exact component={Posts} />
                <Route path="/posts/:codename" exact component={FullPost} />
            </div>
        );
    }
}

export default Blog;