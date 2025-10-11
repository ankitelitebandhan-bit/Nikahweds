// import React, { useState, useRef, useCallback, useEffect } from "react";
// import emailjs from "@emailjs/browser";

// // EmailJS credentials
// const EMAILJS_USER_ID = "TzeqKMGKnUOT1YOGf";
// const EMAILJS_SERVICE_ID = "service_vi6eo7d";
// const EMAILJS_TEMPLATE_ID = "template_hslx5k8";

// emailjs.init(EMAILJS_USER_ID);

// export default function RegistrationForm() {
//   const [form, setForm] = useState({});
//   const [govIdFile, setGovIdFile] = useState(null);
//   const [photos, setPhotos] = useState([]);
//   const [loading, setLoading] = useState(false);

//   // Track the currently active input for focus persistence
//   const activeFieldRef = useRef(null);

//   // Handle input/select/checkbox changes
//   const handleChange = useCallback((e) => {
//     const { name, type, value, checked } = e.target;
//     activeFieldRef.current = name;

//     setForm((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   }, []);

//   // Persist focus after re-render
//   useEffect(() => {
//     if (activeFieldRef.current) {
//       const input = document.querySelector(
//         `[name="${activeFieldRef.current}"]`
//       );
//       if (input) input.focus();
//     }
//   });

//   // Handle file uploads
//   const handleFile = (e, setter, multiple = false) => {
//     const files = multiple ? Array.from(e.target.files) : e.target.files[0];
//     setter(files);
//   };

//   // Convert files to base64
//   const fileToBase64 = (file) =>
//     new Promise((resolve, reject) => {
//       if (!file) return resolve("");
//       const reader = new FileReader();
//       reader.onload = () => resolve(reader.result);
//       reader.onerror = reject;
//       reader.readAsDataURL(file);
//     });

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     activeFieldRef.current = null; // clear focus during submission

//     try {
//       const govIdBase64 = govIdFile ? await fileToBase64(govIdFile) : "";
//       const photosBase64 = [];
//       for (let f of photos || []) photosBase64.push(await fileToBase64(f));

//       const params = {
//         ...form,
//         govIdBase64,
//         photosBase64: photosBase64.join("\n\n"),
//         timestamp: new Date().toLocaleString(),
//       };

//       await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params);
//       alert("✅ Registration submitted successfully!");
//       setForm({});
//       setGovIdFile(null);
//       setPhotos([]);
//     } catch (err) {
//       console.error(err);
//       alert("❌ Error submitting form. Check console for details.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Input field component
//   const Input = ({ label, name, type = "text", min }) => (
//     <label className="block text-sm text-gray-700">
//       <span className="font-medium">{label}</span>
//       <input
//         type={type}
//         name={name}
//         value={form[name] || ""}
//         onChange={handleChange}
//         min={min}
//         className="w-full mt-1 rounded-xl border border-gray-300 px-4 py-2 shadow-sm focus:ring-green-500 focus:border-green-500"
//       />
//     </label>
//   );

//   // Select field component
//   const Select = ({ label, name, options }) => (
//     <label className="block text-sm text-gray-700">
//       <span className="font-medium">{label}</span>
//       <select
//         name={name}
//         value={form[name] || ""}
//         onChange={handleChange}
//         className="w-full mt-1 rounded-xl border border-gray-300 px-4 py-2 shadow-sm focus:ring-green-500 focus:border-green-500"
//       >
//         <option value="">Select</option>
//         {options.map((opt) => (
//           <option key={opt} value={opt}>
//             {opt}
//           </option>
//         ))}
//       </select>
//     </label>
//   );

//   // Section header component
//   const SectionHeader = ({ title }) => (
//     <h2 className="text-xl font-semibold text-green-700 border-b-2 border-green-200 pb-2 mb-4">
//       {title}
//     </h2>
//   );

//   return (
//     <div className="min-h-screen bg-green-50 py-10 px-4">
//       <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8">
//         <h1 className="text-3xl font-bold text-green-700 text-center mb-2">
//           Registration Form
//         </h1>
//         <p className="text-center text-gray-500 mb-8">
//           Create your matrimonial profile
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-10">
//           {/* Section 1: Contact Info */}
//           <section>
//             <SectionHeader title="Contact Information" />
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <Input label="Name" name="name" />
//               <Input label="Phone No" name="phone" />
//               <Input label="Email" name="email" type="email" />
//               <Input label="Alternate Phone No" name="altPhone" />
//               <Input label="Caste" name="caste" />
//               <Select
//                 label="Profile Created For"
//                 name="profileCreatedFor"
//                 options={[
//                   "Self",
//                   "Son",
//                   "Daughter",
//                   "Sibling",
//                   "Relative",
//                   "Friend",
//                 ]}
//               />
//             </div>
//           </section>

//           {/* Section 2: Client Basic Info */}
//           <section>
//             <SectionHeader title="Client Basic Information" />
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <Input label="Client Name" name="clientName" />
//               <Input label="Client Phone" name="clientPhone" />
//               <Input label="Date of Birth" name="dob" type="date" />
//               <Select
//                 label="Gender"
//                 name="gender"
//                 options={["Male", "Female", "Other"]}
//               />
//               <Select
//                 label="Marital Status"
//                 name="maritalStatus"
//                 options={["Single", "Married", "Divorced", "Widowed"]}
//               />
//               <Select
//                 label="Height"
//                 name="height"
//                 options={[
//                   "4'8\"",
//                   "4'9\"",
//                   "4'10\"",
//                   "4'11\"",
//                   "5'0\"",
//                   "5'1\"",
//                   "5'2\"",
//                   "5'3\"",
//                   "5'4\"",
//                   "5'5\"",
//                   "5'6\"",
//                   "5'7\"",
//                   "5'8\"",
//                   "5'9\"",
//                   "5'10\"",
//                   "5'11\"",
//                   "6'0\"",
//                   "6'1\"",
//                   "6'2\"",
//                   "6'3\"",
//                   "6'4\"",
//                   "6'5\"",
//                 ]}
//               />
//               <Select
//                 label="Body Type"
//                 name="bodyType"
//                 options={[
//                   "Slim",
//                   "Athletic",
//                   "Average",
//                   "Heavy",
//                   "Muscular",
//                   "Lean",
//                 ]}
//               />
//               <Select
//                 label="Complexion"
//                 name="complexion"
//                 options={[
//                   "Very Fair",
//                   "Fair",
//                   "Wheatish",
//                   "Dusky",
//                   "Dark",
//                   "Olive",
//                 ]}
//               />
//               <Input label="Mother Tongue" name="motherTongue" />
//               <Input label="Native Place" name="nativePlace" />
//               <label className="block">
//                 <span className="font-medium text-sm text-gray-700">
//                   Gov. ID (Image)
//                 </span>
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={(e) => handleFile(e, setGovIdFile)}
//                   className="w-full mt-1 rounded-xl border p-2"
//                 />
//               </label>
//               <label className="block">
//                 <span className="font-medium text-sm text-gray-700">
//                   Upload Photos
//                 </span>
//                 <input
//                   type="file"
//                   multiple
//                   accept="image/*"
//                   onChange={(e) => handleFile(e, setPhotos, true)}
//                   className="w-full mt-1 rounded-xl border p-2"
//                 />
//               </label>
//               <div className="md:col-span-2">
//                 <label className="block text-sm text-gray-700">
//                   <span className="font-medium">Describe Yourself</span>
//                   <textarea
//                     name="describeYourself"
//                     value={form.describeYourself || ""}
//                     onChange={handleChange}
//                     rows={4}
//                     className="w-full mt-1 rounded-xl border px-4 py-2 shadow-sm focus:ring-green-500"
//                   />
//                 </label>
//               </div>
//             </div>
//           </section>

//           {/* Section 3: Educational & Professional Info */}
//           <section>
//             <SectionHeader title="Educational & Professional Information" />
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <Select
//                 label="Highest Education"
//                 name="highestEducation"
//                 options={[
//                   "High School",
//                   "Diploma",
//                   "Bachelor's",
//                   "Master's",
//                   "PhD",
//                   "Other",
//                 ]}
//               />
//               <Input label="Name of Institute" name="instituteName" />
//               <Select
//                 label="Working With"
//                 name="workingWith"
//                 options={[
//                   "Private Company",
//                   "Government",
//                   "Business",
//                   "Self-Employed",
//                   "Not Working",
//                 ]}
//               />
//               <Input label="Work Location" name="workLocation" />
//               <Input label="Profession" name="profession" />
//               <Select
//                 label="Annual Income"
//                 name="annualIncome"
//                 options={[
//                   "Below 1 Lakh",
//                   "1-3 Lakh",
//                   "3-5 Lakh",
//                   "5-10 Lakh",
//                   "10-20 Lakh",
//                   "20-50 Lakh",
//                   "50 Lakh+",
//                 ]}
//               />
//             </div>
//           </section>

//           {/* Section 4: Family Details */}
//           <section>
//             <SectionHeader title="Family Details" />
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <Select
//                 label="Father's Occupation"
//                 name="fatherOccupation"
//                 options={["Business", "Job", "Retired", "Other"]}
//               />
//               <Select
//                 label="Mother's Occupation"
//                 name="motherOccupation"
//                 options={["Homemaker", "Job", "Business", "Retired", "Other"]}
//               />
//               <Input
//                 label="Number of Brothers"
//                 name="numBrothers"
//                 type="number"
//               />
//               <Input
//                 label="Married Brothers"
//                 name="marriedBrothers"
//                 type="number"
//               />
//               <Input
//                 label="Number of Sisters"
//                 name="numSisters"
//                 type="number"
//               />
//               <Input
//                 label="Married Sisters"
//                 name="marriedSisters"
//                 type="number"
//               />
//               <Select
//                 label="Family Type"
//                 name="familyType"
//                 options={["Joint", "Nuclear", "Other"]}
//               />
//               <Select
//                 label="Family Affluence"
//                 name="familyAffluence"
//                 options={["Low Class", "Medium Class", "High Class"]}
//               />
//               <Select
//                 label="Family Values"
//                 name="familyValues"
//                 options={["Traditional", "Moderate", "Liberal"]}
//               />
//             </div>
//           </section>

//           {/* Section 5: Partner Preferences */}
//           <section>
//             <SectionHeader title="Partner Preference - Basic Preferences" />
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <Input label="Min Age" name="minAge" type="number" min={18} />
//               <Input label="Max Age" name="maxAge" type="number" min={18} />
//               <Input label="Preferred Location" name="preferredLocation" />
//               <Select
//                 label="Marital Status"
//                 name="partnerMaritalStatus"
//                 options={["Open to All", "Single", "Divorced", "Widowed"]}
//               />
//               <Select
//                 label="Partner Religion"
//                 name="partnerReligion"
//                 options={[
//                   "Open to All",
//                   "Hindu",
//                   "Muslim",
//                   "Christian",
//                   "Other",
//                 ]}
//               />
//             </div>
//           </section>

//           {/* Section 6: Partner Location Preferences */}
//           <section>
//             <SectionHeader title="Partner Location Preferences" />
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <Input label="Country" name="partnerCountry" />
//               <Input label="State" name="partnerState" />
//               <Input label="City" name="partnerCity" />
//               <Input label="Citizenship" name="partnerCitizenship" />
//               <Input label="Country Grew Up" name="partnerGrewUpCountry" />
//             </div>
//           </section>

//           {/* Section 7: Partner Education & Career Preferences */}
//           <section>
//             <SectionHeader title="Partner Education & Career Preferences" />
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <Select
//                 label="Highest Qualification"
//                 name="partnerHighestQualification"
//                 options={["Bachelors", "Masters", "PhD", "Other"]}
//               />
//               <Select
//                 label="Education Field"
//                 name="partnerEducationField"
//                 options={[
//                   "Engineering",
//                   "Medicine",
//                   "Arts",
//                   "Commerce",
//                   "Other",
//                 ]}
//               />
//               <Select
//                 label="Partner Working With"
//                 name="partnerWorkingWith"
//                 options={["Private", "Government", "Business", "Other"]}
//               />
//               <Input label="Profession" name="partnerProfession" />
//               <Input label="Designation" name="partnerDesignation" />
//               <Select
//                 label="Annual Income"
//                 name="partnerAnnualIncome"
//                 options={[
//                   "Below 1 Lakh",
//                   "1-3 Lakh",
//                   "3-5 Lakh",
//                   "5-10 Lakh",
//                   "10-20 Lakh",
//                   "20-50 Lakh",
//                   "50 Lakh+",
//                 ]}
//               />
//             </div>
//           </section>

//           {/* Submit Button */}
//           <div className="text-right mt-8">
//             <button
//               type="submit"
//               disabled={loading}
//               className="px-8 py-3 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 disabled:opacity-50 shadow-md"
//             >
//               {loading ? "Submitting..." : "Submit"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
/////////////////////////////////////////////////////////////////////////////
// import React, { useState, useRef, useCallback, useEffect } from "react";
// import emailjs from "@emailjs/browser";

// // EmailJS credentials
// const EMAILJS_USER_ID = "TzeqKMGKnUOT1YOGf";
// const EMAILJS_SERVICE_ID = "service_vi6eo7d";
// const EMAILJS_TEMPLATE_ID = "template_hslx5k8";

// emailjs.init(EMAILJS_USER_ID);

// export default function RegistrationForm() {
//   const [form, setForm] = useState({});
//   const [loading, setLoading] = useState(false);

//   const activeFieldRef = useRef(null);

//   // Handle input/select changes
//   const handleChange = useCallback((e) => {
//     const { name, type, value, checked } = e.target;
//     activeFieldRef.current = name;

//     setForm((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   }, []);

//   // Persist focus
//   useEffect(() => {
//     if (activeFieldRef.current) {
//       const input = document.querySelector(
//         `[name="${activeFieldRef.current}"]`
//       );
//       if (input) input.focus();
//     }
//   });

//   // Submit form
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     activeFieldRef.current = null;

//     try {
//       const params = { ...form, timestamp: new Date().toLocaleString() };
//       await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params);
//       alert("✅ Registration submitted successfully!");
//       setForm({});
//     } catch (err) {
//       console.error(err);
//       alert("❌ Error submitting form. Check console for details.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const Input = ({ label, name, type = "text", min }) => (
//     <label className="block text-sm text-gray-700">
//       <span className="font-medium">{label}</span>
//       <input
//         type={type}
//         name={name}
//         value={form[name] || ""}
//         onChange={handleChange}
//         min={min}
//         className="w-full mt-1 rounded-xl border border-gray-300 px-4 py-2 shadow-sm focus:ring-green-500 focus:border-green-500"
//       />
//     </label>
//   );

//   const Select = ({ label, name, options }) => (
//     <label className="block text-sm text-gray-700">
//       <span className="font-medium">{label}</span>
//       <select
//         name={name}
//         value={form[name] || ""}
//         onChange={handleChange}
//         className="w-full mt-1 rounded-xl border border-gray-300 px-4 py-2 shadow-sm focus:ring-green-500 focus:border-green-500"
//       >
//         <option value="">Select</option>
//         {options.map((opt) => (
//           <option key={opt} value={opt}>
//             {opt}
//           </option>
//         ))}
//       </select>
//     </label>
//   );

//   const SectionHeader = ({ title }) => (
//     <h2 className="text-xl font-semibold text-green-700 border-b-2 border-green-200 pb-2 mb-4">
//       {title}
//     </h2>
//   );

//   return (
//     <div className="min-h-screen bg-green-50 py-10 px-4">
//       <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8">
//         <h1 className="text-3xl font-bold text-green-700 text-center mb-2">
//           Registration Form
//         </h1>
//         <p className="text-center text-gray-500 mb-8">
//           Create your matrimonial profile
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-10">
//           {/* Section 1: Contact Info */}
//           <section>
//             <SectionHeader title="Contact Information" />
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <Input label="Name" name="name" />
//               <Input label="Phone No" name="phone" />
//               <Input label="Email" name="email" type="email" />
//               <Input label="Alternate Phone No" name="altPhone" />
//               <Input label="Caste" name="caste" />
//               <Select
//                 label="Profile Created For"
//                 name="profileCreatedFor"
//                 options={[
//                   "Self",
//                   "Son",
//                   "Daughter",
//                   "Sibling",
//                   "Relative",
//                   "Friend",
//                 ]}
//               />
//             </div>
//           </section>

//           {/* Section 2: Client Basic Info */}
//           <section>
//             <SectionHeader title="Client Basic Information" />
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <Input label="Client Name" name="clientName" />
//               <Input label="Client Phone" name="clientPhone" />
//               <Input label="Date of Birth" name="dob" type="date" />
//               <Select
//                 label="Gender"
//                 name="gender"
//                 options={["Male", "Female", "Other"]}
//               />
//               <Select
//                 label="Marital Status"
//                 name="maritalStatus"
//                 options={["Single", "Married", "Divorced", "Widowed"]}
//               />
//               <Select
//                 label="Height"
//                 name="height"
//                 options={[
//                   "4'8\"",
//                   "4'9\"",
//                   "4'10\"",
//                   "4'11\"",
//                   "5'0\"",
//                   "5'1\"",
//                   "5'2\"",
//                   "5'3\"",
//                   "5'4\"",
//                   "5'5\"",
//                   "5'6\"",
//                   "5'7\"",
//                   "5'8\"",
//                   "5'9\"",
//                   "5'10\"",
//                   "5'11\"",
//                   "6'0\"",
//                   "6'1\"",
//                   "6'2\"",
//                   "6'3\"",
//                   "6'4\"",
//                   "6'5\"",
//                 ]}
//               />
//               <Select
//                 label="Body Type"
//                 name="bodyType"
//                 options={[
//                   "Slim",
//                   "Athletic",
//                   "Average",
//                   "Heavy",
//                   "Muscular",
//                   "Lean",
//                 ]}
//               />
//               <Select
//                 label="Complexion"
//                 name="complexion"
//                 options={[
//                   "Very Fair",
//                   "Fair",
//                   "Wheatish",
//                   "Dusky",
//                   "Dark",
//                   "Olive",
//                 ]}
//               />
//               <Input label="Mother Tongue" name="motherTongue" />
//               <Input label="Native Place" name="nativePlace" />
//               <div className="md:col-span-2">
//                 <label className="block text-sm text-gray-700">
//                   <span className="font-medium">Describe Yourself</span>
//                   <textarea
//                     name="describeYourself"
//                     value={form.describeYourself || ""}
//                     onChange={handleChange}
//                     rows={4}
//                     className="w-full mt-1 rounded-xl border px-4 py-2 shadow-sm focus:ring-green-500"
//                   />
//                 </label>
//               </div>
//             </div>
//           </section>

//           {/* Section 3: Educational & Professional Info */}
//           <section>
//             <SectionHeader title="Educational & Professional Information" />
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <Select
//                 label="Highest Education"
//                 name="highestEducation"
//                 options={[
//                   "High School",
//                   "Diploma",
//                   "Bachelor's",
//                   "Master's",
//                   "PhD",
//                   "Other",
//                 ]}
//               />
//               <Input label="Name of Institute" name="instituteName" />
//               <Select
//                 label="Working With"
//                 name="workingWith"
//                 options={[
//                   "Private Company",
//                   "Government",
//                   "Business",
//                   "Self-Employed",
//                   "Not Working",
//                 ]}
//               />
//               <Input label="Work Location" name="workLocation" />
//               <Input label="Profession" name="profession" />
//               <Select
//                 label="Annual Income"
//                 name="annualIncome"
//                 options={[
//                   "Below 1 Lakh",
//                   "1-3 Lakh",
//                   "3-5 Lakh",
//                   "5-10 Lakh",
//                   "10-20 Lakh",
//                   "20-50 Lakh",
//                   "50 Lakh+",
//                 ]}
//               />
//             </div>
//           </section>

//           {/* Section 4: Family Details */}
//           <section>
//             <SectionHeader title="Family Details" />
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <Select
//                 label="Father's Occupation"
//                 name="fatherOccupation"
//                 options={["Business", "Job", "Retired", "Other"]}
//               />
//               <Select
//                 label="Mother's Occupation"
//                 name="motherOccupation"
//                 options={["Homemaker", "Job", "Business", "Retired", "Other"]}
//               />
//               <Input
//                 label="Number of Brothers"
//                 name="numBrothers"
//                 type="number"
//               />
//               <Input
//                 label="Married Brothers"
//                 name="marriedBrothers"
//                 type="number"
//               />
//               <Input
//                 label="Number of Sisters"
//                 name="numSisters"
//                 type="number"
//               />
//               <Input
//                 label="Married Sisters"
//                 name="marriedSisters"
//                 type="number"
//               />
//               <Select
//                 label="Family Type"
//                 name="familyType"
//                 options={["Joint", "Nuclear", "Other"]}
//               />
//               <Select
//                 label="Family Affluence"
//                 name="familyAffluence"
//                 options={["Low Class", "Medium Class", "High Class"]}
//               />
//               <Select
//                 label="Family Values"
//                 name="familyValues"
//                 options={["Traditional", "Moderate", "Liberal"]}
//               />
//             </div>
//           </section>

//           {/* Section 5: Partner Preferences */}
//           <section>
//             <SectionHeader title="Partner Preference - Basic Preferences" />
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <Input label="Min Age" name="minAge" type="number" min={18} />
//               <Input label="Max Age" name="maxAge" type="number" min={18} />
//               <Input label="Preferred Location" name="preferredLocation" />
//               <Select
//                 label="Marital Status"
//                 name="partnerMaritalStatus"
//                 options={["Open to All", "Single", "Divorced", "Widowed"]}
//               />
//               <Select
//                 label="Partner Religion"
//                 name="partnerReligion"
//                 options={[
//                   "Open to All",
//                   "Hindu",
//                   "Muslim",
//                   "Christian",
//                   "Other",
//                 ]}
//               />
//             </div>
//           </section>

//           {/* Section 6: Partner Location Preferences */}
//           <section>
//             <SectionHeader title="Partner Location Preferences" />
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <Input label="Country" name="partnerCountry" />
//               <Input label="State" name="partnerState" />
//               <Input label="City" name="partnerCity" />
//               <Input label="Citizenship" name="partnerCitizenship" />
//               <Input label="Country Grew Up" name="partnerGrewUpCountry" />
//             </div>
//           </section>

//           {/* Section 7: Partner Education & Career Preferences */}
//           <section>
//             <SectionHeader title="Partner Education & Career Preferences" />
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <Select
//                 label="Highest Qualification"
//                 name="partnerHighestQualification"
//                 options={["Bachelors", "Masters", "PhD", "Other"]}
//               />
//               <Select
//                 label="Education Field"
//                 name="partnerEducationField"
//                 options={[
//                   "Engineering",
//                   "Medicine",
//                   "Arts",
//                   "Commerce",
//                   "Other",
//                 ]}
//               />
//               <Select
//                 label="Partner Working With"
//                 name="partnerWorkingWith"
//                 options={["Private", "Government", "Business", "Other"]}
//               />
//               <Input label="Profession" name="partnerProfession" />
//               <Input label="Designation" name="partnerDesignation" />
//               <Select
//                 label="Annual Income"
//                 name="partnerAnnualIncome"
//                 options={[
//                   "Below 1 Lakh",
//                   "1-3 Lakh",
//                   "3-5 Lakh",
//                   "5-10 Lakh",
//                   "10-20 Lakh",
//                   "20-50 Lakh",
//                   "50 Lakh+",
//                 ]}
//               />
//             </div>
//           </section>

//           {/* Submit Button */}
//           <div className="text-right mt-8">
//             <button
//               type="submit"
//               disabled={loading}
//               className="px-8 py-3 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 disabled:opacity-50 shadow-md"
//             >
//               {loading ? "Submitting..." : "Submit"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
import React, { useState, useRef, useCallback, useEffect } from "react";
import emailjs from "@emailjs/browser";

// EmailJS credentials
const EMAILJS_USER_ID = "TzeqKMGKnUOT1YOGf";
const EMAILJS_SERVICE_ID = "service_vi6eo7d";
const EMAILJS_TEMPLATE_ID = "template_hslx5k8";

emailjs.init(EMAILJS_USER_ID);

export default function RegistrationForm() {
  const [form, setForm] = useState({});
  const [govIdFile, setGovIdFile] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const activeFieldRef = useRef(null);

  // Persist focus after re-render
  useEffect(() => {
    if (activeFieldRef.current) {
      const input = document.querySelector(
        `[name="${activeFieldRef.current}"]`
      );
      if (input) input.focus();
    }
  });

  // Handle input/select/checkbox changes
  const handleChange = useCallback((e) => {
    const { name, type, value, checked } = e.target;
    activeFieldRef.current = name;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }, []);

  // Handle file selection
  const handleFile = (e, setter, multiple = false) => {
    const files = multiple ? Array.from(e.target.files) : e.target.files[0];
    setter(files);
  };

  // Compress image
  const compressImage = (
    file,
    maxWidth = 600,
    maxHeight = 600,
    quality = 0.5
  ) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          let { width, height } = img;
          if (width > height && width > maxWidth) {
            height = (height * maxWidth) / width;
            width = maxWidth;
          } else if (height > maxHeight) {
            width = (width * maxHeight) / height;
            height = maxHeight;
          }

          const canvas = document.createElement("canvas");
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, width, height);

          let compressedBase64 = canvas.toDataURL("image/jpeg", quality);
          while (compressedBase64.length / 1024 > 50 && quality > 0.1) {
            quality -= 0.1;
            compressedBase64 = canvas.toDataURL("image/jpeg", quality);
          }
          resolve(compressedBase64);
        };
        img.onerror = reject;
        img.src = event.target.result;
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  // Form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    activeFieldRef.current = null;

    try {
      let govIdBase64Tag = "";
      if (govIdFile) {
        const compressedGovId = await compressImage(govIdFile, 600, 600, 0.5);
        govIdBase64Tag = `<p>Gov ID:</p><img src="${compressedGovId}" style="max-width:200px; margin:5px;" />`;
      }

      let photosBase64Tag = "";
      for (let f of photos || []) {
        const compressedPhoto = await compressImage(f, 600, 600, 0.5);
        photosBase64Tag += `<img src="${compressedPhoto}" style="max-width:200px; margin:5px;" />`;
      }

      const params = {
        ...form,
        htmlContent: `
          <p>Timestamp: ${new Date().toLocaleString()}</p>
          ${govIdBase64Tag}
          <p>Photos:</p>
          ${photosBase64Tag}
        `,
      };

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params);

      alert("✅ Registration submitted successfully!");
      setForm({});
      setGovIdFile(null);
      setPhotos([]);
    } catch (err) {
      console.error(err);
      alert("❌ Error submitting form. Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  // Input component
  const Input = ({ label, name, type = "text", min }) => (
    <label className="block text-sm text-gray-700">
      <span className="font-medium">{label}</span>
      <input
        type={type}
        name={name}
        value={form[name] || ""}
        onChange={handleChange}
        min={min}
        className="w-full mt-1 rounded-xl border border-gray-300 px-4 py-2 shadow-sm focus:ring-green-500 focus:border-green-500"
      />
    </label>
  );

  // Select component
  const Select = ({ label, name, options }) => (
    <label className="block text-sm text-gray-700">
      <span className="font-medium">{label}</span>
      <select
        name={name}
        value={form[name] || ""}
        onChange={handleChange}
        className="w-full mt-1 rounded-xl border border-gray-300 px-4 py-2 shadow-sm focus:ring-green-500 focus:border-green-500"
      >
        <option value="">Select</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  );

  const SectionHeader = ({ title }) => (
    <h2 className="text-xl font-semibold text-green-700 border-b-2 border-green-200 pb-2 mb-4">
      {title}
    </h2>
  );

  return (
    <div className="min-h-screen bg-green-50 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-green-700 text-center mb-2">
          Registration Form
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Create your matrimonial profile
        </p>

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* Section 1: Contact Info */}
          <section>
            <SectionHeader title="Contact Information" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Name" name="name" />
              <Input label="Phone No" name="phone" />
              <Input label="Email" name="email" type="email" />
              <Input label="Alternate Phone No" name="altPhone" />
              <Input label="Caste" name="caste" />
              <Select
                label="Profile Created For"
                name="profileCreatedFor"
                options={[
                  "Self",
                  "Son",
                  "Daughter",
                  "Sibling",
                  "Relative",
                  "Friend",
                ]}
              />
            </div>
          </section>

          {/* Section 2: Client Basic Info */}
          <section>
            <SectionHeader title="Client Basic Information" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Client Name" name="clientName" />
              <Input label="Client Phone" name="clientPhone" />
              <Input label="Date of Birth" name="dob" type="date" />
              <Select
                label="Gender"
                name="gender"
                options={["Male", "Female", "Other"]}
              />
              <Select
                label="Marital Status"
                name="maritalStatus"
                options={["Single", "Married", "Divorced", "Widowed"]}
              />
              <Select
                label="Height"
                name="height"
                options={[
                  "4'8\"",
                  "4'9\"",
                  "4'10\"",
                  "4'11\"",
                  "5'0\"",
                  "5'1\"",
                  "5'2\"",
                  "5'3\"",
                  "5'4\"",
                  "5'5\"",
                  "5'6\"",
                  "5'7\"",
                  "5'8\"",
                  "5'9\"",
                  "5'10\"",
                  "5'11\"",
                  "6'0\"",
                  "6'1\"",
                  "6'2\"",
                  "6'3\"",
                  "6'4\"",
                  "6'5\"",
                ]}
              />
              <Select
                label="Body Type"
                name="bodyType"
                options={[
                  "Slim",
                  "Athletic",
                  "Average",
                  "Heavy",
                  "Muscular",
                  "Lean",
                ]}
              />
              <Select
                label="Complexion"
                name="complexion"
                options={[
                  "Very Fair",
                  "Fair",
                  "Wheatish",
                  "Dusky",
                  "Dark",
                  "Olive",
                ]}
              />
              <Input label="Mother Tongue" name="motherTongue" />
              <Input label="Native Place" name="nativePlace" />
              <div className="md:col-span-2">
                <label className="block text-sm text-gray-700">
                  <span className="font-medium">Describe Yourself</span>
                  <textarea
                    name="describeYourself"
                    value={form.describeYourself || ""}
                    onChange={handleChange}
                    rows={4}
                    className="w-full mt-1 rounded-xl border px-4 py-2 shadow-sm focus:ring-green-500"
                  />
                </label>
              </div>
            </div>
          </section>

          {/* Section 3: Educational & Professional Info */}
          <section>
            <SectionHeader title="Educational & Professional Information" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Highest Education"
                name="highestEducation"
                options={[
                  "High School",
                  "Diploma",
                  "Bachelor's",
                  "Master's",
                  "PhD",
                  "Other",
                ]}
              />
              <Input label="Name of Institute" name="instituteName" />
              <Select
                label="Working With"
                name="workingWith"
                options={[
                  "Private Company",
                  "Government",
                  "Business",
                  "Self-Employed",
                  "Not Working",
                ]}
              />
              <Input label="Work Location" name="workLocation" />
              <Input label="Profession" name="profession" />
              <Select
                label="Annual Income"
                name="annualIncome"
                options={[
                  "Below 1 Lakh",
                  "1-3 Lakh",
                  "3-5 Lakh",
                  "5-10 Lakh",
                  "10-20 Lakh",
                  "20-50 Lakh",
                  "50 Lakh+",
                ]}
              />
            </div>
          </section>

          {/* Section 4: Family Details */}
          <section>
            <SectionHeader title="Family Details" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Father's Occupation"
                name="fatherOccupation"
                options={["Business", "Job", "Retired", "Other"]}
              />
              <Select
                label="Mother's Occupation"
                name="motherOccupation"
                options={["Homemaker", "Job", "Business", "Retired", "Other"]}
              />
              <Input
                label="Number of Brothers"
                name="numBrothers"
                type="number"
              />
              <Input
                label="Married Brothers"
                name="marriedBrothers"
                type="number"
              />
              <Input
                label="Number of Sisters"
                name="numSisters"
                type="number"
              />
              <Input
                label="Married Sisters"
                name="marriedSisters"
                type="number"
              />
              <Select
                label="Family Type"
                name="familyType"
                options={["Joint", "Nuclear", "Other"]}
              />
              <Select
                label="Family Affluence"
                name="familyAffluence"
                options={["Low Class", "Medium Class", "High Class"]}
              />
              <Select
                label="Family Values"
                name="familyValues"
                options={["Traditional", "Moderate", "Liberal"]}
              />
            </div>
          </section>

          {/* Section 5: Partner Preferences */}
          <section>
            <SectionHeader title="Partner Preference - Basic Preferences" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Min Age" name="minAge" type="number" min={18} />
              <Input label="Max Age" name="maxAge" type="number" min={18} />
              <Input label="Preferred Location" name="preferredLocation" />
              <Select
                label="Marital Status"
                name="partnerMaritalStatus"
                options={["Open to All", "Single", "Divorced", "Widowed"]}
              />
              <Select
                label="Partner Religion"
                name="partnerReligion"
                options={[
                  "Open to All",
                  "Hindu",
                  "Muslim",
                  "Christian",
                  "Other",
                ]}
              />
            </div>
          </section>

          {/* Section 6: Partner Location Preferences */}
          <section>
            <SectionHeader title="Partner Location Preferences" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Country" name="partnerCountry" />
              <Input label="State" name="partnerState" />
              <Input label="City" name="partnerCity" />
              <Input label="Citizenship" name="partnerCitizenship" />
              <Input label="Country Grew Up" name="partnerGrewUpCountry" />
            </div>
          </section>

          {/* Section 7: Partner Education & Career Preferences */}
          <section>
            <SectionHeader title="Partner Education & Career Preferences" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Highest Qualification"
                name="partnerHighestQualification"
                options={["Bachelors", "Masters", "PhD", "Other"]}
              />
              <Select
                label="Education Field"
                name="partnerEducationField"
                options={[
                  "Engineering",
                  "Medicine",
                  "Arts",
                  "Commerce",
                  "Other",
                ]}
              />
              <Select
                label="Partner Working With"
                name="partnerWorkingWith"
                options={["Private", "Government", "Business", "Other"]}
              />
              <Input label="Profession" name="partnerProfession" />
              <Input label="Designation" name="partnerDesignation" />
              <Select
                label="Annual Income"
                name="partnerAnnualIncome"
                options={[
                  "Below 1 Lakh",
                  "1-3 Lakh",
                  "3-5 Lakh",
                  "5-10 Lakh",
                  "10-20 Lakh",
                  "20-50 Lakh",
                  "50 Lakh+",
                ]}
              />
            </div>
          </section>

          {/* Section 8: Upload Documents & Photos */}
          <section>
            <SectionHeader title="Upload Documents & Photos" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="block">
                <span className="font-medium text-sm text-gray-700">
                  Gov. ID (Image)
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFile(e, setGovIdFile)}
                  className="w-full mt-1 rounded-xl border p-2"
                />
                {govIdFile && (
                  <img
                    src={URL.createObjectURL(govIdFile)}
                    alt="Gov ID Preview"
                    className="mt-2 max-h-32 rounded-xl"
                  />
                )}
              </label>
              <label className="block">
                <span className="font-medium text-sm text-gray-700">
                  Upload Photos
                </span>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={(e) => handleFile(e, setPhotos, true)}
                  className="w-full mt-1 rounded-xl border p-2"
                />
                {photos.length > 0 &&
                  photos.map((p, i) => (
                    <img
                      key={i}
                      src={URL.createObjectURL(p)}
                      alt={`Photo ${i + 1}`}
                      className="mt-2 max-h-32 rounded-xl mr-2 inline-block"
                    />
                  ))}
              </label>
            </div>
          </section>

          {/* Submit Button */}
          <div className="text-right mt-8">
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 disabled:opacity-50 shadow-md"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
