import { Input } from "@chakra-ui/input";
import { Text } from "@chakra-ui/layout";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import React from "react";

export const CreateOrEditForm = ({
  name,
  setName,
  description,
  setDescription,
}) => {
  return (
    <>
      <Text
        fontSize="1.3em"
        color="gray.500"
        textAlign="initial"
        marginTop="1em"
      >
        Título
      </Text>
      <Input
        _focus={{ bg: "white" }}
        _hover={{ bg: "gray.100" }}
        bg="white"
        variant="filled"
        value={name}
        placeholder="Título"
        onChange={(e) => setName(e.target.value)}
      />
      <Text
        fontSize="1.3em"
        color="gray.500"
        textAlign="initial"
        marginTop="1em"
      >
        Descripción
      </Text>
      <CKEditor
        editor={ClassicEditor}
        data={description}
        id="description"
        onReady={(editor) => {}}
        onChange={(event, editor) => {
          const data = editor.getData();
          setDescription(data);
        }}
        onBlur={(event, editor) => {}}
        onFocus={(event, editor) => {}}
      />
    </>
  );
};
