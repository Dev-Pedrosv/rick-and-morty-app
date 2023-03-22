import { Container } from "./style";
import GithubImage from "../../assets/github.svg";
import LinkedinImage from "../../assets/linkedin.svg";
import CodeImage from "../../assets/code.svg";

export const SocialLinks = () => {
  const GITHUB_LINK = "https://github.com/Dev-Pedrosv";
  const LINKEDIN_LINK = "https://www.linkedin.com/in/pedroh-dev/";

  return (
    <Container>
      <div>
        <a href={GITHUB_LINK} target="_blank">
          <img src={GithubImage} alt="Github" />
        </a>

        <a href={LINKEDIN_LINK} target="_blank">
          <img src={LinkedinImage} alt="Linkedin" />
        </a>
      </div>

      <div>
        <img src={CodeImage} alt="Code" />
        Pedro Silva
      </div>
    </Container>
  );
};
