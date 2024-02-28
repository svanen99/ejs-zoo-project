$(() => {   
    console.log("hi from sidebar.js")

    const populateSidebar = () => {
        $(".sidebar").empty();
        appendAnimals("Mammals", mammals);
        appendAnimals("Reptiles", reptiles);
        appendAnimals("Birds", birds);
    };

    const appendAnimals = (animalGroup, animals) => {   
        $(".sidebar").append(`<h4>${animalGroup}</h4>`);
        let ul = $("<ul></ul>");
        animals.forEach(animal => ul.append(`<li class=sidebar-animal>${animal.name}</li>`));
        $(".sidebar").append(ul);        
    };

    populateSidebar();

}); 