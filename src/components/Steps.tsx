type StepsProps = {
  steps: { nome: string; ordem: number }[];
};

function Steps(props: StepsProps) {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        gap: 24,
      }}
    >
      {props.steps.map((step) => {
        return (
          <div
            key={step.ordem}
            style={{
              display: "flex",
              gap: 10,
            }}
          >
            <p>{step.ordem}</p>
            <p>{step.nome}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Steps;
