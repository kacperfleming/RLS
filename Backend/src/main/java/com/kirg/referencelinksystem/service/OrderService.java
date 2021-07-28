package com.kirg.referencelinksystem.service;

import com.kirg.referencelinksystem.data.OrderRepository;
import com.kirg.referencelinksystem.entity.OrderEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    private OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }

    public List<OrderEntity> findAllOrders() {
        return orderRepository.findAll();
    }

    public OrderEntity saveOrder(OrderEntity orderEntity) {
        return orderRepository.save(orderEntity);
    }

    public Optional<OrderEntity> findOrderById(Long id) {
        return orderRepository.findById(id);
    }

    public boolean existsOrderById(Long id) {
        return orderRepository.existsById(id);
    }

    public void deleteOrderById(Long id) {
        orderRepository.deleteById(id);
    }
}
