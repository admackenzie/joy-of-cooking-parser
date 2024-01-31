const data = [
	{
		id: 'part01_sub003_01',
		title: 'DRIP COFFEE',
		section: 'Beverages',
		page: null,
		servings: null,
		body: [
			'This is the basic method for pour-over brewers, Chemex pots, and the like. If you have an electric drip coffeemaker, follow the manufacturer’s directions, using the water-to-coffee proportions listed here.',
			'Place in a drip filter:',
			{
				list: [
					'About 2 tablespoons (⅜ ounce or 12 grams) medium- to fine-grind coffee for every ¾ cup (6 ounces) water',
				],
			},
			'Bring the water to a boil, then remove it from the heat and wait about 30 seconds for the water to cool to 200° to 205°F. Slowly pour just enough water over the ground coffee to moisten it thoroughly. Wait another 30 seconds or so, allowing the coffee to “bloom,” and gradually pour in the water, making sure all of the grounds stay saturated throughout brewing. When the drip process is complete, serve coffee at once or keep warm in a thermal carafe.',
		],
	},
	{
		id: 'part01_sub003_02',
		title: 'STEEPED COFFEE',
		section: 'Beverages',
		page: null,
		servings: null,
		body: [
			'This method is for steeping in a French press or a camp coffeepot or kettle. If using a French press, prime it with hot water before brewing and wrap in a kitchen towel while it steeps to keep it warm.',
			'Place in a French press or have ready:',
			{
				list: [
					'About 2 tablespoons (⅜ ounce or 12 grams) coarse-grind coffee for every ¾ cup (6 ounces) water',
				],
			},
			'Bring the water to a boil, then remove it from the heat and wait about 30 seconds for the water to cool to 200° to 205°F. Pour the water over the coffee in the French press, or add the coffee to the camp coffeepot or kettle, and stir well. Cover and let steep for 5 minutes.',
			[
				{ emphasis: ['For a French press,', 'bold'] },
				' slowly push the plunger all the way down after the brewing time has elapsed, forcing the coffee grounds to the bottom of the pot.',
			],
			[
				{ emphasis: ['For camp, cowboy, or river coffee,', 'bold'] },
				' open the kettle after the brewing time is up and add a splash of cold water to encourage the grounds to settle to the bottom. To be doubly sure that you are not serving excessive amounts of coffee grounds to yourself and your camping companions, pour the coffee through a metal strainer before doling it out.',
			],
		],
	},
	{
		id: 'part01_sub003_03',
		title: 'VACUUM-METHOD COFFEE',
		section: 'Beverages',
		page: null,
		servings: null,
		body: [
			'Boiling water in the lower bowl of the vacuum coffeemaker is forced into the upper chamber, where it mixes with the coffee and then filters back into the lower bowl. If using an electric vacuum coffeemaker, follow the manufacturer’s directions, using the water-to-coffee proportions listed here. Allow for every serving:',
			{
				list: [
					'About 2 tablespoons (⅜ ounce or 12 grams) medium- to fine-grind coffee for every ¾ cup (6 ounces) water',
				],
			},
			'Measure water into the lower bowl. Place on the heat. Add the ground coffee to the upper bowl. (If your equipment has a vented stem—a small hole in the side of the tube above the hot water line—you can place the upper bowl on the coffeemaker and place the whole thing on the heat; if it does not have a vented stem, wait until the water is actively boiling before putting the upper bowl in place.) Insert the upper bowl into the lower one with a light twist to ensure a tight seal. When nearly all the water has risen into the upper bowl (some of it will always remain below), stir the water and coffee thoroughly. In 1 to 3 minutes (the finer the grind, the shorter the time), remove from the heat and allow the coffee to run back into the lower bowl.',
		],
	},
	{
		id: 'part01_sub003_04',
		title: 'PERCOLATED COFFEE',
		section: 'Beverages',
		page: null,
		servings: null,
		body: [
			'This is the method for stovetop percolators; if you have an electric machine, follow the manufacturer’s directions, using the water-to-coffee proportions listed here. This method will extract bitter notes from the coffee if it is left on. Turn off or remove from the heat promptly after the brewing time has elapsed.',
			'Fill the bottom of the percolator with water. Place in the percolator’s basket:',
			{
				list: [
					'About 2 tablespoons (⅜ ounce or 12 grams) medium-grind coffee for every ¾ cup (6 ounces) water',
				],
			},
			'Place the percolator over medium heat and bring the water to a boil. Allow the coffee to percolate slowly, 6 to 8 minutes. Remove from the heat and serve.',
		],
	},
	{
		id: 'part01_sub003_05',
		title: 'COFFEE IN QUANTITY',
		section: 'Beverages',
		page: '4–5',
		servings: null,
		body: [
			'For large percolators, follow the manufacturer’s directions. For large coffee urns, measure out:',
			{
				list: [
					'3 cups coarse-grind coffee (about 10 ounces) for every 1 gallon water',
				],
			},
			'Put the ground coffee in a jelly bag, nut milk bag, or cotton pillowcase large enough to allow for double expansion and securely tie it off. Bring the water to a low boil and take it off the heat. When the water has cooled to 200° to 205°F, pour into the coffee urn. Place the coffee-filled bag in it. Let stand, covered, for 5 minutes. Agitate the bag several times during this period. Remove the bag, cover the urn, and serve at once.',
		],
	},
	{
		id: 'part01_sub003_06',
		title: 'COLD-BREW COFFEE',
		section: 'Beverages',
		page: null,
		servings: 'About 14 servings',
		body: [
			'This overnight method for making coffee results in a highly concentrated but extremely smooth brew. You can buy all kinds of filters and gadgets to make cold brew, but all you really need is a jar, a lined sieve, and patience. We prefer to line the sieve with a thin cotton kitchen towel, but any thin, finely woven natural fabric will work (the cheesecloth sold at supermarkets is too gauzy to filter out coffee grounds).',
			'Place in a 2-quart container:',
			{ list: ['2 cups coarse-grind coffee (about 7 ounces)'] },
			'Stir in:',
			{ list: ['4 cups room-temperature water'] },
			'Make sure all the coffee grounds are thoroughly wet. Cover and let stand at room temperature for at least 12 hours, but no more than 24. Strain the coffee through a sieve lined with a piece of clean, thin kitchen towel or other natural fabric. Transfer to a quart-sized jar and store in the refrigerator for up to 2 weeks. To serve, dilute to taste with hot water, or dilute with cold water and serve on ice. For an 8-ounce cup of hot coffee, we use 2 ounces cold-brew concentrate and 6 ounces hot water. For an iced 12-ounce beverage, we use 2 ounces cold-brew concentrate, 4 ounces cold water, and ice cubes to fill the glass.',
		],
	},
	{
		id: 'part01_sub003_07',
		title: 'ICED COFFEE',
		section: 'Beverages',
		page: null,
		servings: null,
		body: [
			[
				{ emphasis: ['I.', 'bold'] },
				' This quick method requires no special equipment. Prepare brewed coffee any way you wish, 4–5, using for each serving:',
			],
			{
				list: [
					'About 4 tablespoons coffee (¾ ounce or 24 grams) for every ¾ cup (6 ounces) water',
				],
			},
			'Pour this double-strength coffee directly over ice in a metal pitcher or small pot and stir it for 15 seconds. Strain the cooled coffee into tall glasses filled with more ice.',
			'You may sweeten it with:',
			{
				list: [
					[
						'(Sugar or ',
						{
							anchor: {
								text: 'Simple Syrup',
								href: 'part01_sub017_01',
							},
						},
						', to taste)',
					],
				],
			},
			'If desired, stir in:',
			{ list: ['(Milk or cream to taste)'] },
			[
				{ emphasis: ['II.', 'bold'] },
				' For each serving, pour over ice in a tall glass:',
			],
			{
				list: [
					[
						'2 ounces ',
						' or ',
						{
							anchor: {
								text: 'Cold-Brew Coffee',
								href: 'part01_sub003_06',
							},
						},
					],
				],
			},
			'Top up the glass with:',
			{ list: ['4 ounces or more cold water'] },
			[
				'If desired, add sweetener and cream as in ',
				{ emphasis: ['I.', 'bold'] },
			],
		],
	},
	{
		id: 'part01_sub007_01',
		title: 'VIETNAMESE COFFEE',
		section: 'Beverages',
		page: null,
		servings: '1 serving',
		body: [
			[
				'This is delicious hot or iced. If you do not have a ',
				', make ',
				{ emphasis: ['Café Bombón,', 'bold'] },
				' a similar drink popular in Spain, by pouring the condensed milk into a small tumbler and adding ',
				{ emphasis: ['2 ounces brewed espresso', 'bold'] },
				' on top. You can also make this in quantity with a French press. Prepare a small cup of strong coffee per person and pour over the condensed milk in individual cups.',
			],
			'Add to a glass tumbler:',
			{ list: ['2 tablespoons sweetened condensed milk'] },
			'Place a Vietnamese coffee filter over the tumbler and add to the filter:',
			{
				list: [
					'2 tablespoons fine-grind dark-roast coffee or coffee with chicory',
				],
			},
			'Pour over the grounds to moisten:',
			{ list: ['2 tablespoons hot water'] },
			'Place the top filter over them and press or screw down lightly. Fill the filter with hot, not boiling water (200° to 205°F) and cover with the metal lid. Allow the coffee to drip into the glass. This should take 3 to 5 minutes (if it is faster than 3 minutes, either the coffee is too coarse or the filter is not pressed tight enough; if it is slower than 5 minutes, either the coffee is too fine or the filter is pressed too tight). Serve hot with a small spoon for stirring the dark and white layers together. To serve cold, stir the condensed milk into the coffee and pour into a glass filled with ice.',
		],
	},
	{
		id: 'part01_sub007_02',
		title: 'CUBAN COFFEE',
		section: 'Beverages',
		page: null,
		servings: '4 small but potent servings',
		body: [
			'Cuban coffee is very dark, very strong, and sweet. Its most notable feature is the layer of foam on top, which is created by frothing sugar with some of the brewed coffee. This is traditionally made with Cuban, preground coffee brewed with a moka pot, but feel free to make the espresso in any of the ways mentioned in .',
			'Prepare:',
			{ list: ['1 cup brewed espresso'] },
			'Meanwhile, add to a small measuring cup or heatproof pitcher with a pouring spout:',
			{ list: ['3 tablespoons sugar'] },
			[
				'Add a teaspoon or so of the brewed coffee to the sugar in the pitcher. Stir the sugar vigorously with a spoon until it is very frothy and appears to foam. Pour in the remaining coffee and stir gently until the sugar is completely dissolved. Pour into cups. There should be a layer of dark brown foam, or ',
				{ emphasis: ['espuma', 'italic'] },
				', on the top of each cup.',
			],
		],
	},
	{
		id: 'part01_sub007_03',
		title: 'FROZEN COFFEE',
		section: 'Beverages',
		page: null,
		servings: '2 servings',
		body: [
			'Place in a blender:',
			{
				list: [
					[
						'¼ cup double-strength coffee as for ',
						{
							anchor: {
								text: 'Iced Coffee',
								href: 'part01_sub003_07',
							},
						},
						', ',
						', or ',
					],
					'1 cup whole milk',
					'2 tablespoons sugar or sweetened condensed milk',
					'(2 ounces rum)',
				],
			},
			'Add:',
			{ list: ['10 ice cubes'] },
			'Blend thoroughly. Serve in chilled glasses.',
		],
	},
	{
		id: 'part01_sub010_01',
		title: 'COLD-BREWED TEA',
		section: 'Beverages',
		page: null,
		servings: '8 servings',
		body: [
			'This recipe works well with teas of all kinds, including herbal teas. The resulting tea will not have the bitterness that hot brewed teas have, and the flavor will not be as intense. Use the smaller amount of tea if it is fine, such as rooibos. Use the larger amount if the tea leaves are “fluffier” (like white tea).',
			'Add to a glass container or pitcher:',
			{ list: ['2 to 3 tablespoons any loose-leaf tea'] },
			'Fill the container with:',
			{ list: ['8 cups cold water'] },
			'Refrigerate and let sit 8 hours or overnight. Strain out the leaves and serve the tea over ice.',
		],
	},
	{
		id: 'part01_sub010_02',
		title: 'MASALA CHAI',
		section: 'Beverages',
		page: '8',
		servings: '4 to 5 servings',
		body: [
			'This sweet and creamy Indian drink with an enticing combination of spices is popular the world over. Be sure to use a strong black tea, such as Assam—the flavor of lighter teas will be lost among the spices and milk.',
			'Bring just to a boil in a medium saucepan:',
			{
				list: [
					'3 cups water',
					'1 ½ cups milk',
					'½ cup sugar, or to taste',
					'2 cinnamon sticks',
					'16 green cardamom pods, crushed',
					'1 teaspoon whole cloves',
					'½-inch piece ginger, thinly sliced',
					'½ teaspoon black peppercorns',
				],
			},
			'Remove from the heat, cover, and let stand for 20 minutes. Return to a simmer, then remove from the heat and stir in:',
			{ list: ['2 tablespoons black tea leaves'] },
			'Cover and let stand 2 minutes. Strain and serve at once. Or let cool and serve over ice.',
		],
	},
	{
		id: 'part01_sub010_03',
		title: 'ICED TEA',
		section: 'Beverages',
		page: '8',
		servings: null,
		body: [
			[
				'This beverage originated in our family’s native town, St. Louis. The inventor was actually an Englishman who arrived at the concoction as an act of desperation, when the general public showed indifference to his hot tea offerings in the sweltering midwestern heat. Try adding mint, lemon zest strips, or dried hibiscus flowers to the tea as it brews. Flavored syrups, 15–16, and fruit juices can be added to taste. Or, mix half tea with half ',
				' to make an ',
				{ emphasis: ['Arnold Palmer.', 'bold'] },
			],
			'Prepare tea, using the chart on 7, doubling the quantity of leaves (but not the water). Stir, strain, and pour over ice. Serve with:',
			{
				list: [
					'Lemon slices',
					'(Sprigs of mint)',
					[
						'(Sugar or ',
						{
							anchor: {
								text: 'Simple Syrup',
								href: 'part01_sub017_01',
							},
						},
						', to taste)',
					],
				],
			},
		],
	},
	{
		id: 'part01_sub010_04',
		title: 'SWEET SOUTHERN ICED TEA',
		section: 'Beverages',
		page: '8',
		servings: '6 to 8 servings',
		body: [
			'In the South, iced tea is sweet and strong—too dark to read the newspaper through.',
			' using:',
			{
				list: [
					'4 cups water',
					'6 to 7 bags black tea (or 8 teaspoons black tea leaves)',
				],
			},
			'Steep for 5 to 10 minutes. Remove the tea bags (or strain) and stir in while hot:',
			{ list: ['1 cup sugar, or to taste'] },
			'Transfer to a large pitcher and add:',
			{
				list: [
					'2 to 4 cups water, depending on the desired strength of the tea',
				],
			},
			'Chill. Serve over ice. If desired, garnish with:',
			{ list: ['(Lemon slices)'] },
		],
	},
	{
		id: 'part01_sub010_05',
		title: 'THAI ICED TEA',
		section: 'Beverages',
		page: '8–9',
		servings: '4 servings',
		body: [
			'Thai iced tea is typically made only with black tea, but to achieve its characteristic (usually artificial) color, we add rooibos as well. For Thai iced tea that is closer to the restaurant version in sweetness, use the larger amount of sugar.',
			'In a medium saucepan bring to a boil:',
			{
				list: [
					'5 cups water',
					'½ to ¾ cup packed brown sugar or palm sugar',
				],
			},
			'Remove from the heat and add:',
			{
				list: [
					'2 tablespoons rooibos tea',
					'1 tablespoon black tea leaves',
					'2 green cardamom pods, crushed',
					'1 whole star anise',
					'Seeds scraped from 1 vanilla bean or 1 teaspoon vanilla extract or vanilla bean paste',
				],
			},
			'Steep for 20 minutes. Strain. Fill 4 tall glasses with ice and divide the tea among the glasses. Pour over the top of each:',
			{
				list: [
					'2 tablespoons half-and-half or sweetened condensed milk (½ cup total)',
				],
			},
		],
	},
	{
		id: 'part01_sub011_01',
		title: 'HOT COCOA',
		section: 'Beverages',
		page: '9',
		servings: '4 servings',
		body: [
			'The proportions here will produce a cocoa richer in flavor but much less sweet than you will get from most commercial mixes. You may substitute nondairy options for the milk, such as almond or soy milk.',
			'Whisk together in a medium heavy saucepan:',
			{
				list: [
					'¼ cup unsweetened cocoa powder',
					'2 to 3 tablespoons sugar, to taste',
					'¼ teaspoon salt',
				],
			},
			'Whisk into the cocoa mixture in a slow, steady stream:',
			{ list: ['3 cups milk or half-and-half'] },
			'Heat over medium heat, stirring frequently and scraping the bottom of the pan, just until bubbles appear around the sides. Remove from the heat. If desired, stir in:',
			{
				list: [
					'(½ teaspoon vanilla or 1 tablespoon Kahlúa or Grand Marnier)',
				],
			},
			'If desired, top each serving with:',
			{
				list: [
					'(Ground nutmeg or cinnamon)',
					[
						'(',
						{
							anchor: {
								text: 'Whipped Cream',
								href: 'part24_sub001_01',
							},
						},
						' or marshmallows)',
					],
				],
			},
		],
	},
	{
		id: 'part01_sub011_02',
		title: 'COCOA SYRUP',
		section: 'Beverages',
		page: null,
		servings: '1 ½ cups; enough for 12 servings Quick Hot Cocoa',
		body: [
			'This syrup is quick and easy to prepare, and its flavor far exceeds anything you can buy. It can be used to make hot and cold cocoa drinks alike.',
			'Whisk together in a medium saucepan:',
			{ list: ['1 cup unsweetened cocoa powder', '¾ cup sugar'] },
			'Add and stir to combine:',
			{ list: ['1 cup cold water', '(½ cup malted milk powder)'] },
			'Bring just to a boil over medium heat, stirring constantly. Remove from the heat and let cool. Store covered at room temperature for several days, or refrigerate for up to 3 weeks. To liquefy refrigerated syrup, heat on the stove or in the microwave.',
		],
	},
	{
		id: 'part01_sub011_03',
		title: 'QUICK HOT COCOA',
		section: 'Beverages',
		page: '9',
		servings: '1 serving',
		body: [
			'Stir together in a small saucepan or mug:',
			{
				list: [
					'¾ cup milk',
					'(2 tablespoons heavy cream)',
					[
						'2 tablespoons ',
						{
							anchor: {
								text: 'Cocoa Syrup',
								href: 'part01_sub011_02',
							},
						},
					],
				],
			},
			'Heat over medium-low heat, or in a microwave on high for 30 to 45 seconds, until warm but not boiling.',
		],
	},
	{
		id: 'part01_sub011_04',
		title: 'GANACHE FOR HOT CHOCOLATE',
		section: 'Beverages',
		page: '9',
		servings:
			'About 1 ½ cups; enough for 6 servings Quick Hot Chocolate or Drinking Chocolate I',
		body: [
			'Ganache is often used for truffles or icing. Here we use it to make an extraordinary beverage, richer than hot cocoa.',
			'Bring to a rolling boil in a medium heavy saucepan:',
			{ list: ['1 cup heavy cream'] },
			'Immediately remove from the heat and add, whisking until smooth:',
			{
				list: [
					'8 ounces dark, bittersweet, or semisweet chocolate (60 to 72% cacao), finely chopped',
				],
			},
			'Use immediately or let cool, then refrigerate, covered, for up to 2 weeks.',
		],
	},
	{
		id: 'part01_sub011_05',
		title: 'QUICK HOT CHOCOLATE OR DRINKING CHOCOLATE',
		section: 'Beverages',
		page: '9',
		servings: '1 serving',
		body: [
			[
				{ emphasis: ['I.', 'bold'] },
				' Stir together in a small saucepan or mug:',
			],
			{
				list: [
					[
						'¼ cup Ganache for ',
						{
							anchor: {
								text: 'Hot Chocolate',
								href: 'part01_sub011_04',
							},
						},
					],
					'½ cup milk, water, or coffee',
				],
			},
			'Heat over low heat, or in a microwave on high for 30 to 45 seconds, until warm but not boiling. If desired, stir in:',
			{
				list: [
					'(⅛ teaspoon vanilla or ½ teaspoon Kahlúa or Grand Marnier)',
				],
			},
			'Top with:',
			{
				list: [
					[
						'A dollop of ',
						{
							anchor: {
								text: 'Whipped Cream',
								href: 'part24_sub001_01',
							},
						},
					],
					'Ground nutmeg or cinnamon',
				],
			},
			[
				{ emphasis: ['II.', 'bold'] },
				' Bring just to a boil in a small saucepan or microwave-safe bowl:',
			],
			{ list: ['½ cup half-and-half'] },
			'Remove from the heat and whisk in until melted:',
			{
				list: [
					'1 ounce dark, bittersweet, or semisweet chocolate (60 to 72% cacao), finely chopped',
				],
			},
		],
	},
	{
		id: 'part01_sub011_06',
		title: 'SPICED HOT COCOA',
		section: 'Beverages',
		page: '10',
		servings: '4 servings',
		body: [
			'Stir together in a medium heavy saucepan:',
			{
				list: [
					'6 tablespoons unsweetened cocoa powder',
					'6 tablespoons sugar',
				],
			},
			'Vigorously stir in, first by tablespoons and then in a slow, steady stream:',
			{ list: ['3 cups milk'] },
			'Heat over medium heat, stirring constantly and scraping the bottom of the pan, just until bubbles appear around the sides. Remove from the heat and stir in:',
			{
				list: [
					'2 cinnamon sticks, crushed',
					'6 whole cloves, crushed',
					'1 ½-inch piece ginger, peeled and sliced',
				],
			},
			'Let stand, covered, for 30 minutes. Reheat until steaming, strain, and pour into mugs. If desired, top with:',
			{
				list: [
					[
						'(',
						{
							anchor: {
								text: 'Whipped Cream',
								href: 'part24_sub001_01',
							},
						},
						')',
					],
				],
			},
		],
	},
	{
		id: 'part01_sub011_07',
		title: 'SPICED HOT CHOCOLATE',
		section: 'Beverages',
		page: '10',
		servings: '4 servings',
		body: [
			[
				'Prepare ',
				{ emphasis: ['Spiced Hot Cocoa,', 'bold'] },
				' using ',
				{ emphasis: ['½ recipe Ganache for Hot Chocolate', 'bold'] },
				' instead of the cocoa powder and sugar. Let stand, covered, for 30 minutes. Reheat until steaming, strain, and pour into mugs. If desired, top each serving with ',
				{ emphasis: ['(Whipped Cream)', 'bold'] },
				'.',
			],
		],
	},
	{
		id: 'part01_sub011_08',
		title: 'CHAMPURRADO (MASA-THICKENED HOT CHOCOLATE)',
		section: 'Beverages',
		page: '10',
		servings: '6 servings',
		body: [
			[
				{ emphasis: ['Champurrado', 'italic'] },
				' is typically made with Mexican chocolate, which is very sweet and sold in tablets. We prefer the flavor of bitter, dark chocolate, but you may use Mexican chocolate if desired. Simply leave out the sugar and then add sugar to taste after cooking. If you can’t find ',
				{ emphasis: ['piloncillo', 'italic'] },
				', which is Mexican brown sugar, use dark brown sugar.',
			],
			'Bring to a simmer in a medium saucepan:',
			{
				list: [
					'4 cups whole milk',
					'3 ounces dark, bittersweet, or semisweet chocolate (60 to 72% cacao), finely chopped',
					'½ teaspoon ground cinnamon',
					'⅓ cup chopped piloncillo or packed dark brown sugar',
					'¼ teaspoon salt',
				],
			},
			'Gradually whisk in:',
			{ list: ['½ cup masa harina'] },
			'Reduce the heat to medium-low and cook, whisking frequently, until thickened, about 4 minutes. Remove from the heat and whisk in:',
			{ list: ['1 teaspoon vanilla'] },
		],
	},
	{
		id: 'part01_sub011_09',
		title: 'MAYAN HOT CHOCOLATE',
		section: 'Beverages',
		page: '10',
		servings: '4 servings',
		body: [
			'This spiced hot chocolate has a remarkably clean chocolate flavor because no dairy is added. Use a high-quality chocolate that you would be happy eating on its own.',
			'Combine in a small saucepan:',
			{
				list: [
					'2 ½ cups water',
					'½ teaspoon ground cinnamon',
					'⅛ teaspoon cayenne pepper',
					'⅛ teaspoon salt',
				],
			},
			'Bring to a brisk simmer, remove from the heat, and add, whisking until melted and completely combined:',
			{
				list: [
					'4 ounces dark, bittersweet, or semisweet chocolate (60 to 72% cacao), finely chopped',
				],
			},
		],
	},
	{
		id: 'part01_sub011_10',
		title: 'BRAZILIAN CHOCOLATE',
		section: 'Beverages',
		page: '10',
		servings: '4 servings',
		body: [
			'Combine in a small heatproof bowl:',
			{
				list: [
					'1 ounce dark, bittersweet, or semisweet chocolate (60 to 72% cacao), chopped',
					'¼ cup sugar',
					'⅛ teaspoon salt',
				],
			},
			'Combine in a saucepan:',
			{
				list: [
					'1 ½ cups strong coffee',
					'1 cup water',
					'1 cup half-and-half',
				],
			},
			'Bring to a boil, then pour over the chocolate, whisking to dissolve the chocolate and sugar completely. Stir in:',
			{ list: ['1 teaspoon vanilla', 'Pinch of ground cinnamon'] },
		],
	},
	{
		id: 'part01_sub011_11',
		title: 'KAI',
		section: 'Beverages',
		page: '10',
		servings: '4 to 6 servings',
		body: [
			'“When out at sea, on look-out watch, / The hours pass slowly by, / But maybe someone brings to me / A mug of steaming kai.” This rich and delicious drink was a longtime staple of the British Royal Navy, meant to keep men on night duty nourished as well as wide awake. For those of us with more modest agendas, our version is a superb sustainer on a cold winter’s day.',
			'Place in a medium saucepan:',
			{
				list: [
					'4 ounces unsweetened chocolate or dark chocolate (72% cacao or above) finely chopped',
					'1 ½ cups water',
				],
			},
			'Heat, whisking frequently, until the chocolate is melted. Add:',
			{
				list: [
					'One 14-ounce can sweetened condensed milk',
					'(2 tablespoons malted milk powder or instant custard powder)',
				],
			},
			'Whisk to combine and heat through. Remove from the heat. If desired, add:',
			{ list: ['(4 ounces rum or brewed coffee)'] },
		],
	},
	{
		id: 'part01_sub011_12',
		title: 'EGG CREAM',
		section: 'Beverages',
		page: '10',
		servings: '1 serving',
		body: [
			'This soda-fountain classic from Brooklyn contains no eggs or cream.',
			'Pour into a tall glass:',
			{
				list: [
					'1 cup very cold milk',
					[
						'2 tablespoons ',
						{
							anchor: {
								text: 'Cocoa Syrup',
								href: 'part01_sub011_02',
							},
						},
					],
				],
			},
			'Stir vigorously until mixed well and top off with:',
			{ list: ['⅓ cup sparkling water'] },
		],
	},
	{
		id: 'part01_sub012_01',
		title: 'TOMATO-VEGETABLE JUICE',
		section: 'Beverages',
		page: '11',
		servings: '4 servings',
		body: [
			'I. FRESH TOMATOES',
			'Combine in a large saucepan and simmer 30 minutes:',
			{
				list: [
					'12 medium tomatoes, chopped',
					'2 celery ribs, with leaves, chopped',
					'1 slice onion',
					'3 sprigs parsley',
					'½ bay leaf',
					'½ cup water',
				],
			},
			'Strain into a pitcher. Season with:',
			{
				list: [
					'1 teaspoon salt',
					'¼ teaspoon paprika',
					'¼ teaspoon sugar',
				],
			},
			'Serve thoroughly chilled.',
			'II. CANNED OR BOTTLED TOMATO JUICE',
			'This juice is best the day it is made. Sprigs of bruised tarragon, basil, or other herbs may be steeped in the juice and then strained out before it is served.',
			'Combine in a pitcher:',
			{
				list: [
					'2 ½ cups canned or bottled tomato juice',
					'1 ½ tablespoons lemon juice',
					'1 teaspoon grated celery',
					'½ teaspoon grated onion',
					'½ teaspoon grated peeled horseradish root',
					'¾ teaspoon salt',
					'¼ teaspoon sugar',
					'⅛ teaspoon paprika',
					'A dash of Worcestershire or hot pepper sauce',
				],
			},
			'Serve thoroughly chilled.',
		],
	},
	{
		id: 'part01_sub012_02',
		title: 'CITRUS JUICE MEDLEY',
		section: 'Beverages',
		page: '11',
		servings: '2 to 3 servings',
		body: [
			'Combine in a pitcher:',
			{
				list: [
					'¾ cup grapefruit juice',
					'¼ cup lemon or lime juice',
					'½ cup orange juice',
					[
						'¼ cup sugar or ',
						{
							anchor: {
								text: 'Simple Syrup',
								href: 'part01_sub017_01',
							},
						},
					],
				],
			},
			'Serve chilled or over ice, garnished with:',
			{ list: ['Sprigs of mint'] },
		],
	},
	{
		id: 'part01_sub012_03',
		title: 'CRANBERRY JUICE',
		section: 'Beverages',
		page: '11',
		servings: '4 to 6 servings',
		body: [
			'Combine in a medium saucepan:',
			{ list: ['One 12-ounce bag cranberries', '3 cups water'] },
			'Cook over medium heat until the skins pop, about 5 minutes. Strain through a cheesecloth-lined sieve into a medium saucepan, squeezing to extract all the juice from the berries. Bring to a boil and add:',
			{ list: ['⅓ to ½ cup sugar, to taste', '(6 whole cloves)'] },
			'Cook for 2 minutes. Remove from the heat and cool (removing the cloves, if they were used). Add:',
			{ list: ['¼ cup orange juice or 1 tablespoon lemon juice'] },
			'Chill thoroughly. Garnish with:',
			{ list: ['Lime slices'] },
		],
	},
	{
		id: 'part01_sub013_01',
		title: 'TOMATO-CELERY-CARROT JUICE',
		section: 'Beverages',
		page: '11–12',
		servings: '2 to 4 servings',
		body: [
			'Process the following in a juicer or blender:',
			{
				list: [
					'2 medium tomatoes, quartered (about 8 ounces)',
					'2 large celery ribs, cut into chunks (about 4 ounces)',
					'2 large carrots, cut into chunks (about 6 ounces)',
					'4 sprigs parsley',
					'(½-inch piece peeled horseradish root)',
				],
			},
		],
	},
	{
		id: 'part01_sub013_02',
		title: 'PINEAPPLE-MANGO JUICE',
		section: 'Beverages',
		page: '12',
		servings: '4 servings',
		body: [
			'Cut into cubes:',
			{ list: ['1 ', '2 large mangoes, pitted and peeled'] },
			'Process in a blender or a juicer. Add:',
			{ list: ['Lime juice to taste'] },
			'Garnish with:',
			{ list: ['Sprigs of mint'] },
		],
	},
	{
		id: 'part01_sub013_03',
		title: 'CARROT-BEET-GINGER JUICE',
		section: 'Beverages',
		page: '12',
		servings: '1 serving',
		body: [
			'Process the following in a juicer or a blender:',
			{
				list: [
					'2 small beets, trimmed and cut into chunks (about 8 ounces)',
					'1 large carrot, cut into chunks (about 3 ounces)',
					'2-inch piece ginger, cut into chunks (peeled if using a blender)',
					'1 small lemon, quartered (juiced if using a blender)',
				],
			},
		],
	},
	{
		id: 'part01_sub013_04',
		title: 'KALE-GINGER LEMONADE',
		section: 'Beverages',
		page: '12',
		servings: '1 serving',
		body: [
			'This is one of Megan’s favorite midafternoon pick-me-ups: a tart, spicy green juice.',
			'Process the following in a juicer or a blender:',
			{
				list: [
					'1 cup packed shredded kale',
					'1 medium tart-sweet apple, quartered (cored if using a blender)',
					'1 small lemon, halved (juiced if using a blender)',
					'2-inch piece ginger, cut into small chunks (peeled if using a blender)',
				],
			},
		],
	},
	{
		id: 'part01_sub014_01',
		title: 'FRUIT SMOOTHIE',
		section: 'Beverages',
		page: null,
		servings: '1 or 2 servings',
		body: [
			'The basic proportions in this recipe can be used to create a wide variety of smoothies tailored to ingredients you have on hand. Note that if using a dark fruit such as blueberries, adding spirulina will turn your smoothie a muddy color.',
			'Combine in a blender:',
			{
				list: [
					'1 cup frozen fruit (such as berries, cherries, or peach, mango, or pineapple chunks)',
					'1 frozen ripe banana, cut into chunks',
					'½ cup milk, nondairy milk, coconut water, water, or fruit juice (or ½ cup yogurt and 3 tablespoons water or milk)',
					'(Up to 1 tablespoon sweetener, such as honey, maple syrup, or agave syrup, or 2 pitted dried dates)',
					'(1 tablespoon nut or seed butter, such as peanut, cashew, or sunflower)',
					'(1 teaspoon , chia seeds, or flaxseeds)',
				],
			},
			'Blend until smooth. Pour into a glass and serve, or serve in a bowl and top with any of the following:',
			{
				list: [
					'Bee pollen',
					'Seeds or nuts, such as sunflower, pumpkin, flaked coconut, chia, or hemp',
					'Granola',
					'Cut-up fresh fruit',
				],
			},
		],
	},
	{
		id: 'part01_sub014_02',
		title: 'GREEN SMOOTHIE',
		section: 'Beverages',
		page: '12',
		servings: '1 or 2 servings',
		body: [
			'Some green smoothies tend to be a tad… vegetal. We think of this pleasant and milder version as an entry-level green smoothie.',
			'Combine in a blender:',
			{
				list: [
					'1 cup packed baby spinach or shredded  kale',
					'1 cup frozen mango, pineapple, or banana chunks',
					'1 cup unsweetened almond milk, beverage-style coconut milk, coconut water, or water (or ½ cup plain yogurt plus ½ cup water)',
					'(½ avocado, pitted, peeled, and chopped)',
					'2 tablespoons lime juice',
					'1 tablespoon maple syrup, honey, or agave syrup, or 2 pitted dried dates',
					'(1 teaspoon )',
					'Pinch of salt',
				],
			},
			'Blend until smooth.',
		],
	},
	{
		id: 'part01_sub014_03',
		title: 'CHOCOLATE-CHERRY SMOOTHIE',
		section: 'Beverages',
		page: null,
		servings: '1 or 2 servings',
		body: [
			'Combine in a blender:',
			{
				list: [
					'1 ¼ cups milk or nondairy milk',
					'1 cup frozen sweet cherries',
					'1 cup ice cubes',
					[
						'3 tablespoons ',
						{
							anchor: {
								text: 'Cocoa Syrup',
								href: 'part01_sub011_02',
							},
						},
					],
				],
			},
			'Blend until smooth.',
		],
	},
	{
		id: 'part01_sub014_04',
		title: 'PEANUT BUTTER AND BANANA SMOOTHIE',
		section: 'Beverages',
		page: null,
		servings: '2 servings',
		body: [
			'We also enjoy almond butter in this creamy, satisfying concoction.',
			'Combine in a blender:',
			{
				list: [
					'3 frozen ripe bananas, coarsely chopped',
					'2 cups milk or nondairy milk',
					'¼ cup peanut butter',
					'(1 tablespoon unsweetened cocoa powder)',
				],
			},
			'Blend until smooth.',
		],
	},
	{
		id: 'part01_sub014_05',
		title: 'PAPAYA-MANGO BATIDO',
		section: 'Beverages',
		page: '12–13',
		servings: '2 servings',
		body: [
			[
				'Also known as ',
				{ emphasis: ['licuados', 'italic'] },
				', ',
				{ emphasis: ['batidos', 'italic'] },
				' are often thinner than a smoothie and use milk as an ingredient.',
			],
			'Combine in a blender:',
			{
				list: [
					'1 cup papaya nectar',
					'1 cup frozen mango chunks',
					'1 cup milk',
					'3 tablespoons lime juice',
				],
			},
			'Blend until smooth.',
		],
	},
	{
		id: 'part01_sub014_06',
		title: 'MANGO LASSI',
		section: 'Beverages',
		page: '13',
		servings: '3 or 4 servings',
		body: [
			[
				'Alphonso or Kesar mango puree, available canned at Indian grocery stores, is especially good here (use 2 cups of the puree and add sugar to taste). For making this into a frozen yogurt dessert, see ',
				{ anchor: { text: 'here', href: 'part26_sub006_04' } },
				'.',
			],
			'Combine in a blender:',
			{
				list: [
					'2 cups plain yogurt',
					'2 large mangoes (about 1 ½ pounds), pitted, peeled, and chopped',
					'2 tablespoons sugar',
					'10 ice cubes',
				],
			},
			'Process until the ice is partially crushed. Pour into chilled glasses.',
		],
	},
	{
		id: 'part01_sub014_07',
		title: 'FRUIT KEFIR',
		section: 'Beverages',
		page: '13',
		servings: '4 to 6 servings',
		body: [
			'Kefir is a close relative of yogurt and is sold in liquid form. If you cannot find it, cultured buttermilk is a fine substitute.',
			'Combine in a blender:',
			{
				list: [
					'2 cups plain kefir',
					'2 cups raspberries, blueberries, blackberries, chopped strawberries, or peeled, pitted, and chopped peaches, apricots, or mangoes',
				],
			},
			'Process until smooth. Refrigerate for about 24 hours. Stir before serving.',
		],
	},
	{
		id: 'part01_sub014_08',
		title: 'ICE CREAM FLOAT',
		section: 'Beverages',
		page: null,
		servings: '1 serving',
		body: [
			'For an adult version, use stout or porter.',
			'Add to a glass:',
			{ list: ['1 scoop or more vanilla ice cream'] },
			'Fill the glass with:',
			{ list: ['Root beer, cola, or other soft drink'] },
		],
	},
	{
		id: 'part01_sub014_09',
		title: 'MILK SHAKE',
		section: 'Beverages',
		page: '13',
		servings: '2 servings',
		body: [
			[
				'For a ',
				{ emphasis: ['malted milk shake,', 'bold'] },
				' add ',
				{ emphasis: ['½ cup malted milk powder', 'bold'] },
				'.',
			],
			'Combine in a blender:',
			{
				list: [
					'2 cups any flavor ice cream',
					'2 cups milk',
					[
						'(¼ cup ',
						{
							anchor: {
								text: 'Cocoa Syrup',
								href: 'part01_sub011_02',
							},
						},
						')',
					],
				],
			},
			'Process until smooth and frothy.',
		],
	},
	{
		id: 'part01_sub014_10',
		title: 'FRUIT MILK SHAKE',
		section: 'Beverages',
		page: '13',
		servings: '2 servings',
		body: [
			'Combine in a blender:',
			{
				list: [
					'1 cup vanilla ice cream',
					'1 cup milk',
					'2 cups sliced ripe bananas, peeled peaches, or strawberries',
				],
			},
			'Process until smooth.',
		],
	},
	{
		id: 'part01_sub014_11',
		title: 'VIETNAMESE AVOCADO SHAKE',
		section: 'Beverages',
		page: '13',
		servings: 'Serves 2',
		body: [
			'While Americans tend to think of the avocado as a savory food, in many parts of the world it is used in sweet preparations. This rich shake is a strong argument in favor of the avocado as dessert. Play with the ratio of sweetened condensed milk to milk depending on the level of sweetness you prefer.',
			'Combine in a blender:',
			{
				list: [
					'1 large avocado, pitted and scooped from the peel',
					'4 to 6 standard ice cubes or ¾ cup crushed ice',
					'⅓ cup sweetened condensed milk',
					'⅓ cup milk or coconut milk',
					'Pinch of salt',
				],
			},
			'Blend until smooth.',
		],
	},
	{
		id: 'part01_sub015_01',
		title: 'LEMONADE OR LIMEADE',
		section: 'Beverages',
		page: '13',
		servings: '8 servings',
		body: [
			[
				'Orange, pineapple, raspberry, white grape juice, or other fruit juices may be combined with lemonade or limeade. To add a subtle twist, make the sugar syrup with ',
				{
					emphasis: [
						'2 to 3 sprigs rosemary, a small bunch of mint or thyme,',
						'bold',
					],
				},
				' or a ',
				{ emphasis: ['2-inch piece ginger, thinly sliced.', 'bold'] },
				' Let the syrup cool to room temperature and strain before proceeding. For ',
				{ emphasis: ['Pink Lemonade,', 'bold'] },
				' add ',
				{ emphasis: ['3 tablespoons grenadine.', 'bold'] },
				' To make an ',
				{ emphasis: ['Arnold Palmer,', 'bold'] },
				' mix equal parts lemonade and ',
				{ anchor: { text: 'Iced Tea', href: 'part01_sub010_03' } },
				'. For a tarter beverage, use the smaller amount of sugar listed below.',
			],
			'Combine in a saucepan and boil for 2 minutes:',
			{ list: ['3 cups water', '1 ½ to 2 cups sugar, to taste'] },
			'Add:',
			{ list: ['5 cups cold water', '1 cup lemon or lime juice'] },
			'Pour over ice cubes in tall glasses or into a pitcher of ice.',
		],
	},
	{
		id: 'part01_sub015_02',
		title: 'FLAVORED OR ITALIAN SODAS',
		section: 'Beverages',
		page: '13–14',
		servings: '1 serving',
		body: [
			[
				'This is an excellent way to use up jelly that didn’t set properly. Or, gently melt an equal amount of any jelly and use it instead of the syrup. For a tangier drink, use ',
				{ emphasis: ['Fruit Shrub', 'bold'] },
				' instead of the syrup.',
			],
			'Add to a tall glass:',
			{
				list: [
					'3 tablespoons any flavored syrup, store-bought or , or to taste',
				],
			},
			'Fill the glass with crushed ice, then top up with:',
			{ list: ['Sparkling water'] },
			'If desired, pour over the top:',
			{
				list: [
					'(2 tablespoons heavy cream or half-and-half, or to taste)',
				],
			},
		],
	},
	{
		id: 'part01_sub015_03',
		title: 'FRUIT SODAS',
		section: 'Beverages',
		page: '14',
		servings: '1 serving',
		body: [
			' are delicious served this way.',
			'Pour over ice in a tall glass:',
			{
				list: [
					'½ cup sparkling water',
					'½ cup lemonade, limeade, orange, pineapple, cranberry, guava, apricot, or other juice or nectar',
					'(Any , to taste)',
					'(Lemon or lime juice, to taste)',
				],
			},
		],
	},
	{
		id: 'part01_sub015_04',
		title: 'AGUA FRESCA',
		section: 'Beverages',
		page: '14',
		servings: 'About 3 cups; 6 servings',
		body: [
			[
				{ emphasis: ['Agua fresca', 'italic'] },
				', Spanish for “cool water,” is a way of distilling the essence of ripe fruit into a refreshing summer drink. For a boozy version, frost the rim of each glass with ',
				{ emphasis: ['coarse salt.', 'bold'] },
				' Add several ice cubes to the glass and pour ½ cup agua fresca over them. Add ',
				{ emphasis: ['1 to 2 ounces vodka, rum, or tequila.', 'bold'] },
				' Serve with a ',
				{ emphasis: ['lime wedge', 'bold'] },
				' or a ',
				{ emphasis: ['piece of the fruit', 'bold'] },
				' the ',
				{ emphasis: ['agua fresca', 'italic'] },
				' was made with.',
			],
			'Place in a blender (using the larger amount of water for fruits that don’t release enough liquid to blend easily):',
			{
				list: [
					'4 cups cubed, seeded fruit such as cantaloupe, peach, mango, pineapple, watermelon, honeydew, or cucumber',
					'¼ to ½ cup water',
				],
			},
			'Depending on the fruit, you may need to add even more water than called for above. Blend until very smooth. Strain through a fine-mesh sieve, pressing the solids to extract all the juice. Whisk in:',
			{
				list: [
					'1 to 3 tablespoons honey, warmed slightly, or to taste',
					'2 tablespoons lemon or lime juice, or to taste',
				],
			},
			'Chill thoroughly. To serve, stir together equal parts fruit juice and:',
			{ list: ['Sparkling water'] },
		],
	},
	{
		id: 'part01_sub015_05',
		title: 'HORCHATA',
		section: 'Beverages',
		page: '14',
		servings: '6 servings',
		body: [
			'Aside from a lime-garnished Mexican lager, this sweetened and spiced grain and nut milk is the best accompaniment to tacos we know. One of our testers turned her leftover horchata into popsicles, which we think is a fabulous idea!',
			[{ emphasis: ['I.', 'bold'] }, ' Finely grind in a blender:'],
			{ list: ['½ cup white rice'] },
			'Add:',
			{
				list: [
					'½ cup slivered almonds',
					'½ cup sugar',
					'1 stick  or 1 teaspoon ground cinnamon',
					'¼ teaspoon salt',
					'(1-inch-wide strip lime zest)',
					'(1 vanilla bean, split lengthwise)',
				],
			},
			'Pour over the almond-rice mixture in the blender:',
			{ list: ['4 cups boiling water'] },
			'Let sit overnight. Blend the mixture until smooth, about 3 minutes on high speed. Strain through a very fine-mesh sieve, a sieve lined with several layers of cheesecloth, or a nut milk bag. Stir in:',
			{
				list: [
					'2 cups cold water',
					'1 teaspoon vanilla if not using the vanilla bean',
				],
			},
			'Serve over ice.',
			[
				{ emphasis: ['II.', 'bold'] },
				' A less authentic version that is tasty, easy to prepare, and much quicker.',
			],
			'Combine in a blender:',
			{
				list: [
					'3 cups unsweetened almond milk',
					'3 cups unsweetened rice milk',
					'½ cup sugar',
					'1 teaspoon vanilla',
					'1 teaspoon ground cinnamon',
				],
			},
			'Blend until the sugar is dissolved. Serve over ice.',
		],
	},
	{
		id: 'part01_sub015_06',
		title: 'PANAKAM',
		section: 'Beverages',
		page: '14',
		servings: '1 serving',
		body: [
			[
				'This cooling Indian beverage is typically made with jaggery, or ',
				'. If desired, you may substitute jaggery for white sugar in the simple syrup. Extracting the ginger juice is the hardest part of this recipe, so feel free to use store-bought ginger juice, if available. When happy hour rolls around, add ',
				{ emphasis: ['1 ounce dry gin', 'bold'] },
				' for a spicy, refreshing cocktail.',
			],
			'Mince in a food processor:',
			{
				list: [
					'4 ounces ginger, peeled and thinly sliced crosswise',
					'¼ cup water',
				],
			},
			'The ginger should be in very, very fine pieces. Transfer the ginger pulp to a fine-mesh sieve or a sieve lined with a thin kitchen towel. Press as much of the juice from the ginger as possible. You should have about ⅓ cup of ginger juice, or enough for around 16 servings. The juice will keep refrigerated for up to 1 week.',
			'To serve, add to each glass:',
			{
				list: [
					[
						'1 teaspoon ',
						{
							anchor: {
								text: 'ginger juice',
								href: 'part01_sub013_03',
							},
						},
						' or store-bought ginger juice',
					],
					'1 tablespoon lime juice or 1 teaspoon tamarind concentrate',
					[
						'1 to 2 teaspoons ',
						{
							anchor: {
								text: 'Simple Syrup',
								href: 'part01_sub017_01',
							},
						},
						', or agave syrup, to taste',
					],
					'⅛ teaspoon ground cardamom',
					'Pinch of salt',
					'(Pinch of black pepper)',
				],
			},
			'Stir to combine, then fill the glasses with ice. Top off each glass with:',
			{ list: ['About 4 ounces sparkling water'] },
			'Serve with long spoons for stirring and garnish with:',
			{ list: ['Lime wedges'] },
		],
	},
	{
		id: 'part01_sub015_07',
		title: 'SPICY GINGER ALE',
		section: 'Beverages',
		page: '14–15',
		servings: '6 to 8 servings',
		body: [
			[
				'This recipe makes a rich ginger syrup that you can keep on hand for making one glass of ginger ale at a time. To make ginger ale for a crowd, pour the strained ginger syrup into a pitcher, then add ',
				{ emphasis: ['½ to ¾ cup lime juice, to taste,', 'bold'] },
				' and top with ',
				{
					emphasis: [
						'4 ½ cups sparkling water, or more to taste.',
						'bold',
					],
				},
			],
			'Combine in a blender:',
			{
				list: [
					'½ cup sugar',
					'½ cup water',
					'4 ounces ginger, peeled and thinly sliced crosswise',
				],
			},
			'Blend until the ginger is completely pureed and there are no chunks left. Strain through a fine-mesh sieve set over a medium bowl, pressing on the solids with a rubber spatula to extract all the liquid. Or place the pureed ginger in the center of a thin kitchen towel, bring the ends together and twist tightly over the bowl, squeezing every last bit of juice from the ginger pulp. Ginger syrup can be refrigerated for up to 2 weeks. Shake well before using.',
			'For each serving, add 1 ½ to 2 tablespoons ginger syrup, to taste, to a glass filled with ice, then add:',
			{ list: ['1 ½ to 2 tablespoons lime or lemon juice, to taste'] },
			'Fill the glass with:',
			{ list: ['About 6 ounces sparkling water'] },
			'Stir well.',
		],
	},
	{
		id: 'part01_sub015_08',
		title: 'SWITCHEL',
		section: 'Beverages',
		page: '15',
		servings: '4 servings',
		body: [
			'This lightly sweet and tart beverage is like a healthy sports drink, perfect for sipping while working or playing outside on a hot day.',
			'Combine in a medium saucepan:',
			{ list: ['2 cups water', '2-inch piece ginger, thinly sliced'] },
			'Bring to a boil. Remove from the heat, cover, and let sit for 20 minutes. Strain into a pitcher or quart jar and stir in:',
			{
				list: [
					'¼ cup honey or maple syrup',
					'2 tablespoons cider vinegar',
					'⅛ teaspoon salt',
				],
			},
			'Stir until the honey or maple syrup and salt are dissolved. Stir in:',
			{ list: ['2 cups ice cubes'] },
			'Chill completely.',
		],
	},
	{
		id: 'part01_sub016_01',
		title: 'WATERMELON PUNCH',
		section: 'Beverages',
		page: null,
		servings: 'Twenty 6-ounce servings',
		body: [
			'Prepare:',
			{
				list: [
					[
						{
							anchor: {
								text: 'Simple Syrup',
								href: 'part01_sub017_01',
							},
						},
						', using 1 cup sugar and 1 cup water',
					],
				],
			},
			'Let cool. Trim the rind from:',
			{ list: ['4 pounds watermelon'] },
			'Cut into cubes, removing any seeds (you should have 5 to 6 cups). Working in batches, puree in a blender with the simple syrup, then strain through a medium sieve into a punch bowl. Stir in:',
			{ list: ['1 ¼ cups lemon juice'] },
			'Just before serving, stir in:',
			{
				list: [
					'1 liter ginger ale, chilled',
					'1 liter club soda or sparkling water, chilled',
					'1 quart strawberries, hulled and sliced, or melon balls',
				],
			},
		],
	},
	{
		id: 'part01_sub016_02',
		title: 'CRANBERRY-MANGO PUNCH',
		section: 'Beverages',
		page: null,
		servings: 'Twenty 6-ounce servings',
		body: [
			'Combine in a large punch bowl:',
			{
				list: [
					'2 quarts raspberry-cranberry juice or cranberry juice cocktail, chilled',
					'1 quart mango nectar, chilled',
					'1 liter club soda or sparkling water, chilled',
					'One 750ml bottle sparkling apple cider, chilled',
				],
			},
			'Float on top:',
			{ list: ['Lime wheels'] },
		],
	},
	{
		id: 'part01_sub016_03',
		title: 'PINEAPPLE PUNCH',
		section: 'Beverages',
		page: null,
		servings: 'Twenty 6-ounce servings',
		body: [
			'Combine in a large bowl and stir well:',
			{
				list: [
					'2 cups cooled strong black tea',
					'2 cups orange juice',
					'¾ cup lemon juice',
					'2 tablespoons lime juice',
					'1 cup sugar',
					'Leaves from 12 sprigs mint',
				],
			},
			'Refrigerate for 2 hours. Shortly before serving, strain the punch and add:',
			{
				list: [
					'10 slices fresh pineapple or one 20-ounce can sliced pineapple, including juice',
					'2 liters ginger ale, chilled',
					'1 liter club soda or sparkling water, chilled',
				],
			},
			'Pour over ice in a punch bowl.',
		],
	},
	{
		id: 'part01_sub016_04',
		title: 'FRUIT PUNCH',
		section: 'Beverages',
		page: null,
		servings: 'Twenty 6-ounce servings',
		body: [
			'Prepare and pour into a large punch bowl:',
			{
				list: [
					[
						{
							anchor: {
								text: 'Simple Syrup',
								href: 'part01_sub017_01',
							},
						},
						', using 1 ¼ cups sugar and 1 ¼ cups water',
					],
				],
			},
			'Add:',
			{ list: ['2 ½ cups cooled strong black tea'] },
			'Cool, then add:',
			{
				list: [
					'2 ½ cups noncitrus juice, such as cherry, white grape, or strawberry',
					'2 cups orange juice',
					'1 cup lemon juice',
					'1 cup canned crushed pineapple',
				],
			},
			'Add enough water to make 4 quarts of liquid. Chill for 1 hour. Immediately before serving, add:',
			{ list: ['1 liter club soda or sparkling water, chilled'] },
			'Add ice and serve.',
		],
	},
	{
		id: 'part01_sub017_01',
		title: 'SIMPLE SYRUP (SUGAR SYRUP)',
		section: 'Beverages',
		page: null,
		servings: '2 cups',
		body: [
			'This can be made in different proportions, the most common being one part sugar to one part water. This recipe yields a richer simple syrup, which we prefer, since it keeps better and less is needed to sweeten a drink. Less syrup means less dilution of the other ingredients, which is especially important for cocktails.',
			'Combine in a saucepan:',
			{ list: ['2 cups sugar', '1 cup water'] },
			'Cook over low heat, stirring occasionally, until the sugar has completely dissolved. Let cool, then chill until needed. Rich simple syrup will keep in the refrigerator for 6 months; a weaker one-to-one syrup will keep for 1 month.',
		],
	},
	{
		id: 'part01_sub017_02',
		title: 'FRUIT SYRUP',
		section: 'Beverages',
		page: null,
		servings: 'About 2 ½ cups',
		body: [
			[
				'Proceed as for ',
				{ emphasis: ['Simple Syrup.', 'bold'] },
				' Once the sugar has dissolved, stir in ',
				{
					emphasis: [
						'2 cups sliced or cubed peaches, plums, pineapple, or prickly pear, or 2 cups raspberries, blackberries, or blueberries, or 3 cups sliced strawberries.',
						'bold',
					],
				},
				' Simmer, covered, for 10 minutes. Let cool. Strain and chill until needed. Store refrigerated for up to 1 month.',
			],
		],
	},
	{
		id: 'part01_sub017_03',
		title: 'CITRUS SYRUP',
		section: 'Beverages',
		page: null,
		servings: 'About 3 cups',
		body: [
			[
				'Proceed as for ',
				{ emphasis: ['Simple Syrup,', 'bold'] },
				' adding to the pan with the water and sugar ',
				{
					emphasis: [
						'thin strips of zest from 2 lemons or limes, or from 1 large orange or grapefruit.',
						'bold',
					],
				},
				' Simmer, covered, for 5 minutes. Once cool, you may add ',
				{
					emphasis: [
						'(1 cup lemon, lime, orange, or grapefruit juice)',
						'bold',
					],
				},
				'. Strain and chill until needed. Store refrigerated for up to 1 month.',
			],
		],
	},
	{
		id: 'part01_sub017_04',
		title: 'HERB SYRUP',
		section: 'Beverages',
		page: null,
		servings: 'About 2 cups',
		body: [
			[
				{ emphasis: ['I.', 'bold'] },
				' Proceed as for ',
				{ emphasis: ['Simple Syrup.', 'bold'] },
				' Once the sugar has dissolved, stir in ',
				{
					emphasis: [
						'1 small bunch lavender, rosemary, or lemon verbena.',
						'bold',
					],
				},
				' Simmer, covered, for 5 minutes. Let cool. Strain and chill until needed. Store refrigerated for up to 1 month.',
			],
			[
				{ emphasis: ['II.', 'bold'] },
				' Prepare ',
				{ emphasis: ['Simple Syrup.', 'bold'] },
				' Remove the hot syrup from the heat and add ',
				{ emphasis: ['1 bunch mint or', 'bold'] },
				' ¾ ',
				{ emphasis: ['cup mint leaves.', 'bold'] },
				' Cover and let stand 20 minutes. Strain and let cool. Chill until needed. Store refrigerated for up to 1 month.',
			],
		],
	},
	{
		id: 'part01_sub017_05',
		title: 'SPICED SYRUP',
		section: 'Beverages',
		page: null,
		servings: 'About 2 cups',
		body: [
			[
				'Prepare ',
				{ emphasis: ['Simple Syrup.', 'bold'] },
				' Remove the hot syrup from the heat and stir in one of the following: ',
				{
					emphasis: [
						'1 ½ teaspoons whole cloves, 4 cinnamon sticks, 6 whole star anise, or one 3-inch piece ginger, thinly sliced.',
						'bold',
					],
				},
				' Cover and let stand 30 minutes. Strain and let cool. Chill until needed. Store refrigerated for up to 1 month.',
			],
		],
	},
	{
		id: 'part01_sub017_06',
		title: 'GRENADINE',
		section: 'Beverages',
		page: '16',
		servings: 'About 1 ½ cups',
		body: [
			'Combine in a medium saucepan:',
			{ list: ['1 cup unsweetened pomegranate juice', '1 cup sugar'] },
			'Heat gently, stirring, just until the sugar is dissolved. Do not boil. Remove from the heat and stir in:',
			{ list: ['½ teaspoon orange flower water'] },
			'Cool completely. Store refrigerated up to 3 weeks.',
		],
	},
	{
		id: 'part01_sub017_07',
		title: 'FRUIT SHRUB',
		section: 'Beverages',
		page: '16',
		servings: 'About 2 cups',
		body: [
			[
				'A concentrated, tangy syrup made by infusing equal parts fresh fruit, sugar, and vinegar. Use shrubs instead of syrups in ',
				{
					anchor: {
						text: 'Flavored Sodas',
						href: 'part01_sub015_02',
					},
				},
				' and ',
				{ anchor: { text: 'Fruit Sodas', href: 'part01_sub015_03' } },
				', or as a topping for ice cream. You may use different kinds of mild-flavored vinegar depending on the fruit. For instance, pair champagne vinegar with raspberries or white balsamic vinegar with peaches. Cider vinegar is perfectly fine to use with any fruit.',
			],
			'Combine in a medium saucepan:',
			{ list: ['1 cup sugar', '1 cup water'] },
			'Bring to a simmer, stirring to dissolve the sugar. Place in a heatproof medium bowl or quart jar:',
			{
				list: [
					'2 cups fresh fruit, such as any berry, chopped peaches, apricots, plums, or rhubarb',
				],
			},
			'Pour the syrup over the fruit, let cool completely, then cover and refrigerate for 24 hours. Strain the syrup and measure it. Add half as much:',
			{ list: ['Vinegar'] },
			'as you have syrup. Store refrigerated for up to 6 months.',
		],
	},
];
