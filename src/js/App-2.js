function Profile() {
  return (
    <img
      src="https://giseok.watchdognet.com/giseok.jpg"
      alt="giseok"
      hight="150"
      width="100"
    />
  );
}

export default function Dweb() {
  const templateStyle = {
    color: "blue",
  };
  return (
    <section>
      <h1 style={templateStyle}>Incheon National University</h1>
      <h2>Computer Science and Engineering</h2>
      <h3>Park, Gi Seok</h3>
      <Profile></Profile>
      <Profile /> <br />
      <Profile />
    </section>
  );
}
