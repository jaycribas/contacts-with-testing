require('console.table')

let allContacts = []
let invalidContacts = []

const addContact = function(firstName, lastName, email) {
  let contact = {
    first_name: firstName,
    last_name: lastName,
    email: email
  }

  try{
    console.assert(
      typeof firstName == 'string' &&
      typeof lastName == 'string' &&
      typeof email == 'string')
    allContacts.push(contact)
  }
  catch(e){
    invalidContacts.push(contact)
  }
}

const addContacts = function(contactData) {
  contactData.forEach(function(person){
    for (var prop in person){
      var firstName = person.first_name
      var lastName = person.last_name
      var email = person.email
    }
    addContact(firstName, lastName, email)
  })
}

const printContacts = function(contacts) {
  let sorted = allContacts.sort(function(a, b){
    if(a.first_name < b.first_name) return -1
    if(a.first_name > b.first_name) return 1
    return 0
  })

  let fullNameSorted = []

  for(let i = 0; i < sorted.length; i++) {
    let fullName = {
      "Full Name": sorted[i].first_name + ' ' + sorted[i].last_name,
      "Email Address": sorted[i].email
    }
    fullNameSorted.push(fullName)
  }

  console.table('All Contacts:', fullNameSorted)
  console.log(`Could not import ${invalidContacts.length} contacts.`)

  try {
    for(let i = 0; i < invalidContacts.length; i++){
      console.log( 'First: ' + invalidContacts[i].first_name + ', Last: ' + invalidContacts[i].last_name + ', Email: ' + invalidContacts[i].email )
    }
  } catch(e) {
    console.log("e.message (╯°□°）╯︵ ┻━┻", e.message)
  }
}




///////////////////////////////////////////////////////////////////////////

addContacts([{
  "first_name": "Tanny",
  "last_name": "Vibert",
  "email": "tvibert0@illinois.edu"
}, {
  "first_name": 55,
  "last_name": "Myall",
  "email": "tmyall1@instagram.com"
}, {
  "first_name": "Engracia",
  "last_name": "Folger",
  "email": "efolger2@epa.gov"
}, {
  "first_name": "Conroy",
  "last_name": "Honsch",
  "email": "chonsch3@sohu.com"
}, {
  "first_name": "Virgina",
  "last_name": "Cankett",
  "email": true
}, {
  "first_name": "Mateo",
  "last_name": "Da Costa",
  "email": "mdacosta5@about.com"
}, {
  "first_name": "Ambrose",
  "last_name": "Scullard",
  "email": "ascullard6@timesonline.co.uk"
}, {
  "first_name": "Shaylah",
  "last_name": "Fairney",
  "email": "sfairney7@stumbleupon.com"
}, {
  "first_name": "Pier",
  "last_name": "Waine",
  "email": "pwaine8@unc.edu"
}, {
  "first_name": "Karita",
  "last_name": "Bough",
  "email": "kbough9@angelfire.com"
}, {
  "first_name": "Marguerite",
  "last_name": "Lafayette",
  "email": "mlafayettea@bravesites.com"
}, {
  "first_name": "Northrop",
  "last_name": "Bauchop",
  "email": "nbauchopb@pagesperso-orange.fr"
}, {
  "first_name": "Devon",
  "last_name": "Bocking",
  "email": "dbockingc@comcast.net"
}, {
  "first_name": "Willdon",
  "last_name": 22,
  "email": "whedleyd@purevolume.com"
}, {
  "first_name": "Charil",
  "last_name": "Clegg",
  "email": "cclegge@weibo.com"
}, {
  "first_name": "Nessi",
  "last_name": "Bywaters",
  "email": "nbywatersf@shop-pro.jp"
}, {
  "first_name": "Mercy",
  "last_name": "Browncey",
  "email": "mbrownceyg@yelp.com"
}, {
  "first_name": "Didi",
  "last_name": "Grose",
  "email": "dgroseh@google.com.hk"
}, {
  "first_name": "Niccolo",
  "last_name": "Spruce",
  "email": "nsprucei@wordpress.com"
}, {
  "first_name": "Winston",
  "last_name": "Hixley",
  "email": "whixleyj@homestead.com"
}])
printContacts()
