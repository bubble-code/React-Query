
import { Button, Col, Row } from 'antd';
import { Outlet } from 'react-router-dom';
// import './App.css';



export const App = () => {

  return (
    <Row align={'middle'} justify={'space-around'}>
      <Col span={24}>
        <h1>Git Issues <small>Seguimiento de Problemas</small> </h1>
        <Outlet />
      </Col>
    </Row>
  )
}

