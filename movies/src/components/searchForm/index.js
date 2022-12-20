import React, { useState } from "react";
import { Card, Typography } from "@mui/material";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import FormControl from '@mui/material/FormControl';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { searchCompany } from "../../api/tmdb-api";
import { searchPerson } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../../components/spinner';
import { Stack } from "@mui/material";


const styles = {
    root: {
      marginLeft: 2,
      marginTop: 2,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    togg: {
        display: "flex",
        flexDirection: "row",
        justify: "center",
    },
    form: {
      width: "100%",
      "& > * ": {
        marginTop: 2,
      },
    },
    textField: {
      width: "40ch",
    },
    submit: {
      marginRight: 2,
    },
    snack: {
      width: "50%",
      "& > * ": {
        width: "100%",
      },
    },
  };

const SearchForm = () => {
    const [alignment, setAlignment] = React.useState('company');
    const [searched, setSearched] = useState(false);
    const [query1, setQuery1] = useState('---');
    const [query2, setQuery2] = useState('---');
    const [values, setValues] = React.useState({
        name: ''
      });
    


    const { data:cdata, error:cerror, isLoading:cisLoading, isError:cisError } = useQuery(
      ["searchCompany", {query: query1}],
      searchCompany
    );

    const { data:pdata, error:perror, isLoading:pisLoading, isError:pisError } = useQuery(
      ["searchPerson", {query: query2}],
      searchPerson
    );

  
    const handleToggleChange = (event, newAlignment) => {
        console.log(newAlignment)
        setAlignment(newAlignment);
      };

    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };

    if (cisLoading) {
      return <Spinner />;
    }
  
    if (cisError){
      return <h1>{cerror.message}</h1>;
    }

    if (pisLoading) {
      return <Spinner />;
    }
  
    if (pisError){
      return <h1>{perror.message}</h1>;
    }
    console.log(pdata)
  
    
    const search = () => {
      if (alignment === "person") {
        setQuery1("-");
        setQuery2(values.name);
        setSearched(true);
      }
      if (alignment === "company") {  
        console.log(values.name);
        setQuery2("-");
        setQuery1(values.name);
        setSearched(true);
      }
  }

    return (
        <>
        <Typography sx={styles.root} component="h3" variant="h4">
            Search
        </Typography>
        <Card sx={styles.root}>
        <ToggleButtonGroup
            sx={styles.togg}
            color="primary"
            value={alignment}
            exclusive
            onChange={handleToggleChange}
            aria-label="Platform"
        >
            <ToggleButton value="company">Companies</ToggleButton>
            <ToggleButton value="person">People</ToggleButton>
        </ToggleButtonGroup>

        <FormControl sx={{mt: 2, width: '25ch'}} variant="outlined">
            <TextField
              id="outlined-required"
              label="Name"
              placeholder="Name"
              value={values.name}
              onChange={handleChange('name')}
            />
        </FormControl><br/>
        <FormControl sx={{mt: 2, mb: 2, width: '25ch' }} variant="outlined">
            <Button variant="contained" onClick={search}>Search</Button>
        </FormControl>
        </Card>
        {cdata.results.length > 0 && searched &&
        <>
        <Card sx={{ml: 2, mt: 2, mb: 2 }}>
        <Stack spacing={2}>
          {cdata.results.map((e) => (
            <Typography key={e.id} sx={styles.left} component="h5" variant="h6">
              {e.origin_country.length > 0 && "(" + e.origin_country + ")"} {e.name}
            </Typography>
            ))}
        </Stack>
        </Card>
        </>
        }
        {pdata.results.length > 0 && searched &&
        <>
        <Card sx={{ml: 2, mt: 2, mb: 2 }}>
        <Stack spacing={2}>
          {pdata.results.map((p) => (
            <Typography key={p.id} sx={styles.left} component="h5" variant="h6">
              {p.name}
            </Typography>
            ))}
        </Stack>
        </Card>
        </>
        }
        </>
  );
};

export default SearchForm;