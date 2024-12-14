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

export type Stats = {
  data: string;
  title: string;
}[];

export type Features = {
  name: string;
  description: string;
  icon: string;
}[]