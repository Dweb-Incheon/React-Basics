function WebFrontend() {
  return (
    <article>
      <h2>Modern Web</h2>
      <ol>
        <li>JavaScript</li>
        <li>React</li>
        <li>Nginx</li>
      </ol>
    </article>
  );
}

function WebBackend() {
  return (
    <article>
      <h2> Web Backend</h2>
      <ol>
        <li>Golang</li>
        <li>Web Framework</li>
        <li>Using Blockchain API</li>
      </ol>
    </article>
  );
}

function BackendTrack() {
  return (
    <article>
      <WebFrontend />
      <WebBackend />
    </article>
  );
}

export default function Dweb() {
  return (
    <section>
      <h1>Dweb Cource</h1>
      <BackendTrack />
    </section>
  );
}
