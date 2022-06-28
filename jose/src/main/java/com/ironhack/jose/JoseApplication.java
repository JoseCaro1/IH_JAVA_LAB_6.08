package com.ironhack.jose;

import com.ironhack.jose.models.Employee;
import com.ironhack.jose.repository.EmployeeRepository;
import com.ironhack.jose.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class JoseApplication implements CommandLineRunner {

	@Autowired
	EmployeeRepository employeeRepository;
	public static void main(String[] args) {
		SpringApplication.run(JoseApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
		employeeRepository.save(new Employee("Jose","123456","1235","Assitant","Hola"));
		employeeRepository.save(new Employee("Jaume","123456","1235","Assitant","Hola"));
	}
}
