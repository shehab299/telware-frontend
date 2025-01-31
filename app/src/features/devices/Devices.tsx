import styled from "styled-components";
import Lottie from "lottie-react";
import { useGetAllSessions } from "./hooks/useGetAllSessions";
import { useGetCurrentSession } from "./hooks/useGetCurrentSessions";
import SessionItem from "./components/SessionItem";
import laptopAnimation from "@data/animations/devices.json";
import { DoDisturbOnOutlined } from "@mui/icons-material";
import Icon from "@components/Icon";
import { useLogoutOtherSessions } from "./hooks/useLogoutOtherSessions";

const SideBarContainer = styled.div`
  overflow-y: auto;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    min-height: 100dvh;
    background-color: var(--color-background-secondary);
  }
`;

const SettingSection = styled.section`
  padding: 1rem 1.5rem;
  background-color: var(--color-background);

  &:not(:last-child) {
    border-bottom: 1rem solid var(--color-border);
  }
`;

const SectionTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 1rem;
  color: var(--color-text-secondary);
`;

const HeaderAnimatinoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 100%;

  & > div {
    max-width: 200px;
  }
`;

const TerminateOtherSessionsButton = styled.button`
  color: var(--color-error);
  background-color: var(--color-background);
  font-size: 1rem;
  border: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

function Devices() {
  const { data: allDevices } = useGetAllSessions();
  const { data: activeSession } = useGetCurrentSession();
  const { logoutOtherSessions } = useLogoutOtherSessions();

  const handleLogoutOthers = () => {
    logoutOtherSessions();
  };

  return (
    <SideBarContainer>
      <SettingSection>
        <HeaderAnimatinoContainer>
          <Lottie animationData={laptopAnimation} />
        </HeaderAnimatinoContainer>
      </SettingSection>
      <SettingSection>
        <SectionTitle>THIS DEVICE</SectionTitle>
        <SessionItem session={activeSession} />
        <TerminateOtherSessionsButton onClick={handleLogoutOthers}>
          <Icon>
            <DoDisturbOnOutlined fontSize="large" />
          </Icon>
          <span>Terminate All Other Sessions</span>
        </TerminateOtherSessionsButton>
      </SettingSection>
      <SettingSection>
        <SectionTitle>Active sessions</SectionTitle>
        {allDevices?.map((session) => (
          <SessionItem key={session.lastSeenTime} session={session} />
        ))}
      </SettingSection>
    </SideBarContainer>
  );
}

export default Devices;
