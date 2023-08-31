import React, { useState } from "react";
import "./index.css";
import Header1 from "../Header";
import { useNavigate } from "react-router-dom";
import { updateIsMentor } from "../../api/userRequest";
import Pageloader from "../Pagesbar";
// import mentor from "../../../../../server/src/models/mentor";

const Auth2Component = ({setProgress}) => {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);

  const redirectToPage3 = async () => {
    // console.log("nt running");
    try {
      // const x = document.getElementById("myform2");
      if (userType === "") {
        alert("Please select one of the options");
        return;
      }
      const request = {
        isMentor: userType == "mentor" ? true : false,
      };
      const { data } = await updateIsMentor(request);

      console.log(data);
      if (data.result){
        setProgress(40);
        navigate("/skills");
        setProgress(100);
        } 
    } catch (error) {
      console.log(error);
    }
  };
  const chosenmentor=()=>{
    setUserType("mentor");
    setIsChecked2(false)
    setIsChecked(true)
    
  }
  const chosenmentee=()=>{
    setUserType("mentee");
    setIsChecked(false)
    setIsChecked2(true)
    
  }

  return (
    <div>
      <Header1 />

      <div className="main-2">
        <Pageloader
          givecolor2={true}
          givecolor3={true}
          givecolor4={true}
          givecolor5={true}
          givecolor6={true}
          givecolor7={true}
        />

        <div className="head-2">
          <h2>Continue As</h2>
          <div>You can Also Edit it Later</div>
        </div>
        <form id="myform2" onSubmit={redirectToPage3}>
          <div className="profiles">
            <div className="Mentor" onClick={chosenmentor}>
              <div 
                style={{
                  position: "absolute",
                  bottom: "-30px",
                  display: "flex",
                  justifyContent: "center",
                  width: "183px",
                  fontWeight: "bold",
                }}
              >
                <input
                  type="radio"
                  name="category"
                  id="mentor"
                  required
                  checked={isChecked}
                  // onChange={setUserType("mentor")}
                  onChange={(e) => setUserType("mentor")}
                />
                <label htmlFor="mentor">Mentor</label>
              </div>
            </div>
            <div className="pt">Or</div>
            <div className="Mentee" onClick={chosenmentee}>
              <div
                style={{
                  position: "absolute",
                  bottom: "-30px",
                  display: "flex",
                  justifyContent: "center",
                  width: "183px",
                  fontWeight: "bold",
                }}
              >
                <input
                  type="radio"
                  name="category"
                  id="mentee"
                  required
                  checked={isChecked2}
                  onChange={(e) => setUserType("mentee")}
                />
                <label htmlFor="mentee">Mentee</label>
              </div>
            </div>
          </div>
        </form>
        <div className="next2">
          <button type="button" form="myform2" onClick={redirectToPage3}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth2Component;
