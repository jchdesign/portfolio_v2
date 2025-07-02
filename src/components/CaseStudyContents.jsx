import NavButton from './NavButton'

function CaseStudyNav({data}) {
  return (
    <div className='case-study-nav'>
        {data.map((item) => (
            <NavButton 
                text={item.text}
                time={'1:00'}
                link={''}
            />
            ))
        }
    </div>
  )
}

export default CaseStudyNav