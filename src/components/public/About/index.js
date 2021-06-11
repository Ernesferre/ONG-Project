import { Box } from "@chakra-ui/react";
import AboutUs from "./AboutUs";
import Title from "../../Title/Title";
import imgSubtitle from "../../../assets/forBackTitle.jpg"
export const About = () => {
  return (
    <Box>
      <Title image={imgSubtitle} title="Nosotros"/>

      <AboutUs text="Mediante nuestros programas educativos, buscamos incrementar la
          capacidad intelectual, moral y afectiva de las personas de acuerdo con
          la cultura y las normas de convivencia de la sociedad a la que
          pertenecen." />
    </Box>
  );
};

export default About;
