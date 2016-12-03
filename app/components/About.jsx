var React = require('react');

var About = (props) => {
  return(
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather application build on react.<br/>I have built this for The Complete React Web App Developer Tool.</p>
      <p>Here are some of the tools I used:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the JavaScript framework I used
        </li>
      </ul>
  </div>
  )
};

module.exports = About;
