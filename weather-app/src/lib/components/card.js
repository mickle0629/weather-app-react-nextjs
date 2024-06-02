export default function Card(props) {
  const { main, top, bottom } = props.data;
  return (
    <div className="flex flex-col
                    max-w-72 
                    gap-2
                    border
                    rounded-[25px]">
      <div className="flex flex-col m-5 gap-4">
        <p className="text-2xl">{top}</p>
        <p className="text-5xl">{main}</p>
        <p className="text-2xl">{bottom}</p>
      </div>
    </div>
  )
};