import React, {useState} from 'react';
import '../assets/Slider.css';
import data from './data.json';
import { MdChevronLeft,MdChevronRight } from 'react-icons/md';

const Slider=(props)=>{
  const[events] = useState(data);

    const slideLeft =()=>{
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight =()=>{
        var slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    return(
        <div id="main-slider-container">
            <MdChevronLeft size={40} className="slider-icon left" onClick={slideLeft}/>
            <div id="slider">
               { 
                events.map((events)=>{
                        return(
                            <div className="slider-card">
                              <textarea className="slider-card-title" type="text" disabled value ={events.title}></textarea>
                              <br></br>
                              <table cellPadding={0}>
                                <tr>
                                  <td>
                                      <c className="label">Location</c>
                                  </td>
                                </tr>
                                <tr>
                                  <td>
                                      <textarea className="slider-card-sub" type="text" disabled value ={events.location}></textarea>
                                  </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <c className="label">Participants</c>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <textarea className="slider-card-description1" type="text" disabled value ={events.participants}></textarea>
                                    </td>
                                  </tr>
                                  <tr>
                                  <td>
                                      <c className="label">Date</c>
                                    </td>
                                    <td>
                                      <input className="slider-card-date" type="date" disabled value ={events.date}></input>
                                    </td>
                                  </tr>
                                  <tr>
                                  <td>
                                    <c className="label">Time</c>
                                    </td>
                                    <td>
                                    <input className="slider-card-time" type="text" disabled value ={events.timeStart}></input><a>to</a> <input className="slider-card-time-1" type="text" disabled value ={events.timeEnd}></input> 
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <c className="label">Note</c>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td width="30px">
                                      <textarea className="slider-card-description" type="text" disabled>{events.note}</textarea>
                                    </td>
                                  </tr>
                                </table>
                            </div>
                        )
                    })
                }
            </div>
            <MdChevronRight size={40} className="slider-icon right" onClick={slideRight} />
        </div>
    )
}
export default Slider;