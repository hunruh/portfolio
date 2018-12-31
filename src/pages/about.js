import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import SkillGroup from '../components/about/skillgroup'
import Stat from '../components/about/stat'
import Layout from '../components/layout'
import SEO from '../components/seo'

import styles from '../styles/about.module.scss'

const AboutPage = () => (
  <Layout pageTitle="About">
    <SEO title="About" keywords={[`gatsby`, `application`, `react`]} />
    <h2>Who I Am</h2>
    <p>
      <b>
        I'm a student and software engineer with a strong interest in user
        experience and visual design.
      </b>
      &nbsp;I love minimalist design and software that impacts users. When I'm
      not working on a project, I help lead Cornell's first interdisciplinary
      design organization, compete for the university's varsity lightweight
      rowing team, and play in the occasional chess tournament.
    </p>

    <h2 className={styles.sectionHead}>Skills</h2>
    <SkillGroup points={3} maxPoints={3} title="Expert">
      Java, Python, HTML, CSS, Sass, Javascript, React.js, Unix
    </SkillGroup>
    <SkillGroup points={2} maxPoints={3} title="Proficient">
      C, OCaml, Bootstrap, D3.js, Sketch, Adobe Photoshop, Adobe Illustrator
    </SkillGroup>
    <SkillGroup points={1} maxPoints={3} title="Familiar">
      Numpy, SciPy, Anaconda Data Toolkit
    </SkillGroup>

    <h2 className={styles.sectionHead}>Lifetime Stats</h2>
    <StaticQuery
      query={graphql`
        query {
          chessImage: file(relativePath: { eq: "knight_icon.png" }) {
            childImageSharp {
              fluid(maxWidth: 40) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          skiImage: file(relativePath: { eq: "ski_icon.png" }) {
            childImageSharp {
              fluid(maxWidth: 40) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          parkImage: file(relativePath: { eq: "park_icon.png" }) {
            childImageSharp {
              fluid(maxWidth: 40) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <Stat
            label="Chess Tournaments Played"
            value={73}
            image={<Img fluid={data.chessImage.childImageSharp.fluid} />}
          />
          <Stat
            label="Mountains Skied"
            value={20}
            image={<Img fluid={data.skiImage.childImageSharp.fluid} />}
          />
          <Stat
            label="National Parks Visited"
            value={24}
            image={<Img fluid={data.parkImage.childImageSharp.fluid} />}
          />
        </>
      )}
    />
  </Layout>
)

export default AboutPage
