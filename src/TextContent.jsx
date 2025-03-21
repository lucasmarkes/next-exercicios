function TextContent({ title, children }) {
  return (
    <>
      <h3>{ title }</h3>
      <p>{ children }</p>
    </>
  );
}

export default TextContent;
