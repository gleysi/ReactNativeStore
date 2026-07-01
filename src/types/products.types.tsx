export interface ProductType {
  id: number,
  title: string,
  price: number,
  description: string,
  images: Array<string>
};

export interface ProductListProps {
  data: ProductType[],
  searchText?: string;
};
