function Item({ name, isPacked }) {
  return <li className="item">{name}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>This is me 🤣</h1>
      <ul>
        <Item isPacked={true} name="Incheon National University" />
        <Item isPacked={true} name="Distributed Services and Web Engineering" />
        <Item isPacked={true} name="Park Gi Seok" />
      </ul>
    </section>
  );
}
