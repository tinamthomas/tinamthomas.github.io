import Divider from "@mui/material/Divider";

function Overview() {

  return (
    <div>
      <h2 style={{color: "#000080"}}>Overview</h2>
      <Divider/>
      <p>Tina Thomas is a senior software developer with 8+ years of experience. She started her career with Thoughtworks India, after doing her Bachelor's and Master's degree in Computer Science and Engineering. She is currently employed with Thoughtworks Chicago.</p>
      <p>Over the years, she has been a driving force on her team, and advocate for best practices and clean code.  </p> 
      
      <h4 style={{color: "#000080"}}>Tech Stacks</h4>
      
      <ul>
        <li>Front end: React</li>
        <li>Back end: Node, Golang, Kotlin, .NET core </li>
        <li>Cloud: GCP, Azure, AWS </li>
      </ul>
      </div>
  );
}

export default Overview;
