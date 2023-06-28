import React, { useState } from 'react';


const TextForm = (props) => {

    const [text, settext] = useState("");
    const [countVowels, setCountVowels] = useState(0);
    const [countConsonants, setCountConsonants] = useState(0);

    // upload a file from desktop

    const readtxt = (event) => {
        let file = event.target.files[0];
        let reader = new FileReader();
        reader.onload = function (event) {
            settext(event.target.result);
        };
        reader.readAsText(file);
    }

    // Function to count Vowels:

    const countVowelsAndConsonants = (inputText) => {
        let vowelsCount = 0;
        let consonantsCount = 0;
        const vowelsRegex = /[aeiouAEIOU]/;
        const consonantsRegex = /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/;
        
        for (let i = 0; i < inputText.length; i++) {
          if (inputText[i].match(vowelsRegex)) {
            vowelsCount++;
          } else if (inputText[i].match(consonantsRegex)) {
            consonantsCount++;
          }
        }
    
        setCountVowels(vowelsCount);
        setCountConsonants(consonantsCount);
      };
    

    // Function to remove Duplicate Words

    function handleDuplicates() {
        let wordArr = text.split(" ");
        let newText = wordArr.filter((item, pos) => {
            return wordArr.indexOf(item) === pos;
        })
        newText = newText.join(" ");
        settext(newText);
    }

    const ReverseWords = () => {
        let spl = text.split(" ")
        let rev = spl.reverse();
        let join = rev.join(" ");
        settext(join);
    }

    const handleupclick = () => {

        let newText = text.toUpperCase();
        settext(newText);

    }

    const handlelowclick = () => {

        let newText = text.toLowerCase();
        settext(newText);
    }

    const handleonchange = (event) => {

        let newText = event.target.value;
        settext(newText);
        countVowelsAndConsonants(newText);

    }

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    // logic for word count (multiple space cases also solved)


    const wordcount = (content) => {
        let wc = text.split(" ").length;
        text.split(" ").forEach((word) => {
            if(!word.length){
                wc -= 1;  
            }
        });

        return wc;
    }

    return (
        <>

            <div className="container mt-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading}</h1>
                <div className="form-group">
                    <textarea value={text} onChange={handleonchange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} className="form-control" id="exampleTextarea" rows="8"></textarea>
                </div>
                <div className="btn btn-primary m-2" onClick={handleupclick}>Convert to Uppercase</div>

                <div className="btn btn-primary" onClick={handlelowclick}>Convert to Lowercase</div>

                <button type="submit" onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
           
                <button className="btn btn-primary mx-1" onClick={handleDuplicates}>
                    Remove Duplicate Words
                </button>
                <button className="btn btn-primary mx-1" onClick={ReverseWords}>
                    Reverse Words
                </button>


            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <input type="file" className="btn btn-secondary my-3" accept="text/plain" onChange={readtxt} />
                <h1>Your text summary</h1>

                <p>{countVowels} Vowels and {countConsonants} Consonants </p>
                <p>{wordcount(text)} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
            </div>
        </>

    );
}

export default TextForm;
