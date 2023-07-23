import './App.css';


function App() {
  function showMessage() {
    var message = document.getElementById("message").value;
    document.getElementById("output").innerHTML = message;
  }
  return (


    <div className="App">
      <header className="App-header">
        <img src="Octocat.png" className="App-logo" alt="logo" />
        <p>
         <span className="heart">😁</span> React
        </p>
        
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          
<form action="#" id="myForm">
      <textarea id="message" rows="1" cols="20" placeholder="deneme mesajınızı girin"></textarea>
  <button type="button" onclick="showMessage()">Gönder</button>
</form>
<p id="output"></p>

          </a>
        </p>
      </header>

   
    </div>

  );
}
export default App;
