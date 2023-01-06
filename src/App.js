import logo from './logo.svg';
import styled from "styled-components"
import hamburgassets from './assets/hamburger.svg'
import searchicon from './assets/search-icon.svg'
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
const Titletext = styled.span`
  color: black;
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 12px;
  padding: 5px 15px;
`;

const IngredientsText = styled.span`
  color: green;
  border: solid 1px green;
  cursor:pointer;
  font-weight: bold;
  text-align:center;
  margin-bottom: 12px;
  padding: 7px 15px;
  border-radius:5px;
`;
const SeeNewTab = styled.span`
  color: red;
  cursor:pointer;
  text-align:center;
  font-weight: bold;
  border: solid 1px red;
  padding: 7px 15px;
  border-radius:5px;
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
const RecipeListContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 30px;
  gap: 20px;
  flex-wrap:wrap;
  justify-content: space-evenly;
`;
const RecipeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
  width: 300px;
  box-shadow: 0 3px 10px 0 #aaa;
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

const CoverImage = styled.img`
  object-fit: cover;
  height: 200px;
`;
function App() {
  return (
    <Container>
      <Header>
        <AppName>
        <RecipeImage src={hamburgassets}></RecipeImage>
          Food Assistant
          </AppName>
        <SearchBox>
          <SearchIcon src={searchicon}></SearchIcon>
        <SearchInput placeholder='Type an ingredient!'></SearchInput>
        </SearchBox>
        </Header>
        <RecipeListContainer>
          <RecipeContainer>
        <CoverImage src={hamburgassets}/>
        <Titletext >Matar Paneer</Titletext>
        <IngredientsText>Ingredients</IngredientsText>
        <SeeNewTab>Recipe</SeeNewTab>
        </RecipeContainer>
        </RecipeListContainer>
    </Container>
    
  );
}

export default App;
