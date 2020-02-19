import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Switch, NavLink, useParams } from 'react-router-dom';

function Home() {
    return(
        <div>
            <h1>Home</h1>
            Home...
        </div>
    );
}

var contents = [
    { id: 1, title: 'HTML', description: 'HTML is ...'},
    { id: 2, title: 'JS', description: 'JS is ...'},
    { id: 3, title: 'React', description: 'React is ...'},
]

function Topic() {
    var params = useParams();
    var topic_id = params.topic_id;
    var selected_topic = {
        title: 'sorry',
        description: '404'
    }
    for(var i = 0; i < contents.length; i++) {
        if(contents[i].id === Number(topic_id)){
            selected_topic = contents[i];
            break;
        }
    }
    return(
    <div>
        <h3>{selected_topic.title}</h3>
        {selected_topic.description}
    </div>
    );
}

function Topics() {
    var lis = [];
    for(var i = 0; i < contents.length; i++) {
        lis.push(<li key={contents[i].id}><NavLink to={'/topics/'+contents[i].id}>{contents[i].title}</NavLink></li>)
    }
    return(
        <div>
            <h1>Topics</h1>
            <ul>
                {lis}
            </ul>
            <Route path="/topics/:topic_id">
                <Topic></Topic>
            </Route>
        </div>
    );
}

function Contact() {
    return(
        <div>
            <h1>Contact</h1>
            Contact...
        </div>
    );
}

function App() {
    return (
    <div>
        <h1>React Router DOM example</h1>
        <ul>
            <li><NavLink exact to="/" >Home</NavLink></li>
            <li><NavLink to="/topics" >Topics</NavLink></li>
            <li><NavLink to="/Contact" >contact</NavLink></li>
        </ul>
        <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/topics"><Topics /></Route>
            <Route path="/contact"><Contact /></Route>
            <Route path="/">404</Route>
        </Switch>
    </div>
    );
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
