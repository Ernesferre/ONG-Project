import { Wrap, WrapItem } from "@chakra-ui/layout";
import Cards from "../../Cards/Card";
import { Link } from "react-router-dom";

const arrMocks = [
  {
    id: 1,
    name: "Apoyo escolar",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://via.placeholder.com/150",
    createdAt: new Date("Jun 2 2021"),
  },
  {
    id: 2,
    name: "Campeonatos interbarriales",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://via.placeholder.com/150",
    createdAt: new Date("Jun 2 2021"),
  },
  {
    id: 3,
    name: "Merienda en el parque",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://via.placeholder.com/150",
    createdAt: new Date("Jun 2 2021"),
  },
  {
    id: 4,
    name: "Juegos y ayuda escolar",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://via.placeholder.com/150",
    createdAt: new Date("Jun 2 2021"),
  },
  {
    id: 5,
    name: "Juegos y ayuda escolar",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://via.placeholder.com/150",
    createdAt: new Date("Jun 2 2021"),
  },
  {
    id: 6,
    name: "Juegos y ayuda escolar",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://via.placeholder.com/150",
    createdAt: new Date("Jun 2 2021"),
  },
];

const NewsList = () => {
  return (
    <Wrap
      direction="row"
      justify="center"
      spacing={10}
      paddingX="10px"
      paddingY={{ base: "6", sm: "12" }}
      
    >
      {arrMocks.map((item) => (
        <WrapItem>
        <Link
          style={{margin: "0"}}
          to={`novedades/${item.id}`}
          key={item.id}
        >

            <Cards
              image={item.image}
              title={item.name}
              description={item.description}
              paddingBottom={6}
            />

        </Link>
        </WrapItem>
      ))}
    </Wrap>
  );
};
export default NewsList;
