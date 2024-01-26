import Avatar from "./Avatar.js";

function Card({ children }) {
  return (
    <div>
      <div className="card1">
        <h1>Modern Web Class</h1>
      </div>
      <div className="card2">{children}</div>
      <div className="card3">{children}</div>
    </div>
  );
}

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
    </Card>
  );
}
