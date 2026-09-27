package com.example.backend.controller;

import com.example.backend.dto.CalculationRequest;
import com.example.backend.dto.CalculationResponse;
import com.example.backend.service.DepositService;
import jakarta.validation.Valid;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*") 
public class DepositController {

    private final DepositService depositService;

    public DepositController(DepositService depositService) {
        this.depositService = depositService;
    }

    @PostMapping("/calculate")
    public CalculationResponse calculate(@Valid @RequestBody CalculationRequest request) {
        return depositService.calculateDeposit(request);
    }
}
