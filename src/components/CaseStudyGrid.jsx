import Header from './Header';
import ImageSection from './ImageSection';

function CaseStudyGrid({data}) {
  return (
    <>
        <Header/>
        <div className='case-study-container'>
            <h1>{data.title}</h1>
            <ImageSection img={data.img}/>
            <div style={{
                display:'flex',
                justifyContent:'center',
                paddingTop:'2rem'
            }}>
                <div className='text-container' style={{
                textTransform:'uppercase',
                padding:'2rem 0rem',
                display:'flex',
                flexDirection:'column',
                gap:'1rem'
                }}>
                    <p className='body' style={{paddingBottom:'2rem'}}><strong>OVERVIEW</strong> // {data.overview}</p>
                    <p className='body'><strong>ROLE</strong> // {data.role[1]}</p>
                    {data.collab_credits != '' ? <p className='body'><strong>IN COLLABORATION WITH</strong> // {data.collab_credits}</p> : null}
                    {data.collab ?
                        <div>
                            <p><strong className='body'>FEATURING</strong> //</p>
                            {data.collaborators.map((item) => (
                                <p>
                                    {item.name} - {item.role}
                                </p>
                            ))}
                        </div> : null
                    }
                    <p className='body'><strong>FROM</strong> // {data.duration}</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default CaseStudyGrid