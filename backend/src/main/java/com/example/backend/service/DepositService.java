package com.example.backend.service;

import com.example.backend.dto.CalculationRequest;
import com.example.backend.dto.CalculationResponse;
import org.springframework.stereotype.Service;
import java.math.BigDecimal;
import java.math.RoundingMode;

@Service
public class DepositService {

    public CalculationResponse calculateDeposit(CalculationRequest request) {
        BigDecimal amount = request.getAmount();
        BigDecimal rate = request.getRate();
        int months = request.getMonths();

        BigDecimal monthlyRate = rate.divide(new BigDecimal("1200"), 10, RoundingMode.HALF_UP);

        BigDecimal base = BigDecimal.ONE.add(monthlyRate);
        BigDecimal multiplier = base.pow(months);

        BigDecimal total = amount.multiply(multiplier).setScale(2, RoundingMode.HALF_UP);

        BigDecimal profit = total.subtract(amount);

        return new CalculationResponse(total, profit);
    }
}

