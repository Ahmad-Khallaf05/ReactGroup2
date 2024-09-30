import React from 'react'

import '../landing/css/style.css';
import '../landing/css/bootstrap.min.css';


import NavLand from '../landing/components/nav';
import HeroLand from '../landing/components/hero';
// import Category from '../landing/components/categories';
import AboutLand from '../landing/components/about';
import EventLand from '../landing/components/event';
import ProgramLand from '../landing/components/program';
// import BlogLand from '../landing/components/blog';
import TeamLand from '../landing/components/team';
import TestemonialLand from '../landing/components/testemonial';
import Contact from '../landing/components/Contact';
import Login from '../landing/components/login';
import Register from '../landing/components/register';
import FooterLand from '../landing/components/footer';
import GategoryLand from '../landing/components/category';
import ScrollToTopLand from '../landing/components/top';


export default function Land() {
  return (
    <div>
        <NavLand />
        <HeroLand />
        {/* <Category /> */}
        <AboutLand />
        <EventLand />
        <ProgramLand />
        {/* <BlogLand /> */}
        <TeamLand />
        <TestemonialLand />
        <Contact />
        <FooterLand />
        <GategoryLand />
        <ScrollToTopLand />
    </div>
  )
}
