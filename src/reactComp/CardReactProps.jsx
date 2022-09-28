import "/src/styles.css";
//React Props

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
    <div className="Cards">
      <h1>Title</h1>
      <Card
        source="https://cdn.shopify.com/s/files/1/2491/1072/products/image_2_64d6bf59-7fed-4c13-97e0-7f68b2a37a0e_250x.jpg?v=1580579696"
        title="Epit Stuff"
        details="Naruto Akatsuki All members Posters"
      />
      <Card
        source="https://cdn.shopify.com/s/files/1/2491/1072/products/image_2_305x.jpg?v=1580579889"
        title="epic Stuff"
        details="Naruto Bijuu Poster"
      />
      <Card
        source="https://cdn.shopify.com/s/files/1/2491/1072/products/image_2_75cca55e-9a92-4f35-94f5-3f30d7914eb1_305x.jpg?v=1580579374"
        title="Your Name"
        details="Your Name"
      />
      <Card
        source="https://cdn.shopify.com/s/files/1/2491/1072/products/81X1y7YnMJL._SL1500_305x.jpg?v=1575022857"
        title="Ds"
        details="Demon Slayer Poster"
      />
      <Card
        source="https://cdn.shopify.com/s/files/1/2491/1072/products/3_305x.jpg?v=1573884151"
        title="One piece"
        details="Monkey D Luffy Poster"
      />
      <Card
        source="https://cdn.shopify.com/s/files/1/2491/1072/products/3_305x.jpg?v=1573884151"
        title="One piece"
        details="Monkey D Luffy Poster"
      />
    </div>
  );
}
