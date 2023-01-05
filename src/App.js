import logo from './logo.svg';
import styled from "styled-components"


const Header = styled.div`
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 20px;
  font-size: 25px;
  font-weight: bold;
  box-shadow: 0 3px 6px 0 #555;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const AppName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const SearchIcon = styled.img`
  width: 32px;
  height: 32px;
`;
const RecipeImage = styled.img`
  width: 36px;
  height: 36px;
  margin: 15px;
`;
const Search = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const SearchInput = styled.input`
  color: black;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: none;
  margin-left: 15px;
`;
const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px;
  border-radius: 6px;
  margin-left: 20px;
  width: 50%;
  background-color: white;
`;
function App() {
  return (
    <Container>
      <Header>
        <AppName>
        <RecipeImage src="./assets/hamburger.svg"></RecipeImage>
          Food Assistant
          </AppName>
        <SearchBox>
          <SearchIcon src="./assets/search-icon.svg"></SearchIcon>
        <SearchInput placeholder='Type an ingredient!'></SearchInput>
        </SearchBox>
        </Header>
    </Container>
    
  );
}

export default App;
