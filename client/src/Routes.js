
import React, { Component } from 'react'

import { Route } from 'react-router'
import { Home, About, ArticleList, ArticleView, ArticleEditor } from './components/Views'

export default class Routes extends Component {
    render() {
        return (
            <div id='main'>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/editor" component={ArticleEditor} />
                <Route path="/articles" component={ArticleList} />
                <Route path="/article/:slug" component={ArticleView} />
            </div>
        )
    }
}
