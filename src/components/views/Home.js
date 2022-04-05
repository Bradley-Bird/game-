import React from 'react';
import styled from 'styled-components';

function Home() {
  return (
    <Container>
      <Container>
        <div>
          <span>enemies Defeated</span>
        </div>
        <div>
          <form>
            <input placeholder="Opponent Name"></input>
            <button>Summon Opponent</button>
          </form>
        </div>
      </Container>
      <div>
        <PlayerDiv>
          <span>HIT POINTS:</span>
          <img src={`${process.env.PUBLIC_URL}/hero.png`} alt="" />
        </PlayerDiv>
      </div>
    </Container>
  );
}

const PlayerDiv = styled.div`
  position: absolute;
  left: 0;
  bottom: 30%;
  height: 300px;
  width: 300px;
  background-color: blue;
  img {
    height: 200px;
    width: 200px;
  }
  span {
    position: absolute;
    color: white;
    top: 0;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  & > div {
    flex: 1;
  }
`;
export default Home;
