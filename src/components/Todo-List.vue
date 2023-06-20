<script setup>
    import { computed } from 'vue';

    const props = defineProps({
        todoList: {
            type: Array,
            required: true,
        },
    });

    const hasItem = computed(() => Boolean(props.todoList.length));
</script>

<template>
    <div class="todo--list">
        <ul v-if="hasItem">
            <li v-for="item in todoList" :key="item.id">
                <label :for="item.id">
                    <input
                        :id="item.id"
                        v-model="item.isCompleted"
                        class="todo--list-checkbox"
                        type="checkbox"
                    />
                    <span
                        class="todo--list-description"
                        :class="{ 'text-line-through': item.isCompleted }"
                    >
                        {{ item.description }}
                    </span>
                </label>
            </li>
        </ul>
        <div v-else class="text-center">👋 You have no item on the list.</div>
    </div>
</template>
