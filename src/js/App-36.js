export default function Signup() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("Submitting!");
      }}
    >
      <input type="text" size="32" placeholder="Dweb" />
      <button>Send</button>
    </form>
  );
}
