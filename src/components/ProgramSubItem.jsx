import { Link } from 'react-router-dom'

function ProgramSubItem({listing, credit, arranged=false, link=''}) {
  return (
    <>
      <div className='program-item sub-item'>
        {link !=='' ? <Link to={link} className='text-link title text'>{listing}</Link> : <div className='title text'>{listing}</div>}
        <div className='dashed-line'></div>
        <div className='artist p-text font-italic'>{arranged ? `ARR. ${credit}` : credit}</div>
      </div>
        {/* {img !=='' ?
          <div className='sub-item-details'>
            <img className='teaser-img' src={img}/>
            <p className='mini-overview text'>{homeOverview}</p>
          </div>
        : null} */}
    </>
  )
}

export default ProgramSubItem