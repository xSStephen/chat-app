import "./App.css";
import { Helmet } from "react-helmet";
import Chat from "./modules/Chat";

function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Chat App</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      <Chat />
    </div>
  );
}

export default App;
