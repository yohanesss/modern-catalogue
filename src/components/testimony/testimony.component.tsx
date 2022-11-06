import React from "react";
import Slider from "react-slick";
import {
  TestimonyAvatar,
  TestimonyCard,
  TestimonyContainer,
  TestimonyDetailContainer,
  UserJob,
  UserName,
  UserStory,
} from "./testimony.styled";
import testi1 from "../../assets/testi-1.jpeg";
import testi2 from "../../assets/testi-2.jpeg";
import testi3 from "../../assets/testi-3.jpeg";
import testi4 from "../../assets/testi-4.jpeg";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Testimony = () => {
  return (
    <TestimonyContainer>
      <TestimonyCard>
        <TestimonyAvatar src={testi1} alt="testimony" />
        <TestimonyDetailContainer>
          <UserName>Megan Zorothy</UserName>
          <UserStory>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
            accusantium doloremque, similique quo odio, aut officia possimus
            accusamus vitae minima, ducimus minus perspiciatis harum.
            Exercitationem debitis molestias neque aliquid eos.
          </UserStory>
          <UserJob>Freelance Model</UserJob>
        </TestimonyDetailContainer>
      </TestimonyCard>
      <TestimonyCard>
        <TestimonyAvatar src={testi3} alt="testimony" />
        <TestimonyDetailContainer>
          <UserName>Zack Mckinley</UserName>
          <UserStory>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui
            accusantium doloremque, similique quo odio, aut officia possimus
            accusamus vitae minima, ducimus minus perspiciatis harum.
            Exercitationem debitis molestias neque aliquid eos.
          </UserStory>
          <UserJob>Freelance Model</UserJob>
        </TestimonyDetailContainer>
      </TestimonyCard>
    </TestimonyContainer>
  );
};

export default Testimony;
