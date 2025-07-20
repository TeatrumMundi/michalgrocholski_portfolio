interface NameBoxProps
{
    name: string;
}

function NameBox({ name }: NameBoxProps)
{
  return (
    <span className="p-1 px-2 rounded-sm bg-[#222222] border border-[#444444] shadow-[0_0_4px_1px_rgba(56,189,248,0.6)] transition-shadow duration-500 hover:shadow-[0_0_8px_2px_rgba(56,189,248,0.8)]">
        <span className="bg-gradient-to-r from-blue-600 via-indigo-400 to-purple-300 text-transparent bg-clip-text font-bold">
            {name}
        </span>
    </span>
  );
}

export default NameBox;