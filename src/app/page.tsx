import FAQAccordion from "@/components/widgets/Accordion";
import Hero from "@/components/widgets/Hero";
import BrandLogos from "@/components/widgets/home/BrandLogos";
import CallToAction from "@/components/widgets/home/CallToAction";
import CaseStudies from "@/components/widgets/home/CaseStudies";
import ContactForm from "@/components/widgets/home/ContactForm";
import Services from "@/components/widgets/home/Services";
import TeamSection from "@/components/widgets/home/TeamSection";
import TestimonialSlider from "@/components/widgets/home/Testimonial";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <BrandLogos />
      <Services />
      <CallToAction />
      <CaseStudies />
      <FAQAccordion />
      <TeamSection />
      {/* <TestimonialSlider /> */}
      <ContactForm />
    </>
  );
};

export default page;
