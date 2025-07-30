import { useEffect } from 'react';

import CaseStudyGrid from '../components/CaseStudyGrid';
import work_data from '../data/design_data';
import EmphasisTextSection from '../components/EmphasisTextSection';
import LayeredTextSection from '../components/LayeredTextSection';
import ImageTextSection from '../components/ImageTextSection';
import ImageSection from '../components/ImageSection';
import TextSection from '../components/TextSection';
import SectionDivider from '../components/SectionDivider';
import ListSection from '../components/ListSection';
import InfoGrid from '../components/InfoGrid';
import Footer from '../components/Footer';

import interlude_final from '../assets/Interlude/interlude_final.png'
import app_flow from '../assets/Interlude/app_flow.png';
import research from '../assets/Interlude/research.png';
import artist_profiles from '../assets/Interlude/artist_profiles.png';
import music_page from '../assets/Interlude/music_page.png';
import home_page from '../assets/Interlude/home_page.png';
import full_stack from '../assets/Interlude/full_stack.png';
import database from '../assets/Interlude/database.png';
import rec_engineering from '../assets/Interlude/rec_engineering.png';
import rec_system from '../assets/Interlude/rec_system.png';
import testimonials from '../assets/Interlude/testimonials.png';
import MVP from '../assets/Interlude/MVP.png';
import HyperLink from '../components/HyperLink';


function Interlude() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <main className='design'>
      <div className='container'>
        <CaseStudyGrid data={work_data[0]}/>
        <section className='inverse-black'>
          <TextSection
            title='CREATING A COMMUNITY FOR EMERGING ARTISTS'
            text={<h3>Inspired by the journeys and passion of early-stage independent artists, <strong>I led end-to-end UX design, UX research, and full-stack engineering to build an application supporting the growth of emerging artists.</strong></h3>}
          />
        </section>
        <section>
          <TextSection
            title={"MY ROLE"}
            text={
            <>
              <h3><strong>PRODUCT MANAGEMENT AND LEADERSHIP</strong></h3>
              <p>Leading a team of designers and data scientists, defining project timelines and strategy for each step of the product design process.</p>
              <br></br>
              <h3><strong>INDUSTRY RESEARCH</strong></h3>
              <p>Understanding the stakeholder system and music industry trends through qualitative research methods, always bringing our vision back to the people we're building for.</p>
              <br></br>
              <h3><strong>DESIGN EXECUTION</strong></h3>
              <p>Executing information architecture design, collaborative sketching, wireframing, mid to high-fidelity prototyping, and usability testing of our application.</p>
              <br></br>
              <h3><strong>RECOMMENDATION SYSTEM ENGINEERING</strong></h3>
              <p>Leading model construction, feature engineering, user testing, and iterative design of a machine learning-enabled recommendation system.</p>
              <br></br>
              <h3><strong>FULL-STACK ENGINEERING</strong></h3>
              <p>Building our design prototypes into a hosted web application with React Native, Firebase, and Google Cloud, ensuring alignment between design vision and engineering capabilities.</p>
            </>}
          />
        </section>
        <section className='grey'>
          <TextSection
            title='OUR PRODUCT'
            text={
              <>
                <h3>Interlude: An application for emerging artists to build a strong listener base by empowering them with a community where listeners can discover music from smaller artists and connect with who the artist is as a person.</h3>
                <a style={{color:'purple'}} target='_blank' href='https://interlude-5d3bf.web.app/'>
                  Check out the application here.
                </a>
              </>
            }
          />
        </section>
        <ImageSection
          img={interlude_final}
        />
        <section className='inverse-black'>
          <TextSection
            title={"THE STORY OF INTERLUDE"}
          />
        </section>
        <section>
          <TextSection
            title={"WE START BY UNDERSTANDING THE COMMUNITY"}
            text={
              <>
                <p>In the Fall of 2024, my peers and I at the UC Berkeley School of Information began our capstone projects. I sat down together with a group of my friends and thought:</p>
                <h3 style={{fontStyle:'italic', color:'purple'}}>"How can we help early stage artists build an audience?"</h3>
                <p>At this point, we did not know what solution we wanted to create, just that we wanted to help new artists. We began research to get in the headspace of what challenges an artist faces when growing their audience and, on the flipside, what listeners want when discovering new music and connecting with the artists behind them.</p>
              </>
            }
          />
          <ImageSection
            img={research}
          />
        </section>
        <section className='inverse-black'>
          <TextSection
            title={"WHAT WE FOUND"}
            text="Deepening our understanding of the landscape surrounding emerging artists, a couple of findings surprised us:"
          />
          <InfoGrid
            list={[
              {
                img: null,
                title: "A Desire for Deeper Connections",
                text: <>
                  <p>Artists want to be understood and to express who they are and why they make music.</p>
                  <br></br>
                  <p>Listeners are interested in an artist’s personality, background, and stories of their music.</p>
                </>
              },
              {
                img: null,
                title: "Social Media is Necessary But Breeds Inauthenticity",
                text: "Social media is essential for keeping engagement beyond releases, but artists feel inauthentic posting content that would “make them go viral”."
              },
              {
                img: null,
                title: "Rec Systems Fall Short",
                text: "Traditional recommendation systems prioritize popular artists over new artists, and listeners are frustrated with poor recommendations and rec system control."
              }
            ]}
          />
        </section>
        <section className='grey'>
          <TextSection
            title={"AND SO WE ASKED OURSELVES..."}
            text={
              <div style={{color:'purple'}}>
                <h3>How might we allow artists and listeners to connect over who the artist is as a person?</h3>
                <h3>How might we build an environment where smaller artists are supported by recommendation systems?</h3>
                <h3>How might we use social media to create this community of discovery and connection?</h3>
              </div>
            }
          />
        </section>
        <section>
          <TextSection
            title={"A VISION..."}
            text={<><p>
              I imagined a <strong>social media space centered around emerging artists</strong> where they have the freedom to share with their following <strong>content that is authentic to themselves</strong>, and where listeners can <strong>discover new music from these small artists and connect who the artist is as a person</strong>.
              </p>
            </>}
          />
        </section>
        <ImageSection
          img={app_flow}
        />
        <section className='inverse-black'>
          <TextSection
            title={"OUR HYPOTHESIS"}
            size='h2'
            text={"Deeper, more personal connections between an artist and a listener lead to a stronger and more dedicated listener base for an artist."}
          />
        </section>
        <section>
          <TextSection
            title={"CREATING INTERLUDE"}
            text={<>
              <p>I organized my understanding of artists from research and my own experience as an artist into <strong>creating the artist-facing experience.</strong></p>
              <h3 style={{fontStyle:'italic'}}>My objective: Allow full creative and expressive freedom for artists, and create an app experience that empowers them to tell their stories.</h3>
            </>}
          />
        </section>
        <section className='grey'>
          <TextSection
            title='Artist Profiles For the Person Behind the Artist'
            text={"Creating a space where an artist can be empowered to showcase themselves and organize content about their craft."}
          />
          <ImageSection
            img={artist_profiles}
          />
        </section>
        <section>
          <TextSection
            title='Artist Music Pages to Speak Freely About Music'
            text={"Organizing content about music in a page that serves as a source of truth from the artist, where an artist’s thoughts, process, stories, and exclusive content about a piece of music are contained and experienced."}
          />
          <ImageSection
            img={music_page}
          />
        </section>
        <section className='grey'>
          <TextSection
            title='Listener Home Page for Discovery and Connection'
            text={<p>Allowing for discovery of new artists through an <strong>inverse recommendation system</strong>. Increasing visibility of artists through community interactions by displaying reposts, comments, and activity from the network that a listener follows. </p>}
          />
          <ImageSection
            img={home_page}
          />
        </section>
        <section className='inverse-black'>
          <TextSection title={"CREATING AN INVERSE RECOMMENDATION SYSTEM"}/>
        </section>
        <section>
          <TextSection
            title={"INCREASING DISCOVERY OF SMALLER ARTISTS"}
            text={<p>I worked with the data scientist to build an <strong>inverse recommendation system that factored in the popularity of an artist</strong> in order to deliver personalized recommendations to listeners that are adjusted to <strong>prioritize music from less popular artists.</strong></p>}
          />
          <ImageSection
            img={rec_system}
          />
        </section>
        <section className='inverse-black'>
          <TextSection title={"BUILDING THE DARN THING: FULL-STACK ENGINEERING"}/>
        </section>
        <section className='grey'>
          <TextSection
            text={<>
              <p>This is where the fun begins...  Using React Native, Google Firebase, and Rest APIs, I built a working, live MVP for Interlude.</p>
              <br></br>
              <p>I began by diagramming the back-end system that will power Interlude, working closely with our engineering advisor to ideate, organize, and refine an system architecture that can be built with our time constraints.</p>
            </>}
          />
        </section>
        <ImageSection
          img={full_stack}
        />
        <section className='grey'>
          <TextSection
            title={"Database Design"}
            text={"Using Firestore, I ideated and built a simple and scalable relational database architecture to accommodate for a variety of users, post types, music types, and other content categories, enabling quick storage and retrieval of content for artists and listeners."}
          />
          <ImageSection
            img={database}
          />
          <TextSection
            title={"LINKING UP THE RECOMMENDATION SYSTEM"}
            text={<ol style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
              <li>Connecting the onboarding process to build and store a vector representation of listener preferences.</li>
              <li>Linking the music upload functionality to the feature extraction code, generating and storing a vector representation of individual songs.</li>
              <li>Connecting the recommendation system to the backend, using the vector representations of songs and users to generate recommendations for each listener.</li>
            </ol>}
          />
          <ImageSection
            img={rec_engineering}
          />
        </section>
        <ImageSection
          img={MVP}  
        />
        <section className='inverse-black'>
          <TextSection 
            title={"OUR FINDINGS AND THE FUTURE"}
            text={'Early feedback has validated our hypothesis, that Interlude is helping users achieve the quality of artistic expression and connection that we strived to give them.'}
          />
          <ImageSection
            img={testimonials}
          />
          <InfoGrid
            list={[
              {
                title: "SO, WHAT'S NEXT?"
              },
              {
                title: "Creating More Personalization",
                text: "Implementing functions to update listener preferences via post interactions, shares, saves, and qualitative feedback in order to create a more personalized listening experience."
              },
              {
                title: "Calculating Success Metrics",
                text: "Measuring song saves, calculating recommendation click-through rates, creating our own popularity metric to evaluate the influence of Interlude on the growth of artists."
              }
            ]}
          />
        </section>
        <section>
          <ListSection
            title='REFLECTIONS AND LEARNINGS'
            list={[
              {
                title: "Welcome the Skepticism",
                text: "A vision will always be met with skepticism. Embrace it. We have to continue to think of ways to justify our value, but critically, when people say that something isn’t working, to set aside my ego of “I believe in this” and just listen to what they think is one of the most powerful things a product owner can do. Because when you do so, you open yourself to all the ways your product can grow alongside the people you're designing it for."
              },
              {
                title: "Keep the User at Heart",
                text: "From 0 to 1, one guiding principle I maintained in our group's work is: let's listen to people first. Allowing myself to be humbled and guided by the experiences and pain points of artists and listeners, especially if they do not align with my own perceptions of the problem space, was key to creating an MVP that was well-received by our audience."
              },
              {
                title: "Design is More Than Just Design",
                text: "Design is a marriage of research, engineering, product, data... the list goes on. Our onboarding is informed by the recommendation system requirements, and vice versa. The types of content that artists can post are enabled by a simple and scalable relational database structure. Learning to align all these different departments is a necessity of design."
              }
            ]}
          />
        </section>
      </div>
    </main>
  )
}

export default Interlude