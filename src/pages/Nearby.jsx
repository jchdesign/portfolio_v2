import { useEffect } from 'react';

import CaseStudyGrid from '../components/CaseStudyGrid';
import SectionDivider from '../components/SectionDivider';
import work_data from '../data/design_data';
import ImageTextSection from '../components/ImageTextSection';
import TextSection from '../components/TextSection';
import ImageSection from '../components/ImageSection';
import ListSection from '../components/ListSection';

import FlowBefore from '../assets/Nearby/FlowBefore.png';
import EnlargingNearby from '../assets/Nearby/EnlargingNearby.png';
import NearbyBrowse from '../assets/Nearby/NearbyBrowse.png';
import ActiveStatus from '../assets/Nearby/ActiveStatus.png';
import Active_NavBar from '../assets/Nearby/Active_NavBar.png';
import ProfileChanges from '../assets/Nearby/ProfileChanges.png';
import Combined from '../assets/Nearby/Combined.png';
import Nearby_3_4 from '../assets/Nearby/Nearby_3_4.png';
import Exploration from '../assets/Nearby/Exploration.png';
import Footer from '../components/Footer';

function Nearby() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className='design'>
      <div className='container'>
        <CaseStudyGrid data={work_data[2]}/>
        <section className='grey'>
          <TextSection
            title={"Bringing Forth Kardder's Centerpiece: Nearby"}
            text={<>
              <h3>Kardder is a social media application created to enable and assist in-the-moment social connections within one's immediate, real-time vicinity. <strong>Nearby</strong> is a page that presents profiles of active users within one's 0.25 mile radius, our flagship feature that enables this real-time interaction.</h3>
              <h3>Our redesign of Nearby readied Kardder for its targeted market launch within the UCLA campus, which brought in an <span style={{fontStyle:'italic', color:'purple'}}>increase in its user base from 50 to 900 users in two weeks.</span></h3>
            </>}
          />
        </section>
        <section className='inverse-black'>
          <TextSection title='The Story of a Core Feature Redesign'/>
        </section>
        <section>
          <ImageTextSection 
            orientation='img-text'
            img={FlowBefore} 
            title='Background' 
            text={"Nearby, a page showing active users within a user's quarter mile radius, is Kardder's holy grail feature.\n\nHow can we better present Nearby as Kardder's most important, stand-out feature?"}
          />
          <ListSection
            title="Where is Nearby Falling Short?"
            subtitle="Conducting a product teardown of Nearby, we uncovered several problems with Nearby that hinders its presentation as Kardder's centerpiece:"
            list={[
              {
                title: 'Redundancies',
                text: 'Nearby is currently very similar to Browse - a page that shows all the users on the app. Users are often confused about the difference between the two.'
              },
              {
                title: 'Indicating Functionality',
                text: 'Nearby in its current state does not indicate its close-proximity functionality. In the current state, profiles on nearby do not signify they are displaying active users within the 0.25 mile radius.'
              },
              {
                title: 'Lack of Prominence',
                text: "Positioned as the second feature in the navigation bar and sharing visual similarity with Browse, Nearby does not stand out as the primary, distinguishing feature of Kardder."
              }
            ]}
          />
        </section>
        <section className='inverse-black'>
          <TextSection
            title='The Problem I Wrapped My Head Around:' 
            text={<h3>Due to issues in prominence, showcasing functionality, and redundancy, Nearby does not present itself as the selling point and the unique centerpiece of Kardder.</h3>}
          />
        </section>
        <section>
          <ListSection
            title="Our Goals"
            subtitle="To redesign Nearby to signify its uniqueness and how to frame it as the core feature of Kardder, my team and I tackled the issue by identifying goals for each of these three problem areas:"
            list={[
              {
                title: 'Addressing Redundancies',
                text: 'How can we create separate experiences between Nearby and Browse?'
              },
              {
                title: 'Indicating Functionality',
                text: 'How can we showcase how Nearby is used: to see active users that are within your immediate vicinity?'
              },
              {
                title: 'Increasing Prominence',
                text: "How can we bring Nearby forward as the most visually and functionally salient feature of Nearby?"
              }
            ]}
          />
        </section>
        <section className='inverse-black'>
          <TextSection title='Phase 1: Increasing Prominence'/>
        </section>
        <ImageTextSection 
          orientation='text-img'
          img={EnlargingNearby}
          text={'Browsing the market for similar apps, I found that a powerful way to signify the importance of a feature is to enlarge and center it. This led to our design where Nearby became the most visually catching icon in the center of the navigation bar.'}
        />
        <section className='inverse-black'>
          <TextSection title='Phase 2: Indicating Functionality, Addressing Redundancies'/>
        </section>
        <section>
          <TextSection
            title='The Redundancy Issue'
            text={'Browse is a page residing in the Search icon in the navigation bar that shows all active users on the app regardless of active status and distance. Browse was visually very similar to Nearby and consequently shared redundancies with Nearby.'}
          />
          <ImageSection
            img={NearbyBrowse}
          />
          <ImageTextSection 
            orientation='text-img'
            img={ActiveStatus}
            title='Active Status Indicator'
            text={'I initiated the addition of an active status indicator to profiles on Nearby. With it being a common indicator of activity, users can apply their prior knowledge associated with this icon when using Kardder.'}
          />
        </section>
        <section className='grey'>
          <TextSection
            title={"Rethinking Nearby's UI"}
            text={'As a team, we proposed alternate designs to Nearby to offer clarity on its use case and distinguish it both visually and functionally from Browse.'}
          />
          <ImageSection
            img={Exploration}
          />
        </section>
        <section className='inverse-black'>
          <TextSection title='Phase 3: Constraings and Converging'/>
        </section>
        <section>
          <ListSection
            subtitle='As we presented our designs to the CTO and higher-ups week by week, we learned of certain constraints that eliminated our redesigns.' 
            list={[
              {
                title: 'Constraint 1: Profiles as Cards',
                text: 'Although our designs presented people in the form of networks and relationships, we were encouraged to maintain the card format to preserve this affordance of profile discovery.'
              },
              {
                title: 'Constraint 2: Restricting Functionality',
                text: 'Nearby is meant to show the immediate vicinity, so it must be kept at the 0.25 mile radius cap. '
              }
          ]}/>
        </section>
        <ImageTextSection
          orientation='text-img'
          img={Active_NavBar}
          title='Back to Square One?'
          text={'Now having big profile changes out of the question and functionality to be constant, we were set back in eliminating redundancies with Browse. However, these insights from the constraints gave us more focus to improve the existing UI while incorporating the progress we made so far: active status button and centering of the icon.'}
        />
        <section className='grey'>
          <TextSection
            title={"Taking Inspiration From My Team"}
            text={"Shortly after, I was invited to support another intern group was redesigning profiles previews to promote a more casual atmosphere. \n\nAs I worked across groups to converge our designs, I was able to introduce a profile view into Nearby that now more heavily delivers Nearby's functionality of showing real-time users and close distance through its visual arrangement, all while still maintaining the element of common interests that falls within the profile discoverability constraint."}
          />
          <ImageSection
            img={ProfileChanges}/>
        </section>
        <section className='inverse-black'>
          <TextSection title='The Final Stretch: Reimagining the Information Architecture'/>
        </section>
        <section className='grey'>
          <TextSection text={<>
              <p>During the redesign process, we also worked on a novel Map function to present posts in any user-defined area. As I worked with my team to develop Map, <strong>I pushed for the combining of Browse and Nearby.</strong> This would accomplish two things:</p>
              <br></br>
              <h3>1. Introduce Browse as secondary to Nearby, increasing Nearby's perceived importance and prominence.</h3>
              <h3>2. Give real estate in the navigation bar for the Map feature to reside.</h3>
            </>}/>
          <ImageSection
            img={Combined}/>
          <TextSection
            text={<h3>With Browse as a secondary feature tucked within Nearby, Nearby now became the most prominent centerpiece where all profile presentations resided, from Nearby, to Browse, to Favorites.</h3>}
          />
        </section>
        <section>
          <TextSection
            title='The Final Product'
            text='The version that remained in the app for the rest of my tenure, one that served as the core feature, most prominent page, and visibly and functionally the selling point of Kardder.'
          />
        <ImageSection
          img={Nearby_3_4}
        />
        </section>
        <section className='inverse-black'>
          <ListSection
            title="Reflections and Learnings"
            list={[
              {
                title: 'Understand Constraints Early',
                text: 'This project taught me to position my design process for future projects to be rooted in early understanding of product constraints and requirements, viewing them as doors to new design opportunities rather than roadblocks.'
              },
              {
                title: 'Embracing Project Nonlinearity',
                text: 'Throughout this project, I pivoted in our design solutions, worked on other features in parallel, and hopped around different feature teams on a weekly basis. I found that welcoming this winding, nonlinear design path helped open me up to design inspirations from the people, conversations, and new ideas that I encountered, reminding me that design - as much as it is a strategic force - is also a deeply creative act.'
              },
              {
                title: 'Future Directions: Research Validation',
                text: "If given more time during our design process, I would have liked to lead a usability testing phase to understand how users interact with both Nearby and Browse as well as what they understand about each of their functionalities."
              }
            ]}
          />
        </section>
      </div>
    </main>
  )
}

export default Nearby