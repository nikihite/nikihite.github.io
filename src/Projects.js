import './Projects.css';

export default function Projects() {
  return (
    <div className='slides'>

      <div id='slide-1' className='lunar-lounge'>
        <h1>Lunar Lounge</h1>
        <h2>React, Supabase, Node, Netlify</h2>
        <p>A real-time chat app that utilizes Supabase tables and an astrology-based API to encourage users to learn more about themselves and connect with each other.</p>
        <img className="proj-pic" src="../lunarlounge-screenshot.png" />
      </div>
      <div id='slide-2' className="allegori">
        <h1>Allegori</h1>
        <h2>React, Node, PostgreSQL</h2>
        <p>An Artificial Intelligence app allowing users to input an image and receive a meme based on AI analysis.</p>
        <img className="proj-pic" src='../allegori-ss.png' />
      </div>
      <div id='slide-3' className='pixie'>
        <h1>Pixie.js</h1>
        <h2>JavaScript, Node, Express, PostgreSQL, Heroku</h2>
        <p>A tarot-based API celebrating the artwork of Pamela Colman Smith, allowing users to pick, track and update their pulls from the symbolic Rider-Waite Smith deck.</p>
        <img className="proj-pic" src="../99321BCC-8ABF-43D7-9CA2-5EB2F3A9CA0E_1_102_o.jpeg" />
      </div>
      <div id='slide-4' className='HYNT'>
        <h1>HYNT</h1>
        <h2>JavaScript, Node, Netlify, Supabase</h2>
        <p>A life or death text adventure game where you decide your own fate.</p>
        <img className="proj-pic" src='../hynt-screenshot.png' />
      </div>
    </div>
  );
}
