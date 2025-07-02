import { Link } from 'react-router-dom'

function CaseStudyCard({listing, miniOverview, img, link=''}) {
  return (
    <Link to={link}>
        <div className='case-study-card'>
            <img className='teaser-img' src={img} alt={img}/>
            <p className='text-link h3 font-400'>{listing}</p>
            <p className='text'>{miniOverview}</p>
        </div>
    </Link>
  )
}

export default CaseStudyCard