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
    <>
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
      <Grid>
        <Container>
          <PlayerDiv>
            <span>HIT POINTS:</span>
            <img src={`${process.env.PUBLIC_URL}/hero.png`} alt="" />
          </PlayerDiv>
        </Container>
        <Container>
          {enemies.map((enemy) => (
            <EnemyDiv key={enemy.id}>
              <span>{enemy.name}</span>
              <p>HIT POINTS: {enemy.hp}</p>
              <img src={`${process.env.PUBLIC_URL}/${enemy.name.toLowerCase()}.png`} alt="" />
            </EnemyDiv>
          ))}
        </Container>
      </Grid>
    </>
  );
}

const PlayerDiv = styled.div`
  /* position: absolute;
  left: 0;
  bottom: 30%; */
  /* height: 300px;
  width: 300px; */
  /* background-color: blue; */

  margin-top: 10em;
  display: flex;
  padding: 10px;
  img {
    height: 200px;
  }
  span {
    color: white;
  }
`;
const EnemyDiv = styled.div`
  display: flex;
  padding: 10px;
  margin-top: 10em;
  height: 300px;
  width: 300px;
  /* background-color: blue; */
  flex-direction: column;
  img {
    height: 250px;
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
  flex-direction: column;
  justify-content: center;
  & > div {
    flex: 1;
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(29rem, 1fr));
  grid-gap: 3rem;
`;
export default Home;
