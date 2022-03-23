import React , {useState, useEffect, useRef} from 'react'

function Question({school, numberOfQuestions , activeQuestion, onAnswerUpdate ,setActiveQuestion, onSetSetUp }) {
const [selected, setSelected] = useState('');
const [error, setError] = useState('');
const radioWrapper =useRef();

useEffect(() => {
    const findCheckedInput = radioWrapper.current.querySelector('input:checked');
    if(findCheckedInput) {
      findCheckedInput.checked = false;
    }
  }, [school]);

const changeHandle = (e) =>{
    setSelected(e.target.value)
    if(error) {
        setError('')
    }
    console.log(selected);

}

const nextClickHandler = (e) =>{
if (selected===''){
    return setError('Please select one option');
}
onAnswerUpdate(prevState => [...prevState, {q: school.question, a: selected}]);
setSelected('');
if (activeQuestion < numberOfQuestions - 1){
    setActiveQuestion(activeQuestion + 1);
}else{
    onSetSetUp(3)
}
}


    return (
        <>
        <div className='card'>
            <h2> 
                {school.header}
            </h2>

            <div className='question' ref={radioWrapper}>
                

            {school.choices.map((school, i)=>{
  return(
    <label className='radio' key={i}>
                <input type='radio' name='answer' value={school} onChange= {changeHandle}/>
                {school}
   </label>
    )
})}
</div>

            
            {error && <div className='danger'>{error}</div>}
            <button className='next-button' onClick={nextClickHandler}>
                Next
            </button>
                
            
        </div>
        </>
    )
}

export default Question
