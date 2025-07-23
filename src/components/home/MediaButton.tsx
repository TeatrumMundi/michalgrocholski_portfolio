import Image from "next/image";

interface MediaButtonProps {
  label: string;
  iconUrl: string;
  url: string;
}

function MediaButton({ label, iconUrl, url }: MediaButtonProps) {
  return (
    <a
      className="bg-liquid text-white p-2 max-h-10 rounded-cell hover:scale-110 transition-transform duration-500"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="flex items-center px-2">
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
