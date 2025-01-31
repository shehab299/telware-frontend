import styled from "styled-components";

interface CollapsedListProps {
  onOpen: () => void;
  render: (data: any) => JSX.Element;
  list: any[];
}

const StyledCollapsedContainer = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 100%;
  width: 100%;
`;
const StyledCollapsed = styled.div<{ $index: number }>`
  position: absolute;
  z-index: 30 - index;
  right: ${(props) => props.$index * 15 + 20}px;
  top: 0.7rem;
  transform: scale(0.8);
  transition: transform 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
`;

function CollapsedList(Props: CollapsedListProps) {
  const { onOpen, render, list } = Props;
  const displayedItems = list?.slice(0, 3);

  return (
    <StyledCollapsedContainer onClick={onOpen}>
      {displayedItems?.map((element, index) => (
        <StyledCollapsed key={index} $index={index}>
          {render(element)}
        </StyledCollapsed>
      ))}
    </StyledCollapsedContainer>
  );
}

export default CollapsedList;
