const featuredCharacters = [
  {
    name: "Luke Skywalker",
    faction: "Jedi",
    era: "Age of Rebellion",
    role: "Farm boy, rebel pilot, Jedi Knight, later teacher",
    first: "A New Hope",
    arc: "Luke begins as a restless moisture farmer on Tatooine, loses his aunt and uncle to Imperial violence, joins the Rebel Alliance, learns from Obi-Wan and Yoda, confronts the truth that Darth Vader is his father, and wins by refusing hatred.",
    relationships: "Son of Anakin Skywalker and Padme Amidala; twin brother of Leia; student of Obi-Wan and Yoda; uncle and teacher of Ben Solo.",
    significance: "He proves that compassion can defeat Sith logic. His victory over Palpatine comes through faith in Anakin's remaining goodness, not superior aggression."
  },
  {
    name: "Leia Organa",
    faction: "Rebellion",
    era: "Age of Rebellion",
    role: "Princess, senator, general, Force-sensitive leader",
    first: "A New Hope",
    arc: "Leia is raised on Alderaan by Bail and Breha Organa, becomes a senator and Rebel leader, survives the destruction of her homeworld, leads resistance operations, and later guides the Resistance against the First Order.",
    relationships: "Daughter of Anakin and Padme; twin sister of Luke; adoptive daughter of the Organas; partner of Han Solo; mother of Ben Solo.",
    significance: "Leia blends royal diplomacy, military command, grief, courage, and Force potential into one of the saga's clearest models of political resistance."
  },
  {
    name: "Anakin Skywalker / Darth Vader",
    faction: "Sith",
    era: "Fall of the Jedi",
    role: "Chosen One, Jedi hero, Sith apprentice, Imperial enforcer",
    first: "The Phantom Menace",
    arc: "Anakin is discovered as an enslaved child with extraordinary Force potential. Fear of loss, distrust of the Jedi Council, Palpatine's grooming, and his secret attachment to Padme pull him toward the dark side. As Darth Vader he becomes the Empire's icon of fear before saving Luke and destroying Palpatine.",
    relationships: "Son of Shmi; husband of Padme; father of Luke and Leia; apprentice of Obi-Wan, then Palpatine; grandfather of Ben Solo.",
    significance: "His life is the saga's central tragedy and redemption story: immense gifts corrupted by fear, then restored through love."
  },
  {
    name: "Obi-Wan Kenobi",
    faction: "Jedi",
    era: "Fall of the Jedi",
    role: "Jedi Master, general, exile, mentor",
    first: "The Phantom Menace",
    arc: "Obi-Wan trains under Qui-Gon, defeats Darth Maul, mentors Anakin, serves as a Clone Wars general, survives Order 66, hides on Tatooine, watches over Luke, and later guides him as a Force spirit.",
    relationships: "Student of Qui-Gon; master of Anakin; friend of Padme, Satine Kryze, Cody, and Bail Organa; mentor to Luke.",
    significance: "He represents the Jedi at their noblest and most burdened: disciplined, compassionate, witty, loyal, and forced to live with institutional failure."
  },
  {
    name: "Padme Amidala",
    faction: "Republic",
    era: "Fall of the Jedi",
    role: "Queen of Naboo, senator, democracy advocate",
    first: "The Phantom Menace",
    arc: "Padme becomes queen as a teenager, resists the Trade Federation occupation, transitions to the Senate, opposes militarization, secretly marries Anakin, and dies as the Republic collapses into the Empire.",
    relationships: "Wife of Anakin; mother of Luke and Leia; ally of Bail Organa, Mon Mothma, Jar Jar Binks, and the Jedi.",
    significance: "Her story shows the political tragedy of the prequels: principled democracy losing to fear, manipulation, and emergency power."
  },
  {
    name: "Emperor Palpatine / Darth Sidious",
    faction: "Sith",
    era: "Fall of the Jedi",
    role: "Sith Lord, senator, chancellor, emperor",
    first: "The Phantom Menace",
    arc: "Palpatine hides as a Naboo senator, engineers the Naboo crisis, becomes chancellor, controls both sides of the Clone Wars, executes Order 66, forms the Empire, and repeatedly seeks immortality and dynastic control.",
    relationships: "Master of Darth Maul, Count Dooku, and Darth Vader; manipulator of Anakin; enemy of the Jedi and the Skywalker family.",
    significance: "He is the architect of the saga's largest political and spiritual catastrophe: democracy converted into dictatorship from within."
  },
  {
    name: "Han Solo",
    faction: "Rebellion",
    era: "Age of Rebellion",
    role: "Smuggler, pilot, general, reluctant hero",
    first: "A New Hope",
    arc: "Han begins as a debt-ridden smuggler who prizes survival and freedom. His bond with Luke, Leia, Chewbacca, and the Rebellion transforms him into a committed fighter, though he later struggles with family loss and regret.",
    relationships: "Partner of Chewbacca; friend of Lando; husband of Leia; father of Ben Solo; ally of Luke.",
    significance: "He grounds the myth in roguish practicality and shows that cynicism can soften into loyalty."
  },
  {
    name: "Chewbacca",
    faction: "Rebellion",
    era: "Age of Rebellion",
    role: "Wookiee warrior, co-pilot, mechanic, loyal friend",
    first: "A New Hope",
    arc: "Chewbacca survives enslavement and war, forms a life debt and friendship with Han, helps the Rebellion at Yavin, Hoth, Endor, and beyond, and remains a bridge across generations.",
    relationships: "Partner of Han; ally of Luke, Leia, Lando, Rey, Finn, and Poe; connected to Wookiee culture on Kashyyyk.",
    significance: "Chewbacca gives the saga emotional continuity through loyalty, grief, strength, and unbroken presence."
  },
  {
    name: "Yoda",
    faction: "Jedi",
    era: "Fall of the Jedi",
    role: "Grand Master, teacher, survivor",
    first: "The Empire Strikes Back",
    arc: "Yoda leads the Jedi for centuries, commands during the Clone Wars, fails to stop Sidious, exiles himself to Dagobah, trains Luke, and later admits the Jedi must learn from failure.",
    relationships: "Teacher of many Jedi; council peer of Mace Windu; mentor to Luke; spiritual student of Qui-Gon's Force ghost teachings.",
    significance: "He embodies wisdom and limitation at once. His late humility reframes failure as a teacher rather than a final defeat."
  },
  {
    name: "Ahsoka Tano",
    faction: "Jedi",
    era: "Fall of the Jedi",
    role: "Padawan, survivor, rebel operative, wandering Force user",
    first: "The Clone Wars",
    arc: "Ahsoka is assigned to Anakin during the Clone Wars, grows from reckless apprentice to principled warrior, leaves the Jedi after being falsely accused, survives Order 66, aids rebellion, and continues seeking truth beyond the Order.",
    relationships: "Student of Anakin; friend of Rex; ally of Padme, Obi-Wan, Bail, Sabine, Hera, and Ezra.",
    significance: "Her life asks what it means to follow the light when the institution meant to guard it fails."
  },
  {
    name: "R2-D2",
    faction: "Rebellion",
    era: "All saga eras",
    role: "Astromech droid, mechanic, data carrier, problem solver",
    first: "A New Hope",
    arc: "R2 serves Naboo, Anakin, Padme, Luke, Leia, and the Resistance. He carries plans, unlocks systems, repairs ships, hides messages, and repeatedly saves heroes through nerve and competence.",
    relationships: "Longtime counterpart to C-3PO; companion of Anakin, Padme, Luke, Leia, and BB-8.",
    significance: "R2 is the saga's secret engine: small, stubborn, brave, and usually several steps ahead of everyone else."
  },
  {
    name: "C-3PO",
    faction: "Rebellion",
    era: "All saga eras",
    role: "Protocol droid, translator, etiquette specialist",
    first: "A New Hope",
    arc: "Built by Anakin, C-3PO passes through Republic, Rebel, and Resistance history. He is anxious and formal, but his language skills and improbable survival make him essential.",
    relationships: "Counterpart to R2-D2; served Anakin, Padme, Bail Organa, Leia, Luke, and Rey's group.",
    significance: "He turns galactic scale into social friction, comedy, translation, and memory."
  },
  {
    name: "Lando Calrissian",
    faction: "Rebellion",
    era: "Age of Rebellion",
    role: "Gambler, administrator, pilot, general",
    first: "The Empire Strikes Back",
    arc: "Lando moves from charming risk-taker to responsible leader. His betrayal on Cloud City is forced by Imperial pressure, but he later helps rescue Han and leads the Death Star II attack.",
    relationships: "Old friend and rival of Han; ally of Leia, Chewbacca, Luke, and Nien Nunb.",
    significance: "Lando adds sophistication, compromise, and redemption to the Rebellion's network of unlikely allies."
  },
  {
    name: "Darth Maul",
    faction: "Sith",
    era: "Fall of the Jedi",
    role: "Sith assassin, crime lord, exile",
    first: "The Phantom Menace",
    arc: "Maul is trained as Sidious's weapon, defeated by Obi-Wan, survives through hatred, builds criminal power, rules Mandalore briefly, and remains obsessed with revenge and relevance.",
    relationships: "Apprentice of Sidious; brother of Savage Opress; enemy of Obi-Wan; manipulator of Ezra and criminal syndicates.",
    significance: "Maul shows the dark side after abandonment: survival without peace, power without belonging."
  },
  {
    name: "Count Dooku / Darth Tyranus",
    faction: "Sith",
    era: "Fall of the Jedi",
    role: "Former Jedi, Separatist leader, Sith apprentice",
    first: "Attack of the Clones",
    arc: "Dooku leaves the Jedi after losing faith in the Republic, becomes Sidious's apprentice, leads the Separatists, recruits systems through legitimate grievances, and is discarded when Anakin becomes useful.",
    relationships: "Former student of Yoda; master of Qui-Gon; Sith apprentice of Sidious; political face of the Separatists.",
    significance: "He represents aristocratic disillusionment weaponized by the Sith."
  },
  {
    name: "Mace Windu",
    faction: "Jedi",
    era: "Fall of the Jedi",
    role: "Jedi Council master, warrior, general",
    first: "The Phantom Menace",
    arc: "Mace is one of the Order's most formidable Jedi. He distrusts Anakin, fights in the Clone Wars, identifies Palpatine as too dangerous to stand trial, and is killed during Anakin's final turn.",
    relationships: "Council peer of Yoda; commander during the war; uneasy authority figure for Anakin.",
    significance: "His death is the hinge between possible justice and irreversible Imperial takeover."
  },
  {
    name: "Qui-Gon Jinn",
    faction: "Jedi",
    era: "Fall of the Jedi",
    role: "Jedi Master, mystic, independent thinker",
    first: "The Phantom Menace",
    arc: "Qui-Gon follows the living Force more than council politics, discovers Anakin, believes in his destiny, and dies fighting Maul. His posthumous discoveries open the path to Force ghost immortality.",
    relationships: "Master of Obi-Wan; former apprentice of Dooku; discoverer of Anakin.",
    significance: "He is the road not taken by the Jedi: intuitive, compassionate, and skeptical of institutional rigidity."
  },
  {
    name: "Rey Skywalker",
    faction: "Resistance",
    era: "First Order",
    role: "Scavenger, Jedi apprentice, Force dyad",
    first: "The Force Awakens",
    arc: "Rey grows up abandoned on Jakku, discovers immense Force ability, seeks belonging through Han, Luke, Leia, and Kylo Ren, confronts her Palpatine lineage, and chooses the Skywalker name.",
    relationships: "Student of Luke and Leia; Force dyad counterpart to Ben Solo; friend of Finn, Poe, BB-8, and Chewbacca.",
    significance: "Her story centers chosen identity: bloodline matters, but moral inheritance is claimed by action."
  },
  {
    name: "Finn",
    faction: "Resistance",
    era: "First Order",
    role: "Stormtrooper defector, Resistance fighter",
    first: "The Force Awakens",
    arc: "Taken as a child and conditioned as FN-2187, Finn rejects the First Order after refusing to massacre civilians. He learns commitment through Rey, Poe, Rose, and other defectors.",
    relationships: "Friend of Rey, Poe, Rose, BB-8, and Jannah; former subordinate in the First Order.",
    significance: "Finn proves that even systems built on conditioning can be broken by conscience."
  },
  {
    name: "Poe Dameron",
    faction: "Resistance",
    era: "First Order",
    role: "Ace pilot, commander, Leia's successor",
    first: "The Force Awakens",
    arc: "Poe begins as the Resistance's daring pilot, learns that heroism without strategy can cost lives, and grows into command under Leia's example.",
    relationships: "Trusted by Leia; close friend of Finn and Rey; flies with BB-8.",
    significance: "His arc turns swagger into leadership and reframes victory as responsibility to others."
  },
  {
    name: "Ben Solo / Kylo Ren",
    faction: "First Order",
    era: "First Order",
    role: "Fallen Jedi student, First Order warlord, redeemed heir",
    first: "The Force Awakens",
    arc: "Ben Solo is pulled between Skywalker legacy, Snoke's manipulation, Palpatine's shadow, and his own wounded pride. As Kylo Ren he kills Han, seeks power, bonds with Rey, and finally returns to the light.",
    relationships: "Son of Leia and Han; nephew of Luke; student of Snoke and Luke; dyad counterpart to Rey.",
    significance: "He is the sequel trilogy's inheritance crisis: legacy can crush, corrupt, or finally call someone home."
  },
  {
    name: "Din Djarin",
    faction: "Mandalorian",
    era: "New Republic",
    role: "Bounty hunter, foundling, protector",
    first: "The Mandalorian",
    arc: "Din is rescued by Mandalorians as a child and raised in a strict covert. A bounty on Grogu becomes a parental bond that challenges his creed, alliances, and understanding of Mandalorian identity.",
    relationships: "Guardian of Grogu; ally of Bo-Katan, Greef Karga, Ahsoka, and Boba Fett.",
    significance: "He restores the western frontier texture of Star Wars while making parenthood the emotional center."
  },
  {
    name: "Grogu",
    faction: "Jedi",
    era: "New Republic",
    role: "Force-sensitive child, survivor of Order 66",
    first: "The Mandalorian",
    arc: "Grogu survives the Jedi Temple purge, hides for decades, becomes a target for Imperial experiments, trains briefly with Luke, and chooses to return to Din Djarin.",
    relationships: "Foundling and adopted son of Din; trained by Jedi before and after the Empire; protected by many allies.",
    significance: "Grogu links prequel trauma to post-Endor healing and makes innocence a galactic prize worth protecting."
  },
  {
    name: "Bo-Katan Kryze",
    faction: "Mandalorian",
    era: "New Republic",
    role: "Mandalorian royal, warrior, unifier",
    first: "The Clone Wars",
    arc: "Bo-Katan moves from Death Watch extremist to Mandalorian resistance leader, loses and seeks the Darksaber, and eventually helps unite scattered Mandalorians to reclaim their homeworld.",
    relationships: "Sister of Satine Kryze; ally and rival of Din Djarin; enemy of Maul and Imperial occupiers.",
    significance: "Her arc wrestles with leadership, guilt, cultural fracture, and the difference between symbol and service."
  },
  {
    name: "Boba Fett",
    faction: "Underworld",
    era: "Age of Rebellion",
    role: "Bounty hunter, clone son, daimyo",
    first: "The Empire Strikes Back",
    arc: "Boba is cloned from Jango Fett and raised as his son. He becomes a feared bounty hunter, survives the Sarlacc, and later attempts to rule Tatooine's criminal territory by respect rather than fear.",
    relationships: "Son of Jango; enemy and later uneasy ally of several underworld figures; ally of Fennec Shand and Din Djarin.",
    significance: "He turns a masked legend into a study of identity, survival, and chosen honor."
  },
  {
    name: "Jango Fett",
    faction: "Underworld",
    era: "Fall of the Jedi",
    role: "Bounty hunter, clone template",
    first: "Attack of the Clones",
    arc: "Jango is selected as the genetic template for the Republic clone army, requests an unaltered clone as his son, serves Separatist interests, and dies fighting Mace Windu on Geonosis.",
    relationships: "Father of Boba; hired by Dooku; linked to Kaminoan cloners.",
    significance: "His DNA becomes the body of the Clone Wars, making private mercenary skill into galactic military infrastructure."
  },
  {
    name: "Rex",
    faction: "Rebellion",
    era: "Fall of the Jedi",
    role: "Clone captain, veteran, rebel ally",
    first: "The Clone Wars",
    arc: "Rex serves under Anakin and Ahsoka, develops individuality, removes his inhibitor chip, survives Order 66, and later helps rebel efforts against the Empire.",
    relationships: "Trusted by Ahsoka and Anakin; brother to clone troopers; ally of the Ghost crew.",
    significance: "He gives the clone army a human face and turns obedience into a question of personhood."
  },
  {
    name: "Cassian Andor",
    faction: "Rebellion",
    era: "Reign of the Empire",
    role: "Spy, thief, rebel intelligence officer",
    first: "Rogue One",
    arc: "Cassian begins as a survivor shaped by occupation, imprisonment, and moral compromise. He becomes radicalized into the Rebellion and dies helping transmit the Death Star plans.",
    relationships: "Ally of Luthen, Mon Mothma's network, Jyn Erso, K-2SO, and Rogue One.",
    significance: "His story shows rebellion as labor, fear, secrecy, sacrifice, and political awakening."
  },
  {
    name: "Jyn Erso",
    faction: "Rebellion",
    era: "Reign of the Empire",
    role: "Survivor, reluctant rebel, Rogue One leader",
    first: "Rogue One",
    arc: "Jyn is separated from her family by the Empire, raised by Saw Gerrera, lives detached from causes, then commits fully after learning her father built a flaw into the Death Star.",
    relationships: "Daughter of Galen and Lyra Erso; ward of Saw; ally of Cassian and Rogue One.",
    significance: "She turns personal pain into collective action and helps make Luke's later victory possible."
  },
  {
    name: "Mon Mothma",
    faction: "Rebellion",
    era: "Reign of the Empire",
    role: "Senator, rebellion founder, chancellor",
    first: "Return of the Jedi",
    arc: "Mon Mothma publicly works within Imperial politics while secretly funding rebellion. She becomes a central architect of the Alliance and later leads the New Republic.",
    relationships: "Ally of Bail Organa, Leia, Luthen's network, and Rebel command.",
    significance: "She represents the slow, dangerous, bureaucratic courage behind open resistance."
  },
  {
    name: "Bail Organa",
    faction: "Rebellion",
    era: "Fall of the Jedi",
    role: "Senator, Alderaanian prince, early rebel organizer",
    first: "Attack of the Clones",
    arc: "Bail opposes authoritarian drift, helps Yoda and Obi-Wan after Order 66, adopts Leia, and quietly builds resistance before dying with Alderaan.",
    relationships: "Adoptive father of Leia; husband of Breha; ally of Padme, Mon Mothma, Obi-Wan, and Yoda.",
    significance: "He links prequel democracy to original trilogy rebellion through patient, principled action."
  },
  {
    name: "Grand Admiral Thrawn",
    faction: "Empire",
    era: "Reign of the Empire",
    role: "Imperial strategist, Chiss tactician",
    first: "Rebels",
    arc: "Thrawn studies enemy art, history, and psychology to predict behavior. He threatens Lothal's rebels, disappears with Ezra, and later returns as a major danger to the New Republic.",
    relationships: "Imperial commander; opponent of Hera, Ezra, and Ahsoka; linked to Chiss Ascendancy concerns.",
    significance: "He is dangerous because he treats culture as intelligence and war as a problem of pattern recognition."
  },
  {
    name: "Hera Syndulla",
    faction: "Rebellion",
    era: "Reign of the Empire",
    role: "Pilot, commander, Rebel general",
    first: "Rebels",
    arc: "Hera leads the Ghost crew, fights Imperial occupation, becomes a central Rebel pilot and commander, and continues serving the New Republic.",
    relationships: "Partner of Kanan; mother of Jacen; leader to Ezra, Sabine, Zeb, and Chopper.",
    significance: "She embodies rebellion as family, logistics, skill, and long-term commitment."
  },
  {
    name: "Kanan Jarrus",
    faction: "Jedi",
    era: "Reign of the Empire",
    role: "Jedi survivor, rebel, mentor",
    first: "Rebels",
    arc: "Born Caleb Dume, Kanan survives Order 66, hides his Jedi identity, joins the Ghost crew, trains Ezra, learns through blindness, and sacrifices himself to save his family.",
    relationships: "Student of Depa Billaba; partner of Hera; master of Ezra; family to the Ghost crew.",
    significance: "His arc restores Jedi purpose in hiding: protect, teach, love, and let go."
  },
  {
    name: "Ezra Bridger",
    faction: "Jedi",
    era: "Reign of the Empire",
    role: "Orphan, rebel, Jedi apprentice",
    first: "Rebels",
    arc: "Ezra grows up alone on Lothal, joins the Ghost crew, trains under Kanan, resists Maul and Palpatine's temptations, and sacrifices his homecoming to remove Thrawn from the war.",
    relationships: "Student of Kanan; friend of Sabine, Hera, Zeb, Chopper, and Ahsoka; opponent of Thrawn.",
    significance: "He shows Jedi growth outside the Temple: messy, familial, local, and deeply tied to a homeworld."
  },
  {
    name: "Sabine Wren",
    faction: "Mandalorian",
    era: "Reign of the Empire",
    role: "Artist, explosives expert, Mandalorian rebel",
    first: "Rebels",
    arc: "Sabine defects from Imperial service after weapons work harms Mandalore, joins the Ghost crew, wields the Darksaber, and later trains with Ahsoka while searching for Ezra.",
    relationships: "Ghost crew member; student of Ahsoka; ally of Bo-Katan; friend of Ezra.",
    significance: "She connects art, guilt, culture, and rebellion into a character defined by repair."
  },
  {
    name: "Saw Gerrera",
    faction: "Rebellion",
    era: "Fall of the Jedi",
    role: "Partisan fighter, extremist rebel",
    first: "The Clone Wars",
    arc: "Saw begins as an Onderon rebel trained by the Jedi, loses family, and becomes a hardline insurgent whose methods disturb other Rebel leaders.",
    relationships: "Brother of Steela; guardian of Jyn for a time; uneasy ally of larger rebellion cells.",
    significance: "He marks the ethical edge of resistance: what liberation costs when war consumes restraint."
  },
  {
    name: "Jabba Desilijic Tiure",
    faction: "Underworld",
    era: "Age of Rebellion",
    role: "Hutt crime lord",
    first: "Return of the Jedi",
    arc: "Jabba rules a Tatooine criminal court through debt, spectacle, slavery, bounty hunters, and fear until Leia kills him during the rescue of Han Solo.",
    relationships: "Employer of bounty hunters; creditor of Han; enemy of Leia, Luke, and their allies.",
    significance: "He shows Outer Rim power where the Republic and Empire both fail to provide justice."
  },
  {
    name: "BB-8",
    faction: "Resistance",
    era: "First Order",
    role: "Astromech droid, map carrier, Poe's companion",
    first: "The Force Awakens",
    arc: "BB-8 carries the map fragment to Luke, helps Rey and Finn connect with the Resistance, and supports missions through speed, loyalty, and technical skill.",
    relationships: "Companion of Poe; friend of Rey, Finn, and R2-D2.",
    significance: "BB-8 updates the astromech tradition with nervous energy, expressive motion, and mission-critical data."
  },
  {
    name: "Rose Tico",
    faction: "Resistance",
    era: "First Order",
    role: "Mechanic, Resistance fighter",
    first: "The Last Jedi",
    arc: "Rose loses her sister Paige in battle, stops Finn from deserting, exposes war profiteering on Canto Bight, and reframes heroism as saving what one loves.",
    relationships: "Sister of Paige; friend of Finn; member of Leia's Resistance.",
    significance: "She brings maintenance workers, grief, and moral clarity into the center of the Resistance story."
  },
  {
    name: "Moff Gideon",
    faction: "Empire",
    era: "New Republic",
    role: "Imperial remnant commander",
    first: "The Mandalorian",
    arc: "Gideon pursues Grogu for Force-sensitive experiments, wields the Darksaber, manipulates Mandalorian divisions, and attempts to rebuild Imperial power through cloning and beskar-enhanced troops.",
    relationships: "Enemy of Din, Grogu, Bo-Katan, and New Republic-aligned forces.",
    significance: "He shows that the Empire's fall did not erase its science, ideology, or appetite for control."
  },
  {
    name: "Asajj Ventress",
    faction: "Underworld",
    era: "Fall of the Jedi",
    role: "Dark side assassin, Nightsister, bounty hunter",
    first: "The Clone Wars",
    arc: "Ventress serves Dooku, is betrayed, returns to the Nightsisters, works as a bounty hunter, and becomes one of the Clone Wars' most complicated survivors.",
    relationships: "Apprentice and tool of Dooku; linked to Mother Talzin and the Nightsisters; rival of Obi-Wan and Anakin.",
    significance: "Her story complicates dark side identity by mixing trauma, survival, loyalty, and partial reinvention."
  },
  {
    name: "General Grievous",
    faction: "Separatist",
    era: "Fall of the Jedi",
    role: "Cyborg general, Jedi hunter",
    first: "Revenge of the Sith",
    arc: "Grievous commands Separatist droid armies, collects lightsabers from Jedi victims, and serves as a terrifying but disposable instrument in Sidious and Dooku's war design.",
    relationships: "Serves Dooku and Sidious; enemy of Obi-Wan, Anakin, and Republic forces.",
    significance: "He embodies the Clone Wars' mechanized horror: living hatred fused to military hardware."
  },
  {
    name: "Nute Gunray",
    faction: "Separatist",
    era: "Fall of the Jedi",
    role: "Trade Federation viceroy",
    first: "The Phantom Menace",
    arc: "Gunray helps blockade and invade Naboo under Sith influence, later joins the Separatist leadership, and dies when Vader slaughters the council on Mustafar.",
    relationships: "Pawn of Sidious; enemy of Padme; Separatist Council member.",
    significance: "He shows how corporate greed and cowardice can be folded into authoritarian design."
  },
  {
    name: "Wilhuff Tarkin",
    faction: "Empire",
    era: "Reign of the Empire",
    role: "Grand Moff, Death Star commander",
    first: "A New Hope",
    arc: "Tarkin advances through Republic and Imperial structures, champions fear-based doctrine, commands the Death Star, destroys Alderaan, and dies refusing to believe the Rebels can win.",
    relationships: "Ally of Vader and Palpatine; enemy of Leia and the Rebel Alliance.",
    significance: "His doctrine turns governance into terror and makes the Death Star a political philosophy."
  },
  {
    name: "Qi'ra",
    faction: "Underworld",
    era: "Reign of the Empire",
    role: "Survivor, strategist, Crimson Dawn leader",
    first: "Solo",
    arc: "Qi'ra escapes Corellian poverty through dangerous criminal structures, becomes tied to Crimson Dawn, and chooses survival through power rather than Han's freer path.",
    relationships: "Former partner of Han; subordinate of Dryden Vos and Maul; leader within Crimson Dawn.",
    significance: "She shows the underworld as another empire, where affection and ambition collide under pressure."
  },
  {
    name: "K-2SO",
    faction: "Rebellion",
    era: "Reign of the Empire",
    role: "Reprogrammed Imperial security droid",
    first: "Rogue One",
    arc: "K-2SO is reprogrammed to assist Cassian and the Rebellion. His blunt humor, strength, and final stand on Scarif help Rogue One transmit the Death Star plans.",
    relationships: "Partner of Cassian; ally of Jyn and Rogue One.",
    significance: "He gives the Rebellion a sharp, tragic droid hero whose loyalty is chosen after reprogramming."
  },
  {
    name: "Maz Kanata",
    faction: "Resistance",
    era: "First Order",
    role: "Pirate queen, castle keeper, Force-aware elder",
    first: "The Force Awakens",
    arc: "Maz runs a neutral haven at Takodana, preserves Luke's old lightsaber, recognizes Rey's fear and potential, and supports the Resistance without becoming a Jedi.",
    relationships: "Friend of Han, Chewbacca, Leia, and later Rey's group.",
    significance: "She represents ancient, informal wisdom outside official temples and governments."
  },
  {
    name: "Snoke",
    faction: "First Order",
    era: "First Order",
    role: "Supreme Leader, dark side proxy",
    first: "The Force Awakens",
    arc: "Snoke leads the First Order and corrupts Ben Solo, but is later revealed as part of Palpatine's larger design. Kylo kills him while trying to seize control of his own destiny.",
    relationships: "Master of Kylo Ren; manipulated by or created for Palpatine's strategy; enemy of Leia's Resistance.",
    significance: "He is a false final boss, useful because he shows how authoritarian systems manufacture faces for older power."
  }
].map((character) => ({ ...character, tier: "featured" }));

const additionalCharacterRows = `
Jar Jar Binks|Republic|Fall of the Jedi|Gungan representative and reluctant wartime senator|The Phantom Menace
Shmi Skywalker|Civilian|Fall of the Jedi|Anakin's mother and moral anchor|The Phantom Menace
Watto|Underworld|Fall of the Jedi|Toydarian junk dealer and podracing gambler|The Phantom Menace
Sebulba|Underworld|Fall of the Jedi|Dug podracer and Anakin's early rival|The Phantom Menace
Boss Nass|Gungan|Fall of the Jedi|Leader of the Gungan city beneath Naboo's lakes|The Phantom Menace
Sio Bibble|Republic|Fall of the Jedi|Naboo governor and royal adviser|The Phantom Menace
Captain Panaka|Republic|Fall of the Jedi|Security chief for Queen Amidala|The Phantom Menace
Ric Olie|Republic|Fall of the Jedi|Naboo pilot and royal starship captain|The Phantom Menace
Captain Typho|Republic|Fall of the Jedi|Naboo security officer guarding Padme|Attack of the Clones
Cliegg Lars|Civilian|Fall of the Jedi|Moisture farmer who marries Shmi Skywalker|Attack of the Clones
Owen Lars|Civilian|Age of Rebellion|Luke's protective uncle on Tatooine|Attack of the Clones
Beru Lars|Civilian|Age of Rebellion|Luke's aunt and steady family presence|Attack of the Clones
Dexter Jettster|Civilian|Fall of the Jedi|Coruscant diner owner with deep street knowledge|Attack of the Clones
Lama Su|Kaminoan|Fall of the Jedi|Kaminoan prime minister overseeing the clone army|Attack of the Clones
Taun We|Kaminoan|Fall of the Jedi|Kaminoan aide who introduces Obi-Wan to the clones|Attack of the Clones
Poggle the Lesser|Separatist|Fall of the Jedi|Geonosian leader and Separatist weapons builder|Attack of the Clones
Rune Haako|Separatist|Fall of the Jedi|Neimoidian official tied to the Naboo blockade|The Phantom Menace
Mas Amedda|Empire|Fall of the Jedi|Senate official who helps Palpatine consolidate power|The Phantom Menace
Finis Valorum|Republic|Fall of the Jedi|Supreme Chancellor removed during the Naboo crisis|The Phantom Menace
Jocasta Nu|Jedi|Fall of the Jedi|Jedi Temple archivist and guardian of knowledge|Attack of the Clones
Ki-Adi-Mundi|Jedi|Fall of the Jedi|Cerean Jedi Council member and Clone Wars general|The Phantom Menace
Plo Koon|Jedi|Fall of the Jedi|Kel Dor Jedi Master respected by clone pilots|The Phantom Menace
Kit Fisto|Jedi|Fall of the Jedi|Nautolan Jedi Master and skilled lightsaber duelist|Attack of the Clones
Shaak Ti|Jedi|Fall of the Jedi|Togruta Jedi Master linked to Kamino and clone training|Attack of the Clones
Aayla Secura|Jedi|Fall of the Jedi|Twi'lek Jedi Knight and Clone Wars commander|Attack of the Clones
Luminara Unduli|Jedi|Fall of the Jedi|Mirialan Jedi Master and battlefield general|Attack of the Clones
Barriss Offee|Jedi|Fall of the Jedi|Mirialan Padawan whose disillusionment exposes Jedi strain|Attack of the Clones
Adi Gallia|Jedi|Fall of the Jedi|Jedi Council member active in Clone Wars missions|The Phantom Menace
Saesee Tiin|Jedi|Fall of the Jedi|Iktotchi Jedi Master and expert pilot|The Phantom Menace
Yaddle|Jedi|Fall of the Jedi|Jedi Council member who confronts Dooku's fall|The Phantom Menace
Depa Billaba|Jedi|Fall of the Jedi|Jedi Master and teacher of Caleb Dume|The Phantom Menace
Quinlan Vos|Jedi|Fall of the Jedi|Kiffar Jedi known for undercover work and psychometry|The Phantom Menace
Sifo-Dyas|Jedi|Fall of the Jedi|Jedi whose name becomes tied to the clone army order|Attack of the Clones
Tera Sinube|Jedi|Fall of the Jedi|Elder Jedi investigator and patient mentor|The Clone Wars
Pong Krell|Jedi|Fall of the Jedi|Besalisk general whose betrayal devastates clone troops|The Clone Wars
Professor Huyang|Jedi|New Republic|Ancient droid who teaches lightsaber construction|The Clone Wars
Duchess Satine Kryze|Mandalorian|Fall of the Jedi|Pacifist ruler of Mandalore and Obi-Wan's old love|The Clone Wars
Pre Vizsla|Mandalorian|Fall of the Jedi|Death Watch leader who wields the Darksaber|The Clone Wars
Prime Minister Almec|Mandalorian|Fall of the Jedi|Mandalorian politician caught in corruption and occupation|The Clone Wars
Gar Saxon|Mandalorian|Imperial Era|Imperial-aligned Mandalorian commander|The Clone Wars
Ursa Wren|Mandalorian|Imperial Era|Mandalorian countess and Sabine's mother|Star Wars Rebels
Tristan Wren|Mandalorian|Imperial Era|Sabine's brother and Clan Wren warrior|Star Wars Rebels
Fenn Rau|Mandalorian|Imperial Era|Protector of Concord Dawn drawn into rebellion|Star Wars Rebels
Tarre Vizsla|Mandalorian|Old Republic|First Mandalorian Jedi and creator of the Darksaber|Star Wars Rebels
Savage Opress|Sith|Fall of the Jedi|Nightbrother transformed into Maul's brutal apprentice|The Clone Wars
Mother Talzin|Nightsister|Fall of the Jedi|Nightsister leader and Maul's mother|The Clone Wars
Steela Gerrera|Rebellion|Fall of the Jedi|Onderon rebel and Saw Gerrera's sister|The Clone Wars
Lux Bonteri|Separatist|Fall of the Jedi|Separatist senator's son who questions both sides|The Clone Wars
Rush Clovis|Republic|Fall of the Jedi|Banking Clan figure with ties to Padme|The Clone Wars
Cham Syndulla|Rebellion|Imperial Era|Twi'lek freedom fighter and Hera's father|The Clone Wars
Riyo Chuchi|Republic|Fall of the Jedi|Pantoran senator who defends clone rights|The Clone Wars
Ziro the Hutt|Underworld|Fall of the Jedi|Hutt crime boss caught between syndicates|The Clone Wars
Commander Cody|Clone Trooper|Fall of the Jedi|Obi-Wan's clone marshal commander|Revenge of the Sith
Fives|Clone Trooper|Fall of the Jedi|ARC trooper who uncovers the inhibitor-chip conspiracy|The Clone Wars
Echo|Clone Trooper|Imperial Era|ARC trooper later rescued into the Bad Batch orbit|The Clone Wars
Jesse|Clone Trooper|Fall of the Jedi|501st trooper caught in Order 66 against Ahsoka|The Clone Wars
Kix|Clone Trooper|Fall of the Jedi|Clone medic who investigates the chips|The Clone Wars
Wolffe|Clone Trooper|Imperial Era|Clone commander who survives into rebellion-era exile|The Clone Wars
Gregor|Clone Trooper|Imperial Era|Clone commando survivor who aids rebels|The Clone Wars
99|Clone Trooper|Fall of the Jedi|Defective clone whose courage inspires his brothers|The Clone Wars
Tup|Clone Trooper|Fall of the Jedi|Clone whose malfunction reveals the Order 66 plot|The Clone Wars
Hardcase|Clone Trooper|Fall of the Jedi|Explosive 501st trooper on Umbara|The Clone Wars
Dogma|Clone Trooper|Fall of the Jedi|Rule-bound trooper shaken by Krell's betrayal|The Clone Wars
Hevy|Clone Trooper|Fall of the Jedi|Domino Squad cadet who dies defending Rishi Station|The Clone Wars
Cutup|Clone Trooper|Fall of the Jedi|Domino Squad trooper lost during early deployment|The Clone Wars
Waxer|Clone Trooper|Fall of the Jedi|Compassionate clone trooper seen on Ryloth and Umbara|The Clone Wars
Boil|Clone Trooper|Fall of the Jedi|Clone trooper paired with Waxer during Ryloth missions|The Clone Wars
Bly|Clone Trooper|Fall of the Jedi|Clone commander serving with Aayla Secura|Revenge of the Sith
Gree|Clone Trooper|Fall of the Jedi|Clone commander on Kashyyyk with Yoda|Revenge of the Sith
Neyo|Clone Trooper|Fall of the Jedi|Clone commander involved in Order 66 on Saleucami|Revenge of the Sith
Bacara|Clone Trooper|Fall of the Jedi|Clone commander serving with Ki-Adi-Mundi|Revenge of the Sith
Commander Fox|Clone Trooper|Fall of the Jedi|Coruscant Guard commander enforcing Republic security|The Clone Wars
Commander Thorn|Clone Trooper|Fall of the Jedi|Coruscant Guard officer who fights Separatist droids|The Clone Wars
Scorch|Clone Trooper|Imperial Era|Clone commando later serving Imperial projects|The Bad Batch
Hunter|Clone Trooper|Imperial Era|Leader of Clone Force 99|The Bad Batch
Wrecker|Clone Trooper|Imperial Era|Bad Batch heavy weapons specialist|The Clone Wars
Tech|Clone Trooper|Imperial Era|Bad Batch strategist and technical genius|The Clone Wars
Crosshair|Clone Trooper|Imperial Era|Bad Batch marksman pulled between Empire and family|The Clone Wars
Omega|Clone Trooper|Imperial Era|Young clone who becomes the Bad Batch's heart|The Bad Batch
AZI-3|Droid|Fall of the Jedi|Medical droid who helps Fives investigate the chips|The Clone Wars
Todo 360|Droid|Fall of the Jedi|Cad Bane's fussy techno-service droid|The Clone Wars
Cad Bane|Underworld|Fall of the Jedi|Duros bounty hunter feared across the Clone Wars|The Clone Wars
Aurra Sing|Underworld|Fall of the Jedi|Sniper and bounty hunter tied to young Boba Fett|The Clone Wars
Embo|Underworld|Fall of the Jedi|Kyuzo bounty hunter with a shield-brim hat|The Clone Wars
Sugi|Underworld|Fall of the Jedi|Bounty hunter who protects Felucian villagers|The Clone Wars
Bossk|Underworld|Age of Rebellion|Trandoshan bounty hunter and longtime hunter of Wookiees|The Empire Strikes Back
Dengar|Underworld|Age of Rebellion|Corellian bounty hunter seen among Vader's hired trackers|The Empire Strikes Back
Latts Razzi|Underworld|Fall of the Jedi|Theelin bounty hunter in Boba's circle|The Clone Wars
Hondo Ohnaka|Underworld|Imperial Era|Pirate captain whose schemes sometimes help heroes|The Clone Wars
Cikatro Vizago|Underworld|Imperial Era|Devaronian crime boss operating on Lothal|Star Wars Rebels
Bazine Netal|Underworld|First Order|Spy who reports BB-8's location to the First Order|The Force Awakens
Krrsantan|Underworld|New Republic|Wookiee gladiator and bounty hunter|The Book of Boba Fett
Fennec Shand|Underworld|New Republic|Elite assassin who becomes Boba Fett's partner|The Mandalorian
Cobb Vanth|New Republic|New Republic|Tatooine marshal wearing recovered Mandalorian armor|The Mandalorian
Wedge Antilles|Rebellion|Age of Rebellion|X-wing pilot who survives major Rebel battles|A New Hope
Biggs Darklighter|Rebellion|Age of Rebellion|Luke's friend and Rebel pilot at Yavin|A New Hope
Jek Porkins|Rebellion|Age of Rebellion|Red Squadron pilot at the Battle of Yavin|A New Hope
Garven Dreis|Rebellion|Age of Rebellion|Red Leader during the Death Star attack|A New Hope
Dutch Vander|Rebellion|Age of Rebellion|Gold Leader during the trench-run assault|A New Hope
Zev Senesca|Rebellion|Age of Rebellion|Rogue Two pilot who finds Han and Luke on Hoth|The Empire Strikes Back
Wes Janson|Rebellion|Age of Rebellion|Snowspeeder gunner who helps trip an AT-AT|The Empire Strikes Back
Hobbie Klivian|Rebellion|Age of Rebellion|Rebel pilot active with Rogue Squadron|The Empire Strikes Back
Dak Ralter|Rebellion|Age of Rebellion|Luke's Hoth gunner killed during the evacuation|The Empire Strikes Back
General Dodonna|Rebellion|Age of Rebellion|Rebel strategist who briefs the Yavin assault|A New Hope
General Rieekan|Rebellion|Age of Rebellion|Hoth commander who organizes Echo Base evacuation|The Empire Strikes Back
Admiral Ackbar|Rebellion|Age of Rebellion|Mon Calamari commander of the Endor fleet|Return of the Jedi
Nien Nunb|Rebellion|Age of Rebellion|Sullustan co-pilot of the Millennium Falcon at Endor|Return of the Jedi
Crix Madine|Rebellion|Age of Rebellion|Rebel general in the Endor strike planning|Return of the Jedi
General Veers|Empire|Age of Rebellion|Imperial ground commander leading the Hoth assault|The Empire Strikes Back
Admiral Piett|Empire|Age of Rebellion|Imperial officer promoted under Vader's command|The Empire Strikes Back
Admiral Ozzel|Empire|Age of Rebellion|Imperial admiral punished for tactical failure|The Empire Strikes Back
Admiral Motti|Empire|Age of Rebellion|Death Star officer skeptical of the Force|A New Hope
General Tagge|Empire|Age of Rebellion|Imperial officer wary of Rebel threats|A New Hope
Wullf Yularen|Empire|Age of Rebellion|Former Republic admiral turned Imperial security officer|A New Hope
Captain Needa|Empire|Age of Rebellion|Star Destroyer captain who loses the Falcon|The Empire Strikes Back
Moff Jerjerrod|Empire|Age of Rebellion|Second Death Star commander under Palpatine's pressure|Return of the Jedi
Bib Fortuna|Underworld|Age of Rebellion|Twi'lek majordomo in Jabba's palace|Return of the Jedi
Max Rebo|Underworld|Age of Rebellion|Ortolan musician leading Jabba's house band|Return of the Jedi
Sy Snootles|Underworld|Age of Rebellion|Pa'lowick singer in the Max Rebo Band|Return of the Jedi
Oola|Underworld|Age of Rebellion|Twi'lek dancer enslaved in Jabba's palace|Return of the Jedi
Greedo|Underworld|Age of Rebellion|Rodian bounty hunter who confronts Han Solo|A New Hope
Doctor Evazan|Underworld|Age of Rebellion|Criminal surgeon encountered in Mos Eisley|A New Hope
Momaw Nadon|Civilian|Age of Rebellion|Ithorian exile seen in the cantina|A New Hope
Figrin D'an|Civilian|Age of Rebellion|Bith bandleader at the Mos Eisley cantina|A New Hope
Garindan|Underworld|Age of Rebellion|Kubaz spy tracking droids for the Empire|A New Hope
Wuher|Civilian|Age of Rebellion|Bartender at Chalmun's cantina|A New Hope
BoShek|Civilian|Age of Rebellion|Pilot who points Obi-Wan toward Chewbacca|A New Hope
Toryn Farr|Rebellion|Age of Rebellion|Echo Base communications officer|The Empire Strikes Back
Lobot|Civilian|Age of Rebellion|Lando's cyborg aide in Cloud City|The Empire Strikes Back
4-LOM|Underworld|Age of Rebellion|Protocol-droid-turned-bounty-hunter hired by Vader|The Empire Strikes Back
Zuckuss|Underworld|Age of Rebellion|Gand findsman bounty hunter hired by Vader|The Empire Strikes Back
IG-88|Underworld|Age of Rebellion|Assassin droid bounty hunter hired by Vader|The Empire Strikes Back
2-1B|Droid|Age of Rebellion|Medical droid who treats Luke on Hoth|The Empire Strikes Back
EV-9D9|Droid|Age of Rebellion|Droid supervisor in Jabba's palace|Return of the Jedi
Wicket W. Warrick|Ewok|Age of Rebellion|Ewok scout who befriends Leia|Return of the Jedi
Logray|Ewok|Age of Rebellion|Ewok shaman of Bright Tree Village|Return of the Jedi
Teebo|Ewok|Age of Rebellion|Ewok warrior in the Endor ground battle|Return of the Jedi
Paploo|Ewok|Age of Rebellion|Ewok who distracts Imperial scouts on Endor|Return of the Jedi
Chief Chirpa|Ewok|Age of Rebellion|Ewok leader who allies with the Rebels|Return of the Jedi
Chirrut Imwe|Rebellion|Age of Rebellion|Blind Guardian of the Whills and Rogue One ally|Rogue One
Baze Malbus|Rebellion|Age of Rebellion|Heavy-weapons Guardian of the Whills|Rogue One
Bodhi Rook|Rebellion|Age of Rebellion|Imperial pilot who defects with Galen's warning|Rogue One
Galen Erso|Rebellion|Age of Rebellion|Scientist forced to build the Death Star's core weapon|Rogue One
Orson Krennic|Empire|Age of Rebellion|Imperial director of advanced weapons research|Rogue One
Lyra Erso|Civilian|Age of Rebellion|Jyn's mother and believer in the Force|Rogue One
Benthic|Rebellion|Age of Rebellion|Partisan fighter serving Saw Gerrera|Rogue One
Edrio Two Tubes|Rebellion|Age of Rebellion|Partisan scout and enforcer|Rogue One
Ruescott Melshi|Rebellion|Age of Rebellion|Rebel soldier who aids Cassian and Jyn|Rogue One
Bistan|Rebellion|Age of Rebellion|Iakaru door gunner at Scarif|Rogue One
Pao|Rebellion|Age of Rebellion|Drabatan commando in the Scarif ground team|Rogue One
General Draven|Rebellion|Age of Rebellion|Rebel intelligence general directing Cassian|Rogue One
Antoc Merrick|Rebellion|Age of Rebellion|Blue Leader in the Battle of Scarif|Rogue One
Admiral Raddus|Rebellion|Age of Rebellion|Mon Calamari admiral who commits the fleet to Scarif|Rogue One
Alexsandr Kallus|Rebellion|Imperial Era|Imperial agent who becomes a rebel informant|Star Wars Rebels
Garazeb Orrelios|Rebellion|Imperial Era|Lasat survivor and Ghost crew muscle|Star Wars Rebels
Ketsu Onyo|Underworld|Imperial Era|Mandalorian bounty hunter and Sabine's old friend|Star Wars Rebels
Ryder Azadi|Rebellion|Imperial Era|Former Lothal governor turned rebel ally|Star Wars Rebels
Fifth Brother|Empire|Imperial Era|Inquisitor hunting surviving Jedi and rebels|Star Wars Rebels
Seventh Sister|Empire|Imperial Era|Mirialan Inquisitor tracking Force-sensitive targets|Star Wars Rebels
Eighth Brother|Empire|Imperial Era|Terrelian Jango Jumper Inquisitor|Star Wars Rebels
The Grand Inquisitor|Empire|Imperial Era|Former Jedi Temple guard leading the Inquisitorius|Star Wars Rebels
Tseebo|Civilian|Imperial Era|Rodian information worker carrying Imperial secrets|Star Wars Rebels
Jai Kell|Rebellion|Imperial Era|Lothal cadet helped by Ezra|Star Wars Rebels
Mart Mattin|Rebellion|Imperial Era|Young rebel pilot in Phoenix Squadron's orbit|Star Wars Rebels
Azmorigan|Underworld|Imperial Era|Jablogian criminal boss and dealmaker|Star Wars Rebels
Luthen Rael|Rebellion|Imperial Era|Antique dealer secretly building rebel networks|Andor
Bix Caleen|Rebellion|Imperial Era|Ferrix mechanic pulled into Imperial repression|Andor
Dedra Meero|Empire|Imperial Era|ISB supervisor hunting rebel patterns|Andor
Syril Karn|Empire|Imperial Era|Security officer obsessed with order and Cassian|Andor
Maarva Andor|Rebellion|Imperial Era|Cassian's adoptive mother and Ferrix inspiration|Andor
Brasso|Rebellion|Imperial Era|Ferrix worker and loyal friend to Cassian|Andor
B2EMO|Droid|Imperial Era|Aging salvage droid in Maarva's household|Andor
Kleya Marki|Rebellion|Imperial Era|Luthen's precise rebel coordinator|Andor
Vel Sartha|Rebellion|Imperial Era|Rebel operative leading the Aldhani mission|Andor
Cinta Kaz|Rebellion|Imperial Era|Committed rebel agent shaped by Imperial violence|Andor
Kino Loy|Civilian|Imperial Era|Narkina 5 floor manager turned prison-break leader|Andor
Greef Karga|New Republic|New Republic|Nevarro magistrate and bounty guild leader|The Mandalorian
Cara Dune|New Republic|New Republic|Former Rebel shock trooper working on Nevarro|The Mandalorian
Kuiil|Civilian|New Republic|Ugnaught vapor farmer who helps Din and Grogu|The Mandalorian
IG-11|Droid|New Republic|Assassin droid reprogrammed into Grogu's protector|The Mandalorian
The Armorer|Mandalorian|New Republic|Covert leader preserving Mandalorian tradition|The Mandalorian
Paz Vizsla|Mandalorian|New Republic|Heavy infantry Mandalorian of Clan Vizsla|The Mandalorian
Axe Woves|Mandalorian|New Republic|Mandalorian privateer serving Bo-Katan's fleet|The Mandalorian
Koska Reeves|Mandalorian|New Republic|Nite Owl warrior allied with Bo-Katan|The Mandalorian
Dr. Pershing|Empire|New Republic|Imperial cloning scientist tied to Grogu experiments|The Mandalorian
Carson Teva|New Republic|New Republic|New Republic pilot tracking Outer Rim threats|The Mandalorian
Elia Kane|Empire|New Republic|Former Imperial officer inside New Republic amnesty|The Mandalorian
Morgan Elsbeth|Empire|New Republic|Imperial loyalist and Nightsister descendant|The Mandalorian
Baylan Skoll|Dark Side|New Republic|Former Jedi mercenary seeking hidden power|Ahsoka
Shin Hati|Dark Side|New Republic|Baylan's intense apprentice|Ahsoka
Marrok|Empire|New Republic|Masked Inquisitor-like mercenary serving Morgan|Ahsoka
Captain Enoch|Empire|New Republic|Golden-masked captain in Thrawn's forces|Ahsoka
Jod Na Nawood|Underworld|New Republic|Force-using pirate figure around the At Attin children|Skeleton Crew
Wim|Civilian|New Republic|At Attin child drawn into a wider adventure|Skeleton Crew
Fern|Civilian|New Republic|Bold At Attin student aboard the Onyx Cinder|Skeleton Crew
KB|Civilian|New Republic|At Attin child and Fern's close friend|Skeleton Crew
Neel|Civilian|New Republic|Gentle At Attin child in the Skeleton Crew group|Skeleton Crew
SM-33|Droid|New Republic|Pirate droid first mate aboard the Onyx Cinder|Skeleton Crew
Kh'ymm|Civilian|New Republic|Observatory keeper who studies galactic routes|Skeleton Crew
Brutus|Underworld|New Republic|Shistavanen pirate captain chasing the children|Skeleton Crew
Snap Wexley|Resistance|First Order|Resistance pilot and recon specialist|The Force Awakens
Jessika Pava|Resistance|First Order|Blue Squadron pilot flying with the Resistance|The Force Awakens
Kaydel Ko Connix|Resistance|First Order|Resistance officer serving Leia's command staff|The Force Awakens
Tallissan Lintra|Resistance|First Order|A-wing pilot in the evacuation from D'Qar|The Last Jedi
Amilyn Holdo|Resistance|First Order|Vice admiral who protects the Resistance fleet|The Last Jedi
DJ|Underworld|First Order|Codebreaker whose cynicism tests Finn and Rose|The Last Jedi
Zorii Bliss|Underworld|First Order|Kijimi spice runner from Poe's past|The Rise of Skywalker
Jannah|Resistance|First Order|Former stormtrooper who joins the final battle|The Rise of Skywalker
General Hux|First Order|First Order|Ambitious First Order officer and rival to Kylo|The Force Awakens
Captain Phasma|First Order|First Order|Chrome-armored stormtrooper commander|The Force Awakens
Allegiant General Pryde|First Order|First Order|Old Imperial loyalist serving the Final Order|The Rise of Skywalker
Cal Kestis|Jedi|Imperial Era|Jedi survivor rebuilding his connection to the Force|Jedi: Fallen Order
Cere Junda|Jedi|Imperial Era|Former Jedi mentor fighting the Empire's shadow|Jedi: Fallen Order
Greez Dritus|Civilian|Imperial Era|Latero pilot and captain of the Stinger Mantis|Jedi: Fallen Order
BD-1|Droid|Imperial Era|Explorer droid and Cal Kestis's companion|Jedi: Fallen Order
Nightsister Merrin|Nightsister|Imperial Era|Dathomir survivor who joins Cal's crew|Jedi: Fallen Order
Avar Kriss|Jedi|High Republic|Beacon-era Jedi Marshal strong in the Force as song|The High Republic
Vernestra Rwoh|Jedi|High Republic|Prodigy Jedi Knight who later shapes High Republic mysteries|The High Republic
Marchion Ro|Underworld|High Republic|Nihil leader and architect of hyperspace terror|The High Republic
Bell Zettifar|Jedi|High Republic|Jedi Knight and survivor of frontier disasters|The High Republic
Burryaga|Jedi|High Republic|Wookiee Jedi with deep empathy|The High Republic
Sol|Jedi|High Republic|Jedi Master investigating the Mae and Osha mystery|The Acolyte
Osha Aniseya|Dark Side|High Republic|Former Jedi Padawan tied to Brendok's tragedy|The Acolyte
Mae Aniseya|Dark Side|High Republic|Force-sensitive twin targeting Jedi from her past|The Acolyte
Jecki Lon|Jedi|High Republic|Padawan of Sol during the Acolyte investigation|The Acolyte
Yord Fandar|Jedi|High Republic|By-the-book Jedi Knight in the High Republic era|The Acolyte
`;

const archiveCharacters = additionalCharacterRows.trim().split("\n").map((row) => {
  const [name, faction, era, role, first] = row.split("|");
  return {
    name,
    faction,
    era,
    role,
    first,
    tier: "archive",
    arc: `${name} is cataloged here as ${role.toLowerCase()}, with story context beginning in ${first}.`,
    relationships: `Connected through ${faction} circles, ${era} events, and the larger web of wars, families, crews, orders, and rival powers.`,
    significance: `This dossier widens the archive beyond the central heroes, showing how ${role.toLowerCase()} shape the galaxy at street level, battlefield level, or political level.`
  };
});

const characters = [...featuredCharacters, ...archiveCharacters];

const gearRows = `
Millennium Falcon|Freighter|Age of Rebellion|Rebellion and Resistance|A New Hope|Corellian YT-1300 freighter flown by Han, Chewbacca, Lando, Rey, and others; fast, battered, and central to major Rebel victories.
Tantive IV|Capital Ship|Age of Rebellion|Alderaan and Rebellion|A New Hope|CR90 corvette carrying Leia, Rebel secrets, and the Death Star plans at the start of the original film.
X-wing Starfighter|Starfighter|Age of Rebellion|Rebel Alliance|A New Hope|Iconic Rebel fighter with S-foils, astromech support, proton torpedoes, and the trench-run shot that destroys the Death Star.
T-70 X-wing|Starfighter|First Order|Resistance|The Force Awakens|Updated Resistance X-wing flown by Poe Dameron and other pilots against the First Order.
Y-wing Starfighter|Starfighter|Age of Rebellion|Rebel Alliance|A New Hope|Heavy fighter-bomber used in the Clone Wars, Rebellion, and Resistance for assaults against hardened targets.
A-wing Interceptor|Starfighter|Age of Rebellion|Rebel Alliance|Return of the Jedi|Fast Rebel interceptor famous for speed, flanking attacks, and the crash that helps destroy the Executor.
B-wing Starfighter|Starfighter|Age of Rebellion|Rebel Alliance|Return of the Jedi|Heavy assault starfighter designed for anti-capital-ship work, with a rotating cockpit and unusual wing geometry.
U-wing Gunship|Transport|Age of Rebellion|Rebel Alliance|Rogue One|Troop transport and support gunship used by Rebel commandos at Jedha, Eadu, and Scarif.
Snowspeeder|Vehicle|Age of Rebellion|Rebel Alliance|The Empire Strikes Back|Airspeeder adapted for Hoth's cold, famous for tow-cable attacks against Imperial walkers.
GR-75 Medium Transport|Transport|Age of Rebellion|Rebel Alliance|The Empire Strikes Back|Bulky Rebel transport used to evacuate Echo Base under Imperial attack.
Home One|Capital Ship|Age of Rebellion|Rebel Alliance|Return of the Jedi|Admiral Ackbar's Mon Calamari command ship during the Battle of Endor.
Profundity|Capital Ship|Age of Rebellion|Rebel Alliance|Rogue One|Admiral Raddus's flagship at Scarif, where the Death Star plans escape toward Leia.
Hammerhead Corvette|Capital Ship|Imperial Era|Rebel Alliance|Star Wars Rebels|Sturdy Rebel corvette used for ramming tactics, including the Scarif shield-gate battle.
Nebulon-B Frigate|Capital Ship|Age of Rebellion|Rebel Alliance|The Empire Strikes Back|Medical and escort frigate seen with the Rebel fleet after Hoth.
Ghost|Freighter|Imperial Era|Rebel Alliance|Star Wars Rebels|Modified VCX-100 light freighter and mobile home of Hera Syndulla's rebel cell.
Phantom I|Shuttle|Imperial Era|Rebel Alliance|Star Wars Rebels|Small attack shuttle docked with the Ghost during early rebel missions.
Phantom II|Shuttle|Imperial Era|Rebel Alliance|Star Wars Rebels|Separatist shuttle repurposed by the Ghost crew after the first Phantom is lost.
Naboo N-1 Starfighter|Starfighter|Fall of the Jedi|Naboo|The Phantom Menace|Sleek yellow Naboo fighter used in the battle above Naboo and later rebuilt for Din Djarin.
Naboo Royal Starship|Transport|Fall of the Jedi|Naboo|The Phantom Menace|Chrome diplomatic craft used by Queen Amidala during the Naboo crisis.
Naboo Royal Cruiser|Transport|Fall of the Jedi|Naboo|Attack of the Clones|Elegant diplomatic cruiser destroyed in the assassination attempt on Padme.
Delta-7 Jedi Starfighter|Starfighter|Fall of the Jedi|Jedi Order|Attack of the Clones|Compact Jedi interceptor used by Obi-Wan and other Jedi before the Clone Wars escalated.
Eta-2 Jedi Interceptor|Starfighter|Fall of the Jedi|Jedi Order|Revenge of the Sith|Late-war Jedi starfighter with split wings and tight cockpit built for Force-assisted pilots.
T-6 Jedi Shuttle|Shuttle|Fall of the Jedi|Jedi Order|The Clone Wars|Rotating-wing shuttle associated with Jedi diplomatic and training missions.
Republic Gunship|Transport|Fall of the Jedi|Galactic Republic|Attack of the Clones|LAAT gunship that carries clone troops and Jedi into battle.
AT-TE Walker|Vehicle|Fall of the Jedi|Galactic Republic|Attack of the Clones|Six-legged Republic artillery walker used on Geonosis and many Clone Wars fronts.
ARC-170 Starfighter|Starfighter|Fall of the Jedi|Galactic Republic|Revenge of the Sith|Heavy Republic starfighter with multiple crew positions and broad attack capability.
V-wing Starfighter|Starfighter|Fall of the Jedi|Galactic Republic|Revenge of the Sith|Late Republic fighter design that visually foreshadows Imperial TIE craft.
Venator-class Star Destroyer|Capital Ship|Fall of the Jedi|Galactic Republic|Revenge of the Sith|Republic carrier-destroyer that becomes the bridge between Clone Wars fleets and Imperial doctrine.
Acclamator Assault Ship|Capital Ship|Fall of the Jedi|Galactic Republic|Attack of the Clones|Troop carrier that delivers the clone army to Geonosis.
Consular-class Cruiser|Capital Ship|Fall of the Jedi|Galactic Republic|The Phantom Menace|Red diplomatic cruiser used by Jedi envoys before the Naboo blockade.
Twilight|Freighter|Fall of the Jedi|Jedi allies|The Clone Wars|Anakin's rough freighter, showing his preference for practical and heavily modified ships.
Lucrehulk Battleship|Capital Ship|Fall of the Jedi|Trade Federation|The Phantom Menace|Massive ring-shaped battleship and droid-control platform used at Naboo.
Invisible Hand|Capital Ship|Fall of the Jedi|Separatists|Revenge of the Sith|Grievous's flagship over Coruscant, where Anakin and Obi-Wan rescue Palpatine.
Malevolence|Capital Ship|Fall of the Jedi|Separatists|The Clone Wars|Separatist superweapon ship armed with an ion cannon that disables whole fleets.
Vulture Droid|Starfighter|Fall of the Jedi|Separatists|The Phantom Menace|Droid starfighter that can walk and fly without a living pilot.
Hyena Bomber|Starfighter|Fall of the Jedi|Separatists|The Clone Wars|Droid bomber used for heavier Separatist strike missions.
Droid Tri-Fighter|Starfighter|Fall of the Jedi|Separatists|Revenge of the Sith|Fast Separatist fighter used in the Battle of Coruscant.
Solar Sailer|Transport|Fall of the Jedi|Separatists and Sith|Attack of the Clones|Count Dooku's elegant sail-powered craft leaving Geonosis.
Soulless One|Starfighter|Fall of the Jedi|Separatists|Revenge of the Sith|General Grievous's personal Belbullab-22 starfighter.
AAT Battle Tank|Vehicle|Fall of the Jedi|Trade Federation|The Phantom Menace|Armored hover tank used by battle droid armies on Naboo and beyond.
STAP Speeder|Vehicle|Fall of the Jedi|Trade Federation|The Phantom Menace|Single-trooper droid speeder platform for patrol and pursuit.
TIE Fighter|Starfighter|Age of Rebellion|Galactic Empire|A New Hope|Standard Imperial starfighter built for speed, numbers, and intimidation.
TIE Advanced x1|Starfighter|Age of Rebellion|Galactic Empire|A New Hope|Darth Vader's prototype TIE with shields, hyperdrive, and curved wings.
TIE Bomber|Starfighter|Age of Rebellion|Galactic Empire|The Empire Strikes Back|Twin-hulled Imperial bomber used for asteroid-field and planetary strikes.
TIE Interceptor|Starfighter|Age of Rebellion|Galactic Empire|Return of the Jedi|Sharper, faster TIE variant used by elite Imperial pilots.
TIE Defender|Starfighter|Imperial Era|Galactic Empire|Star Wars Rebels|Thrawn-backed fighter with shields, hyperdrive, and superior firepower.
TIE Striker|Starfighter|Age of Rebellion|Galactic Empire|Rogue One|Atmospheric TIE variant defending Scarif.
TIE Reaper|Transport|Age of Rebellion|Galactic Empire|Rogue One|Imperial troop transport with TIE design language.
Lambda-class Shuttle|Shuttle|Age of Rebellion|Galactic Empire|Return of the Jedi|Folding-wing Imperial shuttle used for officers, infiltration, and VIP transport.
Imperial Star Destroyer|Capital Ship|Age of Rebellion|Galactic Empire|A New Hope|Wedge-shaped Imperial warship that projects occupation, fear, and fleet power.
Executor|Capital Ship|Age of Rebellion|Galactic Empire|The Empire Strikes Back|Darth Vader's Super Star Destroyer and symbol of overwhelming Imperial scale.
AT-AT Walker|Vehicle|Age of Rebellion|Galactic Empire|The Empire Strikes Back|Massive four-legged assault walker used to break Rebel defenses on Hoth.
AT-ST Walker|Vehicle|Age of Rebellion|Galactic Empire|Return of the Jedi|Two-legged scout walker used on Endor and other Imperial fronts.
Speeder Bike|Vehicle|Age of Rebellion|Galactic Empire|Return of the Jedi|Fast repulsorlift bike used by scouts in forest pursuit.
Krennic's Shuttle|Shuttle|Age of Rebellion|Galactic Empire|Rogue One|Black-winged Imperial shuttle used by Director Krennic.
Scythe Transport|Shuttle|Imperial Era|Inquisitorius|Obi-Wan Kenobi|Dark transport used by Imperial Inquisitors while hunting Jedi survivors.
Razor Crest|Freighter|New Republic|Din Djarin|The Mandalorian|Pre-Empire gunship used as Din Djarin's home and bounty-hunting vessel.
Din Djarin's N-1 Starfighter|Starfighter|New Republic|Din Djarin|The Book of Boba Fett|Modified Naboo N-1 rebuilt as Din's fast personal fighter.
Firespray Gunship|Freighter|Age of Rebellion|Fett family|The Empire Strikes Back|Rotating patrol and attack craft associated with Jango and Boba Fett.
Gauntlet Fighter|Transport|Fall of the Jedi|Mandalorians|The Clone Wars|Mandalorian Kom'rk-class fighter and troop transport with folding wings.
Fang Fighter|Starfighter|Imperial Era|Mandalorians|Star Wars Rebels|Fast Mandalorian starfighter used by Protectors and clans.
Mandalorian Cruiser|Capital Ship|New Republic|Mandalorians|The Mandalorian|Fleet craft used by Bo-Katan's forces during the effort to reclaim Mandalore.
Pirate Corsair|Capital Ship|New Republic|Pirates|The Mandalorian|Large pirate vessel used by Gorian Shard against Nevarro.
Onyx Cinder|Freighter|New Republic|Skeleton Crew|Skeleton Crew|Lost starship connected to the children of At Attin.
Resistance Bomber|Capital Ship|First Order|Resistance|The Last Jedi|Slow heavy bomber used in the costly attack on the Fulminatrix.
Raddus|Capital Ship|First Order|Resistance|The Last Jedi|Resistance flagship used in Holdo's hyperspace ramming maneuver.
Finalizer|Capital Ship|First Order|First Order|The Force Awakens|Resurgent-class Star Destroyer serving as a First Order flagship.
Supremacy|Capital Ship|First Order|First Order|The Last Jedi|Snoke's enormous Mega-class command ship and mobile capital.
TIE/sf Fighter|Starfighter|First Order|First Order|The Force Awakens|Two-seat special-forces TIE with shields and heavy weapons.
TIE Silencer|Starfighter|First Order|First Order|The Last Jedi|Kylo Ren's dagger-like personal starfighter.
TIE Whisper|Starfighter|First Order|First Order|The Rise of Skywalker|Kylo Ren's later personal TIE variant.
Kylo Ren's Command Shuttle|Shuttle|First Order|First Order|The Force Awakens|Black folding-wing shuttle used by Kylo Ren.
Ski Speeder|Vehicle|First Order|Resistance|The Last Jedi|Crait surface speeder that scrapes red salt during the Resistance's last stand.
Bestoon Legacy|Freighter|First Order|Ochi of Bestoon|The Rise of Skywalker|Ochi's ship, later used by Rey's group while searching for Exegol clues.
Death Star|Superweapon|Age of Rebellion|Galactic Empire|A New Hope|Moon-sized battle station powered by kyber technology, built to destroy planets and rule through fear.
Death Star II|Superweapon|Age of Rebellion|Galactic Empire|Return of the Jedi|Larger second battle station above Endor, destroyed before full completion.
Death Star Superlaser|Superweapon|Age of Rebellion|Galactic Empire|A New Hope|Planet-killing kyber-powered weapon at the heart of the Death Star project.
Starkiller Base|Superweapon|First Order|First Order|The Force Awakens|Ilum transformed into a system-killing First Order weapon.
Xyston-class Star Destroyer|Superweapon|First Order|Final Order|The Rise of Skywalker|Sith Eternal destroyer fitted with a planet-killing axial superlaser.
Luke's Blue Lightsaber|Lightsaber|Age of Rebellion|Skywalker family|A New Hope|Anakin's blue saber passed to Luke, lost on Bespin, recovered by Maz, then used by Rey.
Luke's Green Lightsaber|Lightsaber|Age of Rebellion|Jedi|Return of the Jedi|Luke's self-built green saber, showing his growth from student to Jedi Knight.
Darth Vader's Lightsaber|Lightsaber|Age of Rebellion|Sith|A New Hope|Red-bladed Sith weapon carried by Vader through Imperial rule.
Obi-Wan Kenobi's Lightsaber|Lightsaber|Fall of the Jedi|Jedi|The Phantom Menace|Blue Jedi saber associated with Obi-Wan's discipline, exile, and final duel with Vader.
Anakin Skywalker's Lightsaber|Lightsaber|Fall of the Jedi|Jedi|Attack of the Clones|Anakin's Jedi weapon before it becomes part of the Skywalker legacy.
Leia Organa's Lightsaber|Lightsaber|First Order|Jedi and Resistance|The Rise of Skywalker|Leia's Jedi training weapon, later crossed with Luke's saber by Rey.
Rey's Yellow Lightsaber|Lightsaber|First Order|Jedi|The Rise of Skywalker|Rey's self-made yellow-bladed saber, signaling a new Jedi path.
Kylo Ren's Crossguard Saber|Lightsaber|First Order|Knights of Ren|The Force Awakens|Unstable red crossguard saber reflecting Ben Solo's fractured identity.
Darth Maul's Double-Bladed Saber|Lightsaber|Fall of the Jedi|Sith|The Phantom Menace|Red saberstaff that turns Maul into the prequels' first visible Sith terror.
Count Dooku's Curved-Hilt Saber|Lightsaber|Fall of the Jedi|Sith|Attack of the Clones|Elegant red dueling saber matching Dooku's aristocratic Makashi style.
Yoda's Lightsaber|Lightsaber|Fall of the Jedi|Jedi|Attack of the Clones|Small green saber used by the Jedi Grand Master.
Mace Windu's Purple Lightsaber|Lightsaber|Fall of the Jedi|Jedi|Attack of the Clones|Distinct purple blade associated with Mace Windu's authority and dueling power.
Ahsoka's Green Sabers|Lightsaber|Fall of the Jedi|Jedi|The Clone Wars|Paired green blades, including a shoto, used during Ahsoka's Padawan years.
Ahsoka's White Sabers|Lightsaber|Imperial Era|Unaffiliated Force user|Star Wars Rebels|White blades made from purified crystals, symbolizing Ahsoka's path outside the Jedi Order.
Darksaber|Lightsaber|Mandalorian history|Mandalorians|The Clone Wars|Ancient black-bladed saber created by Tarre Vizsla and claimed as a symbol of Mandalorian rule.
Kanan Jarrus's Lightsaber|Lightsaber|Imperial Era|Jedi and Rebellion|Star Wars Rebels|Two-piece blue saber designed to be hidden during Imperial occupation.
Ezra Bridger's First Lightsaber|Lightsaber|Imperial Era|Jedi and Rebellion|Star Wars Rebels|Hybrid lightsaber-blaster built by Ezra during his early training.
Ezra Bridger's Green Lightsaber|Lightsaber|Imperial Era|Jedi and Rebellion|Star Wars Rebels|Second saber built after Ezra matures beyond his first improvised weapon.
Grand Inquisitor's Spinning Saber|Lightsaber|Imperial Era|Inquisitorius|Star Wars Rebels|Double-bladed rotating red saber used by the head of the Inquisitorius.
Reva's Inquisitor Saber|Lightsaber|Imperial Era|Inquisitorius|Obi-Wan Kenobi|Red double-bladed Inquisitor weapon carried by the Third Sister.
Asajj Ventress's Twin Sabers|Lightsaber|Fall of the Jedi|Separatists and Nightsisters|The Clone Wars|Curved red sabers used separately or joined, reflecting her assassin training.
Savage Opress's Saberstaff|Lightsaber|Fall of the Jedi|Sith and Nightsisters|The Clone Wars|Heavy double-bladed red saber carried by Maul's brother.
Baylan Skoll's Lightsaber|Lightsaber|New Republic|Dark Jedi|Ahsoka|Orange-red blade carried by a former Jedi mercenary.
Shin Hati's Lightsaber|Lightsaber|New Republic|Dark Jedi|Ahsoka|Orange-red saber wielded by Baylan's apprentice.
Sol's Lightsaber|Lightsaber|High Republic|Jedi|The Acolyte|Blue Jedi saber used by Master Sol in the High Republic era.
The Stranger's Lightsaber|Lightsaber|High Republic|Dark Side|The Acolyte|Red saber associated with Qimir and cortosis-aided dark side combat.
Cal Kestis's Lightsaber|Lightsaber|Imperial Era|Jedi survivor|Jedi: Fallen Order|Customizable survivor saber rebuilt through Cal's journey after Order 66.
Trilla Suduri's Inquisitor Saber|Lightsaber|Imperial Era|Inquisitorius|Jedi: Fallen Order|Red double-bladed saber carried by the Second Sister.
`;

const gearItems = gearRows.trim().split("\n").map((row) => {
  const [name, type, era, affiliation, first, details] = row.split("|");
  return { name, type, era, affiliation, first, details };
});

const factionFilter = document.querySelector("#faction-filter");
const scopeFilter = document.querySelector("#character-scope");
const searchInput = document.querySelector("#character-search");
const grid = document.querySelector("#character-grid");
const count = document.querySelector("#character-count");
const gearTypeFilter = document.querySelector("#gear-type-filter");
const gearSearchInput = document.querySelector("#gear-search");
const gearGrid = document.querySelector("#gear-grid");
const gearCount = document.querySelector("#gear-count");
let characterProfile = null;

function uniqueFactions() {
  return [...new Set(characters.map((character) => character.faction))].sort();
}

function uniqueGearTypes() {
  return [...new Set(gearItems.map((item) => item.type))].sort();
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function characterInitials(name) {
  return name
    .replaceAll("/", " ")
    .split(" ")
    .filter((part) => part.length > 2)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function characterMatches(character, query, faction, scope) {
  const text = Object.values(character).join(" ").toLowerCase();
  const factionMatch = faction === "all" || character.faction === faction;
  const scopeMatch = scope === "all" || character.tier === scope;
  return factionMatch && scopeMatch && text.includes(query);
}

function renderCharacters() {
  if (!grid || !count || !searchInput || !factionFilter || !scopeFilter) {
    return;
  }

  const query = searchInput.value.trim().toLowerCase();
  const faction = factionFilter.value;
  const scope = scopeFilter.value;
  const filtered = characters.filter((character) => characterMatches(character, query, faction, scope));

  count.textContent = `${filtered.length} of ${characters.length} dossier${filtered.length === 1 ? "" : "s"} shown. ${featuredCharacters.length} are detailed main profiles; ${archiveCharacters.length} are quick archive profiles.`;
  grid.innerHTML = filtered.map((character) => {
    const characterIndex = characters.indexOf(character);
    return `
    <article class="character-card" data-character-index="${characterIndex}" data-faction="${escapeHtml(character.faction)}" data-tier="${escapeHtml(character.tier)}">
      <div>
        <h3>${escapeHtml(character.name)}</h3>
      </div>
      <p><strong>${escapeHtml(character.role)}</strong></p>
      <details class="character-card-details">
        <summary>Metadata</summary>
        <div class="character-meta">
          <span class="pill">${escapeHtml(character.faction)}</span>
          <span class="pill">${escapeHtml(character.era)}</span>
          <span class="pill">${character.tier === "featured" ? "Main dossier" : "Archive dossier"}</span>
          <span class="pill">${escapeHtml(character.first)}</span>
        </div>
      </details>
      <button class="character-profile-button" type="button" data-character-index="${characterIndex}" aria-label="Open ${escapeHtml(character.name)} profile">View profile</button>
    </article>
  `;
  }).join("");
}

function buildCharacterProfile() {
  if (!grid || characterProfile) {
    return;
  }

  characterProfile = document.createElement("div");
  characterProfile.className = "profile-overlay";
  characterProfile.setAttribute("role", "dialog");
  characterProfile.setAttribute("aria-modal", "true");
  characterProfile.setAttribute("aria-hidden", "true");
  characterProfile.innerHTML = `
    <div class="profile-panel" role="document">
      <button class="profile-close" type="button" aria-label="Close character profile">Close</button>
      <div class="profile-layout">
        <div class="hologram-stage" aria-hidden="true">
          <div class="hologram-ring"></div>
          <div class="hologram-avatar">
            <span id="profile-initials"></span>
          </div>
          <div class="hologram-scan"></div>
          <div class="hologram-base"></div>
        </div>
        <div class="profile-copy">
          <p class="eyebrow" id="profile-type"></p>
          <h2 id="profile-name"></h2>
          <p id="profile-role"></p>
          <div class="character-meta" id="profile-tags"></div>
        </div>
      </div>
      <dl class="profile-details">
        <div>
          <dt>First major appearance</dt>
          <dd id="profile-first"></dd>
        </div>
        <div>
          <dt>Arc</dt>
          <dd id="profile-arc"></dd>
        </div>
        <div>
          <dt>Relationships</dt>
          <dd id="profile-relationships"></dd>
        </div>
        <div>
          <dt>Why they matter</dt>
          <dd id="profile-significance"></dd>
        </div>
      </dl>
    </div>
  `;

  document.body.append(characterProfile);
  characterProfile.querySelector(".profile-close").addEventListener("click", closeCharacterProfile);
  characterProfile.addEventListener("click", (event) => {
    if (event.target === characterProfile) {
      closeCharacterProfile();
    }
  });
}

function setText(selector, value) {
  const element = characterProfile.querySelector(selector);
  element.textContent = value;
}

function openCharacterProfile(characterIndex) {
  buildCharacterProfile();
  const character = characters[characterIndex];

  if (!character || !characterProfile) {
    return;
  }

  setText("#profile-initials", characterInitials(character.name));
  setText("#profile-type", character.tier === "featured" ? "Main character dossier" : "Archive character dossier");
  setText("#profile-name", character.name);
  setText("#profile-role", character.role);
  setText("#profile-first", character.first);
  setText("#profile-arc", character.arc);
  setText("#profile-relationships", character.relationships);
  setText("#profile-significance", character.significance);

  characterProfile.querySelector("#profile-tags").innerHTML = `
    <span class="pill">${escapeHtml(character.faction)}</span>
    <span class="pill">${escapeHtml(character.era)}</span>
    <span class="pill">${character.tier === "featured" ? "Main dossier" : "Archive dossier"}</span>
  `;

  characterProfile.classList.add("is-open");
  characterProfile.setAttribute("aria-hidden", "false");
  document.body.classList.add("profile-open");
  characterProfile.querySelector(".profile-close").focus();
}

function closeCharacterProfile() {
  if (!characterProfile) {
    return;
  }

  characterProfile.classList.remove("is-open");
  characterProfile.setAttribute("aria-hidden", "true");
  document.body.classList.remove("profile-open");
}

function gearMatches(item, query, type) {
  const text = Object.values(item).join(" ").toLowerCase();
  const typeMatch = type === "all" || item.type === type;
  return typeMatch && text.includes(query);
}

function renderGear() {
  if (!gearGrid || !gearCount || !gearSearchInput || !gearTypeFilter) {
    return;
  }

  const query = gearSearchInput.value.trim().toLowerCase();
  const type = gearTypeFilter.value;
  const filtered = gearItems.filter((item) => gearMatches(item, query, type));

  gearCount.textContent = `${filtered.length} of ${gearItems.length} ships, vehicles, sabers, and superweapon entries shown.`;
  gearGrid.innerHTML = filtered.map((item) => `
    <article class="gear-card" data-type="${escapeHtml(item.type)}">
      <div>
        <h3>${escapeHtml(item.name)}</h3>
        <div class="character-meta">
          <span class="pill">${escapeHtml(item.type)}</span>
          <span class="pill">${escapeHtml(item.era)}</span>
        </div>
      </div>
      <p><strong>${escapeHtml(item.affiliation)}</strong></p>
      <dl>
        <div>
          <dt>First major appearance</dt>
          <dd>${escapeHtml(item.first)}</dd>
        </div>
        <div>
          <dt>Details</dt>
          <dd>${escapeHtml(item.details)}</dd>
        </div>
      </dl>
    </article>
  `).join("");
}

function populateFilters() {
  if (factionFilter) {
    uniqueFactions().forEach((faction) => {
      const option = document.createElement("option");
      option.value = faction;
      option.textContent = faction;
      factionFilter.append(option);
    });
  }

  if (gearTypeFilter) {
    uniqueGearTypes().forEach((type) => {
      const option = document.createElement("option");
      option.value = type;
      option.textContent = type;
      gearTypeFilter.append(option);
    });
  }
}

populateFilters();
renderGear();
renderCharacters();
buildCharacterProfile();

if (grid) {
  grid.addEventListener("click", (event) => {
    const button = event.target.closest(".character-profile-button");

    if (!button) {
      return;
    }

    openCharacterProfile(Number(button.dataset.characterIndex));
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCharacterProfile();
  }
});

if (searchInput) {
  searchInput.addEventListener("input", renderCharacters);
}

if (factionFilter) {
  factionFilter.addEventListener("change", renderCharacters);
}

if (scopeFilter) {
  scopeFilter.addEventListener("change", renderCharacters);
}

if (gearSearchInput) {
  gearSearchInput.addEventListener("input", renderGear);
}

if (gearTypeFilter) {
  gearTypeFilter.addEventListener("change", renderGear);
}
