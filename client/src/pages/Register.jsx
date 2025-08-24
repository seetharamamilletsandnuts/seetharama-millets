export default function Register() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Register</h2>
      <form>
        <input type="text" placeholder="Name" /><br /><br />
        <input type="email" placeholder="Email" /><br /><br />
        <input type="password" placeholder="Password" /><br /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}