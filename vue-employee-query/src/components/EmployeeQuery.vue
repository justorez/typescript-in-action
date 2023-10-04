<template>
    <div class="employee-query">
        <input placeholder="姓名" v-model.trim="tempName" />
        <select v-model.number="tempSelected">
            <option value="0">部门</option>
            <option
                v-for="option in department"
                :value="option.departmentId"
                :key="option.departmentId"
            >
                {{ option.department }}
            </option>
        </select>
        <button @click="query">查询</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { PropType } from 'vue'

interface Department {
    department: string
    departmentId: number
}

interface QueryParams {
    name: string
    departmentId: number
}

export default defineComponent({
    props: {
        name: {
            type: String,
            default: ''
        },
        selected: {
            type: Number,
            default: 0
        },
        department: {
            type: Array as PropType<Department[]>,
            default: () => []
        }
    },
    emits: {
        query: (payload: QueryParams) => {
            // 执行运行时校验
            // return payload.departmentId >= 0 
        }
    },
    data() {
        return {
            tempName: this.name,
            tempSelected: this.selected
        }
    },
    methods: {
        query() {
            this.$emit('query', {
                name: this.tempName,
                departmentId: this.tempSelected
            })
        }
    }
})

// import { Vue, Component, Prop } from 'vue-property-decorator'
// @Component
// export default class EmployeeQuery extends Vue {
//     @Prop({ type: String, default: '' })
//     name!: string

//     @Prop({ type: Number, default: 0 })
//     selected!: number

//     @Prop({
//         type: Array,
//         default: () => []
//     })
//     department!: { department: string, departmentId: number }[]

//     tempName: string = this.name
//     tempSelected: number = this.selected

//     query() {
//         this.$emit('query', {
//             name: this.tempName,
//             departmentId: this.tempSelected
//         })
//     }
// }
</script>

<style scoped>
.employee-query {
    display: flex
}
input, select {
    margin-right: 10px
}
</style>