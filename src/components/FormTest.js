import React, { Component } from 'react'
import { Form, Button, Input, Icon, Checkbox } from 'antd'
import './formtest.scss'

class NormalLoginForm extends Component {
    // 定义事件
    handleSubmit = e => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if(!err) {
                console.log('Received values of form: ', values);
            }
        })
    }
    // render
    render() {
        // getFieldDecorator:装饰器工厂，字段装饰器能够生成一个装饰器
        // 设置字段名称，校验规则
        const { getFieldDecorator } = this.props.form
        return (
           <Form onSubmit={this.handleSubmit} className='login-form'>
                <Form.Item>
                    {
                        getFieldDecorator('username', {
                            rules: [{ required: true, message: 'Please input your username!' }]
                        })(
                            <Input
                               prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                               placeholder='Username'
                            />
                        )
                    }
                </Form.Item>
                <Form.Item>
                    {
                        getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }]
                        })(
                            <Input
                               prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                               type="password"
                               placeholder="Password"
                            />
                        )
                    }
                </Form.Item>
                <Form.Item>
                    {
                        getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(<Checkbox>Remember me</Checkbox>)
                    }
                    <a className='login-form-forgot' href='#'>
                        Forgot password
                    </a>
                    <Button type='primary' htmlType='submit' className='login-form-button'>
                        Log in
                    </Button>
                    Or <a href="">register now!</a>
                </Form.Item>
           </Form>
        )
    }
}
// 经过包装后，表单拥有了额外能力
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm)

export default WrappedNormalLoginForm
// export default function FormTest() {
//     return (
//         <div>
            
//         </div>
//     )
// }
