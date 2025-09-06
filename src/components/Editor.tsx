import type React from 'react';
import { EditorAddFlagContainer, EditorCalculateContainer, EditorContainer, EditorHeader, EditorTableWrapper } from './Editor.styles';
import { Button, Form, Input, Switch } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { DeleteFilled, PlusOutlined } from '@ant-design/icons';

type Props = {
  handleOpenCalculator: () => void
}

export const EditorSection: React.FC<Props> = ({ handleOpenCalculator }: Props) => {
  // const {flags, addFlag} = useFlags()

  // const theme = useTheme()
  const [form] = useForm();
  const flags = Form.useWatch("flags", form) ?? [];

  const onFinish = (values: any) => {
    console.log(values)
  }

  return (
    <EditorContainer>
      <EditorHeader>
        <h1>Editor</h1>
      </EditorHeader>

      <EditorTableWrapper>
        <Form form={form} onFinish={onFinish}>
          <Form.List name={"flags"}>
            {(fields, { add, remove }) => (<>
              {fields.map(({ key, name }) => (<>
                <EditorAddFlagContainer key={key}>
                  <Form.Item name={[name, "key"]}>
                    <Input placeholder="Digite aqui sua key" />
                  </Form.Item>
                  <Form.Item hidden name={[name, "value"]} initialValue={name} />
                  <span>
                    {"1n << "}
                    {!!flags[name]
                      ? flags[name].value
                      : 0
                    }{"n"}
                  </span>
                  <div className="end">
                    <Form.Item name={[name, "isDefault"]}>
                      <Switch />
                    </Form.Item>
                    <Button block onClick={() => remove(name)}>
                      <DeleteFilled />
                    </Button>
                  </div>
                </EditorAddFlagContainer>
              </>))}

              <Form.Item>
                <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                  Adicionar flag
                </Button>
              </Form.Item>
            </>)}
          </Form.List>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </EditorTableWrapper>

      <EditorCalculateContainer>
        <Button
          type="primary"
          style={{
            justifyContent: 'center'
          }}
          onClick={() => handleOpenCalculator()}
        >
          Calculator
        </Button>
      </EditorCalculateContainer>
    </EditorContainer>
  )
}