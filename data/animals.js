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

export const reptiles = [
    new Animal('Perentie', '20 years', 'Reptile', 'Carnivore, they eat animals like kangaroos, rabbits, lizards and birds', 'The perentie (Varanus giganteus) is the largest monitor lizard or goanna native to Australia. It is one of the largest living lizards on earth, after the Komodo dragon, Asian water monitor, crocodile monitor, and intersecting by size with Nile monitor.[3] Found west of the Great Dividing Range in the arid areas of Australia, it is rarely seen, because of its shyness and the remoteness of much of its range from human habitation. The species is considered to be a least-concern species according to the International Union for Conservation of Nature. Its status in many Aboriginal cultures is evident in the totemic relationships, and part of the Ngiṉṯaka dreaming, as well as bush tucker. It was a favoured food item among desert Aboriginal tribes, and the fat was used for medicinal and ceremonial purposes.', '2.5 m', '20kg', 'Only found on Rottnest Island and a few places on mainland Western Australia.'),
    new Animal('Frill-necked Lizard', '20 years', 'Reptile', 'Small insects and spiders', ' When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right. It continues its deliberate run without stopping or looking back until it reaches the safety of a tree.', '90cm', '1 kg', 'Northern Australia'),
    new Animal('Hawksbill Turtle', '50 years', 'Reptile', 'other animals (sponges & jellyfish), sea plants', 'The Hawksbill Sea Turtle gets its common name from the distinctive mouth, which resembles a bird’s beak. The shell, or carapace, is covered in large overlapping scutes, which are a distinctive brown/green/amber background with lighter brown streaks throughout. At the edge of the carapace they overlap in such a way as to form a serrated edge. The turtle has an elongated head and flippers which have two visible claws on the end. The flippers and head are covered in large green, brown or yellow scales. The average adult female weighs 50 kg and their carapace (shell) is approximately 80 cm in length.', '80cm (carapace)', '50kg', 'Tropical coasts of Queensland, Northern Territory and Western Australia.')
]

