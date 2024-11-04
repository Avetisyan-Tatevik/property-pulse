"use client";
import React from "react";
import {
  useRouter,
  useParams,
  useSearchParams,
  usePathname,
} from "next/navigation";

const PropertyPage = () => {
  console.log("Hello");
  const router = useRouter();
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const pathName = usePathname();
  const { id } = useParams();
  return (
    <button className="bg-blue-500 p-2" onClick={() => router.push("/")}>
      Go home with Router {name}
    </button>
  );
};

export default PropertyPage;
