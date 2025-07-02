import { useEffect } from 'react';

import film_data from '../data/film_data';

import CaseStudyGrid from '../components/CaseStudyGrid';
import VideoEmbed from '../components/VideoEmbed';
import Footer from '../components/Footer';

function OniriaHill() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <main class='film'>
      <div className='container'>
        <CaseStudyGrid data={film_data[2]}/>
        <VideoEmbed title='DEMO' source='https://www.youtube.com/embed/_UmZrf7b6cE?si=K6-fy8raFXVh6vPK'/>
      </div>
    </main>
  )
}

export default OniriaHill