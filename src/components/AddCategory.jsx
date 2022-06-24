import {useState} from "react";


export const AddCategory = (
    {onNewCategory}
) => {

 const [inputValue, setInputValue] = useState('One Punch');

 const onInputChange = ({target}) => {
     //Es lo mismo que event.target.value
   setInputValue(target.value);

 }

 const onSubmit = (event) => {
 event.preventDefault();
 const inputValueTrim = inputValue.trim();
 if (inputValueTrim.length <= 1) return;
        // setCategories((categories) =>
        //     [inputValue, ...categories]
        // );
        onNewCategory(inputValueTrim);
        setInputValue("");
 }

  return (

          <form onSubmit={(event) => onSubmit(event)}>
              <input
                  type="text"
                  placeholder="Buscar gifs"
                  value={inputValue}
                  onChange={  (event) => onInputChange(event)

                  }

              />
          </form>
  )
}