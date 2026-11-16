interface NameBoxProps {
  name: string;
}

function NameBox({ name }: NameBoxProps) {
  return (
    <span className="inline-block p-1 px-3 rounded-cell bg-liquid-100 border border-border shadow-[0_0_4px_1px_rgba(56,189,248,0.6)] transition-shadow duration-500 hover:shadow-[0_0_8px_2px_rgba(56,189,248,0.8)]">
      <span className="bg-gradient-to-r from-blue-600 via-indigo-400 to-purple-300 text-transparent bg-clip-text font-bold">
        {name}
      </span>
    </span>
  );
}

export default NameBox;