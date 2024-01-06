export type Category = {
  id: string
  name: string
  is_active: boolean
  updated_at: string
}

export type CategoryRequest = {
  page: number
}

export type CreateCategoryRequest = {
  name: string
}

export type UpdateCategoryForm = {
  name: string
  is_active: boolean
}

export type UpdateCategoryRequest = {
  id: string
} & UpdateCategoryForm
