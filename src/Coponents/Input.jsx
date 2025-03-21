export default function Input({ value, onChange, error }) {
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={onChange}
        name="code"
        className="w-full border border-gray-300 rounded-md py-2 px-4
               bg-gray-50 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
      />
      {error ? (
        <span className="text-red-600 font-bold text-sm">{error}</span>
      ) : null}
    </>
  );
}
