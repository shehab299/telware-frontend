import { useInView } from "../hooks/useInView";
import { story } from "types/story";
import StorySlideCounter from "./StorySlideCounter";
import UserInfo from "./UserInfo";
import { useEffect, useState } from "react";
import { useViewStory } from "../hooks/useViewStory";
import Story from "./Story";
import styled from "styled-components";
import { getElapsedTime } from "utils/helpers";
import StorySliderTooltip from "./StorySliderTooltip";
import { getIcon } from "@data/icons";
import { useDeleteStory } from "../hooks/useDeleteStory";
import StoryViews from "./StoryViews";

interface StorySlideProps {
  userId?: string;
  name: string;
  avatar?: string;
  getNextUserStories: () => void;
  stories: story[];
  onClose: () => void;
}
const StyledContainer = styled.div`
  cursor: pointer;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  gap: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #000;
`;
const StyledSlide = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  overflow-y: hidden;
  overflow-x: hidden;
  width: 60%;
`;
const StyledCloseButton = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  cursor: pointer;
  color: white;
`;
const StyledUserInfo = styled.div`
  position: absolute;
  top: 2rem;
  left: 2.5rem;
  z-index: 100;
`;
function StorySlide(props: StorySlideProps) {
  const { avatar, name, stories, getNextUserStories, onClose } = props;
  const { ref, inView } = useInView({ threshold: 0.5 });
  const { viewStory } = useViewStory();
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { deleteStory } = useDeleteStory();
  const isMine = name == "My Story";

  const handleSlideChange = () => {
    if (index < stories.length - 1) {
      setIndex(index + 1);
    } else {
      getNextUserStories();
      setIndex(0);
    }
  };
  useEffect(() => {
    if (inView && !isMine) {
      viewStory(stories[index]?.id);
    }
  }, [inView, stories, index, viewStory, isMine]);

  const handlePause = () => {
    setIsPaused(!isPaused);
  };
  const handleDelete = () => {
    deleteStory(stories[index].id);
    onClose();
  };
  if (!stories.length) {
    return null;
  }
  return (
    <StyledContainer>
      <StyledCloseButton onClick={onClose}>
        {getIcon("Close")}
      </StyledCloseButton>
      <StyledSlide ref={ref} className="story">
        <StorySlideCounter
          isPaused={isPaused}
          currentIndex={index}
          totalSlides={stories.length}
          onSlideChange={handleSlideChange}
        />
        <StorySliderTooltip
          isMine={isMine}
          onPause={handlePause}
          isPaused={isPaused}
          onDelete={handleDelete}
        />
        <StyledUserInfo>
          <UserInfo
            name={name}
            avatar={avatar || ""}
            isVertical={true}
            elapsedTime={getElapsedTime(stories[index].timestamp)}
          />
        </StyledUserInfo>
        <Story
          content={stories[index].content}
          caption={stories[index].caption || ""}
        />
        {isMine && <StoryViews storyId={stories[index].id} />}
      </StyledSlide>
    </StyledContainer>
  );
}

export default StorySlide;
