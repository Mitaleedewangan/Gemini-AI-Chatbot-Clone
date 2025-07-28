// // src/config/gemini.js

// const apiKey = "AIzaSyAbrCcmVkbbN34fqVsX4uveWQg0WNokcNk";

// const model = 'gemini-2.5-pro';
// const api = 'streamGenerateContent';
// const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:${api}?key=${apiKey}`;

// const payload = async (promptText) => {
//   const payloadData = {
//     contents: [
//       {
//         role: 'user',
//         parts: [{ text: promptText }]
//       }
//     ],
//     generationConfig: {
//       thinkingConfig: {
//         thinkingBudget: -1
//       },
//       responseMimeType: 'text/plain'
//     },
//     tools: [{ googleSearch: {} }]
//   };

//   try {
//     const response = await fetch(url, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(payloadData)
//     });

//     const text = await response.text();
//     const lines = text.split('\n').filter(line => line.startsWith('data: '));

//     let fullOutput = "";
//     lines.forEach(line => {
//       const jsonStr = line.replace('data: ', '');
//       const chunk = JSON.parse(jsonStr);
//       const output = chunk.candidates[0].content.parts[0].text;
//       fullOutput += output;
//     });

//     return fullOutput;
//   } catch (error) {
//     console.error("Gemini API Error:", error);
    
//     return  response.text()+"Something went wrong.";
//   }
// };

// export default payload;


// src/config/gemini.js

// const apiKey = "AIzaSyBw5PuWV4O5_nlMQf_TzjtKdQjSbJtdNZk";

// const model = 'gemini-2.5-pro';
// const api = 'streamGenerateContent';
// const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:${api}?key=${apiKey}`;

// const payload = async (promptText) => {
//   const payloadData = {
//     contents: [
//       {
//         role: 'user',
//         parts: [{ text: promptText }]
//       }
//     ],
//     generationConfig: {
//       thinkingConfig: {
//         thinkingBudget: -1
//       },
//       responseMimeType: 'text/plain'
//     },
//     tools: [{ googleSearch: {} }]
//   };

//   try {
//     const response = await fetch(url, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(payloadData)
//     });

//     if (!response.ok) {
//       const errorText = await response.text();
//       console.error("API returned error:", errorText);
//       return "Error: " + errorText;
//     }

//     const text = await response.text();
//     const lines = text.split('\n').filter(line => line.startsWith('data: '));

//     let fullOutput = "";
//     lines.forEach(line => {
//       try {
//         const jsonStr = line.replace('data: ', '');
//         const chunk = JSON.parse(jsonStr);
//         const output = chunk?.candidates?.[0]?.content?.parts?.[0]?.text || "";
//         fullOutput += output;
//       } catch (parseErr) {
//         console.warn("Failed to parse chunk:", line);
//       }
//     });

//     return fullOutput || "[No response received]";
//   } catch (error) {
//     console.error("Gemini API Error:", error);
//     return "Something went wrong while calling Gemini API.";
//   }
// };

// export default payload;

// src/config/gemini.js

// const apiKey = "AIzaSyBH5SmkHjhmD8IeSesyWKm4S2OYaOX_Lxg";  // REPLACE with your actual key securely

// const model = 'gemini-1.5-flash-latest';
// const api = 'streamGenerateContent';
// const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:${api}?key=${apiKey}`;

// const payload = async (promptText) => {
//   const payloadData = {
//     contents: [
//       {
//         role: 'user',
//         parts: [{ text: promptText }]
//       }
//     ],
//     generationConfig: {
//       thinkingConfig: {
//         thinkingBudget: -1
//       },
//       responseMimeType: 'text/plain'
//     },
//     tools: [{ googleSearch: {} }]
//   };

//   try {
//     const response = await fetch(url, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(payloadData)
//     });

//     if (!response.ok) {
//       const errorText = await response.text();
//       console.error("API returned error:", errorText);
//       return "Error: " + errorText;
//     }

//     const text = await response.text();
//     const lines = text.split('\n').filter(line => line.startsWith('data: '));

//     let fullOutput = "";
//     lines.forEach(line => {
//       try {
//         const jsonStr = line.replace('data: ', '');
//         const chunk = JSON.parse(jsonStr);
//         const output = chunk?.candidates?.[0]?.content?.parts?.[0]?.text || "";
//         fullOutput += output;
//       } catch (parseErr) {
//         console.warn("Failed to parse chunk:", line);
//       }
//     });

//     return fullOutput || "[No response received]";
//   } catch (error) {
//     console.error("Gemini API Error:", error);
//     return "Something went wrong while calling Gemini API.";
//   }
// };

// export default payload;

// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// Make sure your environment has GEMINI_API_KEY set


// const payload = async (inputText) => {
//   const response = await fetch("http://localhost:5000/api/generate", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ prompt: inputText }),
//   });

//   const data = await response.json();
//   return data.text || "No response from Gemini.";
// };

// export default payload;


const payload = async (inputText) => {
  console.log("🔍 Sending prompt to backend:", inputText);

  const response = await fetch("http://localhost:5000/api/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt: inputText }),
  });

  const data = await response.json();
  console.log("✅ Gemini response:", data);
  return data.text || "No response from Gemini.";
};

export default payload;
