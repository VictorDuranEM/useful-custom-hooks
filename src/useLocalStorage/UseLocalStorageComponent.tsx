import useLocalStorage from "./useLocalStorage";

export default function UseLocalStorageComponent() {
  const [value, setValue] = useLocalStorage('name', 'Victor');
  
  return (
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
  )
}