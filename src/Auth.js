import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Auth = ({ setIsLogged, pass }) => {
   const navigate = useNavigate();

   const [inputPass, setInputPass] = useState("");
   const [inputName, setInputName] = useState("");

   const handleInputPassChange = (event) => {
      setInputPass(event.target.value);
   };
   const handleInputNameChange = (event) => {
      setInputName(event.target.value);
   };
   const handleLogin = () => {
      if (pass == inputPass) {
         setIsLogged(true);
         sessionStorage.setItem("pass", inputPass);
         sessionStorage.setItem("playerName", inputName);
         navigate("/dotsgame-intro");
      }
   };
   return (
      <Fragment>
         <div className="col-7 p-0">
            <img
               className="w-100 login-left-pic"
               src="./assets/img/login-form.jpg"
               alt="My avatar"
            ></img>
         </div>
         <div className="col-5">
            <div className="row align-items-center justify-content-center h-100">
               <div className="col-12">
                  <div className="row p-5">
                     <div className="col-12">
                        <div className="row justify-content-center">
                           <div className="col-auto">
                              <img
                                 width="200px"
                                 src="./assets/img/DatLaptoplogo.png"
                                 alt="My avatar"
                              ></img>
                           </div>
                        </div>
                     </div>
                     <div className="col-12">
                        <h2 className="text-center fw-bold">
                           BIG DREAM - GREAT STEP{" "}
                        </h2>
                     </div>

                     <div className="login-form p-3 rounded-3 mt-4">
                        <div className="col-12">
                           <div className="row justify-content-start">
                              <div className="col-12 text-start">
                                 <h3 className="text-start">
                                    Login to the training system
                                 </h3>
                              </div>
                           </div>
                        </div>
                        <div className="col-12">
                           <div className="row mt-2">
                              <div className="col-12">
                                 <div className="input-group mb-3 w-100">
                                    <input
                                       type="text"
                                       className="form-control"
                                       aria-label="Default"
                                       aria-describedby="inputGroup-sizing-default"
                                       placeholder="Username"
                                       onChange={handleInputNameChange}
                                    ></input>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-12">
                           <div className="row mt-2">
                              <div className="col-12">
                                 <div className="input-group mb-3 w-100">
                                    <input
                                       type="password"
                                       className="form-control "
                                       aria-label="Default"
                                       aria-describedby="inputGroup-sizing-default"
                                       placeholder="Password"
                                       onChange={handleInputPassChange}
                                    ></input>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-12">
                           <div className="row mt-4">
                              <div className="col-12">
                                 <button
                                    className="btn bg-white w-100 rounded-pill fw-bolder fs-5"
                                    onClick={() => {
                                       handleLogin();
                                    }}
                                 >
                                    Login
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Fragment>
   );
};
