export interface ArticleData {
  id: string;
  title: string;
  abstract?: AbstractSection[];
}

export interface AbstractSection {
  label?: string,
  body: string
}

export interface Article {
  data: ArticleData,
  hideAbstract: boolean
}
