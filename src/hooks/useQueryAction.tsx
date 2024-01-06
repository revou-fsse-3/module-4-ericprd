import { useQueryClient } from "@tanstack/react-query"

export function useQueryActions(queryKeys: string[]) {
  const queryClient = useQueryClient();

  /**
   * Invalidates the specified queries, causing them to be refetched on the next render.
   */
  function invalidateQueries() {
    queryClient.invalidateQueries({ queryKey: queryKeys })
  }

  /**
   * Resets the specified queries, removing them from the query cache and forcing a refetch.
   */
  function resetQueries() {
    queryClient.resetQueries({ queryKey: queryKeys });
  }

  /**
   * Removes the specified queries from the query cache, preventing further fetching and rendering.
   */
  function removeQueries() {
    queryClient.removeQueries({ queryKey: queryKeys });
  }

  return {
    invalidateQueries,
    resetQueries,
    removeQueries,
  }
}
