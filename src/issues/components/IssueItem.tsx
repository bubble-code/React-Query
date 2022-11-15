import { InfoCircleOutlined, MessageFilled } from '@ant-design/icons';
import { Card } from 'antd';


export const IssueItem = () => {
    return (
        <Card title={<InfoCircleOutlined size={30} color="red" />} hoverable style={{ width: 240, backgroundSize: 'cover', marginTop: 10 }}
            cover={<img alt="example" src="https://avatars.githubusercontent.com/u/1933404?v=4" style={{ width: '100%' }} />}>
            <MessageFilled />
            <div >
                <span>Suggestion: why not make accessing and changing the state possible globally?</span>
                <span className="issue-subinfo">#25581 opened 2 days ago by <span className='fw-bold'>segfaulty1</span></span>
            </div>
        </Card>
    )
}
