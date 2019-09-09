/* This is the data we will be using to create our article components */
/* Look over this data, then proceed to line 91*/
const data = [
  {
    title: 'Lambda School Students: "We\'re the best!"',
    date: "Nov 5th, 2018",
    firstParagraph: `Lucas ipsum dolor sit amet ben twi'lek padmé darth darth darth moff hutt organa twi'lek. Ben amidala secura skywalker lando
        moff wicket tatooine luke.Solo wampa wampa calrissian yoda moff.Darth grievous darth gonk darth hutt.Darth baba skywalker
        watto fett jango maul han.Mon ewok sidious sidious lando kenobi grievous gamorrean solo.Yoda wedge utapau darth calamari.
        Hutt calamari darth jabba.Darth dooku amidala organa moff.Boba darth binks solo hutt skywalker dantooine skywalker.Qui - gonn
        jar twi'lek jinn leia jango skywalker mon.`,

    secondParagraph: `Grievous fett calamari anakin skywalker hutt.Alderaan darth kenobi darth r2- d2
        windu mothma.Sidious darth calamari moff.Wampa mothma sith wedge solo mara.Darth gonk maul sith moff chewbacca palpatine
        mace amidala.C - 3po solo skywalker anakin yoda leia.Maul wampa bespin watto jade ewok darth jabba.Lando dantooine moff
        k - 3po dantooine luke.Fisto mandalore darth wedge c - 3p0 ahsoka.Secura moff palpatine fett.Anakin sith darth darth.Moff
        solo leia ben ponda jade.Binks jango aayla skywalker skywalker cade.Mustafar darth ventress anakin watto.Yavin jawa sebulba
        owen jinn tatooine sith organa.`,

    thirdParagraph: `Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious
        naboo ackbar tatooine. Hutt lars padmé darth. Maul solo darth darth jabba qui-gon chewbacca darth maul. Moff baba wicket
        han. C-3po antilles moff qui-gon ahsoka aayla dooku amidala. Palpatine droid amidala droid k-3po twi'lek padmé wookiee. Leia
        moff calamari mon obi-wan. Solo grievous lando coruscant. Jinn darth palpatine obi-wan mon.`
  },
  {
    title: "Javascript and You, ES6",
    date: "May 7th, 2019",
    firstParagraph: `Alohamora wand elf parchment, Wingardium Leviosa hippogriff, house dementors betrayal. Holly, Snape centaur portkey ghost
        Hermione spell bezoar Scabbers. Peruvian-Night-Powder werewolf, Dobby pear-tickle half-moon-glasses, Knight-Bus. Padfoot
        snargaluff seeker: Hagrid broomstick mischief managed. Snitch Fluffy rock-cake, 9 ¾ dress robes I must not tell lies. Mudbloods
        yew pumpkin juice phials Ravenclaw’s Diadem 10 galleons Thieves Downfall. Ministry-of-Magic mimubulus mimbletonia Pigwidgeon
        knut phoenix feather other minister Azkaban. Hedwig Daily Prophet treacle tart full-moon Ollivanders You-Know-Who cursed.
        Fawkes maze raw-steak Voldemort Goblin Wars snitch Forbidden forest grindylows wool socks`,

    secondParagraph: `Boggarts lavender robes, Hermione Granger Fantastic Beasts and Where to Find Them. Bee in your bonnet Hand of Glory elder
        wand, spectacles House Cup Bertie Bott’s Every Flavor Beans Impedimenta. Stunning spells tap-dancing spider Slytherin’s Heir
        mewing kittens Remus Lupin. Palominos scarlet train black robes, Metamorphimagus Niffler dead easy second bedroom. Padma
        and Parvati Sorting Hat Minister of Magic blue turban remember my last.`,

    thirdParagraph: `Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights 
        Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven 
        roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot 
        sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.`
  },
  {
    title: "React vs Angular vs Vue",
    date: "June 7th, 2019",
    firstParagraph: `Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ivysaur Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Venusaur Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charmander Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Charmeleon Lorem ipsum dolor sit amet, consectetur adipiscing elit. Charizard Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Squirtle Lorem ipsum dolor sit amet, consectetur adipiscing elit. Wartortle Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Blastoise Lorem ipsum dolor sit amet, consectetur adipiscing elit. Caterpie Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Metapod Lorem ipsum dolor sit amet, consectetur adipiscing elit. Butterfree
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Weedle Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Kakuna Lorem ipsum dolor sit amet, consectetur adipiscing elit. Beedrill Lorem ipsum dolor sit amet, consectetur adipiscing
        elit.`,

    secondParagraph: `Pidgey Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pidgeotto Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Pidgeot Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rattata Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raticate Lorem ipsum dolor sit amet, consectetur adipiscing elit. Spearow Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Fearow Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ekans Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Arbok Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pikachu Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Raichu Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sandshrew Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Sandslash Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nidorina Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidoqueen Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Nidoran Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nidorino Lorem ipsum dolor
        sit amet, consectetur adipiscing elit. Nidoking Lorem ipsum`,

    thirdParagraph: `Gotta catch 'em all Horsea gym Ninjask Absol Sinnoh Poliwag. Gotta catch 'em all Youngster wants to fight Soda Pop Floatzel 
        Leech Life Seismitoad Ariados. Earthquake Pokemon Glitch City Tail Whip Skitty Ekans Dialga. Ut aliquip ex ea commodo consequat James 
        Castform Lotad the power that's inside Burnt Berry Makuhita. Ghost Ariados Corphish Dusclops Golbat Gligar Zweilous.`
  },
  {
    title: "Professional Software Development in 2019",
    date: "Jan 1st, 2019",
    firstParagraph: `Hodor hodor HODOR! Hodor hodor - hodor, hodor. Hodor hodor... Hodor hodor hodor; hodor hodor. Hodor hodor hodor, hodor, hodor
          hodor. Hodor, hodor. Hodor. Hodor, hodor - hodor... Hodor hodor hodor; hodor HODOR hodor, hodor hodor?! Hodor hodor, hodor.
          Hodor hodor hodor hodor hodor! Hodor hodor - HODOR hodor, hodor hodor hodor hodor hodor; hodor hodor? `,

    secondParagraph: `Hodor, hodor. Hodor. Hodor, hodor, hodor. Hodor hodor, hodor. Hodor hodor, hodor, hodor hodor. Hodor! Hodor hodor, hodor;
          hodor hodor hodor? Hodor, hodor. Hodor. Hodor, hodor - HODOR hodor, hodor hodor hodor! Hodor, hodor. Hodor. Hodor, HODOR
          hodor, hodor hodor, hodor, hodor hodor. Hodor hodor - hodor - hodor... Hodor hodor hodor hodor hodor hodor hodor?! Hodor
          hodor - hodor hodor hodor. Hodor. Hodor hodor... Hodor hodor hodor hodor hodor? `,

    thirdParagraph: `Hodor hodor - hodor... Hodor hodor hodor hodor. Hodor. Hodor! Hodor hodor, hodor hodor hodor hodor hodor; hodor hodor? Hodor!
          Hodor hodor, HODOR hodor, hodor hodor?! Hodor! Hodor hodor, HODOR hodor, hodor hodor, hodor, hodor hodor. Hodor, hodor.
          Hodor. Hodor, hodor, hodor. Hodor hodor... Hodor hodor hodor?! Hodor, hodor... Hodor hodor HODOR hodor, hodor hodor. Hodor.`
  },
  {
    title: "My Doggo Ispum Life",
    date: "Sept 1st, 2019",
    firstParagraph: `Doggo ipsum extremely cuuuuuute smol wow such tempt, stop it fren. Shooberino noodle horse shooberino I am bekom fat most angery pupper I have ever seen doggorino, you are doing me a frighten big ol pupper he made many woofs long bois. floofs stop it fren. Dat tungg tho very jealous pupper puggo snoot, the neighborhood pupper maximum borkdrive. Smol floofs long bois smol long doggo, floofs heckin good boys. Blep dat tungg tho porgo heckin good boys thicc bork, borkf clouds woofer. very taste wow you are doing me the shock doggo. Doing me a frighten shoober pupperino boofers what a nice floof snoot, the neighborhood pupper boof very taste wow. Maximum borkdrive porgo shoob shibe puggorino, floofs boofers blep.`,

    secondParagraph: `Very hand that feed shibe smol wow very biscit he made many woofs yapper pupperino, shibe noodle horse boofers.  Pupper long woofer waggy wags the neighborhood pupper very good spot shoob, many pats doggo borkdrive h*ck. ruff stop it fren very taste wow. You are doing me the shock long bois what a nice floof length boy woofer yapper, floofs mlem you are doing me the shock doggorino. many pats. Aqua doggo woofer you are doing me a frighten shibe lotsa pats blop, big ol maximum borkdrive heck woofer. Ur givin me a spook blep woofer corgo extremely cuuuuuute, ruff bork.`,

    thirdParagraph: `Porgo adorable doggo woofer much ruin diet you are doing me a frighten h*ck adorable doggo mlem, sub woofer he made many woofs boof you are doin me a concern puggo. Bork extremely cuuuuuute big ol much ruin diet wow very biscit clouds heckin, thicc long bois wow very biscit mlem heckin. Adorable doggo shibe bork heckin good boys, lotsa pats blop. Snoot very good spot vvv ur givin me a spook, long woofer you are doing me a frighten. He made many woofs heck smol, porgo.`
  },
  {
    title: "My Cat Ispum Life",
    date: "Sept 2nd, 2019",
    firstParagraph: `Attack feet behind the couch destroy couch flop over give attitude hide when guests come over hopped up on goofballs hunt anything that moves all of a sudden go crazy shake treat  need to chase tail, bag stretch intently stare at the same spot swat at dog make muffins lick butt  intrigued by the shower chew ipad power cord  inspect anything brought into the house  claw drapes chase imaginary bugs  stand in front of the computer screen , behind the couch shake treat  make muffins give attitude chase imaginary bugs hide when guests come over flop over chew ipad power cord  destroy couch.`,

    secondParagraph: `Give attitude behind the couch destroy couch inspect anything brought into the house intently stare at the same spot hopped up on goofballs hunt anything that moves hide when guests come over make muffins lick butt all of a sudden go crazy, attack feet  claw drapes shake treat  swat at dog chew ipad power cord   stand in front of the computer screen   intrigued by the shower need to chase tail chase imaginary bugs, flop over bag stretch destroy couch lick butt hunt anything that moves  claw drapes hopped up on goofballs hide when guests come over flop over.`,

    thirdParagraph: `Bag stretch lick butt  stand in front of the computer screen  intently stare at the same spot chase imaginary bugs  claw drapes shake treat , behind the couch all of a sudden go crazy destroy couch give attitude hopped up on goofballs. Hide when guests come over chase imaginary bugs  stand in front of the computer screen  inspect anything brought into the house make muffins  intrigued by the shower destroy couch swat at dog  claw drapes flop over`
  }
];

/* Step 1: Create a function that creates a component. You will want your component to look like the template below: 
  
  <div class="article">
    <h2>{title of the article}</h2>
    <p class="date">{date of the article}</p>

    {three separate paragraph elements}

    <span class='expandButton'></span>
  </div>

  Hint: You will need to use createElement more than once here!

  Your function should take either an object as it's one argument, or 5 separate arguments mapping to each piece of the data object above.

  Step 2: Add an event listener to the expandButton span. This event listener should toggle the class 'article-open' on the 'article' div.

  Step 3: return the entire component.

  Step 4: Map over the data, creating a component for each oject and add each component to the DOM as children of the 'articles' div.

  Step 5: Add a new article to the array. Make sure it is in the same format as the others. Refresh the page to see the new article.

*/

const articles = document.querySelector(".articles");

function articleComponent(
  title,
  date,
  firstParagraph,
  secondParagraph,
  thirdParagraph
) {
  // Create Elements Below
  const articleSection = document.createElement("div");
  const myTitle = document.createElement("h2"); // title
  const myDate = document.createElement("p"); // date
  const myFirstParagraph = document.createElement("p");
  const mySecondParagraph = document.createElement("p");
  const myThirdParagraph = document.createElement("p");
  const myButton = document.createElement("span");

  // Text Content
  myTitle.textContent = title;
  myDate.textContent = date;

  myFirstParagraph.textContent = firstParagraph;
  mySecondParagraph.textContent = secondParagraph;
  myThirdParagraph.textContent = thirdParagraph;

  myButton.textContent = "Expand Article";

  // Add ClassList
  articleSection.classList.add("article");
  // articleSection.classList.add("article-open");
  myDate.classList.add("date");
  myButton.classList.add("expandButton");

  // Append to Parent
  articleSection.appendChild(myTitle);
  articleSection.appendChild(myDate);
  articleSection.appendChild(myFirstParagraph);
  articleSection.appendChild(mySecondParagraph);
  articleSection.appendChild(myThirdParagraph);
  articleSection.appendChild(myButton);

  // Event Listener for Button

  myButton.addEventListener("click", e => {
    articleSection.classList.add("article-open");
    articleSection.classList.add("article");
    articleSection.classList.add("close");
    myButton.classList.toggle("article-open close");
    // myButton.classList.toggle("article");
  });

  return articleSection;
}

let newArticleComponent = data.map(data => {
  let myArticle = articleComponent(
    data.title,
    data.date,
    data.firstParagraph,
    data.secondParagraph,
    data.thirdParagraph
  );

  return myArticle;
});

newArticleComponent.forEach(dataItems => {
  articles.appendChild(dataItems);
});
