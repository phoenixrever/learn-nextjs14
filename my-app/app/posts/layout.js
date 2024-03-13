const Layoyt = (props) => {
  return (
    <>
      <div>Header</div>
      <div>{props.children}</div>
      <div>Footer</div>
    </>
  );
};

export default Layoyt;
