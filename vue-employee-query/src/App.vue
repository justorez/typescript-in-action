<template>
    <employee-query @query="getParam" :department="department" />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import EmployeeQuery from './components/EmployeeQuery.vue'

export default defineComponent({
    components: {
        EmployeeQuery
    },
    template: ``,
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
