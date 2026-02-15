export interface Color {
  name: string;
  color: string;
  price: number;
}

export interface Motive {
  name: string;
  img: string;
  price: number;
}

export type OrderValidationErrors = Record<string, string[]>;
