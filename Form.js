import './App.css';

function Form() {
  return (
    <div className="form">
<form className ="newPokemon">
        <input placeholder ="Name" />
        <input placeholder = "Type" />
        <input placeholder = "Ability" />
        <input type ="number" placeholder = "Height" />
        <input type ="number" placeholder = "Weigth" />
         <button>ADD POKEMON</button>
</form>
    </div>
  );
}

export default Form;
