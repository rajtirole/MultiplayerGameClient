const puppeteer = require('puppeteer');
const fs = require('fs');
let data=[
    {
      "title": "commander",
      "description": "",
      "descriptionList": [
        "Unite your team by setting the right orders",
        "Help your team with supplies and strikes at the enemy",
        "Keep the enemy Commander at bay to protect your team"
      ],
      "imageUrl": "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038ff4b7ac12aea80c7dc3e_quickmatch__image%20-%2028.png"
    },
    {
      "title": "team deathmatch",
      "description": "Small maps, high intensity and no vehicles. One single objective for your team: kill the enemy.",
      "descriptionList": [
        "Each enemy kill gives a kill count",
        "The team with the most tickets remaining wins"
      ],
      "imageUrl": "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038ff4bd27416d1abcfbacd_quickmatch__image%20-%2027.png"
    },
    {
      "title": "Squad Obliteration",
      "description": "Close quarters infantry combat. Both teams fight over possession of a bomb that they need to detonate at the enemy objectives.",
      "descriptionList": [
        "Teams fight over possession of a bomb",
        "The bomb must be planted at the enemy objectives",
        "First team to destroy all enemy objectives wins"
      ],
      "imageUrl": "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038ff4c6c617707ef8e12d2_quickmatch__image%20-%2026.png"
    },
    {
      "title": "Squad deathmatch",
      "description": "Your squad fights three other squads simultaneously. The objective is for your squad to get the highest amount of kills together.",
      "descriptionList": [
        "4 squads combat",
        "Each enemy kill gives a kill count",
        "The squad with the most kills wins"
      ],
      "imageUrl": "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038ff4b92c130374d90bd57_quickmatch__image%20-%2025.png"
    },
    {
      "title": "rush",
      "description": "Together with your team, attack or defend pairs of M-COM objectives. Kits, gadgets and vehicles are at your disposal.",
      "descriptionList": [
        "Arm and detonate both enemy objectives in a base to advance",
        "If successful, your team gains new reinforcement tickets and a new base opens up",
        "Destroy all the enemy objectives to win",
        "Defend your base objectives to stop attackers from advancing",
        "Successfully defend at least one objective to win"
      ],
      "imageUrl": "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038ff4bb1a1ba0fe5b4ca64_quickmatch__image%20-%2024.png"
    },
    {
      "title": "obliteration",
      "description": "Use teamwork to obliterate the enemy by first delivering, then detonating bombs at their bases while defending your own. New game mode in Battlefield 4.",
      "descriptionList": [
        "Teams fight over possession of a bomb",
        "The bomb must be planted at the enemy objectives",
        "First team to destroy all enemy objectives wins"
      ],
      "imageUrl": "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038ff4b7bd22eed7298cf0e_quickmatch__image%20-%2023.png"
    },
    {
      "title": "Gun master",
      "description": "Progress through a series of weapons by killing the enemy. The first player to earn a kill with the last weapon wins.",
      "descriptionList": [
        "Progress through a series of weapons by killing the enemy",
        "The first player to earn a kill with the last weapon wins"
      ],
      "imageUrl": "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038ff4a530f4abbbc089434_quickmatch__image%20-%2022.png"
    },
    {
      "title": "domination",
      "description": "Capture and hold objectives. Similar to the Conquest game mode but faster pace and smaller maps. No vehicles.",
      "descriptionList": [
        "Control the majority of the objectives to drain the enemies’ tickets",
        "Avoid casualties",
        "The team with the most tickets remaining wins"
      ],
      "imageUrl": "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038ff4a4177f0150d1b38d4_quickmatch__image%20-%2021.png"
    },
    {
      "title": "Defuse",
      "description": "Take turns in trying to detonate a bomb at the enemy base. Quick rounds are played out and the team with most won rounds wins the game.",
      "descriptionList": [
        "No redeploy - if all players on your team die you lose the round",
        "Attackers can plant and detonate a bomb at one of the two enemy objectives to win a round",
        "The team that wins the most rounds wins the match"
      ],
      "imageUrl": "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038ff4a94148a88a9debc31_quickmatch__image%20-%2020.png"
    },
    {
      "title": "conquest Small",
      "description": "Experience our signature game mode on some of the greatest Battlefield maps of all time.",
      "descriptionList": [
        "Control the majority of the objectives to drain the enemies’ tickets",
        "Avoid casualties",
        "The team with the most tickets remaining wins"
      ],
      "imageUrl": "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038ff4a9b48795ede25f341_quickmatch__image%20-%2019.png"
    },
    {
      "title": "conquest large",
      "description": "Experience our signature game mode in the largest scale possible, with up to 64 players per map.",
      "descriptionList": [
        "Control the majority of the objectives to drain the enemies’ tickets",
        "Avoid casualties",
        "The team with the most tickets remaining wins"
      ],
      "imageUrl": "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038ff4a4177f08efc1b38d3_quickmatch__image%20-%2018.png"
    },
    {
      "title": "Chainlink",
      "description": "Create links by capturing two adjacent capture points. The more links you control, the more enemy tickets bleed. The team with the most tickets remaining wins.",
      "descriptionList": [
        "Create links by capturing two adjacent capture points",
        "The more links you control, the more enemy tickets bleed",
        "The team with the most tickets remaining wins"
      ],
      "imageUrl": "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038ff4aeabe37e92e71e201_quickmatch__image%20-%2017.png"
    },
    {
      "title": "carrier assault Small",
      "description": "Capture and hold objectives to damage the enemy carrier. When the carrier is open take out 2 objectives while defending your own carrier to win.",
      "descriptionList": [
        "Capture and hold missile launchers to damage the enemy carrier",
        "When the enemy carrier is at half health, it cracks open and can be boarded",
        "Board the enemy carrier and destroy the two objectives inside to win",
        "Defend your carrier objectives to prevent the enemy from winning",
        "Destroy the two objectives or bring the carrier to zero health to win the game"
      ],
      "imageUrl": "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038ff494177f05f421b38d2_quickmatch__image%20-%2016.png"
    },
    {
      "title": "carrier assault large",
      "description": "Capture and hold objectives to damage the enemy carrier. When the carrier is open take out 2 objectives while defending your own carrier to win.",
      "descriptionList": [
        "Capture and hold missile launchers to damage the enemy carrier",
        "When the enemy carrier is at half health, it cracks open and can be boarded",
        "Board the enemy carrier and destroy the two objectives inside to win",
        "Defend your carrier objectives to prevent the enemy from winning",
        "Destroy the two objectives or bring the carrier to zero health to win the game"
      ],
      "imageUrl": "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6039005bdcecc6b525432d64_quickmatch__image%20-%2015.png"
    },
    {
      "title": "capture the flag",
      "description": "Medium-scale warfare. Each team must capture the enemy flag while keeping their own flag protected.",
      "descriptionList": [
        "Capture the enemy flag by bringing it back to your base",
        "Defend your base, if the enemy team has your flag you cannot capture and score points",
        "The first team to capture 3 flags wins"
      ],
      "imageUrl": "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038ff48d2741694cbcfbaca_quickmatch__image%20-%2001.png"
    },
    {
      "title": "Air superiority",
      "description": "Air warfare on a massive scale. Capture and hold objectives using only air vehicles.",
      "descriptionList": [
        "Control the majority of the objectives to drain the enemies’ tickets",
        "Avoid casualties",
        "The team with the most tickets remaining wins"
      ],
      "imageUrl": "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038ff49dcecc634c2432a97_quickmatch__image%20-%2013.png"
    },
    {
      "title": "legacy operations infantry",
      "description": "Experience infantry based game modes on Dragon Valley 2015.",
      "descriptionList": [
        "Infantry focused with Team/Squad Death Match, Domination and Gun Master",
        "in the Noshahr Canals inspired Harbor on the 2015 version of the classic Dragon Valley map"
      ],
      "imageUrl": "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038ff49a1e39cd99e466bea_quickmatch__image%20-%2012.png"
    },
    {
      "title": "legacy operations",
      "description": "Experience Conquest Small, Rush and Obliteration on Dragon Valley 2015.",
      "descriptionList": [
        "Battlefield at its best with Conquest Small. Rush and Obliteration on the 2015 version of the classic Dragon Valley map"
      ],
      "imageUrl": "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038ff495039a07be1ac3639_quickmatch__image%20-%2011.png"
    },
    {
      "title": "legacy operations large",
      "description": "Experience Conquest large on Dragon Valley 2015.",
      "descriptionList": [
        "All out warfare on the 2015 version of the classic Dragon Valley map"
      ],
      "imageUrl": "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038ff49a1e39c6347466be9_quickmatch__image%20-%2010.png"
    },
    {
      "title": "community operations infantry",
      "description": "Experience infantry based game modes on Operation Outbreak.",
      "descriptionList": [
        "Infantry focused with Team Death Match, Squad Death Match, Domination, and Gun Master on the jungle map Operation Outbreak"
      ],
      "imageUrl": "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038ff484177f04a151b38d1_quickmatch__image%20-%2009.png"
    },
    {
      "title": "community operations large",
      "description": "Experience Conquest Large on Operation Outbreak.",
      "descriptionList": [
        "All-out war with Conquest Large on the jungle map Operation Outbreak"
      ],
      "imageUrl": "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038ff48614e23fcda139b2a_quickmatch__image%20-%2008.png"
    },
    {
      "title": "community operations",
      "description": "Experience Conquest Small, Rush, Obliteration, CTF, and Chainlink on Operation Outbreak.",
      "descriptionList": [
        "Battlefield at its best with Conquest Small. Rush, Obliteration, Capture the Flag and Chain Link on the jungle map Operation Outbreak."
      ],
      "imageUrl": "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038ff48d65698f36d8cc9e2_quickmatch__image%20-%2007.png"
    },
    {
      "title": "night operations infantry",
      "description": "An infantry focused tactical mode where flashlights, flares, scopes and other gadgets shine in the dark.",
      "descriptionList": [
        "Take the fight into nighttime - as part of the graveyard shift you are re-visiting a familiar but a very different Battlefield."
      ],
      "imageUrl": "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038ff48614e2322e6139b29_quickmatch__image%20-%2006.png"
    },
    {
      "title": "night operations Large",
      "description": "A tactical mode where flashlights, flares, scopes and other gadgets shine in the dark.",
      "descriptionList": [
        "Take the fight into nighttime - as part of the graveyard shift you are re-visiting a familiar but a very different Battlefield."
      ],
      "imageUrl": "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038ff480b86a8615985624e_quickmatch__image%20-%2005.png"
    },
    {
      "title": "night operations",
      "description": "A tactical mode where flashlights, flares, scopes and other gadgets shine in the dark.",
      "descriptionList": [
        "Take the fight into nighttime - as part of the graveyard shift you are re-visiting a familiar but a very different Battlefield."
      ],
      "imageUrl": "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038ff476c61776e418e12cf_quickmatch__image%20-%2004.png"
    },
    {
      "title": "CLOSE QUARTERS",
      "description": "Smaller scale infantry focused maps and modes.",
      "descriptionList": [],
      "imageUrl": "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038ff48d687fc845ad3f904_quickmatch__image%20-%2003.png"
    },
    {
      "title": "the battlefield",
      "description": "Battlefield at its best. Conquest Small, Rush, and Obliteration, with a good balance between infantry and vehicle gameplay.",
      "descriptionList": [],
      "imageUrl": "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6038ff482ee42173101e45ae_quickmatch__image%20-%2002.png"
    },
    {
      "title": "large scale battles",
      "description": "The best vehicle focused Conquest Large maps.",
      "descriptionList": [],
      "imageUrl": "https://uploads-ssl.webflow.com/6013fff62154adaa4600f932/6039005a952b34110bbd012f_quickmatch__image%20-%2001.png"
    }
  ]
  data = data.map(item => {
    return {
        ...item,
        title: item.title.toUpperCase()
    };
});
  console.log(data);
//   data.reverse()
const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

// Capitalize the first letter of the description and each item in the descriptionList
data = data.map(item => {
    const capitalizedDescription = capitalizeFirstLetter(item.description);
    const capitalizedDescriptionList = item.descriptionList.map(description => `- ${capitalizeFirstLetter(description)}`);
    return {
        ...item,
        description: capitalizedDescription,
        descriptionList: capitalizedDescriptionList
    };
});


  console.log(  data.reverse());   
(async () => {
 
  // Save data to a JSON file
  fs.writeFileSync('dataa.json', JSON.stringify(data, null, 2));

 
})();
