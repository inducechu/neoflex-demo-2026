package com.example.backend.dto;

import java.math.BigDecimal;

public class CalculationResponse {
    private BigDecimal total;
    private BigDecimal profit;

    public CalculationResponse(BigDecimal total, BigDecimal profit) {
        this.total = total;
        this.profit = profit;
    }

    public BigDecimal getTotal() { return total; }
    public void setTotal(BigDecimal total) { this.total = total; }

    public BigDecimal getProfit() { return profit; }
    public void setProfit(BigDecimal profit) { this.profit = profit; }
}
