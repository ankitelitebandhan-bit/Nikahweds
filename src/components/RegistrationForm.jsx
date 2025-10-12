import React, { useState, useRef, useCallback, useEffect } from "react";
import emailjs from "@emailjs/browser";

// ---------- EmailJS Configuration ----------
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

  useEffect(() => {
    if (activeFieldRef.current) {
      const input = document.querySelector(
        `[name="${activeFieldRef.current}"]`
      );
      if (input) input.focus();
    }
  });

  const handleChange = useCallback((e) => {
    const { name, type, value, checked } = e.target;
    activeFieldRef.current = name;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }, []);

  const handleFile = (e, setter, multiple = false) => {
    if (!e || !e.target) return;
    const files = multiple ? Array.from(e.target.files) : e.target.files[0];
    setter(files);
  };

  const compressImage = (file, maxDim = 400, quality = 0.6) =>
    new Promise((resolve, reject) => {
      if (!file) return resolve("");
      const reader = new FileReader();
      reader.onload = (evt) => {
        const img = new Image();
        img.onload = () => {
          let { width, height } = img;
          if (width > height) {
            if (width > maxDim) {
              height = (height * maxDim) / width;
              width = maxDim;
            }
          } else {
            if (height > maxDim) {
              width = (width * maxDim) / height;
              height = maxDim;
            }
          }
          const canvas = document.createElement("canvas");
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, width, height);
          let compressed = canvas.toDataURL("image/jpeg", quality);
          let q = quality;
          while (compressed.length / 1024 > 15 && q > 0.25) {
            q -= 0.1;
            compressed = canvas.toDataURL("image/jpeg", q);
          }
          resolve(compressed);
        };
        img.onerror = reject;
        img.src = evt.target.result;
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });

  const buildParams = async () => {
    const params = { ...form };
    params.timestamp = new Date().toLocaleString();

    if (govIdFile) {
      try {
        const govB64 = await compressImage(govIdFile);
        params.govIdBase64 = `<img src="${govB64}" alt="Gov ID" style="max-width:300px;border-radius:10px;border:1px solid #ccc;"/>`;
      } catch {
        params.govIdBase64 = "Gov ID upload failed";
      }
    } else params.govIdBase64 = "No Gov ID uploaded";

    if (photos.length > 0) {
      try {
        const compressedList = await Promise.all(
          photos.map((p) => compressImage(p))
        );
        params.photoBase64 = compressedList
          .map(
            (b64) =>
              `<img src="${b64}" alt="Photo" style="max-width:300px;margin:5px;border-radius:10px;border:1px solid #ccc;"/>`
          )
          .join("");
      } catch {
        params.photoBase64 = "Photo upload failed";
      }
    } else params.photoBase64 = "No photos uploaded";

    // Ensure optional fields exist
    [
      "partnerCountry",
      "partnerState",
      "partnerCity",
      "partnerCitizenship",
      "partnerGrewUpCountry",
      "partnerHighestQualification",
      "partnerEducationField",
      "partnerWorkingWith",
      "partnerDesignation",
      "partnerAnnualIncome",
    ].forEach((f) => {
      if (!params[f]) params[f] = "";
    });

    Object.keys(params).forEach((k) => {
      if (params[k] == null) params[k] = "";
      else if (typeof params[k] !== "string") params[k] = String(params[k]);
    });

    return params;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const params = await buildParams();
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, params);
      alert("✅ Registration submitted successfully!");
      setForm({});
      setGovIdFile(null);
      setPhotos([]);
    } catch (err) {
      console.error(err);
      alert("❌ Error submitting form.");
    } finally {
      setLoading(false);
    }
  };

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
          {/* Contact Information */}
          <section>
            <SectionHeader title="Contact Information" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Name" name="name" />
              <Input label="Phone" name="phone" />
              <Input label="Email" name="email" type="email" />
              <Input label="Alternate Phone" name="altPhone" />
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

          {/* Client Basic Info */}
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
                  "4'8",
                  "4'9",
                  "4'10",
                  "4'11",
                  "5'0",
                  "5'1",
                  "5'2",
                  "5'3",
                  "5'4",
                  "5'5",
                  "5'6",
                  "5'7",
                  "5'8",
                  "5'9",
                  "5'10",
                  "5'11",
                  "6'0",
                ]}
              />
              <Select
                label="Body Type"
                name="bodyType"
                options={["Slim", "Average", "Athletic", "Heavy"]}
              />
              <Select
                label="Complexion"
                name="complexion"
                options={["Very Fair", "Fair", "Wheatish", "Dusky", "Dark"]}
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

          {/* Education & Profession */}
          <section>
            <SectionHeader title="Education & Profession" />
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
              <Input label="Institute Name" name="instituteName" />
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

          {/* Family Details */}
          <section>
            <SectionHeader title="Family Details" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Select
                label="Father Occupation"
                name="fatherOccupation"
                options={["Business", "Job", "Retired", "Other"]}
              />
              <Select
                label="Mother Occupation"
                name="motherOccupation"
                options={["Homemaker", "Job", "Business", "Retired", "Other"]}
              />
              <Input label="Brothers" name="numBrothers" type="number" />
              <Input
                label="Married Brothers"
                name="marriedBrothers"
                type="number"
              />
              <Input label="Sisters" name="numSisters" type="number" />
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
                label="Family Values"
                name="familyValues"
                options={["Traditional", "Moderate", "Liberal"]}
              />
              <Select
                label="Family Affluence"
                name="familyAffluence"
                options={["Low Class", "Middle Class", "Upper Class"]}
              />
            </div>
          </section>

          {/* Partner Preferences */}
          <section>
            <SectionHeader title="Partner Preferences" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input label="Min Age" name="minAge" type="number" />
              <Input label="Max Age" name="maxAge" type="number" />
              <Input label="Preferred Location" name="preferredLocation" />
              <Select
                label="Marital Status"
                name="partnerMaritalStatus"
                options={["Open to All", "Single", "Divorced", "Widowed"]}
              />
              <Select
                label="Religion"
                name="partnerReligion"
                options={[
                  "Open to All",
                  "Hindu",
                  "Muslim",
                  "Christian",
                  "Other",
                ]}
              />
              <Input label="Profession" name="partnerProfession" />
              <Input label="Country" name="partnerCountry" />
              <Input label="State" name="partnerState" />
              <Input label="City" name="partnerCity" />
              <Input label="Citizenship" name="partnerCitizenship" />
              <Input label="Country Grew Up" name="partnerGrewUpCountry" />
              <Input
                label="Highest Qualification"
                name="partnerHighestQualification"
              />
              <Input label="Education Field" name="partnerEducationField" />
              <Input label="Working With" name="partnerWorkingWith" />
              <Input label="Designation" name="partnerDesignation" />
              <Input label="Annual Income" name="partnerAnnualIncome" />
            </div>
          </section>

          {/* Upload Documents & Photos */}
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
                    alt="Gov ID"
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
                {photos.map((p, i) => (
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
