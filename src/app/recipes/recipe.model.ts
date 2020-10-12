import {IngredientModel} from "../shared/ingredient.model";

export class  Recipe {
  public  name: string;
  public  description: string;
  public  imagePath: string;
  public ingrediants: IngredientModel[];

  constructor(name: string, description: string, imagePath: string, ingrediants: IngredientModel[]) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingrediants = ingrediants;
  }
}
