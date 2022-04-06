import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { fetchEnemies } from '../../services/enemies';

function Home() {
  const [enemies, setEnemies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const Data = await fetchEnemies();
      setEnemies(Data);
    };
    fetchData();
  }, []);

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
      <Container>
        <PlayerDiv>
          <span>HIT POINTS:</span>
          <img src={`${process.env.PUBLIC_URL}/hero.png`} alt="" />
        </PlayerDiv>
        {enemies.map((enemy) => (
          <EnemyDiv key={enemy.id}>
            <span>{enemy.name}</span>
            <p>HIT POINTS: {enemy.hp}</p>
          </EnemyDiv>
        ))}
      </Container>
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
const EnemyDiv = styled.div`
  padding: 10px;
  bottom: 30%;
  height: 300px;
  width: 300px;
  background-color: blue;
  img {
    height: 200px;
    width: 200px;
  }
  span {
    color: white;
    top: 0;
  }
  p {
    color: white;
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
