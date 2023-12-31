import { Configuration, OpenAIApi } from "openai";

class CreateImages {

    async getImage(data) {
        const configuration = new Configuration({
            apiKey: "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"
        });

        const openai = new OpenAIApi(configuration);
        console.log(configuration);
        console.log(data.animal);
    if (!configuration.apiKey) {

        return {
            status:500,
            error: {
                message: "OpenAI API key not configured, please follow instructions in README.md",
            }
        };
      }
    
      const animal = data.animal || '';
      const number = Math.floor(data.n) || 1;
      if (animal.trim().length === 0) {

        return {
            status:400,
            error: {
                message: "Please enter a valid animal",
            }
        };
      }
    
      try {
        const completion = await openai.createImage({
          prompt: this.generatePrompt(animal),
          n: number,
          size: "512x512",
        });
        const images =completion.data.data;
        const urls =images.map((image) => image.url);

        return {
            status: 200,
            result: urls
        }
      } catch(error) {
        // Consider adjusting the error handling logic for your use case
        if (error.response) {
          console.error(error.response.status, error.response.data);
          // res.status(error.response.status).json(error.response.data);
          return {
            status: error.response.data
          }
        } else {
          console.error(`Error with OpenAI API request: ${error.message}`);

         return {
            status: 500,
            error: {
                message: 'An error occurred during your request.',
            }
         }
        }
      }
    //return ;
  }

  generatePrompt(flowerOrPlant, number) {
    const capitalizedCategory =
      flowerOrPlant[0].toUpperCase() + flowerOrPlant.slice(1).toLowerCase();
    return `Suggest three names for ${capitalizedCategory} flowers.
      
    ${capitalizedCategory}: ${capitalizedCategory} Iris
    Names: classical keys, melodic masterpiece, ivory symphony
    
    ${capitalizedCategory}: ${capitalizedCategory} Rose
    Names: delicate petals, crimson beauty, fragrant love
    
    ${capitalizedCategory}: ${capitalizedCategory} Lily
    Names: serene elegance, pure white, graceful blooms
    
    ${capitalizedCategory}: ${capitalizedCategory} Orchid
    Names: exotic allure, vibrant colors, delicate wonder
    
    ${capitalizedCategory}: ${capitalizedCategory} Sunflower
    Names: golden radiance, summer's joy, towering beauty
    
    ${capitalizedCategory}: ${capitalizedCategory} Tulip
    Names: rainbow hues, springtime delight, elegant simplicity
    
    ${capitalizedCategory}: ${capitalizedCategory} Daisy
    Names: playful innocence, cheerful blossoms, meadow charm`;
  }
  
  
}
const instance = new CreateImages();
export default instance;