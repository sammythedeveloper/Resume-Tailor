import { useState } from "react";
import "./App.css";
import {
  AccordionSection,
  Summary,
  PersonalInfo,
  ExperienceSection,
  ResumePreview,
  ResumePDF,
} from "./components";
import { defaultData } from "./default-data";

import { pdf } from "@react-pdf/renderer";

function App() {
  const [data, setData] = useState(defaultData);

  console.log("App data state:", data);

  const handleSectionUpdate = (section, newData) => {
    setData((prevData) => ({
      ...prevData,
      [section]: newData,
    }));
    // console.log(`Updated ${section}:`, newData);
  };

  const educationFields = [
    { name: "university", label: "School", type: "text" },
    { name: "degree", label: "Course", type: "text" },
    { name: "description", label: "Description", type: "textarea" },
    { name: "startDate", label: "Start Date", type: "text" },
    { name: "endDate", label: "End Date", type: "text" },
    { name: "location", label: "Location", type: "text" },
  ];

  const getEducationTitle = (item) => {
    return item.university || item.degree || "New Education";
  };

  const workFields = [
    { name: "company", label: "Company", type: "text" },
    { name: "position", label: "Position", type: "text" },
    { name: "description", label: "Description", type: "textarea" },
    { name: "startDate", label: "Start Date", type: "text" },
    { name: "endDate", label: "End Date", type: "text" },
    { name: "location", label: "Location", type: "text" },
  ];

  const getWorkTitle = (item) => {
    return item.company || item.position || "New Work Experience";
  };

  const projectsFields = [
    { name: "name", label: "Project Name", type: "text" },
    { name: "website", label: "Website", type: "text" },
    { name: "sourceCode", label: "Source Code", type: "text" },
    { name: "description", label: "Description", type: "textarea" },
    {
      name: "technologies",
      label: "Technologies (comma separated)",
      type: "text",
    },
  ];

  const getProjectTitle = (item) => {
    return item.name || "New Project";
  };

  const technicalSkillsFields = [
    { name: "title", label: "Skill Title", type: "text" },
    { name: "skills", label: "Skills (comma separated)", type: "text" },
  ];

  const getTechnicalSkillsTitle = (item) => {
    return item.title || "New Technical Skills";
  };

  const handleDownloadPDF = async () => {
    try {
      const blob = await pdf(<ResumePDF data={data} />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `${data.personalInfo.firstName}_${data.personalInfo.lastName}_CV.pdf`;
      link.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Error al generar el PDF. Por favor intenta de nuevo.");
    }
  };

  // console.log('Current CV Data:', data.education);

  return (
    <>
      {/* Header */}
      <header className="header">
        <h2>Resume Tailor</h2>
        <p>Easy way to Tailor your Resume</p>
      </header>
      {/* Main */}
      <div className="cv-container">
        <div className="cv-editor">
          {/* Personal Information */}
          <AccordionSection
            icon="person"
            title="Personal Information"
            defaultOpen={true}
          >
            <PersonalInfo
              data={data.personalInfo}
              onChange={(newData) =>
                handleSectionUpdate("personalInfo", newData)
              }
            />
          </AccordionSection>

          {/* Summary */}
          <AccordionSection icon="summary" title="Summary">
            <Summary
              data={data.summary}
              onChange={(newSummary) =>
                handleSectionUpdate("summary", newSummary)
              }
            />
          </AccordionSection>

          {/* Education */}
          <AccordionSection icon="education" title="Education">
            <ExperienceSection
              items={data.education}
              initialItemData={{
                id: "",
                university: "",
                degree: "",
                description: "",
                startDate: "",
                endDate: "",
                location: "",
              }}
              fields={educationFields}
              sectionTitle="Education"
              onUpdateItems={(newData) =>
                handleSectionUpdate("education", newData)
              }
              getTitleFromItem={getEducationTitle}
            />
          </AccordionSection>
          {/* Work Experience */}
          <AccordionSection icon="work" title="Work Experience">
            <ExperienceSection
              items={data.workExperience}
              initialItemData={{
                id: "",
                company: "",
                position: "",
                description: "",
                startDate: "",
                endDate: "",
                location: "",
              }}
              fields={workFields}
              sectionTitle="Work Experience"
              onUpdateItems={(newData) =>
                handleSectionUpdate("workExperience", newData)
              }
              getTitleFromItem={getWorkTitle}
            />
          </AccordionSection>
          {/* Projects */}
          <AccordionSection icon="projects" title="Projects">
            <ExperienceSection
              items={data.projects}
              initialItemData={{
                id: "",
                name: "",
                website: "",
                sourceCode: "",
                description: "",
                technologies: "",
              }}
              fields={projectsFields}
              sectionTitle="Projects"
              onUpdateItems={(newData) =>
                handleSectionUpdate("projects", newData)
              }
              getTitleFromItem={getProjectTitle}
            />
          </AccordionSection>
          {/* Technical Skills */}
          <AccordionSection icon="skills" title="Technical Skills">
            <ExperienceSection
              items={data.technicalSkills}
              initialItemData={{
                id: "",
                title: "",
                skills: "",
              }}
              fields={technicalSkillsFields}
              sectionTitle="Technical Skills"
              onUpdateItems={(newData) =>
                handleSectionUpdate("technicalSkills", newData)
              }
              getTitleFromItem={getTechnicalSkillsTitle}
            />
          </AccordionSection>
        </div>

        {/* Resume Preview */}
        <div className="cv-preview">
          <ResumePreview data={data} />
          <div className="preview-size">A4 preview</div>
        </div>
      </div>
      <button className="download-btn" onClick={handleDownloadPDF}>
        <svg className="icon" aria-hidden="true">
          <use href="#icon-download"></use>
        </svg>
        Download PDF
      </button>
      {/* Footer */}
      <footer className="footer">
        <p>
          &copy; 2025 Designed and developed by{" "}
          <a
            href="https://github.com/sammythedeveloper"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <svg className="icon" aria-hidden="true">
              <use href="#icon-github"></use>
            </svg>
            Samson Daba
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
