import react, {useState , useEffect} from "react"
import End from "../../../../Components/End";
import Question from "../../../../Components/Question";
import Start from "../../../../Components/Start";


export const getStaticPaths = async () => {
    const res = await fetch('https://edu-servers.herokuapp.com/testQuestions');
    const data = await res.json();
  
    const paths = data.map(school => {
      return {
        params: { id: school.id.toString() }
      }
    })
  
    return {
      paths,
      fallback: false
    }
  }
  
  export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://edu-servers.herokuapp.com/testQuestions/' + id);
    const data = await res.json();
  
    return {
      props: { school: data }
    }
  }

  let interval; 

function testQuestions({school}) {
   const [step, setStep] = useState(1);
   const [ activeQuestion, setActiveQuestion] = useState(0);
   const [answers, setAnswers]= useState([]);
   const [time, setTime] = useState(0);

useEffect (() =>{
if(step === 3){
  clearInterval(interval)
}
},[step])



   const quizStartHandler = () =>{
     setStep(2);
     interval = setInterval(()=>{
       setTime(prevTime => prevTime + 1);
     }, 1000);

   }
   const resetClickHandler= () => {
     setActiveQuestion(0);
     setAnswers([]);
     setStep(2);
     setTime(0);
     

   }
  
  
return(
  <>

<div className="test-container">
  {step == 1 && <Start 
  onQuizStart={quizStartHandler}
  school={school}
  />}
  {step == 2 && <Question 
  school= {school.test[activeQuestion]}
  numberOfQuestions = {school.test.length}
  activeQuestion={activeQuestion}
  onAnswerUpdate={setAnswers}
  setActiveQuestion={setActiveQuestion}
  onSetSetUp={setStep}
  /> }
  {step == 3 && <End
  results={answers}
  school = {school.test}
  onReset = {resetClickHandler}
  
  
  />}

</div>
  </>
  )


  
  }
  export default testQuestions