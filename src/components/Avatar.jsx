// eslint-disable-next-line react/prop-types
export function Avatar({ src, hasBorder }) {
  return (
    <div className={`${hasBorder && "border-2 border-green-green rounded-lg"}`}>
      <img 
        className="w-12 h-12 rounded-lg border-4 border-ignite-gray800"
        src={src} 
      />
    </div>
  );
}