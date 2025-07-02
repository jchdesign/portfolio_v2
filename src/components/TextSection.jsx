import TitleUL from './TitleUL'

function TextSection({text='', title='', size='body'}) {
  return (
    <div className='text-container'>
      {title=='' ? null : <h2 style={{textTransform:'uppercase'}}><strong>{title}</strong></h2>}
      {text=='' ? null : <p>{text}</p>}
    </div>
  )
}

export default TextSection