<template>
    <div>
        <Hello />
        <employee-query @query="getParam" :department="department" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Hello from './components/Hello.vue'
import EmployeeQuery from 'vue-employee-query'

export default defineComponent({
    components: {
        Hello,
        EmployeeQuery
    },
    data() {
        return {
            department: [
                { department: '技术部', departmentId: 1 },
                { department: '产品部', departmentId: 2 },
                { department: '市场部', departmentId: 3 },
                { department: '运营部', departmentId: 4 }
            ]
        }
    },
    methods: {
        getParam(param: any) {
            console.log(param)
        }
    }
})
</script>
