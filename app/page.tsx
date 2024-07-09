import Image from "next/image";
import stock from "../public/images/main/stock.jpg"

export default function Home() {
  return (
    <div className="text-center">
      <div className="m-10">
        <h1 className="text-3xl text-black">Welcome to StockHolmes</h1>
      </div>
      <div className="text-red-400 p-5">
        <p>A game website where you can challenge yourself in a virtual stock market</p>
      </div>
      <div className="flex items-center justify-center">
        <Image
          src={stock}
          width={500}
          height={500}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
}
