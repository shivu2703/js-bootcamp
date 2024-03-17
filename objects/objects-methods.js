// method is nothing but a object property whose value is a function

let restuarant = {
    name: 'chai sqaure',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partysize){
        let leftSeat = this.guestCapacity - this.guestCount
        return leftSeat >= partysize
    },
    seatParty: function(partysize){
        this.guestCount= this.guestCount+ partysize
    },
    removeParty: function(partysize){
        this.guestCount= this.guestCount - partysize
    }


}

restuarant.seatParty(72)
console.log(restuarant.checkAvailability(4))
restuarant.removeParty(5)
console.log(restuarant.checkAvailability(4))
