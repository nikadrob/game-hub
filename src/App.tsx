import { Grid, GridItem, Show } from '@chakra-ui/react';
import NavBar from './Components/NavBar';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`, // mobile
        lg: `"nav nav" "aside main"`, // larger than 1024px
        xl: '80em', // ~1280px
        '2xl': '96em', // ~1536px
      }}
    >
      <GridItem area="nav">
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">Aside</GridItem>
      </Show>
      <GridItem area="main">Nav</GridItem>
    </Grid>
  );
}

export default App;
