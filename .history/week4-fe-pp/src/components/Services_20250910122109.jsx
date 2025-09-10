import { useState } from "react";
import { services } from "../data";
import Title from "./Title";
import Service from "./Service";

const Services = () => {
  // put services array into state
  const [servicesData, setServicesData] = useState(services);

  return (
    <section className="section services" id="services">
      <Title title="our" subtitle="services" />

      <div className="section-center services-center">
        {servicesData.map((service) => {
          return <Service {...service} key={service.id} />;
        })}
      </div>
    </section>
  );
};
export default Services;