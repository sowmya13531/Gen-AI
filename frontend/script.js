const API_URL = "https://uncephalic-macrocytic-marylyn.ngrok-free.dev";

async function generateImage() {

  const prompt = document.getElementById("prompt").value.trim();

  if (!prompt) {
    alert("Please enter a prompt");
    return;
  }

  console.log("Generating... please wait");

  try {

    const response = await fetch(
      API_URL + "/generate?prompt=" + encodeURIComponent(prompt),
      {
        method: "GET",
        headers: {
          "ngrok-skip-browser-warning": "true"
        }
      }
    );

    const text = await response.text();
    console.log("Raw server response:", text);

    if (!response.ok) {
      throw new Error("Server returned status " + response.status);
    }

    const data = JSON.parse(text);

    const imageURL = API_URL + data.image_url;

    document.getElementById("result").src = imageURL;
    document.getElementById("downloadBtn").href = imageURL;

    console.log("Image loaded:", imageURL);

  } catch (error) {

    console.error("Image generation error:", error);
    alert("Image generation failed. Check console.");

  }
}