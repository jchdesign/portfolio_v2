import { useEffect } from 'react';

import research_data from '../data/research_data';
import VVSS from '../assets/Reflection/VVSS.jpg';
import aes_results from '../assets/Reflection/aes_results.png';
import discrim_results from '../assets/Reflection/discrim_results.png';
import correlations from '../assets/Reflection/correlations.png';
import Stimuli from '../assets/Reflection/Stimuli.png';
import Tasks from '../assets/Reflection/Tasks.png';
import reflection from '../assets/Reflection/reflection.png';


import CaseStudyGrid from '../components/CaseStudyGrid';
import SectionDivider from '../components/SectionDivider';
import TextSection from '../components/TextSection';
import EmphasisTextSection from '../components/EmphasisTextSection';
import ImageTextSection from '../components/ImageTextSection';
import Footer from '../components/Footer';
import ImageSection from '../components/ImageSection';

function Reflection() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <main class='research'>
      <div className='container'>
        <CaseStudyGrid data={research_data}/>
        <section className='inverse-black'>
          <TextSection
            title={'Movement I: Why Chirality? What is Chirality?'}
          />
        </section>
        <section>
          <ImageTextSection
            img={reflection}
            text={"We encounter mirrored sceneries often in our daily lives. \n\nSome are obvious to us that they are flipped. \n\nSome less so."}
            textSize='h3'
          />
          <TextSection
            text={<h3>So then, why is it that some images are more difficult to tell whether it is mirrored or not? <br></br><br></br> And does how good the image look have any correlation with <strong>chirality</strong> - the visual differences between an original image and its mirrored orientation?</h3>}
          />
        </section>
        <section className='inverse-black'>
          <TextSection 
            title={'Now Enter Our Research Question:'}
            text={<h3>How does our aesthetic perception of images interact with our ability to discriminate between mirrored and non-mirrored variations of an image?</h3>}
          />
        </section>
        <section>
          <SectionDivider text={'Movement II: Experiment Design'}/>
          <ImageTextSection 
            img={Stimuli}
            title='Stimuli'
            text={<p>In an online experiment setting, an image set consisting of 78 <strong>social</strong> images of people and 78 <strong>inanimate</strong> images of inanimate scenes was presented. The theme of each image was matched across the social and inanimate categories.</p>}
          />
          <ImageTextSection 
            img={Tasks}
            title='Tasks'
            text={<p>Our experiment involved two tasks, the first being a <strong>chiral discrimination task</strong>. Participants were shown an image and its mirrored orientation and were asked to select what they believed was the original orientation.
            <br></br><br></br>
            The second task, which immediately followed the first task, was an <strong>aesthetic rating task</strong>. Participants viewed the same images one-by-one and rated the aesthetic appeal of each image on a scale of 1 to 6.</p>}
          />
        </section>
        <section className='inverse-black'>
          <TextSection title={"Our Experiment's Findings"}/>
        </section>
        <section>
          <ImageTextSection
            img={discrim_results}
            title='Chiral Discrimination Task'
            text={"Explicit judgment of the original orientation is difficult, as performance for both social and inanimate images were around change level. However, social cues for chirality (like handedness) seem to exist."}
          />
          <ImageTextSection
            img={aes_results}
            title='Aesthetic Perception Task'
            text={<p>There was no significant difference between the aesthetic values of the actual orientations of the images. <strong>However, the orientation that participants perceived to be original were rated as more aesthetically pleasing than what they perceived as mirrored.</strong></p>}
          />
          <ImageTextSection
            img={correlations}
            title='Individual Image Correlations'
            text={<p>For each image, we correlated the average chiral discrimination accuracy (Task 1) with the average difference between the aesthetic ratings of the original orientation and the mirrored orientation (subtracting the mirrored rating from the original rating in Task 2). <strong>We found a significant positive correlation between discrimination accuracy and rating difference for inanimate images and a near-significant positive correlation for social images, suggesting that the orientation that appears better-looking is perceived as original.</strong></p>}
          />
        </section>
        <section className='inverse-black'>
          <TextSection
            text={<h3>The results of this experiment reveal that common mental processes underlie our perception of chriality and aesthetics.</h3>}
          />
        </section>
        <ImageSection
          img={VVSS}
        />
      </div>
    </main>
  )
}

export default Reflection