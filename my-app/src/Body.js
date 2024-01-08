import Card from "./Card";
import Sections from "./Section";

const Body = () => {
  const a = [1, 2, 3, 4, 5, 6];
  return (
    <div classNameName="i">
      <Sections></Sections>
      <section className="cardSection">
        {a.map((e) => (
          <Card key={e}></Card>
        ))}
      </section>
    </div>
  );
};
export default Body;
