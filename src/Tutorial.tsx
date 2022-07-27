import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

const Privacy = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Centro de Ayuda Hackbank</title>
      </Helmet>
      <PageContainer>
        <PostContainer>
          <h1>Centro de Ayuda</h1> <h2>¿Qué es Hackbank?</h2>
          <p>
            Hackbank es una aplicación móvil que te ayuda a simular una
            transferencia interbancaria inmediata entre distintos bancos.
          </p>
          <h2>¿En qué bancos está disponible Hackbank?</h2>
          <p>
            Está disponible en los siguientes bancos:
            <ul>
              <li>BBVA</li>
              <li>Interbank</li>
              <li>Scotiabank</li>
              <li>BCP</li>
            </ul>
          </p>
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

export default Privacy;
