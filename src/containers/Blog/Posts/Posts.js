import React, { Component } from 'react';
import axios from '../../../axios';
import { Link } from 'react-router-dom';
import Post from '../../../components/Post/Post';
import './Posts.css';

class Posts extends Component {
    state = {
        posts: [],
        currentPage: 1,
        postsPerPage: 2
    }

    componentDidMount() {
        axios.get('/items?system.type=article')
            .then(response => {
                const posts = response.data.items.slice();
                const updatedPost = posts.map(post => {
                    return {
                        ...post
                    }
                })
                this.setState({
                    posts: updatedPost
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    handleClick = this.handleClick.bind(this);

    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    isActive(value) {
        return ((value === this.state.currentPage) ? 'active' : '');
    }

    render() {
        let { posts, currentPage, postsPerPage } = this.state;
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li

                    key={number}
                    id={number}
                    onClick={this.handleClick}
                    className={this.isActive(number)}
                >
                    {number}
                    {/* <Link to={'/' + number}>
                        
                    </Link> */}
                </li>
            );
        });

        if (!this.state.error) {
            const indexOfLastPost = currentPage * postsPerPage;
            const indexOfFirstPost = indexOfLastPost - postsPerPage;
            const visiblePosts = posts.slice(indexOfFirstPost, indexOfLastPost);

            posts = visiblePosts.map(post => {
                let { headline, author, datetime, body_text } = post.elements;
                return (
                    <div className="article" key={post.system.id}>
                        <Post
                            title={headline.value}
                            author={author.value}
                            datetime={datetime.value}
                            summary={body_text.value.substr(0, 150) + '...'} />
                        <Link to={'/posts/' + post.system.codename}>read more...</Link>
                    </div>
                )
            });
        }

        return (
            <section className="articles">
                {posts}
                <ul className="pagination">
                    {renderPageNumbers}
                </ul>
            </section>
        )
    }
}

export default Posts;