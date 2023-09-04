import "./CheckboxManyInputs.css";
import React, { useState } from "react";

function CheckboxManyInputs() {
     const [formState, setFormState] = useState({
         inputOne: false,
         inputTwo: false,
         inputThree: false,
     });

     function handleChange(event) {
         setFormState({
             inputOne: event.target.value,
             inputTwo: event.target.value,
             inputThree: event.target.value,
         });
     }

     return(
         <>
             <form className="checkbox-form">
                 <fieldset>
                     <legend>
                         Testing this shit
                     </legend>

                             <input
                                 type="checkbox"
                                 id="checkbox"
                                 value={formState.inputOne}
                                 checked={formState.inputOne === true}
                                 onChange={handleChange}
                             />
                             <label
                                 htmlFor="checkbox"
                             >{formState.inputOne}
                             </label>

                     <input
                         type="checkbox"
                         id="checkbox"
                         value={formState.inputTwo}
                         checked={formState.inputTwo === true}
                         onChange={handleChange}
                     />
                     <label
                         htmlFor="checkbox"
                     >{formState.inputTwo}
                     </label>

                     <input
                         type="checkbox"
                         id="checkbox"
                         value={formState.inputThree}
                         checked={formState.inputThree === true}
                         onChange={handleChange}
                     />
                     <label
                         htmlFor="checkbox"
                     >{formState.inputThree}
                     </label>


                 </fieldset>
             </form>

         </>
     );
}

export default CheckboxManyInputs;
