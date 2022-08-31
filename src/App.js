import './App.css';
import Header from './components/Header';

function App() {
  return (
    <div className="app">
      <Header/>
      <div class="container">
        <div class="upper-heading">
          <h1 class="heading1">
            The way you love some people must also be the way you should love
            <br />
          </h1>
          <h1 class="heading2">&#34;The Moon&#34;</h1>
        </div>
        <div class="image">
          <img src={require("./images/img-16.jpg")} alt="yaya" />
        </div>
        <div class="lower-heading">
          <h1 class="heading1">
            So to embrace your love,<br />
            you'll find here the most beautiful pictures of your love, ie.
            <br />
          </h1>
          <h1 class="heading2">&#34;The Moon&#34;</h1>
        </div>
        <div class="image">
          <img src={require("./images/img-1.jpg")} alt="nope" />
        </div>
        <div class="description">
          <div class="upper-heading">
            <h1>Serenty beholds you, lover.</h1> 
           </div>
           <div class="image">
          <img src={require("./images/img-10.jpg")} alt="nope" />
        </div>
        </div>
        <div class="image">
          <img src="./images/img-14.jpg" alt=""/>
        </div>
        <div class="upper-body">
          <h1 class="heading1">
            We want everyone to love the moon! Not just existing lovers or heartbroken people! 
          </h1>
          <p class="heading2">
            So to complete this mission, we request you to talk about moon as much as you can with other people! This will make them fall in love with 
          </p>
          <p class="heading3">&#34;The Moon&#34;</p>
        </div>
        <footer>
          <p class="copyright">Copyright AnshKaushal 2022</p>
      </footer>
      </div>
    </div>
  );
}

export default App;
