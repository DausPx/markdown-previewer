import React from "react";
interface card {
  type: "rounded" | "box";
  color: "red" | "blue" | "green";
  imgUrl: string
}
const Card: React.FC<card> = ({ type, color, imgUrl }) => {
  let colorStyle = {background:'', text:''};
  let typeStyle = {
    'rounded':'w-36 h-36 p-1 bg-white rounded-full',
     'box':'w-36 h-36 p-1 bg-white rounded-xl'
    };
  switch (color) {
    case "red":
      colorStyle.background = 'flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-lg bg-red-500';
      colorStyle.text = 'block uppercase px-3 py-1 bg-white font-bold rounded-full shadow-sm hover:opacity-80 text-red-500';
      break;
    case 'blue':
      colorStyle.background = 'flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-lg bg-blue-500';
      colorStyle.text = 'block uppercase px-3 py-1 bg-white font-bold rounded-full shadow-sm hover:opacity-80 text-blue-500';
      break;
    default:
      colorStyle.background = 'flex-shrink-0 m-6 relative overflow-hidden rounded-lg max-w-xs shadow-lg bg-green-500';
      colorStyle.text = 'block uppercase px-3 py-1 bg-white font-bold rounded-full shadow-sm hover:opacity-80 text-green-500';
  }

  return (
    <div className={colorStyle.background}>
      <svg
        className="absolute bottom-0 left-0 mb-8 svg"
        viewBox="0 0 375 283"
        fill="none"
      >
        <rect
          x="159.52"
          y="175"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 159.52 175)"
          fill="white"
        />
        <rect
          y="107.48"
          width="152"
          height="152"
          rx="8"
          transform="rotate(-45 0 107.48)"
          fill="white"
        />
      </svg>
      <div className="relative pt-10 px-10 flex items-center justify-center">
        <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3 picture"></div>
        <img
          className={typeStyle[type]}
          src={imgUrl}
          alt=""
        />
      </div>
      <div className="relative text-white px-6 pb-5 mt-6">
        <div className="flex justify-between items-center">
          <span className="block font-semibold text-xl">Doha</span>
          <button className={colorStyle.text}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
