package com.kirg.referencelinksystem.controller;

import com.kirg.referencelinksystem.entity.OrderEntity;
import com.kirg.referencelinksystem.service.OrderService;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/order")
public class OrderController {

    private OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping
    public List<OrderEntity> findAllOrders() {
        return orderService.findAllOrders();
    }

    @PostMapping
    public OrderEntity saveOrder(@Valid @RequestBody OrderEntity orderEntity) {
        return orderService.saveOrder(orderEntity);
    }

    @GetMapping("/{id}")
    public Optional<OrderEntity> findOrderById(@PathVariable Long id) {
        return orderService.findOrderById(id);
    }


    @DeleteMapping("/{id}")
    public void deleteOrderById(@PathVariable Long id) {
        orderService.deleteOrderById(id);
    }
}
