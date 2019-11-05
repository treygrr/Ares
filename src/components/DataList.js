import React from 'react';
import { connect } from 'react-redux';
import { fetch, currentMarker } from '../actions';

class DataList extends React.Component {
    componentDidMount() {
        this.props.fetch();
    }

    logToConsole(val) {
        console.log(this.props.selectedMarker);
    }

    renderList() {
        return this.props.posts.map(post => {
            return (
                <article 
                    className="card"
                    key={post.trackId} 
                    onClick={() => {
                        this.props.currentMarker(post);
                        this.logToConsole(post);
                    }}
                >
                    {post.trackId}
                </article>
            );
        });
    }

    render() {
        return (
            <section 
                className="pad10"
            >
                {this.renderList()}
                
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return { 
        posts: state.posts,
        selectedMarker: state.currentMarker
    };
}

export default connect(mapStateToProps, { fetch, currentMarker })(DataList);