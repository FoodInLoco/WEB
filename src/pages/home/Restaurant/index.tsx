import { useMemo } from "react";
import { useLocation } from "react-router-dom";

export function Restaurant() {
  function useQuery() {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
  }

  let query = useQuery();

  return <h1>Restaurant Area : {query.get('name')}</h1>
}