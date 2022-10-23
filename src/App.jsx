import profileImg from './assets/profile__img.jpg'
import slackImg from './assets/slack.svg'
import gitImg from './assets/git.svg'
import logo from './assets/logo.svg'
import i4GImg from './assets/I4G.svg'
import './App.css'

function App() {


  return (
    <div className="main--container flex">
        <header className='flex profile--section'>
          <img src={profileImg} alt="profile Image" />
          <h2 id="twitter">JesseOGBO</h2>
          <h2 id="twitter" hidden>Jesse Ogbonna</h2>
        </header>
        <main>
          <section className='main--section flex'>
            <a href="https://twitter.com/JesseOGBO" id='twitter__id' className='link__btn' target='_blank'>Twitter Link</a>
            <a href="https://training.zuri.team/" id='btn__zuri' className='link__btn' target='_blank'>Zuri Team</a>
            <a href="http://books.zuri.team/" id='books' className='link__btn' target='_blank'>Zuri Books</a>
            <a href="https://books.zuri.team/" id='book__python' className='link__btn' target='_blank'>Python Books</a>
            <a href="https://background.zuri.team/" id='pitch' className='link__btn' target='_blank'>Background Check for coders</a>
            <a href="https://books.zuri.team/design-rules" id='book__design' className='link__btn' target='_blank'>Design Books</a>
          </section>

          <section className='socials--section flex'>
            <a href="#">
              <img src={slackImg} alt="slack" />
            </a>
            <a href="https://github.com/JesseOlisa" target='_blank'>
              <img src={gitImg} alt="slack" />
            </a>
          </section>
        </main>
        <footer className='flex'>
          <img src={logo} alt="logo" />
          <p>HNG Internship 9 Frontend Task</p>
          <img src={i4GImg} alt="logo" />
        </footer>
    </div>
  )
}

export default App