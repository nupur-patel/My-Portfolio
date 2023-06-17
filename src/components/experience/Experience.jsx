import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import './experience.css';

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front-end Development</h3>
          <div className="experience__content">
          <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>HTML</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>CSS</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>jQuery</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>React</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Redux</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>SCSS</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Tailwind</h4>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Back-end Development</h3>
          <div className="experience__content">
          <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Python</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Django</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Redis</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>MySQL</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Swagger</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Celery</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Sentry</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Docker</h4>
            </article>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience