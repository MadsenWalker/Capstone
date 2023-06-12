import React from 'react'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import '../css/GoalCard.css'


const GoalCard = ({goal}) => {
  const navigate = useNavigate()
  return (
    <div className="container mt-5 mb-3">
    <div className="row">
        <div className="col-md-4">
            <div className="card p-3 mb-2">
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                        <div className="icon"> <i className="bx bxl-mailchimp"></i> </div>
                        {/* <div className="ms-2 c-details">
                            <h6 className="mb-0">Mailchimp</h6> <span>1 days ago</span>
                        </div> */}
                        
                    </div>
                    <div className="badge"> <span>{goal.category}</span> </div>
                </div>
                <div className="mt-5">
                    <h3 className="heading">{goal.title}</h3>
                    <h5 className='description'>{goal.description}</h5>
                    <div className="mt-5">
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{width: (`${goal.current_score}`) }} aria-valuenow="34" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="mt-3"> <span className="text1">{goal.unit_of_measure}<span className="text2"></span></span> </div>
                    </div>
                    
                    {/* <a href={goal.photo_album_link} rel="noreferrer">
    Photo Album
  </a> */}
                </div>
            </div>
        </div>
        </div>
        <button onClick={() => navigate(`/dashboard/${goal.id}`)}>See more goal details</button>
        </div>
        
  )
}

export default GoalCard