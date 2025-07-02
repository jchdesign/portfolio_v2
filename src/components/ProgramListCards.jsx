import TitleUL from './TitleUL';
import CaseStudyCard from './CaseStudyCard';

function ProgramListCards({title, id, list=[]}) {
  return (
    <section id={id} className='container'>
        <TitleUL text={title} size='h2'/>
        <div className='home-case-study-container'>
          {list.length!==0 &&
            list.map((item) => (
              <CaseStudyCard 
                key={item.key}
                listing={item.listing}
                link={item.link}
                img={item.img}
                miniOverview={item.miniOverview}
              />
            ))
          }
        </div>
    </section>
  )
}

export default ProgramListCards