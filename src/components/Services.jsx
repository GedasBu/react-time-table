import Service from "./Service";
import services from "../data/services";

const Services = () => {
  return (
    <>
      {/* <option>Pasirinkite paslaugą</option> */}
      {services.map((obj) => (
        <Service key={obj.id} service={obj.service} />
      ))}
    </>
  );
};
export default Services;
