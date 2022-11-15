import { FC } from 'react';
import { useLabel } from "../../hook/useLabel";
import { Button, Col, Row, Tag } from "antd";
import { CheckOutlined } from "@ant-design/icons";


interface Props {
    selectLabels: string[];
    onChange: (label: string) => void;
}

export const LabelPicker: FC<Props> = ({ selectLabels, onChange }) => {
    const { getLabelQuery } = useLabel();

    if (getLabelQuery.isLoading) {
        return <div>Loading...</div>
    }
    const handleChange = (label: string) => {
        console.log(label);
        onChange(label);
    }

    return (
        <Col span={24}>
            <Row justify={'space-between'}>
                {getLabelQuery.data?.map((label) => {
                    return (<Tag
                        color={`${selectLabels.includes(label.name) ? '#000' : `#${label.color}`}`}
                        style={{ borderRadius: 5, margin: 3, cursor: 'pointer' }}
                        key={label.id}
                        className={`${selectLabels.includes(label.name) ? 'label-active' : ''}`}
                        onClick={() => handleChange(label.name)}
                        icon={selectLabels.includes(label.name) ? <CheckOutlined /> : null}
                    >
                        {label.name}
                    </Tag>
                    )
                })}
            </Row>
            <Button type="primary" onClick={() => getLabelQuery.refetch()}>Primary</Button>
        </Col>
    )
} 
