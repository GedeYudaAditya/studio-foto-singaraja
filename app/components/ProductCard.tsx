import Image from 'next/image';

interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
}

const formatHarga = (price: number) => {
    return new Intl.NumberFormat('id-ID').format(price); // Pastikan format harga konsisten
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white shadow-md rounded-xl flex flex-col items-center text-center hover:shadow-xl transition-all">
      <Image
        src={product.image}
        alt={product.title}
        width={300}
        height={200}
        className="rounded-lg object-cover mb-4"
      />
      <div className="p-4 w-full h-full flex flex-col justify-between">
        <h3 className="font-semibold text-lg">{product.title}</h3>
        <p className="text-gray-500 mb-2">Rp. {formatHarga(product.price)}</p>
        <a className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition" href={"/produk/review/" + product.id}>
            Lihat Detail
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
