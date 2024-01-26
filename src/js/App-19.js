const people = [
  "20201122 Kim Incheon",
  "20191428 Lee Incheon",
  "20211253 Park Incheon",
  "20181524 Choi Incheon",
  "20211123 Han Incheon",
];

export default function List() {
  const listItems = people.map((person) => <li>{person}</li>);

  return <ul>{listItems}</ul>;
}
