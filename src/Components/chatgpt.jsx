import React, { useState } from 'react';
import axios from 'axios';

const ChatGPTComponent = () => {
    const [inputText, setInputText] = useState('');
    const [responseText, setResponseText] = useState('');

    // Your OpenAI API key (Ensure it's correctly configured)
    const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
    
    console.log("API Key:", apiKey);  // Check if the API key is correctly loaded

    const handleInputChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
        };

        const data = {
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: inputText }],
        };

        try {
            const response = await axios.post('https://api.openai.com/v1/chat/completions', data, { headers });
            setResponseText(response.data.choices[0].message.content);
        } catch (error) {
            if (error.response) {
                console.error('Error with API request:', error.response.data);
            } else {
                console.error('Error:', error.message);
            }
        }
    };

    return (
        <div>
            <h1>ChatGPT API Integration</h1>
            <form onSubmit={handleSubmit}>
                <textarea
                    value={inputText}
                    onChange={handleInputChange}
                    placeholder="Ask ChatGPT something..."
                    rows="4"
                    cols="50"
                />
                <br />
                <button type="submit">Send</button>
            </form>

            {responseText && (
                <div>
                    <h3>ChatGPT Response:</h3>
                    <p>{responseText}</p>
                </div>
            )}
        </div>
    );
};

export default ChatGPTComponent;