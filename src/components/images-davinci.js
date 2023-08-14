import { useState } from "react";
import CreateImages from "../services/service.images";

export default function ImageGeneration() {
    const [animalInput, setAnimalInput] = useState("");
    const [result, setResult] = useState();
    const [numberOfImages, setNumberOfImages] = useState(1)

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await CreateImages.getImage({ animal: animalInput , n: numberOfImages});


      const data = await response;
      console.log(response);
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }
      console.log("response", response);
      setResult(data.result);
      setAnimalInput("");
    } catch(error) {
      console.error(error);
      alert(error.message);
    }
  }

    return (
        <div>
        <title>OpenAI Quickstart</title>
        <link rel="icon" href="/dog.png" />

      <main>
        <img src="" alt=""/>
        <h3>Name an anime</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="animal"
            placeholder="Enter an anime"
            value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)}
          />
          <input
            type="number"
            name="number"
            placeholder="Enter a number de images"
            value={numberOfImages}
            onChange={(e) => setNumberOfImages(e.target.value)}
          />
          <input type="submit" value="Generate images" />
        </form>
        <div>
          {result && result.map((url) => (
            <img src={url} key={url} alt="Imagen" />
          ))}
        </div>
        {/* <div><img src={result} alt=""></img> </div> */}
      </main>
    </div>
  );
}