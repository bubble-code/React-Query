import { Card, Col, Row } from 'antd';
import { IssueItem } from './IssueItem';

export const IssueList = () => {
    return (
        <Col>
            {
                [1, 2, 3].map(issue => (
                    <IssueItem key={issue} />
                ))

            }
        </Col>
    )
}
