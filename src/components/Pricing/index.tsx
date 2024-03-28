"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data } = await axios.get("/api/getproducts");
    setProducts(data);
  };

  return (
    <section
      id="pricing"
      className="relative z-20 overflow-hidden bg-white pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]"
    >
      <div className="container">
        <div className="mb-[60px]">
          <iframe src="https://www.google.com/maps/d/embed?mid=1h6HGUhX0vDkYoKvnvvMj8gWVrB7VnzI&ehbc=2E312F" width="100%" height="780"></iframe>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
