import React, { Component } from 'react'
import { initiateContentUpdate, updateArticlesList } from './actions'
import { connect } from 'react-redux';
import axios from 'axios'
import { API_SERVER_HOST } from '../../../constants'


const Articles = ({ articles = [] }) => (
    <ul className="list-group list-group-flush">
        {articles.map((el, index) => (
            <li className="list-group-item" key={index}>
                {el.title}
            </li>
        ))}
    </ul>
);

export class Home extends Component {

    componentDidMount() {
        this.props.startLoad()
    }

    render() {
        return (
            <div>
                <div>Articles</div>
                <Articles articles={this.props.articles} />
            </div>
        )
    }
}

export const mapStateToProps = ({ home }) => ({
    isLoading: home.isLoading,
    articles: home.articles
})
export const mapDispatchToProps = dispatch => ({
    startLoad: () => {
        dispatch(initiateContentUpdate())
        axios.get(`${API_SERVER_HOST}/news`, { crossdomain: true })
            .then(result => {
                dispatch(updateArticlesList(result.data))
            })
    }
})



export default connect(mapStateToProps, mapDispatchToProps)(Home)
