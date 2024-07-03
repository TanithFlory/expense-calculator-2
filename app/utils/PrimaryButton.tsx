export default function PrimaryButton({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <button
      type="submit"
      className={`${className} bg-green-400 p-2 rounded-sm hover:bg-green-500 h-[35px] text-sm font-bold`}
    >
      {text}
    </button>
  );
}
