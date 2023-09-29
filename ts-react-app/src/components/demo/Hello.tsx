import { Button } from 'antd'

interface Greeting {
    name: string
    firstName: string
    lastName: string
}

const Hello = (props: Greeting) => <Button>Hello {props.name}</Button>

// 不建议使用 React.FC
// const Hello: React.FC<Greeting> = ({
//     name,
//     firstName,
//     lastName,
//     children
// }) => <Button>Hello {name}</Button>

Hello.defaultProps = {
    firstName: '',
    lastName: ''
}

export default Hello
