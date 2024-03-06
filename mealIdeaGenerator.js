const currentTime = new Date();
const currentHour = currentTime.getHours();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  

const messages = {
  allday: [
    "Time to brainstorm delicious meal ideas!",
    "Let's get creative with our meal planning!",
    "Thinking about what culinary adventure awaits?",
    "Consider the endless possibilities for tonight's dinner!",
    "Explore new recipes to tantalize your taste buds!",
    "Imagine the aromas filling your kitchen as you cook!",
    "Dream up your perfect meal and bring it to life!",
    "Get inspired by flavors from around the world!",
    "Unlock your inner chef and craft a masterpiece!",
    "Embrace the joy of cooking as you plan your next meal!"
  ],
  bfastIsOver: [
    "Breakfast time has passed! How about planning for lunch or dinner?",
    "Missed breakfast? It's time to start thinking about your next meal!",
    "Goodbye breakfast, hello lunch prep!",
    "Breakfast is history! Time to cook up something for lunch.",
    "Breakfast hour is gone! Let's focus on the next meal ahead.",
    "Breakfast is a wrap! Get ready for the next culinary adventure.",
    "No more breakfast! Let's turn our attention to midday munchies.",
    "Morning's mealtime is gone! Let's get cooking for the rest of the day.",
    "Breakfast is done and dusted! What's next on the menu?",
    "Breakfast time flew by! Now, let's whip up something for lunch or dinner."
  ],
  dinnerTime: [
    "Dinner bells are ringing! Time to prepare a delicious meal.",
    "Evening has arrived, let's get cooking for dinner!",
    "Goodbye afternoon, hello dinner time!",
    "The day is winding down, it's dinner o'clock!",
    "Hungry for dinner? Let's fire up the stove!",
    "Sunset signals dinner time! What's on the menu tonight?",
    "Daylight is fading, but dinner is just getting started!",
    "Dinner hour is here! Let's gather around the table.",
    "Wrap up your day with a hearty dinner!",
    "Lights are dimming, but the kitchen is alive for dinner preparations!"
  ]
};



const breakfast = [
  {
    country: "India",
    meal: "Puri",
    description: "Breakfast in India is a flurry of spices, flavors, and colors. Puri is a super popular breakfast dish in India, a deep-fried bread that’s often served with aloo ki sabji (potato curry) or kesari (a sweet made with cream of wheat)."
  },

  {
    country: "Brazil",
    meal: "Pingado with French bread",
    description: "In Brazil, coffee is an essential part of every breakfast. Pingado is a Brazilian drink made of steamed milk and a splash of coffee. It’s usually drunk sweetened with a touch of sugar. It’s also fairly common to see fruit juices or chocolate milk on the breakfast menu, as well. Most breakfasts are also served with pão francês (French bread) which is often topped with butter and cheese or ham. You may also spot some pão de queijo (cheese bread) or granola on the table."
  },

  {
    country: "Morocco",
    meal: "Mint tea, bread, jam, and—maybe—barley soup",
    description: "Most breakfasts in Africa are (deliciously) simple in theory, and Morocco is no exception. You’ll always find mint tea on offer, as well as a spread of breads and jams. If you’re lucky, you’ll find some cracked barley soup, which is called hssoua belboula or dchicha."
  },

  {
    country: "Türkiye",
    meal: "Kahvalti",
    description: "Kahvalti, the traditional Turkish breakfast, is Türkiye’s best reason to get out of bed. The incredible spread (also pictured at the top of this article) includes breads, creamy cheeses, olives, tomatoes, cucumbers, spicy Turkish sausage, and a range of jams, marmalades, and honeys. Don’t miss the menemen, delicious skillet-cooked eggs, and, of course, the country’s famous tea and coffee."
  },

  {
    country: "Germany",
    meal: "Bread, sliced meat, cheese, and liver sausage",
    description: "A typical German breakfast consists of a few tried and true elements: breads, rolls, sliced meats, cheese, and—sometimes—leberwurst (liver sausage). The breads are often slathered with a healthy serving of butter, jams, or honey. If you’d like some more involved options and find yourself in front of a full breakfast menu, options like apple pancakes, potato omelettes, German bauernfrühstück (a hearty dish made of potatoes, eggs, and cheese) or muesli are never a bad call."
  },

  {
    country: "Mexico",
    meal: "Chilaquiles",
    description: "The most common breakfast dishes in Mexico are made up of a few simple ingredients: eggs, beans, and tortillas. Chilaquiles—essentially breakfast nachos, made with fried tortillas cut into triangles, cheese, eggs, and a side of beans and lots of salsa—is a Mexican staple that can be found on most morning menus. Huevos rancheros are another favorite, and translates to “rancher’s eggs,” speaking to its origins in 16th-century farmhouses and ranches. Breakfast time in Mexico is a beautiful thing and the culture really rallies behind offering up a ton of delicious options. You’ll also see people enjoying burritos, gorditas, tamales, pan dulce, tacos, and migas to kick off the day."
  },

  {
    country: "Costa Rica",
    meal: "Gallo Pinto",
    description: "The best way to get in the pura vida spirit in Costa Rica is to start the day with a big plate of gallo pinto. The stir-fried rice and beans dish is cooked with red pepper, cilantro, onion, and a few dashes of the country’s signature sauce, Salsa Lizano. Served next to a side of eggs, avocado, plantains, or cheese, the rounded mound of gallo pinto looks adorably similar to the spotted rooster for which it is named."
  },

  {
    country: "Switzerland",
    meal: "Muesli",
    description: "The ideal Swiss breakfast features muesli with milk or yogurt, fresh fruit, and tea or coffee. While the classic breakfast cereal is popular the world over, it actually originated in Switzerland around 1900. The healthy, fresh, and light dish is often made of raw rolled oats that are sometimes soaked in fruit juice or water overnight, and then mixed with other grains, fresh and dried fruits, seeds, and nuts."
  },
  {
    country: "Malaysia",
    meal: "Nasi Lemak",
    description: "Thanks to the country’s multi-ethnic heritage, Malaysia boasts a range of breakfast options that can have Indian, Chinese, or Western roots, but the best way to fuel up for the day is to sit down to a plate of nasi lemak, the national dish. Traditionally served with or wrapped in a banana leaf (making it a perfectly portable meal), nasi lemak consists of a mound of rich, sweet coconut rice garnished with some combination of anchovies, cucumbers, roasted peanuts, hard-boiled eggs, and a spicy Malaysian hot sauce."
  },
  {
    country: "Australia",
    meal: "Coffee and fruit, muesli, or a full English breakfast",
    description: "Yes, Australians like their Vegemite and bread, but it’s no longer the pride and joy of the breakfast table. These days, coffee is what makes an Australian breakfast truly memorable. The country takes a lot of pride in its coffee culture, and breakfast isn’t complete without a flat white (the Aussie version of a latte) or a long black (a richer, stronger Americano). You’ll also find plenty of fresh fruit, smoothies, healthy muesli, and as a weekend treat, maybe a mind-blowing full English breakfast."
  },
  {
    country: "China",
    meal: "Dim Sum",
    description: "True breakfast in China may be a simple affair, but the country mastered brunch long before any other country even dreamed of stretching breakfast into lunch. Dim sum, a staple in Chinatowns the world over, is traditionally served in the late morning and includes a variety of steamed buns, dumplings, rice noodle rolls, congee (a rice porridge), noodle soups, sticky coated chicken, and fried veggies. Whether you go for the full restaurant dim sum experience or a quieter meal at an inn or friend’s house, expect to start your day in China with a spread of many little tastes that pack a big punch."
  },

  {
    country: "Sweden, Denmark, and Norway",
    meal: "Open-Faced Sandwiches",
    description: "The Nordic countries are experts in the art of the open-faced breakfast sandwich. Slathered with a range of spreads, from soft cheeses to mayonnaises to jams, the breads are then loaded up with cured fish, cold cuts, cheeses, vegetables, and/or hard-boiled eggs. In Sweden expect to see filmjölk, a soured dairy product, on the breakfast table, as well as kaviar (caviar) spread, and plenty of fresh berries, like cloudberries or lingonberries. In Denmark, the sandwich foundation might be rye bread, and the Norwegian sandwich on lefse flat bread often features Gjetost cheese (a brown cheese that tastes like caramel)."
  },

  {
    country: "France, Spain, and Italy",
    meal: "Coffee and a Pastry or Toast",
    description: "Another trio of countries with similar philosophies on the first meal of the day, France, Spain, and Italy disagree with the idea that breakfast is the most important meal of the day. With any European breakfast, morning coffee is indispensable, but additional sustenance isn’t often required. When in Paris (or Rome, or Madrid), do as the locals do and start off light—a croissant with coffee at a French café, a biscotti with a cappuccino in Italy, simple toast with tomato and olive oil with café con leche in Spain. You’ll want to save room for the rich dishes awaiting you at lunch and dinner."
  },

  {
    country: "United Kingdom",
    meal: "The Full English Breakfast",
    description: "There is no morning meal as famous or intimidating as the full English breakfast. Real stick-to-your-ribs fare, a classic British breakfast includes eggs, sausage, thick-cut bacon, baked beans, mushrooms, toast, a cooked tomato, and perhaps blood sausage or black pudding. Oh, and, of course, a cup (or pot) of tea. We guarantee it’ll keep you satisfied until lunch!"
  },

  {
    country: "Greece",
    meal: "Yogurt with Nuts and Honey",
    description: "The breakfast spread in Greece may include boiled eggs, cold cuts, pastries, and bread with feta cheese, tomatoes, and olive oil, but it’s the yogurt that’ll keep you coming back for more. Thick, rich, and creamy Greek yogurt is served with nuts and honey, which balance the acidity of the yogurt and make for the perfect start to the day."
  },
  {
    country: "Japan",
    meal: "Traditional Japanese Breakfast",
    description: "A full traditional Japanese breakfast is a reason in and of itself to visit the country and features a balance of many little dishes, including miso soup, steamed white rice, pickled vegetables, fish or tofu, sticky fermented soybeans, and dried seaweed, all accompanied by green tea."
  },

  {
    country: "Kenya",
    meal: "Chai and Mandazi or Uji",
    description: "The best breakfast in Kenya wouldn’t be complete without a cup of strong, sweet-smelling chai. Skip the full English breakfast, which you can find everywhere here, and pair that chai instead with uji, a thick porridge made from sorghum or millet and traditionally served in a calabash, or head to a street vendor for some mandazi—puffy, golden, East African doughnuts, fried while you wait."
  },

  {
    country: "Pakistan",
    meal: "Eggs, Curries, and Flatbreads",
    description: "Breakfast, or nāshtā, in Pakistan varies across the country, but you’ll usually find eggs and different breads like rotis or parathas (pan-fried unleavened flatbread), as well as vegetable curries and an array of chutneys and spicy sauces. On weekends and special occasions, keep an eye out for halwa puri, or unleavened fried bread, served with a sweet semolina dish and a chickpea and potato curry. You’ll know where to find the best halwa puri by the line outside."
  },

  {
    country: "Argentina",
    meal: "Café con Leche and Medialunas",
    description: "Because dinner in Argentina is eaten so late, breakfast is a rather simple affair of café con leche (coffee with milk), orange juice, and toast or croissant-like medialunas. If you’re looking to switch things up, you can swap your café con leche for maté—a locally popular, highly caffeinated tea—or your medialunas for other, sweeter Argentinian pastries known as facturas. Either way, during the morning in Argentina, less is more."
  },

  {
    country: "Myanmar",
    meal: "Mohinga",
    description: "Myanmar’s iconic breakfast dish, mohinga, is also the country’s national dish. The comforting soup is made with a fish broth base and loaded with rice noodles, lemongrass, ginger, onions, and chickpea flour and is sometimes topped with fried fritters, split chickpeas, or boiled eggs. While you may fall in love with your daily dose of fish soup, other breakfast options include sticky fried rice topped with boiled yellow beans and noodle salads—and you’ll always be able to find a cup of green tea."
  },

  {
    country: "Egypt",
    meal: "Ful Medames",
    description: "The Egyptian breakfast of ful medames has withstood the test of time. Said to date back to ancient Egypt, the earthy dish is made from fava beans stewed overnight and spiced with cumin, parsley, onion, lemon, and chili pepper. It’s served warm or cold and is often garnished with hard-boiled eggs and paired with a grainy slab of Egyptian pita."
  },

  {
    country: "Philippines",
    meal: "A Big Spread with Fruits, Breads, and Hearty Rice or Sausage Dishes",
    description: "Breakfast is often the largest meal of the day in the Philippines and usually includes fruit, pan de sal (enriched yeasted rolls), and a hearty rice dish such as fried rice served with little sausages called longganisa, or some other combination of rice and meat such as tapsilog, dried meat and a fried egg served with rice."
  },

  {
    country: "Poland",
    meal: "Kanapki",
    description: "Breakfast in Poland, or śniadanie, features an open-faced sandwich, kanapki. Piled on top of breads and rolls of all shapes and sizes—from traditional rye bread to soft, warm, or crispy rolls—the range of sandwich fixings seems endless: cold cuts, meat spreads, kielbasa sausage, soft and hard cheeses, tomatoes, and eggs scrambled with sausage or soft-boiled. But despite the variety of possibilities, breakfast is often seen as an opportunity to slow down. After all, building the perfect sandwich one level after another takes time."
  },
  {
    country: "Russia",
    meal: "Kasha, Bliny, or Syrniki",
    description: "It’s not uncommon for people to skip breakfast in Russia or to make do with a quick cheese or sausage open-faced sandwich. But if you have a little more time to savor the morning, you might find yourself indulging in kasha, a porridge made from different grains, or other kinds of porridge made with buckwheat, oatmeal, or millet and usually cooked with milk. Weekend meals might be a little sweeter—crepe-like blini eaten with jam or sweet condensed milk or tasty syrniki, or cottage cheese dumplings."
  },

  {
    country: "Venezuela",
    meal: "Arepas",
    description: "Venezuelan arepas are both the national dish and the country’s most popular breakfast food. As versatile as bread is in other countries, arepas accompany most meals. For breakfast, the flat corn cakes are either fried or baked and then split open like pita and filled with cooked cheese and stewed chicken or pork."
  },

  {
    country: "Vietnam",
    meal: "Pho",
    description: "Hearty enough to fortify you through a morning of sightseeing but not so heavy that it’ll slow you down, pho, a rice noodle and meat soup, is the perfect Vietnamese breakfast. True, you can find the dish served all day, since it is a popular lunch and dinner dish for tourists, but the best pho is available in the morning at street vendors who boil just enough bone broth overnight to satisfy customers through the morning. If soup isn’t your thing, other savory Vietnamese breakfasts to try include congee and op-la, skillet-fried eggs and pork served with slices of fluffy Vietnamese baguettes."
  }
]

 const afterBreakfast =[ {
    country: "Czech Republic",
    meal: "Midnight Pupp",
    description: "In the Czech Republic, there’s a cocktail that’s actually good for you. You’ll find it served in nearly every bar in Prague, and all jokes aside about its distinctive name, the drink’s main ingredient, Becherovka, has some truly redeeming health benefits (allegedly)."
  },

  {
    country: "Australia",
    meal: "Lamington",
    description: "The classic sponge cake, known as a lamington, is one of Australia’s proudest culinary inventions. So much so, in fact, that there’s even folklore surrounding its creation. The cake used to be a staple childhood treat in the Land Down Under, but it’s undergone a modern revival."
  },

  {
    country: "Greece",
    meal: "Hortopita",
    description: "In Greece’s Peloponnese countryside, farm-to-table fare is not taken lightly. Foraging is a serious pastime, and most meals are prepared with some variation of horta (edible wild greens sourced directly from the peninsula’s surrounding areas). The country’s beloved wintertime snack, hortopita, is totally worth a try. The hearty pie is a lesser-known version of spanakopita, and it’s actually healthy."
  },

  {
    country: "Mexico",
    meal: "Sopa de Lima",
    description: "Sopa de lima is a pillar of nearly every restaurant menu and home table throughout the Yucatán Peninsula. The soup represents the cultural fusion that defines the eastern region in Mexico—a seamless blend of indigenous flavors with European, Asian, and Middle Eastern fare."
  },

  {
    country: "Peru",
    meal: "Ceviche",
    description: "Lima, Peru, has a thriving culinary scene, the spirit of which is embodied in one dish: ceviche. The plate was born out of a strong fishing culture along the Peruvian coast and eventually made its way to the capital city’s top-tier restaurant menus. The raw fish dish includes Inca, Spanish, African, and Japanese flavors—a testament to the range of influences defining Peruvian gastronomy."
  },

  {
    country: "Germany",
    meal: "Maultaschen",
    description: "If ravioli, dumplings, and hot pockets all came together to form one delightful dish, the final result would look something like maultaschen. (Yum!) The delicacy is thought to have originated in a monastery in southwest Germany, created by monks as a way to cheat their restrictive Lent diets."
  },

  {
    country: "France",
    meal: "Éclair",
    description: "Nothing says “French flavor” like an airy Parisian pastry . . . and nothing says “Parisian pastry” more than a classic éclair. Historians speculate that the delicacy’s name is a nod to its delicious nature, as the French word “éclair” translates loosely to “a flash of lightning,” in reference to how quickly one can be devoured. Although the public’s love for this treasured French pastry never changes, its recipe is constantly evolving (both in Paris’s bakeries throughout the rest of France)."
  },

  {
    country: "China",
    meal: "La Mian",
    description: "A bowl of this noodle soup does more than make your tastebuds soar—it reveals the fascinating history of trade along the Silk Road, which was formally established during the Han Dynasty of China in the 2nd century B.C.E. For a sense of the complex history behind this aromatic soup, trace its ingredients back to the still-standing street shops along the ancient trade route."
  },

  {
    country: "Israel",
    meal: "Hummus",
    description: "Hummus, pita, baba ghanoush, falafel—you can’t go wrong with these scrumptious delicacies eaten religiously (by people of all religions) across the Middle East. In this arid region, hummus isn’t simply sustenance; it’s culture. The communal dish is a perfect appetizer and conversation starter."
  },

  {
    country: "Italy",
    meal: "Pesto",
    description: "For tried-and-true pesto, there’s only one place to go: Genoa, the birthplace of the special Italian sauce. According to the Genovese, the basil needed to make authentic pesto only grows in and around the Liguria region of the Italian Riviera."
  }
]

 const getRandomMessage = (array) => array[Math.floor(Math.random() * array.length)];

let greeting;
let chosenMessage;
let ideas;

if (currentHour < 12) {
  greeting = `Good morning, Sire! Today is ${daysOfWeek[currentTime.getDay()]} ${months[currentTime.getMonth()]} ${currentTime.getDate()}`;
  chosenMessage = getRandomMessage(messages.allday);
  ideas = "Here are today's meal Ideas"
} else if (currentHour < 18) {
  greeting = `Good afternoon, Sire! Today is ${daysOfWeek[currentTime.getDay()]} ${months[currentTime.getMonth()]} ${currentTime.getDate()}`;
  chosenMessage = getRandomMessage(messages.bfastIsOver);
  ideas = "Here are today's meal Ideas"
} else {
  greeting = `Good evening, Sire! Today is ${daysOfWeek[currentTime.getDay()]} ${months[currentTime.getMonth()]} ${currentTime.getDate()}`;
  chosenMessage = getRandomMessage(messages.dinnerTime);
  ideas = "Here's what you can make for dinner"
}

const firstMeal = getRandomMeal(breakfast);
let secondMeal = getRandomMeal(afterBreakfast);
let thirdMeal = getRandomMeal(afterBreakfast);

while (secondMeal === thirdMeal) {
  thirdMeal = getRandomMeal(afterBreakfast);
}

function getRandomMeal(mealsArray) {
  return mealsArray[Math.floor(Math.random() * mealsArray.length)];
}

function meals(firstMeal, secondMeal, thirdMeal) {
  console.log("");
  console.log("BREAKFAST");
  console.log("(Feel free to make this anytime of the day if you are a night person)");
  console.log("");
  console.log(`${firstMeal.meal} from ${firstMeal.country} ${firstMeal.description}`);
  console.log("");

  console.log("LUNCH");
  console.log("");
  console.log(`${secondMeal.meal} from ${secondMeal.country} ${secondMeal.description}`);
  console.log("");

  console.log("DINNER");
  console.log("");
  console.log(`${thirdMeal.meal} from ${thirdMeal.country} ${thirdMeal.description}`);
}

console.log(greeting);
console.log(chosenMessage);
console.log("");
console.log(ideas);
meals(firstMeal, secondMeal, thirdMeal);

const closing =[
  "Why not ask AI Chat for cooking tips? It might just have the perfect recipe for your chosen meal!",
  "For more culinary inspiration, don't hesitate to consult AI Chat. It's a treasure trove of cooking knowledge!",
  "Let AI Chat be your sous chef! It's always ready to assist you with cooking instructions and recipe ideas.",
  "With AI Chat at your fingertips, discovering new recipes and cooking techniques has never been easier!",
  "For a world of culinary expertise at your command, look no further than AI Chat. Happy cooking!",
  "Unlock a world of flavors with AI Chat's vast recipe database. Your next favorite dish might just be a message away!",
  "Ready to elevate your cooking game? AI Chat is here to help you explore exciting new recipes and cooking methods.",
  "Let AI Chat be your guide to culinary success. From basic techniques to gourmet recipes, it's got you covered!",
  "Dive into the world of cooking with AI Chat by your side. You'll be amazed at what you can create!",
  "For endless cooking inspiration and guidance, AI Chat is your go-to kitchen companion. Bon appétit!"]


let randClosing = Math.floor(Math.random() * closing.length)
console.log("")
console.log("PRO TIP:")
console.log(closing[randClosing])
console.log("")
console.log("It's time for a great meal!");
console.log("Enjoy your cooking journey!");