import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          BESIAN KODRA
          <br /> - - Developer - -
        </BigTitle>
        <Subtitle>
          This is a portfolio site I built using Gatsby. I needed a place where I could periodically upload work to show
          potential employers and this is what I came up with. It's a work-in-progress, but it should work just fine for
          my Web Programming 2 final. Enjoy the floating geometry.
        </Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Farmer Game"
            link="https://github.com/BesianK/farmer-game"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            This project was my first GUI/non-console based app in C#
          </ProjectCard>
          <ProjectCard
            title="Tic Tac Toe"
            link="https://github.com/BesianK/tic-tac-toe"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            Tic Tac Toe in WPF
          </ProjectCard>
          <ProjectCard
            title="Good Quotes"
            link="https://mcaweb.matc.edu/kodrab/160/assignment-8/index.html"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            JavaScript website with a few quotes
          </ProjectCard>
          <ProjectCard
            title="Product Reviews"
            link="https://mcaweb.matc.edu/kodrab/160/assignment-4/index.html"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            A simple HTML/CSS review website with some JavaScript
          </ProjectCard>
          <ProjectCard
            title="Product Reviews"
            link="https://goofy-einstein-6e2c8c.netlify.com/"
            bg="linear-gradient(to right, #003973 0%, #e5e5be 100%)"
          >
            A Gatsby review site on Netlify with Contentful
          </ProjectCard>
          <ProjectCard
            title="Custom Homes"
            link="https://github.com/BesianK/Custom-Homes"
            bg="linear-gradient(to right, #fdc830 0%, #f37335 100%)"
          >
            A Java app with GUI
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Besian Kodra" />
          <AboutSub>
            In constant beta: Always learning. Committed to forever grow and evolve by remaining curious.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          Certified Willow Ambulatory Analyst, experienced IT Help Desk Analyst and Certified Pharmacy Technician with a
          demonstrated history of working in the hospital and health care industry. Skilled in Java, C#, development
          with React/Gatsby, JavaScript, CSS and HTML. Eager to work in a challenging environment using Agile principles
          and beliefs. Strong healthcare services professional with an Associate degree in Web and Software Development
          from Milwaukee Area Technical College and continuing education to earn a Bachelor’s degree in Computer
          Science.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:kodrab@gmatc.matc.edu">Hi</a> or find me on other platforms:{' '}
            <a href="https://twitter.com/Besian52722063">Twitter</a> and{' '}
            <a href="https://www.linkedin.com/in/besian-kodra/">LinkedIn</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 | Besian Kodra's Web Programming 2 Final Project | {' '}
          <a href="https://github.com/itdev164-sp2019/besian-kodra-p3">Github Repository</a> | Made by{' '}
          <a href="https://www.linkedin.com/in/besian-kodra/">Besian Kodra</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
