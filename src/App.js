import './App.css';
import Spline from '@splinetool/react-spline';
import avtaar from './images/Memoji.jpg'
import scroll from './images/scroll-top-img.png'
import SmoothScrollingLink from './components/SmoothScrollingLink'




function App() {

  return (
    <>
      <div className='container'>

        <section id='home'>



        <nav>

          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Links</li>
            <li>Contact</li>
          </ul>

        </nav>

          <h1>Hi, I'm </h1>

          <h2>AKIB</h2>

          <h3>Frontend Developer</h3>

          <div className='spline-container'>
            <Spline scene="https://prod.spline.design/sfmkTjYZ6z5Q5JR7/scene.splinecode" className='bg' />
          </div>

        </section>

        <section className='About' id='about'>

          <div className='spline-viewer'>
            <Spline scene="https://prod.spline.design/aR8RJVAStugdKyXD/scene.splinecode" className='about-spline' />
          </div>

          <h1 className='about-title'>Hello</h1>
          <p className='sub-title'>There!!!</p>

        </section>


        <div className='info'>

          <div className='avtaar'>
            <img src={avtaar} />
          </div>

          <div className='myself'>
            {/* <span style={{fontSize:'2rem', fontWeight:'bolder'}}>Who I'm</span> */}
            <span>
              I'm on a mission to transform imagination into innovation. As a web developer, I'm not just a code junkie; I'm a dream weaver, a digital architect, and a problem solver 🪄 ✨
              <br />
              My coding toolbox is filled with the latest technologies and frameworks, including HTML5, CSS3, JavaScript, React.js, Material UI and more. I'm always learning and evolving to stay on the cutting edge of web development.
            </span>
          </div>
        </div>



        {/* Scroll Top button */}
        <SmoothScrollingLink to="home" >
          <span className='scroll'>
            <button>
              <img src={scroll} />
            </button>
          </span>
        </SmoothScrollingLink>
      </div>

    </>
  );
}

export default App;
