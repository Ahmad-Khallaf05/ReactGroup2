import React from 'react'
import './css/style.css';
import './css/bootstrap.min.css';


import NavLand from './components/nav';
import HeroLand from './components/hero';
import Category from './components/categories';
import AboutLand from './components/about';
import EventLand from './components/event';
import ProgramLand from './components/program';
import BlogLand from './components/blog';
import TeamLand from './components/team';
import TestemonialLand from './components/testemonial';
import Contact from './components/Contact';
import Login from './components/login';
import Register from './components/register';
import FooterLand from './components/footer';
import GategoryLand from './components/category';
import ScrollToTopLand from './components/top';

export default function Land() {
  return (
    <div>
          <>
          <NavLand />
          <HeroLand />
          <AboutLand />
          <Category />
          <EventLand />
          <ProgramLand />
          <BlogLand />
          <TeamLand />
          <TestemonialLand />
          <Contact />
          <Login />
          <Register />
          <FooterLand />
          <GategoryLand />
          <ScrollToTopLand />

          </>
    </div>
  )
}
