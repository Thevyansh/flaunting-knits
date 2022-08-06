import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "@/utils/trpc";
import { useSession } from "next-auth/react";
import ProductForm from "@/components/Admin/ProductForm";


// interface Values {
//   slug: string;
//   name: string;
//   description: string;
//   price: number;
//   salePrice: number;
//   featuredImage: string;
//   images: [string]
// }



const ProductDetails: NextPage = () => {
  const { data: session, status } = useSession()


  const isAdmin = session?.user?.role==="ADMIN" 
  
  return (
    <>  
      {isAdmin &&
      <div>
        Admin
        <ProductForm/>

      </div>
      }
      

    </>
  )
}

export default ProductDetails