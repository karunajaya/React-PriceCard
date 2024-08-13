import Message from "./Message";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const cards = [
    {
      plan: "Free",
      price: 0,
      features: [
        { name: "Single User", enable: true },
        { name: "50GB Storage", enable: true },
        { name: "Unlimited Public Projects", enable: true },
        { name: "Community Access", enable: true },
        { name: "Unlimited Private Projects", enable: false },
        { name: "Dedicated Phone Support", enable: false },
        { name: "Free Subdomain", enable: false },
        { name: "Monthly Status Reports", enable: false },
      ],
    },
    {
      plan: "Pro",
      price: 15,
      features: [
        { name: "5 Users", enable: true },
        { name: "50GB Storage", enable: true },
        { name: "Unlimited Public Projects", enable: true },
        { name: "Community Access", enable: true },
        { name: "Unlimited Private Projects", enable: true },
        { name: "Dedicated Phone Support", enable: true },
        { name: "Free Subdomain", enable: true },
        { name: "Monthly Status Reports", enable: false },
      ],
    },
    {
      plan: "Enterprise",
      price: 25,
      features: [
        { name: "Unlimited Users", enable: true },
        { name: "150GB Storage", enable: true },
        { name: "Unlimited Public Projects", enable: true },
        { name: "Community Access", enable: true },
        { name: "Unlimited Private Projects", enable: true },
        { name: "Dedicated Phone Support", enable: true },
        { name: "Free Subdomain", enable: true },
        { name: "Monthly Status Reports", enable: true },
      ],
    },
  ];

  return (
    <div className="container">
      <main>
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
          {cards.map((card, index) => (
            <Message
              key={index}
              plan={card.plan}
              price={card.price}
              features={card.features}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;



