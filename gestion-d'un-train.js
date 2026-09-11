let prompt = require("prompt-sync")();
let tickets = [];
let countId = 1;
const trips = [
  {
    id: 1,
    departure: "Safi",
    destination: "Youssoufia",
    departureTime: "07:30",
    arrivalTime: "08:30",
    price: 25,
    availableSeats: 50,
  },
  {
    id: 2,
    departure: "Safi",
    destination: "Marrakech",
    departureTime: "08:00",
    arrivalTime: "10:30",
    price: 90,
    availableSeats: 50,
  },
  {
    id: 3,
    departure: "Safi",
    destination: "Casablanca",
    departureTime: "09:00",
    arrivalTime: "13:00",
    price: 140,
    availableSeats: 50,
  },
  {
    id: 4,
    departure: "Youssoufia",
    destination: "Marrakech",
    departureTime: "09:15",
    arrivalTime: "11:00",
    price: 65,
    availableSeats: 50,
  },
  {
    id: 5,
    departure: "Youssoufia",
    destination: "Casablanca",
    departureTime: "10:00",
    arrivalTime: "13:30",
    price: 110,
    availableSeats: 50,
  },
  {
    id: 6,
    departure: "Marrakech",
    destination: "Casablanca",
    departureTime: "11:30",
    arrivalTime: "14:30",
    price: 120,
    availableSeats: 50,
  },
  {
    id: 7,
    departure: "Marrakech",
    destination: "Rabat",
    departureTime: "12:00",
    arrivalTime: "16:00",
    price: 150,
    availableSeats: 50,
  },
  {
    id: 8,
    departure: "Casablanca",
    destination: "Rabat",
    departureTime: "14:00",
    arrivalTime: "15:15",
    price: 40,
    availableSeats: 50,
  },
  {
    id: 9,
    departure: "Casablanca",
    destination: "Kenitra",
    departureTime: "15:00",
    arrivalTime: "16:45",
    price: 55,
    availableSeats: 50,
  },
  {
    id: 10,
    departure: "Rabat",
    destination: "Kenitra",
    departureTime: "16:00",
    arrivalTime: "16:45",
    price: 30,
    availableSeats: 50,
  },
  {
    id: 11,
    departure: "Rabat",
    destination: "Fes",
    departureTime: "17:00",
    arrivalTime: "19:30",
    price: 95,
    availableSeats: 50,
  },
  {
    id: 12,
    departure: "Kenitra",
    destination: "Fes",
    departureTime: "17:30",
    arrivalTime: "20:00",
    price: 85,
    availableSeats: 50,
  },
  {
    id: 13,
    departure: "Fes",
    destination: "Meknes",
    departureTime: "08:30",
    arrivalTime: "09:20",
    price: 35,
    availableSeats: 50,
  },
  {
    id: 14,
    departure: "Fes",
    destination: "Oujda",
    departureTime: "10:00",
    arrivalTime: "13:30",
    price: 130,
    availableSeats: 50,
  },
  {
    id: 15,
    departure: "Meknes",
    destination: "Rabat",
    departureTime: "11:00",
    arrivalTime: "13:30",
    price: 80,
    availableSeats: 50,
  },
  {
    id: 16,
    departure: "Meknes",
    destination: "Casablanca",
    departureTime: "12:00",
    arrivalTime: "15:00",
    price: 105,
    availableSeats: 50,
  },
  {
    id: 17,
    departure: "Casablanca",
    destination: "El Jadida",
    departureTime: "16:30",
    arrivalTime: "18:00",
    price: 50,
    availableSeats: 50,
  },
  {
    id: 18,
    departure: "El Jadida",
    destination: "Safi",
    departureTime: "18:30",
    arrivalTime: "20:30",
    price: 60,
    availableSeats: 50,
  },
  {
    id: 19,
    departure: "Marrakech",
    destination: "Agadir",
    departureTime: "15:00",
    arrivalTime: "18:30",
    price: 100,
    availableSeats: 50,
  },
  {
    id: 20,
    departure: "Agadir",
    destination: "Safi",
    departureTime: "19:00",
    arrivalTime: "22:00",
    price: 95,
    availableSeats: 50,
  },
];

let choix;
do {
  console.log(
    ` =======================
        RAILWAY MANAGER
     =======================
    1-Afficher les trajets
    2-Acheter un ticket
    3-Afficher les tickets
    4-Annuler un ticket
    5-Rechercher un ticket
    6-Filtrer les trajets
    7-Trier les trajets
    0-Quitter`,
  );

  choix = Number(prompt("Votre choix:"));

  switch (choix) {
    case 1:
      afficherTrajet();
      break;
    case 2:
      acheterUnTicket();
      break;
    case 3:
      affichierTickets();
      break;
    case 4:
      supprimerTicket();
      break;
    case 5:
      rechercherUnTicketParNom();
      break;
    case 6:
      filtrerTrajets();
      break;
    case 7:
      trierTrajets();
      break;
    case 0:
      console.log("Au revoir");
      break;
    default:
      console.log("choix invalable.");
      break;
  }
} while (choix != 0);

function afficherTrajet() {
  console.log("=== TRAJETS DISPONIBLES ===");
  for (let i = 0; i < trips.length; i++) {
    console.log(`
             #${trips[i].id} ${trips[i].departure} -> ${trips[i].destination}
             Departure: ${trips[i].departureTime}
             Arrivée: ${trips[i].arrivalTime}
             Prix: ${trips[i].price} DH
             Places disponibles: ${trips[i].availableSeats}`);
  }
}

function rechercherByID(id) {
  for (let i = 0; i < trips.length; i++) {
    if (id === trips[i].id) {
      return trips[i];
    }
  }
  return false;
}
function acheterUnTicket(ticket) {
  let nom = prompt("Nom du passager :");
  let trajet = rechercherByID(Number(prompt("Identifiant du trajet :")));
  if (!trajet) {
    console.log("traget introuvable . ");
    return;
  }
  if (trajet.availableSeats <= 0) {
    console.log("train complet .");
    return;
  }
  ticket = {
    id: countId,
    passengerName: nom,
    tripId: trajet.id,
    seatNumber: trajet.availableSeats,
    price: trajet.price,
  };
  countId ++;
  trajet.availableSeats -= 1;

  tickets[tickets.length] = ticket;
  console.log("Ticket achete avec succes");
  afficherTicket(ticket);
}

function afficherTicket(ticket) {
  let trajet = rechercherByID(ticket.tripId);
  for (let i = 0; i < trips.length; i++) {
    if (trips[i].id == ticket.tripId) {
      trajet == trips[i];
      break;
    }
  }
  console.log(`ticket # ${ticket.id}
        passager : ${ticket.passengerName}
        Trajet : ${trajet.departure}->${trajet.destination}
        place : ${ticket.seatNumber}
        prix : ${ticket.price} DH
        `);
}
function affichierTickets() {
  console.log("====== tickets =======");
  if (tickets.length === 0) {
    console.log("Aucun ticket enregistré.");
    return;
  }
  for (let i = 0; i < tickets.length; i++) {
    afficherTicket(tickets[i]);
  }
}


function rechercherTicketById(id) {
  for (let i = 0; i < tickets.length; i++) {
    if (tickets[i].id === id) {
      return tickets[i];
    }
  }
  return false;
}


function verifierTicket(id) {
  let ticket = rechercherTicketById(id);
  return ticket;
}


function supprimerTicket() {
  let id = Number(prompt("Identifiant du ticket:"));
  let ticket = verifierTicket(id);

  if (!ticket) {
    console.log("trajet introuvable");
    return;
  }

  let trajet = rechercherByID(ticket.tripId);

  
  let newTickets = [];
  for (let i = 0; i < tickets.length; i++) {
    if (tickets[i].id !== ticket.id) {
      newTickets[newTickets.length] = tickets[i];
     
    }
  }
  tickets = newTickets;
  
  trajet.availableSeats = trajet.availableSeats + 1;
  console.log(`Identifiant du ticket : ${ticket.id} `);
  console.log("Ticket annule avec succes.");
}

function rechercherUnTicketParNom() {
  let name = prompt("Nom du passager : ");
  name = name.trim();
  let newTickets = [];
  for (let i = 0; i < tickets.length; i++) {
    if (
      tickets[i].passengerName.toLocaleLowerCase() == name.toLocaleLowerCase()
    ) {
      newTickets[newTickets.length] = tickets[i];
      
    }
  }
  if (newTickets.length === 0) {
    console.log("Aucun ticket.");
    return;
  }
  for (let i = 0; i < newTickets.length; i++) {
    afficherTicket(newTickets[i]);
  }
}
function filtrerTrajets() {
  let ville = prompt("Ville de départ :");
  let results = [];
  for (let i = 0; i < trips.length; i++) {
    if (trips[i].departure.toLocaleLowerCase() == ville.toLocaleLowerCase()) {
      results[results.length]= trips[i];
    }
    
  }
 
  console.log(`Résultat :`);
  if (results.length == 0) {
    console.log("Aucun trajet");
    return;
  }
  for (let i = 0; i < results.length; i++) {
    console.log(
      `${results[i].departure} → ${results[i].destination} : ${results[i].price} DH`,
    );
  }
}

function trierTrajets() {
  console.log(" TRAJETS TRIÉS");
  for (let i = 0; i < trips.length -1; i++) {
    for (let j = 0; j < trips.length-1-i; j++) {
      let temp = trips[j];
      if (trips[j].price > trips[j+1].price) {
          trips[j]=trips[j+1];
          trips[j+1]= temp;
      }
      
    } 
  }
  for (let i = 0; i < trips.length; i++) {
    console.log(`${trips[i].departure} -> ${trips[i].destination} : ${trips[i].price} DH`);
    
    
  }
  }
  

