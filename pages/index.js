import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import VanillaTilt from 'vanilla-tilt';

// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

const QuizContainer = styled.div`
  padding: 10px 10px 0 10px;
  border: 2px solid #880000;
  box-shadow:  -1px 1px #777777,
        -2px 2px #777777,
        -4px 3px #777777,
        -6px 4px #777777,
        -8px 5px #777777;
  width: 100%;
  max-width: 350px;
  padding-top: 15px;
  margin: auto 10%;
  transform: rotate(-3deg);
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Tilt> 
        <Head>
          <title>{db.title}</title>
        </Head>
        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content>
              <p>{db.description}</p>
              <form onSubmit={function (infosDoEvento) {
                infosDoEvento.preventDefault();
                router.push(`/quiz?name=${name}`);
              }}
              >
                <Input
                  name="nomeDoUsuario"
                  onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                  placeholder="Diz ai seu nome"
                  value={name}
                />
                <Button type="submit" disabled={name.length === 0}>
                  {`Eu tenho um jogo para você ${name}`}
                </Button>
              </form>
            </Widget.Content>
          </Widget>

          <Widget>
            <Widget.Content>
              <h1>Recadinho</h1>
              <p>Reflita cada detalhe em que você pode mudar, seja onde for.</p>
            </Widget.Content>
          </Widget>
          <Footer />
        </QuizContainer>
      </Tilt>
      <GitHubCorner projectUrl="https://github.com/renanshin" />
    </QuizBackground>
  );
}

function Tilt(props) {
  const { options, ...rest } = props;
  const tilt = React.useRef(null);

  React.useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}
