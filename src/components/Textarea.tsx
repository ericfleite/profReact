type TextareaProps = {
  label: string;
  placeholder: string;
  ehExpandivel: boolean;
  value: string;
  onChange: (novoValor: string) => void
};

function Textarea({ label, placeholder, ehExpandivel, value, onChange }: TextareaProps) {
  label = "";

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label>{label}</label>
        <textarea
          placeholder={placeholder}
          style={{ resize: ehExpandivel ? "both" : "none" }}
          rows={8}
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />
      </div>
    </>
  );
}

export default Textarea;
