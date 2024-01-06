export type PaginationProps = {
  previousPageHandler: () => void
  nextPageHandler: () => void
  totalPage: number
  currentPage: number
}