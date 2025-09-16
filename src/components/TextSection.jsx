function TextSection({ text = '', title = '' }) {
  const renderText = () => {
    if (!text) return null;
    if (typeof text === 'string') return <p>{text}</p>;
    return text;
  };

  return (
    <div className="text-container">
      {title && (
        <h2 style={{ textTransform: 'uppercase' }}>
          <strong>{title}</strong>
        </h2>
      )}
      {renderText()}
    </div>
  );
}

export default TextSection;