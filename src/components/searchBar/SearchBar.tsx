import React from 'react';
import { SearchContainer } from './searchBar.styles';
import { Search } from "@mui/icons-material";
import Input from '../elements/input/Input';
import { useFormFields } from '../../utils/hooks';


    const SearchBar = () => {

        const { formFields, createChangeHandler } = useFormFields({
            search: "",
          });

          const handleSubmit = (event: React.FormEvent) => {
            event.preventDefault();
            console.log(formFields.search)
          };

    return(
        <div className="searchBar">
        <span className='language'>EN</span>
        <SearchContainer className="formContainer">
            <Input 
              formClassName="formSearch" 
              role="search"  
              method="get" 
              onSubmit={handleSubmit}
              inputClassName="formControl" 
              type="search" 
              name="q" 
              value={formFields.search}
              aria-label="Search through site content"
              onChangeInput={createChangeHandler("search")} 
              placeholder="search" 
              autoComplete='on'  
            />
           <Search style={{color:"gray", fontSize:16}} />
        </SearchContainer>

    </div>
    )
};

export default SearchBar;