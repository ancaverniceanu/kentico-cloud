import React, { Component } from 'react';
import axios from '../../../axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null
    }

    componentDidMount() {
        if (this.props.match.params.codename) {
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.item.system.codename !== this.props.codename)) {
                axios.get('/items/' + this.props.match.params.codename)
                    .then(response => {
                        this.setState({ loadedPost: response.data });
                    });
            }
        }
    }

    render() {
        let post = "";
        if (this.props.codename) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        if (this.state.loadedPost) {
            post = (

                <div className="FullPost">
                    <h1>{this.state.loadedPost.item.elements.headline.value}</h1>
                    <div dangerouslySetInnerHTML={{ __html: this.state.loadedPost.item.elements.body_text.value}} />
                </div>
            );
        }
        return post;
    }
}

export default FullPost;