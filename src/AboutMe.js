import './AboutMe.css';
export default function AboutMe() {
  return (
    <>
      <div>
        <h1 className='name'>About</h1>
        <h2 className='intro'>I&#39;m Niki. I have a passion for learning, community, and modular clean code.</h2>
        <p className='about-paragraph'>I am a creative, problem solver who loves to develop innovative solutions that leave a positive impact on the world. With previous experience in customer service, I have proven my ability to deliver results. I love being a Software Engineer because I am given the unique opportunity to apply my logical thinking, technical and interpersonal skills, to make an impact on people around the world. I am always eager to learn new things in order to keep growing as a Software Engineer. I place emphasis on ensuring the user is provided with the best experience possible and believe strongly in inclusion, equity, accuracy, and convenience.</p>
        <div className='languages'>

          <div className='circle-div' >
            <h3>Languages</h3>
            <div className='lan-div'>
              <ul>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>SQL</li>
              </ul>
            </div>
          </div>

          <div className='circle-div' >
            <h3>Testing</h3>
            <div className='lan-div'>
              <ul>
                <li>Jest</li>
                <li>QUnit</li>
                <li>TDD</li>
              </ul>
            </div>
          </div>

          <div className='circle-div' >
            <h3>Databases</h3>
            <div className='lan-div'>
              <ul>
                <li>PostgreSQL</li>
                <li>Supabase</li>
              </ul>
            </div>
          </div>

          <div className='circle-div' >
            <h3>Libraries & Frameworks</h3>
            <div className='lan-div'>
              <ul>
                <li>React</li>
                <li>Node</li>
                <li>Express</li>
              </ul>
            </div>
          </div>

          <div className='circle-div' >
            <h3>Dev Tools</h3>
            <div className='lan-div'>
              <ul>
                <li>Heroku</li>
                <li>Postman</li>
                <li>VSCode</li>
                <li>Git/Github</li>
                <li>Beekeeper</li>
                <li>Netlify</li>
                <li>Miro</li>
                <li>Slack</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
      <div>
        <img className='niki-pic' src='../niki-pic.jpeg' />
      </div>
    </>
  );
}
