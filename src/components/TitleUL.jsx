function TitleUL({text, size='h2', style}) {
  return (
    <div style = {style} className={`title-ul ${size}`}>{text}</div>
  )
}

export default TitleUL