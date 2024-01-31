import React from 'react';
import './WorkFlow.css';
import workflowimage1 from '../../assets/workflowimage1.png';
import workflowimage2 from '../../assets/workflowimage2.png';
import workflowimage3 from '../../assets/workflowimage3.png';
import workflowimage4 from '../../assets/workflowimage4.png';
import workflowcenterimage from '../../assets/workflowcenterimage.png';

const WorkFlow = () => {
  return (
    <div className="workflow">
      <h1 className="workflow-heading">Enhance Your Workflow with Integrated Tools</h1>
<div className='mt-[5rem] flex flex-col gap-[8rem]'>
    <div className='flex justify-around gap-[20rem]'>
      <div className="workflow-box">
        <img src={workflowimage1} alt="" />
        <h1>Messaging Platform</h1>
        <h2>Stay connected and collaborate seamlessly with clients and team members.</h2>
      </div>
    
      <div className="workflow-box">
        <img src={workflowimage2} alt="" />
        <h1>Collaborative Workspace</h1>
        <h2>Experience the power of collaboration in our shared workspace together.</h2>
      </div>
    </div>
    <div className='flex justify-around  gap-[20rem]'>
      <div className="workflow-box">
        <img src={workflowimage3} alt="" />
        <h1>CRM system</h1>
        <h2>Manage client relationships effectively with our user-friendly CRM system.</h2>
      </div>
    
      <div className="workflow-box">
        <img src={workflowimage4} alt="" />
        <h1>Calender Integration</h1>
        <h2>Simplify your scheduling and time management with our calendar integration.</h2>
      </div>
    </div>

 </div>

<img src={workflowcenterimage} alt="" className="center-image" />

<div className="workflow_explore-tools"><button type="button">Explore Tools</button></div>

    </div>

    
  )
}

export default WorkFlow
