import { InfoCircleOutlined, MessageFilled } from '@ant-design/icons';


export const IssueItem = () => {
    return (
        <div className="card mb-2 issue">
            <div className="card-body d-flex align-items-center">

                <InfoCircleOutlined size={30} color="red" />
                {/* <FiCheckCircle size={30} color="green" /> */}

                <div className="d-flex flex-column flex-fill px-2">
                    <span>Suggestion: why not make accessing and changing the state possible globally?</span>
                    <span className="issue-subinfo">#25581 opened 2 days ago by <span className='fw-bold'>segfaulty1</span></span>
                </div>

                <div className='d-flex align-items-center'>
                    <img src="https://avatars.githubusercontent.com/u/1933404?v=4" alt="User Avatar" className="avatar" />
                    <span className='px-2'>2</span>
                    <MessageFilled />
                </div>

            </div>
        </div>
    )
}
