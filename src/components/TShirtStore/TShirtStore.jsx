import React, { useState } from 'react';
const ProductCard = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedSize, setSelectedSize] = useState("Regular");

  return (
    <div className="max-w-4xl mx-auto p-4 mt-4 mb-4 flex flex-col md:flex-row bg-white shadow-md rounded-lg">
      <div className="flex flex-col mr-4">
        {product.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product ${index}`}
            className={`w-20 h-30 rounded-md object-cover my-2 cursor-pointer border-2 ${selectedImage === image ? 'border-blue-500' : 'border-gray-300'}`}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>
      <div className="flex-grow">
        <img
          src={selectedImage}
          alt="Selected Product"
          className="w-80 h-auto rounded-lg object-cover"
        />
      </div>
      <div className="flex-grow flex flex-col mr-4 justify-between">
        <div>
          <h2 className="text-2xl font-bold">{product.company}</h2>
          <div className="text-gray-950 mt-1 text-nowrap">{product.name}</div>
          <div className="mt-3 flex items-center">
            <span className="text-2xl ml-5 font-semibold">₹{product.price}</span>
          </div>
          <p className='text-gray-500'>MRP</p>

          <div className="mt-3">
            <div className="flex w-full">
              {["Regular", "Oversize", "Polo"].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`flex mr-2 justify-center items-center rounded-lg text-lg w-1/3 p-2 ${selectedSize === size ? 'bg-black text-gray-50' : 'bg-gray-100 text-black hover:bg-black hover:text-white'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <button className="w-1/2 bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition duration-300">
              Buy Now
            </button>
          </div>

          <div className="mt-5">
            <h4 className="text-lg font-semibold">Features:</h4>
            <ul className=" ml-5 text-gray-700 mt-2">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
const TShirtStore = () => {
  const products = [
    {
      company: "H&M",
      name: "Men Rounded Neck Pure Cotton Tshirt",
      price: 499.00,
      features: [
        "100% original Products",
        "Pay on delivery might be available",
        "Easy 14 days return and exchanges",
      ],
      images: [
        "https://printmytee.in/wp-content/uploads/2021/05/Product-Your-Design-Here-64.jpg",
        "https://printmytee.in/wp-content/uploads/2021/05/Product-Your-Design-Here-51.jpg",
      ]
    },
    {
      company: "Zara",
      name: "Premium Cotton V-Neck Tshirt",
      price: 599.00,
      features: [
        "Super soft fabric",
        "Pre-shrunk for perfect fit",
        "Available in multiple colors",
      ],
      images: [
        "https://printmytee.in/wp-content/uploads/2021/05/Product-Your-Design-Here-64.jpg",
        "https://printmytee.in/wp-content/uploads/2021/05/Product-Your-Design-Here-53.jpg",
      ]
    },
    {
      company: "Uniqlo",
      name: "Stretchable Sports Tshirt",
      price: 699.00,
      features: [
        "Moisture-wicking fabric",
        "Stretchable material",
        "Perfect for gym and sports",
      ],
      images: [
        "https://printmytee.in/wp-content/uploads/2021/05/Product-Your-Design-Here-55.jpg",
        "https://printmytee.in/wp-content/uploads/2021/05/Product-Your-Design-Here-56.jpg",
      ]
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform ease-in-out duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {products.map((product, index) => (
            <div key={index} className="min-w-full">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          onClick={handlePrevious}
        >
          &#10094;
        </button>
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
          onClick={handleNext}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default TShirtStore;

