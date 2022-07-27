export interface Project {
  pathName: string;
  name: string;
  year: string;
  relevantAreas: string[];
  description: string;
  image: string;
  status: string;
  fullDescription?: string;
  link?: string;
  linkTitle?: string;
  screenshots?: Screenshot[];
  github?: string;
  appStore?: string;
  googlePlay?: string;
}

export interface Screenshot {
  url: string;
  title?: string;
}
