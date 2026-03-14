# AI Image Generator (Stable Diffusion Turbo)

## Project Overview

This project is a **web-based AI Image Generator** that converts text prompts into images using a diffusion-based generative AI model.

Users can enter a description such as:

```
A futuristic neon city at night
```

The system sends this prompt to a backend API, which uses an AI model to generate an image and returns it to the browser.

The generated image is then displayed on the webpage and can be downloaded.

This project demonstrates a **full-stack AI application** combining a web frontend, an API backend, and a deep learning model.


# Technologies Used

## Frontend

* HTML
* CSS
* JavaScript

The frontend provides the user interface where users enter prompts and view generated images.

## Backend

Backend API built using **FastAPI**
(FastAPI)

Responsibilities:

* Receive prompt requests
* Run the AI model
* Save generated images
* Return image URLs

## AI Model

The project uses the **Stable Diffusion Turbo** model via the Diffusers library.

Libraries used:

* Hugging Face Diffusers
* PyTorch

Model used:

```
stabilityai/sd-turbo
```

Stable Diffusion Turbo is a **fast text-to-image diffusion model** capable of generating images in only **1–2 inference steps**.

## Runtime Environment

The backend runs on **Google Colab** to use GPU acceleration.

Platform:
Google Colab

## Public API Access

Since Colab runs locally, we expose the API to the internet using:

ngrok

Ngrok creates a secure public URL that allows the frontend to communicate with the backend.

# System Architecture

The system works through the following pipeline:

```
User enters prompt in browser
        ↓
Frontend sends request using fetch()
        ↓
Ngrok public URL
        ↓
FastAPI backend
        ↓
Diffusers pipeline
        ↓
Stable Diffusion Turbo model
        ↓
Generated image saved on server
        ↓
Image URL returned to browser
        ↓
Image displayed to user
```

# Project Structure

```
ai-image-generator
│
├── backend
│   └── main.py
│
├── frontend
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── requirements.txt
└── README.md
```
# How to Run the Project

## 1. Clone the Repository

```
git clone https://sowmya13531/Gen-AI.git
```

Navigate to the project:

```
cd ai-image-generator
```

## 2. Install Dependencies

```
pip install -r requirements.txt
```

## 3. Run Backend Server

Start the FastAPI server:

```
uvicorn main:app --reload
```

The API will run at:

```
http://localhost:xxxx
```

## 4. Start ngrok Tunnel

Expose the backend to the internet:

```
ngrok http 8000
```

Ngrok will provide a public URL such as:

```
https://random-url.ngrok-free.dev
```

Update this URL inside **script.js**.

## 5. Run the Frontend

Open `index.html` using **Visual Studio Code Live Server** or any browser.

Enter a prompt and generate images.


# Features

* Text-to-image generation
* Stable Diffusion Turbo integration
* FastAPI backend
* Browser-based interface
* Download generated images
* Public API access using ngrok

# Future Improvements

Possible enhancements include:

* Prompt history
* Image gallery
* Multiple style presets
* Improved UI
* Cloud GPU deployment


# Author

AI Image Generator Project
Built for learning **AI application development and full-stack integration**.
