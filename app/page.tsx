import Header from "@/components/Header";
import Image from "next/image";
import React from 'react'
import Link from 'next/link'
import Imagee from "./Imag/Image";
import Card from "./card/card";

export default function Home() {
  return (
<>

<Imagee />
<Card/>

<div className="text-4xl text-red-500">ANA SAYFA</div>
</>
  );
}
