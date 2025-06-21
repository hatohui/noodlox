import { UseQueryResult } from "@tanstack/react-query";
import React from "react";

interface UseQueryUIStateOptions<T> {
  query: UseQueryResult<T>;
  loadingNode?: React.ReactNode;
  errorNode?: React.ReactNode;
  emptyNode?: React.ReactNode;
}

const defaultWrapper =
  "flex justify-center items-center h-full text-center text-lg p-4 text-gray-600 w-full animate-pulse rounded-lg bg-gray-200";

/**
 * A hook that returns a React node based on the state of a TanStack Query result.
 *
 * If the query is loading, it returns the `loadingNode` or a default loading animation.
 *
 * If the query has an error, it returns the `errorNode` or a default error message.
 *
 * If the query is successful but the data is empty, it returns the `emptyNode` or a default empty message.
 *
 * If the query is successful and the data is not empty, it returns `null`.
 *
 * This hook is useful for displaying a loading animation, error message, or empty message
 * when using TanStack Query to fetch data.
 *
 * @param {{ query: UseQueryResult<T>, loadingNode?: React.ReactNode, errorNode?: React.ReactNode, emptyNode?: React.ReactNode }} options
 * @returns {React.ReactNode | null}
 */
export const useQueryUIState = <T,>({
  query,
  loadingNode,
  errorNode,
  emptyNode,
}: UseQueryUIStateOptions<T>): React.ReactNode | null => {
  const { isFetching, isError, isSuccess, data } = query;

  if (isFetching) {
    return (
      loadingNode ?? (
        <div className={defaultWrapper}>
          <img
            src="/loading.svg"
            alt="Loading animation"
            className="size-14 mx-auto animate-spin"
          />
        </div>
      )
    );
  }

  if (isError) {
    return (
      errorNode ?? (
        <div className={`${defaultWrapper} text-red-500`}>
          ⚠️ Error loading data. Please try again.
        </div>
      )
    );
  }

  if (isSuccess && !data) {
    return (
      emptyNode ?? (
        <div className={defaultWrapper}>
          🚫 No data found. Please reload the page and try again.
        </div>
      )
    );
  }

  return null;
};
