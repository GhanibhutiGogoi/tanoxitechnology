import { products } from '@/data/products';
import ProductDetail from '@/components/ProductDetail';

export function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductPage({ params }: { params: { id: string } }) {
  return <ProductDetail params={params} />;
}
