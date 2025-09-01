package com.todo.todoapp.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String task;

    private boolean completed;

    private String dueDate;  // Format: YYYY-MM-DD

    private String priority; // "Low", "Medium", "High"
}
