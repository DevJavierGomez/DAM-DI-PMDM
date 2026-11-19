export interface AbilityListResponse {
  count: number
  next: string
  previous: any
  results: AbilityItem[]
}

export interface AbilityItem {
  name: string
  url: string
}


