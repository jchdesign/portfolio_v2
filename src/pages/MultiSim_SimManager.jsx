import { useEffect } from 'react';

import Figure1 from '../assets/Figure1.jpg';
import UXWork from '../assets/MultiSim_SimManager/UXWork.png';
import Team from '../assets/MultiSim_SimManager/Team.png';
import DevCollab from '../assets/MultiSim_SimManager/DevCollab.png';
import TeamCollab from '../assets/MultiSim_SimManager/TeamCollab.png';
import UXCollab from '../assets/MultiSim_SimManager/UXCollab.png';
import MultiSim from '../assets/MultiSim_SimManager/MultiSim.png';
import SimManager from '../assets/MultiSim_SimManager/SimManager.png';
import design_process from '../assets/MultiSim_SimManager/design_process.png';
import nemawashi from '../assets/MultiSim_SimManager/nemawashi.png';
import design_sketching from '../assets/MultiSim_SimManager/design_sketching.png';
import ux_process from '../assets/MultiSim_SimManager/ux_process.png';
import design_review from '../assets/MultiSim_SimManager/design_review.png';

import CaseStudyGrid from '../components/CaseStudyGrid';
import ImageTextSection from '../components/ImageTextSection';
import LayeredTextSection from '../components/LayeredTextSection';
import SectionDivider from '../components/SectionDivider';
import TextSection from '../components/TextSection';
import work_data from '../data/design_data';
import EmphasisTextSection from '../components/EmphasisTextSection';
import ListSection from '../components/ListSection';
import ImageSection from '../components/ImageSection';
import Footer from '../components/Footer';

function MultiSim_SimManager() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className='design'>
      <div className='container'>
        <CaseStudyGrid data={work_data[1]}/>
        <section className='grey'>
          <TextSection
            title={"UNITING A TEAM THROUGH DESIGN"}
            text={<p>Leading a product team through sketching workshops, design reviews, and empathetic collaboration, <strong>achieving crossfunctional alignment on the workflow redesign of Multiple Simulations and Simulation Manager applications.</strong></p>}
          />
        </section>
        <section>
          <TextSection
            title={"DIRECTOR'S NOTE"}
            text={"This project is under an NDA, and while I can't share the details of my work, I hope this case study can give you an understanding of the design process I employ to bring my team together through design."}
          />
        </section>
        <section className='inverse-black'>
          <TextSection title='THE STORY OF A 10-WEEK DESIGN CHALLENGE'/>
        </section>
        <section>
          <TextSection
            title={"TWO APPLICATIONS, IN PARALLEL"}
            text={<>
              <p>MathWorks core product Simulink allows for robust model-based design and simulation using a graphical user interface and a large array of domain-specific applications.</p>
              <strong>One of the many capabilities that Simulink supports is running multiple simulations - specifying arrays of parameters for a model and running the model for each parameter combination that is inputted.</strong>
            </>}
          />
        </section>
        <ImageTextSection orientation='img-text'
          img={MultiSim} 
          title='Multiple Simulations' 
          text='Provides a graphical interface to specify the different parameters that they want to simulate the model using and set up each of the hundreds, thousands of simulation runs...'
        />
        <ImageTextSection orientation='img-text' 
          img={SimManager} 
          title='... and Simulation Manager' 
          text='Allows users to visualize the simulation results and customize the plot visualizations to their liking.'
        />
        <section className='inverse-black'>
          <TextSection 
            title={"THE CHALLENGE: A FRAGMENTED WORKFLOW"}
            text={<>
              <h3>This disconnected workflow that jumps between two application windows has led to a <span style={{fontStyle:'italic', color:'lightSalmon'}}>history of customer help tickets and user reports of pain points, taxing the product team and customer-facing engineers.</span></h3>
              <h3>As the sole designer supporting the Multiple Simulations and Simulation Manager team on this project, I was tasked to redesign the workflow to <strong>create a unified workflow between the two applications.</strong></h3>
            </>}
          />
        </section>
        <section>
          <ListSection
            title='GOALS'
            list= {[
              {
                title: 'Unify the MultiSim and Sim Manager Workflows',
                text: "Build a reimagined parallel/multiple simulation workflow that reduces the friction experienced by dedicated users and customers."
              },
              {
                title: 'Align Design Needs',
                text: "Balance and deliver the visions desired by our users and the cross-functional team that owns these apps."
              },
              {
                title: 'Respect Technical Feasibilities',
                text: 'Work closely with the developer to ensure implementation feasibility.'
              },
              {
                title: 'Maintain UX Standards',
                text: "Follow internal UX standards and best practices for MathWorks product look and workflow."
              }
            ]}
          />
        </section>
        <ImageSection
          img={design_process}
        />
        <section>
          <ImageTextSection
            orientation='text-img'
            img={Team}
            title='Meet the Orchestra'
            text='The cross-functional team I had the pleasure of working with. Spanning across UX, management, and engineering, I sought out and incorporated perspectives from these groups to build my designs.'
          />
        </section>
        <section className='inverse-black'>
          <TextSection title='Phase I: RESEARCH, COFFEE CHATS, AND NEMAWASHI'/>
        </section>
        <section>
          <TextSection
            title={"RESEARCH... WITHOUT RESEARCH"}
            text={
              <>
                <p>Without a UX researcher on our team, I had to be creative with my needfinding research.</p>
                <br></br>
                <p>Sourcing user stories from <strong>Stack Overflow, MATLAB Answers, MathWorks's internal bug-tracking tool,</strong> I developed user personas and translated their needs into product requirements.</p>
              </>
            }
          />
        </section>
        <section className='grey'>
          <TextSection
            title={"WHAT'S NEMAWASHI?"}
            text={
              <>
                <p><strong>Nemawashi</strong> is MathWorks's way of describing "Hey, how about I drop by your office to chat?". </p>
                <p>An informal that has become a norm for intimate collaboration, I took the initiative to chat with our team's developer one-on-one multiple times a week and meet with our product manager and customer-facing engineers to hear their experience working with users of MultiSim and Simulation Manager.</p>
              </>
            }
          />
        </section>
        <ImageSection
          img={nemawashi}
        />
        <section>
          <TextSection
            title={"RESEARCH + NEMAWASHI OUTCOMES"}
            text={
              <p>A thorough secondary research process and one-on-one chats with the team led me to develop a deep understanding of our users and the people within MathWorks that made these products, <strong>setting a precedence for collaboration between the team and me.</strong></p>
            }
          />
        </section>
        <section className='inverse-black'>
          <TextSection title={'Bringing in the Team - Design Sketching'}/>
        </section>
        <section className='grey'>
          <TextSection
            title={"CREATING A SPACE FOR CROSS-FUNCTIONAL DESIGN IDEATION"}
            text={
              <>
                <h3>Early in the design ideation process, I wanted to open our designs to all the people that are important within the Multiple Simulations space.</h3>
                <h3>
                  I initiated a <strong>design sketching event</strong>, inviting a team consisting of a manager, developer, and customer-facing engineers to share their design ideas.
                  <br></br>
                  <br></br>
                  My goal: <span style={{fontStyle:'italic', color:'purple'}}>Understand the ideas of our team and invite them into the redesign of the workflow.</span>
                </h3>
              </>
            }
          />
        </section>
        <ImageSection
          img={design_sketching}
        />
        <section>
          <TextSection
            title={"DESIGN SKETCHING OUTCOMES"}
            text={
              <h3>Having the team in once room sharing their ideas, I not only <strong>collected unique design ideas informed by the experience of the manager, developer, and customer-facing engineers</strong>, but also <strong>established alignment on the product requirements going forward in this redesign.</strong></h3>
            }
          />
        </section>        
        <section className='inverse-black'>
          <TextSection title={'On the Design Frontier'}/>
        </section>
        <section>
          <ImageTextSection
            img={UXCollab}
            title='The Nitty Gritty of Design'
            text={"Inspired by their perspectives and ideas, I transitioned into a focused UX design process, working alongside my developer and the UX community."}
          />
        </section>
        <ImageSection
          img={ux_process}
        />
        <section className='grey'>
          <TextSection
            title={"CONVERGING..."}
            text={<p>After the developer and I converged on design solutions that met our requirements, I prepared a <strong>design review meeting</strong> with our stakeholders.</p>}
          />
        </section>
        <section className='inverse-black'>
          <TextSection 
            title={'Wrapping Up With A Final Design Review'}
          />
        </section>
        <ImageSection
          img={design_review}
        />
        <section className='inverse-black'>
          <TextSection
            title={"FINAL OUTCOMES"}
            text={
              <>
                <h3>Taking in suggestions from the team, I delivered a high-fidelity final version of the revamped workflow, ready for handoff.</h3>
                <h3><strong>The solution was well-received by all members of the team and staged for development in the next MATLAB release.</strong></h3>
              </>
            }
          />
        </section>
        <section>
          <ListSection
            title="WHAT THIS PROJECT TAUGHT ME"
            list={[
              {
                title: 'Conversations Inspire',
                text: "This project came to be by inviting the perspectives and opinions of all those involved with the project space. By valuing and by seeking those them out, I was able to bring inspirations from their viewpoints into the designs I create. From large meetings, to weekly calls, to impromptu coffee chats, this project taught me that opening the doors to these people will equip me with the knowledge I need to create effective solutions."
              },
              {
                title: 'Benchmark Earlier',
                text: 'Talking with mentors mid-way through my internship, I learned of benchmarking exercises that would have equipped me with more product and UX Standards knowledge - something I could have done before the ideating phase of the project.'
              }
            ]}
          />
        </section>
      </div>
    </main>
  )
}

export default MultiSim_SimManager