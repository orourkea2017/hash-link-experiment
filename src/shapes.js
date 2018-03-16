import React from 'react';
import { Link } from 'react-router';

const Shapes = () => (
  <div>
    <div id='heading'>
      <h2>Shapes</h2>
      <p>You can go to all these divs by hash linking to the name of a shape e.g <Link to="/shapes#octagon"><code>#octagon</code></Link>.</p>
      <p><Link to="/shapes#text"><code>#text</code></Link> will take you to the text at the bottom that makes this scroll.</p>
    </div>
    <div id='body'>
      <div id='square'>
        <h3>Square</h3>
        <p>Four sides. Unremarkable.</p>
      </div>
      <div id='triangle'>
        <h3>Triangle</h3>
        <p>Point to the sky.</p>
      </div>
      <div id='rhombus'>
        <h3>Rhombus</h3>
        <p>"Stand up straight, it's better for your spine."</p>
      </div>
      <div id='parallelogram'>
        <h3>Parallelogram</h3>
        <p>A rhombus (see above) doing yoga.</p>
      </div>
      <div id='circle'>
        <h3>Circle</h3>
        <p>I asked him to help me move the sofa, but he just rolled away.</p>
      </div>
      <div id='semicircle'>
        <h3>Semicircle</h3>
        <p>I asked him to help me move the sofa, but he couldn't roll away.</p>
      </div>
      <div id='hexagon'>
        <h3>Hexagon</h3>
        <p>Six sided freak.</p>
      </div>
      <div id='heptagon'>
        <h3>Heptagon</h3>
        <p>Who is he again?..</p>
      </div>
      <div id='octagon'>
        <h3>Octagon</h3>
        <p>Friends with the octopus.</p>
      </div>
      <div id='decagon'>
        <h3>Decagon</h3>
        <p>Ten sides.</p>
      </div>
      <div id='dodecagon'>
        <h3>Dodecagon</h3>
        <p>Twelve sides.</p>
      </div>
      <div id='pentagon'>
        <h3>Pentagon</h3>
        <p>Five lovely sides; chips, garlic bread, guacamole, some other french thing and a salad.</p>
      </div>
      <div id='dodecahedron'>
        <h3>Dodecahedron</h3>
        <p>More sides than one cares to acknowledge.</p>
      </div>
      <div id='text'>
        <h3>This is just some text</h3>
        <p>Text.</p>
        <p>Text.</p>
        <p>Text.</p>
        <p>Text.</p>
        <p>Text.</p>
        <p>Text.</p>
        <p>Text.</p>
        <p>Text.</p>
        <p>Text.</p>
        <p>Text.</p>
        <p>Text.</p>
        <p>Text.</p>
        <p>Text.</p>
        <p>Text.</p>
        <p>Text.</p>
        <p>Text.</p>
        <p>Text.</p>
        <p>Text.</p>
        <p>Text.</p>
        <p>Text.</p>
        <p>Text.</p>
        <p>Text.</p>
        <p>Text.</p>
        <p>Text.</p>
        <p>Text.</p>
        <p>Text.</p>
        <p>Text.</p>
        <p>Text.</p>
        <p>Text.</p>
        <p>Text.</p>
        <p>Text.</p>
        <p>Text.</p>
        <p>Text.</p>
        <p>Text.</p>
        <p>Text.</p>
        <p>Text.</p>
        <p>Text.</p>
        <p>Text.</p>
        <p>Text.</p>
        <p>Text.</p>
        <p>Text.</p>
        <p>Text.</p>
        <p>Text.</p>
        <p>Text.</p>
        <p>Text.</p>
        <p>The end.</p>
      </div>
    </div>
  </div>
);

export default Shapes;