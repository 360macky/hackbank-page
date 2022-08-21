import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const Dev = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Development Timelapse</title>
      </Helmet>
      <PageContainer>
        <PostContainer>
          <h1>Timelapse</h1>
          <h2>Desarrollo de Hackbank</h2>
          <iframe
            src="https://www.youtube.com/embed/mJ7QA8u8uqc"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
            className="video"
          />
          <h2>Hackbank Development</h2>
          <iframe
            src="https://www.youtube.com/embed/kA2Mo5ZJbEE"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
            className="video"
          />
        </PostContainer>
      </PageContainer>
    </>
  );
};

const PageContainer = styled.div`
  padding: 1rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PostContainer = styled.div`
  background-color: #ffffff;
  padding: 1rem 2rem;
  border-radius: 49px;

  h1 {
    color: #006c4b;
    text-align: center;
  }

  a {
    color: #006c4b;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  @media only screen and (min-width: 640px) {
    width: 600px;
  }

  @media (prefers-color-scheme: dark) {
    background-color: #000000;

    h2,
    h3,
    p {
      color: #ffffff;
    }

    h1,
    a,
    ul,
    li {
      color: #6afcc3;
    }
  }
`;

export default Dev;
