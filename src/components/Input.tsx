import type { CSSProperties } from "react";

type InputProps = {
  label: string;
  placeholder: string;
  value: string;
  onChange: (novoValor: string) => void
  inputStyle?: CSSProperties;
};

function Input({ label, placeholder, value, onChange }: InputProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <label>{label}</label>
      <input placeholder={placeholder} style={{ padding: 8 }} value={value} onChange={(event) => onChange(event.target.value)}/>
    </div>
  );
}

export default Input;
