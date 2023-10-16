package com.foodorder.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.foodorder.entities.Customer;
import com.foodorder.models.LoginDTO;
import com.foodorder.models.Response;
import com.foodorder.services.CustomerService;

@CrossOrigin
@RestController
@RequestMapping("/api/customers")
public class CustomerController {
	
	@Autowired CustomerService customerService;
	
	@PostMapping
	public ResponseEntity<?> save(@RequestBody Customer cust) {	
		if(customerService.verifyUserId(cust.getUserid())) {
			return Response.error("Email already registered");
		}
		customerService.registerCustomer(cust);
		return Response.success(cust);
	}
	
	@GetMapping
	public List<Customer> findAllCustomers() {
		List<Customer> result = customerService.allCustomers();
		return result;
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> findCustomerById(@PathVariable("id") int id) {
		Customer result = customerService.findById(id);
		return Response.success(result);
	}
	
	@PostMapping("/validate")
	public ResponseEntity<?> validateUser(@RequestBody LoginDTO dto) {
		System.out.println(dto);
		Customer user=customerService.validate(dto.getUserid(),dto.getPwd());
		if(user!=null)
			return Response.success(user);
		else
			return Response.status(HttpStatus.NOT_FOUND);
	}
	
	@PutMapping("{id}")
	public ResponseEntity<?> updateProfile(@RequestBody Customer cust,@PathVariable("id") int id) {
		customerService.updateProfile(cust);
		return Response.status(HttpStatus.OK);
	}

}
