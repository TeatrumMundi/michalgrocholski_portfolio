import Image from "next/image";

interface MediaButtonProps {
  label: string;
  iconUrl: string;
  url: string;
}

function MediaButton({ label, iconUrl, url }: MediaButtonProps) {
  return (
    <a
      className="bg-[#222222] text-white border-x-4 border-sky-300 p-2 max-h-10 cursor-pointer shadow-[0_0_8px_2px_rgba(56,189,248,0.6)] transition-shadow duration-500 hover:shadow-[0_0_32px_8px_rgba(56,189,248,0.8)] skew-x-[-45deg]"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="flex items-center opacity-70 hover:opacity-100 transition-opacity duration-500 skew-x-[45deg] px-4">
        <span className="mr-2">{label}</span>
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
