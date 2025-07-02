import CardSection from '../components/CardSection'
import Header from '../components/Header';

function Directory({heading, description, data}) {
  return (
    <div className='container'>
      <Header/>
      <div className='card-section-description'>
          <h1>
            {heading}
          </h1>
          <p>
            {description}
          </p>
      </div>
      <CardSection data={data}/>
    </div>
  )
}

export default Directory