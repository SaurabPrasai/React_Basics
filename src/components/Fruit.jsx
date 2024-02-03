export default function Fruit(props) {
  return <>
  <li>{props.name}={props.price} {props.sold?"SoldOut":"Not Sold"}</li>
  </>;
}
