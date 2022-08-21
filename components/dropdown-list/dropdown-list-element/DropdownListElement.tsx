import * as React from "react";
import { StyledDropdownListElement } from "./styled";
import { ReactNode, useEffect, useRef } from "react";
import { useDropdownListContext } from "../DropdownListContext";
import PlusIcon from "./PlusIcon";
import styled from "styled-components";

const StyledButton = styled.button<{ animate: boolean }>`
  width: 3rem;
  height: 2.2rem;
  transition: transform 400ms;
  transform: rotate(${({ animate }) => (animate ? "45deg" : "0deg")});
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`;

interface DropdownListElementPropsI {
  name: string;
  children: any;
  renderHeader?: () => ReactNode;
  initialOpen?: boolean;
}
function DropdownListElement({
  initialOpen,
  children,
  renderHeader,
  name
}: DropdownListElementPropsI) {
  const { register, toggle, elements } = useDropdownListContext();
  const contentWrapperRef = useRef(null);
  const contentRef = useRef<any>(null);

  useEffect(() => {
    register({ name, open: !!initialOpen });
  }, []);

  const isOpen = () => {
    return elements[name];
  };

  const toggleOpenState = () => {
    toggle(name);
  };

  return (
    <StyledDropdownListElement>
      <div
        style={{
          display: "flex"
        }}
      >
        <div
          style={{
            // put button in the middle (vertically)
            display: "flex",
            alignItems: "center"
          }}
        >
          <StyledButton animate={isOpen()} onClick={toggleOpenState}>
            <PlusIcon active={isOpen()} />
          </StyledButton>
        </div>
        <div>{renderHeader && renderHeader()}</div>
      </div>
      <div
        ref={contentWrapperRef}
        style={{
          transition: "height 400ms",
          height: `${elements[name] ? contentRef.current?.offsetHeight : 0}px`,
          overflow: "hidden"
        }}
      >
        <div ref={contentRef}>{children}</div>
      </div>
    </StyledDropdownListElement>
  );
}

export default DropdownListElement;
