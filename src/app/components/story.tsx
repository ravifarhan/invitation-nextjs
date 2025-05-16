import Image from "next/image";

export default function Story() {
  return (
    <div className="py-20 px-10 bg-cover bg-center bg-neutral-800">
      <h2 className={`text-center text-4xl text-white mb-12`}>Love Story</h2>
      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="col-span-2">
          <Image
            src="/1.jpg"
            alt="Dapit"
            width={500}
            height={500}
            className="w-full h-auto rounded"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Image
            src="/2.jpg"
            alt="Dapit"
            width={400}
            height={400}
            className="w-full h-auto rounded"
          />
          <Image
            src="/3.jpg"
            alt="Dapit"
            width={400}
            height={400}
            className="w-full h-auto rounded"
          />
        </div>
      </div>
      <div className="text-white py-4">
        <p className="text-sm  text-center">Awal Pertemuan</p>
        <p className="text-xs  text-center pb-2">Bukittinggi, 7 Juni 2023</p>
        <p className="text-xs italic  text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque et
          provident minima, ab, voluptatibus saepe eveniet tempora blanditiis
          modi delectus sapiente vel veritatis id culpa dignissimos laboriosam
          sint ducimus!
        </p>
      </div>
      <div className="text-white py-4">
        <p className="text-sm  text-center">Berkomitmen</p>
        <p className="text-xs  text-center pb-2">Bukittinggi, 7 Juni 2024</p>
        <p className="text-xs italic  text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque et
          provident minima, ab, voluptatibus saepe eveniet tempora blanditiis
          modi delectus sapiente vel veritatis id culpa dignissimos laboriosam
          sint ducimus!
        </p>
      </div>
      <div className="text-white">
        <p className="text-sm  text-center">Bertunangan</p>
        <p className="text-xs  text-center pb-2">Bukittinggi, 7 April 2025</p>
        <p className="text-xs italic  text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque et
          provident minima, ab, voluptatibus saepe eveniet tempora blanditiis
          modi delectus sapiente vel veritatis id culpa dignissimos laboriosam
          sint ducimus!
        </p>
      </div>
    </div>
  );
}
