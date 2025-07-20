import Image from "next/image";

interface MediaButtonProps {
  label: string;
  iconUrl: string;
  url: string;
}

function MediaButton({ label, iconUrl, url }: MediaButtonProps) {
  return (
    <a
      className="parallelogram-btn bg-white text-black border-x-4 border-sky-300 p-2 max-h-10 cursor-pointer shadow-[0_0_16px_4px_rgba(56,189,248,0.6)] transition-shadow duration-500 hover:shadow-[0_0_32px_8px_rgba(56,189,248,0.8)]"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="flex items-center opacity-70 hover:opacity-100 transition-opacity duration-500">
        <span className="mr-1">{label}</span>
        <Image
          className="inline-block"
          src={iconUrl}
          alt={`${label} Icon`}
          width={24}
          height={24}
        />
      </span>
    </a>
  );
}

export default MediaButton;
