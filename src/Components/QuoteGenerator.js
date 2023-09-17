//Bearer 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
import { useState, useEffect } from 'react';
import axios from 'axios';

function QuoteGenerator() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    // Function to generate a quote from the AI model
    const generateQuote = async () => {
      try {
        const response = await axios.post(
          'https://api.openai.com/v1/engines/davinci/completions',
          {
            prompt: 'Generate a motivational quote:',
            max_tokens: 100, // Adjust the length of the generated quote
          },
          {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer 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', // Replace with your valid API key
            },
          }
        );

        // Extract the generated quote from the response
        const generatedQuote = response.data.choices[0].text;

        // Set the quote in the state
        setQuote(generatedQuote);
      } catch (error) {
        console.error('Error generating quote:', error);
      }
    };

    generateQuote();
  }, []);

  return (
    <div>    
      <p className="text-lg font-semibold">{quote}</p>
    </div>
  );
}

export default QuoteGenerator;