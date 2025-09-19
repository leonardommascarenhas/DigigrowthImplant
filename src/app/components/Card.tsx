type CardProps = {
  title: string;
  description: string;
};

const Card = ({ title, description }: CardProps) => {
  return (
    <div className="bg-gray-400 rounded-2xl shadow-lg p-6">
      <h3 className="text-xl font-semibold mb-3 ">{title}</h3>
      <p className=" leading-relaxed">{description}</p>
    </div>
  );
};

export default Card;
