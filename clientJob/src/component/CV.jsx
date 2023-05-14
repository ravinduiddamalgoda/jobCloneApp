import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

// Define the CV data
const cvData = {
  name: 'John Doe',
  education: [
    {
      degree: 'Bachelor of Science',
      institution: 'University of Example',
      year: '2020',
    },
    // Add more education items if needed
  ],
  workExperience: [
    {
      position: 'Software Engineer',
      company: 'Example Inc.',
      duration: '2018 - Present',
    },
    // Add more work experience items if needed
  ],
  skills: ['JavaScript', 'React', 'CSS', 'HTML'],
  contact: {
    email: 'john.doe@example.com',
    phone: '+1 123 456 7890',
  },
};

// Create functional components for CV sections
const EducationSection = () => (
  <View>
    <Text style={styles.sectionTitle}>Education</Text>
    {cvData.education.map((educationItem, index) => (
      <View key={index} style={styles.itemContainer}>
        <Text style={styles.itemTitle}>{educationItem.degree}</Text>
        <Text>{educationItem.institution}</Text>
        <Text>{educationItem.year}</Text>
      </View>
    ))}
  </View>
);

const WorkExperienceSection = () => (
  <View>
    <Text style={styles.sectionTitle}>Work Experience</Text>
    {cvData.workExperience.map((workItem, index) => (
      <View key={index} style={styles.itemContainer}>
        <Text style={styles.itemTitle}>{workItem.position}</Text>
        <Text>{workItem.company}</Text>
        <Text>{workItem.duration}</Text>
      </View>
    ))}
  </View>
);

const SkillsSection = () => (
  <View>
    <Text style={styles.sectionTitle}>Skills</Text>
    <Text>{cvData.skills.join(', ')}</Text>
  </View>
);

const ContactSection = () => (
  <View>
    <Text style={styles.sectionTitle}>Contact</Text>
    <Text>Email: {cvData.contact.email}</Text>
    <Text>Phone: {cvData.contact.phone}</Text>
  </View>
);

// Create the CV component
const CV = () => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>{cvData.name}</Text>
        <EducationSection />
        <WorkExperienceSection />
        <SkillsSection />
        <ContactSection />
      </View>
    </Page>
  </Document>
);

// Styling
const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    padding: 30,
    backgroundColor: '#fff',
  },
  container: {
    margin: 'auto',
    maxWidth: 600,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textDecoration: 'underline',

  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  itemContainer: {
    marginBottom: 10,
  },
  itemTitle: {
    fontWeight: 'bold',
  },
});

// Render the CV component and provide a download link
export const CV_data = () => (
    <div>
    <PDFDownloadLink document={<CV />} fileName="cv.pdf">
      {({ blob, url, loading }) =>
        loading ? 'Generating PDF...' : <a href={url} target="_blank">Download PDF</a>
      }
    </PDFDownloadLink>
  </div>
);


