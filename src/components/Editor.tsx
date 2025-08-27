import type React from 'react';
import { EditorContainer, EditorHeader, EditorTable } from './Editor.styles';
import { Checkbox, Input } from 'antd';
import { useTheme } from 'styled-components';
import { DeleteFilled } from '@ant-design/icons';

const ColumnSpace = () => <td style={{width: '2%'}} />
const RowSpace = () => <div style={{height: '2px'}} />

export const EditorSection: React.FC = () => {
  const theme = useTheme()

  return (
    <EditorContainer>
      <EditorHeader>
        <h1>Editor</h1>
      </EditorHeader>

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
          <tr style={{marginTop: '10px'}}>
            <td></td>
            <ColumnSpace />
            <td className={'flag-name'}>
              <Input 
                defaultValue={'Teste'}
                variant='borderless'
                style={{
                  padding: '0',
                  color: theme['text-80'],
                  fontFamily: 'Arial',
                }} 
              />
            </td>
            <td className={'flag-value'} title={'1n'}>{'1n << 0n'}</td>
            <ColumnSpace />
            <td className={'flag-is-default'}>
              <Checkbox style={{height: '15px'}} />
            </td>
          </tr>

          <RowSpace />

          <tr>
            <td><DeleteFilled /></td>
            <ColumnSpace />
            <td className={'flag-name'}>
              <Input 
                defaultValue={'Teste 2'}
                variant='borderless'
                style={{
                  padding: '0',
                  color: theme['text-80'],
                  fontFamily: 'Arial',
                }} 
              />
            </td>
            <td className={'flag-value'} title={'1n'}>{'1n << 0n'}</td>
            <ColumnSpace />
            <td className={'flag-is-default'}>
              <Checkbox style={{height: '15px'}} />
            </td>
          </tr>
        </tbody>
      </EditorTable>
    </EditorContainer>
  )
}