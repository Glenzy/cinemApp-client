import React from 'react';
import ReactDOM from 'react-dom';

// Import statement to indicate that you need to bundle `./index.scss`
import './index.scss';

// Main component (will eventually use all the others)
class CinemApplication extends React.Component {
  render() {
    return (
      <div className="my-flix">
        <div>Good morning</div>
      </div>
    );
  }
}

// Finds the root of your app
const container = document.getElementsByClassName('app-container')[0];

// Tells React to render your app in the root DOM element
ReactDOM.render(React.createElement(CinemApplication), container);

// For all the tasks in this Achievement, you will create a new GitHub branch 
// from your “myFlix-client” repo. In the development world it's generally best
//  practice to make changes to a branch and then merge that branch with the 
//  master/main branch after successful verification. Developers often follow 
//  this practice in their workplace.