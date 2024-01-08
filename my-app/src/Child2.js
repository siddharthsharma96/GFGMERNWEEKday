const Child2 = ({ coursweName, age, mob, bank, setBank }) => {
  if (age < 89) {
    setBank(9000);
  }
  return (
    <>
      <br></br>
      <hr></hr>
      {coursweName} {age} {mob}
      {bank}
      <p>Child 2 data</p>
    </>
  );
};
export default Child2;
