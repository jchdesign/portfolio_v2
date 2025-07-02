import CaseStudyCardLong from './CardLong';
import {Link} from 'react-router-dom';

function ProgramItemCardsLong({listing='Works', credit='Chang', link='', subitem_list=[]}) {
  return (
    <div className='program-container'>
        <div className='program-item'>
            {link==='' ? <div className='title h2 font-200'>{listing}</div> : <Link to={link} className='text-link title h3 font-200'>{listing}</Link>}
            <div className='dashed-line'></div>
            {/* <div className='artist text font-italic-200'>{credit}</div> */}
        </div>
        <div className='home-case-study-container'>
            {subitem_list.length!==0 &&
                subitem_list.map((item) => (
                    <CaseStudyCardLong
                        key={item.key}
                        listing={item.listing}
                        credit={item.credit}
                        link={item.link}
                        arranged={item.arranged}
                        img={item.img}
                        overview={item.overview}
                    />
                ))
            }
        </div>
    </div>
  )
}

export default ProgramItemCardsLong