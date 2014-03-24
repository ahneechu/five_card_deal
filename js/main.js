
		var deck = new Array();

		function fname(){
			// file name for card images
			return "img/" + this.num + this.suit + ".png";
		}

		function Card(num, suit){
			// constructor for card option
			this.num = num;
			this.suit = suit;
			this.fname = fname;
		}

		function dealBtn(){
			// handling the Deal button
			deal();
		}

		function resetBtn(){
			// handling the reset button
			for(var i=1; i<6; i++){
			document.images[i-1].src = ("img/back.png");
			console.log(deck);
			}
			return deck;
		}

		function deal(){
			// fill in the deck in order
			for(var i = 1; i<14; i++){
				deck[i] = new Card(i, "_of_clubs");
				deck[i+13] = new Card(i, "_of_hearts");
				deck[i+26] = new Card(i, "_of_spades");
				deck[i+39] = new Card(i, "_of_diamonds");
			}
			
			// shuffle the deck
			var n = Math.floor(Math.random() * 500);
			console.log(deck);
			for(var i=1; i<n; i++){
				card1 = Math.floor(Math.random() * deck.length);
				card2 = Math.floor(Math.random() * deck.length);
				// swap with the current card
				temp = deck[card2];
				deck[card2] = deck[card1];
				deck[card1] = temp;
				// console.log(temp);
				// console.log(deck[card2]);
				// console.log(deck[card1]);
			}

			// deal and display the cards
			for(var i=1; i<6; i++){
				document.images[i-1].src = deck[i].fname();
				console.log(deck[i].fname());
			}
		}