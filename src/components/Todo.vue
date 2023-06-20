<script setup>
    import { reactive, watchEffect } from 'vue';
    import TodoItemModel from '../models/todo-item-model';
    import TodoInput from './Todo-Input.vue';
    import TodoList from './Todo-List.vue';

    const STORAGE_KEY = 'vue-app-todo-list';
    const todoListFromStorage = JSON.parse(
        window.localStorage.getItem(STORAGE_KEY)
    );

    const state = reactive({
        input: '',
        todoList: todoListFromStorage || [],
    });

    function addItem() {
        if (!state.input) {
            // eslint-disable-next-line no-alert
            alert('Please enter a value');
            return;
        }
        state.todoList.unshift(
            new TodoItemModel({
                description: state.input,
            })
        );
        state.input = '';
    }

    watchEffect(() => {
        window.localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(state.todoList)
        );
    });
</script>

<template>
    <div class="todo">
        <TodoInput v-model="state.input" @add-item="addItem" />
        <TodoList :todo-list="state.todoList" />
    </div>
</template>
