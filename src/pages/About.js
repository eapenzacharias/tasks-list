import React from 'react';
import { Routes, Route } from 'react-router-dom';

const About = () => {
  const aboutData = [
    {
      slug: 'app',
      title: 'About the App',
      description:
        (
          <>
            <p>
              In this app, you can add, delete, submit and edit items.
              To edit items, simply double click on it.
              Once you are done, press the enter key to resubmit.
              This app will persist your data in the browser local storage.
              So whether you reload, close your app or reopened it,
              you still have access to your to-dos items.
            </p>
          </>
        ),
    },
    {
      slug: 'me',
      title: 'About the Author',
      description:
        (
          <>
            <p>
              This app was recreated by Eapen Zacharias.
              A Full-Stack Developer looking for new opportunities.
              You can connect me via
              <a href="https://de.linkedin.com/in/eapenzac" target="_blank" rel="noreferrer"> LinkedIn </a>
              or
              <a href="https://github.com/eapenzacharias" target="_blank" rel="noreferrer"> Github </a>
            </p>
          </>
        ),
    },
  ];

  const page = (slug) => {
    const aboutContent = aboutData.find((item) => item.slug === slug);
    const { title, description } = aboutContent;
    return (
      <>
        <h1>{title}</h1>
        <div>{description}</div>
      </>
    );
  };
  return (
    <Routes>
      <Route path="app" element={page('app')} />
      <Route path="me" element={page('me')} />
    </Routes>
  );
};

export default About;
