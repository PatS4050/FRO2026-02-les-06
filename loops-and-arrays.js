// ==========================================
// Opdracht 1. Bob staat erom bekend dat hij vaak vergaderingen mist, omdat hij zijn Outlook-agenda veel "gedoe" vindt.
// Hij print alles liever uit. Schrijf een script dat onderstaande lijst met vergaderingen doorloopt en voor iedere
// tijd "Vergadering om [tijd]" in de console logt.

// Verwachtte uitkomsten:
// Vergadering om 09:00
// Vergadering om 10:30
// Vergadering om 14:00
// Vergadering om 15:30
// Vergadering om 17:00
// ==========================================

// INPUT: array meetingTimes
// OUTPUT: zie uitkomst
// STEPS: maak van index meetingTime een i en log i met string

const meetingTimes = ['09:00', '10:30', '14:00', '15:30', '17:00'];
for (let j = 0; j < meetingTimes.length; j++) {
    console.log("Vergadering om "+ meetingTimes[j]);
}

// ==========================================
// Opdracht 2. In tegenstelling tot Bob, werken de andere medewerkers van Loop-it Solutions wél hard.
// Alle medewerkers hebben daarom zojuist 5% salarisverhoging gekregen. Om te voorkomen dat Bob dit handmatig moet aanpassen,
// schrijf jij een script voor hem dat alle salarissen in onderstaande array met 5% verhoogd.
// Let op: hoewel we op dit moment slechts 5 medewerkers hebben, moet jouw script natuurlijk ook werken
// als de array wel 100 of 200 salarissen zou bevatten!

// Verwachtte uitkomst:
// console.log(salaries) geeft [3360, 2467.5, 2940, 3675, 2940]
// ==========================================

// INPUT: array salaries
// OUTPUT: zie uitkomst
// STEPS: itereer de array, vermenigvuldig elk bedrag met 1,05



const salaries = [3200, 2350, 2800, 3500, 2800];
for (let j = 0; j < salaries.length; j++) {
    console.log(salaries[j] * 1.05);
}

// ==========================================
// Opdracht 3. Eén van Bob's taken is medewerkers feliciteren met hun "zoveelste" verjaardag.
// Daarvoor moet hij natuurlijk wel weten hoe oud iemand is geworden - en hoofdrekenen is niet zijn sterkste kant.
// Schrijf een script dat de array met geboortedata omzet naar een leeftijd, ervan uitgaande dat het huidige jaar 2025 is.

// Verwachte uitkomst:
// console.log(birthYears) geeft [30, 28, 35, 22, 43]
// ==========================================

// INPUT: array birthYears
// OUTPUT: zie uitkomst
// STEPS: itereer de array, trek de array af van 2025

const birthYears = [1995, 1997, 1990, 2003, 1982];
for (let j = 0; j < birthYears.length; j++) {
    console.log(2025 - birthYears[j]);
}


// ==========================================
// Opdracht 4. Bob houdt bij hoeveel verlofuren medewerkers per maand opnemen. Nu wil hij voor het nieuwe jaar een bonusstructuur toepassen:
// - Even getallen (bijvoorbeeld 2, 4, 6 uur) worden vermenigvuldigd met 2, omdat medewerkers die hun verlof in nette blokken opnemen, worden beloond.
// - Oneven getallen (bijvoorbeeld 3, 5, 7 uur) worden vermenigvuldigd met 0.5, omdat Bob onregelmatig verlof wil ontmoedigen
// Schrijf een script dat de verlof-uren aanpast op basis van deze bonus-regeling.

// Verwachte uitkomst:
// console.log(leaveHours) geeft [12, 4.5, 4, 3.5, 1.5]
// ==========================================

// INPUT: array leaveHours
// OUTPUT: zie uitkomst
// STEPS: itereer de array, selecteer de even uren en vermenigvuldig die met 2 en anders met 0,5

const leaveHours = [6, 9, 2, 7, 3];
for (let j = 0; j < leaveHours.length; j++) {
    if (leaveHours[j] % 2 === 0) {
        console.log(leaveHours[j] * 2);
    } else {
        console.log(leaveHours[j] * 0.5);
    }
}


// ==========================================
// Opdracht 5 (BONUS). Na een dag bij Loop-it Solutions zit je er lekker in, tot je beseft dat één van de machines de
// productiecodes verkeerd genereert en Bob deze altijd met de hand verbetert. Geen wonder dat er zo weinig werk verzet wordt...
// Elke code bevat onnodige spaties en rare hoofdletters. Schrijf een script dat de codes in één keer corrigeert.

// Tip: je hebt hiervoor 2 verschillende methodes nodig. Deze heb je nog niet geleerd, dus bekijk hiervoor deze MDN-artikelen eens:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

// Verwachte uitkomst:
// console.log(productionCodes) geeft ['ABC123', 'DEF456', 'GHI789', 'JKL012']

// ==========================================
// INPUT: array
// OUTPUT: zie uitkomst
// STEPS: wijs de alles in hoofdletters parameter toe
// wijs de wis spatiess functie toe
// itereer de array,

const productionCodes = [" abC123  ", "  DEF456", "ghi789  ", "JKL012"];
for (let j = 0; j < productionCodes.length; j++) {
    console.log(productionCodes[j].toUpperCase().trim());
}



