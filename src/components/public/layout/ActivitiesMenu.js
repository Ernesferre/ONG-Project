import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const ActivitiesMenu = () => {
  const { organization } = useSelector((state) => ({ ...state }));
  return (
    <Menu>
      <MenuButton
        as={Button}
        fontWeight="regular"
        rightIcon={<ChevronDownIcon />}
        padding="0"
        _hover={{ bg: "gray.100", color: "brandRed.200" }}
        _active={{ bg: "gray.100", borderColor: "gray.100" }}
        _focus={{ bg: "gray.100", borderColor: "gray.100" }}
      >
        Actividades
      </MenuButton>
      <MenuList>
        <MenuItem _hover={{ color: "brandRed.200" }}>
          <Link to="/actividades">Todas las actividades</Link>
        </MenuItem>
        {organization.activitiesData
          ? organization.activitiesData.map((activity) => (
              <MenuItem key={activity.id} _hover={{ color: "brandRed.200" }}>
                <Link to={`/actividades/${activity.id}`}>{activity.name}</Link>
              </MenuItem>
            ))
          : "Loading..."}
      </MenuList>
    </Menu>
  );
};
