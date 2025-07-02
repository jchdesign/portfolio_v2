import { Link } from 'react-router-dom'

function CardLong({listing, miniOverview, imgCard, img_cardSecondary, link=''}) {
  return (
    <Link style={{display:'flex', justifyContent:'center'}} to={link}>
      <div className='card-long'>
        <img className='teaser-img' src={imgCard} alt={imgCard}/>
        <div className='description'>
          <h2>{listing}</h2>
          <p>{miniOverview}</p>
        </div>
      </div>
    </Link>
  )
}

export default CardLong