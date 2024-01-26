// export default function Button() {
//   function handleClick() {
//     alert("You clicked me!");
//   }

//   return <button onClick={handleClick}>Click me</button>;
// }

export default function Button() {
  return (
    <button
      onClick={() => {
        alert("You clicked me");
      }}
    >
      Click me
    </button>
  );
}
