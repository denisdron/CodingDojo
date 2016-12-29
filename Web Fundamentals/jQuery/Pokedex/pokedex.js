$(document).ready(function(){
    //will append the images to the "#pokemonImages" div on the left
    for(var i=1; i<=151; i++){
        var pokemonAPI = $(`<img class='pokemonImage' data-pokeid='${i}' id='${i}' src="http://pokeapi.co/media/img/${i}.png">`).on('click', function(){
        });
        $('#pokemonImages').append(pokemonAPI);
    }

    //"when you click on this image, do the following..."
    $('.pokemonImage').click(function() {
        //variable to hold the pokemon Id
        var pId=$(this).data('pokeid');
        // console.log(pId) -> to test if we are getting the corresponding Id's when clicking the images

        //request the pokemon Id and execute this function
        //"get me the Id of this image"
        $.get(`http://pokeapi.co/api/v1/pokemon/${pId}`, function(response) {
            // console.log(response) -> to test if we are receiving the correct values

            //variables to hold specific values within the array or arrray of objects associated with the corresponding Id
            //"get me the name, height, weight, and type of this Id/image"
            var name=response.name;
            var height=response.height;
            var weight=response.weight;
            var types=response.types;
            // console.log(name,height,weight,types); -> testing our variables/function, this also allows us to see that "types" is an array, and we'll need to loop through it to get all the appropriate values

            //an empty string, this will hold the generated <li> items after the for loop, each character will have a different number of "properties" within "types"
            var typeStr='';
            //"for this Id's type get all the properties that correspond to it"
            for(var i=0; i<types.length;i++){
                typeStr+=`<li>${types[i].name}</li>`;
            }

            //"populate the div on the right with all the information associated with this Id/image"
            //".html" will create the following html tags with the correct data in them"
            $('#pokemonDetails').html(`
                <h1>${name}</h1>
                <img src="http://pokeapi.co/media/img/${pId}.png" alt="image of pokemon character">
                <div class="left">
                    <h4>Types</h4>
                        <ul>
                            ${typeStr}
                        </ul>
                    <h4>Height</h4>
                        <p>${height}</p>
                    <h4>Weight</h4>
                        <p>${weight}</p>`)
        })
    })
});
