import './ResumePreview.css';

export function ResumePreview({ data }) {
  const renderDescriptionList = (description) => {
    if (!description || description.trim() === '') return null;

    const items = description
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

    if (items.length === 0) return null;

    return (
      <ul className="description-list">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  };

  const renderTechnologies = (technologies) => {
    if (!technologies || technologies.trim() === '') return null;

    const techList = technologies
      .split(',')
      .map((tech) => tech.trim())
      .filter((tech) => tech.length > 0);

    if (techList.length === 0) return null;

    return techList.join(' | ');
  };

  const { personalInfo, education, workExperience, projects, technicalSkills } =
    data;

  return (
    <div className="resume">
      {/* Personal Information */}
      <header className="resume-header">
        <h1 className="resume-name">
          {personalInfo.firstName} {personalInfo.lastName}
        </h1>
        <div className="resume-contact">
          {personalInfo.phone && (
            <span className="contact-item">{personalInfo.phone}</span>
          )}
          {personalInfo.email && (
            <>
              <span className="separator">|</span>
              <a href={`mailto:${personalInfo.email}`} className="contact-item">
                {personalInfo.email}
              </a>
            </>
          )}
          {personalInfo.linkedin && (
            <>
              <span className="separator">|</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                LinkedIn
              </a>
            </>
          )}
          {personalInfo.github && (
            <>
              <span className="separator">|</span>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                GitHub
              </a>
            </>
          )}
          {personalInfo.portfolio && (
            <>
              <span className="separator">|</span>
              <a
                href={personalInfo.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                Portfolio
              </a>
            </>
          )}
        </div>
      </header>

      {/* Education */}
      {education.length > 0 &&
        education.some((edu) => edu.university || edu.degree) && (
          <section className="resume-section">
            <h2 className="section-title">Education</h2>
            <div className="section-content">
              {education.map((edu) => {
                if (!edu.university && !edu.degree) return null;
                return (
                  <div key={edu.id} className="resume-entry">
                    <div className="entry-header">
                      <div className="entry-left">
                        <h3 className="entry-title">{edu.university}</h3>
                        <p className="entry-subtitle">{edu.degree}</p>
                      </div>
                      <div className="entry-right">
                        {(edu.startDate || edu.endDate) && (
                          <p className="entry-date">
                            {edu.startDate}{' '}
                            {edu.startDate && edu.endDate && '–'} {edu.endDate}
                          </p>
                        )}{' '}
                        {edu.location && (
                          <p className="entry-location">{edu.location}</p>
                        )}
                      </div>
                    </div>
                    {renderDescriptionList(edu.description)}
                  </div>
                );
              })}
            </div>
          </section>
        )}

      {/* Experience */}
      {workExperience.length > 0 &&
        workExperience.some((work) => work.company || work.position) && (
          <section className="resume-section">
            <h2 className="section-title">Work Experience</h2>
            <div className="section-content">
              {workExperience.map((work) => {
                if (!work.company && !work.position) return null;
                return (
                  <div key={work.id} className="resume-entry">
                    <div className="entry-header">
                      <div className="entry-left">
                        <h3 className="entry-title">{work.position}</h3>
                        <p className="entry-subtitle">{work.company}</p>
                      </div>
                      <div className="entry-right">
                        {(work.startDate || work.endDate) && (
                          <p className="entry-date">
                            {work.startDate}{' '}
                            {work.startDate && work.endDate && '–'}{' '}
                            {work.endDate}
                          </p>
                        )}
                        {work.location && (
                          <p className="entry-location">{work.location}</p>
                        )}
                      </div>
                    </div>
                    {renderDescriptionList(work.description)}
                  </div>
                );
              })}
            </div>
          </section>
        )}

      {/* Projects */}
      {projects.length > 0 && projects.some((proj) => proj.name) && (
        <section className="resume-section">
          <h2 className="section-title">Projects</h2>
          <div className="section-content">
            {projects.map((proj) => {
              if (!proj.name) return null;
              return (
                <div key={proj.id} className="resume-entry">
                  <div className="entry-header">
                    <div className="entry-left">
                      <h3 className="entry-title">
                        {proj.name}
                        {(proj.website || proj.sourceCode) && (
                          <span className="project-links">
                            {' | '}
                            {proj.website && (
                              <a
                                href={proj.website}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Website
                              </a>
                            )}
                            {proj.sourceCode && (
                              <>
                                {proj.website && (
                                  <span className="separator">|</span>
                                )}
                                <a
                                  href={proj.sourceCode}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Source Code
                                </a>
                              </>
                            )}
                          </span>
                        )}
                      </h3>
                    </div>
                    <div className="entry-right">
                      {proj.technologies && (
                        <span className="tech-stack">
                          {renderTechnologies(proj.technologies)}
                        </span>
                      )}
                    </div>
                  </div>
                  {renderDescriptionList(proj.description)}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Technical Skills */}
      {technicalSkills.length > 0 &&
        technicalSkills.some((skill) => skill.title || skill.skills) && (
          <section className="resume-section">
            <h2 className="section-title">Technical Skills</h2>
            <div className="section-content">
              {technicalSkills.map((skill) => {
                if (!skill.title && !skill.skills) return null;
                return (
                  <div key={skill.id} className="skill-entry">
                    <span className="skill-category">{skill.title}:</span>{' '}
                    <span className="skill-list">{skill.skills}</span>
                  </div>
                );
              })}
            </div>
          </section>
        )}
    </div>
  );
}
