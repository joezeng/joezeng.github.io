items = {
	
	"cursor":{
		"name": "Cursor",
		"base_cost": 10,
		"gps": 0.2,
		"gpslist": [0.2],
		"count": 0
	},
	
	"youngster":{
		"name": "Youngster",
		"base_cost": 50,
		"gps": 1.0,
		"gpslist": [1.0, 1.5, 3.0, 6.0, 12.0, 24.0, 48.0, 96.0, 192.0, 384.0, 768.0, 1536.0, 6144.0, 24864.0, 99456.0, 994560.0],
		"count": 0
	},
	
	"reserve":{
		"name": "Reserve",
		"base_cost": 200,
		"gps": 2.5,
		"gpslist": [2.5, 3.0, 6.0, 12.0, 24.0, 48.0],
		"count": 0
	},
	
	"daycare":{
		"name": "Daycare",
		"base_cost": 1500,
		"gps": 10,
		"gpslist": [10, 14, 28, 56, 112, 224],
		"count": 0
	},
	
	"fountain":{
		"name": "Goopy Fountain",
		"base_cost": 8000,
		"gps": 25,
		"gpslist": [25, 40, 80, 160, 320, 640],
		"count": 0
	},
	
	"breeding":{
		"name": "Breeding Ground",
		"base_cost": 36000,
		"gps": 60,
		"gpslist": [60, 90, 180, 360, 720, 1440],
		"count": 0
	},
	
	"arceus":{
		"name": "Enslaved Arceus",
		"base_cost": 150000,
		"gps": 200,
		"gpslist": [200, 300, 600, 1200, 2400, 4800],
		"count": 0
	},
	
	"cloning":{
		"name": "Cloning Lab",
		"base_cost": 999999,
		"gps": 1200,
		"gpslist": [1200, 1800, 3600, 7200, 14400, 28800],
		"count": 0
	},
	
	"planet":{
		"name": "Repopulated Planet",
		"base_cost": 5256000,
		"gps": 5840,
		"gpslist": [5840, 9000, 18000, 36000, 72000, 144000],
		"count": 0
	},
	
	"rngabuser":{
		"name": "RNG Abuser",
		"base_cost": 33554432,
		"gps": 32768,
		"gpslist": [32768, 65536, 131072, 262144, 524288, 1048576],
		"count": 0
	},
	
	"photoncollider":{
		"name": "Photon Collider",
		"base_cost": 246913578,
		"gps": 186262,
		"gpslist": [186262, 299792, 599584, 1199168, 2398336, 4796672, 9593344],
		"count": 0
	},
	
	
};


upgrades = [

	// Youngster

	{
		"name": "Great Ball",
		"description": "Makes youngsters gain <b>0.5</b> base GpS.",
		"ftext": "Great Balls have a higher catch rate.",
		"upgrades": ["youngster"],
		"cost": 400,
		"unlock_level": 2,
		"bought": false
	},

	{
		"name": "Comfy Shorts",
		"description": "Makes youngsters <b>twice</b> as efficient.",
		"ftext": "These shorts are easy to wear and make catching Goomies easier too!",
		"upgrades": ["youngster"],
		"cost": 800,
		"unlock_level": 4,
		"bought": false
	},

	{
		"name": "Ultra Ball",
		"description": "Makes youngsters <b>twice</b> as efficient.",
		"ftext": "Ultra Balls have a much higher catch rate.",
		"upgrades": ["youngster"],
		"cost": 2000,
		"unlock_level": 7,
		"bought": false
	},


	{
		"name": "Sweet Scent",
		"description": "Makes youngsters <b>twice</b> as efficient.",
		"ftext": "With Sweet Scent, I can attract more Goomies to my present location.",
		"upgrades": ["youngster"],
		"cost": 5000,
		"unlock_level": 12,
		"bought": false
	},


	{
		"name": "Honey Tree",
		"description": "Makes youngsters <b>twice</b> as efficient.",
		"ftext": "If I slather honey on this tree, Goomies will be attracted to it",
		"upgrades": ["youngster"],
		"cost": 20000,
		"unlock_level": 17,
		"bought": false
	},


	{
		"name": "Ace Trainer",
		"description": "Makes youngsters <b>twice</b> as efficient.",
		"ftext": "I have my own team of Pokémon! What am I still doing catching Goomies?",
		"upgrades": ["youngster"],
		"cost": 120000,
		"unlock_level": 24,
		"bought": false
	},


	{
		"name": "Team Rocket",
		"description": "Makes youngsters <b>twice</b> as efficient.",
		"ftext": "Steal Goomies for profit. Exploit Goomies for profit. All Goomies exist for the sake of Team Rocket.",
		"upgrades": ["youngster"],
		"cost": 800000,
		"unlock_level": 29,
		"bought": false
	},


	{
		"name": "Gym Leader",
		"description": "Makes youngsters <b>twice</b> as efficient.",
		"ftext": "I love Goomies so much, my whole team is made of Goomies!",
		"upgrades": ["youngster"],
		"cost": 4000000,
		"unlock_level": 34,
		"bought": false
	},


	{
		"name": "Elite Four",
		"description": "Makes youngsters <b>twice</b> as efficient.",
		"ftext": "Goomy is love, Goomy is life. Can you withstand the power of my Goomies?",
		"upgrades": ["youngster"],
		"cost": 30000000,
		"unlock_level": 40,
		"bought": false
	},


	{
		"name": "Champion",
		"description": "Makes youngsters <b>twice</b> as efficient.",
		"ftext": "I've come a long way from just catching one Goomy at a time.",
		"upgrades": ["youngster"],
		"cost": 324000000,
		"unlock_level": 50,
		"bought": false
	},


	{
		"name": "Professor Oak",
		"description": "Makes youngsters <b>twice</b> as efficient.",
		"ftext": "I sent you out there. Now it's time you faced me.",
		"upgrades": ["youngster"],
		"cost": 1825000000,
		"unlock_level": 60,
		"bought": false
	},


	{
		"name": "Snag Machine",
		"description": "Makes youngsters <b>twice</b> as efficient.",
		"ftext": "All your Goomies are belong to me! ALL! HAHA! MINE!",
		"upgrades": ["youngster"],
		"cost": 18400000000,
		"unlock_level": 70,
		"bought": false
	},


	{
		"name": "World Champion",
		"description": "Makes youngsters <b>four times</b> as efficient.",
		"ftext": "I'm the best Pokémon Trainer in the world now, and it's all thanks to Goomy.",
		"upgrades": ["youngster"],
		"cost": 400000000000,
		"unlock_level": 80,
		"bought": false
	},


	{
		"name": "Legendary Champion",
		"description": "Makes youngsters <b>four times</b> as efficient.",
		"ftext": "My Goomy helped me through catching Mewtwo, Ho-oh, Lugia, Groudon, Kyogre, Rayquaza, Dialga, Palkia, Giratina, Reshiram and Zekrom, Xerneas and Yveltal, and every other legendary Pokémon on the planet.",
		"upgrades": ["youngster"],
		"cost": 4000000000000,
		"unlock_level": 90,
		"bought": false
	},


	{
		"name": "Master Ball",
		"description": "Makes youngsters <b>ten times</b> as efficient.",
		"ftext": "With this, I can catch every Goomy in the universe without fail.",
		"upgrades": ["youngster"],
		"cost": 1000000000000000,
		"unlock_level": 100,
		"bought": false
	},

	// Reserve

	{
		"name": "Breeding Program",
		"description": "Makes reserves gain <b>0.5</b> base GpS.",
		"ftext": "If we induce more active breeding in the Goomies, they'll reproduce a little faster.",
		"upgrades": ["reserve"],
		"cost": 1000,
		"unlock_level": 5,
		"bought": false
	},

	{
		"name": "Pollution Removal",
		"description": "Makes reserves <b>twice</b> as efficient.",
		"ftext": "These Goomies need the freshest air we can give them.",
		"upgrades": ["reserve"],
		"cost": 3000,
		"unlock_level": 10,
		"bought": false
	},
	
	{
		"name": "National Park Status",
		"description": "Makes reserves <b>twice</b> as efficient.",
		"ftext": "Now that our Goomies are no longer threatened by private interests, they're free to live without a care.",
		"upgrades": ["reserve"],
		"cost": 15000,
		"unlock_level": 16,
		"bought": false
	},
	
	{
		"name": "Expansion Program",
		"description": "Makes reserves <b>twice</b> as efficient.",
		"ftext": "We've petitioned the government to expand the area of our national park. If they disagree, we'll send all the Goomies they aren't giving a home straight to the national capital.",
		"upgrades": ["reserve"],
		"cost": 80000,
		"unlock_level": 22,
		"bought": false
	},
	
	{
		"name": "Reintroduction",
		"description": "Makes reserves <b>twice</b> as efficient.",
		"ftext": "Our Goomy population in the reserve is stable enough that we can let them bleed out into the zones outside of the National Park and they won't be in danger.",
		"upgrades": ["reserve"],
		"cost": 600000,
		"unlock_level": 28,
		"bought": false
	},

	// Daycare

	{
		"name": "Baby Bonus",
		"description": "Makes daycares gain <b>4</b> base GpS.",
		"ftext": "The daycare is offering a 100-pyen rebate for Pokémon that produce eggs.",
		"upgrades": ["daycare"],
		"cost": 10000,
		"unlock_level": 15,
		"bought": false
	},
	
	{
		"name": "Ditto Camp",
		"description": "Makes daycares <b>twice</b> as efficient.",
		"ftext": "Looks like somebody's trying to breed for six perfect IV's.",
		"upgrades": ["daycare"],
		"cost": 90000,
		"unlock_level": 23,
		"bought": false
	},
	
	{
		"name": "Level Rate Discount",
		"description": "Makes daycares <b>twice</b> as efficient.",
		"ftext": "The daycare is changing their rates. Only 50 pyen per level now.",
		"upgrades": ["daycare"],
		"cost": 400000,
		"unlock_level": 27,
		"bought": false
	},
	
	{
		"name": "Four Slots",
		"description": "Makes daycares <b>twice</b> as efficient.",
		"ftext": "Woohoo, now we can put four Pokémon in instead of just two!",
		"upgrades": ["daycare"],
		"cost": 1600000,
		"unlock_level": 32,
		"bought": false
	},
	
	{
		"name": "Three-perfect-IV guarantee",
		"description": "Makes daycares <b>twice</b> as efficient.",
		"ftext": "Looks like everyone's trying for six perfect IV's now.",
		"upgrades": ["daycare"],
		"cost": 5000000,
		"unlock_level": 28,
		"bought": false
	},
	
	// Goopy Fountain

	{
		"name": "Waterfall Source",
		"description": "Makes goopy fountains gain <b>15</b> base GpS.",
		"ftext": "Goomies that have fresh water in them are healthier in general. Or just plumper, I can't tell.",
		"upgrades": ["fountain"],
		"cost": 50000,
		"unlock_level": 20,
		"bought": false
	},
	
	{
		"name": "Geyser",
		"description": "Makes goopy fountains <b>twice</b> as efficient.",
		"ftext": "Agitating the water makes it more prone to inducing the chemical reactions required to create and sustain life.",
		"upgrades": ["fountain"],
		"cost": 256000,
		"unlock_level": 26,
		"bought": false
	},
	
	{
		"name": "Old Faithful",
		"description": "Makes goopy fountains <b>twice</b> as efficient.",
		"ftext": "Agitating the water even more gives it even more energy.",
		"upgrades": ["fountain"],
		"cost": 1250000,
		"unlock_level": 31,
		"bought": false
	},
	
	{
		"name": "Fountain of Youth",
		"description": "Makes goopy fountains <b>twice</b> as efficient.",
		"ftext": "Goomies that stay youthful stay sexually active.",
		"upgrades": ["fountain"],
		"cost": 24000000,
		"unlock_level": 39,
		"bought": false
	},
	
	{
		"name": "Volcanic Spring",
		"description": "Makes goopy fountains <b>twice</b> as efficient.",
		"ftext": "Creating a warm, moist environment for Goomies to live in is more conducive to successful production than anything else you can do.",
		"upgrades": ["fountain"],
		"cost": 400000000,
		"unlock_level": 52,
		"bought": false
	},
	
	// Breeding Ground

	{
		"name": "Steroids",
		"description": "Makes breeding grounds gain <b>30</b> base GpS.",
		"ftext": "They may be illegal for sports, but we're making a killing off of them.",
		"upgrades": ["breeding"],
		"cost": 180000,
		"unlock_level": 25,
		"bought": false
	},
	
	{
		"name": "Growth Hormone",
		"description": "Makes breeding grounds <b>twice</b> as efficient.",
		"ftext": "If they grow faster, they can breed faster.",
		"upgrades": ["breeding"],
		"cost": 2000000,
		"unlock_level": 33,
		"bought": false
	},
	
	{
		"name": "Feedlot",
		"description": "Makes breeding grounds <b>twice</b> as efficient.",
		"ftext": "Machines make everything easier.",
		"upgrades": ["breeding"],
		"cost": 12288000,
		"unlock_level": 37,
		"bought": false
	},
	
	{
		"name": "Genetic Modification",
		"description": "Makes breeding grounds <b>twice</b> as efficient.",
		"ftext": "Our genetically modified Goomies are virtually identical to organically grown ones.",
		"upgrades": ["breeding"],
		"cost": 200000000,
		"unlock_level": 48,
		"bought": false
	},
	
	{
		"name": "Hormonal Therapy",
		"description": "Makes breeding grounds <b>twice</b> as efficient.",
		"ftext": "Apparently growth hormone wasn't enough. We're introducing even more stimulants.",
		"upgrades": ["breeding"],
		"cost": 2800000000,
		"unlock_level": 62,
		"bought": false
	},
	
	// Enslaved Arceus

	{
		"name": "Dragon Plate",
		"description": "Makes enslaved Arceus gain <b>100</b> base GpS.",
		"ftext": "A Dragon-type Arceus produces Dragon-type Goomies more easily.",
		"upgrades": ["arceus"],
		"cost": 1000000,
		"unlock_level": 30,
		"bought": false
	},
	
	{
		"name": "EV Training",
		"description": "Makes enslaved Arceus <b>twice</b> as efficient.",
		"ftext": "We need to train Arceus' EVs in... childbirth?",
		"upgrades": ["arceus"],
		"cost": 9600000,
		"unlock_level": 36,
		"bought": false
	},
	
	{
		"name": "Thousand Arms",
		"description": "Makes enslaved Arceus <b>twice</b> as efficient.",
		"ftext": "It created the universe with a thousand arms, and now we're making it create Goomies.",
		"upgrades": ["arceus"],
		"cost": 160000000,
		"unlock_level": 47,
		"bought": false
	},
	
	{
		"name": "Slave Drivers",
		"description": "Makes enslaved Arceus <b>twice</b> as efficient.",
		"ftext": "Ahahaha! I'm lording over Arceus! *whip* MAKE THOSE GOOMIES!",
		"upgrades": ["arceus"],
		"cost": 1200000000,
		"unlock_level": 58,
		"bought": false
	},
	
	{
		"name": "Giratina",
		"description": "Makes enslaved Arceus <b>twice</b> as efficient.",
		"ftext": "We found that showing Giratina to Arceus stimulated it to go faster.",
		"upgrades": ["arceus"],
		"cost": 33333333333,
		"unlock_level": 72,
		"bought": false
	},
	
	// Cloning Lab

	{
		"name": "Government Grant",
		"description": "Makes cloning labs gain <b>600</b> base GpS.",
		"ftext": "We'll use 50 million pyen to research DNA implantation techniques, and another 50 million to appease our supervisors.",
		"upgrades": ["cloning"],
		"cost": 6666666,
		"unlock_level": 35,
		"bought": false
	},
	
	{
		"name": "Asexual Reproduction",
		"description": "Makes cloning labs <b>twice</b> as efficient.",
		"ftext": "Taking sex out of the equation altogether really speeds things up.",
		"upgrades": ["cloning"],
		"cost": 128000000,
		"unlock_level": 46,
		"bought": false
	},
	
	{
		"name": "Genome Sequencer",
		"description": "Makes cloning labs <b>twice</b> as efficient.",
		"ftext": "The Human Genome Project's got nothing on this.",
		"upgrades": ["cloning"],
		"cost": 900000000,
		"unlock_level": 57,
		"bought": false
	},
	
	{
		"name": "Second Government Grant",
		"description": "Makes cloning labs <b>twice</b> as efficient.",
		"ftext": "That research grant really flew by quickly. We need ten times as much money now.",
		"upgrades": ["cloning"],
		"cost": 10000000000,
		"unlock_level": 68,
		"bought": false
	},
	
	{
		"name": "Molecular Synthesizer",
		"description": "Makes cloning labs <b>twice</b> as efficient.",
		"ftext": "Let's just hope it doesn't create a black hole on us.",
		"upgrades": ["cloning"],
		"cost": 300000000000,
		"unlock_level": 79,
		"bought": false
	},
		
	// Repopulated Planet

	{
		"name": "Search Algorithm",
		"description": "Makes repopulated planets gain <b>3,160</b> base GpS.",
		"ftext": "We weren't looking in the right places for good planets to repopulate.",
		"upgrades": ["planet"],
		"cost": 90000000,
		"unlock_level": 45,
		"bought": false
	},
	
	{
		"name": "Gas Giant",
		"description": "Makes repopulated planets <b>twice</b> as efficient.",
		"ftext": "Goomies are 97% water anyway. We can put them on bigger planets.",
		"upgrades": ["planet"],
		"cost": 700000000,
		"unlock_level": 56,
		"bought": false
	},
	
	{
		"name": "Dyson Sphere",
		"description": "Makes repopulated planets <b>twice</b> as efficient.",
		"ftext": "If we use a whole star to raise them, they've got to produce more quickly!",
		"upgrades": ["planet"],
		"cost": 8000000000,
		"unlock_level": 67,
		"bought": false
	},
	
	{
		"name": "Dry Farming",
		"description": "Makes repopulated planets <b>twice</b> as efficient.",
		"ftext": "The Goomies didn't make optimal use of the surface area given to them. Hopefully making the land artificially arable will help with production.",
		"upgrades": ["planet"],
		"cost": 200000000000,
		"unlock_level": 78,
		"bought": false
	},
	
	{
		"name": "Terraforming",
		"description": "Makes repopulated planets <b>twice</b> as efficient.",
		"ftext": "The answer was to make other planets like Earth all along!",
		"upgrades": ["planet"],
		"cost": 2100000000000,
		"unlock_level": 87,
		"bought": false
	},
	
	// RNG Abuser

	{
		"name": "32-bit processor",
		"description": "Makes RNG abusers <b>twice</b> as efficient.",
		"ftext": "It's 2014. What am I doing still using an 8086?",
		"upgrades": ["rngabuser"],
		"cost": 536870912,
		"unlock_level": 55,
		"bought": false
	},
	
	{
		"name": "64-bit processor",
		"description": "Makes RNG abusers <b>twice</b> as efficient.",
		"ftext": "It's 2014. What am I doing still using a Pentium III?",
		"upgrades": ["rngabuser"],
		"cost": 4294967296,
		"unlock_level": 65,
		"bought": false
	},
	
	{
		"name": "Dual-core processor",
		"description": "Makes RNG abusers <b>twice</b> as efficient.",
		"ftext": "It's 2014. What am I doing still using an Athlon 64?",
		"upgrades": ["rngabuser"],
		"cost": 137438953472,
		"unlock_level": 77,
		"bought": false
	},
	
	{
		"name": "Quad-core processor",
		"description": "Makes RNG abusers <b>twice</b> as efficient.",
		"ftext": "It's 2014. What am I doing still using a Core 2 Duo?",
		"upgrades": ["rngabuser"],
		"cost": 1099511627776,
		"unlock_level": 85,
		"bought": false
	},
	
	{
		"name": "Server cloud",
		"description": "Makes RNG abusers <b>twice</b> as efficient.",
		"ftext": "It's 2014. What am I doing still using a standalone computer?",
		"upgrades": ["rngabuser"],
		"cost": 17952186044416,
		"unlock_level": 93,
		"bought": false
	},
		
	// Photon Collider

	{
		"name": "Metrication",
		"description": "Makes photon colliders produce <b>299,792</b> base GpS.",
		"ftext": "Why didn't we do this years ago? Stupid American government.",
		"upgrades": ["photoncollider"],
		"cost": 58786252372,
		"unlock_level": 75,
		"bought": false
	},
	
	{
		"name": "Nuclear Goosion",
		"description": "Makes photon colliders <b>twice</b> as efficient.",
		"ftext": "Nuclear fusion isn't even something photons can do. But it sounds cool.",
		"upgrades": ["photoncollider"],
		"cost": 857142857142,
		"unlock_level": 83,
		"bought": false
	},
	
	{
		"name": "Wormhole",
		"description": "Makes photon colliders <b>twice</b> as efficient.",
		"ftext": "If we make the photons collide twice as fast, they'll produce twice the Goomies.",
		"upgrades": ["photoncollider"],
		"cost": 8000000000000,
		"unlock_level": 91,
		"bought": false
	},
	
	{
		"name": "Warp Drive 2",
		"description": "Makes photon colliders <b>twice</b> as efficient.",
		"ftext": "We miscalculated. That last upgrade only made them collide sqrt(2) times as fast.",
		"upgrades": ["photoncollider"],
		"cost": 32000000000000,
		"unlock_level": 94,
		"bought": false
	},
	
	{
		"name": "Reissner-Nordström Anomaly",
		"description": "Makes photon colliders <b>twice</b> as efficient.",
		"ftext": "If we collide photons through electrically charged black holes, the Goomy-producing portion gets filtered out.",
		"upgrades": ["photoncollider"],
		"cost": 135000000000000,
		"unlock_level": 96,
		"bought": false
	},
	
	{
		"name": "Quantum Goomies",
		"description": "Makes photon colliders <b>twice</b> as efficient.",
		"ftext": "The photons we're using now are in superstate of producing Goomies and not producing Goomies. Collapsing them into a state of always producing Goomies makes them more useful.",
		"upgrades": ["photoncollider"],
		"cost": 316227766016838,
		"unlock_level": 98,
		"bought": false
	},
	
];
