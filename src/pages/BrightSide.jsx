import { useEffect } from 'react';

import film_data from '../data/film_data';

import CaseStudyGrid from '../components/CaseStudyGrid';
import VideoEmbed from '../components/VideoEmbed';
import Footer from '../components/Footer';

function BrightSide() {
    useEffect(() => {
     window.scrollTo(0, 0);
    }, []);
    
    return (
        <main class='film'>
            <div className='container'>
                <CaseStudyGrid data={film_data[0]}/>
                <VideoEmbed title={"SCENE 12: BREAKING DOWN"} source={"https://www.youtube.com/embed/RYHmb0j1fF8?si=saD0sWkcRY_hNwwW"} />
                <VideoEmbed title={"SCENE 16: ANEW"} source={"https://www.youtube.com/embed/ubjnPGe6_68?si=4m9Gl_gMR16EJxTR"} />
            </div>
        </main>
    )
}

export default BrightSide