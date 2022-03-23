import React, {useState, useEffect} from 'react'


const End = ({school , results, onReset, onAnswerCheck, time}) => {
    const [correctAnswers, setCorrectAnswers] = useState(0);

    useEffect(() => {
        let correct =0
        results.forEach((results, index) =>{
            if (results.a === school[index].awnswer){
                correct++;
            }
        })
        setCorrectAnswers(correct)
    })
    
    
    
    return (
        <>
        <div className='end-container'>
            <div className='content'>
                <h3>Your results</h3>
                <p>{correctAnswers} of {school.length}</p>
                <p><strong>{Math.floor((correctAnswers/ school.length)*100)}</strong></p>
                
                <button className='check' onClick={onAnswerCheck}>Check your answers</button>
                <button className='retry' onClick={onReset}>Try Again</button>


            </div>

        </div>
            
        </>
    )
}

export default End

