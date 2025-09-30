"use server";

//This file handle the registration form submission and contact us page data
const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL_REGISTRATION;
export const registrationData = async (formData) => {
  const email = formData.email;
  const fullName = formData.fullName;
  const rollNumber = formData.rollNumber;
  const contactNumber = formData.contactNumber;
  const department = formData.department;
  const technicalSkills = formData.technicalSkills;
  const additionalSkills = formData.additionalSkills;
  const managementExperience = formData.managementExperience;
  const communicationSkills = formData.communicationSkills;
  const writingSkills = formData.writingSkills;
  const startupIdea = formData.startupIdea;
  const whyJoinIIC = formData.whyJoinIIC;
  const queries = formData.queries;

  const response = await fetch(googleScriptUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      fullName,
      rollNumber,
      contactNumber,
      department,
      technicalSkills,
      additionalSkills,
      managementExperience,
      communicationSkills,
      writingSkills,
      startupIdea,
      whyJoinIIC,
      queries,
    }),
  });

  const result = await response.json();

  return result;
};

const googleScriptUrlContactUs = process.env.GOOGLE_SCRIPT_URL_CONTACT_FORM;

export const contactUsData = async (formData) => {
  const name = formData.name;
  const email = formData.email;
  const message = formData.message;

  const response = await fetch(googleScriptUrlContactUs, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      name,
      message,
    }),
  });

  const result = await response.json();

  return result;
};
