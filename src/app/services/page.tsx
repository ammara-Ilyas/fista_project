import Hero from "@/components/widgets/services/Hero";
import AuditCard from "@/components/widgets/services/widgets/AuditCard";
import PromoCard from "@/components/widgets/services/widgets/PromoCard";
import SeoCard from "@/components/widgets/services/widgets/SeoCard";
import React from "react";

const page = () => {
  return (
    <>
      <Hero />
      <AuditCard />
      <PromoCard />
      <SeoCard />
    </>
  );
};

export default page;
