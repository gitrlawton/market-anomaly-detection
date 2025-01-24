# Market Anomaly Detector

## Overview

This project is a web application designed to serve as an early warning mechanism for identifying potential financial market crashes. Utilizing a machine learning model and real-time market data, the application classifies market conditions and proposes data-driven investment strategies for risk mitigation and optimization. An integrated AI-driven chatbot explains these strategies to end users, making them accessible and actionable.

## Features

- **Market Data Fetching**: The application retrieves real-time market data for various financial instruments.
- **Anomaly Detection**: A machine learning model classifies market conditions to identify potential anamolies.
- **Investment Strategies**: Based on the model's predictions, the application proposes tailored investment strategies to minimize losses or maximize returns.
- **AI Chatbot**: An integrated chatbot provides explanations and answers to user queries regarding investment strategies and market conditions.

## Installation

To set up the project, ensure you have Node.js and Python installed on your machine. Then, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Install the required Node.js packages:

   ```bash
   npm install
   ```

3. Create a virtual environment:

   ```bash
   python -m venv .venv
   ```

4. Activate the virtual environment:

   - On Windows (using Command Prompt):
     ```bash
     .venv\Scripts\activate
     ```
   - On Windows (using Git Bash):
     ```bash
     source .venv/Scripts/activate
     ```
   - On macOS/Linux:
     ```bash
     source .venv/bin/activate
     ```

5. Install the required Python packages:

   ```bash
   pip install -r requirements.txt
   ```

6. Create a `.env` file in the root directory and add your API keys:

   ```plaintext
   GROQ_API_KEY=your_groq_api_key
   ```

## Usage

1. Start the Flask backend server:

   ```bash
   python backend/main.py
   ```

2. Start the Next.js frontend application:

   ```bash
   npm run dev
   ```

3. Open your web browser and navigate to `http://localhost:3000` to access the application.

4. Interact with the chatbot to ask questions about investment strategies or market condition. Refresh page to fetch most recent market data.

## File Descriptions

- **backend/main.py**: The server-side code containing the Flask API for handling market predictions and data fetching.
- **app/api/chat/route.js**: The API route for handling chat interactions with the AI assistant.
- **app/api/market-data/route.js**: The API route for fetching current market data.
- **app/page.js**: The main page of the application, integrating various components.
- **components/**: Contains React components for the user interface, including the chatbot, stock ticker, and investment strategy display.
- **utils/strategies.js**: Contains predefined investment strategies based on market conditions.

## Dependencies

- **Flask**: For building the backend web application and handling HTTP requests.
- **Flask-CORS**: For enabling Cross-Origin Resource Sharing in the Flask app.
- **Requests**: For making HTTP requests to external APIs.
- **OpenAI**: For AI-generated responses and explanations.
- **Next.js**: For building the frontend of the web application.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.
