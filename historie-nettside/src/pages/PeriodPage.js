import { useParams } from "react-router-dom";

function PeriodPage() {
  const { id } = useParams();

  return (
    <div>
      <h1>Historisk periode: {id}</h1>
      <p>Her kan du vise informasjon om perioden.</p>
    </div>
  );
}

export default PeriodPage;
