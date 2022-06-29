package com.ironhack.jose.service;

import com.ironhack.jose.models.Employee;
import com.ironhack.jose.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    EmployeeRepository employeeRepository;

    public List<Employee> findAll() {
        return employeeRepository.findAll();
    }

    public void deleteEmployee(long id) {
        if(!employeeRepository.findById(id).isPresent()){
            throw  new ResponseStatusException(HttpStatus.NOT_FOUND,"Employee not found");
        }
        employeeRepository.delete(employeeRepository.findById(id).get());
    }
    public Employee findById(long id){
        if(!employeeRepository.findById(id).isPresent()) throw new ResponseStatusException(HttpStatus.NOT_FOUND);
      return   employeeRepository.findById(id).get();
    }

}
