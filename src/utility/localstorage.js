const getStoredJobApplication = () =>{
  const stordJobApplication = localStorage.getItem('job application');
  if (stordJobApplication) {
    return JSON.parse(stordJobApplication);
  }
  return[];
}



const saveJobApplication = id =>{
  const stordJobApplications = getStoredJobApplication();
  const exists = stordJobApplications.find(jobId => jobId === id);
  if (!exists) {
    stordJobApplications.push(id);
    localStorage.setItem('job application', JSON.stringify(stordJobApplications))
  }
}
export {getStoredJobApplication, saveJobApplication}