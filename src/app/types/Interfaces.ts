export interface IAboutMain {
  title: string;
  image: string;
  description: TrustedHTML;
}

export interface IAboutDigits {
  id: number;
  title: string;
  subtitle: string;
}

export interface IAboutUniqueSolutions {
  id: number;
  title: string;
  subtitle: string;
}

export interface IOurMissionMain {
  title: string;
  image: string;
  description: TrustedHTML;
}

export interface IOurMissionValues {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
}

export interface IWhatsNewMain {
  id: number;
  title: string;
  subtitle: string;
}

export interface IWhatsNewCategories {
  id: number;
  name: string;
}

export interface IWhatsNewNews {
  created_at: string;
  description: TrustedHTML;
  id: number;
  image: string;
  record_category: IWhatsNewCategories;
  title: string;
}

export interface IFormInput {
  name: string;
  email: string;
  phone_number: string;
}
