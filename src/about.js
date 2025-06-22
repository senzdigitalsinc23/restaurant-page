
import { createElements, attachElements } from "./create-elements";

const aboutusmaincont = (() => {
    let maincont = createElements('div', 'aboutusmaincont');

    return maincont;
})();

const aboutus = (() => {
    let about = createElements('div', 'aboutus', "ABOUT US");

    return about;
})();

const ourstorytitle = (() => {
    let storytitle = createElements('div', 'ourstorytitle', "CHECK OUT OUR STORY");

    return storytitle;
})();

const story = (() => {
    let story = createElements('div', 'story', "Gilded Bite Cafeteria began with a passion for food and a dream to share our love for authentic Local and Continental Dishes with our community. Since opening our doors in 2018, we’ve grown from a small neighborhood eatery into a beloved dining destination known for quality, consistency, and heart. "
                                + " Every dish on our menu tells a story — inspired by family recipes, local ingredients, and bold flavors. Whether it’s our signature [name of a popular dish], hand-crafted daily, or our house-made sauces, you can taste the care in every bite.")

    return story;
})();

/* const whatwestandfortitle = (() => {
    let whatwestandfor = createElements('div', 'whatwestandfortitle', "What We Stand For");

    return whatwestandfor;
})();
 */
const whatwestandfor = (() => {
    let whatwestandfor = createElements('div', 'whatwestandfor');
    let whatwestandfortitle = createElements('div', 'whatwestandfortitle', 'WHAT WE STAND FOR')
    let whatwestandforol = createElements('ol');
    let freshingredientstitle = createElements('li', 'freshingredientstitle', 'Fresh Ingredients');
    let freshingredientscontents = createElements('p', 'freshingredientscontents', "We source locally whenever " +
                                            " possible and prioritize freshness in every dish.");
    let authenticflavorstitle = createElements('li', 'authenticflavorstitle', 'Authentic Flavors');
    let authenticflavors = createElements('p', 'authenticflavors', "Our recipes honor tradition while embracing creativity.")

    attachElements(whatwestandforol, [freshingredientstitle, freshingredientscontents, authenticflavorstitle, authenticflavors])
    attachElements(whatwestandfor, [whatwestandfortitle, whatwestandforol])
    return whatwestandfor;
})();

export const about = (() => {
    let aboutmaincont = createElements('div', 'aboutpagediv');

    attachElements(aboutusmaincont, [aboutus, ourstorytitle, story, whatwestandfor])
    attachElements(aboutmaincont, aboutusmaincont)

    return aboutmaincont;
})();