interface InputProps {
  type: string;
  name: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ type, name, placeholder }) => {
  return (
    <>
      <label htmlFor={name} className="text-base sm:text-lg block">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        required
        placeholder={placeholder}
        className="text-text border border-gray-2 rounded-md px-3 py-2.5 w-full mt-1 focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </>
  );
};

export default Input;
