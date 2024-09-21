// // src/Dashboard.js

// import React, { useState } from "react";

// const Dashboard = () => {
//   // State now holds qualifications with grades
//   const [qualifications, setQualifications] = useState([{ qualification: "", grade: "" }]);

//   const [age, setAge] = useState("");
//   const [skills, setSkills] = useState("");

//   // Function to add a new empty qualification with grade
//   const handleAddQualification = () => {
//     setQualifications([...qualifications, { qualification: "", grade: "" }]);
//   };

//   // Function to handle changes in the qualification or grade inputs
//   const handleQualificationChange = (index, field, value) => {
//     const updatedQualifications = [...qualifications];
//     updatedQualifications[index][field] = value;
//     setQualifications(updatedQualifications);
//   };

//   // Function to remove a qualification with grade input
//   const handleRemoveQualification = (index) => {
//     const updatedQualifications = qualifications.filter(
//       (_, i) => i !== index
//     );
//     setQualifications(updatedQualifications);
//   };

//   // Function to handle skill dropdown changes
//   const handleSkillChange = (e) => {
//     setSkills(e.target.value);
//   };

//   return (
//     <div className="flex items-center justify-center max-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
//         <h2 className="text-2xl font-bold mb-6 text-center">Dashboard</h2>

//         {/* Age Input */}
//         <div className="mb-4">
//           <label className="block text-gray-700">Age</label>
//           <input
//             type="number"
//             value={age}
//             onChange={(e) => setAge(e.target.value)}
//             className="w-full p-2 border border-gray-300 rounded mt-1"
//           />
//         </div>

//         {/* Qualifications and Grades Input */}
//         <div className="mb-4">
//           <label className="block text-gray-700">Qualifications & Grades</label>
//           {qualifications.map((item, index) => (
//             <div key={index} className="flex items-center mt-2 space-x-2">
//               {/* Qualification Input */}
//               <input
//                 type="text"
//                 value={item.qualification}
//                 onChange={(e) =>
//                   handleQualificationChange(index, "qualification", e.target.value)
//                 }
//                 placeholder={`Qualification ${index + 1}`}
//                 className="flex-1 p-2 border border-gray-300 rounded"
//               />

//               {/* Grade Input */}
//               <input
//                 type="text"
//                 value={item.grade}
//                 onChange={(e) =>
//                   handleQualificationChange(index, "grade", e.target.value)
//                 }
//                 placeholder="Grade"
//                 className="w-24 p-2 border border-gray-300 rounded"
//               />

//               {/* Remove Button */}
//               <button
//                 type="button"
//                 onClick={() => handleRemoveQualification(index)}
//                 className="text-red-500 hover:text-red-700"
//               >
//                 &#10005; {/* Cross Icon */}
//               </button>
//             </div>
//           ))}
//           <button
//             type="button"
//             onClick={handleAddQualification}
//             className="mt-3 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
//           >
//             Add More Qualifications
//           </button>
//         </div>

//         {/* Skills Dropdown */}
//         <div className="mb-4">
//           <label className="block text-gray-700">Skills</label>
//           <select
//             value={skills}
//             onChange={handleSkillChange}
//             className="w-full p-2 border border-gray-300 rounded mt-1"
//           >
//             <option value="" disabled>
//               Select a Skill
//             </option>
//             <option value="JavaScript">JavaScript</option>
//             <option value="React">React</option>
//             <option value="CSS">CSS</option>
//             <option value="Python">Python</option>
//             <option value="Java">Java</option>
//           </select>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
//         >
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
// src/Dashboard.js
// src/Dashboard.js

// src/Dashboard.js

import React, { useState } from "react";
import ClientLoginform from './auth0Login'


const Dashboard = () => {
  const [qualifications, setQualifications] = useState([{ qualification: "", grade: "" }]);
  const [age, setAge] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("");
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);

  const skillTechnologies = {
    Cloud: ["AWS", "Azure", "Google Cloud", "IBM Cloud"],
    "Full Stack": ["Node.js", "Express.js", "Django", "Spring Boot"],
    "Front End": ["React", "Vue.js", "Angular", "Svelte"],
    "AI/ML": ["TensorFlow", "PyTorch", "Keras", "Scikit-learn"],
    Cybersecurity: ["Penetration Testing", "Firewall Management", "Encryption", "Ethical Hacking"],
    Blockchain: ["Ethereum", "Hyperledger", "Solana", "Polkadot"],
  };

  const handleSkillChange = (e) => {
    setSelectedSkill(e.target.value);
    setSelectedTechnologies([]);
  };

  const handleTechnologyChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;

    if (checked) {
      setSelectedTechnologies([...selectedTechnologies, value]);
    } else {
      setSelectedTechnologies(selectedTechnologies.filter((tech) => tech !== value));
    }
  };

  const handleAddQualification = () => {
    setQualifications([...qualifications, { qualification: "", grade: "" }]);
  };

  const handleQualificationChange = (index, field, value) => {
    const updatedQualifications = [...qualifications];
    updatedQualifications[index][field] = value;
    setQualifications(updatedQualifications);
  };

  const handleRemoveQualification = (index) => {
    const updatedQualifications = qualifications.filter((_, i) => i !== index);
    setQualifications(updatedQualifications);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    const formData = {
      age,
      qualifications,
      selectedSkill,
      selectedTechnologies,
    };
    console.log("Form submitted:", formData);
    // You can replace this with your desired action, like sending to an API
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Dashboard</h2>
        <form onSubmit={handleSubmit}>
          {/* Age Input */}
          <div className="mb-4">
            <label className="block text-gray-700">Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>

          {/* Qualifications and Grades Input */}
          <div className="mb-4">
            <label className="block text-gray-700">Qualifications & Grades</label>
            {qualifications.map((item, index) => (
              <div key={index} className="flex items-center mt-2 space-x-2">
                <input
                  type="text"
                  value={item.qualification}
                  onChange={(e) =>
                    handleQualificationChange(index, "qualification", e.target.value)
                  }
                  placeholder={`Qualification ${index + 1}`}
                  className="flex-1 p-2 border border-gray-300 rounded"
                />
                <input
                  type="text"
                  value={item.grade}
                  onChange={(e) =>
                    handleQualificationChange(index, "grade", e.target.value)
                  }
                  placeholder="Grade"
                  className="w-24 p-2 border border-gray-300 rounded"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveQualification(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  &#10005; {/* Cross Icon */}
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddQualification}
              className="mt-3 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Add More Qualifications
            </button>
          </div>

          {/* Main Skill Dropdown */}
          <div className="mb-4">
            <label className="block text-gray-700">Select a Skill</label>
            <select
              value={selectedSkill}
              onChange={handleSkillChange}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            >
              <option value="" disabled>Select a Skill</option>
              {Object.keys(skillTechnologies).map((skill, index) => (
                <option key={index} value={skill}>
                  {skill}
                </option>
              ))}
            </select>
          </div>

          {/* Technology Dropdown with Multi-Select (Checkboxes) */}
          {selectedSkill && (
            <div className="mb-4">
              <label className="block text-gray-700">Select Technologies</label>
              <div className="border p-4 rounded">
                {skillTechnologies[selectedSkill].map((tech, index) => (
                  <label key={index} className="flex items-center space-x-2 mb-2">
                    <input
                      type="checkbox"
                      value={tech}
                      checked={selectedTechnologies.includes(tech)}
                      onChange={handleTechnologyChange}
                      className="form-checkbox h-4 w-4 text-blue-600"
                    />
                    <span>{tech}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
            >
              Submit
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Dashboard;

