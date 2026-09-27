export interface CalculationRequest {
  amount: number;
  months: number;
  rate: number;
}

export interface CalculationResult {
  total: number;
  profit: number;
}
