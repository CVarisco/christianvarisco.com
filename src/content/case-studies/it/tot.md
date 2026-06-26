---
---

Tot è la fintech 100% italiana che semplifica la gestione finanziaria e amministrativa delle imprese. Conto aziendale con IBAN italiano, carte business, fatturazione elettronica e gestione delle spese del team, tutto in un unico ambiente. Oltre 7.500 imprese la usano ogni giorno.

**Il loro target?** Imprenditori, PMI e professionisti che vogliono gestire la propria azienda senza perdere tempo tra banca, commercialista e burocrazia.

## TL;DR - Key Results

- **App mobile nativa live su iOS e Android in 6 mesi**, partendo da zero
- **Oltre il 50% dei clienti Tot** gestisce la propria azienda dall'app
- **Layer di comunicazione web-mobile** costruito su misura: il web esistente diventa il cuore di un'app nativa distribuibile sugli store
- **Riutilizzo massimo della piattaforma web**, senza riscrivere tutto da capo
- **Sviluppo continuo**: nuove funzionalità rilasciate ogni mese, ben oltre la prima release pre-AI

## Quando la sfida è tecnologica, non di business

Gennaio 2025. Tot mi affida un compito tanto chiaro nell'obiettivo quanto complesso nell'esecuzione: **costruire l'applicazione mobile**.

Qui la storia parte diversa dal solito. Tot non è una startup con tre founder e un prototipo no-code. È una realtà strutturata, con un team di prodotto e tech solido, migliaia di clienti attivi, e una piattaforma web matura che già funzionava bene.

E conoscevo bene il terreno. Non solo perché sono cliente di Tot, ma perché le persone che ci lavorano dentro sono state miei colleghi in esperienze passate. Quando entri in un progetto con quel livello di fiducia reciproca già costruito, parti con un vantaggio enorme.

*Ma la cosa interessante è stata capire subito la natura della sfida.*

Non era una sfida di business. Il prodotto era validato, il mercato c'era, la direzione era chiara. Era una **sfida puramente tecnologica**.

L'obiettivo: riutilizzare il più possibile la piattaforma web esistente, integrandola in un'applicazione nativa che potesse essere distribuita su App Store e Google Play, e che diventasse il companion perfetto per gestire la propria azienda dal telefono.

Sembra semplice detto così. Non lo è per niente.

![Christian con l'app Tot e la piattaforma web di Tot sullo sfondo](/images/case-studies/tot-app.jpg)

## Il compromesso intelligente: nativo senza riscrivere tutto

La tentazione, in questi casi, è una sola: riscrivere tutto da capo in nativo.

Costruisci un'app mobile completamente separata, repliki ogni funzionalità, e ottieni un'esperienza nativa perfetta. Bello sulla carta. Devastante nella pratica.

Significherebbe duplicare anni di sviluppo web, mantenere due codebase in parallelo per sempre, e rallentare il rilascio di ogni nuova funzionalità. Per una realtà che aggiunge valore ogni mese, sarebbe stato un suicidio tecnico.

Così abbiamo scelto la strada più intelligente, anche se più complessa da progettare bene: **costruire un'app React Native che usa la WebView come punto di atterraggio, ma che attinge a tutte le funzionalità native direttamente dal dispositivo.**

Il principio è questo:

- **La WebView è il punto di atterraggio**, non un guscio vuoto. La piattaforma web matura di Tot viene riutilizzata dove ha senso riutilizzarla, evitando di riscrivere logica che già funziona.
- **Le funzionalità native arrivano dal dispositivo.** Tutto ciò che un browser non può fare, e che serve davvero in un'app per gestire un'azienda, passa per i layer nativi e i plugin custom che fanno da ponte con la WebView.
- **Un layer di comunicazione su misura** tiene insieme i due mondi, gestendo il dialogo tra web e nativo in modo affidabile.

Il risultato è un'app che vive sugli store come qualsiasi altra app nativa, ma che non costringe Tot a mantenere due prodotti separati. Il web resta il cuore, il nativo aggiunge tutto quello che il web da solo non può dare.

## La challenge costante: far parlare due mondi diversi

Se mi chiedi qual è stata la difficoltà più grande, non ti racconto un singolo momento drammatico. Ti racconto una **costante**.

La complessità vera di questo progetto non è un bug isolato o una notte passata a smanettare. È trovare, ogni volta, **la connessione giusta tra web e mobile.**

Quando costruisci un layer di comunicazione tra due mondi che ragionano in modo diverso, la domanda ricorrente è sempre la stessa: di chi è la responsabilità di cosa? Dove finisce il web e dove inizia il nativo? Come fanno i layer nativi delle diverse librerie custom a interagire con il web senza pestarsi i piedi?

Ogni nuova funzionalità riapre questa domanda. Una notifica push, l'accesso a una funzione del dispositivo, un'integrazione che richiede di scendere sotto il livello del browser: ognuna richiede di decidere con precisione chi gestisce cosa, e di far dialogare codice nativo e codice web senza che si rompa nulla nel mezzo.

*Questo è il tipo di sfida che non si risolve una volta sola.* Si affronta ad ogni iterazione, con disciplina e con una conoscenza profonda di entrambi i lati del confine. È quello che rende un progetto del genere tecnicamente affascinante e, allo stesso tempo, mai scontato.

E ogni volta che troviamo la connessione giusta, l'architettura diventa un po' più solida e il prossimo pezzo un po' più facile da incastrare.

<div id="testimonial-placeholder"></div>

## Il team giusto per un problema di confine

Sul team mobile siamo partiti in due: io e un'altra persona.

Era la dimensione giusta per un problema di questo tipo. Quando lavori su un layer di comunicazione delicato, dove ogni decisione architetturale ha conseguenze a catena, un team piccolo e affiatato vale più di tanti sviluppatori che si pestano i piedi sullo stesso confine.

Oggi sul mobile ci sono io, e continuo a far crescere l'app insieme al team di prodotto e tech di Tot. Non sono un fornitore esterno che consegna e sparisce: sono una figura che lavora a stretto contatto con chi il prodotto lo vive ogni giorno, allineando costantemente le esigenze di business con le scelte tecniche.

E qui torna il valore di conoscere già le persone. Quando hai fiducia reciproca costruita nel tempo, le conversazioni difficili, quelle su cosa rimandare, cosa prioritizzare, dove vale la pena investire complessità, diventano semplici. Non si perde tempo a costruire fiducia. Si costruisce prodotto.

## I risultati parlano

**In 6 mesi siamo andati live**, con la prima versione dell'app sugli store. E quella era la versione pre-AI: il punto di partenza, non di arrivo.

Da lì non ci siamo più fermati. **Ogni mese rilasciamo nuove funzionalità**, ampliando quello che l'imprenditore può fare direttamente dal telefono.

Ma il dato che conta di più è questo: **oltre la metà dei clienti Tot usa l'app mobile** per gestire la propria azienda.

Non è un companion secondario, un di più che pochi aprono. È diventato uno strumento centrale per come migliaia di imprenditori usano Tot ogni giorno. E questo, per un'app costruita riutilizzando in modo intelligente una piattaforma web esistente, è la prova che la strategia ha funzionato.

## I fattori decisivi

- **Non riscrivere ciò che già funziona.** Riutilizzare la piattaforma web matura dentro un'app nativa ha permesso a Tot di portarsi sul mobile senza duplicare anni di sviluppo e senza rallentare il rilascio di nuove funzionalità. La scelta architetturale giusta fa risparmiare mesi.
- **Il valore sta nel layer di mezzo.** Costruire un'app mobile companion non è copiare il web in piccolo. È progettare con cura il confine tra web e nativo, decidendo chi gestisce cosa. È lì che si vince o si perde un progetto come questo.
- **La fiducia preesistente accelera tutto.** Conoscere già le persone con cui lavori elimina il rumore. Le decisioni difficili diventano conversazioni rapide, e il tempo si investe nel prodotto invece che nel costruire relazioni da zero.

**Tot oggi ha quello che molte realtà rincorrono**: un'app nativa solida sugli store, usata dalla maggioranza dei clienti, costruita riutilizzando in modo intelligente ciò che già esisteva, e in crescita costante mese dopo mese.

## Per i founder che stanno leggendo

**Prima di riscrivere tutto in nativo, chiediti cosa puoi riutilizzare.** Una piattaforma web matura è un asset, non un ostacolo. La domanda giusta non è "come ricostruisco l'app da zero?" ma "come porto il valore che ho già costruito dove i miei utenti lo vogliono?".

**Le sfide tecnologiche pure richiedono profondità, non scorciatoie.** Quando il problema è far dialogare due mondi diversi (web e nativo, in questo caso) non esiste la soluzione veloce. Esiste la conoscenza profonda di entrambi i lati e la disciplina di affrontare lo stesso tipo di decisione ad ogni iterazione.

**Un team piccolo e affiatato batte un team grande e confuso.** Su un problema di confine, dove ogni scelta ha conseguenze a catena, due persone che si capiscono valgono più di dieci che si sovrappongono. La dimensione giusta del team dipende dalla natura del problema, non dall'ambizione del progetto.

**Mobile non significa "app separata".** Significa portare la tua azienda nelle tasche dei tuoi clienti nel modo più sostenibile per chi la costruisce. A volte la risposta migliore è un ponte ben fatto tra ciò che hai e ciò che serve.

La domanda non è "ci serve un'app nativa da zero?" ma "qual è il modo più intelligente per essere nativi senza ricostruire tutto?"
