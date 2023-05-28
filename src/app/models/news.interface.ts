export interface News {
  ID: string;
  title: string;
  description: string;
  date: string;
  commentsCount: number;
  viewCount: number;
  link?: string;
  isTop?: boolean;
  tags?: Tag[];
  image?: string;
  imageSource?: string;
  imageSmall?: string;
  imageMiddle?: string;
}

export interface Tag {
  title: string;
  url: string;
  id: string;
}
