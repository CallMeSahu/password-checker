import "./styles.css";

export default function App() {
  function passwordInputHandler(passwordInput) {
    console.log(passwordInput.target.value);
  }

  return (
    <div className="App">
      <h1>Password Checker</h1>
      <p className="label">Check if your password is safe or not!</p>
      <div style={{ border: "1px lightgreen" }}>
        <input
          className="input-box"
          type="password"
          onChange={passwordInputHandler}
        ></input>
      </div>
    </div>
  );
}
