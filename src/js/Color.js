export default function Color({ value }) {
  console.log(value);
  return (
    <div
      className="colorbox"
      style={{ backgroundColor: value, width: "100px", height: "100px" }}
    />
  );
}
