import {ProductCard, Section} from '~/components';

const mockProducts = {
  nodes: new Array(12).fill(''),
};

export function ProductSwimlane({
  title = 'Featured Products',
  products = mockProducts,
  count = 4,
  ...props
}) {
  return (
    <Section  heading={title} padding="y" {...props}>
      
      <div className="grid md:grid-cols-2 gap-4 md:mx-4 lg:mx-11 mx-4 grid-cols-2   my-2 lg:grid-cols-4">
       
        {products.nodes.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
            className=""
          />
        ))}
      </div>
      
    </Section>
  );
}
