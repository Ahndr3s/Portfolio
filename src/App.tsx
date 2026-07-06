import Background from "./shared/Background";
import { AppRouter } from "./router/AppRouter";
// import { MobileSlider } from "./shared/MobileSlider";
import "./index.css";

function App() {
  return (
    <>
      <Background />
      <AppRouter />
      {/* <MobileSlider /> */}
    </>
  );
}

export default App;
