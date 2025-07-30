import TitleUL from './TitleUL'

function ListSection({title='', subtitle='', list}) {
  return (
    <div className='text-container'>
        {title!=='' ? <h2 style={{textTransform:'uppercase'}}><strong>{title}</strong></h2> : null}
        {subtitle!=='' ? <><p className='text'>{subtitle}</p><br></br></> : null}
        {list.map((item) => (
          <div className='list-item'>
              {item.title ? <h3 className='font-600' style={{textTransform:'uppercase'}}>{item.title}</h3> : null}
              {item.text ? <><p>{item.text}</p><br></br></> : null}
          </div>
          ))
        }
    </div>
  )
}

export default ListSection