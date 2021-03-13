export type ArticleType = 'pubmed' | 'omim' | 'hgmd' | '';

export interface ArticleData {
  id: string;
  title: string;
  articleSource: ArticleType;
  abstract?: AbstractSection[];
  date: Date;
}

export interface AbstractSection {
  label?: string,
  body: string
}

export interface Article {
  data: ArticleData,
  hideAbstract: boolean
}
