import Car from './Car'

function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car name="Hundai" established="1999" carAge={20} />
      <Car name="Maruthi" established="2000" carAge={10} />
      <Car name="Benz" established="2020" carAge={5} />
    </>
  );
}

export default Garage;