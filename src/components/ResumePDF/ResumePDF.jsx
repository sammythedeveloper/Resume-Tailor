import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: '0.5in 0.75in',
    fontFamily: 'Times-Roman',
    fontSize: 11,
  },
  header: {
    textAlign: 'center',
    marginBottom: 12,
    paddingBottom: 6,
  },
  name: {
    fontSize: 22,
    fontFamily: 'Times-Bold',
    marginBottom: 4,
  },
  contact: {
    fontSize: 11,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  contactItem: {
    marginHorizontal: 4,
  },
  section: {
    marginBottom: 0,
  },
  sectionTitle: {
    fontSize: 9.5,
    textTransform: 'uppercase',
    marginBottom: 5,
    paddingBottom: 2,
    borderBottom: '1pt solid black',
    letterSpacing: 0.5,
    marginLeft: -10,
    marginRight: -10,
    paddingLeft: 0,
  },
  sectionTitleFirstLetter: {
    fontSize: 12.5,
  },
  entryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  entryLeft: {
    flex: 1,
  },
  entryRight: {
    alignItems: 'flex-end',
    minWidth: 100,
  },
  entryTitle: {
    fontSize: 12,
    fontFamily: 'Times-Bold',
    marginBottom: 2,
  },
  entrySubtitle: {
    fontSize: 11,
    fontFamily: 'Times-Italic',
  },
  entryDate: {
    fontSize: 10,
    fontFamily: 'Times-Bold',
    textAlign: 'right',
    marginBottom: 2,
  },
  entryLocation: {
    fontSize: 10,
    fontFamily: 'Times-Italic',
    textAlign: 'right',
  },
  bulletPoint: {
    fontSize: 11,
    marginLeft: 20,
    marginBottom: 2,
    flexDirection: 'row',
  },
  bulletSymbol: {
    width: 10,
  },
  bulletText: {
    flex: 1,
  },
  projectLinks: {
    fontSize: 11,
    fontFamily: 'Times-Italic',
  },
  techStack: {
    fontSize: 11,
    fontFamily: 'Times-Bold',
  },
  skillEntry: {
    fontSize: 11,
    marginBottom: 4,
  },
  skillTitle: {
    fontFamily: 'Times-Bold',
  },
  link: {
    color: 'black',
    textDecoration: 'none',
  },
});

export function ResumePDF({ data }) {
  const { personalInfo, education, workExperience, projects, technicalSkills } =
    data;

  const renderBullets = (description) => {
    if (!description) return null;
    const items = description.split('\n').filter((line) => line.trim());
    return items.map((item, index) => (
      <View key={index} style={styles.bulletPoint}>
        <Text style={styles.bulletSymbol}>•</Text>
        <Text style={styles.bulletText}>{item}</Text>
      </View>
    ));
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

  const renderSectionTitle = (title) => {
    const words = title.split(' ');

    return (
      <Text style={styles.sectionTitle}>
        {words.map((word, index) => {
          const firstLetter = word.charAt(0).toUpperCase();
          const restOfWord = word.slice(1).toUpperCase();

          return (
            <Text key={index}>
              <Text style={styles.sectionTitleFirstLetter}>{firstLetter}</Text>
              {restOfWord}
              {index < words.length - 1 && ' '}{' '}
            </Text>
          );
        })}
      </Text>
    );
  };

  return (
    <Document>
      <Page size="LETTER" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>
            {personalInfo.firstName} {personalInfo.lastName}
          </Text>
          <View style={styles.contact}>
            {personalInfo.phone && (
              <Text style={styles.contactItem}>{personalInfo.phone}</Text>
            )}
            {personalInfo.email && (
              <>
                <Text style={styles.contactItem}>|</Text>
                <Text style={styles.contactItem}>{personalInfo.email}</Text>
              </>
            )}
            {personalInfo.linkedin && (
              <>
                <Text style={styles.contactItem}>|</Text>
                <Link
                  src={personalInfo.linkedin}
                  style={[styles.contactItem, styles.link]}
                >
                  LinkedIn
                </Link>
              </>
            )}
            {personalInfo.github && (
              <>
                <Text style={styles.contactItem}>|</Text>
                <Link
                  src={personalInfo.github}
                  style={[styles.contactItem, styles.link]}
                >
                  GitHub
                </Link>
              </>
            )}
            {personalInfo.portfolio && (
              <>
                <Text style={styles.contactItem}>|</Text>
                <Link
                  src={personalInfo.portfolio}
                  style={[styles.contactItem, styles.link]}
                >
                  Portfolio
                </Link>
              </>
            )}
          </View>
        </View>

        {/* Education */}
        {education.length > 0 && (
          <View style={styles.section}>
            {renderSectionTitle('Education')}
            {education.map((edu) => (
              <View key={edu.id} style={{ marginBottom: 8 }}>
                <View style={styles.entryHeader}>
                  <View style={styles.entryLeft}>
                    <Text style={styles.entryTitle}>{edu.university}</Text>
                    <Text style={styles.entrySubtitle}>{edu.degree}</Text>
                  </View>
                  <View style={styles.entryRight}>
                    <Text style={styles.entryDate}>
                      {edu.startDate} – {edu.endDate}
                    </Text>
                    {edu.location && (
                      <Text style={styles.entryLocation}>{edu.location}</Text>
                    )}
                  </View>
                </View>
                {renderBullets(edu.description)}
              </View>
            ))}
          </View>
        )}

        {/* Work Experience */}
        {workExperience.length > 0 && (
          <View style={styles.section}>
            {renderSectionTitle('Work Experience')}
            {workExperience.map((work) => (
              <View key={work.id} style={{ marginBottom: 8 }}>
                <View style={styles.entryHeader}>
                  <View style={styles.entryLeft}>
                    <Text style={styles.entryTitle}>{work.position}</Text>
                    <Text style={styles.entrySubtitle}>{work.company}</Text>
                  </View>
                  <View style={styles.entryRight}>
                    <Text style={styles.entryDate}>
                      {work.startDate} – {work.endDate}
                    </Text>
                    {work.location && (
                      <Text style={styles.entryLocation}>{work.location}</Text>
                    )}
                  </View>
                </View>
                {renderBullets(work.description)}
              </View>
            ))}
          </View>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <View style={styles.section}>
            {renderSectionTitle('Projects')}
            {projects.map((proj) => (
              <View key={proj.id} style={{ marginBottom: 8 }}>
                <View style={styles.entryHeader}>
                  <View style={styles.entryLeft}>
                    <Text style={styles.entryTitle}>
                      {proj.name}
                      {(proj.website || proj.sourceCode) && (
                        <Text style={styles.projectLinks}>
                          {' | '}
                          {proj.website && (
                            <Link src={proj.website} style={styles.link}>
                              Website
                            </Link>
                          )}
                          {proj.website && proj.sourceCode && ' | '}
                          {proj.sourceCode && (
                            <Link src={proj.sourceCode} style={styles.link}>
                              Source Code
                            </Link>
                          )}
                        </Text>
                      )}
                    </Text>
                  </View>
                  <View style={styles.entryRight}>
                    {proj.technologies && (
                      <Text style={styles.techStack}>
                        {renderTechnologies(proj.technologies)}
                      </Text>
                    )}
                  </View>
                </View>
                {renderBullets(proj.description)}
              </View>
            ))}
          </View>
        )}

        {/* Technical Skills */}
        {technicalSkills.length > 0 && (
          <View style={styles.section}>
            {renderSectionTitle('Technical Skills')}
            {technicalSkills.map((skill) => (
              <Text key={skill.id} style={styles.skillEntry}>
                <Text style={styles.skillTitle}>{skill.title}:</Text>
                {skill.skills}
              </Text>
            ))}
          </View>
        )}
      </Page>
    </Document>
  );
}
