import React from 'react';
import { CalculationResult } from '../types/deposit';

interface DepositResultProps {
  result: CalculationResult;
  startAmount: number;
}

export default function DepositResult({ result, startAmount }: DepositResultProps) {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(value);
  };

  return (
    <div style={{ marginTop: '25px', paddingTop: '15px', borderTop: '1px solid #eee' }}>
      <p><strong>Начальная сумма:</strong> {formatCurrency(startAmount)}</p>
      <p><strong>Итоговая сумма:</strong> {formatCurrency(result.total)}</p>
      <p><strong>Доход:</strong> <span style={{ color: 'green' }}>{formatCurrency(result.profit)}</span></p>
    </div>
  );
}
