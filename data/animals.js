function Animal(name, lifespan, group, food, description, length, weight, location) {
    this.name = name,
    this.lifespan = lifespan,
    this.group = group,
    this.food = food,
    this.description = description,
    this.length = length,
    this.weight = weight,
    this.location = location
}

export const mammals = [
    new Animal('Quokka', '10 years', 'mammals', 'Plant eaters, they munch on shrubs and grasses', 'The Quokka, Setonix brachyurus, was described by early Dutch explorer, Willem de Vlamingh as "a kind of rat as big as a common cat". His first sighting of the Quokka was on an island off the mouth of the Swan River. He named the island Rottenest ("rat nest") in honour of this sighting. The island is now known as Rottnest Island. Essentially the Quokka looks very much like other wallabies.It has short, very coarse and thick grey-brown fur over most of the body with lighter parts underneath. Its facial features consist of a naked nose on a short, broad face with rounded furry ears.The tail is relatively short and mostly devoid of hair. In contrast, the hair on the feet extends to cover its claws.', '50cm', '3kg', 'Only found on Rottnest Island and a few places on mainland Western Australia.')
]