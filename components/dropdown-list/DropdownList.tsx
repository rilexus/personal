import * as React from "react";
import { DropdownListContextProvider, Elem } from "./DropdownListContext";
import { FC, useState } from "react";

interface Elems {
  [name: string]: boolean; // is open
}

const DropdownList: FC = ({ children }) => {
  const [elements, setElements] = useState<Elems>({});

  const addElement = (elem: Elem) => {
    setElements(el => ({ ...el, [elem.name]: elem.open }));
  };

  const register = (element: Elem) => {
    addElement(element);
  };

  const toggle = (elemName: string) => {
    setElements(() => {
      const newEntries = Object.fromEntries(
        Object.entries(elements).map(([name, open]) => {
          if (name !== elemName) {
            // close all tabs, exept the clicked one
            return [name, false];
          }
          return [name, open];
        }) // close all tabs
      );
      newEntries[elemName] = !newEntries[elemName]; // toggle clicked tab
      return newEntries;
    });
  };

  return (
    <DropdownListContextProvider value={{ register, toggle, elements }}>
      <ul>{children}</ul>
    </DropdownListContextProvider>
  );
};

export default DropdownList;
