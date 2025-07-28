import payload from '../config/gemini';

const handleSubmit = async () => {
  const input = userPrompt;  // userPrompt = text from input field
  const result = await payload(input);
  setResponse(result); // Show it in your UI
};
