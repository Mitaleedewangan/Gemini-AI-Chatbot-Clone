import { createContext, useState, useEffect } from "react";
import payload from "../config/gemini"; // Make sure this path is correct

export const Context = createContext();

const ContextProvider = ({children}) => {
//   const [response, setResponse] = useState("");
  const [input,setInput] =useState("");
  const [recentPrompt,setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts]= useState([]);
  const[showResult,setShowResult] = useState(false);
  const [loading,setLoading] =useState(false);
  const [resultData,setResultData] = useState("");

  const delayPara =(index,nextWord) =>{
    setTimeout(function(){
            setResultData(prev=>prev+nextWord)
    },75*index)

  }

  const newChat =()=>{
    setLoading(false)
    setShowResult(false)
  }

  const onSent = async (prompt) => {
   
    // setResponse(result); // You might want to store or use this
    setResultData("");
    setLoading(true);
    setShowResult(true);
    let response;
    if(prompt !== undefined){
        response = await payload(prompt);
        setRecentPrompt(prompt)
    }
    else{
        setPrevPrompts(prev=>[...prev,input])
        setRecentPrompt(input)
        response = await payload(input)
    }
      console.log("Gemini Raw Response =>", response);
      if (!response) {
            console.error("Response is undefined!");
            setResultData("⚠️ Sorry, no valid response received.");
            setLoading(false);
            return;
        }
     let responseArray = response.split("**");
     let newResponse ="";
     for (let i=0;i<responseArray.length;i++)
     {
        if(i === 0|| i%2 !== 1)
        {
            newResponse += responseArray[i];
        }
        else{
           newResponse += "<br />" + responseArray[i];

        }
     }
    let newResponse2 = newResponse.split("*").join("<br />");

   let newResponseArray = newResponse2.split(" ");
  for(let i=0; i<newResponseArray.length; i++)
  {
        const nextWord = newResponseArray[i];
        delayPara(i,nextWord+ " ")
  }
     setLoading(false);
     setInput("");

  };

  // Call only once on mount (optional demo)
  // useEffect(() => {
  //   onSent("What is ReactJS?");
  // }, []);

  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    newChat
    // response,
  };

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
