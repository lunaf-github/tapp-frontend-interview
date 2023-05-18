import styled from "styled-components";
import useThemeContext from "../../../utils/useThemeContext";
import { siteThemes } from "../../../constants/siteThemes";

const Root = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;


function Site(props) {
  const {theme} = useThemeContext();
  
  const SiteTitle = styled.h1`
  font-size: 24px;
  font-weight: 500;
  color: ${siteThemes[theme].secondary};
  margin-bottom: 12px;
  `;

  const SiteDescription = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: ${siteThemes[theme].tertiary};
  `;

  const DocLink = styled.a`
    text-decoration: none;
    font-weight: 500;
    margin-top: 12px;
    color: ${siteThemes[theme].secondary};
    `;

/** Site preview for the Editor page */
  
  return (
    <Root>
      <SiteTitle>StyleAI Frontend Interview ⭐️</SiteTitle>
      <SiteDescription>
        Congratulations on making it to the coding interview for the frontend
        developer internship at StyleAI! In this task, you will be developing a
        'styles' menu in the sidebar of a website editor. This menu will allow
        users to change the theme of their site within the editor. This
        documentation aims to provide you with all the necessary information to
        complete the task successfully.
      </SiteDescription>
      <SiteDescription>
        This task is designed to test your ability to work with React
        components, manage state variables, and utilize local storage. We wish
        you the best of luck in completing this task and look forward to
        reviewing your work.
      </SiteDescription>
      <DocLink
        target="_blank"
        href="https://github.com/tapp-ai/tapp-frontend-interview#readme"
      >
        Read Task Documentation
      </DocLink>
    </Root>
  );
}

export default Site;
