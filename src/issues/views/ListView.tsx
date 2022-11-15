import { Col, Row } from 'antd';
import { useState } from 'react';
import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';


export const ListView = () => {
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);

  function onChangeLabel(label: string) {
    selectedLabels.includes(label) ?
      setSelectedLabels(selectedLabels.filter(item => item !== label)) :
      setSelectedLabels([...selectedLabels, label])
  }

  return (
    <Row style={{ marginTop: '10px' }}>
      <Col span={10}>
        <IssueList />
      </Col>

      <Col span={12}>
        <LabelPicker onChange={onChangeLabel} selectLabels={selectedLabels} />
      </Col>
    </Row>
  )
}
