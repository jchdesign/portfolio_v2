import work_data from '../data/design_data';
import film_data from '../data/film_data';
import music_data from '../data/music_data';
import TitleUL from './TitleUL';
import ProgramSubItem from './ProgramSubItem';
import ProgramItemCardsLong from './ProgramItemCardsLong';
import CaseStudyCard from './CaseStudyCard';
import CaseStudyCardLong from './CardLong';

function ProgramListCardsLong({title, id, list}) {
  return (
    <section id={id} className='container'>
      <TitleUL text={title} size='h2'/>
      <div className='home-case-study-container'>
        {list.length!==0 &&
          list.map((item) => (
            <CaseStudyCardLong
              key={item.key}
              listing={item.listing}
              link={item.link}
              imgCard={item.imgCard}
              miniOverview={item.miniOverview}
            />
          ))
        }
      </div>
  </section>
  )
}

export default ProgramListCardsLong