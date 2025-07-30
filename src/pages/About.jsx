import { useEffect } from 'react';

import Header from '../components/Header';
import TextSection from '../components/TextSection';
import ImageSection from '../components/ImageSection';

function About({data}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main class='about'>
      <div className='container'>
        <Header/>
        <section>
          <TextSection
            text={<>
              <h2 style={{color:'purple'}}>JEFF CHANG.</h2>
              <h2>PRODUCT DESIGNER.</h2>
              <h2>FILM COMPOSER.</h2>
              <h2>RESEARCHER, OF MANY DISCIPLINES.</h2>
              <h2>LAZY GUITARIST.</h2>
              <h2>BOOK... LARVAE?</h2>
              <h2>ENGINEER, ALSO OF MANY DISCIPLINES.</h2>
              <h2>AVID METALHEAD.</h2>
              <h2>CHEF.</h2>
              <h2>SPORADICALLY ADDICTED GAMER</h2>
              <h2>(RETIRED) SAXOPHONIST.</h2>
              <h2>PRODUCT MANAGER.</h2>
              <h2>CLASSICAL TO CONTEMPORARY PIANIST.</h2>
              <h2>CREATOR.</h2>
              <h2 style={{color:'purple'}}>STORYTELLER.</h2>
            </>}
          />
        </section>
        <ImageSection
          img={data[0].img}
        />
        <section>
          <TextSection
            text={<>
              <h1 style={{color:'purple'}}>"WE ARE ALL STORIES TO BE TOLD"</h1>
              <p>It's a philosophy I carry throughout all my work in design, research, and music. Everything we experience and all the people we meet have something more to say - something story behind why they are. And my passion is to tell it so that we can know it, understand it, and feel it.</p>
              <br></br>
              <p>I'm a lot of things, converging towards one purpose. I use my skills in composing, product design, music production, UX + psychological research, engineering, and product management to understand the stories of those around me - and create while inspired by them.</p>
              <br></br>
              <p style={{color:'purple'}}>Let's build so we can keep telling our stories.</p>
              <br></br>
              <p>- JC</p>
            </>}
          />
        </section>
      </div>
    </main>
  )
}

export default About