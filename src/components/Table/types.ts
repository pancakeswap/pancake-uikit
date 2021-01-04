export type TableProps = {
  data?: any[]
  selectedFilters?: string
  sortBy?: string
  sortDir?: string
  onSort?: (value: string) => void
}

export type ColumnsDefTypes = {
  id: number,
  bold: string,
  normal: string
}