import Ads from "./components/Ads";
import fbPostData from "././data/FbpostData";
function App() {
  return (
    <div>
      <Ads data={fbPostData} />
    </div>
  );
}

export default App;
