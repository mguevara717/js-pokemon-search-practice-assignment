document.addEventListener('DOMContentLoaded', () => {
  console.log(POKEMON)

  const pokemonListContainer = document.getElementById("pokemon-container")
  pokemonListContainer.innerHTML = ""
  // console.log(pokemonListContainer)

  function printPokemon(pokeList) {
    pokeList.forEach((pokemon) => {
      const pokeContainer = document.createElement("div")
      pokeContainer.className = "pokemon-container"
      const pokeDiv = document.createElement("div")
      pokeDiv.innerHTML = `<h1 class="center-text">${pokemon.name}</h1>`
      pokeDiv.className = "pokemon-frame"
      pokeDiv.id = pokemon.name
      const pokeImg = document.createElement("img")
      pokeImg.src = pokemon.sprites.front
      pokemonListContainer.appendChild(pokeContainer)
      pokeContainer.appendChild(pokeDiv)
      pokeDiv.appendChild(pokeImg) //append
      pokeImg.addEventListener("click", () => {
        flip(pokemon)
      })
      pokeDiv.addEventListener("click", () => {
        showInfo(pokemon)
      })
    })
  }

  printPokemon(POKEMON)

  function showInfo(pokemon){
    const pokeDiv = document.getElementById(pokemon.name)
    if(pokeDiv.lastChild.id !== `poke-info-${pokemon.name}` ) {
    // if(pokeDiv.lastChild.className !== "poke-info" ) {
      const pokeInfo = document.createElement("div")
      console.log(pokeInfo)
      pokeInfo.id = `poke-info-${pokemon.name}`
      // pokeInfo.className = "poke-info"
      pokeInfo.innerHTML = pokemon.types.join(", ")
      pokeDiv.appendChild(pokeInfo)
    }
    else {
      const pokeInfo = document.querySelector(`#poke-info-${pokemon.name}`)
      pokeDiv.removeChild(pokeInfo)
    }

  }

  function flip(pokemon) {
    const pokeDiv = document.getElementById(pokemon.name)
    if (pokeDiv.lastChild.src === pokemon.sprites.front) {
      pokeDiv.lastChild.src = pokemon.sprites.back
    } else {
      pokeDiv.lastChild.src = pokemon.sprites.front
    }
  }

  const searchContainer = document.getElementById("pokemon-search-input")

  searchContainer.addEventListener("input", function(event) {
    // console.log(searchContainer.value)
    pokemonListContainer.innerHTML = ""
    
    const searchInput = searchContainer.value

    const filteredPokemon = POKEMON.filter((pokemon) => {
        return pokemon.name.includes(searchInput)
    })

    printPokemon(filteredPokemon)
      // console.log(filteredPokemon)
  })












})//end of DOM content loader
