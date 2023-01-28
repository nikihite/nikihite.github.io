import './Contact.css';

export default function Contact() {
  return (
    <div>
      <h1 className='connect'>Connect with me!</h1>
      <ul className='contact-list'>
        <li>
          <a className='contact-link' href='https://www.linkedin.com/in/nikihite/'>LinkedIn <img className='contactme-img' src='../linkedin.png' /></a>
        </li>
        <li>
          <a className='contact-link' href='https://github.com/nikihite'>GitHub <img className='contactme-img' src='../github.png' /></a>
        </li>
        <li>
          <a className='contact-link' href='https://twitter.com/NikiMHite'>Twitter <img className='contactme-img' src='../twitter.png'/></a>
        </li>
        <li>
          <a className='contact-link' href='mailto: nikihite3@gmail.com'>Email Me! <img className='contactme-img' src='../email.png'/></a>
        </li>
      </ul>
    </div>
  );
}
