/* Some time you have to need create a object that have inside one or more object so that you use union  */
type cardNumber = {
  cardNumber: string;
};
type cardDate = {
  cardDate: string;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };
