import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "@/utils/trpc";
import { useSession } from "next-auth/react";

const ProductDetails: NextPage = () => {
  const { data: session, status } = useSession()
  
  const isAdmin = session?.user?.role==="ADMIN" 

  return (
    <>  
      {isAdmin &&
      <div>
        Admin
      </div>
      }
      

    </>
  )
}

export default ProductDetails