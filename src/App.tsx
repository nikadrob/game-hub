import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './Components/NavBar';
import GameGrid from './Components/GameGrid';
import GenreList from './Components/GenreList';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, // mobile
        lg: `"nav nav" "aside main"`, // larger than 1024px
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside"><GenreList></GenreList></GridItem>
      </Show>
      <GridItem area="main">
        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
