export interface ProductType {
  id: number,
  title: string,
  images: Array<string>
};

export interface ProductListProps {
  data: ProductType[],
  searchText?: string;
};
