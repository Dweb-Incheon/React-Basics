import { getImageUrl } from "./utils.js";

function Avatar(props) {
  return (
    <img
      className="avatar"
      src={getImageUrl(props.person)}
      alt={props.person.name}
      width={props.size}
      height={props.size}
    />
  );
}

function Profile({ person, size, isSepia, thickBorder }) {
  return (
    <div className="card">
      <Avatar
        person={person}
        size={size}
        isSepia={isSepia}
        thickBorder={thickBorder}
      />
    </div>
  );
}

export default function Profiles() {
  return (
    <>
      <Profile
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
        size={100}
        isSepia={true}
        thickBorder={false}
      />
    </>
  );
}
