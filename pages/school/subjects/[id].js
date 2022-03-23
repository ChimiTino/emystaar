import React from 'react'
import { useState } from 'react';



export const getStaticPaths = async () => {
    const res = await fetch('https://edu-servers.herokuapp.com/sub_subjects');
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
    const res = await fetch('https://edu-servers.herokuapp.com/sub_subjects/' + id);
    const data = await res.json();
  
    return {
      props: { school: data }
    }
  }
  

function sujectInfo({ school }) {

const [change,setChange] = useState(false);
const [change1,setChange1] = useState(false);
const [change2,setChange2] = useState(false);
const [change3,setChange3] = useState(false);
const [change4,setChange4] = useState(false);
const [change5,setChange5] = useState(false);
const [change6,setChange6] = useState(false);
const [change7,setChange7] = useState(false);
const [change8,setChange8] = useState(false);
const [change9,setChange9] = useState(false);
const [change10,setChange10] = useState(false);
const [change11,setChange11] = useState(false);

const hideCont = () => (
  setChange(!change)
)
const hideCont1 = () => (
  setChange1(!change1)
)
const hideCont2 = () => (
  setChange2(!change2)
)
const hideCont3 = () => (
  setChange3(!change3)
)
const hideCont4 = () => (
  setChange4(!change4)
)
const hideCont5 = () => (
  setChange5(!change5)
)
const hideCont6 = () => (
  setChange6(!change6)
)
const hideCont7 = () => (
  setChange7(!change7)
)
const hideCont8 = () => (
  setChange8(!change8)
)
const hideCont9 = () => (
  setChange9(!change9)
)
const hideCont10 = () => (
  setChange10(!change10)
)
const hideCont11 = () => (
  setChange11(!change11)
)


    return (

      <>
      <h1 className='header'>{school.grade}</h1>
        <ul className='subject-topics'>
            <li className='sub-list'>
            <p className='sub-list-name' onClick={hideCont}>{school.mathematics_topics.topic_1.name}</p>
            <ul className={change? "sub-toggle" : "sub-toggle-active"}>
            <li><a className='sub-link-list' href={'/school/subjects/subject_tests/' + school.mathematics_topics.topic_1.Tid}>{school.mathematics_topics.topic_1.Tidn}</a></li>
            <li><a className='sub-link-list'href={school.mathematics_topics.topic_1.Pid}>{school.mathematics_topics.topic_1.Pidn}</a></li>
            </ul>
            </li>
            
            <li className='sub-list'>
            <p className='sub-list-name' onClick={hideCont1}>{school.mathematics_topics.topic_2.name}</p>
            <ul className={change1? "sub-toggle" : "sub-toggle-active"}>
            <li><a className='sub-link-list' href={school.mathematics_topics.topic_2.Tid}>{school.mathematics_topics.topic_2.Tidn}</a></li>
            <li><a className='sub-link-list'href={school.mathematics_topics.topic_2.Pid}>{school.mathematics_topics.topic_2.Pidn}</a></li>
            </ul>
            </li>
            <li className='sub-list'>
            <p onClick={hideCont2}>{school.mathematics_topics.topic_3.name}</p>
            <ul className={change2? "sub-toggle" : "sub-toggle-active"}>
            <li><a className='sub-link-list' href={school.mathematics_topics.topic_3.Tid}>{school.mathematics_topics.topic_3.Tidn}</a></li>
            <li><a className='sub-link-list'href={school.mathematics_topics.topic_3.Pid}>{school.mathematics_topics.topic_3.Pidn}</a></li>
            </ul>
            </li>
            <li className='sub-list'>
            <p onClick={hideCont3}>{school.mathematics_topics.topic_4.name}</p>
            <ul className={change3? "sub-toggle" : "sub-toggle-active"}>
            <li><a className='sub-link-list' href={school.mathematics_topics.topic_4.Tid}>{school.mathematics_topics.topic_4.Tidn}</a></li>
            <li><a className='sub-link-list'href={school.mathematics_topics.topic_4.Pid}>{school.mathematics_topics.topic_4.Pidn}</a></li>
            </ul>
            </li>
            <li className='sub-list'>
            <p onClick={hideCont4}>{school.mathematics_topics.topic_5.name}</p>
            <ul className={change4? "sub-toggle" : "sub-toggle-active"}>
            <li><a className='sub-link-list' href={school.mathematics_topics.topic_5.Tid}>{school.mathematics_topics.topic_5.Tidn}</a></li>
            <li><a className='sub-link-list'href={school.mathematics_topics.topic_5.Pid}>{school.mathematics_topics.topic_5.Pidn}</a></li>
            </ul>
            </li>
            <li className='sub-list'>
            <p onClick={hideCont5}>{school.mathematics_topics.topic_6.name}</p>
            <ul className={change5? "sub-toggle" : "sub-toggle-active"}> 
            <li><a className='sub-link-list' href={school.mathematics_topics.topic_6.Tid}>{school.mathematics_topics.topic_6.Tidn}</a></li>
            <li><a className='sub-link-list'href={school.mathematics_topics.topic_6.Pid}>{school.mathematics_topics.topic_6.Pidn}</a></li>
            </ul>
            </li>
            <li className='sub-list'>
            
            <p onClick={hideCont6}>{school.mathematics_topics.topic_7.name}</p>
            <ul className={change6? "sub-toggle" : "sub-toggle-active"}> 
            <li><a className='sub-link-list' href={school.mathematics_topics.topic_7.Tid}>{school.mathematics_topics.topic_7.Tidn}</a></li>
            <li><a className='sub-link-list'href={school.mathematics_topics.topic_7.Pid}>{school.mathematics_topics.topic_7.Pidn}</a></li>
            </ul>
            </li>
            <li className='sub-list'>
            
            <p onClick={hideCont7}>{school.mathematics_topics.topic_8.name}</p>
            <ul className={change7? "sub-toggle" : "sub-toggle-active"}>
            <li><a className='sub-link-list' href={school.mathematics_topics.topic_8.Tid}>{school.mathematics_topics.topic_8.Tidn}</a></li>
            <li><a className='sub-link-list'href={school.mathematics_topics.topic_8.Pid}>{school.mathematics_topics.topic_8.Pidn}</a></li>
            </ul>
            </li>
            <li className='sub-list'>
            
            <p onClick={hideCont8}>{school.mathematics_topics.topic_9.name}</p>
            <ul className={change8? "sub-toggle" : "sub-toggle-active"}>
            <li><a className='sub-link-list' href={school.mathematics_topics.topic_9.Tid}>{school.mathematics_topics.topic_9.Tidn}</a></li>
            <li><a className='sub-link-list'href={school.mathematics_topics.topic_9.Pid}>{school.mathematics_topics.topic_9.Pidn}</a></li>
            </ul>
            </li>
            <li className='sub-list'>
            
            <p onClick={hideCont9}>{school.mathematics_topics.topic_10.name}</p>
            <ul className={change9? "sub-toggle" : "sub-toggle-active"}>
            <li><a className='sub-link-list' href={school.mathematics_topics.topic_10.Tid}>{school.mathematics_topics.topic_10.Tidn}</a></li>
            <li><a className='sub-link-list'href={school.mathematics_topics.topic_10.Pid}>{school.mathematics_topics.topic_10.Pidn}</a></li>
            </ul>
            </li>
            <li className='sub-list'>
            
            <p onClick={hideCont10}>{school.mathematics_topics.topic_11.name}</p>
            <ul className={change10? "sub-toggle" : "sub-toggle-active"}>
            <li><a className='sub-link-list' href={school.mathematics_topics.topic_11.Tid}>{school.mathematics_topics.topic_11.Tidn}</a></li>
            <li><a className='sub-link-list'href={school.mathematics_topics.topic_11.Pid}>{school.mathematics_topics.topic_11.Pidn}</a></li>
            </ul>
            </li>
            <li className='sub-list'>
            
            <p onClick={hideCont11}>{school.mathematics_topics.topic_12.name}</p>
            <ul className={change11? "sub-toggle" : "sub-toggle-active"}>
            <li><a className='sub-link-list' href={school.mathematics_topics.topic_12.Tid}>{school.mathematics_topics.topic_12.Tidn}</a></li>
            <li><a className='sub-link-list'href={school.mathematics_topics.topic_12.Pid}>{school.mathematics_topics.topic_12.Pidn}</a></li>
            </ul>
            </li>
        </ul>
        
        <div className='exams-list'>
          <div className='exam-year'>
          <div>
          <p>{school.juneEx15.testName}</p>
          <ul>
          <li><a href={school.juneEx15.link} target="_blank">{school.juneEx15.p1}</a></li>
          <li><a href={school.juneEx15.link2} target="_blank">{school.juneEx15.p2}</a></li>
         </ul> </div>
          <div><ul>
          <li><a href={school.juneEx15.memo} target="_blank">{school.juneEx15.p1m}</a></li>
          <li><a href={school.juneEx15.memo2} target="_blank">{school.juneEx15.p2m}</a></li>
          </ul></div>
          </div>
          <div className='exam-year'>
          <div>
          <p>{school.juneEx16.testName}</p><ul>
          <li><a href={school.juneEx16.link} target="_blank">{school.juneEx16.p1}</a></li>
          <li><a href={school.juneEx16.link2} target="_blank">{school.juneEx16.p2}</a></li>
          </ul></div>
          <div><ul>
          <li><a href={school.juneEx16.memo} target="_blank">{school.juneEx16.p1m}</a></li>
          <li><a href={school.juneEx16.memo2} target="_blank">{school.juneEx16.p2m}</a></li>
          </ul></div>
          </div>
          <div className='exam-year'>
          <div>
          <p>{school.juneEx17.testName}</p><ul>
          <li><a href={school.juneEx17.link} target="_blank">{school.juneEx17.p1}</a></li>
          <li><a href={school.juneEx17.link2} target="_blank">{school.juneEx17.p2}</a></li>
          </ul></div>
          <div><ul>
          <li><a href={school.juneEx17.memo} target="_blank">{school.juneEx17.p1m}</a></li>
          <li><a href={school.juneEx17.memo2} target="_blank">{school.juneEx17.p2m}</a></li>
          </ul></div>
          </div>
          <div className='exam-year'>
          <div>
          <p>{school.juneEx18.testName}</p><ul>
          <li><a href={school.juneEx18.link} target="_blank">{school.juneEx18.p1}</a></li>
          <li><a href={school.juneEx18.link2} target="_blank">{school.juneEx18.p2}</a></li>
          </ul></div>
          <div><ul>
          <li><a href={school.juneEx18.memo} target="_blank">{school.juneEx18.p1m}</a></li>
          <li><a href={school.juneEx18.memo2} target="_blank">{school.juneEx18.p2m}</a></li>
          </ul></div>
          </div>
          <div className='exam-year'>
          <div>
          <p>{school.juneEx19.testName}</p><ul>
          <li><a href={school.juneEx19.link} target="_blank">{school.juneEx19.p1}</a></li>
          <li><a href={school.juneEx19.link2} target="_blank">{school.juneEx19.p2}</a></li>
          </ul></div>
          <div><ul>
          <li><a href={school.juneEx19.memo} target="_blank">{school.juneEx19.p1m}</a></li>
          <li><a href={school.juneEx19.memo2} target="_blank">{school.juneEx19.p2m}</a></li>
         </ul> </div>
          </div>
          <div className='exam-year'>
          <div>
          <p>{school.NovEx15.testName}</p><ul>
          <li><a href={school.NovEx15.link} target="_blank">{school.NovEx15.p1}</a></li>
          <li><a href={school.NovEx15.link2} target="_blank">{school.NovEx15.p2}</a></li>
          </ul></div>
          <div>
          <li><a href={school.NovEx15.memo} target="_blank">{school.NovEx15.p1m}</a></li>
          <li><a href={school.NovEx15.memo2} target="_blank">{school.NovEx15.p2m}</a></li>
          </div>
          </div>
          <div className='exam-year'>
          <div>
          <p>{school.NovEx16.testName}</p><ul>
          <li><a href={school.NovEx16.link} target="_blank">{school.NovEx16.p1}</a></li>
          <li><a href={school.NovEx16.link2} target="_blank">{school.NovEx16.p2}</a></li>
          </ul></div>
          <div><ul>
          <li><a href={school.NovEx16.memo} target="_blank">{school.NovEx16.p1m}</a></li>
          <li><a href={school.NovEx16.memo2} target="_blank">{school.NovEx16.p2m}</a></li>
          </ul></div>
          </div>
          <div className='exam-year'>
          <div>
          <p>{school.NovEx17.testName}</p><ul>
          <li><a href={school.NovEx17.link} target="_blank">{school.NovEx17.p1}</a></li>
          <li><a href={school.NovEx17.link2} target="_blank">{school.NovEx17.p2}</a></li>
          </ul></div>
          <div><ul>
          <li><a href={school.NovEx17.memo} target="_blank">{school.NovEx17.p1m}</a></li>
          <li><a href={school.NovEx17.memo2} target="_blank">{school.NovEx17.p2m}</a></li>
          </ul></div>
          </div>
          <div className='exam-year'>
          <div>
          <p>{school.NovEx18.testName}</p><ul>
          <li><a href={school.NovEx18.link} target="_blank">{school.NovEx18.p1}</a></li>
          <li><a href={school.NovEx18.link2} target="_blank">{school.NovEx18.p2}</a></li>
          </ul></div>
          <div>
            <ul>
          <li><a href={school.NovEx18.memo} target="_blank">{school.NovEx18.p1m}</a></li>
          <li><a href={school.NovEx18.memo2} target="_blank">{school.NovEx18.p2m}</a></li>
          </ul></div>
          </div>
          <div className='exam-year'>
          <div>
          <p>{school.NovEx19.testName}</p><ul>
          <li><a href={school.NovEx19.link} target="_blank">{school.NovEx19.p1}</a></li>
          <li><a href={school.NovEx19.link2} target="_blank">{school.NovEx19.p2}</a></li>
          </ul></div>
          <div><ul>
          <li><a href={school.NovEx19.memo} target="_blank">{school.NovEx19.p1m}</a></li>
          <li><a href={school.NovEx19.memo2} target="_blank">{school.NovEx19.p2m}</a></li>
          </ul></div>
          </div>
          
          
          
        </div>
    </>
    )
}

export default sujectInfo
