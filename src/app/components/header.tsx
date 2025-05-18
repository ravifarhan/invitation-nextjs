import Image from "next/image";

export default function Header() {
  return (
    <div className="py-20 px-10 bg-cover bg-center bg-neutral-800">
      <div className="text-white  inline-block">
        <h2 className="font-montserrat text-sm italic text-white mb-2">
          The Wedding of
        </h2>
        <h1 className="font-playfair text-3xl font-semibold mb-4">
          Dapit & Pujit
        </h1>
        <div className="mb-4">
          <Image
            src="/bg.jpg"
            width={300}
            height={300}
            alt="dapit"
            className="w-full object-cover object-center rounded"
            />
        </div>
        <p className="font-merriweather text-xs italic text-white text-center mb-1">
          &quot;Dan di antara tanda-tanda kebesaran-Nya ialah Dia menciptakan
          pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung
          dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa
          kasih dan sayang.&quot;
        </p>
        <p className="font-merriweather text-xs text-white text-center">
          ( QS. Ar-Rum: 21 )
        </p>
      </div>
    </div>
  );
}
