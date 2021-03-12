export interface ArticleData {
  id: string;
  title: string;
  abstract?: AbstractSection[];
  externalArticleId: number;
}

export interface AbstractSection {
  label?: string,
  body: string
}

export interface Article {
  data: ArticleData,
  hideAbstract: boolean
}
