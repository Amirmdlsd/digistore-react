export default function Button({ msg, loading }) {
  return (
    <>
      {loading ? (
        <button
          type="submit"
          className="w-full flex items-center justify-center  mt-6 bg-red-600 text-white py-2 rounded-md text-center text-lg font-medium transition duration-300 hover:bg-red-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            className="w-7"
          >
            <radialGradient
              id="a10"
              cx=".66"
              fx=".66"
              cy=".3125"
              fy=".3125"
              gradientTransform="scale(1.5)"
            >
              <stop offset="0" stop-color="#F2FFFA"></stop>
              <stop offset=".3" stop-color="#F2FFFA" stop-opacity=".9"></stop>
              <stop offset=".6" stop-color="#F2FFFA" stop-opacity=".6"></stop>
              <stop offset=".8" stop-color="#F2FFFA" stop-opacity=".3"></stop>
              <stop offset="1" stop-color="#F2FFFA" stop-opacity="0"></stop>
            </radialGradient>
            <circle
              transform-origin="center"
              fill="none"
              stroke="url(#a10)"
              stroke-width="15"
              stroke-linecap="round"
              stroke-dasharray="200 1000"
              stroke-dashoffset="0"
              cx="100"
              cy="100"
              r="70"
            >
              <animateTransform
                type="rotate"
                attributeName="transform"
                calcMode="spline"
                dur="2"
                values="360;0"
                keyTimes="0;1"
                keySplines="0 0 1 1"
                repeatCount="indefinite"
              ></animateTransform>
            </circle>
            <circle
              transform-origin="center"
              fill="none"
              opacity=".2"
              stroke="#F2FFFA"
              stroke-width="15"
              stroke-linecap="round"
              cx="100"
              cy="100"
              r="70"
            ></circle>
          </svg>
          لطفا صبر کنید...
        </button>
      ) : (
        <button
          type="submit"
          className="w-full  mt-6 bg-red-600 text-white py-2 rounded-md text-center text-lg font-medium transition duration-300 hover:bg-red-700"
        >
          {msg}
        </button>
      )}
    </>
  );
}
