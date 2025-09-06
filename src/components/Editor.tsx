import type React from 'react';
import { EditorAddFlagContainer, EditorCalculateContainer, EditorContainer, EditorHeader, EditorTable, EditorTableWrapper } from './Editor.styles';
import { Button, Checkbox, Form, Input, Space } from 'antd';
import { useTheme } from 'styled-components';
import { DeleteFilled } from '@ant-design/icons';
import { useForm } from 'antd/es/form/Form';
import { useFlags } from '../hooks/useFlags';

const ColumnSpace = () => <td style={{width: '2%'}} />
const RowSpace = () => <div style={{height: '2px'}} />

export const EditorSection: React.FC = () => {
  const {flags, addFlag} = useFlags()

  const theme = useTheme()
  const [form] = useForm()

  const onFinish = (data: { flag_name: string }) => {
    addFlag(data.flag_name, false)
  }

  return (
    <EditorContainer>
      <EditorHeader>
        <h1>Editor</h1>
      </EditorHeader>

      <EditorTableWrapper>
        <EditorTable>
          <thead>
            <tr style={{borderBottom: `${theme['ui-15']} 2px solid;`}}>
              <td style={{width: '1%'}}><strong>Delete</strong></td>
              <ColumnSpace />
              <td style={{width: '50%', textAlign: 'left'}}><strong>Flag</strong></td>
              <td style={{width: '10%'}}><strong>Value</strong></td>
              <ColumnSpace />
              <td style={{width: '11%'}}><strong>Is Default</strong></td>
            </tr>
          </thead>

          <RowSpace />
          <RowSpace />

          <tbody>
            {flags.map((flag, i) => (
              <>
                <tr>
                  <td><DeleteFilled /></td>
                  <ColumnSpace />
                  <td className={'flag-name'}>
                    <Input 
                      defaultValue={flag.name}
                      variant='borderless'
                      style={{
                        padding: '0',
                        color: theme['text-80'],
                        fontFamily: 'Arial',
                      }} 
                    />
                  </td>
                  <td className={'flag-value'} title={`${flag.bitValue}`}>{`1n << ${flag.value}`}</td>
                  <ColumnSpace />
                  <td className={'flag-is-default'}>
                    <Checkbox style={{height: '15px'}} checked={flag.isDefault} />
                  </td>
                </tr>

                {flags[i + 1] && <RowSpace />}
              </>
            ))}
          </tbody>
        </EditorTable>
      </EditorTableWrapper>
      <EditorAddFlagContainer>
        <Form
          form={form}
          onFinish={onFinish}
        >
          <Space.Compact style={{ width: '100%' }}>
            <Form.Item style={{ width: '100%' }} name="flag_name" rules={[{ required: true }]}>
              <Input
                defaultValue={'Teste 2'}
                variant='filled'
                style={{
                  padding: '5px',
                  color: theme['text-80'],
                  fontFamily: 'Arial',
                }}
              />
            </Form.Item>
            <Form.Item>
              <Button 
                type="primary"
                htmlType='submit'
              >
                Add
              </Button>
            </Form.Item>
          </Space.Compact>
        </Form>
      </EditorAddFlagContainer>

      <EditorCalculateContainer>
        <Button
          type="primary"
          style={{
            justifyContent: 'center'
          }}
        >
          Calculator
        </Button>
      </EditorCalculateContainer>
    </EditorContainer>
  )
}