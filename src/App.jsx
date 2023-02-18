import { Configuration, OpenAIApi } from "openai";
import { useState } from "react";
import "./app.css";
function App() {
  const [prompt, setPrompt] = useState("");
  const [inp, setInp] = useState("");
  const [src, setSrc] = useState("");
  const func = (e) => {
    setInp(e.target.value);
  };
  const configuration = new Configuration({
    apiKey: `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`,
  });
  // console.log(import.meta.env.VITE_SECRET_KEY);
  const openai = new OpenAIApi(configuration);

  const genImg = async () => {
    const resp = await openai.createImage({
      prompt: `${prompt}`,
      n: 1,
      size: "1024x1024",
    });
    setSrc(resp.data.data[0].url);
  };
  return (
    <>
      <div className="parent">
        <div className="main">
          <h1>My DALLE</h1>
          <div className="img">
            <img src={src} />
          </div>
          <input
            type="text"
            placeholder="Type whatever Comes in your mind...."
            onChange={(e) => {
              setPrompt(e.target.value);
            }}
          />
          <button onClick={genImg}>Generate AI Image</button>
        </div>
      </div>
    </>
  );
}

export default App;
