import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Box,Typography } from "@mui/material";
import axios from "axios"

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: "20px",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '85ch',
    },
  },
}));

export default function PrimarySearchAppBar() { 


    const [suggestions, setSuggestions] = React.useState([]);

   

    const debounce = (func) => {
        let timer;
        return function (...args) {
            const context = this;
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                timer = null;
                func.apply(context, args);
            }, 500);
        };
    };

    const handleChange = (value) => {

        if (!value) {
            setSuggestions([]);
            return;
        }
        // axios.get(`https://api.rawg.io/api/games?key=88de139982b546c5ba3f0cb42aced4dc/?search=${value}`).then(({data})=>{
        //     setSuggestions(data)
        // })
    };

    console.log('setSuggestions', suggestions);


    const optimizedFn = React.useCallback(debounce(handleChange), []);


  return (
    
        <Toolbar>          
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase 
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => optimizedFn(e.target.value)}
            />
          </Search>
          <Box>
                {suggestions.length > 0 && (
                    <div style={{backgroundColor:"white"}} className="autocomplete">
                        {suggestions.map((el, i) => (
                            <div  onClick={() => {
                                // dispatch(ClassActions(el.classes_ids))
                                // navigate("/class")
                            }} key={i} className="autocompleteItems">

                                <h3 style={{ color: "black", }}>{el.teacher_name}</h3>

                            </div>
                        ))}
                    </div>
                )}
            </Box>
          
        </Toolbar>
      
  );
}
