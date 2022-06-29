package com.ironhack.jose.controller;

import com.ironhack.jose.models.Employee;
import com.ironhack.jose.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;

    @GetMapping("employee/find-all")
    @CrossOrigin
    public List<Employee> findAll() {
        return employeeService.findAll();
    }

    @DeleteMapping("employee/delete/{id}")
    @CrossOrigin
    public void deleteEmployee(@PathVariable  long id) {
        employeeService.deleteEmployee(id);
    }

    @GetMapping("employee/{id}")
    @CrossOrigin
    public Employee findById(@PathVariable long id) {
        return employeeService.findById(id);
    }

}
