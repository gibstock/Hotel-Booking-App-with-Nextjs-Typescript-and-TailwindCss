type AppProps = {
  label: string;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
  required: boolean;
  placeholder: string;
  // otherProps: any;
}

const FormInput = ({ label, type, onChange, name, value, placeholder }: AppProps) => {
  return (
    <div className="relative mt-3">
      {label && (
        <label className="text-[#3B3E44] text-base pointer-events-none  transition-all duration-300">
          {label}
        </label>
      )}
      <input 
        type={type}
        onChange={onChange}
        name={name}
        value={value} 
        placeholder={placeholder} 
        className="bg-none bg-gray-200 text-gray-800 text-xl py-3 px-3 pt-2 block w-full my-6 focus:outline-none rounded-lg"
      />
      
    </div>
  )
}

export default FormInput