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
    new Animal("Quokka", "10 years", "mammals", "Plant eaters, they munch on shrubs and grasses", "The Quokka, Setonix brachyurus, was described by early Dutch explorer, Willem de Vlamingh as 'a kind of rat as big as a common cat'. His first sighting of the Quokka was on an island off the mouth of the Swan River. He named the island Rottenest ('rat nest') in honour of this sighting. The island is now known as Rottnest Island. Essentially the Quokka looks very much like other wallabies.It has short, very coarse and thick grey-brown fur over most of the body with lighter parts underneath. Its facial features consist of a naked nose on a short, broad face with rounded furry ears.The tail is relatively short and mostly devoid of hair. In contrast, the hair on the feet extends to cover its claws.", "50cm", "3kg", "Only found on Rottnest Island and a few places on mainland Western Australia."),
    new Animal("Echidna", "50 years", "mammals", "insects such as ants and termites, beetle larvae and worms", "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often classified as long- or short-beaked, but don not have beaks at all, in the traditional sense; they have fleshy noses that can be either on the long side or rather short. They don not really look like true anteaters (Myrmecophaga tridactyla), either, and they are not closely related to them. They are spiny, though; their bodies are covered with hollow, barbless quills. Echidnas are monotremes, egg-laying mammals. The only other living monotreme is the platypus.", "76cm", "10kg", "Throughout Australia"),
    new Animal("Tasmanian-devil", "5 years", "mammals", "A predator, then eat meat from other animals such as wallabies and wombats", "The Tasmanian devil (Sarcophilus harrisii) (palawa kani: purinina)[3] is a carnivorous marsupial of the family Dasyuridae. Until recently, it was only found on the island state of Tasmania, but it has been reintroduced to New South Wales in mainland Australia, with a small breeding population. The size of a small dog, the Tasmanian devil became the largest carnivorous marsupial in the world, following the extinction of the thylacine in 1936. It is related to quolls, and distantly related to the thylacine. It is characterised by its stocky and muscular build, black fur, pungent odour, extremely loud and disturbing screech, keen sense of smell, and ferocity when feeding. The Tasmanian devil's large head and neck allow it to generate among the strongest bites per unit body mass of any extant predatory land mammal. It hunts prey and scavenges on carrion.", "70cm", "10kg", "Tasmania")
]

export const reptiles = [
    new Animal("Perentie", "20 years", "reptile", "Carnivore, they eat animals like kangaroos, rabbits, lizards and birds", "The perentie (Varanus giganteus) is the largest monitor lizard or goanna native to Australia. It is one of the largest living lizards on earth, after the Komodo dragon, Asian water monitor, crocodile monitor, and intersecting by size with Nile monitor.[3] Found west of the Great Dividing Range in the arid areas of Australia, it is rarely seen, because of its shyness and the remoteness of much of its range from human habitation. The species is considered to be a least-concern species according to the International Union for Conservation of Nature. Its status in many Aboriginal cultures is evident in the totemic relationships, and part of the Ngiṉṯaka dreaming, as well as bush tucker. It was a favoured food item among desert Aboriginal tribes, and the fat was used for medicinal and ceremonial purposes.", "2.5 m", "20kg", "Only found on Rottnest Island and a few places on mainland Western Australia.")
]

export const birds = [
    new Animal("Kookaburra", "20 years", "bird", "Insects and smalll animals including snakes, frogs and lizards", "Native to the eucalyptus forests of eastern Australia, the laughing kookaburra is the largest member of the Kingfisher family, with females weighing up to one pound and growing to 43 cm in length. Its beak can reach 10 cm long and is used to snatch a variety of invertebrates and small vertebrates, including the occasional small snake. Since being introduced in western Australia and New Zealand, the kookaburra has angered farmers by preying on their fowl. The laughing kookaburra has dark brown wing plumage and a white head and underside. Dark brown eye stripes run across its face and its upper bill is black. Its reddish-coloured tail is patterned with black bars.", "43cm", "300g", "Australia wide")
]


    