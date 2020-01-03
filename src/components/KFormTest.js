import React, { Component } from 'react'
import { Input, Button } from 'antd'

// 创建高阶组件
function kFormCreate(Comp) {
    return class extends Component {
        constructor(props) {
            super(props)
            this.options = {}
            this.state = {}
            this.getFieldDec = this.getFieldDec.bind(this)
        }
        // 全局校验
        validateFields = (cb) => {
            console.log(this.state)
            console.log('validate!')
            const rets = Object.keys(this.options).map(field => {
                return this.validateField(field)
            })
            const ret = rets.every(v => v)
            // 将校验结果传出去，并传递数据
            cb(ret, this.state)
        }

        // 单项校验
        validateField = (field) => {
            // 校验规则
            const { rules } = this.options[field]
            // console.log(rules)
            // 校验 result如果是false校验失败
            const result = !rules.some(rule => {
                if(rule.required) {
                    // 获取校验项的值
                    if(!this.state[field]) {
                        // 必填项失败
                        // 错误信息设置
                        this.setState({
                            [field + 'Message']: rule.message
                        })
                        return true
                    }
                }
                return false
            })
            // 若校验成功，清理错误信息
            if(result) {
                this.setState({
                    [field + 'Message']: ''
                })
            }
            return result
            
        }
        // 变更处理
        handleChange = (e) => {
            const { name, value } = e.target
            this.setState({
                [name]: value
            }, () => {
                this.validateField(name)
            })
        }
        getFieldDec(field, option) {
            this.options[field] = option
            // 返回一个装饰器(高阶组件)
            return (InputComp) => {
                return (
                    <div>
                        {
                            React.cloneElement(InputComp, {
                                name: field, // 控件name
                                value: this.state[field] || '',
                                onChange: this.handleChange // 输入值变化的监听
                            })
                        }
                        {/* 校验错误信息 */}
                        {
                            !this.state[field] && (
                                <p style={{color: 'red'}}>{this.state[field + 'Message']}</p>
                            )
                        }
                        {/* <InputComp></InputComp> */}
                    </div>
                )
            }
        }
        render() {
            return (
                <Comp 
                    {...this.props}
                    getFieldDec={this.getFieldDec}
                    validateFields={this.validateFields}
                />
            )
        }
    }
}

@kFormCreate
class KFormTest extends Component {

    onLogin = () => {
        //  先去校验
        this.props.validateFields((isValid, data) => {
            if(isValid) {
                console.log('登录中！！！！')
            } else {
                alert('校验失败')
            }
        })
    }
    render() {
        const { getFieldDec } = this.props
        return (
            <div>
                {
                    getFieldDec('username', {
                        rules: [{ required: true, message: 'Please input your Password!' }]
                    })(
                        <Input
                            // prefix={
                            //     <Icon type="user"style={{ color: 'rgba(0,0,0,.25)' }} />
                            // }
                            placeholder='Username'
                        />
                    )
                }
                {
                    getFieldDec('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }]
                    })(
                        <Input type='password' />
                    )
                }
                <Button onClick={this.onLogin}>登录</Button>
            </div>
        )
    }
    
}

export default KFormTest
