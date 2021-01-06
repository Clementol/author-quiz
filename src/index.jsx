import React from "react";
import ReactDOM from "react-dom";
import * as Redux from "redux";
import * as ReactRedux from 'react-redux';
import * as serviceWorker from './serviceWorker';

import {BrowserRouter, Route} from 'react-router-dom';
import AuthorQuiz from "./AuthorQuiz.jsx";
import AddAuthorForm from './AddAuthorForm.jsx'
import authors from "./Books.jsx";
import {shuffle, sample} from "underscore";

const getTurnData = (authors) => {
    const allBooks = authors.reduce( function (p, c,) {
        return p.concat(c.books)
    }, [])
    const fourRandomBooks = shuffle(allBooks).slice(0, 4)
    const answer = sample(fourRandomBooks);
    return {
        books: fourRandomBooks,
        author: authors.find( (author) => 
            author.books.some( (title) => 
            title === answer)
        )
    }
};

function reducer(state={authors, turnData: getTurnData(authors), highlight: ''}, action) {
    switch (action.type) {
        case 'ANSWER_SELECTED':
            const isCorrect = state.turnData.author.books.some( (book) => book === action.answer);
            return Object.assign({}, state, {highlight: isCorrect ? 'correct' : 'wrong'})
        case 'CONTINUE':
            return Object.assign({}, state, {highlight: '', turnData: getTurnData(state.authors)} )
        case 'ADD_AUTHOR':
            return Object.assign({}, state, {authors: state.authors.concat([action.author])} )
        default: return state
    }
}

let store = Redux.createStore(reducer);

ReactDOM.render (
    <BrowserRouter>
        <ReactRedux.Provider store={store} > 
        <>
            <Route exact path='/' component={AuthorQuiz} />
            <Route  path="/add" component={AddAuthorForm} />
        </>
    </ReactRedux.Provider>
    </BrowserRouter>, document.getElementById("mountNode")
)

serviceWorker.unregister();