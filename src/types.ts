export type Page = {
  title: string;
  description: string;
};

export interface Site extends Page {
  author: string;
}

export type Links = {
  text: string;
  href: string;
}[];

export type Socials = {
  name: string;
  icon: string;
  text: string;
  href: string;
}[];

export type Features = {
  name: string;
  description: string;
  icon: string;
}[];

export type Prices = {
  name: string;
  description: string;
  icon: string;
  price: string;
  discount: string;
}[];

export type Questions = {
  question: string;
  answer: string;
}[];

export type Transport = {
  type: string;
  details: string;
  instructions: string;
}[];

export type Landmark = {
  name: string;
  distance: string;
  description: string;
}[];

export type Schedule = {
  category: string;
  start: string;
  end: string;
  days: string[];
  color: string;
}[]
