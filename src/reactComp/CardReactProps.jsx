import "/src/styles.css";

function Card(props) {
  return (
    <div>
      <img src={props.source} alt="" />
      <h6>{props.title}</h6>
      <h4>{props.details}</h4>
    </div>
  );
}

export default function Cards() {
  return (
    <div>
      <h1>Title</h1>
      <Card
        source="https://cdn.shopify.com/s/files/1/2491/1072/products/image_2_64d6bf59-7fed-4c13-97e0-7f68b2a37a0e_250x.jpg?v=1580579696"
        title="Epit Stuff"
        details="Naruto Akatsuki All members Posters"
      />
    </div>
  );
}
