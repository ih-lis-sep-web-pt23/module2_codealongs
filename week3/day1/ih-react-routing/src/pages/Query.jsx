import { useSearchParams } from "react-router-dom";

function Query() {
  const [searchParams, setSearchParams] = useSearchParams();
  const destination = searchParams.get("destination");
  const month = searchParams.get("month");

  return (
    <div>
      <h1>{destination}</h1>
      <h3>{month}</h3>
    </div>
  );
}

export default Query;
