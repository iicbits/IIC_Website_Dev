"use server";

//This file handle the registration form submission
const googleScriptUrl =
  "https://script.google.com/macros/s/AKfycbynbglmEOAvEFkng-UgUwx4fAwkxmr6jFXhI1y3rysEshwANp_ZUG2EFxM7fhlg1FdLXg/exec";

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
};
