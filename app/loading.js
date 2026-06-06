import Image from 'next/image';

function Loading() {
  return (
    <div className="h-screen bg-[#c5c5c5] flex justify-center items-center">
      <Image
        src="/Typeface.png"
        alt="Typeface"
        width={280}
        height={280}
        priority
      />
    </div>
  );
}

export default Loading;
