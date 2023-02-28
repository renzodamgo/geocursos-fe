import Image from "next/image";
import openImg from "public/svgs/open.svg"
import closeImg from "public/svgs/close.svg";

type Props = {
  name: string;
  details: string;
  occupation: string;
};

export const TestiCard = ({ name, details, occupation }: Props) => {
  return (
    <div className="flex flex-col  gap-3 rounded-xl bg-white px-6 py-6  shadow-[0_5px_50px_-10px_rgba(0,0,0,0.3)]">
      <div className="relative flex-grow flex items-center">
        <p className="relative z-10">{details}</p>
        <Image
          src={openImg}
          alt="testimonio"
          className="absolute top-[-5px] left-[-5px] z-0"
        />
        <Image
          src={closeImg}
          alt="testimonio"
          className="absolute bottom-[-5px] right-[-5px] z-0"
        />
      </div>

      <div className="flex items-center gap-2 flex-shrink">
        <Image
          src="https://avatars.githubusercontent.com/u/54272736?v=4"
          alt="frapuccesco"
					className="w-[50px] rounded-full border-2 border-gray"
					height={50}
					width={50}
        />
        <div className="text-sm">
          <p className="font-bold">{name}</p>
          <div>{occupation}</div>
        </div>
      </div>
    </div>
  );
};
