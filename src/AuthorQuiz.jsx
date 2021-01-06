import React, {} from "react";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import Footer from "./Footer.jsx";
import Hero from "./Hero.jsx";
import Turn from "./Turn.jsx";
import "./style.css";
import "./bootstrap/bootstrap.min.css";

const Continue = ({show, onContinue}) => {
    return ( <div className="row continue">
        {show 
        ? <div className="col-11">
            <button className="btn btn-primary btn-lg float-right " onClick={onContinue}>Continue</button>
        </div> 
        : null
    }
    </div> );
};
function mapStateToProps(state) {
    return {
        turnData: state.turnData,
        highlight: state.highlight
    };
}

function mapDispatchToProps(dispatch) {
    return {
       onAnswerSelected: (answer) => {
           dispatch({type: 'ANSWER_SELECTED', answer})
       },
       onContinue: () => {
           dispatch({type: 'CONTINUE'})
       }
    }
}

const AuthorQuiz =  connect(mapStateToProps, mapDispatchToProps )(
    function ({turnData, highlight, onAnswerSelected, onContinue}) {
 
        return (
            <div className="container-fluid">
                <Hero />
                <Turn {...turnData} highlight={highlight} onAnswerSelected={onAnswerSelected} />
                <Continue show={highlight === 'correct'} onContinue={onContinue}/>
                <p><Link to='/add'>Add an Author</Link></p>
                <Footer />
            </div>
        );
    
})

export default AuthorQuiz;