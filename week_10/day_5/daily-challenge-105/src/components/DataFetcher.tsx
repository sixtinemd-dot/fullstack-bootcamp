// src/components/DataFetcher.tsx

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import type { DataState } from "../types/types";

interface DataFetcherProps<T> {
  fetchAction: () => any;
  selector: (state: RootState) => DataState<T>;
  renderItem: (item: T) => JSX.Element;
}

export default function DataFetcher<T>({
  fetchAction,
  selector,
  renderItem,
}: DataFetcherProps<T>) {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(selector);

  useEffect(() => {
    dispatch(fetchAction());
  }, [dispatch, fetchAction]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>{renderItem(item)}</div>
      ))}
    </div>
  );
}
