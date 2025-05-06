
        const participants = JSON.parse(localStorage.getItem('participants')) || [];
        const participantNameElement = document.getElementById('participantName');
        const questionElement = document.getElementById('question');
        const truthDareButtons = document.getElementById('truthDareButtons');

        const truths = [
            "¿Qué es lo más excitante que has experimentado en la intimidad?",
            "¿Cuál es tu fantasía sexual más secreta?",
            "¿Alguna vez has sentido atracción por alguien que considerarías inusual?",
            "¿Qué parte de tu cuerpo te gustaría que tu pareja explorara más?",
            "¿Qué te parece más sensual: los masajes con aceite o los masajes en seco?",
            "¿Cuál es tu posición sexual menos favorita y por qué?",
            "¿Te excita la idea de tener relaciones en un lugar público?",
            "¿Alguna vez has tenido sueños eróticos con alguien que no esperarías?",
            "¿Qué te parece más atractivo en una pareja: la confianza o la timidez en la intimidad?",
            "¿Qué piensas sobre los juegos de rol sexuales?",
            "¿Te gustaría probar el sexo tántrico?",
            "¿Cuál es tu experiencia sexual más memorable hasta ahora?",
            "¿Prefieres las caricias suaves o los arañazos apasionados?",
            "¿Qué tipo de música te gusta escuchar durante el sexo?",
            "¿Alguna vez has sentido atracción por alguien mucho mayor o menor que tú?",
            "¿Qué es lo más salvaje que has hecho en la cama?",
            "¿Te gustaría explorar nuevas actividades sexuales?",
            "¿Qué te parece más excitante: el deseo impulsivo o la seducción lenta?",
            "¿Cuál es tu juguete sexual favorito y por qué?",
            "¿Qué piensas sobre el sexting y su papel en la intimidad moderna?",
            "¿Te excita la idea de probar alimentos durante el juego previo?",
            "¿Cuál es tu opinión sobre el voyeurismo y el exhibicionismo?",
            "¿Alguna vez has tenido relaciones con alguien mucho más experimentado que tú?",
            "¿Qué parte de tu cuerpo te gustaría que tu pareja estimulara más?",
            "¿Te gusta experimentar con nuevas posiciones sexuales?",
            "¿Qué es lo más romántico que has hecho en la cama?",
            "¿Cuál es tu opinión sobre el intercambio de parejas?",
            "¿Qué te parece más emocionante: el sexo planificado o espontáneo?",
            "¿Alguna vez has sentido atracción por alguien que inicialmente no te interesaba?",
            "¿Cuál es tu fantasía sexual más recurrente cuando estás solo?",
            "¿Qué te parece más íntimo: el contacto visual intenso o los besos apasionados?",
            "¿Te excita la idea de probar el BDSM?",
            "¿Cuál es tu opinión sobre los juegos de dominación y sumisión?",
            "¿Alguna vez has tenido una experiencia sexual en un lugar peligroso?",
            "¿Qué te parece más sensual: el contacto físico o las palabras susurradas al oído?",
            "¿Te gusta ser sorprendido en la cama o prefieres tener el control?",
            "¿Qué es lo que más te atrae de la personalidad de tu pareja en la intimidad?",
            "¿Cuál es tu opinión sobre el uso de disfraces y accesorios en el dormitorio?",
            "¿Alguna vez has tenido relaciones durante una tormenta eléctrica?",
            "¿Te excita la idea de tener sexo en una piscina?",
            "¿Qué te parece más sensual: el tacto de la piel desnuda o la suavidad de la seda?",
            "¿Cuál es tu fantasía sexual más atrevida que aún no has cumplido?",
            "¿Te gustaría explorar nuevas formas de experimentar placer sexual?",
            "¿Cuál es tu opinión sobre el tantra y sus prácticas sexuales?",
            "¿Alguna vez has tenido sueños eróticos con una figura pública?",
            "¿Qué te parece más erótico: la anticipación antes del sexo o el clímax mismo?",
            "¿Te excita la idea de probar el sexo al aire libre durante la noche?",
            "¿Cuál es tu opinión sobre los juguetes sexuales en la relación de pareja?",
            "¿Qué te parece más romántico: una noche apasionada o una velada íntima?",
            "¿Alguna vez has sentido atracción por alguien del mismo sexo?"
        ];
        const dares = [
            "Haz un masaje sensual a la persona a tu derecha.",
            "Envía un mensaje de texto provocativo a alguien que te atraiga.",
            "Besa por 10 segundos apasionadamente a la persona a tu izquierda.",
            "Haz una striptease lento para uno de el grupo 'si eres mujer con un hombre o viseversa' .",
            "Baila de forma sensual con alguien del grupo 'si eres mujer con un hombre o viserversa'.",
            "Hazle un oral a alguien del grupo 'si eres mujer con un hombre o viserversa'.",
            "Hazle un chupon en el pecho a alguien del grupo 'si eres mujer con un hombre o viserversa'.",
            "Dale un mordisco juguetón a la persona de tu izquierda.",
            "Dile a alguien del grupo qué es lo que más te excita de su apariencia .",
            "Besa el cuello de alguien del grupo 'si eres mujer con un hombre o viserversa'.",
            "Haz una propuesta indecente a alguien del grupo y cumplela.",
            "Susurra algo sensual al oído de la persona que más te atraiga.",
            "Dile a alguien del grupo cuál es tu fantasía sexual más salvaje y interpretesela.",
            "Hazle un masaje con final feliz a la persona que menos conozcas .",
            "Dile a alguien del grupo qué parte de su cuerpo te gusta más.",
            "Mira fijamente a los ojos de alguien del grupo durante 1 minuto y el que pierda es la perra de el ganador.",
            "Besa a la persona que menos esperarías besar en este momento.",
            "Besa a alguien del grupo de forma seductora.",
            "Cuéntale a alguien del grupo cuál es tu posición sexual favorita y interpretesela.",
            "m a la persona más cercana a ti en este momento.",
            "Dale un mordisco suave a la oreja de alguien del grupo.",
            "Haz una pregunta erótica a la persona que menos te guste del grupo.",
            "Dile a alguien del grupo qué te gustaría hacerle en este momento y aslo.",
            "Hazle un cumplido sensual a alguien del grupo.",
            "desnudate con alguiende el grupo 'si eres mujer con un hombre o viserversa'.",
            "Dile a alguien del grupo qué es lo que más te excita de estar con él/ella.",
            "Haz una llamada de teléfono sensual a alguien .",
            "Besa el cuello de la persona más atractiva del grupo.",
            "Hazle una propuesta provocativa a alguien del grupo.",
            "Besa los labios de alguien del grupo de forma apasionada.",
            "Hazle un cumplido sexy a la persona más tímida del grupo.",
            "Susurra algo erótico al oído de alguien del grupo.",
            "Mira fijamente a los ojos de alguien del grupo y dile qué te gustaría hacer con él/ella y aslo.",
            "Pide a alguien del grupo que te haga una pregunta íntima y respóndela sin pensarlo.",
            "Pide a alguien del grupo que te haga una pregunta intima que solo aria contigo y respóndela con total sinceridad.",
            "Hazle una pregunta íntima a la persona más extrovertida del grupo.",
            "Baila en círculo con el grupo, pero de forma sensual quitandose prendas.",
            "Dile a alguien del grupo qué es lo que más te gustaría hacer juntos y aslo.",
            "Susurra algo atrevido al oído de alguien del grupo.",
            "Pide a alguien del grupo que te haga una pregunta y respóndela sin reservas.",
            "Besa a la persona más joven del grupo de forma juguetona.",
            "Hazle una pregunta provocativa a alguien del grupo.",
            "Dile a alguien del grupo qué es lo que más te excita de su personalidad.",
            "Besa el pene o una teta de alguien del grupo de forma cariñosa 'si eres mujer con un hombre o viserversa' .", 
            "Besa a la persona más mayor del grupo con pasion.",
            "Hazle una pregunta atrevida a la persona que menos conozcas del grupo.",
            "Hazle un cumplido sensual a la persona más extrovertida del grupo.",   
        ];
        

        document.getElementById('selectParticipantBtn').addEventListener('click', function() {
            if (participants.length > 0) {
                const randomIndex = Math.floor(Math.random() * participants.length);
                const selectedParticipant = participants[randomIndex];
                participantNameElement.textContent = `Participante: ${selectedParticipant.name}`;
                questionElement.textContent = '';
                truthDareButtons.style.display = 'block';
            } else {
                participantNameElement.textContent = 'No hay participantes';
                truthDareButtons.style.display = 'none';
            }
        });

        document.getElementById('truthBtn').addEventListener('click', function() {
            const randomTruth = truths[Math.floor(Math.random() * truths.length)];
            questionElement.textContent = `Verdad: ${randomTruth}`;
        });

        document.getElementById('dareBtn').addEventListener('click', function() {
            const randomDare = dares[Math.floor(Math.random() * dares.length)];
            questionElement.textContent = `Reto: ${randomDare}`;
        });
 