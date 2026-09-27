import React, { useState } from 'react';
import DepositForm from './components/DepositForm';
import DepositResult from './components/DepositResult';
import { depositService } from './services/depositService';
import { CalculationRequest, CalculationResult } from './types/deposit';

export default function App() {
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [startAmount, setStartAmount] = useState<number | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleCalculate = async (formData: CalculationRequest) => {
    setLoading(true);
    setServerError(null);
    setResult(null);
    setStartAmount(formData.amount);

    try {
      const data = await depositService.calculate(formData);
      setResult(data);
    } catch (err: any) {
      setServerError(err.message || 'Не удалось связаться с сервером');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', padding: '20px', fontFamily: 'sans-serif', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Калькулятор вклада</h2>
      
      <DepositForm onCalculate={handleCalculate} loading={loading} />

      {serverError && <div style={{ color: 'red', marginTop: '15px' }}>{serverError}</div>}

      {result && startAmount !== null && (
        <DepositResult result={result} startAmount={startAmount} />
      )}
    </div>
  );
}
