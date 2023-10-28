import { exec } from "child_process"

const GetOutput = async () => {
    let programOutput = "";

    let path = process.cwd() + "/app/components/get_output/test.py";
        
    const { stdout } = exec('python ' + path);
    
    if(stdout) {      
      for await (const data of stdout) {
        programOutput += data;
      }
    }
    
    if(programOutput.includes("testing"))
      return <div>Working</div>
    else
      return <div>Not Working</div>
  };

export default GetOutput;
