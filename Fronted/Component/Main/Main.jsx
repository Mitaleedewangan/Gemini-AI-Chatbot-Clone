import { useContext, useState } from 'react'; 

import './Main.css';
// import Sidebar from '../Sidebar/Sidebar';
import { Context } from '../../context/context';
import { assets } from '../../assets/assets';

const Main =() =>{
    // const {response , onSent} = useContext(Context);
    const{onSent,recentPrompt,showResult,loading,resultData,setInput,input}= useContext(Context);

const cleanText = resultData
  .replace(/\n/g, "<br />")         // new lines
  .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"); // bold
    const handleSend =() =>{
        if(input.trim()=='') return ;
        onSent(input);
        setInput('');
    }

    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt=''/>
            </div>
            <div className="main-container">

            {!showResult
            ?
            <>
            <div className="greet">
                    <p><span>Hello,Dev.</span></p>
                    <p>How can I help You Today?</p>
                </div>
                <div className="cards">
                    <div className="card" onClick ={()=>onSent("Suggest beautiful places to see on an upcoming road trip")}>
                        <p>
                          Suggest beautiful places to see on an upcoming road trip  
                        </p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card" onClick={()=>onSent(" Briefly summarize this concept :urban planning")}>
                        <p>
                          Briefly summarize this concept :urban planning
                        </p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card" onClick={()=>onSent("  Brainstorm team bonding activities for our work retreat")}>
                        <p>
                          Brainstorm team bonding activities for our work retreat
                        </p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card" onClick={()=>onSent(" Improve the readability of the following  code")}>
                        <p>
                          Improve the readability of the following  code
                        </p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>
            </> 
            :<div className='result'>
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading?
                    <div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    :
                    <div dangerouslySetInnerHTML={{ __html: cleanText }}></div>

                    }
                  
                </div>
            </div>
            }

                

                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder='Enter a prompt here'  value={input} onChange={(e)=>setInput(e.target.value)} onKeyDown={(e)=>{
                            if(e.key === 'Enter') handleSend();
                        }}/>
                        <div onClick={handleSend}>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            {input?  <img  onClick ={()=>onSent()}src={assets.send_icon} alt="" />:null}

                           
                        </div>
                    </div>
                    <p className="bottom-info">
                        Gemini may display inaccurate info, including about people , so double-check its represent . Your privacy and Gemini Apps
                       
                    </p>
                </div>
            </div>
           
        </div>
    )
}

export default  Main;