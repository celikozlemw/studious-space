import './App.css';
function App() {
  function showMessage() {
    var message = document.getElementById("message").value;
    document.getElementById("output").innerHTML = message;
  }
  return (
    <div className="App">

<img src="Octocat.png" className="App-logo" alt="logo" />

      <input id="message" type="text" placeholder="Mesajınızı yazın" />
      <button onClick={showMessage}>Gönder</button>
      <div id="output"></div>
    </div>
  );
}
export default App;
