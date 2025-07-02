import CaseStudyCard from './CaseStudyCard';
import TitleUL from './TitleUL';
import {Link} from 'react-router-dom';

function ProgramItemCards({title, list=[]}) {
  return (
    <section className='program-container'>
        <TitleUL text={title} size={'h1'}/>
        <div className='home-case-study-container'>
          {list.length!==0 &&
            list.map((item) => (
              <CaseStudyCard 
                key={item.key}
                listing={item.listing}
                link={item.link}
                arranged={item.arranged}
                img={item.img}
                miniOverview={item.miniOverview}
              />
            ))
          }
        </div>
    </section>
  )
}

export default ProgramItemCards