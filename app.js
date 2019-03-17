const cards = [
    {
      front: 'The "First Computer Programmer"',
      back: 'Ada Lovelace',
      flipped: false,
    },
    {
      front: 'Invented the "Clarke Calculator"',
      back: 'Edith Clarke',
      flipped: false,
  
    },
    {
      front: 'Famous World War II Enigma code breaker',
      back: 'Alan Turing',
      flipped: false,
    },
    {
      front: 'Created satellite orbit analyzation software for NASA',
      back: 'Dr. Evelyn Boyd Granville',
      flipped: false,
    },
  ]; 

  //Get info for new cards
  //bind those properties to to v-model
  //add new card when user input
    //creates a method call addNewCard as a new object containing new card information
    //pushes into an array call newCards
  //Displays data
  //onClick: flips cards  
  //Get info for new cards from the user
  //Add new card when user hits enter or clicks button
  //Delete cards
  //Animate card flip
  //Display an error message

  new Vue({
    el: '#flashcard-app',
    data: {
      cards: cards,
      addfront: '',
      addback: '',
      err: false,
    },
    methods: {
      toggleCard: function(card){
        card.flipped = !card.flipped;
      },
      addNewCard: function(){
        if(!this.addfront || !this.addback){
          this.err = true;
        } else {
          this.cards.push({
            front: this.addfront,
            back: this.addback,
            flipped: false
          });
          this.addback = '';
          this.addfront = '';
          this.err = false;
        }
      }, 
    }
  });