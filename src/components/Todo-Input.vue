<script setup>
    defineProps({
        modelValue: {
            type: String,
            required: true,
        },
    });
    defineEmits(['update:modelValue', 'add-item']);
</script>

<template>
    <div class="todo--input">
        <input
            type="text"
            :value="modelValue"
            placeholder="Enter your todo item and press enter"
            aria-label="Todo input"
            @input="$emit('update:modelValue', $event.target.value)"
            @keyup.enter="$emit('add-item')"
        />
    </div>
</template>
