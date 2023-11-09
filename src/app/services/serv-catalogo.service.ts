import { Injectable } from '@angular/core';
import { Libro } from 'src/interface/libro';

@Injectable({
  providedIn: 'root'
})
export class ServCatalogoService {

  catalogo:Libro[]=[
    {
        "id": 1,
        "isbn": "8434469219",
        "titulo": "El señor de los anillos y la filosofía",
        "autores": "Gregory Bassham, Eric Bronson",
        "editorial": "Grupo Planeta (GBS)",
        "fecha": "2010-05-20",
        "descripcion": "¿Nos resultaría aburrida la vida eterna en caso de que pudiéramos alcanzarla? ¿Qué virtudes son necesarias para que el poder no corrompa a quien lo tiene? ¿Se revelará la naturaleza contra la tecnología? Si un ente cae en el bosque y nadie lo oye, ¿hace ruido? Gregory Bassham y Eric Bronson dan respuesta a éstas y otras cuestiones planteadas en El Señor de los Anillos, la epopeya de J. R. R. Tolkien que, desde su publicación, ha vendido más de cincuenta millones de ejemplares y cuya riqueza y complejidad ha tejido una red cada vez más amplia de seguidores. Si la intención de Tolkien era crear «una historia que mantendría la atención del lector [...] y que a veces quizá lo excitaría o lo conmovería profundamente», consiguió también trasladar a su obra algunas de sus propias inquietudes filosóficas: la lucha del bien contra el mal, la oposición entre destino y libre albedrío, la búsqueda de la felicidad o la vida después de la muerte. Esta colección de ensayos además de ofrecernos una comprensión más fiel de las cuestiones que inspiran y nutren El Señor de los Anillos, supone una amena introducción a la filosofía, la religión y la mitología y una excelente carta de presentación a la cosmovisión de pensadores como Platón, Aristóteles o Nietzsche. Porque, como dice el mago filósofo Gandalf: \"Si has estado estos días con las orejas tapadas y la mente dormida, ¡es hora de que despiertes!"
    },
    {
        "id": 2,
        "isbn": "6070712749",
        "titulo": "El Señor de Los Anillos 3.",
        "autores": "John Ronald Reuel Tolkien",
        "editorial": "Planeta Publishing",
        "fecha": "2012-11-13",
        "descripcion": "La última parte del viaje de Frodo y Sam Los ejércitos del Señor Oscuro van extendiendo cada vez más su maléfica sombra por la Tierra Media. Hombres, elfos y enanos unen sus fuerzas para presentar batalla a Sauron y sus huestes. Ajenos a estos preparativos, Frodo y Sam siguen adentrándose en el país de Mordor en su heroico viaje para destruir el Anillo de Poder en las Grietas del Destino."
    },
    {
        "id": 3,
        "isbn": "8445077910",
        "titulo": "El Señor de los Anillos no 01/03 La Comunidad del Anillo (edición revisada)",
        "autores": "J. R. R. Tolkien",
        "editorial": "Grupo Planeta Spain",
        "fecha": "2010-07-15",
        "descripcion": "Primera entrega de la trilogía. «Este libro es como un relámpago en un cielo claro. Decir que la novela heroica, espléndida, elocuente y desinhibida, ha retornado de pronto en una época de un antirromanticismo casi patológico, sería inadecuado. Para quienes vivimos en esa extraña época, el retorno —y el alivio que nos trae— es sin duda lo más importante. Pero para la historia misma de la novela —una historia que se remonta a la Odisea y a antes de la Odisea— no es un retorno, sino un paso adelante o una revolución: la conquista de un territorio nuevo.» —C.S. Lewis, Time & Tide, 1954 «La obra de Tolkien, difundida en millones de ejemplares, traducida a docenas de lenguas, inspiradora de slogans pintados en las paredes de Nueva York y de Buenos Aires... una coherente mitología de una autenticidad universal creada en pleno siglo veinte.» —George Steiner, Le Monde, 1973"
    },
    {
        "id": 4,
        "isbn": "8445073737",
        "titulo": "El Señor de Los Anillos, Ii",
        "autores": "J. R. R. Tolkien",
        "editorial": "Minotauro Ediciones Avd",
        "fecha": "2002",
        "descripcion": "La Compañía se ha disuelto y sus integrantes emprenden caminos separados. Frodo y Sam continúan solos su viaje a lo largo del río Anduin, perseguidos por la sombra misteriosa de un ser extraño que también ambiciona la posesión del Anillo. Mientras, hombres, elfos y enanos se preparan para la batalla final contra las fuerzas del Señor del Mal."
    },
    {
        "id": 5,
        "isbn": "8445077511",
        "titulo": "El Señor de los Anillos III. El Retorno del Rey",
        "autores": "J. R. R. Tolkien",
        "editorial": "Planeta Publishing",
        "fecha": "2011-04-05",
        "descripcion": "Los ejércitos del Señor Oscuro van extendiendo cada vez más su maléfica sombra por la Tierra Media. Hombres, elfos y enanos unen sus fuerzas para presentar batalla a Sauron y sus huestes. Ajenos a estos preparativos, Frodo y Sam siguen adentrándose en el país de Mordor en su heroico viaje para destruir el Anillo de Poder en las Grietas del Destino."
    },
    {
        "id": 6,
        "isbn": "8445073605",
        "titulo": "El Señor de Los Anillos",
        "autores": "Brian Sibley",
        "editorial": "No disponible",
        "fecha": "2001-09-02",
        "descripcion": "LA GUIA OFICIAL DE LA QUE SERA LA MCS IMPORTANTE TRILOGIA CINEMATOGRAFICA DE LA DECADA.El Senor de los anillos. Guia ilustrada de la pelicula es una guia profusamente ilustrada con escenas entre bastidores, fotografias en color del reparto, escenarios, monstruos y vestuario, y un panorama fascinante y entretenido de la concepcion, el diseno y la filmacion de la trilogia durante los ultimos cinco anos. Concebido como una celebracion de las peliculas, incluye fotografias a doble pagina, imagenes exclusivas en suntuoso detalle, e interesantes comentarios del director, Peter Jackson.\"El Senor de los Anillos es uno de los libros mas importantes y singulares jamas escrito. Todo lo que ofrezco es una interpretacion, pero esperemos que llevara al cine de fantasia a un nuevo nivel de aventura y credibilidad.\"Peter Jackson."
    },
    {
        "id": 7,
        "isbn": "8445073729",
        "titulo": "El Señor de Los Anillos, I",
        "autores": "J. R. R. Tolkien",
        "editorial": "No disponible",
        "fecha": "2002",
        "descripcion": "En la adormecida e idílica Comarca, un joven hobbit recibe un encargo: custodiar el Anillo Único y emprender el viaje para su destrucción en las Grietas del Destino. Acompañado por magos, hombres, elfos y enanos, atravesará la Tierra Media y se internará en las sombras de Mordor, perseguido siempre por las huestes de Sauron, el Señor Oscuro, dispuesto a recuperar su creación para establecer el dominio definitivo del Mal."
    },
    {
        "id": 8,
        "isbn": "1465479007",
        "titulo": "Ultimate Star Wars, New Edition",
        "autores": "Adam Bray, Cole Horton, Tricia Barr, Ryder Windham",
        "editorial": "National Geographic Books",
        "fecha": "2019-10-04",
        "descripcion": "Every significant Star Wars character, creature, location, battle, droid and vehicle: one ultimate encyclopedia. Packed full of information, stunning images, and now fully updated to include The Last Jedi, Solo: A Star Wars Story, Star Wars: Resistance, plus an exclusive look at The Rise of Skywalker. All the saga's iconic characters are here, from Darth Vader to Ponda Baba and Leia to Luminara Unduli. Amazing vehicles are explored, such as the Millennium Falcon and Ghost. Extraordinary technology is explained, including all your favourite lightsabers, and key events in the epic Star Wars story are richly unpacked, with behind-the-scenes insights. Ultimate Star Wars New Edition is the ideal go-to resource for fans who wish to brush up on their Star Wars knowledge, and for a new generation of fans eager to start their journey into a galaxy far, far away.... © & TM 2019 LUCASFILM LTD."
    },
    {
        "id": 9,
        "isbn": "1506715559",
        "titulo": "The Art of Star Wars Jedi: Fallen Order",
        "autores": "Lucasfilm Ltd., Respawn Entertainment",
        "editorial": "Dark Horse Comics",
        "fecha": "2019-11-19",
        "descripcion": "A full-color oversized hardcover volume that captures the development of the newest canonical and interactive addition to the Star Wars universe. A galaxy-spanning adventure awaits in Star Wars Jedi: Fallen Order, the new action-adventure videogame from Respawn Entertainment. Explore the artistic creation of Cal Kestis's quest to rebuild the Jedi Order as he learns the ways of the Force, travels to exotic worlds, and battles tyrannical foes. With detailed concept art of all-new characters, exciting weapons and equipment, and locales both familiar and new, this tome offers a behind-the-scenes look at the production of a hit game--all accompanied by intimate artists' commentary that reveals how this incredible universe is brought together. Dark Horse Books, Lucasfilm Limited, and Respawn Entertainment are honored to present The Art of Star Wars Jedi: Fallen Order, guiding readers on Cal's odyssey. This uniquely designed work is sure to thrill dedicated Jedi acolytes and gamers alike."
    },
    {
        "id": 10,
        "isbn": "0345498704",
        "titulo": "The Prequel Trilogy: Star Wars",
        "autores": "Terry Brooks, R.A. Salvatore, Matthew Stover",
        "editorial": "National Geographic Books",
        "fecha": "2007-05-01",
        "descripcion": "For the first time in one stunning volume, here is the complete, epic story arc: The Phantom Menace, Attack of the Clones, and Revenge of the Sith. Experience the sweeping tale of good and evil, of myth and magic, of innocence and power–and witness the tragic transformation of Anakin Skywalker from mere slave to one of the greatest, most powerful, and feared villains of the galaxy: Darth Vader. “The path has been placed before you, Anakin. The choice to take it must be yours alone.” On the barren desert world of Tatooine, young Anakin Skywalker toils by day and dreams by night . . . of traveling the stars to worlds he’s only heard of in stories. When Jedi Knight Qui-Gon Jinn and his apprentice, Obi-Wan Kenobi, cross paths with Anakin, it marks the beginning of the drama that will become legend. Courageous to the point of recklessness, Anakin comes of age in a time of great upheaval. The attempted assassination of Senator Padmé Amidala thrusts the Republic close to the edge of disaster–and brings Anakin and Padmé into a secret romance as intense as it is forbidden. As combat escalates across the galaxy, the stage is set for an explosive endgame. Tormented by unspeakable visions, Anakin edges closer to the brink of a decision with profound ramifications. It remains only for Darth Sidious to strike the final staggering blow against the Republic–and to ordain a fearsome new Sith Lord: Darth Vader. THE PHANTOM MENACE by Terry Brooks, based on the story and screenplay by George Lucas ATTACK OF THE CLONES by R. A. Salvatore, from a story by George Lucas and a screenplay by George Lucas and Jonathan Hales REVENGE OF THE SITH by Matthew Stover, based on the story and screenplay by George Lucas"
    },
    {
        "id": 11,
        "isbn": "0786471816",
        "titulo": "The Star Wars Heresies",
        "autores": "Paul F. McDonald",
        "editorial": "McFarland",
        "fecha": "2013-09-03",
        "descripcion": "Despite the insatiable public appetite for all things Star Wars, the more analytical side of the saga is all too often ignored. This book offers a new way of seeing George Lucas' space opera--particularly the prequel trilogy, a series never given a fair chance because of constant comparisons to the iconic originals. In the classic style of Joseph Campbell, the trilogy is viewed through the lens of myth and metaphor, revealing a body of work not only worthy of scholarly study but perhaps destined to find therein its home. A wide variety of philosophical and mythological themes are presented and expounded upon, drawing from a rich source of scholars, thinkers, writers, and poets from East and West alike. Heretical or not, the Star Wars prequels are a surprisingly rich source of insight into the saga--as well as the human drama--as a whole."
    },
    {
        "id": 12,
        "isbn": "0345493346",
        "titulo": "Jedi vs. Sith: Star Wars: The Essential Guide to the Force",
        "autores": "Ryder Windham",
        "editorial": "National Geographic Books",
        "fecha": "2007-11-27",
        "descripcion": "THE ULTIMATE GUIDE TO THE ABSOLUTE POWER AT THE HEART OF THE STAR WARS GALAXY The Force, in the immortal words of Obi-Wan Kenobi, “surrounds us, it penetrates us, it binds the galaxy together.” The fortunate few who are able to tap into this extraordinary power have studied and cultivated the full spectrum of its potential–either embracing its virtuous qualities or succumbing to its evil temptations. The Jedi seek to bring peace and enlightenment to the galaxy, while the Sith hunger only for conquest and control. This comprehensive one-of-a-kind overview chronicles the known history of the Force and its wielders down through the ages, from the founding tenets of Jedi and Sith teachings to the landmark events and legendary figures who have shaped the struggle between the light and dark sides. In first-hand accounts by Obi-Wan Kenobi, Yoda, Luke Skywalker, Leia Organa Solo, Darth Bane, Darth Vader, Count Dooku, Emperor Palpatine, and a host of other Jedi Masters, Sith Lords, scholars, and sages, Star Wars: Jedi vs. Sith: The Essential Guide to the Force spans the breadth of available knowledge, including • the first recorded discovery of the Force • significant battles affected by the Force throughout galactic history • the purpose, construction, and importance of Holocrons • the evolution of the Jedi and Sith orders • Force-sensitive abilities–including battle meditation, telekinesis, and “mind tricks” • noteworthy Jedi and Sith lightsabers, and the seven forms of lightsaber combat • a vivid portrait of the Chosen One, Anakin Skywalker PLUS–More than one hundred brand new full-color illustrations! No Star Wars library is complete without this definitive guide to understanding the Force. Remember: the Force will be with you . . . always!"
    },
    {
        "id": 13,
        "isbn": "055339147X",
        "titulo": "A New Dawn: Star Wars",
        "autores": "John Jackson Miller",
        "editorial": "Del Rey",
        "fecha": "2015-03-31",
        "descripcion": "A long time ago in a galaxy far, far away. . . . “The war is over. The Separatists have been defeated, and the Jedi rebellion has been foiled. We stand on the threshold of a new beginning.”—Emperor Palpatine For a thousand generations, the Jedi Knights brought peace and order to the Galactic Republic, aided by their connection to the mystical energy field known as the Force. But they were betrayed—and the entire galaxy has paid the price. It is the Age of the Empire. Now Emperor Palpatine, once Chancellor of the Republic and secretly a Sith follower of the dark side of the Force, has brought his own peace and order to the galaxy. Peace through brutal repression, and order through increasing control of his subjects’ lives. But even as the Emperor tightens his iron grip, others have begun to question his means and motives. And still others, whose lives were destroyed by Palpatine’s machinations, lay scattered about the galaxy like unexploded bombs, waiting to go off. . . . The first Star Wars novel created in collaboration with the Lucasfilm Story Group, Star Wars: A New Dawn is set during the legendary “Dark Times” between Episodes III and IV and tells the story of how two of the lead characters from the animated series Star Wars Rebels first came to cross paths. Featuring a foreword by Dave Filoni. Praise for A New Dawn “A New Dawn is a fine start to the new Expanded Universe. [John Jackson] Miller steps confidently into the unexplored territory and owns it; he’s crafted a story with pacing and dialogue that feels like classic Star Wars.”—Nerdist “An entertaining adventure . . . with a cast of heroes that mixes laughter with intriguing depths of character. . . . John Jackson Miller packs in plenty of action and surprises.”—Roqoo Depot “A confidently told story that gives fans a lot of reason to be hopeful about what’s to come as we move into this new phase of Star Wars . . . The book certainly got me even more excited for Rebels and to see more of Kanan and Hera’s adventures. We’re also introduced to other characters I would love to see again at some point, whether on Rebels, in another book or, who knows, in live-action at some point.”—IGN “A New Dawn delivers a classic Star Wars experience that fans of all ages will be able to enjoy. It is extremely well-written, with an incredibly diverse cast too. Miller’s prose can easily suck readers in, and leave them speechless when 100 pages have flown by in the blink of an eye.”—Far Far Away Radio “A New Dawn brings us into this new dawn of storytelling with energy, excitement, and characters that have become instantly ensconced into the Star Wars vernacular, and the results will satisfy Star Wars fans of many different palates.”—Coffee with Kenobi “A New Dawn is a well-written novel full of intrigue and twists and turns that does an excellent job of letting Star Wars fans get to know Kanan and Hera.”—Tosche Station “A New Dawn finds an era never before written about in the Star Wars universe—the years prior to the original movie, Episode IV—in robust good health. The narrative takes place on two worlds and a handful of ships in between them, but as with the best of all Star Wars moments, hints at hidden depths beyond.”—Mashable"
    },
    {
        "id": 14,
        "isbn": "0768374634",
        "titulo": "STARWARS DATEBOOK 2006(다이어리)",
        "autores": "편집부",
        "editorial": "No disponible",
        "fecha": "2005-01-01",
        "descripcion": "No disponible"
    },
    {
        "id": 15,
        "isbn": "197587658X",
        "titulo": "Starwars",
        "autores": "Jc Coloring",
        "editorial": "Createspace Independent Publishing Platform",
        "fecha": "2017-08-29",
        "descripcion": "40 Pages of Stunning pattern to Color! -This coloring book has over 40 starwars patterns and provides hours of stress relief through creative expression. -Simply sit back, relax, and choose the design that connects with you -Designs range in complexity and detail from beginner."
    },
    {
        "id": 16,
        "isbn": "172864934X",
        "titulo": "How to Draw Chibi Starwars Step-By-Step: Easy Drawing Lessons for Kids to Learn to Draw Characters from Starwars in a Chibi Style",
        "autores": "Roy Lichter",
        "editorial": "Independently Published",
        "fecha": "2018-10-10",
        "descripcion": "So, why learn to draw? Drawing is arguably as important and essential a skill as learning literacy and mathematics. When a child learns to draw, they are encouraged to do two things. The first is to look at the world around them"
    },
    {
        "id": 17,
        "isbn": "1985827468",
        "titulo": "Unicorn Sketchbook",
        "autores": "P2g Publishing",
        "editorial": "Createspace Independent Publishing Platform",
        "fecha": "2018-02-28",
        "descripcion": "PERFECT GIFT! 100 pages to draw your own pictures, 8.5\" X 11\", Personalized sketchbook. Magical Unicorn Cover Cute Unicorn & Stars Over Rainbows Hours of fun."
    },
    {
        "id": 18,
        "isbn": "8493318639",
        "titulo": "El universo de Star Trek",
        "autores": "Adolfo Pérez Agustí",
        "editorial": "Lulu.com",
        "fecha": "2003",
        "descripcion": "No disponible"
    },
    {
        "id": 19,
        "isbn": "0671000225",
        "titulo": "The Star Trek Cookbook",
        "autores": "Ethan Phillips, William J. Birnes",
        "editorial": "Simon and Schuster",
        "fecha": "1999",
        "descripcion": "Reveals the secret preparation techniques behind all the exotic drinks and dishes from the television show."
    },
    {
        "id": 20,
        "isbn": "3641117410",
        "titulo": "Star Trek - Classic: Das große Raumschiffrennen",
        "autores": "Diane Carey",
        "editorial": "Heyne Verlag",
        "fecha": "2014-02-25",
        "descripcion": "Kann Kirk das Raumschiffrennen gewinnen? Durch Zufall entdeckt die USS Hood in einem abgelegenen Winkel der Galaxis das Volk der Rey, die sich umgehend um Aufnahme in die Föderation bewerben. Um das Aufnahmeverfahren zu beschleunigen, veranstalten die Rey ein Raumschiffrennen, an dem auch die Enterprise teilnimmt. Captain James Kirk ist wild entschlossen, als erster über die Ziellinie zu fliegen. Doch dann taucht plötzlich ein romulanisches Kriegsschiff auf. Dessen Kommandant Valdus behauptet zwar, rein aus sportlichem Ehrgeiz an dem Rennen teilnehmen zu wollen, aber er ist den Rey schon einmal begegnet - und glaubt, noch eine Rechnung mit ihnen offen zu haben."
    },
    {
        "id": 21,
        "isbn": "3738973885",
        "titulo": "17 Silver Star Western März 2023",
        "autores": "Alfred Bekker, Pete Hackett, Thomas West, Ernest Haycox, Zane Grey, B. M. Bower",
        "editorial": "Uksak E-Books",
        "fecha": "2023-03-26",
        "descripcion": "Von Alfred Bekker, Pete Hackett, Zane Grey, B.M.Bower, Ernest Haycox, Thomas West Alfred Bekker: Ein Strick für Lee Callahan Thomas West: Keine Gefangenen Pete Hackett: Jeder Mann hat seinen Preis Pete Hackett: Vom Fegefeuer in die Hölle Pete Hackett: Zwischen den Fronten Pete Hackett: Im Namen des Gesetzes Pete Hackett:Sattelwölfe Pete Hackett:Sechsunddreißig Stunden Galgenfrist Pete Hackett: Jäger und Gejagter Pete Hackett:Töten oder getötet werden Pete Hackett:Tötet McQuade Pete Hackett:Dämon der Vergangenheit Pete Hackett:Yumas letzte Jagd Pete Hackett:Auge um Auge... Zane Grey: Entscheidung am Sunset Pass B.M.Bower: Der letzte Kampf der Flying U-Ranch Ernest Haycox: Lee Bowie kommt nach Abilene"
    },
    {
        "id": 22,
        "isbn": "8498382661",
        "titulo": "Harry Potter and the philosopher's stone",
        "autores": "J. K. Rowling",
        "editorial": "No disponible",
        "fecha": "2010",
        "descripcion": "Harry Potter se ha quedado huérfano y vive en casa de sus abominables tíos y del insoportable primo Dudley. Harry se siente muy triste y solo, hasta que un buen día recibe una carta que cambiará su vida para siempre. En ella le comunican que ha sido aceptado como alumno en el colegio interno Hogwarts de magia y hechicería. A partir de ese momento, la suerte de Harry da un vuelco espectacular. En esa escuela tan especial aprenderá encantamientos, trucos fabulosos y tácticas de defensa contra las malas artes. Se convertirá en el campeón escolar de quidditch, especie de fútbol aéreo que se juega montado sobre escobas, y se hará un puñado de buenos amigos... aunque también algunos temibles enemigos. Pero sobre todo, conocerá los secretos que le permitirán cumplir con su destino. Pues, aunque no lo parezca a primera vista, Harry no es un chico común y corriente. ¡Es un verdadero mago! (Source : 4e de couverture)"
    },
    {
        "id": 23,
        "isbn": "8478887423",
        "titulo": "Harry Potter y la Orden del Fénix",
        "autores": "J. K. Rowling, Gemma Rovira Ortega",
        "editorial": "Salamandra Publicacions Y Edicions",
        "fecha": "2004-01",
        "descripcion": "Las tediosas vacaciones de verano en casa de sus tíos todavía no han acabado y Harry se encuentra más inquieto que nunca. Apenas ha tenido noticias de Ron y Hermione, y presiente que algo extraño está sucediendo en Hogwarts. En efecto, cuando por fin comienza otro curso en el famoso colegio de magia y hechicería, sus temores se vuelven realidad. El Ministerio de Magia niega que Voldemort haya regresado y ha iniciado una campaña de desprestigio contra Harry y Dumbledore, para lo cual ha asignado a la horrible profesora Dolores Umbridge la tarea de vigilar todos sus movimientos. Así pues, además de sentirse solo e incomprendido, Harry sospecha que Voldemort puede adivinar sus pensamientos, e intuye que el temible mago trata de apoderarse de un objeto secreto que le permitiría recuperar su poder destructivo."
    },
    {
        "id": 24,
        "isbn": "8478884955",
        "titulo": "Harry Potter y la cámara secreta",
        "autores": "J. K. Rowling",
        "editorial": "Lectorum Publications",
        "fecha": "1999",
        "descripcion": "Tras derrotar una vez más a lord Voldemort, su siniestro enemigo en Harry Potter y la piedra filosofal, Harry espera impaciente en casa de sus insoportables tíos el inicio del segundo curso del Colegio Hogwarts de Magia y Hechicería. Sin embargo, la espera dura poco, pues un elfo aparece en su habitación y le advierte que una amenaza mortal se cierne sobre la escuela. Así pues, Harry no se lo piensa dos veces y, acompañado de Ron, su mejor amigo, se dirige a Hogwarts en un coche volador. Pero ¿puede un aprendiz de mago defender la escuela de los malvados que pretenden destruirla? Sin saber que alguien ha abierto la Cámara de los Secretos, dejando escapar una serie de monstruos peligrosos, Harry y sus amigos Ron y Hermione tendrán que enfrentarse con arañas gigantes, serpientes encantadas, fantasmas enfurecidos y, sobre todo, con la mismísima reencarnación de su más temible adversario."
    },
    {
        "id": 25,
        "isbn": "8478886451",
        "titulo": "Harry Potter y el cáliz de fuego",
        "autores": "J. K. Rowling",
        "editorial": "Emece",
        "fecha": "2001",
        "descripcion": "Tras otro abominable verano con los Dursley, Harry se dispone a iniciar el cuarto curso en Hogwarts, la famosa escuela de magia y hechicería. A sus catorce años, a Harry le gustaría ser un joven mago como los demás y dedicarse a aprender nuevos sortilegios, encontrarse con sus amigos Ron y Hermione y asistir con ellos a los Mundiales de quidditch. Sin embargo, al llegar al colegio le espera una gran sorpresa que lo obligará a enfrentarse a los desafíos más temibles de toda su vida. Si logra superarlos, habrá demostrado que ya no es un niño y que está preparado para vivir las nuevas y emocionantes experiencias que el futuro le depara."
    },
    {
        "id": 26,
        "isbn": "8478889906",
        "titulo": "Harry Potter y el misterio del príncipe",
        "autores": "J. K. Rowling",
        "editorial": "Lectorum Publications",
        "fecha": "2006",
        "descripcion": "Con dieciséis años cumplidos, Harry inicia el sexto curso en Hogwarts en medio de terribles acontecimientos que asolan Inglaterra. Elegido capitán del equipo de Quidditch, los entrenamientos, los exámenes y las chicas ocupan todo su tiempo, pero la tranquilidad dura poco. A pesar de los férreos controles de seguridad que protegen la escuela, dos alumnos son brutalmente atacados. Dumbledore sabe que se acerca el momento, anunciado por la Profecía, en que Harry y Voldemort se enfrentarán a muerte: «El único con poder para vencer al Señor Tenebroso se acerca... Uno de los dos debe morir a manos del otro, pues ninguno de los dos podrá vivir mientras siga el otro con vida.». El anciano director solicitará la ayuda de Harry y juntos emprenderán peligrosos viajes para intentar debilitar al enemigo, para lo cual el joven mago contará con la ayuda de un viejo libro de pociones perteneciente a un misterioso príncipe, alguien que se hace llamar Príncipe Mestizo."
    },
    {
        "id": 27,
        "isbn": "178110655X",
        "titulo": "Harry Potter: La Colección Completa (1-7)",
        "autores": "J.K. Rowling",
        "editorial": "Pottermore Publishing",
        "fecha": "2016-01-28",
        "descripcion": "Abandonado de bebé en un portal, Harry Potter poco se imagina que él es \"el niño que vivió\", o que es famoso en todo el mundo mágico. Años más tarde se queda asombrado al recibir una carta de admisión al Colegio Hogwarts de Magia y Hechicería, y pronto se adentra en la mayor aventura de magia imaginable. Únete a Harry y a sus siempre leales amigos Hermione y Ron en esta historia sobre el poder de la verdad, del amor y de la esperanza. Convertidas ya en clásicos de nuestro tiempo, las aventuras de Harry Potter son siempre un refugio de familiaridad y entretenimiento. Con su mensaje de esperanza, unión y sobre el poder inextinguible de la verdad y el amor, la historia del niño que vivió sigue deleitando a nuevas generaciones de lectores."
    },
    {
        "id": 28,
        "isbn": "8418797037",
        "titulo": "Harry Potter y las reliquias de la muerte (20 Aniv. Slytherin) / Harry Potter and Deathly Hallow (Slytherin)",
        "autores": "J.K. Rowling",
        "editorial": "National Geographic Books",
        "fecha": "2023-03-21",
        "descripcion": "Siempre tendrás una casa en Hogwarts. Edición del vigésimo aniversario de Harry Potter y las reliquias de la muerte. «La clásica saga de J. K. Rowling te llevará de vuelta al Colegio Hogwarts de Magia y Hechicería.» Con motivo de la celebración del veinte aniversario de la primera publicación de Harry Potter, se publican estas preciosas ediciones que rinden homenaje al carácter noble de las cuatro casas de Hogwarts. Con ilustraciones nuevas en el interior y un diseño único en las cubiertas, obra de Levi Pinfold, ganador de la Medalla Kate Greenaway, cada uno de los libros contiene material adicional exclusivo sobre cada casa. Una edición única que no puedes perderte si alguna vez te has imaginado sentado bajo el Sombrero Seleccionador en el Gran Comedor de Hogwarts. ENGLISH DESCRIPTION Celebrate Harry Potter’s 20th anniversary with this special edition of Harry Potter and the Deathly Hallows. WEAR YOUR HOGWARTS HOUSE COLORS WITH PRIDE! It all comes down to this – a final faceoff between good and evil. You plan to pull out all the stops, but every time you solve one mystery, three more evolve. Do you stay the course you started, despite your lack of progress? Do you detour and follow a new lead that may not help? Do you listen to your instincts, or your friends? Lord Voldemort is preparing for battle and so must Harry. With Ron and Hermione at his side, he’s trying to hunt down Voldemort’s Horcruxes, escape danger at every turn, and find a way to defeat evil once and for all. How does it all end? Find out in Harry Potter and the Deathly Hallows."
    },
    {
        "id": 29,
        "isbn": "8498388910",
        "titulo": "Harry Potter y la piedra filosofal (20 Aniv. Ravenclaw) / Harry Potter and the S orcerer's Stone (Ravenclaw)",
        "autores": "J.K. Rowling",
        "editorial": "National Geographic Books",
        "fecha": "2018-12-01",
        "descripcion": "1998-2018: VEINTE AÑOS DE MAGIA Celebra el 20º aniversario de Harry Potter con la edición azul de Ravenclaw de Harry Potter y la piedra filosofal Harry Potter se ha quedado huérfano y vive en casa de sus abominables tíos y del insoportable primo Dudley. Harry se siente muy triste y solo, hasta que un buen día recibe una carta que cambiará su vida para siempre. En ella le comunican que ha sido aceptado como alumno en el colegio interno Hogwarts de magia y hechicería. A partir de ese momento, la suerte de Harry da un vuelco espectacular. En esa escuela tan especial aprenderá encantamientos, trucos fabulosos y tácticas de defensa contra las malas artes. Se convertirá en el campeón escolar de quidditch, especie de fútbol aéreo que se juega montado sobre escobas, y se hará un puñado de buenos amigos... aunque también algunos temibles enemigos. Pero sobre todo, conocerá los secretos que le permitirán cumplir con su destino. Pues, aunque no lo parezca a primera vista, Harry no es un chico común y corriente. ¡Es un verdadero mago! ENGLISH DESCRIPTION Exclusive Ravenclaw house edition to celebrate the 20th Anniversary of the first publication of Harry Potter and the Sorcerer's Stone – a highly collectable must-have for all Harry Potter fans! Harry Potter is an orphan and lives a miserable life in the home of his abominable aunt and uncle and his unbearable cousin Dudley. Harry feels sad and lonely, until one day he receives a letter that will change his life forever. In it he finds out that he has been accepted as a student at the boarding school Hogwarts School of Witchcraft and Wizardry. From then on, Harry's luck takes a dramatic turn. In that special school he will learn spells, fabulous tricks, and defense tactics against dark forces. He will become the school champion at Quidditch, a kind of aerial soccer played while riding on brooms, and he will make a handful of good friends ... but also some fearsome enemies. But, above all, he will learn the secrets that will allow him to fulfill his destiny. Because, although it may not seem at first glance, Harry is not an ordinary boy. He is a true wizard!"
    },
    {
        "id": 30,
        "isbn": "8496650081",
        "titulo": "Juego de Tronos",
        "autores": "Cyndi De la Hoz",
        "editorial": "Urano",
        "fecha": "2015-03",
        "descripcion": "Si algo tiene de particular la exitosa serie de libros y televisión Juego de Tronos, es que a lo largo de sus tomos y capítulos, muchos de los personajes principales mueren. Este es un libro que busca mantener en el recuerdo a todos los personajes que han pasado por la serie de forma tal que todos sus seguidores puedan recordarlos permanentemente. Bellamente ilustrado trae fotos y un breve texto por cada personaje desaparecido. Un libro imprescindible para amantes de la serie"
    },
    {
        "id": 31,
        "isbn": "1644736136",
        "titulo": "Juego de tronos / A Game of Thrones",
        "autores": "George R. R. Martin",
        "editorial": "National Geographic Books",
        "fecha": "2022-06-21",
        "descripcion": "Con Juego de Tronos George R. R. Martin ha creado una obra maestra, ofreciendo todos los mejores aspectos del género. Misterio, intriga, romance y aventura llenan las páginas de este primer volumen de la monumental saga Canción de hielo y fuego, transportando al lector a un mundo como ningún otro. En el legendario mundo de los Siete Reinos, donde el verano puede durar décadas y el invierno toda una vida, y donde rastros de una magia primitiva surgen en los rincones más sombríos, la tierra del norte, Invernalia, está protegida por un colosal muro de hielo que detiene a fuerzas oscuras y sobrenaturales. En este majestuoso escenario, lord Stark y su familia se encuentran en el centro de un conflicto que desatará todas las pasiones: la traición y la lealtad, la compasión y la sed de venganza, el amor y el poder, la lujuria y el incesto, todo ello para ganar la más mortal de las batallas: el juego de tronos. Ya considerado un clásico moderno, la impresionante serie de Martin perdurará como uno de los grandes logros de la imaginación y de la literatura fantástica. ENGLISH DESCRIPTION THE BOOK BEHIND THE FIRST SEASON OF THE ACCLAIMED HBO SERIES GAME OF THRONES #1 NEW YORK TIMES BESTSELLER A SONG OF ICE AND FIRE SERIES: BOOK 1 Winter is coming. Such is the stern motto of House Stark, the northernmost of the fiefdoms that owe allegiance to King Robert Baratheon in far-off King’s Landing. There Eddard Stark of Winterfell rules in Robert’s name. There his family dwells in peace and comfort: his proud wife, Catelyn; his sons Robb, Brandon, and Rickon; his daughters Sansa and Arya; and his bastard son, Jon Snow. Far to the north, behind the towering Wall, lie savage Wildings and worse—unnatural things relegated to myth during the centuries-long summer, but proving all too real and all too deadly in the turning of the season. Yet a more immediate threat lurks to the south, where Jon Arryn, the Hand of the King, has died under mysterious circumstances. Now Robert is riding north to Winterfell, bringing his queen, the lovely but cold Cersei, his son, the cruel, vainglorious Prince Joffrey, and the queen’s brothers Jaime and Tyrion of the powerful and wealthy House Lannister—the first a swordsman without equal, the second a dwarf whose stunted stature belies a brilliant mind. All are heading for Winterfell and a fateful encounter that will change the course of kingdoms. Meanwhile, across the Narrow Sea, Prince Viserys, heir of the fallen House Targaryen, which once ruled all of Westeros, schemes to reclaim the throne with an army of barbarian Dothraki—whose loyalty he will purchase in the only coin left to him: his beautiful yet innocent sister, Daenerys."
    },
    {
        "id": 32,
        "isbn": "6073123663",
        "titulo": "Juego de tronos (Canción de hielo y fuego 1)",
        "autores": "George R.R. Martin",
        "editorial": "PLAZA JANÉS",
        "fecha": "2014-04-04",
        "descripcion": "En el legendario mundo de los Siete Reinos, lord Stark y su familia se encuentran en el centro de un conflicto que desatará todas las pasiones y la más mortal de las batallas... Juego de tronos es el primer volumen de Canción de hielo y fuego, la monumental saga de fantasía épica del escritor George R. R. Martin que ha vendido más de 20 millones de ejemplares en todo el mundo. De la saga que inspiró la filmación de la aclamada serie televisiva de HBO: Game of Thrones. En el legendario mundo de los Siete Reinos, donde el verano puede durar décadas y el invierno toda una vida, y donde rastros de una magia inmemorial surgen en los rincones más sombríos, la tierra del norte, Invernalia, está resguardada por un colosal muro de hielo que detiene a fuerzas oscuras y sobrenaturales. En este majestuoso escenario, lord Stark y su familia se encuentran en el centro de un conflicto que desatará todas las pasiones: la traición y la lealtad, la compasión y la sed de venganza, el amor y el poder, la lujuria y el incesto, todo ello para ganar la más mortal de las batallas: el trono de hierro, una poderosa trampa que atrapará a los personajes... y al lector."
    },
    {
        "id": 33,
        "isbn": "8417888217",
        "titulo": "Juego de tronos. Realidades, ficciones, turismos",
        "autores": "Pere Parramon Rubio, Francesc Xavier Medina Luque",
        "editorial": "Ed. Universidad de Cantabria",
        "fecha": "2021-11-19",
        "descripcion": "La influencia de los rodajes cinematográficos o televisivos en el interés turístico de determinados destinos ha ido tomando fuerza en los últimos años. En este libro analizamos el caso del rodaje de una superproducción internacional como es Juego de tronos en localizaciones de Irlanda del Norte o Girona, entre otras, examinando su repercusión en clave turística y los modos en que se entrelazan los atractivos preexistentes con la ficción creada por la productora HBO a partir de los libros de George R. R. Martin. Desde la especificidad del uso turístico de una de las series más exitosas de los últimos años podemos extrapolar diferentes reflexiones relacionadas con fenómenos como la construcción de cánones culturales y de imaginarios, o la noción de autoría en una contemporaneidad en la cual las expectativas del público ganan terreno."
    },
    {
        "id": 34,
        "isbn": "8415921853",
        "titulo": "Juego de tronos no 02/04 (Nueva edición)",
        "autores": "George R. R. Martin",
        "editorial": "Grupo Planeta Spain",
        "fecha": "2014-04-15",
        "descripcion": "En esta segunda parte, el argumento se intensifica y se comienza a desvelar las personalidades de los protagonistas principales y sus ansias de poder sobre los Siete Reinos. En el Mar Angosto, Daenerys, sufre los delirios de grandeza de su hermano. George R. R. Martin se une al aclamado novelista Daniel Abraham y al dibujante Tommy Patterson para insuflar nueva vida a la obra maestra de la fantasía heroica Canción de hielo y fuego como nunca se había visto antes: en una novela gráfica a todo color, dando una visión única sobre el mundo ideado por Martin. Editorial original: Dynamite."
    },
    {
        "id": 35,
        "isbn": "8430979107",
        "titulo": "De Poniente a Roma",
        "autores": "Aurora López Güeto",
        "editorial": "Tecnos",
        "fecha": "2020-09-17",
        "descripcion": "De Roma a Poniente ofrece al lector una amplia muestra de parecidos razonables entre la sociedad retratada en la exitosa serie Juego de Tronos, inspirada en las novelas de George R. R. Martin, y la vida en la Roma clásica. La premisa es, a primera vista, sorprendente: el Derecho de los Siete Reinos es Derecho romano, pero se justifica al abordarse el tratamiento en la saga de cuestiones como el status de libertad frente a la condición de esclavitud, la herencia, las relaciones de parentesco, la represión del adulterio y del incesto o el castigo a los parricidas. Y, muy en especial, el papel reservado a las mujeres, con sus avances y retrocesos. De manera sutil, fluyen entre las tramas políticas y personales de Westeros (y Essos) las normas del sistema jurídico más rico y complejo de la Antigüedad, dotado de una perfección técnica que no deja de admirar a quienes se acercan, en nuestros días, a estudiarlo. Pero, por encima de todo, esta obra es un homenaje de la autora a Juego de Tronos, la serie total. Sus fieles seguidores podrán revivir las escenas más emocionantes a través de las semblanzas de sus personajes protagonistas y de sus imprescindibles secundarios, así como disfrutar de muchos de sus agudos diálogos. Un tributo muy personal, una visión diferente y arriesgada desde la órbita académica, pero al alcance de cualquier amante de la cultura clásica y de la propia serie. No en vano, hay tantos Juegos de Tronos como espectadores."
    }
]
  constructor() { }

  getAll():Libro[]{
    return this.catalogo;
  } 

  get(id: number):Libro{
    return this.catalogo.find((c) => c.id === id)!;
    
    }



}
