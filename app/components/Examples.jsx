var React = require('react');
var {Link} = require('react-router');

var Exapmles = (props) => {
  return(
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Givatayim'>Givatayim, IL</Link>
        </li>
        <li>
          <Link to='/?location=London'>London, UK</Link>
        </li>
      </ol>
    </div>
  )
};
module.exports = Exapmles;
