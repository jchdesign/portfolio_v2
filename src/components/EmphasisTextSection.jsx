function EmphasisTextSection({text1, text2}) {
  return (
    <div className='container flex-align-center'>
        <div className='container-small'>
            <div className='text'>{text1}</div>
            <br></br>
            <div className='h3 font-400' style={{paddingTop:'0.5em'}}>{text2}</div>
        </div>
    </div>
  )
}

export default EmphasisTextSection