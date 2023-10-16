package com.foodorder.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foodorder.daos.OrderDao;
import com.foodorder.entities.Customer;
import com.foodorder.entities.Order;

@Service
public class OrderServiceImpl implements OrderService {

	@Autowired OrderDao dao;
	
	@Override
	public Order saveOrder(Order order) {
		// TODO Auto-generated method stub
		return dao.save(order);
	}

	@Override
	public List<Order> getAllOrders() {
		// TODO Auto-generated method stub
		return dao.findAll();
	}

	@Override
	public List<Order> getCustomerOrders(Customer customer) {
		// TODO Auto-generated method stub
		return dao.findByCustomer(customer);
	}

	@Override
	public Order findById(int id) {
		// TODO Auto-generated method stub
		return dao.getById(id);
	}

	
}