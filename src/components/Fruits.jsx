import Fruit from "./Fruit";

export default function Fruits() {
  const fruits = [
    {
      name: "Banana",
      price: 30,
      sold:true
    },
    {
      name: "Mango",
      price: 20,
      sold:true

    },
    {
      name: "Pineapple",
      price: 50,
      sold:false

    },
  ];
  return (
    <div>
      <ul>
        {fruits.map((fruit) => (
          <Fruit  key={fruit.price} name={fruit.name} price={fruit.price} sold={fruit.sold}/>
        ))}
      </ul>
    </div>
  );
}
