import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../utility/localstorage";


const JobDetails = () => {
  const jobs = useLoaderData();
  const {id} = useParams();
  const idInt = parseInt(id);
  const job = jobs.find(job => job.id === idInt)
  console.log(job);

  const handleApplyJob =() =>{
    saveJobApplication(idInt);
    toast('You have apply succeessfully');
  }

  return (
    <div>
      <h2 className="text-4xl font-bold text-center">Job Details</h2>

      <div className="grid md:grid-cols-4 gap-4">
        <div className="px-2 border md:col-span-3 space-y-4">
          <h2><span className="font-bold">Job Description:</span> {job.job_description}</h2>
          <h2><span className="font-bold">Job Responsibility:</span> {job.job_responsibility}</h2>
          <h2><span className="font-bold">educational Requirements:</span><br /> {job.educational_requirements}</h2>
          <h2><span className="font-bold">Experiences:</span> {job.experiences}</h2>
        </div>
        <div className="border px-2">
          <h2 className="font-bold">Job Details</h2>
          <h2><span className="font-bold">Salary:</span> {job.salary}</h2>
          <h2><span className="font-bold">Job Title:</span> {job.job_title}</h2>
          <h2 className="font-bold">Contact Information {}</h2><br />
          <h2><span className="font-bold">Phone:</span> {job.phone}</h2>
          <h2><span className="font-bold">Address:</span> {job.address}</h2>
          <button onClick={handleApplyJob} className="btn w-full text-white font-extrabold bg-gradient-to-r from-[#7E90FE] to-[#9873FF] ...">Apply Now</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;