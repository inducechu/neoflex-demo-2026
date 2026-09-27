import { CalculationRequest, CalculationResult } from '../types/deposit';

export const depositService = {
  async calculate(data: CalculationRequest): Promise<CalculationResult> {
    const response = await fetch('http://localhost:8080/api/calculate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Ошибка при расчете на сервере');
    }

    return response.json();
  }
};
