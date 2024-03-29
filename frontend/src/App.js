import { Route, Routes } from "react-router-dom";
import Chat from "./chat/chat";
import Homepage from "./homepage/homepage";
import Profile from "./profile/profile";
import MLBackground from "./components/MLBackground";

function App() {
  return (
    <div className="bg-prim-color min-h-[98vh] text-prim-font-color">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/ml" element={<MLBackground />}></Route>
      </Routes>
    </div>
  );
}

export default App;
