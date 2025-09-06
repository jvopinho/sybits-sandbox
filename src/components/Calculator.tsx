import { Button, Checkbox, Col, Form, Input, Modal, Row, Space, type InputRef } from 'antd'
import type React from 'react'
import { useTheme } from 'styled-components'
import { ModalWrapper } from './Calculator.styles'
import { useFlags } from '../hooks/useFlags'
import { useForm } from 'antd/es/form/Form'
import { bitfields, bit } from '../lib/sybits' 
import { useEffect, useRef } from 'react'

export const Calculator: React.FC<{ closeModal: () => void, isOpen: boolean }> = (props) => {
    const theme = useTheme()
    const {flags} = useFlags()
    const [form] = useForm()
    const input = useRef<InputRef>(null)
    // const [bits, setBits] = useState<bigint | null>(null)
    const Bitfield = bitfields.create(Object.fromEntries(
        flags.map(flag => ([flag.name, bit(flag.value)]))
    ))
            
    const calculatorFlags = new Bitfield(
        flags
            .filter(flag => flag.isDefault)
            .reduce((prev, current) => prev | bit(current.value), 0n)
    )

    console.log(calculatorFlags);
    
    useEffect(() => {
        console.log(calculatorFlags);
        console.log('render');
        // setBits(calculatorFlags.bits)
    }, [])

    const onUpdate = () => {
        console.log(form.getFieldsValue())
        if(input.current && input.current.input) {
            input.current.input.value = calculatorFlags.bits.toString()
        }
    }

    const toggleBit = (bit: bigint) => {
        if(calculatorFlags.has(bit)) {
            calculatorFlags.remove(bit)
        } else {
            calculatorFlags.add(bit)
        }
        // setBits(calculatorFlags.bits)
    }

    return (
        <ModalWrapper>
            <Modal
                title='Flags Calculator'
                open={props.isOpen}
                footer={[
                    <Button key="back" type={'primary'} onClick={props.closeModal}>
                        Close
                    </Button>
                ]}
                styles={{
                    content: {
                        color: theme['text-100'],
                        backgroundColor: theme['flow-100'],
                    },
                    header: {
                        color: theme['flow-100'],
                        backgroundColor: '#1677ff',
                        padding: '0 15px'
                    },
                }}
                closeIcon={false}
            >
                <p>Need some help with bit math? Use the tool below to calculate the flags integer.</p>
                <br />
                <Form
                    form={form}
                    onChange={(ev) => console.log('aaaaa', ev)}
                >
                    <Space.Compact style={{ width: '100%' }}>
                        <Form.Item 
                            style={{ width: '100%' }} 
                            name="flag_name"
                            rules={[{ required: true }]} 
                            label={
                                <label style={{ color: theme['text-60'] }}>Flags Integer</label>
                            }
                        >
                            <Input
                                className={'flags_input'}
                                defaultValue={calculatorFlags.bits.toString()}
                                variant='filled'
                                style={{
                                    padding: '5px',
                                    color: theme['text-80'],
                                    fontFamily: 'Arial',
                                    border: `${theme['ui-10']} 2px solid`,
                                }}
                                onKeyDown={event => {
                                    if(!/^\d$/.test(event.key) && event.key.toLowerCase() != 'backspace') {
                                        event.preventDefault()
                                    }
                                }}
                                ref={input}
                            />
                        </Form.Item>
                    </Space.Compact>

                    <Form.Item>
                        <Checkbox.Group
                            onChange={onUpdate}
                        >
                            <Row>
                                {flags
                                    .sort((a, b) => Number(a.bitValue - b.bitValue))
                                    .map(flag => (
                                        <Col span={12}>
                                            <Checkbox 
                                                className={'calculator_flag_checkbox'} 
                                                value={bit(flag.value)} 
                                                title={`1n << ${flag.value}n`} 
                                                onChange={() => toggleBit(bit(flag.value))}
                                                defaultChecked={calculatorFlags.has(bit(flag.value))}
                                            >
                                                <p 
                                                    style={{
                                                        fontSize: '16px',
                                                        maxWidth: '200px', 
                                                        overflow: 'hidden', 
                                                        whiteSpace: 'nowrap', 
                                                        textOverflow: 'ellipsis'
                                                    }}
                                                    title={`1n << ${flag.value}n | ${flag.name}`}
                                                >
                                                    {flag.name}
                                                </p>
                                            </Checkbox>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </Checkbox.Group>
                    </Form.Item>
                </Form>
            </Modal>
        </ModalWrapper>
    )
}