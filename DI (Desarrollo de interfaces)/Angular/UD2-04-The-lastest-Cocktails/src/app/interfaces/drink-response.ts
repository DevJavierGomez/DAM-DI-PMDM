export interface DrinkResponse {
  drinks: Drink[];
}

export interface Drink {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strAlcoholic: string;
  strDrinkThumb: string;
  strInstructions: string;
}
