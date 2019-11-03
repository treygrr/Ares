import React from 'react';
import { connect } from 'react-redux';
import { fetch } from '../actions';

class DataList extends React.Component {
    componentDidMount() {
        this.props.fetch();
    }

    logToConsole(val) {
        console.log(val);
    }

    renderList() {
        return this.props.posts.map(post => {
            return (
                <article className="card" key={post.trackId} onClick={() => { this.logToConsole(post) }}>
                    {post.trackId}
                </article>
            );
        });
    }

    render() {
        console.log(this.props.posts);
        return (
            <section className="pad10">
                {this.renderList()}
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetch })(DataList);