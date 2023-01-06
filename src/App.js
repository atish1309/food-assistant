import React, { useState } from "react";
import Axios from "axios";
import styled from "styled-components"
import hamburgassets from './assets/hamburger.svg'
import searchicon from './assets/search-icon.svg'
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';

import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import { DialogContent } from "@mui/material";


const api_id='';
const api_key='';
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
  color: white;
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 12px;
  padding: 5px 15px;
`;

const IngredientsText = styled.span`
  color: white;
  background-color: green;
  border: solid 1px green;
  cursor:pointer;
  font-weight: bold;
  text-align:center;
  margin-bottom: 12px;
  padding: 7px 15px;
  border-radius:5px;
`;
const SeeNewTab = styled.span`
  color: white;
  cursor:pointer;
  background-color: red;
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
  background-color: #15202B;
  border-radius: 25px;
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
  border-radius: 20px;
  
`;

const RecipeComponent = (props) => {
  //const { label, image, ingredients, url } = props.recipe;
  const [show,setshow] = useState(false);
  const {recipeobj}=props;

  const handleClose = () => {
    setshow(false);
    
  };

  return (
    <>
    <Dialog open={show} onClose={handleClose}>
    <DialogTitle>Ingredients for {recipeobj.label}</DialogTitle>
    <DialogContent>
      <table>
        <thead>
          <th>Ingredient</th>
          <th>Weight in gms</th>
        </thead>
        <tbody>
        {recipeobj.ingredients.map((ingredientel, index) => (
                <tr key={index} className="ingredient-list">
                  <td>{ingredientel.text}</td>
                  <td>{ingredientel.weight}</td>
                </tr>
              ))}
        </tbody>
      </table>
    </DialogContent>
    </Dialog>
      <RecipeContainer>
         <CoverImage src={recipeobj.image}/>
        <Titletext >{recipeobj.label}</Titletext>
        <IngredientsText  onClick={()=>setshow(true)}>Ingredients</IngredientsText>
        <SeeNewTab onClick={()=>window.open(recipeobj.url)}>Recipe</SeeNewTab>
      </RecipeContainer>
      </>
      )
      
}
function App() {

  // const [searchTerm, setSearchTerm] = useState('')
  // useEffect(() => {
  //   const delayDebounceFn = setTimeout(() => {
  //     console.log(searchTerm)
  //    const response = await Axios.get(
  //     `https://api.edamam.com/search?q=${searchString}&app_id=${APP_ID}&app_key=${APP_KEY}`,
  //   );
  //   updateRecipeList(response.data.hits);
  //   }, 500)

  //   return () => clearTimeout(delayDebounceFn)
  // }, [searchTerm])


  const [timeoutId, updateTimeoutId] = useState();
  const [recipeList, updateRecipeList] = useState([]);
  const [searchQuery, updateSearchQuery] = useState([]);
  const fetchData = async (searchString) => {
    const response = await Axios.get(
      `https://api.edamam.com/search?q=${searchString}&app_id=${api_id}&app_key=${api_key}`,
    );
  // console.log(response)
  updateRecipeList(response.data.hits);
  };
  const onTextChange = (event) => {
    clearTimeout(timeoutId);
    updateSearchQuery(event.target.value);
    const timeout = setTimeout(() => fetchData(event.target.value), 500);
    updateTimeoutId(timeout);
  };

  return (
    <Container>
      <Header>
        <AppName>
        <RecipeImage src={hamburgassets}></RecipeImage>
          Food Assistant
          </AppName>
        <SearchBox>
          <SearchIcon src={searchicon}></SearchIcon>
        <SearchInput placeholder='Type an ingredient!' onChange={onTextChange}></SearchInput>
        </SearchBox>
        </Header>
        <RecipeListContainer>
          {/* <RecipeContainer> */}
            {recipeList.length && recipeList.map((recipeobj)=><RecipeComponent recipeobj={recipeobj.recipe}/>)}
        {/* <CoverImage src={hamburgassets}/>
        <Titletext >Matar Paneer</Titletext>
        <IngredientsText>Ingredients</IngredientsText>
        <SeeNewTab>Recipe</SeeNewTab> */}
        {/* </RecipeContainer> */}
        </RecipeListContainer>
    </Container>
    
  );
}

export default App;
